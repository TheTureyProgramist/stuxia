import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import styled, { keyframes, css } from "styled-components";
import { Line } from "react-chartjs-2";
import html2canvas from "html2canvas";
import localforage from "localforage";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  BiCog,
  BiEdit,
  BiImageAlt,
  BiBrain,
  BiLineChart,
  BiCurrentLocation,
  BiTrash,
  BiFullscreen,
  BiDownload,
  BiPrinter,
} from "react-icons/bi";
import {
  removeCustomDay,
  addCustomDay,
} from "../../features/counter/Counter.js";
import { getHourlyForecastDayGroups } from "../../utils/hourlyForecast";
import { DEFAULT_BGS } from "../Hero/defaultBgs";
import { getWindDirectionText } from "../../utils/windUtils";
import CustomDatesModal from "../Modals/CustomDatesModal";
import { useTutorial } from "../DominoTutorial/TutorialContext.jsx";

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;

const CustomTimersDisplay = ({ customDays, cardId }) => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const myEvents = customDays.filter(d => d.cardId === 'all' || d.cardId === cardId);
  if (myEvents.length === 0) return null;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px", padding: "10px", marginTop: "10px" }}>
      {myEvents.map(ev => {
        const evStart = new Date(`${ev.date}T${ev.time}:00`);
        const evEnd = new Date(evStart.getTime());
        if (ev.durationUnit === "days") evEnd.setDate(evEnd.getDate() + ev.duration);
        else evEnd.setHours(evEnd.getHours() + ev.duration);
        
        const diffToStart = evStart - now;
        const diffToEnd = evEnd - now;

        if (diffToEnd <= 0) return null; // past event, auto delete could be handled here or redux

        const formatDiff = (ms) => {
          const d = Math.floor(ms / (1000 * 60 * 60 * 24));
          const h = Math.floor((ms / (1000 * 60 * 60)) % 24);
          const m = Math.floor((ms / 1000 / 60) % 60);
          const s = Math.floor((ms / 1000) % 60);
          return `${d}дні:${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
        };

        return (
          <div key={ev.id} style={{
            background: "rgba(0,0,0,0.4)",
            color: "#00eaff",
            padding: "8px",
            borderRadius: "5px",
            fontSize: "12px",
            fontWeight: "bold",
            textAlign: "center"
          }}>
            {ev.reason}: {diffToStart > 0 ? `До події: ${formatDiff(diffToStart)}` : `Подія триватиме ще: ${formatDiff(diffToEnd)}`}
          </div>
        );
      })}
    </div>
  );
};

// Анімація для модалки деталей (плавне розгортання зверху вниз)
const expandDown = keyframes`
  from {
    clip-path: inset(0 0 100% 0);
    opacity: 0.5;
  }
  to {
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }
`;
const menuSlideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const menuSlideUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
`;

export const AihelpTitle = styled.div`
  font-size: 22px;
  text-align: center;
  z-index: 100;
  width: 240px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 24px;
  position: relative;
  border-radius: 10px;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${(props) => (props.$isDarkMode ? "white" : "#000")};
  transition:
    background 0.5s ease,
    backdrop-filter 0.5s ease,
    border-color 0.5s ease,
    box-shadow 0.5s ease;
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

const WeatherCard = styled.div`
  background: ${(props) => (props.$isDarkMode ? "#0000009e" : "#f5f5f5aa")};
  position: relative;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000000")};
  border-radius: 5px;
  padding: 3px;
  width: 100%;
  z-index: 100;
  max-width: 310px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: ${(props) =>
    props.$isMain ? "1.5px solid #004cff" : "1.5px solid #00fbff"};
  transition: all 0.3s ease;
`;
//
const CardHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(0, 238, 255);
  h3 {
    margin: 0;
    font-size: 13px;
    color: ${(props) => (props.$isMain ? "#008cff" : "skyblue")};
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 4px;
  button {
    background: #333;
    color: #fff;
    border: none;
    padding: 3px;
    border-radius: 2px;
    cursor: pointer;
    font-size: 13px;
    &:hover {
      background: #555;
    }
  }
`;

const ImagePlaceholder = styled.div`
  width: ${(props) => props.size || "150px"};
  height: ${(props) => props.size || "20px"};
  border-radius: 10px;
  font-size: ${(props) => props.fontSize || "13px"};
  color: #fff;
  display: inline-flex;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CurrentWeatherBanner = styled.div`
  gap: 4px;
  padding: 1px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: ${(props) =>
    props.$image
      ? `linear-gradient(rgba(10, 10, 10, 0.55), rgba(10, 10, 10, 0.55)), url(${props.$image}) center/cover no-repeat`
      : "transparent"};
`;

const CurrentWeatherBanne = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const BgModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
  backdrop-filter: blur(5px);
`;

const BgModalContent = styled.div`
  background: #1e1e1e56;
  padding: 5px;
  border-radius: 20px;
  width: 95%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #ffb36c;
  color: white;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;

const BgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
`;

const NameOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  padding: 4px;
  font-size: 10px;
  opacity: 0;
  transition: opacity 0.3s;
`;

const TopOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 4px;
  font-size: 10px;
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
`;

const BgItem = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: ${(props) => (props.$active ? "2px solid #ffb36c" : "2px solid transparent")};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    ${NameOverlay}, ${TopOverlay} {
      opacity: 1;
    }
  }
`;

const BgSquare = styled.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  display: block;
`;

const ChartScrollWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 10px;
  }
`;

const ChartInnerContainer = styled.div`
  width: ${(props) =>
    typeof props.$width === "number" ? `${props.$width}px` : props.$width};
  height: ${(props) => props.$height || "200px"};
`;

const chartActionButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "30px",
  height: "28px",
  padding: 0,
  border: "1px solid rgba(0, 190, 235, 0.7)",
  borderRadius: "4px",
  background: "rgba(0, 0, 0, 0.35)",
  color: "#00bfff",
  cursor: "pointer",
};

const AiSummaryBox = styled(motion.div)`
  background: rgba(39, 27, 50, 0.74);
  border: 1px solid rgba(138, 43, 226, 0.3);
  padding: 1px;
  font-size: 12px;
  line-height: 1.5;
  color: ${(props) => (props.$isDarkMode ? "#efefff" : "#4a4a4a")};
  animation: ${fadeIn} 0.5s ease-out;
`;

const SummaryText = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.$isExpanded ? "none" : "5")};
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 11px;
  white-space: pre-line;
`;

const ShowMoreBtn = styled.button`
  background: none;
  border: none;
  color: #8a2be2;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  padding: 4px 0 0 0;
  text-decoration: underline;
`;

const PromptEditor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const PromptTextarea = styled.textarea`
  width: 100%;
  height: 60px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #8a2be2;
  font-size: 11px;
  background: ${(props) => (props.$isDarkMode ? "#1a1a1a" : "#fff")};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
  resize: vertical;
`;

const DailyDetailOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${(props) =>
    props.$isDarkMode ? "rgba(30, 30, 30, 0.98)" : "rgba(255, 255, 255, 0.98)"};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#333")};
  z-index: 999;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  animation: ${expandDown} 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
  overflow: hidden;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.25);

  h3 {
    font-size: 1.2rem;
    color: #ffb36c;
  }
  p {
    font-size: 14px;
    margin: 5px 0;
  }
`;

const ScrollableContent = styled.div`
  flex: 1;
  width: 100%;
  padding: 0 20px 20px 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;

const SettingsDropdownMenu = styled.div`
  position: absolute;
  top: -10px;
  left: -275px;
  width: 100%;
  background: ${(props) => (props.$isDarkMode ? "#222" : "#fff")};
  border: 1px solid #ffb36c;
  border-radius: 5px 5px 0 0;
  display: flex;
  min-width: 309px;
  flex-direction: column;
  z-index: 200;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transform-origin: top center;
  animation: ${(props) => (props.$isClosing ? menuSlideUp : menuSlideDown)} 0.2s
    ease-out forwards;
  overflow: hidden;
  max-height: 70vh;
`;

const WeatherCardComponent = ({
  user,
  card,
  isDarkMode,
  isLocationEnabled,
  isExtremeTemp,
  isExtremeWind,
  isExtremeUV,
  index,
  totalCards,
  handleRefreshCard,
  handleDeleteCard,
  handleRenameCard,
  moveWeatherCard,
  setIsLocationEnabled,
  customHolidayName,
  currentTimeString,
  layout,
  onOpenDetails,
}) => {
  const dispatch = useDispatch();
  const { registerRef } = useTutorial?.() || { registerRef: () => {} };
  const customDays = useSelector((state) => state.calendar?.customDays || []);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(card.locationName);
  const [selectedDay, setSelectedDay] = useState(null);
  const [aiSummary, setAiSummary] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isAiEnabled, setIsAiEnabled] = useState(true);
  const [customAiPrompt, setCustomAiPrompt] = useState("");
  const [responseLength, setResponseLength] = useState("concise");
  const [aiStyle, setAiStyle] = useState("friendly");
  const [isEditingPrompt, setIsEditingPrompt] = useState(false);
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [selectedHourlyDay, setSelectedHourlyDay] = useState(0);
  const [cityImage, setCityImage] = useState(card.cityImage || "");
  const [bgMode, setBgMode] = useState("wiki");
  const [isBgModalOpen, setIsBgModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownClosing, setIsDropdownClosing] = useState(false);

  const handleCloseDropdown = () => {
    setIsDropdownClosing(true);
    setTimeout(() => {
      setIsDropdownOpen(false);
      setIsDropdownClosing(false);
    }, 180);
  };
  const [isCustomDatesModalOpen, setIsCustomDatesModalOpen] = useState(false);
  const [newCustomDate, setNewCustomDate] = useState({ date: "", time: "", reason: "", duration: 1, durationUnit: "hours", targetCard: "all" });
  const [isCardSettingsOpen, setIsCardSettingsOpen] = useState(false);

  useEffect(() => {
    // Only main card responds to tutorial
    if (!card.isMain) return;
    const openSettings = () => setIsCardSettingsOpen(true);
    const closeSettings = () => setIsCardSettingsOpen(false);
    window.addEventListener('domino-open-weather-settings', openSettings);
    window.addEventListener('domino-close-weather-settings', closeSettings);
    return () => {
      window.removeEventListener('domino-open-weather-settings', openSettings);
      window.removeEventListener('domino-close-weather-settings', closeSettings);
    };
  }, [card.isMain]);
  const [useGlobalLayout, setUseGlobalLayout] = useState(true);
  const [localLayout, setLocalLayout] = useState([
    { key: "current", visible: true },
    { key: "ai", visible: true },
    { key: "hourly", visible: true },
    { key: "daily", visible: true },
  ]);
  const summaryRef = useRef(null);
  const hourlyChartPanelRef = useRef(null);
  const hourlyChartInstanceRef = useRef(null);
  const dailyChartRef = useRef(null);
  const dailyChartPanelRef = useRef(null);
  const dailyChartInstanceRef = useRef(null);
  const [fullscreenChart, setFullscreenChart] = useState(null);
  const [isCapturing, setIsCapturing] = useState(false);
  
  // Легенда та видимість датасетів
  const [datasetOpacity, setDatasetOpacity] = useState({
    day: 1,
    night: 1,
    wind: 1,
  });
  const [legendFontSize, setLegendFontSize] = useState(12);

  const toggleDatasetVisibility = (datasetKey) => {
    setDatasetOpacity((prev) => ({
      ...prev,
      [datasetKey]: prev[datasetKey] === 1 ? 0.3 : 1,
    }));
  };

  const handleLegendSizeChange = async (newSize) => {
    const finalSize = Math.max(8, Math.min(20, newSize));
    setLegendFontSize(finalSize);
    await localforage.setItem(`legendFontSize_${card.id}`, finalSize);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setFullscreenChart(null);
        return;
      }

      requestAnimationFrame(() => {
        const chartInstance =
          fullscreenChart === "hourly"
            ? hourlyChartInstanceRef.current
            : dailyChartInstanceRef.current;
        chartInstance?.resize();
        chartInstance?.update("none");
      });
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, [fullscreenChart]);

  useEffect(() => {
    if (!fullscreenChart) return undefined;
    const timer = setTimeout(() => {
      const chartInstance =
        fullscreenChart === "hourly"
          ? hourlyChartInstanceRef.current
          : dailyChartInstanceRef.current;
      chartInstance?.resize();
      chartInstance?.update("none");
    }, 100);
    return () => clearTimeout(timer);
  }, [fullscreenChart]);

  const toggleChartFullscreen = async (chartKey, panelRef) => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    if (!panelRef.current?.requestFullscreen) return;
    setFullscreenChart(chartKey);
    await panelRef.current.requestFullscreen();
  };

  const createChartImage = async (panelRef, targetWidth = undefined, targetHeight = undefined) => {
    if (!panelRef.current) return null;
    return html2canvas(panelRef.current, {
      backgroundColor: isDarkMode ? "#000000" : "#f5f5f5",
      scale: 2,
      useCORS: true,
      allowTaint: true,
      windowWidth: targetWidth || window.innerWidth,
      windowHeight: targetHeight || window.innerHeight,
    });
  };

  const captureFullChart = async (chartKey, panelRef) => {
    setIsCapturing(true);
    const wasChartFullscreen = fullscreenChart === chartKey;
    const el = panelRef.current;
    if (!el) {
      setIsCapturing(false);
      return null;
    }

    let clone = null;
    let placeholder = null;

    if (!wasChartFullscreen) {
      // Створюємо візуальний клон графіка, щоб користувач не помітив жодних змін (блимання або зникнення)
      const rect = el.getBoundingClientRect();
      clone = el.cloneNode(true);
      const originalCanvases = el.querySelectorAll('canvas');
      const clonedCanvases = clone.querySelectorAll('canvas');
      originalCanvases.forEach((canvas, i) => {
        if (clonedCanvases[i]) {
          clonedCanvases[i].getContext('2d').drawImage(canvas, 0, 0);
        }
      });
      
      clone.style.position = "fixed";
      clone.style.top = `${rect.top}px`;
      clone.style.left = `${rect.left}px`;
      clone.style.width = `${rect.width}px`;
      clone.style.height = `${rect.height}px`;
      clone.style.margin = "0";
      clone.style.zIndex = "99998";
      clone.style.pointerEvents = "none";
      document.body.appendChild(clone);

      // Створюємо "пустишку", щоб картка не схлопнулась по висоті
      placeholder = document.createElement("div");
      placeholder.style.width = `${rect.width}px`;
      placeholder.style.height = `${rect.height}px`;
      el.parentElement.insertBefore(placeholder, el);
      
      // Вмикаємо повноекранний режим під капотом
      setFullscreenChart(chartKey);
      await new Promise((r) => setTimeout(r, 100)); // чекаємо рендер React
    }

    const origCss = el.style.cssText;
    const targetWidth = Math.max(el.scrollWidth, window.innerWidth, chartKey === "hourly" ? hourlyChartWidth : 900);
    const targetHeight = Math.max(el.scrollHeight, window.innerHeight, 600);
    
    if (!wasChartFullscreen) {
      // Ховаємо справжній великий графік за межі екрану
      el.style.cssText += `
        position: fixed !important;
        top: -9999px !important;
        left: -9999px !important;
        width: ${targetWidth}px !important;
        height: ${targetHeight}px !important;
        min-height: ${targetHeight}px !important;
        max-width: none !important;
        max-height: none !important;
        z-index: -9999 !important;
        background: ${isDarkMode ? "#000" : "#f5f5f5"} !important;
      `;
    } else {
      // Якщо вже у повноекранному - просто фіксуємо розміри для ідеального знімку
      el.style.cssText += `
        width: ${targetWidth}px !important;
        height: ${targetHeight}px !important;
        min-height: ${targetHeight}px !important;
        max-width: none !important;
        max-height: none !important;
      `;
    }
    
    await new Promise((r) => setTimeout(r, 100));

    const canvas = await createChartImage(panelRef, targetWidth, targetHeight);

    el.style.cssText = origCss;

    if (!wasChartFullscreen) {
      setFullscreenChart(null);
    }
    
    setIsCapturing(false);

    // Чекаємо, поки React поверне оригінальний вигляд, і тільки потім прибираємо клон
    if (clone) {
      await new Promise((r) => setTimeout(r, 100));
      clone.remove();
      if (placeholder) placeholder.remove();
    }

    return canvas;
  };

  const downloadChartScreenshot = async (chartKey, panelRef) => {
    const canvas = await captureFullChart(chartKey, panelRef);
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `${card.locationName}-${chartKey}-chart.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const printChart = async (chartKey, panelRef) => {
    const canvas = await captureFullChart(chartKey, panelRef);
    if (!canvas) return;
    const imageUrl = canvas.toDataURL("image/png");
    // Використовуємо прихований iframe замість window.open (уникаємо блокування popup)
    let iframe = document.getElementById("chart-print-iframe");
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.id = "chart-print-iframe";
      iframe.style.position = "fixed";
      iframe.style.width = "0";
      iframe.style.height = "0";
      iframe.style.border = "none";
      iframe.style.top = "-9999px";
      iframe.style.left = "-9999px";
      document.body.appendChild(iframe);
    }
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(`
      <html><head><title>${card.locationName} - ${chartKey}</title>
      <style>body{margin:0;text-align:center} img{max-width:100%}</style>
      </head>
      <body><img src="${imageUrl}" onload="window.focus();window.print();" /></body></html>
    `);
    doc.close();
  };

  const renderChartActions = (chartKey, panelRef) => (
    <div
      style={{
        display: "flex",
        gap: "6px",
        alignItems: "center",
        flexShrink: 0,
      }}
    >
      <button
        type="button"
        onClick={() => toggleChartFullscreen(chartKey, panelRef)}
        title={fullscreenChart === chartKey ? "Вийти з повного екрана" : "На весь екран"}
        aria-label={fullscreenChart === chartKey ? "Вийти з повного екрана" : "На весь екран"}
        style={chartActionButtonStyle}
      >
        <BiFullscreen size={16} />
      </button>
      <button
        type="button"
        onClick={() => downloadChartScreenshot(chartKey, panelRef)}
        title="Завантажити скріншот графіка"
        aria-label="Завантажити скріншот графіка"
        style={chartActionButtonStyle}
      >
        <BiDownload size={16} />
      </button>
      <button
        type="button"
        onClick={() => printChart(chartKey, panelRef)}
        title="Друкувати графік"
        aria-label="Друкувати графік"
        style={chartActionButtonStyle}
      >
        <BiPrinter size={16} />
      </button>
    </div>
  );

  const renderChartLegend = (items) => (
    <div
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        fontSize: `${Math.max(10, legendFontSize - 1)}px`,
        alignItems: "center",
      }}
    >
      {items.map((item) => (
        <button
          key={item.key}
          type="button"
          onClick={() => toggleDatasetVisibility(item.key)}
          title={`Натисніть, щоб ${datasetOpacity[item.key] === 1 ? "сховати" : "показати"}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            padding: "3px 6px",
            border: `1px solid ${item.color}`,
            borderRadius: "4px",
            background: isDarkMode ? "#222" : "#fff",
            color: item.color,
            cursor: "pointer",
            opacity: datasetOpacity[item.key],
            fontSize: "inherit",
            fontWeight: "bold",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: item.color,
            }}
          />
          {item.label}
        </button>
      ))}
    </div>
  );

  // Легенда + кнопки дій — один рядок
  const renderChartHeader = (chartKey, panelRef, items) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8px",
        flexWrap: "nowrap",
        marginBottom: "4px",
      }}
    >
      {renderChartLegend(items)}
      {renderChartActions(chartKey, panelRef)}
    </div>
  );

  useEffect(() => {
    if (dailyChartRef.current) {
      const timer = setTimeout(() => {
        if (dailyChartRef.current) {
          // Scroll to index 2 (today)
          dailyChartRef.current.scrollLeft = (1300 / 18) * 2;
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [card.id, useGlobalLayout, localLayout]);

  useEffect(() => {
    const loadCardLayoutSettings = async () => {
      const savedUseGlobal = await localforage.getItem(
        `useGlobalLayout_${card.id}`,
      );
      if (savedUseGlobal !== null) setUseGlobalLayout(savedUseGlobal);
      const savedLayout = await localforage.getItem(`localLayout_${card.id}`);
      if (savedLayout) setLocalLayout(savedLayout);
    };
    loadCardLayoutSettings();
  }, [card.id]);
  useEffect(() => {
    const loadBgMode = async () => {
      const savedBg = await localforage.getItem(`bgMode_${card.id}`);
      if (savedBg) {
        setBgMode(savedBg);
      }
    };
    loadBgMode();
  }, [card.id]);

  useEffect(() => {
    const loadLegendSize = async () => {
      const savedSize = await localforage.getItem(`legendFontSize_${card.id}`);
      if (savedSize) {
        setLegendFontSize(savedSize);
      }
    };
    loadLegendSize();
  }, [card.id]);

  const handleChangeBackground = (newMode) => {
    setBgMode(newMode);
    localforage.setItem(`bgMode_${card.id}`, newMode);
    setIsBgModalOpen(false);
  };

  const handleGpsToggle = () => {
    const nextEnabled = !isLocationEnabled;
    setIsLocationEnabled(nextEnabled);
    handleCloseDropdown();
  };

  useEffect(() => {
    let isMounted = true;

    const searchCityImage = async () => {
      if (bgMode !== "wiki") {
        if (isMounted) {
          setCityImage(bgMode);
        }
        return;
      }

      const getFallback = () =>
        DEFAULT_BGS.find((bg) => bg.name === "Туманний ліс")?.src ||
        DEFAULT_BGS[0].src;

      let query = (card.locationName || card.name || "").trim();

      if (query === "Ваша локація" && card.lat && card.lon) {
        try {
          const geoRes = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${card.lat}&lon=${card.lon}&format=json&accept-language=uk`,
          );
          const geoData = await geoRes.json();
          query =
            geoData.address?.city ||
            geoData.address?.town ||
            geoData.address?.village ||
            geoData.address?.state ||
            query;
        } catch (e) {
          console.warn("Reverse geocoding failed", e);
        }
      }

      if (!query || query === "Ваша локація") {
        if (isMounted) {
          setCityImage(getFallback());
        }
        return;
      }

      try {
        const response = await fetch(
          `https://uk.wikipedia.org/w/api.php?action=query&prop=pageimages&titles=${encodeURIComponent(query)}&pithumbsize=1000&format=json&origin=*`,
        );
        const data = await response.json();
        const page = Object.values(data?.query?.pages || {}).find(
          (entry) => entry.thumbnail?.source,
        );
        const imageUrl = page?.thumbnail?.source;

        if (imageUrl && isMounted) {
          setCityImage(imageUrl);
        } else if (isMounted) {
          setCityImage(getFallback());
        }
      } catch (error) {
        console.warn("City image lookup failed:", error);
        if (isMounted) {
          setCityImage(getFallback());
        }
      }
    };

    searchCityImage();
    return () => {
      isMounted = false;
    };
  }, [card.locationName, card.lat, card.lon, card.name, bgMode]);

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    setIsSummaryExpanded(false);
    setHasOverflow(false);
  }, [aiSummary]);

  useEffect(() => {
    if (summaryRef.current && aiSummary && !isSummaryExpanded) {
      const isOverflowing =
        summaryRef.current.scrollHeight > summaryRef.current.clientHeight;
      if (isOverflowing) setHasOverflow(true);
    }
  }, [aiSummary, isSummaryExpanded]);

  useEffect(() => {
    const loadAiSetting = async () => {
      const saved = await localforage.getItem(`ai_enabled_${card.id}`);
      if (saved !== null) setIsAiEnabled(saved);
      const savedPrompt = await localforage.getItem(
        `ai_custom_prompt_${card.id}`,
      );
      if (savedPrompt) setCustomAiPrompt(savedPrompt);
      const savedLength = await localforage.getItem(
        `ai_response_length_${card.id}`,
      );
      if (savedLength) setResponseLength(savedLength);
      const savedStyle = await localforage.getItem(`ai_style_${card.id}`);
      if (savedStyle) setAiStyle(savedStyle);
    };
    loadAiSetting();
  }, [card.id]);

  const generateWeatherSummary = useCallback(async () => {
    if (isAiLoading) return;
    const key = await localforage.getItem("gemini_api_key");
    if (!key) {
      setAiSummary("Потрібен ключ ШІ (Gemini API) для роботи цієї функції.");
      return;
    }

    setIsAiLoading(true);
    try {
      const genAI = new GoogleGenerativeAI(key);
      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash-lite",
      });

      const current = card.current;
      const daily = card.daily16 || [];
      const hourly = card.hourly || [];

      const shortTermForecast = hourly
        .slice(0, 5)
        .map(
          (h) =>
            `${h.time}: ${h.temp}, вітер ${h.windNum}м/с, ${h.iconPlaceholder}`,
        )
        .join("; ");

      const lengthInstruction =
        responseLength === "extensive"
          ? "надай розгорнуту відповідь (кілька речень)"
          : "згенеруй лаконічний прогноз одним реченням (макс 25 слів)";

      const styleInstruction =
        aiStyle === "scientific"
          ? "використовуй науковий стиль"
          : aiStyle === "sarcastic"
            ? "додай дрібку сарказму та іронії"
            : "використовуй дружній та теплий тон";

      const systemInstructions = customAiPrompt.trim()
        ? `Ти метеоролог-асистент. ${styleInstruction}. Виконуй цю інструкцію: ${customAiPrompt}. Критичні попередження (якщо є) виводь на самому початку. Використовуй абзаци для розбиття тексту. Відповідь надай українською мовою.`
        : `Ти метеоролог-асистент. На основі наданих даних ${lengthInstruction}. ${styleInstruction}. Згадай про комфортний одяг. КРИТИЧНІ ПОПЕРЕДЖЕННЯ (температура, вітер, УФ) став найвище. Використовуй абзаци для зручності читання. Відповідь виключно українською мовою.`;

      const promptText = `${systemInstructions}\n\nМісто: ${card.locationName}. Поточний час на сайті: ${currentTimeString}.\n\nПоточні показники: ${current.temp}, ${current.description}, вологість ${current.humidity}, вітер ${current.wind_speed}.\nНайближчі години: ${shortTermForecast}.\nПрогноз на дні: завтра ${daily[1]?.temp_day || "н/д"}, післязавтра ${daily[2]?.temp_day || "н/д"}.\nТенденція на 2 тижні: 1-й тиждень ~${daily[7]?.temp_day || "н/д"}, 2-й тиждень ~${daily[14]?.temp_day || "н/д"}.`;

      const result = await model.generateContent(promptText);
      const response = await result.response;
      const text = response.text().trim();

      setAiSummary(text);
      await localforage.setItem(`ai_weather_summary_${card.id}`, {
        text,
        timestamp: Date.now(),
      });
    } catch (e) {
      console.error("Gemini Weather Error:", e);
    } finally {
      setIsAiLoading(false);
    }
  }, [
    card,
    isAiLoading,
    customAiPrompt,
    responseLength,
    aiStyle,
    currentTimeString,
  ]);

  const checkAndUpdate = useCallback(async () => {
    const saved = await localforage.getItem(`ai_weather_summary_${card.id}`);
    const now = Date.now();
    const TWO_HOURS = 2 * 60 * 60 * 1000; // 7,200,000 мс

    // Оновлюємо лише якщо даних немає або пройшло більше 2 годин з останнього запиту
    const needsUpdate = !saved || now - saved.timestamp > TWO_HOURS;

    if (needsUpdate) {
      generateWeatherSummary();
    } else {
      setAiSummary(saved.text);
    }
  }, [card.id, generateWeatherSummary]);

  const handleAiToggle = async () => {
    const newVal = !isAiEnabled;
    setIsAiEnabled(newVal);
    await localforage.setItem(`ai_enabled_${card.id}`, newVal);
    if (newVal && !aiSummary) {
      checkAndUpdate();
    }
  };

  useEffect(() => {
    if (card.current && card.daily16) {
      checkAndUpdate();
    }
  }, [card, checkAndUpdate]);

  const [isEditingReason, setIsEditingReason] = useState(false);
  const [tempReason, setTempReason] = useState("");

  useEffect(() => {
    setIsEditingReason(false);
  }, [selectedDay]);

  const createIconCanvas = (icon, size = 24, dangerColor = null, opacity = 1) => {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    ctx.font = `${size - 8}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgba(0, 0, 0, 0.72)";
    ctx.globalAlpha = opacity;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size * 0.76, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = opacity;
    ctx.fillStyle = "#ffffff";
    ctx.fillText(icon, size / 2, size / 2);

    if (dangerColor) {
      ctx.fillStyle = dangerColor;
      ctx.font = `bold ${size / 2}px Arial`;
      ctx.fillText("!", size - 5, 5);
    }
    return canvas;
  };
const createDirectionArrowCanvas = (degrees, size = 18, opacity = 1) => {
  const canvas = document.createElement("canvas");
  
  // 1. Збільшуємо розмір полотна Canvas, щоб затемнення вміщалося і не обрізалося
  const padding = 12; // Запас для затемнення
  const canvasSize = size + padding;
  canvas.width = canvasSize;
  canvas.height = canvasSize;

  const ctx = canvas.getContext("2d");
  const center = canvasSize / 2; // Центр тепер відносно нового розміру Canvas

  const normalizedDegrees = ((Number(degrees) || 0) % 360 + 360) % 360;
  const snappedDegrees = Math.round(normalizedDegrees / 45) * 45;
  const angle = (snappedDegrees * Math.PI) / 180;

  ctx.translate(center, center);
  ctx.rotate(angle);

  // 2. Малюємо затемнення більшого радіуса
  ctx.fillStyle = "rgba(0, 0, 0, 0.72)";
  ctx.globalAlpha = opacity;
  ctx.beginPath();
  // Можна регулювати радіус затемнення тут (наприклад, size * 0.75 або canvasSize * 0.45)
  ctx.arc(0, 0, canvasSize * 0.45, 0, Math.PI * 2);
  ctx.fill();

  // 3. Малюємо стрілку — її розміри та координати залишаються НЕТОРКНУТИМИ
  ctx.globalAlpha = opacity;
  ctx.fillStyle = "#0099ff";
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(0, -size * 0.43);
  ctx.lineTo(size * 0.2, size * 0.12);
  ctx.lineTo(size * 0.07, size * 0.08);
  ctx.lineTo(size * 0.07, size * 0.4);
  ctx.lineTo(-size * 0.07, size * 0.4);
  ctx.lineTo(-size * 0.07, size * 0.08);
  ctx.lineTo(-size * 0.2, size * 0.12);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  return canvas;
};
  const getWindDirectionLabel = (degrees) => {
    const normalizedDegrees = ((Number(degrees) || 0) % 360 + 360) % 360;
    const snappedDegrees = Math.round(normalizedDegrees / 45) * 45;
    return getWindDirectionText(snappedDegrees % 360);
  };

  const handleRenameSubmit = () => {
    if (newName.trim()) {
      handleRenameCard(card.id, newName);
      setIsEditing(false);
    }
  };

  const hourlyDayGroups = getHourlyForecastDayGroups(card.hourly || []);
  const visibleHourly = hourlyDayGroups[selectedHourlyDay]?.items || [];
  const hourlyChartWidth = Math.max(500, (visibleHourly?.length || 24) * 35);
  const hourlyChartData = {
    labels: visibleHourly?.map((h) => h.time) || [],
    datasets: [
      {
        label: "Температура (°C)",
        data: visibleHourly?.map((h) => h.tempNum ?? 0) || [],
        fill: true,
        backgroundColor: "rgba(255, 179, 108, 0.2)",
        borderColor: "rgba(255, 179, 108, 1)",
        pointRadius: 12,
        pointStyle: visibleHourly?.map((h) => {
          let danger = null;
          if ((h.tempNum ?? 0) > 30) danger = "#ff0000";
          else if ((h.tempNum ?? 0) < -30) danger = "#004cff";
          else if ((h.windNum ?? 0) > 10) danger = "#ff6a00";
          return createIconCanvas(
            h.iconSymbol ?? h.iconPlaceholder ?? "☁️",
            24,
            danger,
            datasetOpacity.day,
          );
        }),
        tension: 0.4,
        yAxisID: "y",
      },
      {
        label: "Вітер (м/с)",
        data: visibleHourly?.map((h) => h.windNum ?? 0) || [],
        borderColor: "rgba(0, 190, 235, 1)",
        backgroundColor: "rgba(0, 190, 235, 0.1)",
        pointRadius: 6,
        pointBackgroundColor:
          visibleHourly?.map((h) =>
            (h.windNum ?? 0) > 10 ? "#ff6a00" : "rgba(0, 190, 235, 1)",
          ) || [],
        pointStyle: visibleHourly?.map((h) =>
          createDirectionArrowCanvas(h.wind_direction_10m, 18, datasetOpacity.wind),
        ) || [],
        tension: 0.4,
        yAxisID: "y1",
      },
    ],
  };

  const getWeatherDescription = (code) => {
    if (code === 0) return "Ясно";
    if (code >= 1 && code <= 3) return "Частково хмарно";
    if (code >= 45 && code <= 48) return "Туман";
    if (code >= 51 && code <= 55) return "Дрібна сяка";
    if (code >= 61 && code <= 65) return "Дощ";
    if (code >= 71 && code <= 77) return "Сніг";
    if (code >= 80 && code <= 82) return "Шквальний дощ";
    if (code >= 95 && code <= 99) return "Гроза";
    return "Хмарно";
  };
// Реєстр свят 2027
const HOLIDAYS_2027 = {
  // Січень
  "01.01": "Вітаю з Новим роком! З новим щастям! Василя / Обрізання Господнє (новий стиль)",
  "06.01": "Богоявлення / Водохреще (новий стиль)",
  "07.01": "Різдво Христове (старий стиль)",
  "12.01": "1 серія 'Реальної містики'. Та вже, ціла епоха розкриття містифікацій у 12 сезонів!",
  "14.01": "Василя / Обрізання Господнє (старий стиль)",
  "19.01": "Богоявлення / Водохреще (старий стиль)",

  // Лютий
  "02.02": "Стрітення Господнє (новий стиль)",
  "14.02": "З Днем святого Валентина! Доміно тоді знайшов Кейт! І, може, ти знайдеш!",
  "15.02": "Стрітення Господнє (старий стиль)",

  // Березень
  "08.03": "Жінки, всіх вас вітаю з вашим днем! Доміно шукає щось смачненьке для Кейт :)",
  "25.03": "Благовіщення Пресвятої Богородиці (новий стиль)",

  // Квітень
  "01.04": "Сьогодні День дурня, не святого лежня. Нікому не вірте! А вам? А ми теж щось уміємо :)",
  "07.04": "Благовіщення Пресвятої Богородиці (старий стиль)",
  "23.04": "День святого Юрія / Георгія (новий стиль)",

  // Травень
  "01.05": "День праці. Жінки — спечіть щось смачненьке, а чоловіки для дам теж хай щось змайструють!",
  "02.05": "З Великоднем 2027! Бажаю всім всього найкращого. Скиньте рецепт пасочки на пошту :)",
  "06.05": "День святого Юрія / Георгія (старий стиль)",
  "08.05": "День пам'яті та перемоги. В цей день наші прадіди перемогли фашизм.",
  "09.05": "День матері. Подякуйте їм за те, що вони підтримували вас у тяжкі дні, а радісні робили ще кращими.",
  "10.05": "Вознесіння Господнє (новий стиль)",
  "27.05": "Випуск Dragon Village 3. Скачаєш? :)",
  "29.05": "Особисте свято у цей день... Пробач, я теж маю секрети :)",

  // Червень
  "10.06": "Вознесіння Господнє (старий стиль)",
  "20.06": "Трійця / П'ятдесятниця (новий стиль)",
  "21.06": "Просто літнє сонцестояння. Купив собі ескімо? :)",
  "24.06": "Різдво Івана Хрестителя / Купала (новий стиль)",
  "27.06": "Трійця / П'ятдесятниця (старий стиль)",
  "28.06": "День Конституції України",
  "29.06": "Святих апостолів Петра і Павла (новий стиль)",

  // Липень
  "07.07": "Різдво Івана Хрестителя / Івана Купала (старий стиль)",
  "12.07": "Святих апостолів Петра і Павла (старий стиль)",

  // Серпень
  "01.08": "День Малятко TV. Ще раз особиста подяка. Ціла епоха була... Зараз закритий... :(",
  "06.08": "Преображення Господнє / Спас (новий стиль)",
  "15.08": "Успіння Пресвятої Богородиці (новий стиль)",
  "19.08": "Преображення Господнє / Спас (старий стиль)",
  "24.08": "День Незалежності України",
  "28.08": "Успіння Пресвятої Богородиці (старий стиль)",

  // Вересень
  "01.09": "День знань. Цей день усі ненавидять, бо термін відпустки закінчився.",
  "08.09": "Різдво Пресвятої Богородиці (новий стиль)",
  "11.09": "Випуск 1-ї серії м/с 'Динофроз'. Легенда...",
  "14.09": "Воздвиження Хреста Господнього (новий стиль)",
  "21.09": "Різдво Пресвятої Богородиці (старий стиль)",
  "27.09": "Воздвиження Хреста Господнього (старий стиль)",

  // Жовтень
  "01.10": "Покрова Пресвятої Богородиці та День козацтва (новий стиль)",
  "14.10": "Покрова Пресвятої Богородиці та День козацтва (старий стиль)",
  "27.10": "День української писемності та мови. Напиши по максимуму каліграфічний лист.",

  // Листопад
  "19.11": "Міжнародний чоловічий день. Наш день :) Доміно теж святкує :)",
  "21.11": "Введення в храм Пресвятої Богородиці (новий стиль)",
  "30.11": "День святого Андрія Первозванного (новий стиль)",

  // Грудень
  "04.12": "Введення в храм Пресвятої Богородиці (старий стиль)",
  "06.12": "День святого Миколая (новий стиль). Цукерку отримав? :) А Доміно — вуглинку, бо вони люблять камені, а індики не їдять солодке :)",
  "13.12": "День святого Андрія Первозванного (старий стиль)",
  "19.12": "День святого Миколая (старий стиль). Цукерку отримав? :) А Доміно — вуглинку, бо вони люблять камені, а індики не їдять солодке :)",
  "25.12": "Різдво Христове (новий стиль)",
};
  const isWeekend = (dayName) => {
    const name = dayName.toLowerCase();
    return name.includes("сб") || name.includes("нд");
  };

  const isBirthday = (dateStr) => {
    if (!user?.birthDate || !dateStr) return false;
    // user.birthDate: YYYY-MM-DD, dateStr: DD.MM
    const [, uMonth, uDay] = user.birthDate.split("-");
    const [dDay, dMonth] = dateStr.split(".");
    return (
      parseInt(uDay) === parseInt(dDay) && parseInt(uMonth) === parseInt(dMonth)
    );
  };

  const getDateType = (dateStr, dayName, fullDate) => {
    const holidayName = HOLIDAYS_2027[dateStr];
    const isWknd = isWeekend(dayName);
    const isBday = isBirthday(dateStr);
    const customDay = customDays.find((d) => d.date === fullDate);

    // Пріоритет: Свято > День народження > Custom > Вихідний
    if (holidayName) {
      return {
        type: "holiday",
        color: "#ff6666",
        label: holidayName + (isWknd ? " + вихідний" : ""),
      };
    }
    if (isBday) {
      return {
        type: "birthday",
        color: "#e066ff", // Використовуємо фіолетовий для "райдужного" ефекту в hex
        label: "З Днем Народження! 🎉",
        isRainbow: true,
      };
    }
    if (customDay) {
      return { type: "custom", color: "#00bfff", label: customDay.reason };
    }
    if (isWknd) {
      return {
        type: "weekend",
        color: "#ff9966",
        label: "вихідний",
      };
    }
    return { type: "regular", color: null, label: "" };
  };

  const calculateCountdown = (fullDate) => {
    const now = new Date();
    const target = new Date(fullDate);
    target.setHours(0, 0, 0, 0); // Початок дня події

    const diff = target.getTime() - now.getTime();
    if (diff <= 0) return null;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    if (days > 0) return `⏳ Залишилось: ${days}д ${hours}г`;
    return `⏳ Почнеться за ${hours}г`;
  };

  const getHolidayMessage = (dateStr, dayName, fullDate) => {
    const customDay = customDays.find((d) => d.date === fullDate);
    const countdown = calculateCountdown(fullDate);
    const suffix = countdown ? ` (${countdown})` : "";

    if (customDay) return `💙 Ваша подія: ${customDay.reason}${suffix}`;
    if (isBirthday(dateStr))
      return `🎂 Вітаємо, ${user?.firstName}! З Днем Народження! 🌈${suffix}`;
    const holiday = HOLIDAYS_2027[dateStr];
    if (holiday) return `✨ Вітаємо з святом: ${holiday}!${suffix}`;
    return null;
  };
  const dailyChartData = {
    labels: card.daily16?.map((d) => `${d.date}\n${d.day}`) || [],
    datasets: [
      {
        label: "День (°C)",
        data: card.daily16?.map((d) => parseInt(d.temp_day)) || [],
        borderColor: `rgba(255, 179, 108, ${datasetOpacity.day})`,
        backgroundColor: `rgba(255, 179, 108, ${datasetOpacity.day * 0.5})`,
        pointRadius: 12,
        pointStyle: card.daily16?.map((d) =>
          createIconCanvas(d.iconSymbol ?? d.iconPlaceholder, 24, null, datasetOpacity.day),
        ),
        pointBorderColor: card.daily16?.map((d) => {
          const dateType = getDateType(d.date, d.day, d.fullDate);
          const color = dateType.color || "#ffb36c";
          return color;
        }),
        pointBorderWidth: card.daily16?.map((d) => {
          const dateType = getDateType(d.date, d.day, d.fullDate);
          return dateType.color ? 3 : 2;
        }),
        tension: 0.3,
        yAxisID: "y",
      },
      {
        label: "Ніч (°C)",
        data: card.daily16?.map((d) => parseInt(d.temp_night)) || [],
        borderColor: `rgba(255, 20, 147, ${datasetOpacity.night})`,
        backgroundColor: `rgba(255, 20, 147, ${datasetOpacity.night * 0.2})`,
        pointStyle: "circle",
        pointRadius: 4,
        tension: 0.3,
        yAxisID: "y",
      },
      {
        label: "Вітер (м/с)",
        data: card.daily16?.map((d) => parseFloat(d.wind_speed) || 0) || [],
        borderColor: `rgba(0, 153, 255, ${datasetOpacity.wind})`,
        backgroundColor: `rgba(0, 153, 255, ${datasetOpacity.wind * 0.2})`,
        pointStyle: card.daily16?.map((d) =>
          createDirectionArrowCanvas(d.wind_direction_10m, 18, datasetOpacity.wind),
        ),
        pointRadius: 6,
        pointBorderColor: "#ffffff",
        pointBorderWidth: 1.5,
        pointBackgroundColor: card.daily16?.map((d) =>
          parseFloat(d.wind_speed) > 10 ? "#ff6a00" : "#0099ff",
        ),
        tension: 0.3,
        yAxisID: "y1",
      },
    ],
  };

  const chartOptions = {
    animation: isCapturing ? false : undefined,
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        display: false, // Вимкнути вбудовану легенду - створимо свою липку
      },
      tooltip: {
        enabled: false,
        mode: "index",

        intersect: false,
        external: externalTooltipHandler,
        callbacks: {
          title: (items) => `⏰ Час: ${items[0].label}`,
          label: (context) => {
            if (context.datasetIndex === 0) {
              // Температура
              const temp = context.parsed.y || 0;
              let label = `Температура: ${temp}°C`;

              let dangers = [];
              if (temp > 30) dangers.push("СПЕКА ☀️");
              if (temp < -30) dangers.push("МОРОЗ ❄️");

              if (dangers.length > 0) {
                label += ` ⚠️ ${dangers.join(", ")}`;
              }
              return label;
            } else if (context.datasetIndex === 1) {
              const wind = context.parsed.y || 0;
              let label = ` Вітер: ${wind.toFixed(1)} м/с`;
              if (wind > 10) label += ` ⚠️ СИЛЬНИЙ ВІТЕР`;
              const hourlyData = visibleHourly?.[context.dataIndex];
              if (hourlyData) {
                label += ` | ${getWindDirectionLabel(hourlyData.wind_direction_10m)} (${Math.round(hourlyData.wind_direction_10m || 0)}°)`;
              }
              return label;
            }
            return "";
          },
          afterLabel: (context) => {
            const index = context.dataIndex;
            const hourlyData = visibleHourly?.[index];
            if (context.datasetIndex === 0 && hourlyData) {
              return hourlyData.iconSymbol || hourlyData.iconPlaceholder || "";
            }
            return "";
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        title: { display: true, text: "Температура (°C)", color: "#ffb36c" },
        ticks: { color: isDarkMode ? "#aaa" : "#888", font: { size: 10 } },
        grid: {
          color: isDarkMode
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(128, 128, 128, 0.1)",
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        beginAtZero: true,
        title: {
          display: true,
          text: "Вітер (м/с)",
          color: "rgba(0, 190, 235, 1)",
        },
        ticks: { color: "rgba(0, 190, 235, 1)", font: { size: 10 } },
        grid: { drawOnChartArea: false },
      },
      x: {
        offset: true,
        ticks: { color: isDarkMode ? "#aaa" : "#888", font: { size: 10 } },
        grid: { display: false },
      },
    },
  };

  const dailyChartOptions = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      legend: {
        display: false, // Вимкнути вбудовану легенду - створимо свою липку
      },
      tooltip: {
        ...chartOptions.plugins.tooltip,
        external: externalTooltipHandler,
        callbacks: {
          title: (items) => {
            const daily = card.daily16?.[items[0].dataIndex];
            if (!daily) return items[0].label;
            const dateType = getDateType(daily.date, daily.day, daily.fullDate);
            const holidayMsg = getHolidayMessage(
              daily.date,
              daily.day,
              daily.fullDate,
            );
            const label = dateType.label ? ` [${dateType.label}]` : "";
            const titleText = items[0].label + label;
            return holidayMsg ? [holidayMsg, titleText] : titleText;
          },
          label: (context) => {
            const isDay = context.datasetIndex === 0;
            const isNight = context.datasetIndex === 1;
            const isWind = context.datasetIndex === 2;
            if (isDay) {
              return `☀️ День: ${context.parsed.y}°C`;
            } else if (isNight) {
              return `🌙 Ніч: ${context.parsed.y}°C`;
            } else if (isWind) {
              const daily = card.daily16?.[context.dataIndex];
              const direction = daily?.wind_direction_10m || 0;
              return `🌬️ Вітер: ${context.parsed.y.toFixed(1)} м/с | ${getWindDirectionLabel(direction)} (${Math.round(direction)}°)`;
            }
            return "";
          },
          afterLabel: (context) => {
            const daily = card.daily16?.[context.dataIndex];
            if (!daily || context.datasetIndex !== 0) return "";
            return `\nОписання: ${daily.description || "—"}`;
          },
        },
      },
    },
    scales: {
      ...chartOptions.scales,
      y: {
        beginAtZero: false,
        title: { display: true, text: "Температура (°C)", color: "#ffb36c" },
        ticks: { color: isDarkMode ? "#aaa" : "#888", font: { size: 10 } },
        grid: {
          color: isDarkMode
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(128, 128, 128, 0.1)",
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        beginAtZero: true,
        title: {
          display: true,
          text: "Вітер (м/с)",
          color: "#0099ff",
        },
        ticks: { color: "#0099ff", font: { size: 10 } },
        grid: { drawOnChartArea: false },
      },
      x: {
        ...chartOptions.scales.x,
        ticks: {
          ...chartOptions.scales.x.ticks,
          color: (ctx) => {
            if (!card.daily16 || ctx.index >= card.daily16.length) {
              return isDarkMode ? "#aaa" : "#888";
            }
            const daily = card.daily16[ctx.index];
            const dateType = getDateType(daily.date, daily.day, daily.fullDate);
            return dateType.color || (isDarkMode ? "#aaa" : "#888");
          },
          font: {
            ...chartOptions.scales.x.ticks.font,
            weight: (ctx) => {
              if (!card.daily16 || ctx.index >= card.daily16.length)
                return "normal";
              const daily = card.daily16[ctx.index];
              const dateType = getDateType(
                daily.date,
                daily.day,
                daily.fullDate,
              );
              return dateType.color ? "bold" : "normal";
            },
          },
        },
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        const daily = card.daily16[index];
        const dateType = getDateType(daily.date, daily.day, daily.fullDate);
        if (dateType.type === "holiday" || dateType.type === "birthday") {
          setSelectedDay(daily);
        } else if (dateType.type === "custom") {
          setSelectedDay(daily);
          setTempReason(dateType.label);
        } else {
          if (customHolidayName.trim()) {
            if (customHolidayName.trim().length > 12) {
              alert("Назва свята занадто довга (макс. 12 символів)!");
              return;
            }
            dispatch(
              addCustomDay({
                date: daily.fullDate,
                reason: customHolidayName.trim(),
              }),
            );
          } else {
            setSelectedDay(daily);
          }
        }
      }
    },
  };
  function externalTooltipHandler(context) {
    // Отримуємо об'єкт тултіпа та графік
    const { chart, tooltip } = context;

    // Визначаємо контейнер (fullscreen або body)
    const fsEl = document.fullscreenElement;
    const container = fsEl || document.body;

    // Шукаємо або створюємо DOM-елемент тултіпа в правильному контейнері
    let tooltipEl = container.querySelector("#chartjs-external-tooltip");

    if (!tooltipEl) {
      // Видаляємо старий тултіп з іншого контейнера (якщо є)
      const old = document.getElementById("chartjs-external-tooltip");
      if (old) old.remove();

      tooltipEl = document.createElement("div");
      tooltipEl.id = "chartjs-external-tooltip";
      tooltipEl.style.position = "fixed";
      tooltipEl.style.zIndex = "2147483647";
      tooltipEl.style.maxWidth = "min(280px, calc(100vw - 24px))";
      tooltipEl.style.boxSizing = "border-box";
      tooltipEl.style.whiteSpace = "pre-line";
      tooltipEl.style.background = "rgba(15, 15, 25, 0.92)";
      tooltipEl.style.color = "#fff";
      tooltipEl.style.borderRadius = "8px";
      tooltipEl.style.padding = "8px 12px";
      tooltipEl.style.pointerEvents = "none";
      tooltipEl.style.transition = "all 0.1s ease";
      tooltipEl.style.boxShadow = "0 8px 20px rgba(0,0,0,0.4)";
      tooltipEl.style.border = "1px solid rgba(255, 179, 108, 0.4)";
      tooltipEl.style.fontSize = "12px";
      tooltipEl.style.backdropFilter = "blur(6px)";
      tooltipEl.setAttribute("role", "dialog");
      container.appendChild(tooltipEl);
    }

    // Ховаємо тултіп, якщо курсор вийшов за межі точок
    if (tooltip.opacity === 0) {
      tooltipEl.style.opacity = "0";
      return;
    }

    // Наповнюємо вмістом
    if (tooltip.body) {
      const titleLines = tooltip.title || [];
      const bodyLines = tooltip.body.map((b) => b.lines);
      const afterLines = tooltip.afterBody || [];

      let html = "";

      // Заголовок
      titleLines.forEach((title) => {
        html += `<div style="font-weight: bold; color: #ffb36c; margin-bottom: 4px;">${title}</div>`;
      });

      // Основні рядки (температура, вітер)
      bodyLines.forEach((body) => {
        html += `<div style="margin-bottom: 2px;">${body}</div>`;
      });

      // Додаткові рядки (іконка / опис)
      afterLines.forEach((after) => {
        html += `<div style="font-size: 11px; opacity: 0.8; margin-top: 2px;">${after}</div>`;
      });

      tooltipEl.innerHTML = html;
    }

    // Позиціонування — getBoundingClientRect() дає viewport-координати навіть у fullscreen
    const position = chart.canvas.getBoundingClientRect();
    const tooltipWidth = tooltipEl.offsetWidth;
    const tooltipHeight = tooltipEl.offsetHeight;
    const vw = fsEl ? fsEl.clientWidth : window.innerWidth;
    const vh = fsEl ? fsEl.clientHeight : window.innerHeight;
    const left = Math.min(
      Math.max(12, position.left + tooltip.caretX + 10),
      vw - tooltipWidth - 12,
    );
    const top = Math.min(
      Math.max(12, position.top + tooltip.caretY - tooltipHeight - 10),
      vh - tooltipHeight - 12,
    );

    tooltipEl.style.opacity = "1";
    tooltipEl.style.left = `${left}px`;
    tooltipEl.style.top = `${top}px`;
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <WeatherCard $isMain={card.isMain} $isDarkMode={isDarkMode}>
        <CardHeader
          $isMain={card.isMain}
          style={{
            position: "relative",
            zIndex: 10,
            background: isDarkMode ? "#222" : "#444",
            borderRadius: "8px 8px 0 0",
          }}
        >
          <div>
            {isEditing ? (
              <div style={{ gap: "2px" }}>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  autoFocus
                  style={{
                    padding: "2px 5px",
                    fontSize: "14px",
                    borderRadius: "4px",
                    border: "1px solid #ff6a00",
                    background: isDarkMode ? "#333" : "#fff",
                    color: isDarkMode ? "#fff" : "#000",
                  }}
                />
                <button
                  onClick={handleRenameSubmit}
                  style={{
                    background: "green",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "12px",
                    padding: "2px 8px",
                  }}
                >
                  ✓
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "12px",
                    padding: "2px 4px",
                  }}
                >
                  ✕
                </button>
              </div>
            ) : (
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  margin: 0,
                }}
              >
                <span style={{ color: "#ffb36c", fontWeight: 700 }}>
                  #{index + 1}
                </span>
                <span>{card.locationName}</span>
              </h3>
            )}
            <p style={{ fontSize: "10px", color: "#fcfcfc" }}>
              Широта: {card.lat?.toFixed(2)}, Довгота: {card.lon?.toFixed(2)}
            </p>
          </div>
          <ActionButtons style={{ position: "relative" }}>
            <button
              ref={(el) => { if (card.isMain && registerRef) registerRef('weatherGear', el); }}
              onClick={() => {
                window.dispatchEvent(new CustomEvent('domino-weather-gear-clicked'));
                if (isDropdownOpen) handleCloseDropdown();
                else setIsDropdownOpen(true);
              }}
              title="Меню"
              style={{
                fontSize: "28px",
                padding: "5px",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <BiCog size={28} />
            </button>
            {(isDropdownOpen || isDropdownClosing) && (
              <SettingsDropdownMenu
                $isDarkMode={isDarkMode}
                $isClosing={isDropdownClosing}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: "10px 12px 0 0",
                  }}
                >
                  <button
                    onClick={handleCloseDropdown}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: isDarkMode ? "#ffb36c" : "#333",
                      fontSize: "20px",
                      cursor: "pointer",
                      padding: "4px",
                      lineHeight: 1,
                    }}
                    aria-label="Закрити меню"
                    title="Закрити меню"
                  >
                    ✕
                  </button>
                </div>
                {!isEditing && (
                  <button
                    onClick={() => {
                      setIsEditing(true);
                      handleCloseDropdown();
                    }}
                    style={{
                      textAlign: "left",
                      padding: "10px",
                      background: "transparent",
                      color: isDarkMode ? "#fff" : "#000",
                      borderBottom: "1px solid #444",
                      fontSize: "13px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <BiEdit size={16} /> Змінити назву
                  </button>
                )}
                <button
                  onClick={() => {
                    setIsBgModalOpen(true);
                    handleCloseDropdown();
                  }}
                  style={{
                    textAlign: "left",
                    padding: "10px",
                    background: "transparent",
                    color: isDarkMode ? "#fff" : "#000",
                    borderBottom: "1px solid #444",
                    fontSize: "13px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <BiImageAlt size={16} /> Змінити фон
                </button>
                <button
                  onClick={() => {
                    handleAiToggle();
                    handleCloseDropdown();
                  }}
                  style={{
                    textAlign: "left",
                    padding: "10px",
                    background: "transparent",
                    color: isDarkMode ? "#fff" : "#000",
                    borderBottom: "1px solid #444",
                    fontSize: "13px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <BiBrain size={16} />{" "}
                  {isAiEnabled ? "Вимкнути ШІ" : "Увімкнути ШІ"}
                </button>
                <button
                  onClick={() => {
                    setIsCardSettingsOpen(true);
                  }}
                  style={{
                    textAlign: "left",
                    padding: "10px",
                    background: "transparent",
                    color: isDarkMode ? "#fff" : "#000",
                    borderBottom: "1px solid #444",
                    fontSize: "13px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <BiCog size={16} /> Налаштування картки
                </button>
                <button
                  onClick={() => {
                    setIsCustomDatesModalOpen(true);
                    handleCloseDropdown();
                  }}
                  style={{
                    textAlign: "left",
                    padding: "10px",
                    background: "transparent",
                    color: isDarkMode ? "#fff" : "#000",
                    borderBottom: "1px solid #444",
                    fontSize: "13px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  📅 Встановити дати
                </button>
                <button
                  onClick={() => {
                    onOpenDetails(cityImage || card.cityImage);
                  }}
                  style={{
                    textAlign: "left",
                    padding: "10px",
                    background: "transparent",
                    color: isDarkMode ? "#fff" : "#000",
                    borderBottom: "1px solid #444",
                    fontSize: "13px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <BiLineChart size={16} /> Детальна погода
                </button>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "6px",
                    borderBottom: "1px solid #444",
                  }}
                >
                  <button
                    disabled={index === 0}
                    onClick={() => {
                      handleCloseDropdown();
                      moveWeatherCard(card.id, -1);
                    }}
                    style={{
                      flex: 1,
                      background: "transparent",
                      color:
                        index === 0 ? "grey" : isDarkMode ? "#fff" : "#000",
                      fontSize: "13px",
                      cursor: index === 0 ? "default" : "pointer",
                    }}
                  >
                    Зробити вище картку
                  </button>
                  <button
                    disabled={index === totalCards - 1}
                    onClick={() => {
                      handleCloseDropdown();
                      moveWeatherCard(card.id, 1);
                    }}
                    style={{
                      flex: 1,
                      background: "transparent",
                      color:
                        index === totalCards - 1
                          ? "grey"
                          : isDarkMode
                            ? "#fff"
                            : "#000",
                      fontSize: "13px",
                      cursor: index === totalCards - 1 ? "default" : "pointer",
                    }}
                  >
                    Зробити нижче картку
                  </button>
                </div>
                {card.isMain ? (
                  <button
                    onClick={handleGpsToggle}
                    style={{
                      textAlign: "left",
                      padding: "10px",
                      background: "transparent",
                      color: isLocationEnabled
                        ? isDarkMode
                          ? "#fff"
                          : "#000"
                        : "#b300ad",
                      fontSize: "13px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <BiCurrentLocation size={14} />{" "}
                    {isLocationEnabled ? "GPS On" : "GPS Off"}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleDeleteCard(card.id);
                    }}
                    style={{
                      textAlign: "left",
                      padding: "10px",
                      background: "transparent",
                      color: "red",
                      fontSize: "13px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <BiTrash size={14} /> Видалити
                  </button>
                )}
              </SettingsDropdownMenu>
            )}
          </ActionButtons>
        </CardHeader>
        <CustomTimersDisplay customDays={customDays} cardId={card.id} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          {(useGlobalLayout ? layout : localLayout).map((block) => {
            if (!block.visible) return null;
            if (block.key === "current") {
              return (
                <CurrentWeatherBanner
                  key="current"
                  $image={cityImage || card.cityImage}
                  style={{
                    height: "auto",
                    minHeight: "150px",
                    borderRadius: 0,
                  }}
                >
                  <CurrentWeatherBanne
                    style={{
                      position: "relative",
                      borderRadius: 0,
                      padding: "2px",
                      background: "rgba(0,0,0,0.6)",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "1px",
                        fontSize: "11px",
                        width: "100%",
                      }}
                    >
                      <ImagePlaceholder width="150px">
                        {card.current.iconPlaceholder}
                      </ImagePlaceholder>
                      <h1
                        style={{
                          margin: "0",
                          color: isExtremeTemp ? "#ff4d4d" : "inherit",
                          fontSize: "13px",
                        }}
                      >
                        Зараз: {card.current.temp}
                      </h1>
                      <p style={{ margin: "0", fontSize: "11px", opacity: 1 }}>
                        Відчувається: {card.current.feels_like}
                      </p>
                      <div>
                        Вологість: <b>{card.current.humidity ?? "—"}</b>
                      </div>
                      <div
                        style={{ color: isExtremeWind ? "#ff4d4d" : "inherit" }}
                      >
                        {" "}
                        Вітер: <b>{card.current.wind_speed ?? "0 м/с"}</b>
                      </div>
                      <div>
                        Напрямок вітру:{" "}
                        <b>{card.current.wind_direction_10m}° ({getWindDirectionText(card.current.wind_direction_10m)})</b>
                      </div>
                      <div>
                        Пориви вітру: <b>{card.current.wind_gusts_10m} м/с</b>
                      </div>
                      <div>
                        Точка роси: <b>{card.current.dew_point_2m}°C</b>
                      </div>
                      <div>
                        Тиск: <b>{card.current.pressure ?? "—"}</b>
                      </div>
                      <div>
                        Хмарність: <b>{card.current.cloud_cover}%</b>
                      </div>
                      <div>
                        Видимість:{" "}
                        <b>
                          {card.current.visibility !== undefined
                            ? (card.current.visibility / 1000).toFixed(1)
                            : "—"}{" "}
                          км
                        </b>
                      </div>
                      <div
                        style={{ color: isExtremeUV ? "#ff4d4d" : "inherit" }}
                      >
                        {" "}
                        УФ-індекс: <b>{card.current.uv_index ?? 0}</b>
                      </div>
                    </div>
                    
                  </CurrentWeatherBanne>
                </CurrentWeatherBanner>
              );
            }
            if (block.key === "ai" && aiSummary) {
              return (
                <AiSummaryBox key="ai" $isDarkMode={isDarkMode} layout>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      className="ai-header-text"
                      style={{
                        fontWeight: 800,
                        color: "#b362ff",
                        fontSize: "11px",
                        letterSpacing: "1px",
                      }}
                    >
                      Прогноз ШІ
                    </span>
                    <button
                      className="ai-edit-btn"
                      onClick={() => setIsEditingPrompt(!isEditingPrompt)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: 900,
                        fontSize: "12px",
                        color: "#8a2be2",
                        padding: 0,
                      }}
                      title="Редагувати умову промпту"
                    >
                      {isEditingPrompt ? "✕" : "✎ Умова"}
                    </button>
                  </div>
                  {isEditingPrompt ? (
                    <PromptEditor $isDarkMode={isDarkMode}>
                      <label style={{ fontSize: "10px", fontWeight: "bold" }}>
                        Своя інструкція:
                      </label>
                      <PromptTextarea
                        $isDarkMode={isDarkMode}
                        value={customAiPrompt}
                        onChange={(e) => setCustomAiPrompt(e.target.value)}
                        placeholder="Наприклад: Дай поради для рибалки на основі вітру та тиску..."
                      />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <select
                          value={responseLength}
                          onChange={(e) => setResponseLength(e.target.value)}
                          style={{
                            fontSize: "10px",
                            padding: "2px",
                            borderRadius: "4px",
                            background: isDarkMode ? "#333" : "#fff",
                            color: isDarkMode ? "#fff" : "#000",
                          }}
                        >
                          <option value="concise">Стисло</option>
                          <option value="extensive">Обширно</option>
                        </select>
                        <select
                          value={aiStyle}
                          onChange={(e) => setAiStyle(e.target.value)}
                          style={{
                            fontSize: "10px",
                            padding: "2px",
                            borderRadius: "4px",
                            background: isDarkMode ? "#333" : "#fff",
                            color: isDarkMode ? "#fff" : "#000",
                          }}
                        >
                          <option value="friendly">Дружній</option>
                          <option value="scientific">Науковий</option>
                          <option value="sarcastic">Саркастичний</option>
                        </select>
                        <button
                          onClick={async () => {
                            await localforage.setItem(
                              `ai_custom_prompt_${card.id}`,
                              customAiPrompt,
                            );
                            await localforage.setItem(
                              `ai_response_length_${card.id}`,
                              responseLength,
                            );
                            await localforage.setItem(
                              `ai_style_${card.id}`,
                              aiStyle,
                            );
                            setIsEditingPrompt(false);
                            generateWeatherSummary();
                          }}
                          style={{
                            background: "#8a2be2",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            padding: "4px 8px",
                            fontSize: "10px",
                            cursor: "pointer",
                            fontWeight: "bold",
                          }}
                        >
                          Зберегти та оновити
                        </button>
                      </div>
                    </PromptEditor>
                  ) : (
                    <>
                      <motion.div layout transition={{ duration: 0.3 }}>
                        <SummaryText
                          ref={summaryRef}
                          $isExpanded={isSummaryExpanded}
                        >
                          {aiSummary}
                        </SummaryText>
                      </motion.div>
                      {hasOverflow && (
                        <ShowMoreBtn
                          onClick={() =>
                            setIsSummaryExpanded(!isSummaryExpanded)
                          }
                        >
                          {isSummaryExpanded ? "Згорнути" : "Читати далі..."}
                        </ShowMoreBtn>
                      )}
                    </>
                  )}
                </AiSummaryBox>
              );
            }
            if (block.key === "hourly") {
              return (
                <div key="hourly">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <h4 style={{ margin: 0 }}>Годинний прогноз</h4>
                  </div>
                  {hourlyDayGroups.length > 1 && (
                    <div
                      style={{
                        display: "flex",
                        gap: "1px",
                        flexWrap: "wrap",
                      }}
                    >
                      {hourlyDayGroups.map((group, index) => (
                        <button
                          key={group.label}
                          onClick={() => setSelectedHourlyDay(index)}
                          style={{
                            padding: "2px",
                            borderRadius: "3px",
                            border: "none",
                            cursor: "pointer",
                            background:
                              selectedHourlyDay === index
                                ? "#00bfff"
                                : isDarkMode
                                  ? "#333"
                                  : "#ddd",
                            color:
                              selectedHourlyDay === index
                                ? "#000"
                                : isDarkMode
                                  ? "#fff"
                                  : "#000",
                            fontSize: "11.8px",
                            fontWeight: "bold",
                          }}
                        >
                          {group.title || group.label}
                        </button>
                      ))}
                    </div>
                  )}
                  {visibleHourly && visibleHourly.length > 0 && (
                    <div
                      ref={hourlyChartPanelRef}
                      style={{
                        position: "relative",
                        width: "100%",
                        minHeight: fullscreenChart === "hourly" ? (isCapturing ? `${window.innerHeight}px` : "100vh") : undefined,
                        padding: fullscreenChart === "hourly" ? "16px" : undefined,
                        boxSizing: "border-box",
                        background: fullscreenChart === "hourly"
                          ? isDarkMode ? "#000" : "#f5f5f5"
                          : "transparent",
                      }}
                    >
                      {renderChartHeader("hourly", hourlyChartPanelRef, [
                        { key: "day", label: "Температура", color: "#ffb36c" },
                        { key: "wind", label: "Вітер", color: "#0099ff" },
                      ])}

                      <div style={{ position: "relative", width: "100%" }}>
                      <ChartScrollWrapper>
                        <ChartInnerContainer
                          $width={fullscreenChart === "hourly" ? `max(100%, ${hourlyChartWidth}px)` : hourlyChartWidth}
                          $height={fullscreenChart === "hourly" ? (isCapturing ? `${window.innerHeight - 90}px` : "calc(100vh - 90px)") : "150px"}
                        >
                          <Line
                            key={`hourly-${fullscreenChart || "normal"}`}
                            ref={hourlyChartInstanceRef}
                            options={chartOptions}
                            data={hourlyChartData}
                          />
                        </ChartInnerContainer>
                      </ChartScrollWrapper>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "50px",
                          height: "calc(100% - 29px)",
                          background: isDarkMode ? "#000" : "#f5f5f5",
                          overflow: "hidden",
                          pointerEvents: "none",
                          display: fullscreenChart === "hourly" ? "none" : "block",
                        }}
                      >
                        <ChartInnerContainer
                          $width={hourlyChartWidth}
                          $height="150px"
                        >
                          <Line
                            options={{
                              ...chartOptions,
                              plugins: {
                                ...chartOptions.plugins,
                                tooltip: { enabled: false },
                              },
                            }}
                            data={hourlyChartData}
                          />
                        </ChartInnerContainer>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          width: "50px",
                          height: "calc(100% - 29px)",
                          background: isDarkMode ? "#000" : "#f5f5f5",
                          overflow: "hidden",
                          pointerEvents: "none",
                          display: fullscreenChart === "hourly" ? "none" : "block",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: `${hourlyChartWidth}px`,
                            height: "150px",
                          }}
                        >
                          <ChartInnerContainer
                            $width={hourlyChartWidth}
                            $height="150px"
                          >
                            <Line
                              options={{
                                ...chartOptions,
                                plugins: {
                                  ...chartOptions.plugins,
                                  tooltip: { enabled: false },
                                },
                              }}
                              data={hourlyChartData}
                            />
                          </ChartInnerContainer>
                        </div>
                      </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            if (block.key === "daily") {
              return (
                <div key="daily">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <h4 style={{ margin: 0, fontSize: "14px" }}>
                      Прогноз на 16 днів (включаючи 2 минулі дні)
                    </h4>
                  </div>
                  
                  {/* Липка легенда + кнопки в один рядок */}
                  <div style={{
                    position: "sticky",
                    top: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "8px",
                    padding: "6px 8px",
                    background: isDarkMode ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(4px)",
                    borderBottom: "1px solid #ffb36c",
                    zIndex: 100,
                  }}>
                    {renderChartLegend([
                      { key: "day", label: "День", color: "#ffb36c" },
                      { key: "night", label: "Ніч", color: "#ff1493" },
                      { key: "wind", label: "Вітер", color: "#0099ff" },
                    ])}
                    {renderChartActions("daily", dailyChartPanelRef)}
                  </div>
                  
                  <div
                    ref={dailyChartPanelRef}
                    style={{
                      position: "relative",
                      width: "100%",
                      minHeight: fullscreenChart === "daily" ? (isCapturing ? `${window.innerHeight}px` : "100vh") : undefined,
                      padding: fullscreenChart === "daily" ? "16px" : undefined,
                      boxSizing: "border-box",
                      background: fullscreenChart === "daily"
                        ? isDarkMode ? "#000" : "#f5f5f5"
                        : "transparent",
                    }}
                  >
                    {fullscreenChart === "daily" && renderChartHeader("daily", dailyChartPanelRef, [
                      { key: "day", label: "День", color: "#ffb36c" },
                      { key: "night", label: "Ніч", color: "#ff1493" },
                      { key: "wind", label: "Вітер", color: "#0099ff" },
                    ])}

                    <div style={{ position: "relative", width: "100%" }}>
                    <ChartScrollWrapper ref={dailyChartRef}>
                      <ChartInnerContainer
                        $width={fullscreenChart === "daily" ? "max(100%, 900px)" : 900}
                        $height={fullscreenChart === "daily" ? (isCapturing ? `${window.innerHeight - 120}px` : "calc(100vh - 120px)") : "150px"}
                      >
                          <Line
                            key={`daily-${fullscreenChart || "normal"}`}
                            ref={dailyChartInstanceRef}
                          options={dailyChartOptions}
                          data={dailyChartData}
                        />
                      </ChartInnerContainer>
                    </ChartScrollWrapper>
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "50px",
                       height: "calc(100% - 29px)",
                        background: isDarkMode ? "#000" : "#f5f5f5",
                        overflow: "hidden",
                        pointerEvents: "none",
                        display: fullscreenChart === "daily" ? "none" : "block",
                      }}
                    >
                      <ChartInnerContainer $width={1300} $height="150px">
                        <Line
                          options={{
                            ...dailyChartOptions,
                            plugins: {
                              ...dailyChartOptions.plugins,
                              tooltip: { enabled: false },
                            },
                          }}
                          data={dailyChartData}
                        />
                      </ChartInnerContainer>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "50px",
                        height: "calc(100% - 29px)",
                        background: isDarkMode ? "#000" : "#f5f5f5",
                        overflow: "hidden",
                        pointerEvents: "none",
                        display: fullscreenChart === "daily" ? "none" : "block",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          width: "1300px",
                          height: "150px",
                        }}
                      >
                        <ChartInnerContainer $width={1300} $height="150px">
                          <Line
                            options={{
                              ...dailyChartOptions,
                              plugins: {
                                ...dailyChartOptions.plugins,
                                tooltip: { enabled: false },
                              },
                            }}
                            data={dailyChartData}
                          />
                        </ChartInnerContainer>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </WeatherCard>

      {isCustomDatesModalOpen && (
        <CustomDatesModal
          isDarkMode={isDarkMode}
          currentCardId={card.id}
          onClose={() => setIsCustomDatesModalOpen(false)}
        />
      )}

      {isCardSettingsOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            zIndex: 3000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            ref={(el) => { if (card.isMain && registerRef) registerRef('weatherModal', el); }}
            style={{
              background: isDarkMode ? "#222" : "#fff",
              borderRadius: "10px",
              width: "90%",
              maxWidth: "350px",
              color: isDarkMode ? "#fff" : "#000",
            }}
          >
            <h3 style={{ margin: "0 0 15px 0" }}>Налаштування картки</h3>

            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "15px",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={useGlobalLayout}
                onChange={(e) => setUseGlobalLayout(e.target.checked)}
              />
              <span style={{ fontSize: "13px" }}>
                Автоматично змінити, коли ви зміните загальні налаштування
              </span>
            </label>

            {!useGlobalLayout && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "15px",
                  border: "1px solid #444",
                  borderRadius: "5px",
                }}
              >
                <p
                  style={{
                    margin: "0 0 5px 0",
                    fontSize: "12px",
                    color: "#aaa",
                  }}
                >
                  Виберіть блоки та їх порядок:
                </p>
                {localLayout.map((block, idx) => (
                  <div
                    key={block.key}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      background: isDarkMode ? "#333" : "#eee",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={block.visible}
                      onChange={(e) => {
                        const newLayout = [...localLayout];
                        newLayout[idx].visible = e.target.checked;
                        setLocalLayout(newLayout);
                      }}
                    />
                    <span style={{ flex: 1, fontSize: "13px" }}>
                      {block.key === "current"
                        ? "Температура та іконка"
                        : block.key === "ai"
                          ? "Підсумок ШІ"
                          : block.key === "hourly"
                            ? "Годинний графік"
                            : "Прогноз на 16 днів"}
                    </span>
                    <div style={{ display: "flex", gap: "5px" }}>
                      <button
                        disabled={idx === 0}
                        onClick={() => {
                          const newLayout = [...localLayout];
                          [newLayout[idx - 1], newLayout[idx]] = [
                            newLayout[idx],
                            newLayout[idx - 1],
                          ];
                          setLocalLayout(newLayout);
                        }}
                        style={{
                          background: "transparent",
                          border: "none",
                          color:
                            idx === 0 ? "#555" : isDarkMode ? "#fff" : "#000",
                          cursor: idx === 0 ? "default" : "pointer",
                        }}
                      >
                        ↑
                      </button>
                      <button
                        disabled={idx === localLayout.length - 1}
                        onClick={() => {
                          const newLayout = [...localLayout];
                          [newLayout[idx + 1], newLayout[idx]] = [
                            newLayout[idx],
                            newLayout[idx + 1],
                          ];
                          setLocalLayout(newLayout);
                        }}
                        style={{
                          background: "transparent",
                          border: "none",
                          color:
                            idx === localLayout.length - 1
                              ? "#555"
                              : isDarkMode
                                ? "#fff"
                                : "#000",
                          cursor:
                            idx === localLayout.length - 1
                              ? "default"
                              : "pointer",
                        }}
                      >
                        ↓
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={async () => {
                await localforage.setItem(
                  `useGlobalLayout_${card.id}`,
                  useGlobalLayout,
                );
                await localforage.setItem(
                  `localLayout_${card.id}`,
                  localLayout,
                );
                setIsCardSettingsOpen(false);
              }}
              style={{
                width: "100%",
                padding: "10px",
                background: "#ffb36c",
                color: "#000",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Зберегти
            </button>
          </div>
        </div>
      )}
      {isBgModalOpen && (
        <BgModalOverlay onClick={() => setIsBgModalOpen(false)}>
          <BgModalContent onClick={(e) => e.stopPropagation()}>
            <h2 style={{ margin: 0, color: "#ffb36c" }}>
              Зміна фону: {card.locationName}
            </h2>
            <BgGrid>
              <BgItem
                $active={bgMode === "wiki"}
                onClick={() => handleChangeBackground("wiki")}
              >
                <NameOverlay>Вікіпедія</NameOverlay>
                <BgSquare src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/150px-Wikipedia-logo-v2.svg.png" />
              </BgItem>
              {DEFAULT_BGS.filter((bg) => !bg.src.endsWith(".mp4")).map(
                (bg, idx) => (
                  <BgItem
                    key={idx}
                    $active={bgMode === bg.src}
                    onClick={() => handleChangeBackground(bg.src)}
                  >
                    {bg.author && (
                      <TopOverlay>
                        <div style={{ fontWeight: "bold" }}>{bg.author}</div>
                        {bg.source && <div>{bg.source}</div>}
                      </TopOverlay>
                    )}
                    <NameOverlay>{bg.name}</NameOverlay>
                    <BgSquare src={bg.src} />
                  </BgItem>
                ),
              )}
            </BgGrid>
            <button
              onClick={() => setIsBgModalOpen(false)}
              style={{
                padding: "8px",
                background: "#ffb36c",
                color: "black",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Закрити
            </button>
          </BgModalContent>
        </BgModalOverlay>
      )}
    </div>
  );
};
export default WeatherCardComponent;
