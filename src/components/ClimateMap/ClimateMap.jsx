import React, { useState, useMemo, useRef, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { GoogleGenerativeAI } from "@google/generative-ai";
import localforage from "localforage";

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
  aspect-ratio: 16 / 8;
  min-height: 360px;
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
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: rgba(18, 18, 28, 0.75);
  padding: 10px;
  border-radius: 16px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 767px) {
    top: 56px;
    opacity: ${(props) => (props.$isOpen ? "1" : "0")};
    transform: ${(props) =>
      props.$isOpen ? "translateY(0) scale(1)" : "translateY(-10px) scale(0.95)"};
    pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};
  }
`;

const MenuToggleButton = styled.button`
  display: none;
  
  @media (max-width: 767px) {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    position: absolute;
    top: 14px;
    left: 14px;
    z-index: 20;
    background: rgba(18, 18, 28, 0.85);
    color: #ffb36c;
    border: 1px solid rgba(255, 179, 108, 0.4);
    padding: 8px 14px;
    border-radius: 12px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: all 0.25s ease;

    &:hover {
      background: rgba(18, 18, 28, 0.95);
      border-color: rgba(255, 179, 108, 0.8);
      transform: translateY(-1px);
    }
    
    &:active {
      transform: translateY(0);
    }
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

const PresetSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: rgba(255, 255, 255, 0.05);
  padding: 8px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const PresetRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const PresetSlot = styled.button`
  flex: 1;
  background: ${(props) =>
    props.$filled
      ? "linear-gradient(135deg, rgba(0,198,255,0.15), rgba(0,114,255,0.15))"
      : "rgba(255,255,255,0.04)"};
  border: 1px solid ${(props) =>
    props.$filled ? "rgba(0,198,255,0.4)" : "rgba(255,255,255,0.12)"};
  border-radius: 8px;
  color: ${(props) => (props.$filled ? "#7fd6ff" : "rgba(255,255,255,0.4)")};
  font-size: 11px;
  padding: 5px 7px;
  cursor: ${(props) => (props.$filled ? "pointer" : "default")};
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.2s;
  &:hover {
    ${(props) =>
      props.$filled &&
      `background: linear-gradient(135deg, rgba(0,198,255,0.28), rgba(0,114,255,0.28));
       border-color: rgba(0,198,255,0.7);`}
  }
`;

const PresetIconBtn = styled.button`
  background: none;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 7px;
  color: rgba(255,255,255,0.6);
  font-size: 12px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;
  &:hover {
    background: rgba(255,255,255,0.1);
    color: #fff;
    border-color: rgba(255,255,255,0.4);
  }
`;

const PresetNameInput = styled.input`
  flex: 1;
  padding: 4px 7px;
  border-radius: 6px;
  border: 1px solid rgba(0,198,255,0.4);
  background: rgba(0,0,0,0.4);
  color: white;
  font-size: 11px;
  outline: none;
  &::placeholder { color: rgba(255,255,255,0.4); }
`;

const OverlayLabel = styled.div`
  font-size: 10px;
  color: rgba(255,255,255,0.45);
  text-align: center;
  margin-top: 2px;
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

  // Пресети: до 3 слотів { name, lat, lon, zoom, overlay }
  const [presets, setPresets] = useState([null, null, null]);
  const [presetsOpen, setPresetsOpen] = useState(false);
  const [editingPreset, setEditingPreset] = useState(null); // { index, name }
  const [presetNameInput, setPresetNameInput] = useState("");

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

        const savedPresets = await localforage.getItem("map_presets");
        if (savedPresets) setPresets(savedPresets);
      } catch (error) {
        console.error("Error loading map data:", error);
      }
    };
    loadData();
  }, []);

  const handlePinLocation = async (e) => {
    e.stopPropagation();
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

  const handleSavePreset = async (index) => {
    const name = presetNameInput.trim() || `Пресет ${index + 1}`;
    const newPresets = [...presets];
    newPresets[index] = { name, lat, lon, zoom, overlay };
    setPresets(newPresets);
    await localforage.setItem("map_presets", newPresets);
    setEditingPreset(null);
    setPresetNameInput("");
  };

  const handleLoadPreset = (preset) => {
    if (!preset) return;
    setLat(preset.lat);
    setLon(preset.lon);
    setZoom(preset.zoom);
    setOverlay(preset.overlay);
    setIsLoading(true);
  };

  const handleDeletePreset = async (e, index) => {
    e.stopPropagation();
    const newPresets = [...presets];
    newPresets[index] = null;
    setPresets(newPresets);
    await localforage.setItem("map_presets", newPresets);
    if (editingPreset?.index === index) setEditingPreset(null);
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
    return `https://embed.windy.com/embed2.html?lat=${lat}&lon=${lon}&zoom=${zoom}&level=surface&overlay=${overlay}&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1`;
  }, [lat, lon, zoom, overlay]);

  return (
    <OuterContainer>
      <AihelpTitle $isDarkMode={isDarkMode} $isStickyBgMode={isStickyBgMode}>
        Кліматична мапа
      </AihelpTitle>

      {!isMiniPlayerOpen && (
        <MapWrapper
          ref={mapWrapperRef}
          $isFullscreen={isFullscreen}
          onClick={() => !isMapActive && setIsMapActive(true)}
        >
          <MenuToggleButton
            onClick={(e) => {
              e.stopPropagation();
              setIsControlsOpen(!isControlsOpen);
            }}
          >
            {isControlsOpen ? "✕ Закрити" : "⚙ Налаштування Стихії"}
          </MenuToggleButton>

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

            {/* ─── Пресети ─── */}
            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.2)",
                margin: "4px 0",
              }}
            />

            <ActionButton
              onClick={(e) => { e.stopPropagation(); setPresetsOpen(!presetsOpen); }}
              $active={presetsOpen}
            >
              🗂 Пресети
            </ActionButton>

            {presetsOpen && (
              <PresetSection onClick={(e) => e.stopPropagation()}>
                <OverlayLabel>Поточний режим: <strong style={{color:"#7fd6ff"}}>{overlay}</strong></OverlayLabel>
                {presets.map((preset, i) => (
                  <div key={i}>
                    {editingPreset?.index === i ? (
                      <PresetRow>
                        <PresetNameInput
                          autoFocus
                          placeholder={`Назва пресету ${i + 1}`}
                          value={presetNameInput}
                          onChange={(e) => setPresetNameInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleSavePreset(i);
                            if (e.key === "Escape") setEditingPreset(null);
                          }}
                        />
                        <PresetIconBtn onClick={() => handleSavePreset(i)} title="Зберегти">✓</PresetIconBtn>
                        <PresetIconBtn onClick={() => setEditingPreset(null)} title="Скасувати">✕</PresetIconBtn>
                      </PresetRow>
                    ) : (
                      <PresetRow>
                        <PresetSlot
                          $filled={!!preset}
                          onClick={() => handleLoadPreset(preset)}
                          title={preset ? `Завантажити: ${preset.name}\n${preset.overlay} · zoom ${preset.zoom}` : "Порожній слот"}
                        >
                          {preset
                            ? `${preset.name}`
                            : `— слот ${i + 1} —`}
                        </PresetSlot>
                        <PresetIconBtn
                          onClick={() => {
                            setEditingPreset({ index: i });
                            setPresetNameInput(preset?.name || "");
                          }}
                          title="Зберегти поточний вигляд в цей слот"
                        >
                          💾
                        </PresetIconBtn>
                        {preset && (
                          <PresetIconBtn
                            onClick={(e) => handleDeletePreset(e, i)}
                            title="Видалити пресет"
                            style={{ color: "#ff7b7b" }}
                          >
                            ✕
                          </PresetIconBtn>
                        )}
                      </PresetRow>
                    )}
                    {preset && (
                      <OverlayLabel>{preset.overlay} · zoom {preset.zoom}</OverlayLabel>
                    )}
                  </div>
                ))}
              </PresetSection>
            )}

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
                setIsMiniPlayerOpen(true);
              }}
            >
              Міні-плеєр
            </ActionButton>
          </Controls>

          {isLoading && (
            <Loader>
              <p>Завантаження...</p>
            </Loader>
          )}

          <StyledIframe
            title="Windy Live Weather Map"
            src={embedUrl}
            $isLoading={isLoading}
            $isReady={isMapActive}
            onLoad={() => setIsLoading(false)}
            allowFullScreen
          />
        </MapWrapper>
      )}

      {isMiniPlayerOpen && (
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
              title="Windy Live Weather Map"
              src={embedUrl}
              $isLoading={isLoading}
              $isReady={isMapActive}
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
