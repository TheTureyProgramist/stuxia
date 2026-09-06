import React, { useState, useEffect, useRef, useCallback } from "react";
import styled, { css } from "styled-components";
import { MdPrint } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import localforage from "localforage";
import { LuWallpaper } from "react-icons/lu";
import * as fabric from "fabric";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import JSZip from "jszip";
import monody from "../../photos/vip-images/asium/vip-forest.webp";
import { DEFAULT_BGS } from "../Hero/defaultBgs";
import { ImFolderDownload } from "react-icons/im";
const isVideoSource = (src) => {
  if (src instanceof Blob) return true;

  if (typeof src === "object" && src !== null) {
    const nestedType = src.type || src.mimeType || "";
    if (typeof nestedType === "string" && nestedType.includes("video/")) {
      return true;
    }
    return isVideoSource(src.src || src.url || "");
  }

  if (typeof src !== "string") return false;

  const normalized = src.toLowerCase();
  return (
    /\.(mp4|webm|ogg|ogv|mov|avi|mkv|3gp)(\?|$)/.test(normalized) ||
    normalized.startsWith("data:video/") ||
    normalized.startsWith("blob:video/") ||
    normalized.includes("/video/")
  );
};

const FanArtDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FanArtTitle = styled.div`
  font-size: 22px;
  position: relative;
  z-index: 100;
  border-radius: 10px;
  padding: 10px 24px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${(props) => (props.$isDarkMode ? "white" : "black")};
  margin-bottom: 15px;
  ${(props) =>
    props.$isStickyBgMode
      ? css`
           background: ${props.$isDarkMode
          ? "rgba(15, 15, 25, 0.75)"
          : "rgba(255, 255, 255, 0.75)"
        };
           backdrop-filter: blur(12px);
           -webkit-backdrop-filter: blur(12px);
           border: 1px solid
             ${props.$isDarkMode
          ? "rgba(255, 255, 255, 0.15)"
          : "rgba(0, 0, 0, 0.15)"
        };
           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
         `
      : css`
           background: ${props.$isDarkMode
          ? "rgba(255, 255, 255, 0.05)"
          : "rgba(0, 0, 0, 0.05)"
        };
           border: 1px solid
             ${props.$isDarkMode
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(0, 0, 0, 0.1)"
        };
         `}
`;

const PlaylistContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  margin-bottom: 40px;
  width: 100%;
  padding: 0 12px;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x proximity;
  position: relative;
  z-index: 100;
  scroll-padding-left: 12px;
  scroll-padding-right: 12px;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
`;

const PlaylistItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  flex: 0 0 auto;
  &:hover {
    transform: scale(1.05);
  }
`;

const PlaylistImageWrapper = styled.div`
  position: relative;
  z-index: 100;
  width: 191px;
  height: 130px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const PlaylistImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const PlaylistTextOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  font-size: 10px;
  padding: 5px 0;
  font-weight: 600;
  text-transform: capitalize;
  z-index: 2;
  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${(props) => (props.$isDarkMode ? "#18181f" : "#ffffff")};
  border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)")};
  padding: 20px;
  border-radius: 24px;
  width: min(95%, 1200px);
  max-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  overflow: hidden;
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)")};
  flex-shrink: 0;
`;

const ModalBody = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #e69d52;
  }
`;

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 1;
  color: ${(props) => (props.$isDarkMode ? "white" : "black")};
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: #ff6961;
    color: white;
    border-color: #ff6961;
    transform: scale(1.1);
  }
`;

const ModalTitle = styled.h2`
  color: ${(props) => (props.$isDarkMode ? "white" : "black")};
  font-size: 22px;
  margin: 0;
  font-weight: 700;
  text-transform: capitalize;
`;

const FanBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  width: 100%;
  max-width: 100%;
`;

const FanArtCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
`;

const BenefitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
`;

const FanArtImageContainer = styled.div`
  position: relative;
  width: 250px;
  height: 170px;
  border-radius: 15px;
  overflow: hidden;

  &:hover .image-overlay {
    opacity: 1;
    transform: translateY(0);
  }
  &:hover img {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

const ImageTitleStrip = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  font-size: 12px;
  padding: 8px 5px;
  font-weight: bold;
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const ActionButtonsContainer = styled.div`
  position: absolute;
  bottom: 6px;
  left: 2%;
  transform: translateX(-50%) translateY(10px);
  width: calc(100% - 12px);
  max-width: 258px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease;
  padding: 4px;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);

  @media (hover: none) {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

const ActionButton = styled.button`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 8px;
  padding: 4px 8px;
  min-width: 34px;
  height: 32px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  &:hover {
    background: #ffb36c;
    color: #111;
    border-color: #ffb36c;
    transform: scale(1.06);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const SearchStatusText = styled.div`
  color: ${(props) => (props.$isDarkMode ? "#ccc" : "#555")};
  margin-top: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  width: 100%;
`;

const SearchInput = styled.input`
  padding: 10px 18px;
  border-radius: 25px;
  border: 1px solid ${(props) => (props.$isDarkMode ? "#555" : "#ccc")};
  background: ${(props) => (props.$isDarkMode ? "#2a2a35" : "#fff")};
  color: ${(props) => (props.$isDarkMode ? "white" : "black")};
  width: 100%;
  max-width: 600px;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s ease;
  &:focus {
    border-color: #ffb36c;
    box-shadow: 0 0 0 2px rgba(255, 179, 108, 0.2);
  }
`;

const SearchButton = styled(ActionButton)`
  padding: 8px 20px;
  width: auto;
  background: #ffb36c;
  color: #111;
  font-weight: bold;
  border-radius: 25px;
  border: none;
  font-size: 14px;
  &:hover {
    background: #ffa040;
    color: #000;
    transform: translateY(-1px);
  }
`;

const SearchResultsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const SearchResultItem = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  &:hover img {
    transform: scale(1.1);
  }
`;

const SourceSelector = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 5px;
  flex-wrap: wrap;
  justify-content: center;
`;

const SourceButton = styled.button`
  padding: 6px 18px;
  border-radius: 20px;
  border: 1px solid #ffb36c;
  background: ${(props) => (props.$active ? "#ffb36c" : "transparent")};
  color: ${(props) =>
    props.$active ? "black" : props.$isDarkMode ? "white" : "black"};
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s ease;
  font-weight: 600;
  &:hover {
    background: ${(props) => (props.$active ? "#ffa040" : "rgba(255,179,108,0.2)")};
  }
`;

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  margin-top: 20px;
`;

const CanvasWrapper = styled.div`
  border: 2px solid #ffb36c;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  max-width: 100%;
  canvas {
    max-width: 100%;
  }
  position: relative;
`;

const FullscreenOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const NavArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  font-size: 40px;
  padding: 20px;
  cursor: pointer;
  z-index: 2010;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  ${(props) => (props.$left ? "left: 20px;" : "right: 20px;")}
`;

const Toolbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 100%;
  margin-bottom: 15px;
`;

const ToolbarRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const EditorCard = styled.div`
  background: ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)")};
  border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)")};
  border-radius: 14px;
  padding: 8px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const ModeToggleGroup = styled.div`
  display: flex;
  background: ${(props) => (props.$isDarkMode ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.08)")};
  padding: 4px;
  border-radius: 25px;
  gap: 4px;
  border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)")};
`;

const ModeButton = styled.button`
  padding: 8px 22px;
  border-radius: 20px;
  border: none;
  background: ${(props) => (props.$active ? "#ffb36c" : "transparent")};
  color: ${(props) => (props.$active ? "#111" : props.$isDarkMode ? "#eee" : "#333")};
  font-weight: ${(props) => (props.$active ? "bold" : "600")};
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${(props) => (props.$active ? "0 2px 8px rgba(255, 179, 108, 0.4)" : "none")};
  &:hover {
    color: ${(props) => (props.$active ? "#000" : "#ffb36c")};
  }
`;

const CustomFileInputLabel = styled.label`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${(props) => (props.$isDarkMode ? "white" : "black")};
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(255, 179, 108, 0.2);
    border-color: #ffb36c;
  }
  input {
    display: none;
  }
`;

const ColorPickerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  input[type="color"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

const ColorSwatch = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${(props) => props.$color};
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

// --- IndexedDB Logic ---
const DB_NAME = "FanArtDB";
const STORE_NAME = "Drafts";
const saveDraft = async (json) => {
  const request = indexedDB.open(DB_NAME, 1);
  request.onupgradeneeded = (e) =>
    e.target.result.createObjectStore(STORE_NAME);
  request.onsuccess = (e) => {
    const db = e.target.result;
    const tx = db.transaction(STORE_NAME, "readwrite");
    tx.objectStore(STORE_NAME).put(json, "currentDraft");
  };
};

const loadDraft = () => {
  return new Promise((resolve) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = (e) =>
      e.target.result.createObjectStore(STORE_NAME);
    request.onsuccess = (e) => {
      const db = e.target.result;
      const tx = db.transaction(STORE_NAME, "readonly");
      const getReq = tx.objectStore(STORE_NAME).get("currentDraft");
      getReq.onsuccess = () => resolve(getReq.result);
    };
  });
};

const ShowInfo = styled.div`
  font-size: 11px;
  color: ${(props) => (props.$isDarkMode ? "#ddd" : "#444")};
  text-align: left;
  width: 100%;
`;

// Відео-thumbnail: показує перший доступний кадр через canvas seek
const VideoThumb = ({ src }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (!src || !canvasRef.current) return;
    const video = document.createElement("video");
    video.src = typeof src === "string" ? src : URL.createObjectURL(src);
    video.crossOrigin = "anonymous";
    video.muted = true;
    video.preload = "metadata";
    let objUrl = src instanceof Blob ? video.src : null;
    const cleanup = () => {
      if (objUrl) URL.revokeObjectURL(objUrl);
    };
    video.onloadedmetadata = () => {
      video.currentTime = 1;
    };
    video.onseeked = () => {
      if (!canvasRef.current) return;
      const ctx = canvasRef.current.getContext("2d");
      ctx.drawImage(video, 0, 0, 270, 170);
      cleanup();
    };
    video.onerror = cleanup;
    return cleanup;
  }, [src]);
  return (
    <canvas
      ref={canvasRef}
      width={270}
      height={170}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />
  );
};

const FabricEditor = ({
  onAddImage,
  isDarkMode,
}) => {
  const canvasElementRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [brushColor, setBrushColor] = useState("#ffb36c");
  const [brushWidth, setBrushWidth] = useState(5);
  const [isDrawing, setIsDrawing] = useState(false);
  const [fontFamily, setFontFamily] = useState("sans-serif");
  const [rgba, setRgba] = useState({ r: 1, g: 1, b: 1, a: 1 });

  useEffect(() => {
    if (!canvasElementRef.current) return;

    const initCanvas = new fabric.Canvas(canvasElementRef.current, {
      width: window.innerWidth < 768 ? 300 : 600,
      height: 400,
      backgroundColor: "#ffffff",
      isDrawingMode: false,
    });

    // Відновлення чернетки
    loadDraft().then((json) => {
      if (json)
        initCanvas.loadFromJSON(json).then(() => initCanvas.renderAll());
    });

    // Автозбереження кожні 5 секунд
    const saveInterval = setInterval(() => {
      saveDraft(initCanvas.toJSON());
    }, 5000);

    setCanvas(initCanvas);

    return () => {
      clearInterval(saveInterval);
      initCanvas.dispose();
    };
  }, []);

  useEffect(() => {
    if (!canvas) return;
    canvas.isDrawingMode = isDrawing;
    if (isDrawing) {
      if (!canvas.freeDrawingBrush) {
        canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
      }
      canvas.freeDrawingBrush.color = brushColor;
      canvas.freeDrawingBrush.width = parseInt(brushWidth, 10);
    }
  }, [canvas, brushColor, brushWidth, isDrawing]);

  const addText = () => {
    if (!canvas) return;
    const text = new fabric.IText("Ваш текст", {
      left: 100,
      top: 100,
      fontFamily: fontFamily,
      fill: brushColor,
    });
    canvas.add(text);
    canvas.setActiveObject(text);
    canvas.renderAll();
  };

  const deleteActiveObject = () => {
    if (!canvas) return;
    const activeObjects = canvas.getActiveObjects();
    if (activeObjects.length > 0) {
      activeObjects.forEach((obj) => canvas.remove(obj));
      canvas.discardActiveObject();
      canvas.renderAll();
    } else {
      alert("Виберіть об'єкт на полотні для видалення.");
    }
  };

  const handleCrop = () => {
    const activeObject = canvas.getActiveObject();
    if (!activeObject)
      return alert("Спочатку виберіть об'єкт (фото) для обрізки");

    const bound = activeObject.getBoundingRect();
    const data = canvas.toDataURL({
      left: bound.left,
      top: bound.top,
      width: bound.width,
      height: bound.height,
      format: "png",
    });

    fabric.FabricImage.fromURL(data).then((img) => {
      canvas.clear();
      canvas.setDimensions({ width: bound.width, height: bound.height });
      canvas.setBackgroundColor("#fff");
      canvas.add(img);
      canvas.renderAll();
    });
  };

  const applyFilter = (filterType) => {
    const activeObject = canvas.getActiveObject();
    if (!activeObject || activeObject.type !== "image") return;

    activeObject.filters = [];
    if (filterType === "grayscale")
      activeObject.filters.push(new fabric.filters.Grayscale());
    if (filterType === "invert")
      activeObject.filters.push(new fabric.filters.Invert());
    if (filterType === "contrast")
      activeObject.filters.push(new fabric.filters.Contrast({ contrast: 0.5 }));
    if (filterType === "rgba") {
      const matrix = [
        rgba.r,
        0,
        0,
        0,
        0,
        0,
        rgba.g,
        0,
        0,
        0,
        0,
        0,
        rgba.b,
        0,
        0,
        0,
        0,
        0,
        rgba.a,
        0,
      ];
      activeObject.filters.push(new fabric.filters.ColorMatrix({ matrix }));
    }

    activeObject.applyFilters();
    canvas.renderAll();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file || !canvas) return;

    const reader = new FileReader();
    reader.onload = (f) => {
      fabric.FabricImage.fromURL(f.target.result).then((img) => {
        img.scaleToWidth(canvas.width * 0.8);
        canvas.add(img);
        canvas.centerObject(img);
        canvas.setActiveObject(img);
        canvas.renderAll();
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!canvas) return;
    const dataUrl = canvas.toDataURL({ format: "jpeg", quality: 0.8 });
    onAddImage({
      id: "local-" + Date.now(),
      previewURL: dataUrl,
      largeImageURL: dataUrl,
      tags: "Власний арт",
      name: "Власний малюнок",
      source: "local",
    });
  };

  return (
    <EditorContainer>
      <Toolbar>
        {/* Сегментований перемикач основних режимів */}
        <ModeToggleGroup $isDarkMode={isDarkMode}>
          <ModeButton
            $isDarkMode={isDarkMode}
            $active={!isDrawing}
            onClick={() => setIsDrawing(false)}
          >
            🖐️ Вибір / Переміщення
          </ModeButton>
          <ModeButton
            $isDarkMode={isDarkMode}
            $active={isDrawing}
            onClick={() => setIsDrawing(true)}
          >
            ✏️ Малювання пензлем
          </ModeButton>
        </ModeToggleGroup>

        {/* Рядок 1: Картки інструментів */}
        <ToolbarRow>
          {/* Картка 1: Параметри пензля */}
          <EditorCard $isDarkMode={isDarkMode}>
            <span style={{ fontSize: "12px", color: isDarkMode ? "#ccc" : "#444", fontWeight: 600 }}>
              🎨 Колір:
            </span>
            <ColorPickerWrapper title="Натисніть для вибору кольору">
              <ColorSwatch $color={brushColor} />
              <input
                type="color"
                value={brushColor}
                onChange={(e) => setBrushColor(e.target.value)}
              />
            </ColorPickerWrapper>

            <span style={{ fontSize: "12px", color: isDarkMode ? "#ccc" : "#444", fontWeight: 600, marginLeft: "6px" }}>
              📏 {brushWidth}px
            </span>
            <input
              type="range"
              min="1"
              max="50"
              value={brushWidth}
              onChange={(e) => setBrushWidth(e.target.value)}
              style={{ width: "80px", cursor: "pointer" }}
            />
          </EditorCard>

          {/* Картка 2: Фото та Текст */}
          <EditorCard $isDarkMode={isDarkMode}>
            <CustomFileInputLabel $isDarkMode={isDarkMode}>
              📁 Завантажити фото
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </CustomFileInputLabel>

            <select
              value={fontFamily}
              onChange={(e) => setFontFamily(e.target.value)}
              style={{
                padding: "6px 10px",
                borderRadius: "8px",
                fontSize: "12px",
                background: isDarkMode ? "rgba(255,255,255,0.1)" : "#fff",
                color: isDarkMode ? "#fff" : "#000",
                border: "1px solid rgba(255,255,255,0.2)",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <option value="sans-serif">Sans-serif</option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
              <option value="cursive">Cursive</option>
            </select>
            <ActionButton
              onClick={addText}
              style={{ padding: "6px 14px", fontSize: "12px" }}
            >
              ➕ Текст
            </ActionButton>
          </EditorCard>

          {/* Картка 3: Фільтри */}
          <EditorCard $isDarkMode={isDarkMode}>
            <span style={{ fontSize: "12px", color: isDarkMode ? "#ccc" : "#444", fontWeight: 600 }}>
              Фільтри:
            </span>
            <FilterGroup>
              <ActionButton
                onClick={() => applyFilter("grayscale")}
                style={{ padding: "4px 10px", fontSize: "11px" }}
              >
                B&W
              </ActionButton>
              <ActionButton
                onClick={() => applyFilter("invert")}
                style={{ padding: "4px 10px", fontSize: "11px" }}
              >
                Neg
              </ActionButton>
              <ActionButton
                onClick={() => applyFilter("rgba")}
                style={{ padding: "4px 10px", fontSize: "11px" }}
              >
                RGBA
              </ActionButton>
            </FilterGroup>
          </EditorCard>
        </ToolbarRow>

        {/* Рядок 2: Кнопки дій полотна */}
        <ToolbarRow>
          <ActionButton
            onClick={deleteActiveObject}
            style={{
              padding: "7px 16px",
              fontSize: "13px",
              background: "rgba(229, 57, 53, 0.85)",
              borderColor: "#e53935",
              color: "#fff",
            }}
            title="Видалити виділений елемент"
          >
            ❌ Видалити
          </ActionButton>
          <ActionButton
            onClick={handleCrop}
            style={{
              padding: "7px 16px",
              fontSize: "13px",
              background: "rgba(33, 150, 243, 0.85)",
              borderColor: "#2196f3",
              color: "#fff",
            }}
          >
            ✂️ Обрізати
          </ActionButton>
          <ActionButton
            onClick={() =>
              canvas.clear().set("backgroundColor", "#fff").renderAll()
            }
            style={{ padding: "7px 16px", fontSize: "13px" }}
          >
            🗑️ Очистити Все
          </ActionButton>
          <ActionButton
            onClick={() => window.open("https://jspaint.app", "_blank")}
            style={{
              padding: "7px 16px",
              fontSize: "13px",
              background: "rgba(76, 175, 80, 0.85)",
              borderColor: "#4caf50",
            }}
          >
            🚀 JSPaint
          </ActionButton>
          <ActionButton
            onClick={handleSave}
            style={{
              padding: "8px 24px",
              fontSize: "14px",
              background: "#ffb36c",
              color: "#111",
              fontWeight: "bold",
              borderRadius: "20px",
              border: "none",
              boxShadow: "0 4px 15px rgba(255, 179, 108, 0.4)",
            }}
          >
            💾 Зберегти малюнок
          </ActionButton>
        </ToolbarRow>
      </Toolbar>
      <CanvasWrapper>
        <canvas ref={canvasElementRef} />
      </CanvasWrapper>
    </EditorContainer>
  );
};

const FanArt = ({
  isDarkMode,
  isStickyBgMode,
  user,
  onOpenRegister,
  setHeroBg,
  setCustomHeroBgs,
}) => {
  const [customImages, setCustomImages] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchStatus, setSearchStatus] = useState("idle");
  const [searchPage, setSearchPage] = useState(1);
  const [searchSource, setSearchSource] = useState("pixabay");
  const [creationMode, setCreationMode] = useState("search");
  const [visibleCount, setVisibleCount] = useState(12);
  const [isCooldown, setIsCooldown] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(0);
  const [fullscreenIndex, setFullscreenIndex] = useState(null);
  const [preview3D, setPreview3D] = useState(null);
  const [videoFramesModal, setVideoFramesModal] = useState(null); // { src, name, start, end }
  const [frameStart, setFrameStart] = useState("");
  const [frameEnd, setFrameEnd] = useState("");
  const [frameCount, setFrameCount] = useState(5);
  const [extractedFrames, setExtractedFrames] = useState([]);
  const [isExtractingFrames, setIsExtractingFrames] = useState(false);
  const [descriptionModal, setDescriptionModal] = useState(null); // { name, text }
  const previewCanvasRef = useRef(null);
  const previewRendererRef = useRef(null);
  const previewSceneRef = useRef(null);
  const previewCameraRef = useRef(null);
  const previewControlsRef = useRef(null);
  const previewAnimationFrameRef = useRef(null);
  const previewGroupRef = useRef(null);

  const allImagesData = DEFAULT_BGS;
  const combinedImages = [...allImagesData, ...customImages];
  // Відео більше не фільтруються — вони відображаються як thumbnails
  const getRenderableImages = (images = []) => images;

  useEffect(() => {
    const hydrate = async () => {
      try {
        const saved = await localforage.getItem("fanart_custom_images");
        if (saved) setCustomImages(saved);
      } catch (error) {
        console.error("Failed to load custom images:", error);
      } finally {
        setIsHydrated(true);
      }
    };
    hydrate();
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localforage.setItem("fanart_custom_images", customImages);
    }
  }, [customImages, isHydrated]);

  const [playlistTick, setPlaylistTick] = useState(0);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const playlists = [
    "Дракони",
    "Тварини",
    "Локації",
    "Фентезі",
    "Хоррор",
    "Аркада",
    "Майбутне",
    "ваші картинки",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaylistTick((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const imagesForPlaylist = selectedPlaylist
    ? getRenderableImages(
      combinedImages.filter((img) => img.category === selectedPlaylist),
    )
    : [];

  // Блокування прокрутки при відкритих модалках
  useEffect(() => {
    const anyOpen =
      selectedPlaylist ||
      preview3D !== null ||
      fullscreenIndex !== null ||
      videoFramesModal ||
      descriptionModal;
    if (anyOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [
    selectedPlaylist,
    preview3D,
    fullscreenIndex,
    videoFramesModal,
    descriptionModal,
  ]);

  const handleKeyDown = useCallback(
    (e) => {
      if (fullscreenIndex === null) return;
      if (e.key === "Escape") setFullscreenIndex(null);
      if (e.key === "ArrowRight") {
        setFullscreenIndex((prev) => (prev + 1) % imagesForPlaylist.length);
      }
      if (e.key === "ArrowLeft") {
        setFullscreenIndex(
          (prev) =>
            (prev - 1 + imagesForPlaylist.length) % imagesForPlaylist.length,
        );
      }
    },
    [fullscreenIndex, imagesForPlaylist.length],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleLoadMoreImages = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const handleDownload = (imgSrc) => {
    if (!user) {
      onOpenRegister();
      return;
    }
    const a = document.createElement("a");
    a.href = imgSrc;
    a.download = "fanart.jpg";
    a.click();
  };

  const handlePrint = (imgSrc) => {
    if (!user) {
      onOpenRegister();
      return;
    }

    const html = `
      <html>
        <head>
          <title>Print Fan Art</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 24px; background: #fff; color: #000; text-align: center; }
            img { max-width: 100%; max-height: 90vh; display: block; margin: 0 auto; }
          </style>
        </head>
        <body>
          <img src="${imgSrc}" alt="Fan art" />
        </body>
      </html>
    `;

    const frame = document.createElement("iframe");
    frame.style.position = "fixed";
    frame.style.right = "0";
    frame.style.bottom = "0";
    frame.style.width = "0";
    frame.style.height = "0";
    frame.style.border = "0";
    frame.style.opacity = "0";
    frame.srcdoc = html;
    document.body.appendChild(frame);

    frame.onload = () => {
      try {
        frame.contentWindow.focus();
        frame.contentWindow.print();
      } catch (error) {
        console.error("Print failed:", error);
      } finally {
        setTimeout(() => {
          if (frame.parentNode) {
            frame.parentNode.removeChild(frame);
          }
        }, 800);
      }
    };
  };

  const createVoxelModelFromImage = async (imgSrc, title) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = imgSrc;

    await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
    });

    if (image.naturalWidth === 0 || image.naturalHeight === 0) {
      throw new Error("Image has no dimensions");
    }

    const width = 140;
    const height = 100;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, width, height);

    const imageData = ctx.getImageData(0, 0, width, height).data;
    const modelWidth = 4;
    const modelHeight = 3;
    const baseThickness = 0.35;
    const reliefAmplitude = 0.4;

    const voxelW = modelWidth / width;
    const voxelH = modelHeight / height;
    const halfWidth = modelWidth / 2;
    const halfHeight = modelHeight / 2;

    const geometries = [];

    // Базова підложка сірого кольору
    const baseGeometry = new THREE.BoxGeometry(
      modelWidth + 0.08,
      modelHeight + 0.08,
      baseThickness,
    );
    const baseOffset = new THREE.Matrix4().makeTranslation(
      0,
      0,
      -baseThickness / 2,
    );
    baseGeometry.applyMatrix4(baseOffset);

    const baseColors = [];
    for (let i = 0; i < baseGeometry.attributes.position.count; i++) {
      baseColors.push(0.5, 0.5, 0.5);
    }
    baseGeometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(baseColors, 3),
    );
    geometries.push(baseGeometry);

    const unitBox = new THREE.BoxGeometry(voxelW, voxelH, 1);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const pixelIndex = (y * width + x) * 4;
        const r = imageData[pixelIndex] || 0;
        const g = imageData[pixelIndex + 1] || 0;
        const b = imageData[pixelIndex + 2] || 0;
        const a = imageData[pixelIndex + 3] || 0;

        if (a < 128) continue; // Пропускаємо прозорі пікселі

        const brightness = (r + g + b) / (255 * 3);
        const invertedBrightness = 1.0 - brightness;

        const voxelHeight =
          baseThickness + invertedBrightness * reliefAmplitude;

        const boxGeom = unitBox.clone();
        boxGeom.scale(1, 1, voxelHeight);

        const posX = x * voxelW - halfWidth + voxelW / 2;
        const posY = -(y * voxelH) + halfHeight - voxelH / 2;
        const posZ = voxelHeight / 2 - baseThickness;

        boxGeom.translate(posX, posY, posZ);

        const rNorm = r / 255;
        const gNorm = g / 255;
        const bNorm = b / 255;

        const colors = [];
        for (let i = 0; i < boxGeom.attributes.position.count; i++) {
          colors.push(rNorm, gNorm, bNorm);
        }
        boxGeom.setAttribute(
          "color",
          new THREE.Float32BufferAttribute(colors, 3),
        );

        geometries.push(boxGeom);
      }
    }

    const mergedGeometry = mergeGeometries(geometries, false);

    const material = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.7,
      metalness: 0.02,
    });

    const mergedMesh = new THREE.Mesh(mergedGeometry, material);
    const group = new THREE.Group();
    group.add(mergedMesh);

    return { group, title };
  };

  const exportGroupTo3MF = useCallback(async (group) => {
    let mergedGeometry = null;

    group.traverse((child) => {
      if (child.isMesh && child.geometry) {
        mergedGeometry = child.geometry;
      }
    });

    if (!mergedGeometry) throw new Error("No geometry found for 3MF export");

    const positions = mergedGeometry.attributes.position;
    const colors = mergedGeometry.attributes.color;
    let indices = mergedGeometry.getIndex();

    if (!indices) {
      const newIndices = [];
      for (let i = 0; i < positions.count; i++) {
        newIndices.push(i);
      }
      mergedGeometry.setIndex(newIndices);
      indices = mergedGeometry.getIndex();
    }

    const colorMap = new Map();
    const uniqueColors = [];
    const trianglesXML = [];

    for (let i = 0; i < indices.count; i += 3) {
      const a = indices.getX(i);
      const b = indices.getX(i + 1);
      const c = indices.getX(i + 2);

      const r = Math.round(colors.getX(a) * 255);
      const g = Math.round(colors.getY(a) * 255);
      const bColor = Math.round(colors.getZ(a) * 255);

      const hexColor =
        `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${bColor.toString(16).padStart(2, "0")}FF`.toUpperCase();

      let colorIndex = colorMap.get(hexColor);
      if (colorIndex === undefined) {
        colorIndex = uniqueColors.length;
        colorMap.set(hexColor, colorIndex);
        uniqueColors.push(hexColor);
      }

      trianglesXML.push(
        `<triangle v1="${a}" v2="${b}" v3="${c}" pid="1" p1="${colorIndex}"/>`,
      );
    }

    const verticesXML = [];
    for (let i = 0; i < positions.count; i++) {
      verticesXML.push(
        `<vertex x="${positions.getX(i).toFixed(5)}" y="${positions.getY(i).toFixed(5)}" z="${positions.getZ(i).toFixed(5)}"/>`,
      );
    }
const colorsXML = uniqueColors
  .map((color) => `<m:color color="${color}"/>`)
  .join("\n          ");
    const modelXML = `<?xml version="1.0" encoding="UTF-8"?>
<model unit="millimeter" xml:lang="en-US" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02" xmlns:m="http://schemas.microsoft.com/3dmanufacturing/material/2015/02">
  <resources>
    <m:colorgroup id="1">
      ${colorsXML}
    </m:colorgroup>
    <object id="2" type="model">
      <mesh>
        <vertices>
          ${verticesXML.join("\n          ")}
        </vertices>
        <triangles>
          ${trianglesXML.join("\n          ")}
        </triangles>
      </mesh>
    </object>
  </resources>
  <build>
    <item objectid="2"/>
  </build>
</model>`;

    const contentTypesXML = `<?xml version="1.0" encoding="UTF-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/>
</Types>`;

    const relsXML = `<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Target="/3D/3dmodel.model" Id="rel-1" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/>
</Relationships>`;

    const zip = new JSZip();
    zip.file("[Content_Types].xml", contentTypesXML);
    zip.folder("_rels").file(".rels", relsXML);
    zip.folder("3D").file("3dmodel.model", modelXML);

    return await zip.generateAsync({ type: "blob", compression: "DEFLATE" });
  }, []);

  const handlePrint3D = async (imgSrc, imgData) => {
    if (!user) {
      onOpenRegister();
      return;
    }

    const title = imgData?.name || imgData?.title || "Фанарт";
    setPreview3D({ imgSrc, title });
  };

  const handleDownloadPreviewStl = useCallback(async () => {
    if (!preview3D?.imgSrc) return;

    try {
      const { group } = await createVoxelModelFromImage(
        preview3D.imgSrc,
        preview3D.title,
      );
      const blob = await exportGroupTo3MF(group);

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${preview3D.title.replace(/[^a-zA-Z0-9._-]+/g, "_") || "fanart"}.3mf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => URL.revokeObjectURL(url), 4000);
    } catch (error) {
      console.error("3D export failed:", error);
      alert("Не вдалося згенерувати 3MF. Спробуйте інше зображення.");
    }
  }, [preview3D, exportGroupTo3MF]);

  useEffect(() => {
    if (!preview3D?.imgSrc || !previewCanvasRef.current) return;

    const container = previewCanvasRef.current;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f1116);
    const camera = new THREE.PerspectiveCamera(
      35,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 6);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.3);
    directionalLight.position.set(3, 4, 6);
    scene.add(ambientLight, directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 3;
    controls.maxDistance = 12;

    const loadPreview = async () => {
      try {
        const { group } = await createVoxelModelFromImage(
          preview3D.imgSrc,
          preview3D.title,
        );
        group.rotation.x = -0.35;
        group.rotation.y = 0.4;
        scene.add(group);
        previewSceneRef.current = scene;
        previewCameraRef.current = camera;
        previewControlsRef.current = controls;
        previewRendererRef.current = renderer;
        previewGroupRef.current = group;
      } catch (error) {
        console.error("Preview setup failed:", error);
      }
    };

    loadPreview();

    const animate = () => {
      previewAnimationFrameRef.current = requestAnimationFrame(animate);
      if (previewGroupRef.current) {
        previewGroupRef.current.rotation.y += 0.005;
      }
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (previewAnimationFrameRef.current) {
        cancelAnimationFrame(previewAnimationFrameRef.current);
      }
      controls.dispose();
      renderer.dispose();
      if (container) {
        container.innerHTML = "";
      }
      previewRendererRef.current = null;
      previewSceneRef.current = null;
      previewCameraRef.current = null;
      previewControlsRef.current = null;
      previewGroupRef.current = null;
    };
  }, [preview3D?.imgSrc, preview3D?.title]);

  useEffect(() => {
    // Кулдаун вимкнено для підвищення зручності
    setIsCooldown(false);
    setCooldownTime(0);
    localStorage.removeItem("fanart_cooldown_end");
  }, []);

  const startCooldown = async () => {
    setIsCooldown(false);
    setCooldownTime(0);
  };

  const translateToEn = async (text) => {
    if (!text || text.length < 3) return text;
    try {
      const response = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=uk&tl=en&dt=t&q=${encodeURIComponent(text)}`,
      );
      const data = await response.json();
      return data[0].map((item) => item[0]).join("");
    } catch (error) {
      console.error("Translation error:", error);
      return text;
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setSearchStatus("loading");
    setSearchResults([]);
    try {
      if (searchSource === "pixabay") {
        const translatedQuery = await translateToEn(searchQuery);
        const API_KEY = "50977795-feb18de71b048a02e0c824e54";
        const response = await fetch(
          `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
            translatedQuery,
          )}&image_type=photo&per_page=12&page=1`,
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        if (data.hits && data.hits.length > 0) {
          setSearchResults(
            data.hits.map((hit) => ({
              id: hit.id,
              previewURL: hit.previewURL,
              largeImageURL: hit.largeImageURL,
              tags: hit.tags,
              name: hit.tags,
              source: "pixabay",
            })),
          );
          setSearchPage(1);
          setSearchStatus("idle");
        } else {
          setSearchStatus("no-results");
        }
      } else {
        // TVMaze search
        const translatedQuery = await translateToEn(searchQuery);
        const response = await fetch(
          `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(translatedQuery)}`,
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        // Фільтруємо лише ті, де є зображення
        const validResults = data.filter(
          (item) => item.show && item.show.image,
        );

        if (validResults.length === 0) {
          setSearchStatus("no-results");
          return;
        }

        // Отримуємо акторів для кожного результату
        const resultsWithCast = await Promise.all(
          validResults.slice(0, 10).map(async (item) => {
            const castRes = await fetch(
              `https://api.tvmaze.com/shows/${item.show.id}/cast`,
            );
            const castData = castRes.ok ? await castRes.json() : [];
            return {
              id: item.show.id,
              name: item.show.name,
              previewURL: item.show.image.medium,
              largeImageURL: item.show.image.original,
              summary: item.show.summary?.replace(/<[^>]*>?/gm, ""), // Видаляємо HTML теги
              cast: castData
                .slice(0, 4)
                .map((c) => c.person.name)
                .join(", "),
              url: item.show.url,
              source: "tvmaze",
            };
          }),
        );

        setSearchResults(resultsWithCast);
        setSearchStatus("idle");
      }
    } catch (error) {
      console.error("Error searching:", error);
      setSearchStatus("error");
    }
  };

  const handleLoadMore = async () => {
    if (searchSource !== "pixabay" || !searchQuery.trim()) return;

    setSearchStatus("loading");
    const nextPage = searchPage + 1;

    try {
      const translatedQuery = await translateToEn(searchQuery);
      const API_KEY = "50977795-feb18de71b048a02e0c824e54";
      const response = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
          translatedQuery,
        )}&image_type=photo&per_page=12&page=${nextPage}`,
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      if (data.hits && data.hits.length > 0) {
        const mapped = data.hits.map((hit) => ({
          id: hit.id,
          previewURL: hit.previewURL,
          largeImageURL: hit.largeImageURL,
          tags: hit.tags,
          source: "pixabay",
        }));
        setSearchResults((prev) => [...prev, ...mapped]);
        setSearchPage(nextPage);
        setSearchStatus("idle");
      } else {
        alert("Більше зображень не знайдено.");
        setSearchStatus("idle");
      }
    } catch (error) {
      console.error("Error loading more from Pixabay:", error);
      setSearchStatus("error");
    }
  };

  const handleAddCustomImage = (hit) => {
    if (customImages.length >= 3)
      return alert("Можна додати не більше 3 картинок.");
    if (customImages.some((img) => img.id === hit.id))
      return alert("Це зображення вже додано.");

    const newImage = {
      id: hit.id,
      src: hit.previewURL,
      largeSrc: hit.largeImageURL || hit.previewURL,
      category: "ваші картинки",
      summary: hit.summary,
      cast: hit.cast,
      title: hit.name,
      url: hit.url,
    };
    setCustomImages([...customImages, newImage]);
  };

  // --- Витягування кадрів з відео ---
  const extractVideoFrames = useCallback(async () => {
    if (!videoFramesModal?.src) return;
    const startSec = parseFloat(frameStart) || videoFramesModal.start || 0;
    const endSec = parseFloat(frameEnd);
    if (isNaN(endSec) || endSec <= startSec) {
      alert("Кінець має бути пізніше за початок");
      return;
    }
    const count = Math.min(Math.max(1, parseInt(frameCount) || 1), 20);
    setIsExtractingFrames(true);
    try {
      const video = document.createElement("video");
      video.src = videoFramesModal.src;
      video.crossOrigin = "anonymous";
      video.muted = true;
      video.preload = "metadata";
      await new Promise((res, rej) => {
        video.onloadedmetadata = res;
        video.onerror = rej;
        setTimeout(res, 5000); // fallback
      });
      const canvas = document.createElement("canvas");
      canvas.width = 270;
      canvas.height = 170;
      const ctx = canvas.getContext("2d");
      const frames = [];
      const step = count === 1 ? 0 : (endSec - startSec) / (count - 1);
      for (let i = 0; i < count; i++) {
        const t = startSec + i * step;
        await new Promise((res) => {
          video.currentTime = t;
          video.onseeked = () => {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
            frames.push({
              id: `frame-${Date.now()}-${i}`,
              src: dataUrl,
              largeSrc: dataUrl,
              category: videoFramesModal.category || "ваші картинки",
              name: `${videoFramesModal.name} — ${t.toFixed(1)}с`,
              author: videoFramesModal.author || "",
              source: videoFramesModal.source || "",
            });
            res();
          };
        });
      }
      setExtractedFrames(frames);
    } catch (err) {
      console.error("Помилка витягування кадрів:", err);
      alert("Не вдалося витягнути кадри. Спробуйте інше відео.");
    } finally {
      setIsExtractingFrames(false);
    }
  }, [videoFramesModal, frameStart, frameEnd, frameCount]);

  const handleAddExtractedFrame = (frame) => {
    if (customImages.length >= 3)
      return alert("Можна додати не більше 3 картинок.");
    if (customImages.some((img) => img.id === frame.id)) return;
    setCustomImages((prev) => [...prev, frame]);
  };

  const handleAddAllFrames = () => {
    const remaining = 3 - customImages.length;
    if (remaining <= 0) return alert("Можна додати не більше 3 картинок.");
    const toAdd = extractedFrames
      .filter((f) => !customImages.some((img) => img.id === f.id))
      .slice(0, remaining);
    setCustomImages((prev) => [...prev, ...toAdd]);
  };

  const openPlaylistModal = (category) => {
    setSelectedPlaylist(category);
    setVisibleCount(12);
  };

  const closePlaylistModal = () => {
    setSelectedPlaylist(null);
  };

  const handleRemoveCustomImage = (idToRemove) => {
    setCustomImages((prev) => prev.filter((img) => img.id !== idToRemove));
  };

  return (
    <FanArtDiv>
      <FanArtTitle $isStickyBgMode={isStickyBgMode} $isDarkMode={isDarkMode}>
        Друкарня
      </FanArtTitle>
      <PlaylistContainer>
        {playlists.map((category) => {
          const catImages = combinedImages.filter(
            (img) => img.category === category,
          );
          if (catImages.length === 0 && category !== "ваші картинки")
            return null;
          const displayImages =
            catImages.length > 0
              ? catImages
              : [{ src: monody, category: "ваші картинки" }];

          const thumbnailImages = displayImages.filter(
            (img) => !isVideoSource(img.src),
          );
          const finalThumbnails =
            thumbnailImages.length > 0 ? thumbnailImages : displayImages;

          return (
            <PlaylistItem
              key={category}
              onClick={() => openPlaylistModal(category)}
            >
              <PlaylistImageWrapper>
                {finalThumbnails.map((img, index) => {
                  const isActive =
                    index === playlistTick % finalThumbnails.length;
                  return (
                    <PlaylistImage
                      key={index}
                      src={img.src}
                      alt={category}
                      $isActive={isActive}
                    />
                  );
                })}
                <PlaylistTextOverlay>{category}</PlaylistTextOverlay>
              </PlaylistImageWrapper>
            </PlaylistItem>
          );
        })}
      </PlaylistContainer>

      {selectedPlaylist && (
        <ModalOverlay onClick={closePlaylistModal}>
          <ModalContent
            $isDarkMode={isDarkMode}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHeader $isDarkMode={isDarkMode}>
              <ModalTitle $isDarkMode={isDarkMode}>
                Плейлист: {selectedPlaylist}
              </ModalTitle>
              <CloseButton $isDarkMode={isDarkMode} onClick={closePlaylistModal}>
                &times;
              </CloseButton>
            </ModalHeader>

            <ModalBody>
              {selectedPlaylist === "ваші картинки" && (
                <SearchContainer>
                  <p
                    style={{
                      color: isDarkMode ? "#ccc" : "#555",
                      marginBottom: "10px",
                      fontSize: "13px",
                      textAlign: "center",
                    }}
                  >
                    Створіть свій шедевр або знайдіть готовий (макс. 3)
                  </p>

                  <SourceSelector>
                    <SourceButton
                      $isDarkMode={isDarkMode}
                      $active={creationMode === "search"}
                      onClick={() => setCreationMode("search")}
                    >
                      🔍 Пошук
                    </SourceButton>
                    <SourceButton
                      $isDarkMode={isDarkMode}
                      $active={creationMode === "editor"}
                      onClick={() => setCreationMode("editor")}
                    >
                      🎨 Редактор та Файли
                    </SourceButton>
                  </SourceSelector>

                  {creationMode === "search" ? (
                    <>
                      <SourceSelector>
                        <SourceButton
                          $isDarkMode={isDarkMode}
                          $active={searchSource === "pixabay"}
                          onClick={() => setSearchSource("pixabay")}
                        >
                          🖼 Pixabay
                        </SourceButton>
                        <SourceButton
                          $isDarkMode={isDarkMode}
                          $active={searchSource === "tvmaze"}
                          onClick={() => setSearchSource("tvmaze")}
                        >
                          🎬 TVMaze (Кіно)
                        </SourceButton>
                      </SourceSelector>
                      <SourceSelector>
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%', maxWidth: '400px' }}>
                          <input
                            type="text"
                            placeholder="Пошук зображень."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                            style={{
                              width: '100%',
                              padding: '10px 90px 10px 14px', // 90px справа, щоб текст не заходив під кнопку
                              borderRadius: '8px',
                              border: `1px solid ${isDarkMode ? '#444' : '#ccc'}`,
                              backgroundColor: isDarkMode ? '#1e1e1e' : '#fff',
                              color: isDarkMode ? '#fff' : '#000',
                              fontSize: '14px',
                              outline: 'none',
                            }}
                          />
                          <button
                            type="button"
                            onClick={handleSearch}
                            style={{
                              position: 'absolute',
                              right: '4px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              padding: '6px 14px',
                              border: 'none',
                              borderRadius: '6px',
                              backgroundColor: '#007bff',
                              color: '#fff',
                              fontSize: '14px',
                              cursor: 'pointer',
                            }}
                          >
                            Знайти
                          </button>
                        </div>
                      </SourceSelector>
                      {searchStatus === "loading" && (
                        <SearchStatusText $isDarkMode={isDarkMode}>
                          Завантаження...
                        </SearchStatusText>
                      )}
                      {searchStatus === "no-results" && (
                        <SearchStatusText $isDarkMode={isDarkMode}>
                          Зображень за вашим запитом не знайдено.
                        </SearchStatusText>
                      )}
                      {searchStatus === "error" && (
                        <SearchStatusText $isDarkMode={isDarkMode}>
                          Помилка пошуку. Спробуйте пізніше.
                        </SearchStatusText>
                      )}

                      {searchResults.length > 0 && searchSource === "pixabay" && (
                        <SearchButton
                          type="button"
                          onClick={handleLoadMore}
                          style={{ marginTop: "10px" }}
                        >
                          Завантажити ще
                        </SearchButton>
                      )}

                      {searchResults.length > 0 && (
                        <SearchResultsGrid>
                          {searchResults.map((hit) => (
                            <SearchResultItem
                              key={hit.id}
                              onClick={() => handleAddCustomImage(hit)}
                            >
                              <BenefitImage
                                src={hit.previewURL}
                                alt={hit.name || hit.tags}
                                style={{ width: "100px", height: "100px" }}
                              />
                              <div
                                style={{
                                  position: "absolute",
                                  bottom: 0,
                                  left: 0,
                                  right: 0,
                                  background: "rgba(0,0,0,0.6)",
                                  color: "#fff",
                                  fontSize: "10px",
                                  textAlign: "center",
                                  padding: "2px",
                                }}
                              >
                                + Додати
                              </div>
                            </SearchResultItem>
                          ))}
                        </SearchResultsGrid>
                      )}
                    </>
                  ) : (
                    <FabricEditor
                      onAddImage={handleAddCustomImage}
                      isDarkMode={isDarkMode}
                    />
                  )}
                </SearchContainer>
              )}

              <FanBlock>
                <AnimatePresence>
                  {getRenderableImages(
                    combinedImages.filter(
                      (img) => img.category === selectedPlaylist,
                    ),
                  )
                    .slice(0, visibleCount)
                    .map((imgData, idx) => (
                      <FanArtCard
                        key={imgData.id || imgData.src}
                        layout
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, y: 50 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FanArtImageContainer>
                          <BenefitImage
                            src={isVideoSource(imgData.src) ? `` : imgData.src}
                            alt={`Fan art - ${imgData.category}`}
                            title={imgData.name || imgData.title || "Фанарт"}
                            onClick={() => setFullscreenIndex(idx)}
                            style={{
                              cursor: "zoom-in",
                              display: isVideoSource(imgData.src)
                                ? "none"
                                : "block",
                            }}
                          />
                          {isVideoSource(imgData.src) && (
                            <VideoThumb src={imgData.src} />
                          )}
                          <ImageTitleStrip className="image-overlay">
                            {imgData.author && <div>{imgData.author}</div>}
                            {imgData.source && (
                              <div
                                style={{ fontSize: "10px", fontWeight: "normal" }}
                              >
                                {imgData.source}
                              </div>
                            )}
                            <div>{imgData.name || imgData.title || "Арт"}</div>
                          </ImageTitleStrip>
                          <ActionButtonsContainer className="image-overlay">
                            {isVideoSource(imgData.src) && (
                              <ActionButton
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setExtractedFrames([]);
                                  setFrameStart(String(imgData.start ?? 0));
                                  setFrameEnd(String(imgData.end ?? ""));
                                  setFrameCount(5);
                                  setVideoFramesModal(imgData);
                                }}
                                title="Дістати кадри"
                              >
                                🎥
                              </ActionButton>
                            )}
                            {imgData.description && (
                              <ActionButton
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setDescriptionModal({
                                    name: imgData.name,
                                    text: imgData.description,
                                  });
                                }}
                                title="Опис картини"
                                style={{ background: "#1a3a5c" }}
                              >
                                ?
                              </ActionButton>
                            )}
                            <ActionButton
                              onClick={() => handleDownload(imgData.src)}
                              title="Скачати"
                            >
                              <ImFolderDownload />
                            </ActionButton>
                            <ActionButton
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePrint(imgData.src);
                              }}
                              title="Роздрукувати"
                            >
                              <MdPrint />
                            </ActionButton>
                            <ActionButton
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePrint3D(imgData.src, imgData);
                              }}
                              title="3D-друк (плоский друк, тверда картина)"
                            >
                              3D
                            </ActionButton>
                            <ActionButton
                              onClick={(e) => {
                                e.stopPropagation();
                                setHeroBg(imgData.src);
                                setCustomHeroBgs((prev) => {
                                  if (prev.some((bg) => bg.src === imgData.src))
                                    return prev;
                                  return [
                                    {
                                      src: imgData.src,
                                      name: imgData.title || "Фанарт",
                                    },
                                    ...prev,
                                  ];
                                });
                              }}
                              title="Встановити на шпалери"
                              style={{ color: "white" }}
                            >
                              <LuWallpaper />
                            </ActionButton>
                            {selectedPlaylist === "ваші картинки" && (
                              <ActionButton
                                onClick={() =>
                                  handleRemoveCustomImage(imgData.id)
                                }
                                title="Видалити"
                                style={{ background: "#ff6961" }}
                              >
                                🗑️
                              </ActionButton>
                            )}
                          </ActionButtonsContainer>
                        </FanArtImageContainer>
                        {imgData.summary && (
                          <ShowInfo $isDarkMode={isDarkMode}>
                            <p
                              style={{ fontWeight: "bold", margin: "0 0 5px 0" }}
                            >
                              {imgData.title}
                            </p>
                            <p
                              style={{
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                margin: 0,
                              }}
                            >
                              <b>Сюжет:</b> {imgData.summary}
                            </p>
                            <p style={{ margin: "5px 0 0 0" }}>
                              <b>Актори:</b> {imgData.cast || "Не вказано"}
                            </p>
                            {imgData.url && (
                              <a
                                href={imgData.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: "#ffb36c",
                                  fontSize: "10px",
                                  textDecoration: "underline",
                                  display: "block",
                                  marginTop: "5px",
                                }}
                              >
                                Оригінальний сайт
                              </a>
                            )}
                          </ShowInfo>
                        )}
                      </FanArtCard>
                    ))}
                </AnimatePresence>
              </FanBlock>
              {imagesForPlaylist.length > visibleCount && (
                <ActionButton
                  onClick={handleLoadMoreImages}
                  style={{ marginTop: "20px", width: "auto" }}
                >
                  Завантажити ще
                </ActionButton>
              )}
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}

      {preview3D && (
        <div
          onClick={() => setPreview3D(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            zIndex: 2000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(100%, 980px)",
              background: "#121212",
              border: "1px solid #ffb36c",
              borderRadius: 18,
              padding: 16,
              color: "white",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3 style={{ margin: 0 }}>3D-preview: {preview3D.title}</h3>
              <button
                onClick={() => setPreview3D(null)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "white",
                  fontSize: 24,
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>
            <div
              ref={previewCanvasRef}
              style={{
                width: "100%",
                height: "min(65vh, 520px)",
                borderRadius: 12,
                overflow: "hidden",
                background: "linear-gradient(135deg, #1b1b1b, #080808)",
                border: "1px solid rgba(255, 179, 108, 0.3)",
              }}
            />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                justifyContent: "center",
              }}
            >
              <button
                onClick={handleDownloadPreviewStl}
                style={{
                  background: "#ffb36c",
                  color: "#111",
                  border: "none",
                  borderRadius: 999,
                  padding: "8px 14px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                ⬇️ Завантажити 3MF (з кольорами)
              </button>
              <button
                onClick={() => setPreview3D(null)}
                style={{
                  background: "#ffb36c",
                  color: "#111",
                  border: "none",
                  borderRadius: 999,
                  padding: "8px 14px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Закрити
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Модалка витягування кадрів з відео */}
      {videoFramesModal && (
        <div
          onClick={() => setVideoFramesModal(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            zIndex: 2100,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#111",
              border: "1px solid #ffb36c",
              borderRadius: 16,
              padding: 18,
              width: "min(100%, 700px)",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3 style={{ margin: 0, color: "#ffb36c" }}>
                🎥 {videoFramesModal.name}
              </h3>
              <button
                onClick={() => {
                  setVideoFramesModal(null);
                  setExtractedFrames([]);
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  fontSize: 22,
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 10,
              }}
            >
              <label style={{ fontSize: 12 }}>
                Початок (сек)
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  value={frameStart}
                  onChange={(e) => setFrameStart(e.target.value)}
                  style={{
                    width: "100%",
                    marginTop: 4,
                    padding: "4px 8px",
                    borderRadius: 6,
                    background: "#222",
                    border: "1px solid #ffb36c",
                    color: "#fff",
                  }}
                />
              </label>
              <label style={{ fontSize: 12 }}>
                Кінець (сек, &gt; початок)
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  value={frameEnd}
                  onChange={(e) => setFrameEnd(e.target.value)}
                  style={{
                    width: "100%",
                    marginTop: 4,
                    padding: "4px 8px",
                    borderRadius: 6,
                    background: "#222",
                    border: "1px solid #ffb36c",
                    color: "#fff",
                  }}
                />
              </label>
              <label style={{ fontSize: 12 }}>
                Кількість кадрів (1-20)
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={frameCount}
                  onChange={(e) => setFrameCount(e.target.value)}
                  style={{
                    width: "100%",
                    marginTop: 4,
                    padding: "4px 8px",
                    borderRadius: 6,
                    background: "#222",
                    border: "1px solid #ffb36c",
                    color: "#fff",
                  }}
                />
              </label>
            </div>
            <button
              onClick={extractVideoFrames}
              disabled={isExtractingFrames}
              style={{
                background: "#ffb36c",
                color: "#111",
                border: "none",
                borderRadius: 8,
                padding: "8px 18px",
                fontWeight: 700,
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              {isExtractingFrames ? "Завантажують..." : "📥 Дістати кадри"}
            </button>
            {extractedFrames.length > 0 && (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: 13, color: "#ffb36c" }}>
                    Дістало кадрів: {extractedFrames.length}
                  </span>
                  <button
                    onClick={handleAddAllFrames}
                    style={{
                      background: "#2196f3",
                      color: "#fff",
                      border: "none",
                      borderRadius: 6,
                      padding: "5px 12px",
                      fontWeight: 700,
                      cursor: "pointer",
                      fontSize: 12,
                    }}
                  >
                    + Додати всі
                  </button>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {extractedFrames.map((frame, i) => (
                    <div
                      key={i}
                      style={{
                        position: "relative",
                        borderRadius: 8,
                        overflow: "hidden",
                        cursor: "pointer",
                      }}
                      onClick={() => handleAddExtractedFrame(frame)}
                    >
                      <img
                        src={frame.src}
                        alt={`Кадр ${i + 1}`}
                        style={{
                          width: 135,
                          height: 85,
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: "rgba(0,0,0,0.6)",
                          fontSize: 10,
                          color: "#fff",
                          textAlign: "center",
                          padding: 2,
                        }}
                      >
                        + Додати
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Модалка опису картини */}
      {descriptionModal && (
        <div
          onClick={() => setDescriptionModal(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#111",
              border: "2px solid #ffb36c",
              borderRadius: "14px",
              width: "90%",
              maxWidth: "900px",
              height: "80vh",
              maxHeight: "650px",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 20px 50px rgba(0,0,0,0.9)",
            }}
          >
            {/* Background Media */}
            {isVideoSource(descriptionModal.src) ? (
              <video
                src={descriptionModal.src}
                autoPlay
                muted
                loop
                playsInline
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 1,
                }}
              />
            ) : (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${descriptionModal.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 1,
                }}
              />
            )}

            {/* Dark overlay for readability */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)",
                zIndex: 2,
              }}
            />

            {/* Content Layer */}
            <div
              style={{
                position: "relative",
                zIndex: 3,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                boxSizing: "border-box",
                padding: "30px",
                justifyContent: "space-between",
              }}
            >
              {/* Header: Title and Close button */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                <h3 style={{ color: "#ffb36c", margin: 0, fontSize: "24px", fontWeight: "bold", textShadow: "0 2px 4px rgba(0,0,0,0.9)" }}>
                  🖼️ {descriptionModal.name}
                </h3>
                <button
                  onClick={() => setDescriptionModal(null)}
                  style={{
                    background: "rgba(0,0,0,0.6)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    color: "#fff",
                    fontSize: "20px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,0,0,0.7)";
                    e.currentTarget.style.borderColor = "red";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(0,0,0,0.6)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  }}
                >
                  ×
                </button>
              </div>

              {/* Description Body (Scrollable) */}
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  margin: "20px 0",
                  paddingRight: "10px",
                }}
              >
                <p
                  style={{
                    lineHeight: 1.8,
                    whiteSpace: "pre-wrap",
                    fontSize: "15px",
                    margin: 0,
                    textShadow: "0 2px 10px rgba(0,0,0,0.95)",
                    color: "#f5f5f5",
                    background: "rgba(0,0,0,0.4)",
                    padding: "15px",
                    borderRadius: "8px",
                    backdropFilter: "blur(2px)",
                  }}
                >
                  {descriptionModal.text}
                </p>
              </div>

              {/* Footer: Author in bottom-left, Source in bottom-right */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.75)",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    border: "1px solid rgba(255, 179, 108, 0.4)",
                    color: "#ffb36c",
                    fontWeight: "bold",
                    textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                  }}
                >
                  👤 Автор: {descriptionModal.author || "Невідомий"}
                </div>
                {descriptionModal.source && (
                  <div
                    style={{
                      background: "rgba(0, 0, 0, 0.75)",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      fontSize: "13px",
                      border: "1px solid rgba(255, 179, 108, 0.4)",
                      color: "#ffb36c",
                      fontWeight: "bold",
                      textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                    }}
                  >
                    🔗 Джерело: {descriptionModal.source}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <AnimatePresence>
        {fullscreenIndex !== null && (
          <FullscreenOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenIndex(null)}
          >
            <CloseButton
              style={{ color: "white", zIndex: 2020 }}
              onClick={() => setFullscreenIndex(null)}
            >
              &times;
            </CloseButton>
            <NavArrow
              $left
              onClick={(e) => {
                e.stopPropagation();
                setFullscreenIndex(
                  (prev) =>
                    (prev - 1 + imagesForPlaylist.length) %
                    imagesForPlaylist.length,
                );
              }}
            >
              ❮
            </NavArrow>
            <motion.img
              key={fullscreenIndex}
              src={
                imagesForPlaylist[fullscreenIndex].largeSrc ||
                imagesForPlaylist[fullscreenIndex].src
              }
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            />
            <NavArrow
              onClick={(e) => {
                e.stopPropagation();
                setFullscreenIndex(
                  (prev) => (prev + 1) % imagesForPlaylist.length,
                );
              }}
            >
              ❯
            </NavArrow>
          </FullscreenOverlay>
        )}
      </AnimatePresence>
    </FanArtDiv>
  );
};

export default FanArt;
