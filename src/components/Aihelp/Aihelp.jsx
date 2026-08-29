import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { GoogleGenerativeAI } from "@google/generative-ai";
import localforage from "localforage";
import ReactMarkdown from "react-markdown";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { hasBannedContent } from "../../utils/contentFilter";
import { MdAddPhotoAlternate } from "react-icons/md";
import html2canvas from "html2canvas";
const AihelpDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 570px;
  max-width: 1200px;
  width: 100%;
  margin: 10px auto 0;
  padding: 0 5px;
  gap: 5px;
  z-index: 100;
  position: relative;
  overflow-y: auto;
  transition:
    background 0.4s ease,
    backdrop-filter 0.4s ease,
    border 0.4s ease,
    border-radius 0.4s ease,
    padding 0.4s ease;
  ${(props) =>
    props.$isStickyBgMode
      ? css`
          background: ${
            props.$isDarkMode ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)"
          };
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 16px;
          border: 1px solid
            ${props.$isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)"};
          padding: 10px;
        `
      : css`
          background: transparent;
        `}
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
  border-radius: 10px;
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
const SettingsPanel = styled.div`
  flex-shrink: 0;
  padding: 5px;
  background: ${(p) =>
    p.$isStickyBgMode
      ? p.$isDarkMode
        ? "rgba(10, 10, 20, 0.82)"
        : "rgba(255, 249, 230, 0.88)"
      : p.$isDarkMode
        ? "rgba(12, 12, 12, 0.67)"
        : "#fff9e6"};
  backdrop-filter: ${(p) => (p.$isStickyBgMode ? "blur(8px)" : "none")};
  -webkit-backdrop-filter: ${(p) => (p.$isStickyBgMode ? "blur(8px)" : "none")};
  border: 1px solid orange;
  border-radius: 8px;
  z-index: 100;
  position: relative;
  color: ${(p) => (p.$isDarkMode ? "white" : "black")};
  display: flex;
  flex-direction: column;
  gap: 3px;
  transition:
    background 0.4s ease,
    backdrop-filter 0.4s ease;
`;

const ProviderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  z-index: 100;
  color: ${(p) => (p.$isDarkMode ? "white" : "black")};

  ${(p) =>
    p.$isStickyBgMode
      ? css`
          background: ${p.$isDarkMode ? "rgba(15,15,25,0.45)" : "rgba(255,255,255,0.6)"};
          padding: 6px;
          border-radius: 6px;
        `
      : ""}

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    min-width: 160px;
  }

  input[type="radio"] {
    margin-right: 8px;
    accent-color: orange;
  }

  input[type="password"] {
    flex: 1;
    min-width: 200px;
    padding: 6px 10px;
    border-radius: 4px;
    border: 1px solid ${(p) => (p.$hasError ? "red" : "#ccc")};
    background: ${(p) => (p.$isDarkMode ? "#222" : "#fff")};
    color: ${(p) => (p.$isDarkMode ? "white" : "black")};
    font-size: 12px;
  }
`;

const GetKeyLink = styled.a`
  font-size: 11px;
  color: orange;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover {
    text-decoration: underline;
  }
`;

const LengthSettings = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 5px;
  border-top: 1px dashed rgba(128, 128, 128, 0.3);
  padding-top: 10px;
  flex-wrap: wrap;
`;

const SettingsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 180px;
`;

const GroupLabel = styled.div`
  font-size: 11px;
  font-weight: 700;
  color: orange;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

const LengthButton = styled.button`
  border: 1px solid orange;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 11px;
  cursor: pointer;
  background: ${(p) => (p.$active ? "orange" : "transparent")};
  color: ${(p) => (p.$active ? "#000" : p.$isDarkMode ? "white" : "black")};
  font-weight: ${(p) => (p.$active ? "700" : "500")};
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-1px);
  }
`;
const Span = styled.span`
  color: ${(p) => (p.$active ? "#000" : p.$isDarkMode ? "white" : "black")};
`;
const ChatHistory = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow-y: auto;
  padding: 3px;
  border-radius: 8px;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: orange;
    border-radius: 10px;
  }
`;

const Message = styled.div`
  align-self: ${(p) => (p.$isBot ? "flex-start" : "flex-end")};
  max-width: 80%;
  background: ${(p) =>
    p.$isBot
      ? p.$isDarkMode
        ? "rgba(30, 30, 40, 0.85)"
        : "rgba(240,240,240,0.92)"
      : "rgba(0,0,0,0.82)"};
  backdrop-filter: ${(p) => (p.$isStickyBgMode ? "blur(6px)" : "none")};
  -webkit-backdrop-filter: ${(p) => (p.$isStickyBgMode ? "blur(6px)" : "none")};
  color: ${(p) => (p.$isBot ? (p.$isDarkMode ? "white" : "black") : "white")};
  border: 1px solid
    ${(p) => (p.$isBot ? (p.$isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)") : "rgba(255,255,255,0.3)")};
  padding: 4px;
  border-radius: 10px;
  position: relative;
  font-size: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  pre {
    background: rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
  }
`;

const CopyButton = styled.button`
  position: absolute;
  top: 5px;
  right: -35px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 16px;
  padding: 2px 5px;
  border-radius: 4px;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;

const ErrorBox = styled.div`
  color: #ff4d4d;
  background: rgba(255, 77, 77, 0.1);
  padding: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

/* ── Input area: sticky at bottom ── */
const InputContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(p) => (p.$isDarkMode ? "#ffffff" : "#000000")};
  border-radius: 8px;
  background: ${(p) => (p.$isDarkMode ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.85)")};
  backdrop-filter: ${(p) => (p.$isStickyBgMode ? "blur(8px)" : "none")};
  -webkit-backdrop-filter: ${(p) => (p.$isStickyBgMode ? "blur(8px)" : "none")};
  transition:
    background 0.4s ease,
    border-color 0.2s;
  &:focus-within {
    border-color: orange;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  border: none;
  background: transparent;
  padding: 12px;
  border-radius: 8px 8px 0 0;
  color: ${(p) => (p.$isDarkMode ? "white" : "black")};
  font-size: 14px;
  outline: none;
  resize: none;
  overflow-y: auto;
  min-height: 50px;
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px 10px 10px;
  gap: 8px;
`;

const MiniButton = styled.button`
  color: ${(p) => (p.$isDarkMode ? "#000000" : "#ffffff")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    transform: scale(1.1);
  }
`;

const FilePreviewContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-shrink: 0;
  flex-wrap: wrap;
`;

const FileThumb = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => (p.$isDarkMode ? "#333" : "#eee")};
  border-radius: 5px;
  border: 1px solid orange;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const RemoveFileBtn = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  background: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatusText = styled.div`
  flex-shrink: 0;
  font-size: 12px;
  color: orange;
`;

const FileSizeText = styled.div`
  width: 100%;
  font-size: 10px;
  color: orange;
`;

/* ── Fullscreen media viewer ── */
const ViewerOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.93);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 20px;
`;

const ViewerClose = styled.button`
  position: absolute;
  top: 16px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 22px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ViewerFileName = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  max-width: 90vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ViewerImage = styled.img`
  max-width: 90vw;
  max-height: 75vh;
  border-radius: 8px;
  object-fit: contain;
`;

const ViewerVideo = styled.video`
  max-width: 90vw;
  max-height: 65vh;
  border-radius: 8px;
  background: #000;
`;

const AudioBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const AudioIcon = styled.div`
  font-size: 80px;
  line-height: 1;
`;

const WaveformBars = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  height: 40px;
`;

const WaveBar = styled.div`
  width: 4px;
  border-radius: 2px;
  background: orange;
  height: ${(p) => p.$h}%;
  opacity: ${(p) => (p.$playing ? 1 : 0.4)};
  animation: ${(p) => (p.$playing ? `wavePulse ${p.$dur}s ease-in-out infinite alternate` : "none")};
  @keyframes wavePulse {
    from {
      height: ${(p) => p.$h}%;
    }
    to {
      height: ${(p) => Math.min(100, p.$h + 40)}%;
    }
  }
`;

const MediaControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: min(500px, 90vw);
`;

const PlayPauseBtn = styled.button`
  background: orange;
  border: none;
  color: #000;
  font-size: 22px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #ffb300;
  }
`;

const TimelineBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  &:hover {
    height: 8px;
  }
  transition: height 0.15s;
`;

const TimelineFill = styled.div`
  height: 100%;
  background: orange;
  border-radius: 3px;
  pointer-events: none;
`;

const TimeLabel = styled.div`
  color: rgba(255, 255, 255, 0.55);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
`;

const SpeedRow = styled.div`
  display: flex;
  gap: 6px;
`;

const SpeedBtn = styled.button`
  border: 1px solid ${(p) => (p.$active ? "orange" : "rgba(255,255,255,0.2)")};
  border-radius: 999px;
  padding: 3px 10px;
  font-size: 12px;
  cursor: pointer;
  background: ${(p) => (p.$active ? "orange" : "transparent")};
  color: ${(p) => (p.$active ? "#000" : "white")};
  font-weight: ${(p) => (p.$active ? "700" : "400")};
  &:hover {
    border-color: orange;
  }
`;

const AudioHidden = styled.audio`
  display: none;
`;

const ThumbClickable = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-in;
`;

/* ── Exported helpers ── */
export const getResponseLengthInstruction = (responseLength) => {
  if (responseLength === "detailed")
    return { label: "Більше", instruction: "Докладно." };
  if (responseLength === "normal")
    return { label: "Нормально", instruction: "Нормально." };
  return { label: "Менше", instruction: "Коротко." };
};

export const getResponseStyleInstruction = (responseStyle) => {
  if (responseStyle === "scientific")
    return {
      label: "Науково",
      instruction: "Використовуй науковий стиль, чітко, з термінами і логікою.",
    };
  if (responseStyle === "friendly")
    return {
      label: "Дружньо",
      instruction: "Використовуй дружній, теплий і простий стиль.",
    };
  return {
    label: "Стандартно",
    instruction: "Використовуй нейтральний стиль.",
  };
};

const STYHIYA_SYSTEM_PROMPT = `Ти — ШІ-асистент вбудований у веб-платформу «Стихія».
КОНЦЕПЦІЯ ПЛАТФОРМИ:
«Стихія» — це безкоштовна веб-платформа (без реклами) яка поєднує:
• 🌤 Погода — поточний прогноз, 24-годинний (на 7 днів), 16-денний. Кольорові попередження (🔴 зараз, 🟠 найближчі 3 дні) при екстремальних умовах (темп. >30°C або <-30°C, вітер >10 м/с, УФ >7). Можна переглядати кілька міст одночасно.
• 🎵 Музика — плейлисти без реклами та лімітів.
• 📰 Новини — RSS-стрічки з автоматичним фільтром: відсіює насильство, політику, 18+, кримінал, релігію (крім святкових днів), казино, корупцію, секти. Можна додавати власні RSS-джерела.
• 🎨 Фан-арти — галерея різних жанрів(більшість не належить автору). Користувачі можуть завантажувати, друкувати 2д і 3д принтером роботи.
• 🗺 Карта клімату — інтерактивна кліматична карта.
• 🤖 Допомога ШІ (це ти) — чат з Gemini, аналіз фото/відео/аудіо, скріншот сторінки.

АВТОР: TheTurkeyStudio. Email: theturkeystudio@gmail.com
Вікові обмеження: 13+. Деякий контент — 14+.
Конфіденційність: платформа не збирає персональні дані.
Авторські права: пісні використовуються лише в ознайомчих цілях.

ТВОЇ ПРАВИЛА:
1. Ти знаєш усі розділи Стихії і можеш допомогти користувачу розібратись у будь-якому з них.
2. Якщо питання стосується платформи — відповідай конкретно і по суті, посилаючись на розділи та функції.
3. Якщо питання загальне (наука, технології, творчість) — відповідай як корисний асистент.
4. Не генеруй шкідливий контент, код-зловмисник, пропаганду ненависті або матеріали 18+.
5. Відповідай українською мовою, якщо запит не на іншій мові.
6. Будь дружнім, чітким і корисним — відповідно до обраного стилю користувача.`;

/* ── Component ── */
const Aihelp = ({ isDarkMode, isStickyBgMode }) => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [personalApiKey, setPersonalApiKey] = useState("");
  const [geminiModel, setGeminiModel] = useState("gemini-3.5-flash-lite");
  const [responseLength, setResponseLength] = useState("normal");
  const [responseStyle, setResponseStyle] = useState("friendly");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [streamingText, setStreamingText] = useState("");

  const lastPromptRef = useRef("");
  const [totalFilesSize, setTotalFilesSize] = useState(0);
  const [error, setError] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [viewingFile, setViewingFile] = useState(null);
  const [mediaPlaying, setMediaPlaying] = useState(false);
  const [mediaProgress, setMediaProgress] = useState(0);
  const [mediaDuration, setMediaDuration] = useState(0);
  const [mediaCurrentTime, setMediaCurrentTime] = useState(0);
  const [mediaSpeed, setMediaSpeed] = useState(1);

  const objectURLs = useRef([]);
  const textareaRef = useRef(null);
  const chatEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const mediaRef = useRef(null);

  const formatTime = (s) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const openViewer = (fileObj) => {
    setViewingFile(fileObj);
    setMediaPlaying(false);
    setMediaProgress(0);
    setMediaCurrentTime(0);
    setMediaDuration(0);
    setMediaSpeed(1);
  };

  const closeViewer = () => {
    if (mediaRef.current) {
      mediaRef.current.pause();
    }
    setViewingFile(null);
    setMediaPlaying(false);
  };

  const togglePlay = () => {
    if (!mediaRef.current) return;
    if (mediaRef.current.paused) {
      mediaRef.current.play();
    } else {
      mediaRef.current.pause();
    }
  };

  const handleMediaTimeUpdate = () => {
    if (!mediaRef.current) return;
    const { currentTime, duration } = mediaRef.current;
    setMediaCurrentTime(currentTime);
    setMediaProgress(duration ? currentTime / duration : 0);
  };

  const handleMediaLoaded = () => {
    if (!mediaRef.current) return;
    setMediaDuration(mediaRef.current.duration);
    mediaRef.current.playbackRate = mediaSpeed;
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(
      0,
      Math.min(1, (e.clientX - rect.left) / rect.width),
    );
    if (mediaRef.current && mediaRef.current.duration) {
      mediaRef.current.currentTime = ratio * mediaRef.current.duration;
    }
  };

  const handleSpeedChange = (speed) => {
    setMediaSpeed(speed);
    if (mediaRef.current) mediaRef.current.playbackRate = speed;
  };

  const handleTextChange = (e) => {
    setPrompt(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    const container = chatContainerRef.current;
    if (!container) return;
    const distanceFromBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight;
    // Only auto-scroll inside chat if user is near the bottom
    if (distanceFromBottom < 150) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (!streamingText) return;
    const container = chatContainerRef.current;
    if (!container) return;
    const distanceFromBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight;
    if (distanceFromBottom < 150) {
      container.scrollTop = container.scrollHeight;
    }
  }, [streamingText]);

  const captureScreen = async () => {
    if (isCapturing || loading) return;
    setIsCapturing(true);
    setStatus("Роблю скріншот...");
    try {
      const canvas = await html2canvas(document.body, {
        useCORS: true,
        allowTaint: true,
        scale: 0.8,
        logging: false,
      });
      canvas.toBlob((blob) => {
        if (!blob) return;
        const file = new File([blob], "screenshot.png", { type: "image/png" });
        const url = URL.createObjectURL(file);
        objectURLs.current.push(url);
        setSelectedFiles((prev) => [...prev, { file, objectURL: url }]);
        setTotalFilesSize((prev) => prev + blob.size);
        setStatus("Скріншот додано — запитайте Gemini!");
        setTimeout(() => setStatus(""), 2000);
      }, "image/png");
    } catch (e) {
      setStatus("Помилка скріншоту");
      setTimeout(() => setStatus(""), 2000);
    } finally {
      setIsCapturing(false);
    }
  };

  const handleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Ваш браузер не підтримує розпізнавання голосу.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "uk-UA";
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
      setStatus("Слухаю вас...");
    };
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setPrompt((prev) => (prev ? prev + " " : "") + transcript);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => {
      setIsListening(false);
      setStatus("");
    };

    recognition.start();
  };

  useEffect(() => {
    const loadKey = async () => {
      const gK = await localforage.getItem("gemini_api_key");
      const gM = await localforage.getItem("gemini_model");
      const history = await localforage.getItem("ai_help_history");
      if (gK) setPersonalApiKey(gK);
      if (gM) setGeminiModel(gM);
      if (history) setMessages(history);
    };
    loadKey();

    const handleKeyChange = (e) => {
      setPersonalApiKey(e.detail);
    };
    window.addEventListener("geminiKeyChanged", handleKeyChange);
    return () => window.removeEventListener("geminiKeyChanged", handleKeyChange);
  }, []);


  useEffect(() => {
    return () => {
      objectURLs.current.forEach((url) => URL.revokeObjectURL(url));
      objectURLs.current = [];
    };
  }, []);

  const fileToGenerativePart = async (file) => {
    const base64 = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.readAsDataURL(file);
    });
    return { inlineData: { data: base64, mimeType: file.type } };
  };

  const clearFiles = () => {
    objectURLs.current.forEach((url) => URL.revokeObjectURL(url));
    objectURLs.current = [];
    setSelectedFiles([]);
    setTotalFilesSize(0);
  };

  const saveApiKey = async (val) => {
    setPersonalApiKey(val);
    await localforage.setItem("gemini_api_key", val);
    window.dispatchEvent(new CustomEvent("geminiKeyChanged", { detail: val }));
  };


  const handleFileSelect = (files) => {
    const incomingFiles = Array.from(files);
    const MAX_FILES = 15;
    const MAX_TOTAL_SIZE = 100 * 1024 * 1024;

    if (selectedFiles.length + incomingFiles.length > MAX_FILES) {
      alert(`Ви можете прикріпити максимум ${MAX_FILES} файлів.`);
      return;
    }

    const currentTotalSize = selectedFiles.reduce(
      (acc, f) => acc + f.file.size,
      0,
    );
    const incomingTotalSize = incomingFiles.reduce((acc, f) => acc + f.size, 0);

    if (currentTotalSize + incomingTotalSize > MAX_TOTAL_SIZE) {
      alert("Загальний розмір вибраних файлів перевищує 100МБ.");
      return;
    }

    const newFilesData = incomingFiles.map((file) => {
      const url = URL.createObjectURL(file);
      objectURLs.current.push(url);
      return { file, objectURL: url };
    });
    setTotalFilesSize(currentTotalSize + incomingTotalSize);
    setSelectedFiles((prev) => [...prev, ...newFilesData]);
  };

  const removeFile = (index) => {
    setSelectedFiles((prev) => {
      const fileToRemove = prev[index];
      if (fileToRemove?.objectURL) {
        URL.revokeObjectURL(fileToRemove.objectURL);
        setTotalFilesSize((curr) => Math.max(0, curr - fileToRemove.file.size));
        objectURLs.current = objectURLs.current.filter(
          (url) => url !== fileToRemove.objectURL,
        );
      }
      return prev.filter((_, i) => i !== index);
    });
  };

  const setAsBackground = async (fileObj) => {
    try {
      const url =
        fileObj.objectURL ||
        (fileObj.file && URL.createObjectURL(fileObj.file));
      if (!url) return;
      // Add to custom hero backgrounds (prepend)
      const existing =
        (await localforage.getItem("custom_hero_backgrounds")) || [];
      const entry = {
        src: url,
        name: fileObj.file?.name || "ai-image",
        author: "AiHelp",
      };
      const updated = [entry, ...existing.filter((e) => e.src !== url)];
      await localforage.setItem("custom_hero_backgrounds", updated);
      // Also set as active hero background
      await localforage.setItem("hero_background", url);
      // Notify app if it listens for this event
      try {
        window.dispatchEvent(
          new CustomEvent("heroBackgroundChanged", { detail: { src: url } }),
        );
      } catch (e) {}
      alert(
        "Картину збережено як фон. Якщо фон не змінився, перезавантажте сторінку.",
      );
    } catch (err) {
      console.error(err);
      alert("Не вдалося встановити фон.");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Скопійовано!");
  };

  const clearHistory = async () => {
    if (window.confirm("Очистити історію чату?")) {
      objectURLs.current.forEach((url) => URL.revokeObjectURL(url));
      objectURLs.current = [];
      setMessages([]);
      setTotalFilesSize(0);
      await localforage.removeItem("ai_help_history");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAsk();
    }
  };

  const handleAsk = async (eventOrText = null) => {
    const isRetry = typeof eventOrText === "string";
    const originalPrompt = isRetry ? eventOrText : prompt.trim();

    if ((!originalPrompt && selectedFiles.length === 0) || loading) return;

    if (!personalApiKey) {
      setMessages((prev) => [
        ...prev,
        {
          text: "⚠️ Будь ласка, введіть Gemini API-ключ у панелі налаштувань.",
          isBot: true,
        },
      ]);
      return;
    }

    if (originalPrompt && hasBannedContent(originalPrompt)) {
      setMessages((prev) => [
        ...prev,
        { text: "Запит містить заборонені слова або теми.", isBot: true },
      ]);
      return;
    }

    lastPromptRef.current = originalPrompt;
    setError(null);
    setLoading(true);
    setStreamingText("");

    const newUserMessage = { text: originalPrompt, isBot: false };
    setMessages((prev) => [...prev, newUserMessage]);
    setPrompt("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "0px";
      textareaRef.current.style.height = "auto";
    }

    try {
      setStatus("З'єднання з Google Gemini...");
      const genAI = new GoogleGenerativeAI(personalApiKey);
      const model = genAI.getGenerativeModel({
        model: geminiModel,
        systemInstruction: STYHIYA_SYSTEM_PROMPT,
      });

      const { instruction: lengthInstr } =
        getResponseLengthInstruction(responseLength);
      const { instruction: styleInstr } =
        getResponseStyleInstruction(responseStyle);
      const fullPrompt = `${lengthInstr} ${styleInstr}\n${originalPrompt}`;

      const parts = [{ text: fullPrompt }];
      for (const fileObj of selectedFiles) {
        parts.push(await fileToGenerativePart(fileObj.file));
      }

      const result = await model.generateContentStream(parts);
      let accumulatedText = "";

      for await (const chunk of result.stream) {
        accumulatedText += chunk.text();
        setStreamingText(accumulatedText);
      }

      const finalBotMessage = { text: accumulatedText, isBot: true };
      setMessages((prev) => {
        const updated = [...prev, finalBotMessage];
        localforage.setItem("ai_help_history", updated.slice(-25));
        return updated;
      });
      setStreamingText("");
      clearFiles();
    } catch (err) {
      setStreamingText("");
      setError(err.message);
      clearFiles();
    } finally {
      setLoading(false);
      setStatus("");
    }
  };

  return (
    <AihelpDiv $isStickyBgMode={isStickyBgMode} $isDarkMode={isDarkMode}>
      <AihelpTitle $isDarkMode={isDarkMode} $isStickyBgMode={isStickyBgMode}>
        Допомога ШІ
      </AihelpTitle>
      <SettingsPanel $isDarkMode={isDarkMode} $isStickyBgMode={isStickyBgMode}>
        <ProviderRow $isDarkMode={isDarkMode} $isStickyBgMode={isStickyBgMode}>
          <label style={{ minWidth: "unset", fontWeight: 600, fontSize: 13 }}>
            Gemini API Key
          </label>
          <input
            type="password"
            placeholder="Вставте ваш Gemini API Key..."
            value={personalApiKey}
            onChange={(e) => saveApiKey(e.target.value)}
            name="ai-help-gemini-key"
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            data-form-type="other"
            data-lpignore="true"
          />
          {!personalApiKey && (
            <GetKeyLink
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noreferrer"
            >
              🔗 Отримати ключ
            </GetKeyLink>
          )}
        </ProviderRow>

        <LengthSettings>
          <SettingsGroup>
            <GroupLabel>Обсяг</GroupLabel>
            <ButtonRow>
              {["concise", "normal", "detailed"].map((val) => (
                <LengthButton
                  key={val}
                  type="button"
                  $active={responseLength === val}
                  $isDarkMode={isDarkMode}
                  onClick={() => setResponseLength(val)}
                >
                  {getResponseLengthInstruction(val).label}
                </LengthButton>
              ))}
            </ButtonRow>
          </SettingsGroup>

          <SettingsGroup>
            <GroupLabel>Стиль</GroupLabel>
            <ButtonRow>
              {["friendly", "standard", "scientific"].map((val) => (
                <LengthButton
                  key={val}
                  type="button"
                  $active={responseStyle === val}
                  $isDarkMode={isDarkMode}
                  onClick={() => setResponseStyle(val)}
                >
                  {getResponseStyleInstruction(val).label}
                </LengthButton>
              ))}
            </ButtonRow>
          </SettingsGroup>
        </LengthSettings>
      </SettingsPanel>
      <ChatHistory ref={chatContainerRef}>
        {messages.map((m, i) => (
          <Message
            key={i}
            $isBot={m.isBot}
            $isDarkMode={isDarkMode}
            $isStickyBgMode={isStickyBgMode}
          >
            {m.isBot && (
              <CopyButton onClick={() => copyToClipboard(m.text)}>
                📋
              </CopyButton>
            )}
            <ReactMarkdown>{m.text}</ReactMarkdown>
          </Message>
        ))}
        {streamingText && (
          <Message
            $isBot
            $isDarkMode={isDarkMode}
            $isStickyBgMode={isStickyBgMode}
          >
            <ReactMarkdown>{streamingText}</ReactMarkdown>
          </Message>
        )}
        {error && (
          <ErrorBox>
            ⚠️ Помилка: {error}
            <MiniButton
              $primary
              onClick={() => handleAsk(lastPromptRef.current)}
            >
              Спробувати ще раз
            </MiniButton>
          </ErrorBox>
        )}
        <div ref={chatEndRef} />
      </ChatHistory>

      {status && <StatusText>{status}</StatusText>}

      {/* ── File previews ── */}
      {selectedFiles.length > 0 && (
        <FilePreviewContainer>
          <FileSizeText>
            Загальний розмір: {(totalFilesSize / (1024 * 1024)).toFixed(2)} MB /
            100 MB
          </FileSizeText>
          {selectedFiles.map((f, i) => (
            <FileThumb key={i} $isDarkMode={isDarkMode}>
              <ThumbClickable onClick={() => openViewer(f)}>
                {f.file.type.startsWith("video/") ? (
                  <video src={f.objectURL} />
                ) : f.file.type.startsWith("audio/") ? (
                  <span style={{ fontSize: "28px" }}>🎵</span>
                ) : (
                  <img src={f.objectURL} alt="preview" />
                )}
              </ThumbClickable>
              <RemoveFileBtn onClick={() => removeFile(i)}>✕</RemoveFileBtn>
            </FileThumb>
          ))}
        </FilePreviewContainer>
      )}

      {/* ── Sticky input ── */}
      <InputContainer
        $isDarkMode={isDarkMode}
        $isStickyBgMode={isStickyBgMode}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleFileSelect(e.dataTransfer.files);
        }}
      >
        <TextArea
          ref={textareaRef}
          placeholder="Запитайте щось... (Enter - відправити, Shift+Enter - новий рядок)"
          value={prompt}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
          rows={1}
          $isDarkMode={isDarkMode}
        />
        <ActionButtons>
          <label
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <span
              title="Додати фото, відео, аудіо"
              style={{ fontSize: "23px" }}
            >
              <MdAddPhotoAlternate />
            </span>
            <input
              type="file"
              accept="image/*, video/*, audio/*"
              multiple
              hidden
              onChange={(e) => handleFileSelect(e.target.files)}
            />
          </label>
          <MiniButton
            onClick={captureScreen}
            $isDarkMode={isDarkMode}
            title="Показати поточну сторінку Gemini (скріншот)"
            disabled={loading || isCapturing}
          >
            {isCapturing ? "⏳" : "📸"}
          </MiniButton>
          <Span
            style={{ fontSize: "18px", marginTop: "2px" }}
            onClick={clearHistory}
            title="Видалити всі повідомлення"
            $isDarkMode={isDarkMode}
          >
            <RiDeleteBack2Fill />
          </Span>
          <MiniButton
            $primary
            disabled={loading || (!prompt.trim() && selectedFiles.length === 0)}
            onClick={handleAsk}
            title="Запитати"
          >
            {loading ? "..." : "➤"}
          </MiniButton>
        </ActionButtons>
      </InputContainer>
      {viewingFile && (
        <ViewerOverlay onClick={closeViewer}>
          <ViewerClose onClick={closeViewer}>✕</ViewerClose>
          <ViewerFileName>{viewingFile.file.name}</ViewerFileName>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 14,
            }}
          >
            {viewingFile.file.type.startsWith("image/") ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <ViewerImage
                  src={viewingFile.objectURL}
                  alt={viewingFile.file.name}
                />
                <MiniButton
                  $isDarkMode={isDarkMode}
                  onClick={() => setAsBackground(viewingFile)}
                >
                  Зробити фоном
                </MiniButton>
              </div>
            ) : viewingFile.file.type.startsWith("video/") ? (
              <>
                <ViewerVideo
                  ref={mediaRef}
                  src={viewingFile.objectURL}
                  onTimeUpdate={handleMediaTimeUpdate}
                  onLoadedMetadata={handleMediaLoaded}
                  onPlay={() => setMediaPlaying(true)}
                  onPause={() => setMediaPlaying(false)}
                  onEnded={() => setMediaPlaying(false)}
                />
                <MediaControls>
                  <TimelineBar onClick={handleSeek}>
                    <TimelineFill
                      style={{ width: `${mediaProgress * 100}%` }}
                    />
                  </TimelineBar>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <PlayPauseBtn onClick={togglePlay}>
                      {mediaPlaying ? "⏸" : "▶"}
                    </PlayPauseBtn>
                    <TimeLabel>
                      {formatTime(mediaCurrentTime)} /{" "}
                      {formatTime(mediaDuration)}
                    </TimeLabel>
                  </div>
                  <SpeedRow>
                    {[0.5, 0.75, 1, 1.25, 1.5, 2].map((s) => (
                      <SpeedBtn
                        key={s}
                        $active={mediaSpeed === s}
                        onClick={() => handleSpeedChange(s)}
                      >
                        {s}x
                      </SpeedBtn>
                    ))}
                  </SpeedRow>
                </MediaControls>
              </>
            ) : viewingFile.file.type.startsWith("audio/") ? (
              <AudioBox>
                <AudioIcon>🎵</AudioIcon>
                <WaveformBars>
                  {[
                    30, 55, 80, 45, 65, 90, 50, 75, 40, 60, 85, 35, 70, 55, 80,
                  ].map((h, i) => (
                    <WaveBar
                      key={i}
                      $h={h}
                      $playing={mediaPlaying}
                      $dur={(0.3 + i * 0.07).toFixed(2)}
                    />
                  ))}
                </WaveformBars>
                <AudioHidden
                  ref={mediaRef}
                  src={viewingFile.objectURL}
                  onTimeUpdate={handleMediaTimeUpdate}
                  onLoadedMetadata={handleMediaLoaded}
                  onPlay={() => setMediaPlaying(true)}
                  onPause={() => setMediaPlaying(false)}
                  onEnded={() => setMediaPlaying(false)}
                />
                <MediaControls>
                  <TimelineBar onClick={handleSeek}>
                    <TimelineFill
                      style={{ width: `${mediaProgress * 100}%` }}
                    />
                  </TimelineBar>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <PlayPauseBtn onClick={togglePlay}>
                      {mediaPlaying ? "⏸" : "▶"}
                    </PlayPauseBtn>
                    <TimeLabel>
                      {formatTime(mediaCurrentTime)} /{" "}
                      {formatTime(mediaDuration)}
                    </TimeLabel>
                  </div>
                  <SpeedRow>
                    {[0.5, 0.75, 1, 1.25, 1.5, 2].map((s) => (
                      <SpeedBtn
                        key={s}
                        $active={mediaSpeed === s}
                        onClick={() => handleSpeedChange(s)}
                      >
                        {s}x
                      </SpeedBtn>
                    ))}
                  </SpeedRow>
                </MediaControls>
              </AudioBox>
            ) : null}
          </div>
        </ViewerOverlay>
      )}
    </AihelpDiv>
  );
};

export default Aihelp;
