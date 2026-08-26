import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import localforage from "localforage";
import styled, { keyframes, css } from "styled-components";
import { GoogleGenerativeAI } from "@google/generative-ai";
import songAiKnowledge from "../MusicPhoto/songAiKnowledge.json";
import rawFaqData from "./faqData.json";
import hills from "../../photos/hero-header/fog.webp";
import texts from "../../photos/vip-modal/texts.webp";
import logofix from "../../photos/hero-header/logo.webp";
import { IoHeartDislikeSharp } from "react-icons/io5";
import preview from "../../photos/hero-header/prewiew.webp";
import info from "../../photos/hero-header/what.webp";
import one from "../../photos/hero-header/my/myone.webp";
import two from "../../photos/hero-header/my/mytwo.webp";
import soon from "../../photos/hero-header/my/soon.webp";
import might from "../../photos/hero-header/my/myone.webp";
import { RiDeleteBack2Fill } from "react-icons/ri";
import three from "../../photos/hero-header/my/mythree.webp";
const slideIn = keyframes`
  0% { transform: translateY(100%) scale(0.9); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`;
// content: [
//   { type: "image", src: imageSrc, alt: "..." },
//   { type: "text", value: "Перший текст" },
//   { type: "text", value: "Другий текст" }
// ]
const slideOut = keyframes`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.9); opacity: 0; }
`;

const fadeIn = keyframes`
   from { opacity: 0; transform: scale(0.8); }
   to { opacity: 1; transform: scale(1); }
 `;
const appearAndShrink = keyframes`
  0% { opacity: 0; transform: scale(1.3); filter: blur(10px); }
  50% { opacity: 0.5; transform: scale(1.1); filter: blur(2px); }
  100% { opacity: 1; transform: scale(1); filter: blur(0); }
`;

const animatedStyle = css`
  opacity: 0;
  transform-origin: left center;
  animation: ${appearAndShrink} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
  ${({ $index }) => css`
    animation-delay: ${0.1 + ($index || 0) * 0.05}s;
  `}
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9000;
  transition:
    opacity 0.4s ease,
    pointer-events 0.4s ease;
  opacity: ${(props) => (props.$isClosing ? 0 : 1)};
  pointer-events: ${(props) => (props.$isClosing ? "none" : "auto")};
  backdrop-filter: blur(5px);
`;
const Content = styled.div`
  background: #ffd001;
  padding: 5px;
  border-radius: 10px;
  max-width: 1200px;
  width: 95%;
  position: relative;
  font-family:
    "Inter",
    -apple-system,
    sans-serif;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  animation: ${(props) => (props.$isClosing ? slideOut : slideIn)} 0.4s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`;

const Conten = styled.div`
  background: #ffd001;
  z-index: 10;
`;

const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 5px;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
`;
const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TabButton = styled.button`
  background: ${(props) => (props.$active ? "#8a2be2" : "rgba(0, 0, 0, 0.1)")};
  color: ${(props) => (props.$active ? "white" : "#333")};
  border: none;
  padding: 5px 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: ${(props) => (props.$active ? "#8a2be2" : "rgba(0, 0, 0, 0.2)")};
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  background: transparent;
  border-bottom-left-radius: 10px;
  border: none;
  padding-left: 10px;
  padding-bottom: 5px;
  padding-right: 9px;
  background: #3bc2f7;
  color: #000;
  height: 40px;
  font-size: 14px;
  cursor: pointer;
`;
const PreviewCloseBtn = styled(CloseBtn)`
  color: white;
  top: 20px;
  right: 20px;
  z-index: 9601;
  animation: ${fadeIn} 0.3s ease-out forwards;
  &:hover {
    color: #ffb36c;
  }
`;

const AccordionWrapper = styled.div`
  margin-top: 3px;
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  ${animatedStyle}
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  color: ${(props) => (props.$rating === 1 ? "#8a2be2" : "#111")};
  opacity: ${(props) => (props.$rating === -1 ? 0.4 : 1)};
  transition: all 0.3s ease;

  &:hover {
    color: #8a2be2;
  }

  &::before {
    content: "";
    width: 4px;
    height: 20px;
    background: ${(props) => (props.$rating === -1 ? "#ccc" : "#8a2be2")};
    margin-right: 12px;
    display: inline-block;
  }
`;

const QuestionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 5px;
`;

const QuestionText = styled.div`
  flex: 1;
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 5px;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  gap: 3px;
  min-width: 20px;
  justify-content: flex-end;
  &:hover {
    transform: scale(1.2);
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const Arrow = styled.span`
  font-size: 12px;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(90deg)")};
`;

const Answer = styled.div`
  max-height: ${(props) => (props.$isOpen ? "6000px" : "0")};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding-bottom: ${(props) => (props.$isOpen ? "5px" : "0")};
  font-size: 13px;
  line-height: 1.6;
  color: #4a4a4a;
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  white-space: pre-line;
`;

const AnswerImage = styled.img`
  max-width: 100%;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  height: auto;
  max-height: ${(props) =>
    props.$isHovered || props.$isPinned ? "800px" : "10px"};
  opacity: ${(props) => (props.$isHovered || props.$isPinned ? 1 : 0.4)};

  &:hover {
    transform: scale(1.01);
  }
`;

const ImagePreviewActions = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9600;
  display: flex;
  gap: 15px;
  animation: ${fadeIn} 0.3s ease-out forwards;
`;

const ActionButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
  }
`;

const ImageActionsContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  display: flex;
  gap: 8px;
  transition: all 0.3s ease-in-out;
  opacity: ${(props) => (props.$isHovered || props.$isPinned ? 1 : 0)};
  pointer-events: ${(props) =>
    props.$isHovered || props.$isPinned ? "auto" : "none"};
`;

const AnswerActionButton = styled.button`
  background: #8a2be2;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 2px 10px;
  cursor: pointer;
  font-size: 12px;
  transition: background 0.2s ease;
  &:hover {
    background: #a25be2;
  }
`;

const ImagePreviewOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  z-index: 9500;
`;

const PreviewImage = styled.img`
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  cursor: zoom-out;
`;

const AnswerContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const AcceptBtn = styled.button`
  padding: 3px;
  background: #8a2be2;
  color: white;
  border: none;
  background: rgb(0, 204, 255);
  color: #fbfbfb;
  border: none;
  width: 35px;
  border: 2px solid rgba(1, 248, 38, 0.7);
  height: 34.5px;
  border-bottom-right-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(138, 43, 226, 0.3);
  transition: transform 0.2s;
  ${animatedStyle}
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 6px 10px;
  border: 2px solid rgb(50, 215, 0);
  border-bottom-left-radius: 25px;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  font-size: 16px;
  outline: none;
  margin-bottom: 10px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #8a2be2;
    background: #fff;
  }

  &::placeholder {
    color: #999;
  }
`;

const ChatWrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 450px;
  overflow-y: auto;
  padding: 5px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  &::-webkit-scrollbar {
    width: 4px;
  }
`;

const Message = styled.div`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 13px;
  max-width: 85%;
  position: relative;
  ${(props) =>
    props.$isUser
      ? css`
          background: #8a2be2;
          color: white;
          align-self: flex-end;
        `
      : css`
          background: white;
          color: #333;
          align-self: flex-start;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        `}
`;

const EditBtn = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 10px;
  cursor: pointer;
  margin-top: 4px;
  text-decoration: underline;
`;

const InputRow = styled.div`
  display: flex;
`;

const StopBtn = styled.button`
  background: #ff4d4d;
  color: white;
  border: none;
  width: 35px;
  height: 35px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ClearBtn = styled.button`
  background: rgb(134, 60, 60);
  color: #fbfbfb;
  border: none;
  width: 35px;
  border: 2px solid rgba(1, 248, 38, 0.7);
  height: 34.5px;
  cursor: pointer;
  font-size: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const InfoModal = ({ onClose, isOpen, initialFaqQuestion }) => {
  const [isClosing, setIsClosing] = useState(false);
  const customDays = useSelector((state) => state.calendar?.customDays || []);
  const [activeIndexes, setActiveIndexes] = useState([]);
  const [ratings, setRatings] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("faq");
  const LIKE = 1;
  const DISLIKE = -1;

  // Load pinned state
  useEffect(() => {
    const loadPinnedState = async () => {
      try {
        const saved = await localforage.getItem("training_actions_pinned");
        if (saved !== null) setIsActionsPinned(saved);
      } catch (e) {
        console.error("Error loading pinned state:", e);
      }
    };
    loadPinnedState();
  }, []);

  // AI Logic
  const [chatHistory, setChatHistory] = useState([]);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [geminiKey, setGeminiKey] = useState("");
  const abortControllerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const initAi = async () => {
      const savedKey = await localforage.getItem("gemini_api_key");
      const savedHistory = await localforage.getItem("user_help_session");
      if (savedKey) setGeminiKey(savedKey);
      if (savedHistory) setChatHistory(savedHistory);
      else
        setChatHistory([
          {
            text: "Привіт! Я твій асистент 'Стихії'. Запитай мене про погоду, пісні або правила сайту.",
            isBot: true,
          },
        ]);
    };
    initAi();
  }, []);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chatHistory, isAiLoading]);

  const saveSession = async (history) => {
    await localforage.setItem("user_help_session", history.slice(-15));
  };

  const [hoveredImage, setHoveredImage] = useState(null);
  const [isActionsPinned, setIsActionsPinned] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const handleStopGeneration = () => {
    if (abortControllerRef.current) abortControllerRef.current.abort();
    setIsAiLoading(false);
  };

  const handleClearHistory = async () => {
    if (window.confirm("Очистити історію чату з асистентом?")) {
      const resetMsg = [
        {
          text: "Привіт! Я твій асистент 'Стихії'. Запитай мене про погоду, пісні або правила сайту.",
          isBot: true,
        },
      ];
      setChatHistory(resetMsg);
      await localforage.removeItem("user_help_session");
    }
  };

  // Save pinned state
  const togglePin = async (e) => {
    e.stopPropagation();
    const newState = !isActionsPinned;
    setIsActionsPinned(newState);
    await localforage.setItem("training_actions_pinned", newState);
  };

  const handleClose = useCallback(() => {
    // Modified to handle previewImage first
    if (previewImage) {
      setPreviewImage(null);
      return; // Don't close the main modal if only preview was closed
    }
    setPreviewImage(null);
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 400);
  }, [onClose, previewImage]);

  const handleDownloadImage = (imgSrc) => {
    const a = document.createElement("a");
    a.href = imgSrc;
    a.download = `stykhiya_image_${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handlePrintImage = (imgSrc) => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(
      `<html><head><title>Print Image</title></head><body style="text-align:center;"><img src="${imgSrc}" style="max-width:100%;" onload="window.print();window.close()" /></body></html>`,
    );
    printWindow.document.close();
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen || isClosing) {
      window.addEventListener("keydown", handleEsc);
      return () => window.removeEventListener("keydown", handleEsc);
    }
  }, [isOpen, isClosing, handleClose]);

  const handleLike = (index, points) => {
    const currentRating = ratings[index] || 0;
    const newRating = currentRating === points ? 0 : points;
    setRatings({ ...ratings, [index]: newRating });
  };

  const toggleAccordion = (index) => {
    setActiveIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const pastEvents = React.useMemo(() => {
    const today = new Date().toISOString().split("T")[0];
    return customDays
      .filter((day) => day.date < today)
      .sort((a, b) => b.date.localeCompare(a.date)) // Свіжіші спочатку
      .slice(0, 5);
  }, [customDays]);

  const faqData = React.useMemo(() => {
    const imageMap = {
      hills,
      texts,
      logofix,
      preview,
      info,
      one,
      two,
      soon,
      might,
      three,
    };
    const baseFaqData = rawFaqData.map((item) => ({
      ...item,
      image: item.image ? (imageMap[item.image] ?? null) : null,
    }));

    if (pastEvents.length > 0) {
      const pastText = pastEvents
        .map((e) => `• ${e.date}: ${e.reason}`)
        .join("\n");
      baseFaqData.unshift({
        q: "📚 Архів минулих подій (ліміт 5)",
        a: `Це події, які ви додавали, але їх час уже минув:\n\n${pastText}`,
        image: null,
      });
    }

    return baseFaqData;
  }, [pastEvents]);
  useEffect(() => {
    if (!isOpen) {
      setActiveIndexes([]);
      return;
    }

    const newActiveIndexes = [];

    if (initialFaqQuestion) {
      const matchingIndex = faqData.findIndex(
        (item) => item.q === initialFaqQuestion,
      );
      if (matchingIndex >= 0) {
        newActiveIndexes.push(matchingIndex);
        setActiveTab("faq");
      }
    }

    const latestUpdateIndex = faqData.findIndex(
      (item) => item.q === "Останнє оновлення",
    );

    if (
      latestUpdateIndex >= 0 &&
      !newActiveIndexes.includes(latestUpdateIndex)
    ) {
      newActiveIndexes.push(latestUpdateIndex);
      setActiveTab("faq");
    }

    setActiveIndexes(newActiveIndexes);
  }, [faqData, initialFaqQuestion, isOpen]);

  if (!isOpen && !isClosing) return null;

  const handleAskAi = async () => {
    if (!searchQuery.trim() || isAiLoading) return;

    if (!geminiKey) {
      alert(
        "Будь ласка, встановіть API-ключ Gemini у налаштуваннях ШІ для використання цієї функції.",
      );
      return;
    }

    const userText = searchQuery;
    setSearchQuery("");
    const newHistory = [...chatHistory, { text: userText, isBot: false }];
    setChatHistory(newHistory);
    setIsAiLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(geminiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      // Формуємо контекст з FAQ та бази пісень
      const faqContext = faqData.map((f) => `Q: ${f.q} A: ${f.a}`).join("\n");
      const songsContext = songAiKnowledge
        .map((s) => {
          const dur = s.duration
            ? `${Math.floor(s.duration / 60)}:${(s.duration % 60).toString().padStart(2, "0")}`
            : "невідомо";
          const lyricsSum =
            s.lyrics && Array.isArray(s.lyrics)
              ? s.lyrics
                  .map((l) => `${l.time}s:${l.text}`)
                  .join("|")
                  .substring(0, 100)
              : "no";
          const filtersSum =
            s.filters && Array.isArray(s.filters)
              ? s.filters.map((f) => `${f.start}-${f.end}s:${f.type}`).join("|")
              : "no";

          let base = `Song: ${s.author}, Category: ${s.category}, Duration: ${dur}, Lyrics: ${lyricsSum}..., Filters: ${filtersSum}, Info: ${s.text}`;

          if (s.schedule) {
            const sched = s.schedule
              .map((e) => `S${e.season}E${e.ep}: ${e.title} (${e.date})`)
              .join("; ");
            base += `. Schedule: ${sched}`;
          }
          return base;
        })
        .join("\n");

      const prompt = `Ти асистент проекту "Стихія". Тобі доступні дві бази даних:
      1. База FAQ: містить правила сайту та інструкції щодо розділу Погода. 
      2. База пісень: містить повний список треків (${songAiKnowledge.length} шт), авторів, тексти пісень та візуальні ефекти (фільтри).

      ІНСТРУКЦІЯ:
      - Якщо запит стосується температури, вітру, УФ-індексу або роботи розділу погоди — шукай у базі FAQ.
      - Якщо запит стосується конкретної пісні, її тривалості, тексту або ефектів — шукай у Базі пісень.
      - Відповідай коротко, професійно та виключно українською мовою.

      КОНТЕКСТ FAQ: ${faqContext.substring(0, 2000)}
      КОНТЕКСТ ПІСЕНЬ: ${songsContext.substring(0, 15000)}

      ЗАПИТ КОРИСТУВАЧА: ${userText}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const botText = response.text();

      const finalHistory = [...newHistory, { text: botText, isBot: true }];
      setChatHistory(finalHistory);
      await saveSession(finalHistory);
    } catch (e) {
      if (e.name !== "AbortError") {
        const errHistory = [
          ...newHistory,
          {
            text: "Помилка зв'язку з інтелектом. Перевірте ключ.",
            isBot: true,
          },
        ];
        setChatHistory(errHistory);
      }
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleEditMessage = (index) => {
    setSearchQuery(chatHistory[index].text);
  };

  const renderTextWithLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  const renderAnswerBlocks = (item) => {
    if (
      item.content &&
      Array.isArray(item.content) &&
      item.content.length > 0
    ) {
      return item.content.map((block, index) => {
        if (block.type === "image") {
          const imgSrc = block.src || block.image;
          const altText = block.alt || item.q || "FAQ image";

          return (
            <div
              key={`image-${index}`}
              style={{ position: "relative", marginBottom: "10px" }}
            >
              <AnswerImage
                src={imgSrc}
                alt={altText}
                $isHovered={hoveredImage === imgSrc}
                $isPinned={isActionsPinned}
                onClick={() => setPreviewImage(imgSrc)}
                onMouseEnter={() => setHoveredImage(imgSrc)}
                onMouseLeave={() => setHoveredImage(null)}
              />
              <ImageActionsContainer
                $isHovered={hoveredImage === imgSrc}
                $isPinned={isActionsPinned}
                onMouseEnter={() => setHoveredImage(imgSrc)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <AnswerActionButton
                  onClick={togglePin}
                  title={
                    isActionsPinned ? "Відкріпити кнопки" : "Закріпити кнопки"
                  }
                >
                  {isActionsPinned ? "📌" : "📍"}
                </AnswerActionButton>
                <AnswerActionButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownloadImage(imgSrc);
                  }}
                >
                  ⇩ Скачати
                </AnswerActionButton>
                <AnswerActionButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrintImage(imgSrc);
                  }}
                >
                  🖨️ Друкувати
                </AnswerActionButton>
              </ImageActionsContainer>
            </div>
          );
        }

        if (block.type === "text") {
          const textValue = block.value || block.text || "";
          return (
            <div
              key={`text-${index}`}
              dangerouslySetInnerHTML={{
                __html: String(textValue).replace(/\n/g, "<br/>"),
              }}
            />
          );
        }

        return null;
      });
    }

    return (
      <>
        {item.image && (
          <>
            <ImageActionsContainer
              $isHovered={hoveredImage === item.image}
              $isPinned={isActionsPinned}
              onMouseEnter={() => setHoveredImage(item.image)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <AnswerActionButton
                onClick={togglePin}
                title={
                  isActionsPinned ? "Відкріпити кнопки" : "Закріпити кнопки"
                }
              >
                {isActionsPinned ? "📌" : "📍"}
              </AnswerActionButton>
              <AnswerActionButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownloadImage(item.image);
                }}
              >
                ⇩ Скачати
              </AnswerActionButton>
              <AnswerActionButton
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrintImage(item.image);
                }}
              >
                🖨️ Друкувати
              </AnswerActionButton>
            </ImageActionsContainer>
          </>
        )}
        <div
          dangerouslySetInnerHTML={{
            __html: (item.a || "").replace(/\n/g, "<br/>"),
          }}
        />
      </>
    );
  };

  const sortedFaqData = [...faqData]
    .map((item, originalIndex) => ({
      ...item,
      originalIndex,
      rating: ratings[originalIndex] || 0,
    }))
    .filter((item) => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        item.q?.toLowerCase().includes(query) ||
        item.a?.toLowerCase().includes(query)
      );
    })
    .sort((a, b) => b.rating - a.rating);

  return (
    <Overlay $isClosing={isClosing} onClick={handleClose}>
      <Content $isClosing={isClosing} onClick={(e) => e.stopPropagation()}>
        <Conten>
          <CloseBtn onClick={handleClose}>Зрозуміло!</CloseBtn>
          <h1
            style={{
              textAlign: "center",
              fontSize: "26px",
              color: "#222",
              marginTop: "-5px",
            }}
          >
            Навчання
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "13px",
              color: "#000",
              marginTop: "-8px",
            }}
          >
            Останнє оновлення: 28 липня 2026 року
          </p>
          <TabsContainer>
            <TabButton
              $active={activeTab === "faq"}
              onClick={() => setActiveTab("faq")}
              style={{
                borderBottomLeftRadius: "20px",
                borderTopLeftRadius: "20px",
                borderRight: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              Питання (FAQ)
            </TabButton>
            <TabButton
              $active={activeTab === "ai"}
              onClick={() => setActiveTab("ai")}
              style={{
                borderBottomRightRadius: "20px",
                borderTopRightRadius: "20px",
              }}
            >
              ШІ Асистент
            </TabButton>
          </TabsContainer>
        </Conten>
        <ScrollArea>
          {activeTab === "ai" && (
            <div>
              <ChatWrapper ref={scrollRef}>
                {chatHistory.map((m, i) => (
                  <Message key={i} $isUser={!m.isBot}>
                    {renderTextWithLinks(m.text)}
                    {!m.isBot &&
                      i === chatHistory.length - 1 &&
                      !isAiLoading && (
                        <EditBtn onClick={() => handleEditMessage(i)}>
                          редагувати
                        </EditBtn>
                      )}
                  </Message>
                ))}
                {isAiLoading && <Message $isUser={false}>Думаю...</Message>}
              </ChatWrapper>
              <InputRow>
                <SearchInput
                  type="text"
                  placeholder="Запитай ШІ або шукай у FAQ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAskAi()}
                />
                <ClearBtn onClick={handleClearHistory} title="Очистити чат">
                  <RiDeleteBack2Fill />
                </ClearBtn>
                {isAiLoading ? (
                  <StopBtn onClick={handleStopGeneration} title="Зупинити">
                    🛑
                  </StopBtn>
                ) : (
                  <AcceptBtn onClick={handleAskAi}>➤</AcceptBtn>
                )}
              </InputRow>
            </div>
          )}
          {activeTab === "faq" && (
            <>
              <SearchInput
                type="search"
                placeholder="Пошук питань..."
                aria-label="Пошук питань"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <AccordionWrapper style={{ marginTop: 0 }}>
                {sortedFaqData.length === 0 && (
                  <p style={{ textAlign: "center", color: "#555" }}>
                    Питань за цим запитом не знайдено.
                  </p>
                )}
                {sortedFaqData.map((item, displayIndex) => {
                const originalIndex = item.originalIndex;
                const rating = ratings[originalIndex] || 0;
                return (
                  <AccordionItem key={originalIndex} $index={displayIndex + 1}>
                    <Question
                      $rating={rating}
                      onClick={() => toggleAccordion(originalIndex)}
                    >
                      <QuestionContent>
                        <QuestionText>{item.q}</QuestionText>
                        <ArrowContainer>
                          <LikeButton
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLike(originalIndex, LIKE);
                            }}
                            title="Корисно"
                          >
                            {rating === LIKE ? "❤️" : "🤍"}
                          </LikeButton>
                          <LikeButton
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLike(originalIndex, DISLIKE);
                            }}
                            title="Не корисно"
                          >
                            {rating === DISLIKE ? (
                              <IoHeartDislikeSharp />
                            ) : (
                              <IoHeartDislikeSharp />
                            )}
                          </LikeButton>
                          <Arrow
                            $isOpen={activeIndexes.includes(originalIndex)}
                          >
                            ▼
                          </Arrow>
                        </ArrowContainer>
                      </QuestionContent>
                    </Question>
                    <Answer $isOpen={activeIndexes.includes(originalIndex)}>
                      <AnswerContent>
                        {item.image && (
                          <>
                            <AnswerImage
                              src={item.image}
                              alt={item.q}
                              $isHovered={hoveredImage === item.image}
                              $isPinned={isActionsPinned}
                              onClick={() => setPreviewImage(item.image)}
                              onMouseEnter={() => setHoveredImage(item.image)}
                              onMouseLeave={() => setHoveredImage(null)}
                            />
                            <ImageActionsContainer
                              $isHovered={hoveredImage === item.image}
                              $isPinned={isActionsPinned}
                              onMouseEnter={() => setHoveredImage(item.image)}
                              onMouseLeave={() => setHoveredImage(null)}
                            >
                              <AnswerActionButton
                                onClick={togglePin}
                                title={
                                  isActionsPinned
                                    ? "Відкріпити кнопки"
                                    : "Закріпити кнопки"
                                }
                              >
                                {isActionsPinned ? "📌" : "📍"}
                              </AnswerActionButton>
                              <AnswerActionButton
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDownloadImage(item.image);
                                }}
                              >
                                ⇩ Скачати
                              </AnswerActionButton>
                              <AnswerActionButton
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handlePrintImage(item.image);
                                }}
                              >
                                🖨️ Друкувати
                              </AnswerActionButton>
                            </ImageActionsContainer>
                          </>
                        )}
                        {renderAnswerBlocks(item)}
                      </AnswerContent>
                    </Answer>
                  </AccordionItem>
                );
                })}
              </AccordionWrapper>
            </>
          )}
        </ScrollArea>
      </Content>
      {previewImage && (
        <ImagePreviewOverlay onClick={() => setPreviewImage(null)}>
          <PreviewCloseBtn onClick={() => setPreviewImage(null)}>
            &times;
          </PreviewCloseBtn>
          <ImagePreviewActions>
            <ActionButton
              onClick={(e) => {
                e.stopPropagation();
                handleDownloadImage(previewImage);
              }}
            >
              ⇩ Скачати
            </ActionButton>
            <ActionButton
              onClick={(e) => {
                e.stopPropagation();
                handlePrintImage(previewImage);
              }}
            >
              🖨️ Друкувати
            </ActionButton>
          </ImagePreviewActions>
          <PreviewImage
            src={previewImage}
            alt="Прев'ю зображення"
            onClick={(e) => e.stopPropagation()}
          />
        </ImagePreviewOverlay>
      )}
    </Overlay>
  );
};
export default InfoModal;
