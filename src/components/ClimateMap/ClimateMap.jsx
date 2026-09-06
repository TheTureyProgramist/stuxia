import React, { useState, useMemo, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes, css } from "styled-components";
import { GoogleGenerativeAI } from "@google/generative-ai";
import localforage from "localforage";
// Ctrl + Shift + M: Активувати/деактивувати мапу
// Ctrl + Shift + F: Відкрити на весь екран
// Ctrl + Shift + P: Відкрити/закрити міні-плеєр
// Ctrl + Shift + W: Перемкнути джерело (Windy / Ventusky)
// Ctrl + Shift + S: Відкрити поле ШІ пошуку
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AihelpTitle = styled.div`
  font-size: 22px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#111111")};
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  display: inline-flex;
  align-items: center;
  padding: 10px 24px;
  border-radius: 10px;
  transition: all 0.3s ease;
  z-index: 100;
  ${(props) =>
    props.$isStickyBgMode
      ? css`
          background: ${
            props.$isDarkMode
              ? "rgba(15, 15, 25, 0.75)"
              : "rgba(255, 255, 255, 0.75)"
          };
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid
            ${
              props.$isDarkMode
                ? "rgba(255, 255, 255, 0.15)"
                : "rgba(0, 0, 0, 0.15)"
            };
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        `
      : css`
          background: ${
            props.$isDarkMode
              ? "rgba(255, 255, 255, 0.05)"
              : "rgba(0, 0, 0, 0.05)"
          };
          border: 1px solid
            ${
              props.$isDarkMode
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.1)"
            };
        `}
`;

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 10;
  max-width: 1200px;
  aspect-ratio: 16 / 6.6;
  min-height: 430px;
  margin: 0 auto;
  border-radius: ${(props) => (props.$isFullscreen ? "0" : "24px")};
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  border: ${(props) =>
    props.$isFullscreen ? "none" : "1px solid rgba(255, 255, 255, 0.15)"};
  background: #1a1a1a;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
`;

const Controls = styled.div`
  display: none;
`;

const MobileSettingsButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  margin: 0 5px 5px;
  padding: 11px 16px;
  border: 1px solid rgba(255, 179, 108, 0.45);
  border-radius: 12px;
  background: rgba(18, 18, 28, 0.88);
  color: #ffb36c;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.22);
`;

const MobileSettingsOverlay = styled.div`
  display: flex;
  position: absolute;
  inset: 0;
  z-index: 30;
  align-items: center;
  justify-content: center;
  padding: 7px;
  background: rgba(5, 8, 14, 0.14);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
`;

const MobileSettingsPanel = styled.div`
  width: min(100%, 1200px);
  max-height: calc(100% - 8px);
  overflow-y: auto;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 18px;
  background: rgba(23, 37, 71, 0.74);
  color: white;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.55);
`;

const MobileSettingsHeading = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;

  h2 {
    margin: 0;
    font-size: 19px;
  }

  p {
    margin: 4px 0 0;
    color: rgba(255, 255, 255, 0.64);
    font-size: 12px;
  }
`;

const MobileSetting = styled.button`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3px 12px;
  width: 100%;
  margin-top: 8px;
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.07);
  color: white;
  cursor: pointer;
  text-align: left;

  &:hover {
    border-color: rgba(255, 179, 108, 0.65);
    background: rgba(255, 179, 108, 0.14);
  }

  strong {
    font-size: 13px;
  }

  span {
    grid-column: 1;
    color: rgba(255, 255, 255, 0.62);
    font-size: 11px;
    line-height: 1.35;
  }

  kbd {
    grid-column: 2;
    grid-row: 1 / span 2;
    align-self: center;
    padding: 4px 7px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    color: #ffcf9e;
    font-size: 10px;
    white-space: nowrap;
  }
`;

const MobileSettingsClose = styled.button`
  width: 60px;
  font-size: 41px;
  border-radius: 10px;
  background: transparent;
  top: 8px;
  right: 10px;
  position: absolute;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }
`;

const StyledIframe = styled.iframe`
  border: none;
  width: 100%;
  height: 100%;
  pointer-events: ${(props) => (props.$isReady ? "auto" : "none")};
  transition: opacity 0.5s ease;
  opacity: ${(props) => (props.$isLoading ? "0" : "1")};
`;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 1;
  pointer-events: none;

  .spinner {
    display: inline-block;
    animation: ${spin} 2s linear infinite;
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

const ActionButton = styled.button`
  background: ${(props) =>
    props.$active
      ? "linear-gradient(135deg, #00c6ff, #0072ff)"
      : "rgba(255, 255, 255, 0.08)"};
  color: #ffffff;
  border: 1px solid
    ${(props) =>
      props.$active ? "rgba(0, 198, 255, 0.6)" : "rgba(255, 255, 255, 0.15)"};
  padding: 7px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.25s ease;
  text-align: left;
  white-space: nowrap;
  box-shadow: ${(props) =>
    props.$active ? "0 4px 12px rgba(0, 114, 255, 0.3)" : "none"};

  &:hover {
    background: linear-gradient(135deg, #00c6ff, #0072ff);
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 114, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;



const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 6px;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SearchInput = styled.input`
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 12px;
  outline: none;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const MiniPlayerWindow = styled.div`
  position: fixed;
  z-index: 2200;
  display: flex;
  flex-direction: column;
  background: rgba(10, 15, 24, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(12px);
  user-select: none;
`;

const MiniPlayerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  cursor: move;
`;

const MiniHeaderTitle = styled.div`
  color: white;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
`;

const MiniHeaderButtons = styled.div`
  display: flex;
  gap: 6px;
`;

const MiniPlayerBody = styled.div`
  position: relative;
  flex: 1;
  min-height: 220px;
`;

const ResizeHandle = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 18px;
  height: 18px;
  cursor: nwse-resize;
  background: linear-gradient(
    135deg,
    transparent 50%,
    rgba(255, 255, 255, 0.35) 50%
  );
`;

const ClimateMap = ({ isDarkMode, isStickyBgMode }) => {
  const [lat, setLat] = useState(48.379);
  const [lon, setLon] = useState(31.165);
  const [zoom, setZoom] = useState(5);
  const [isAiSearchOpen, setIsAiSearchOpen] = useState(false);
  const [isControlsOpen, setIsControlsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [geminiKey, setGeminiKey] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [overlay, setOverlay] = useState("wind");
  const [isMapActive, setIsMapActive] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMiniPlayerOpen, setIsMiniPlayerOpen] = useState(false);
  const [pipWindow, setPipWindow] = useState(null);
  const [provider, setProvider] = useState("ventusky");

  const [miniPlayerPosition, setMiniPlayerPosition] = useState(() => {
    if (typeof window === "undefined") return { x: 24, y: 24 };
    return {
      x: Math.max(16, window.innerWidth - 360),
      y: Math.max(16, window.innerHeight - 260),
    };
  });
  const [miniPlayerSize, setMiniPlayerSize] = useState({
    width: 320,
    height: 220,
  });
  const mapWrapperRef = useRef(null);
  const miniPlayerRef = useRef(null);
  const dragStateRef = useRef(null);
  const resizeStateRef = useRef(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedKey = await localforage.getItem("gemini_api_key");
        if (savedKey) setGeminiKey(savedKey);

        const pinnedLoc = await localforage.getItem("pinned_map_location");
        if (pinnedLoc) {
          setLat(pinnedLoc.lat);
          setLon(pinnedLoc.lon);
          setZoom(pinnedLoc.zoom);
          if (pinnedLoc.overlay) setOverlay(pinnedLoc.overlay);
        }
      } catch (error) {
        console.error("Error loading map data:", error);
      }
    };
    loadData();
  }, []);

  const handlePinLocation = async (e) => {
    if (e) e.stopPropagation();
    try {
      await localforage.setItem("pinned_map_location", {
        lat,
        lon,
        zoom,
        overlay,
      });
      alert("Локацію закріплено! Вона завантажиться при наступному вході.");
    } catch (error) {
      console.error("Error pinning location:", error);
    }
  };

  const handleOpenMiniPlayer = async () => {
    if (window.documentPictureInPicture) {
      try {
        const pipWindow = await window.documentPictureInPicture.requestWindow({
          width: 400,
          height: 300,
        });

        pipWindow.document.body.style.margin = "0";
        pipWindow.document.body.style.overflow = "hidden";
        pipWindow.document.body.style.background = "#1a1a1a";

        pipWindow.addEventListener("pagehide", () => {
          setPipWindow(null);
          setIsMiniPlayerOpen(false);
        });

        setPipWindow(pipWindow);
        setIsMiniPlayerOpen(true);
      } catch (err) {
        console.error("PiP API failed:", err);
        setIsMiniPlayerOpen(true);
      }
    } else {
      setIsMiniPlayerOpen(true);
    }
  };

  const handleAiSearch = async (e) => {
    e?.preventDefault();
    if (!searchQuery.trim() || isAiLoading) return;
    if (!geminiKey) {
      alert(
        "API-ключ Gemini не знайдено. Будь ласка, додайте його в налаштуваннях ШІ.",
      );
      return;
    }

    setIsAiLoading(true);
    try {
      const genAI = new GoogleGenerativeAI(geminiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const prompt = `Ти помічник з географії. Користувач шукає локацію. Твоя задача: знайти координати цього місця. 
      Поверни ВИНЯТКОВО валідний JSON без markdown форматування, приклад: {"lat": 48.8566, "lon": 2.3522, "zoom": 6}.
      Запит: ${searchQuery}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      let text = response.text().trim();
      if (text.startsWith("```json")) {
        text = text
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim();
      } else if (text.startsWith("```")) {
        text = text.replace(/```/g, "").trim();
      }

      const data = JSON.parse(text);
      if (Number.isFinite(data.lat) && Number.isFinite(data.lon)) {
        setLat(data.lat);
        setLon(data.lon);
        setSearchQuery("");
        setIsAiSearchOpen(false);
        setIsMapActive(true);
      }
    } catch (error) {
      console.error("AI Search error:", error);
      alert("Не вдалося знайти локацію. Спробуйте змінити запит.");
    } finally {
      setIsAiLoading(false);
    }
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (dragStateRef.current) {
        const { startX, startY, originX, originY } = dragStateRef.current;
        const nextX = Math.max(
          8,
          Math.min(window.innerWidth - 120, originX + event.clientX - startX),
        );
        const nextY = Math.max(
          8,
          Math.min(window.innerHeight - 80, originY + event.clientY - startY),
        );
        setMiniPlayerPosition({ x: nextX, y: nextY });
      }

      if (resizeStateRef.current) {
        const { startX, startY, width, height } = resizeStateRef.current;
        const nextWidth = Math.max(
          260,
          Math.min(window.innerWidth - 24, width + event.clientX - startX),
        );
        const nextHeight = Math.max(
          200,
          Math.min(window.innerHeight - 24, height + event.clientY - startY),
        );
        setMiniPlayerSize({ width: nextWidth, height: nextHeight });
      }
    };

    const handleMouseUp = () => {
      dragStateRef.current = null;
      resizeStateRef.current = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);


  const toggleFullscreen = (targetRef = mapWrapperRef) => {
    if (!document.fullscreenElement) {
      if (targetRef.current?.requestFullscreen) {
        targetRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;
      
      if (e.shiftKey && e.ctrlKey) {
        switch (e.key.toLowerCase()) {
          case 'm':
            e.preventDefault();
            setIsMapActive(prev => !prev);
            break;
          case 'f':
            e.preventDefault();
            toggleFullscreen();
            break;
          case 'p':
            e.preventDefault();
            if (isMiniPlayerOpen) {
               if (pipWindow) pipWindow.close();
               else setIsMiniPlayerOpen(false);
            } else {
               handleOpenMiniPlayer();
            }
            break;
          case 'w':
            e.preventDefault();
            setProvider(p => p === "windy" ? "ventusky" : "windy");
            break;
          case 's':
            e.preventDefault();
            setIsAiSearchOpen(prev => !prev);
            break;
        }
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMiniPlayerOpen, pipWindow]);

  const handleMiniPlayerDragStart = (event) => {
    if (event.target.closest("button")) return;
    event.preventDefault();
    dragStateRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      originX: miniPlayerPosition.x,
      originY: miniPlayerPosition.y,
    };
  };

  const handleMiniPlayerResizeStart = (event) => {
    event.preventDefault();
    event.stopPropagation();
    resizeStateRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      width: miniPlayerSize.width,
      height: miniPlayerSize.height,
    };
  };

  const embedUrl = useMemo(() => {
    if (provider === "windy") {
      return `https://embed.windy.com/embed2.html?lat=${lat}&lon=${lon}&zoom=${zoom}&level=surface&overlay=${overlay}&menu=&message=true&marker=`;
    }

    let vOverlay = overlay;
    if (overlay === "rain") vOverlay = "rain-3h";
    if (overlay === "temp") vOverlay = "temperature";
    if (overlay === "clouds") vOverlay = "cloud-cover";
    return `https://www.ventusky.com/?p=${lat};${lon};${zoom}&l=${vOverlay}`;
  }, [provider, lat, lon, zoom, overlay]);

  useEffect(() => {
    setIsLoading(true);
  }, [provider, lat, lon, zoom, overlay]);

  return (
    <OuterContainer>
      <AihelpTitle $isDarkMode={isDarkMode} $isStickyBgMode={isStickyBgMode}>
        Кліматична мапа
      </AihelpTitle>

      <MobileSettingsButton
        type="button"
        onClick={() => setIsControlsOpen(true)}
        aria-label="Відкрити налаштування Стихії"
      >
        ⚙ Налаштування Стихії
      </MobileSettingsButton>

      <MapWrapper
        ref={mapWrapperRef}
        $isFullscreen={isFullscreen}
        onClick={() => !isMapActive && setIsMapActive(true)}
      >
        <Controls $isOpen={isControlsOpen}>
          {isAiSearchOpen && (
            <SearchContainer onSubmit={handleAiSearch}>
              <SearchInput
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Місто, село..."
                autoFocus
              />
              <ActionButton
                type="submit"
                $active={true}
                disabled={isAiLoading}
                onClick={(e) => e.stopPropagation()}
              >
                {isAiLoading ? "Шукаю..." : "Знайти"}
              </ActionButton>
            </SearchContainer>
          )}

          <ActionButton
            onClick={(e) => {
              e.stopPropagation();
              setIsAiSearchOpen(!isAiSearchOpen);
            }}
          >
          ШІ Пошук
          </ActionButton>

          <ActionButton onClick={handlePinLocation}>
          Закріпити
          </ActionButton>
          
          <ActionButton
            onClick={(e) => {
              e.stopPropagation();
              setProvider("ventusky");
            }}
            $active={provider === "ventusky"}
          >
            Джерело: Ventusky
          </ActionButton>

          <ActionButton
            onClick={(e) => {
              e.stopPropagation();
              setProvider("windy");
            }}
            $active={provider === "windy"}
          >
            Джерело: Windy
          </ActionButton>

          <div
            style={{
              height: "1px",
              background: "rgba(255,255,255,0.2)",
              margin: "4px 0",
            }}
          />

          <ActionButton
            onClick={(e) => {
              e.stopPropagation();
              setIsMapActive(!isMapActive);
            }}
            style={{
              border: isMapActive ? "1px solid #ff4d4d" : "1px solid skyblue",
            }}
          >
            {isMapActive ? "Деактивувати" : "Активувати"}
          </ActionButton>
          <ActionButton
            onClick={(e) => {
              e.stopPropagation();
              toggleFullscreen();
            }}
          >
            {isFullscreen ? "Згорнути" : "На весь екран"}
          </ActionButton>

          <ActionButton
            onClick={(e) => {
              e.stopPropagation();
              if (isMiniPlayerOpen) {
                if (pipWindow) pipWindow.close();
                else setIsMiniPlayerOpen(false);
              } else {
                handleOpenMiniPlayer();
              }
            }}
          >
            {isMiniPlayerOpen ? "Закрити міні-плеєр" : "Міні-плеєр"}
          </ActionButton>
        </Controls>

        {isControlsOpen && (
          <MobileSettingsOverlay onClick={() => setIsControlsOpen(false)}>
            <MobileSettingsPanel onClick={(e) => e.stopPropagation()}>
              <MobileSettingsHeading>
                <div>
                  <h2>Налаштування Стихії</h2>
                  <p>Керуйте картою та її джерелом</p>
                </div>
              <MobileSettingsClose type="button" onClick={() => setIsControlsOpen(false)}>
                ×
              </MobileSettingsClose>
              </MobileSettingsHeading>

              {isAiSearchOpen && (
                <SearchContainer onSubmit={handleAiSearch}>
                  <SearchInput
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Місто, село..."
                    autoFocus
                  />
                  <ActionButton type="submit" $active={true} disabled={isAiLoading}>
                    {isAiLoading ? "Шукаю..." : "Знайти"}
                  </ActionButton>
                </SearchContainer>
              )}

              <MobileSetting type="button" onClick={() => setIsAiSearchOpen(!isAiSearchOpen)}>
                <strong>ШІ-пошук локації</strong>
                <kbd>Ctrl + Shift + S</kbd>
                <span>Знайти місто або місце за допомогою ШІ та перемістити карту.</span>
              </MobileSetting>
              <MobileSetting type="button" onClick={handlePinLocation}>
                <strong>Закріпити локацію</strong>
                <kbd>Без комбінації</kbd>
                <span>Зберегти поточні координати, масштаб і шар для наступного входу.</span>
              </MobileSetting>
              <MobileSetting
                type="button"
                onClick={() => setProvider((current) => current === "windy" ? "ventusky" : "windy")}
              >
                <strong>Змінити джерело: {provider === "windy" ? "Windy" : "Ventusky"}</strong>
                <kbd>Ctrl + Shift + W</kbd>
                <span>Перемикатися між двома погодними сервісами для перегляду карти.</span>
              </MobileSetting>
              <MobileSetting type="button" onClick={() => setIsMapActive(!isMapActive)}>
                <strong>{isMapActive ? "Деактивувати карту" : "Активувати карту"}</strong>
                <kbd>Ctrl + Shift + M</kbd>
                <span>Увімкнути або вимкнути взаємодію з картою та її iframe.</span>
              </MobileSetting>
              <MobileSetting type="button" onClick={() => toggleFullscreen()}>
                <strong>{isFullscreen ? "Згорнути карту" : "Відкрити на весь екран"}</strong>
                <kbd>Ctrl + Shift + F</kbd>
                <span>Розгорнути карту на весь екран пристрою або повернути звичайний вигляд.</span>
              </MobileSetting>
              <MobileSetting type="button" onClick={handleOpenMiniPlayer}>
                <strong>Міні-плеєр карти</strong>
                <kbd>Ctrl + Shift + P</kbd>
                <span>Винести карту в окреме плаваюче вікно для паралельної роботи.</span>
              </MobileSetting>
            </MobileSettingsPanel>
          </MobileSettingsOverlay>
        )}

        {isMiniPlayerOpen ? (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#222', color: 'rgba(255,255,255,0.6)', zIndex: 5, padding: '20px', textAlign: 'center' }}>
            Закрийте міні-плеєр щоб повернути карту
          </div>
        ) : (
          <>
            {isLoading && (
              <Loader>
                <p>Завантаження...</p>
              </Loader>
            )}

            <StyledIframe
              title="Weather Map"
              src={embedUrl}
              $isLoading={isLoading}
              $isReady={isMapActive}
              onLoad={() => setIsLoading(false)}
              allowFullScreen
            />
          </>
        )}
      </MapWrapper>

      {pipWindow ? (
        createPortal(
          <StyledIframe
            title="Weather Map (PiP)"
            src={embedUrl}
            $isLoading={isLoading}
            $isReady={true}
            onLoad={() => setIsLoading(false)}
            allowFullScreen
            style={{ width: "100%", height: "100vh" }}
          />,
          pipWindow.document.body
        )
      ) : isMiniPlayerOpen && (
        <MiniPlayerWindow
          ref={miniPlayerRef}
          onDoubleClick={() => setIsMiniPlayerOpen(false)}
          style={{
            left: miniPlayerPosition.x,
            top: miniPlayerPosition.y,
            width: miniPlayerSize.width,
            height: miniPlayerSize.height,
          }}
        >
          <MiniPlayerHeader onMouseDown={handleMiniPlayerDragStart}>
            <MiniHeaderTitle>
              Міні-карта • подвійний клік — назад
            </MiniHeaderTitle>
            <MiniHeaderButtons>
              <ActionButton
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen(miniPlayerRef);
                }}
              >
                {isFullscreen ? "Згорнути" : "⛶"}
              </ActionButton>
              <ActionButton
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMiniPlayerOpen(false);
                }}
              >
                ✕
              </ActionButton>
            </MiniHeaderButtons>
          </MiniPlayerHeader>

          <MiniPlayerBody>
            {isLoading && (
              <Loader>
                <div className="spinner">🌀</div>
                <p>Завантаження...</p>
              </Loader>
            )}

            <StyledIframe
              title="Weather Map Mini"
              src={embedUrl}
              $isLoading={isLoading}
              $isReady={true}
              onLoad={() => setIsLoading(false)}
              allowFullScreen
            />
            <ResizeHandle onMouseDown={handleMiniPlayerResizeStart} />
          </MiniPlayerBody>
        </MiniPlayerWindow>
      )}
    </OuterContainer>
  );
};

export default ClimateMap;
