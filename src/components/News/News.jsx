import React, { useEffect, useState, useCallback, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import localforage from "localforage";
import rainbow from "../../photos/vip-images/stars.webp";
import NewsAiModal from "./NewsAiModal";
import InfoModal from "../Modals/UserSearchModal.jsx";
import { useTutorial } from "../DominoTutorial/TutorialContext.jsx";
import { MdReport } from "react-icons/md"; //Поскаржитися
import { MdOutlineReportOff } from "react-icons/md"; //Заглушити
import { TbStarsFilled } from "react-icons/tb"; // ШІ Виклад
import { hasBannedContent } from "../../utils/contentFilter";
import { auth, db, signInAnonymously } from "../../firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  collection,
  getDocs,
} from "firebase/firestore";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const Decoder = styled.div`
  z-index: 100;
  position: relative;
  backdrop-filter: blur(4px);
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  background: rgba(0,0,0,0.6);
`;

const SOURCES = [
  {
    url: "https://phys.org/rss-feed/biology-news/animals-news/",
    name: "Phys.org",
    flag: "🇬🇧",
    home: "https://phys.org",
  },
];

const NewsDiv = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const AihelpTitle = styled.div`
  font-size: 22px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${(props) => (props.$isDarkMode ? "white" : "#010101")};
  width: 100%;
  box-sizing: border-box;
`;
const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4px;
  box-sizing: border-box;
  overflow: hidden;
`;
const MobileCarousel = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 5px;
  overflow-x: auto;
  min-width: 0; 
  scroll-snap-type: x mandatory;
  padding: 10px 22px 10px;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 479px) {
    padding: 10px 18px 10px;
    justify-content: flex-start; 
  }
`;
const CarouselHint = styled.div`
  position: absolute;
  top: 50%;
  left: 5px;
  right: 5px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateY(-50%);
  box-sizing: border-box;

  @media (max-width: 1200px) {
    justify-content: center;
    gap: 75%;
  }
      @media (max-width: 980px) {
    gap: 55%;
  }
      @media (max-width: 767px) {
    gap: 40%;
  }
 @media (max-width: 567px) {
    gap: 20%;
  }
     @media (max-width: 425px) {
    gap: 20%;
  }
`;
const CarouselHintItem = styled.button`
  width: 40px;
  height: 40px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.75);
      font-size: 43px;
  border-radius: 50%;
  border: 2px solid rgba(255, 179, 108, 0.85);
  color: #ffb36c;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  transition: background 0.3s, transform 0.2s ease;
  z-index: 1001;
  opacity: 1 !important;
  padding-bottom: 5px;
  padding-left: 4px;
  visibility: visible !important;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.08);
  }

  &:active {
    transform: scale(0.92);
  }
`;
const CarouselSlide = styled.div`
  flex: 0 0 280px;
  width: 280px;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;

  @media (max-width: 479px) {flex: 0 0 calc(100vw - 48px);
    width: calc(100vw - 48px);
    min-width: calc(100vw - 48px);
    max-width: 320px;
  }

  @media (min-width: 480px) and (max-width: 899px) {
    flex: 0 0 calc(50% - 5px);
    width: calc(50% - 5px);
    min-width: calc(50% - 5px);
  }

  @media (min-width: 900px) {
    flex: 0 0 calc(33.333% - 7px);
    width: calc(33.333% - 7px);
    min-width: calc(33.333% - 7px);
  }
`;

const Card = styled.a`
  background: #1a1a1a;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#000000")};
  text-decoration: none;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  height: auto;
  min-height: auto;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }
`;
const NewsImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  display: block;
  z-index: 1;
`;

const SourceFlag = styled.span`
  position: absolute;
  top: 4px;
  left: 4px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 3px;
  border-radius: 5px;
  font-size: 12px;
  z-index: 5;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #ffb36c;
  }
  backdrop-filter: blur(4px);
`;

const NewBadge = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  background: #ddff00;
  color: #000;
  padding: 3px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;
  z-index: 6;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.5s ease;
`;

const CardActions = styled.div`
  position: absolute;
  top: 3px;
  right: 42px;
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 7;
`;

const CardAction = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
  width: 25px;
  min-width: 25px;
  height: 28px;
  overflow: hidden;
  background: ${(props) => props.$background};
  color: ${(props) => props.$color || "white"};
  border: none;
  padding: 2px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
  transition: width 0.5s ease, background 0.5s ease, transform 0.5s ease;

  svg {
    flex: 0 0 auto;
    font-size: 17px;
  }

  span {
    max-width: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-width 0.5s ease, opacity 0.5s ease;
  }

  &:hover,
  &:focus-visible {
    width: auto;
    transform: scale(1.05);

    span {
      max-width: 100px;
      opacity: 1;
    }
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }
`;

const AiSummaryBtn = styled(CardAction)`
  &:hover,
  &:focus-visible {
    background: #ffb36c;
  }
`;

const ReportBtn = styled(CardAction)`
  &:hover,
  &:focus-visible {
    background: #ff4d4d;
  }
`;

const MuteBtn = styled(CardAction)`
  &:hover,
  &:focus-visible {
    background: #666;
  }
`;

const BlockOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  color: white;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 20px;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background: #060606;
  color: #fefcfc;
  padding: 5px;
  border-radius: 7px;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  border: 1px solid #ffb36c;
  position: relative;
`;

const CloseButton = styled.button`
  background: #ffb36c;
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 5px 15px;
  cursor: pointer;
  float: right;
  font-weight: 600;
`;

const NewsCard = ({
  item,
  $isDarkMode,
  showImage,
  showTitle,
  showDescription,
  onAiSummaryClick,
  onReportClick,
  onMuteClick,
  onUnmuteClick,
}) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(item.isNew);

  useEffect(() => {
    if (!item.isNew) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(async () => {
            setIsVisible(false);
            try {
              const seenLinks =
                (await localforage.getItem("seen_news_links")) || [];
              if (!seenLinks.includes(item.link)) {
                await localforage.setItem("seen_news_links", [
                  ...seenLinks,
                  item.link,
                ]);
              }
            } catch (err) {}
          }, 60000);

          observer.unobserve(entry.target);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.5 },
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [item.isNew, item.link]);

  if (item.isBlocked) {
    return (
      <Card
        $isDarkMode={$isDarkMode}
        style={{ cursor: "not-allowed", position: "relative" }}
        as="div"
      >
        <BlockOverlay>
          <span style={{ fontSize: "40px", marginBottom: "10px" }}>🔒</span>
          <h4 style={{ margin: 0, fontSize: "14px", lineHeight: "1.4" }}>
            Дана новина була неправомірна, і ви не можете її переглянути.
          </h4>
        </BlockOverlay>
      </Card>
    );
  }

  if (item.isMuted) {
    return (
      <Card
        $isDarkMode={$isDarkMode}
        style={{ position: "relative", minHeight: "190px" }}
        as="div"
      >
        <BlockOverlay style={{ background: "rgba(128, 128, 128, 0.5)" }}>
          <span style={{ fontSize: "30px", marginBottom: "10px", background: "rgba(0,0,0,0.3)", padding: "5px 10px", borderRadius: "5px" }}>🔇</span>
          <h4 style={{ margin: 0, fontSize: "14px", lineHeight: "1.4", background: "rgba(0,0,0,0.3)", padding: "5px 10px", borderRadius: "5px" }}>
            Новину приховано.
          </h4>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (onUnmuteClick) onUnmuteClick(item);
            }}
            style={{
              marginTop: "10px",
              padding: "5px 15px",
              background: "#3f5959",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Розглушити
          </button>
        </BlockOverlay>
      </Card>
    );
  }

  return (
    <Card
      ref={cardRef}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      $isDarkMode={$isDarkMode}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          height: showImage ? "190px" : "auto",
          minHeight: "auto",
        }}
      >
        {isVisible && <NewBadge>Нове</NewBadge>}
        <SourceFlag
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(item.sourceHome, "_blank");
          }}
          aria-label={`Перейти на головну сторінку ${item.sourceName}`}
        >
          {item.sourceFlag} {item.sourceName}
        </SourceFlag>
        <CardActions aria-label="Дії з новиною">
          <AiSummaryBtn
            aria-label="Отримати ШІ виклад новини"
            $background="rgba(0, 248, 252, 0.9)"
            $color="black"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (onAiSummaryClick) onAiSummaryClick(item);
            }}
          >
            <TbStarsFilled aria-hidden="true" />
            <span>ШІ Виклад</span>
          </AiSummaryBtn>
          {item.sourceName !== "Phys.org" && (
            <ReportBtn
              aria-label="Поскаржитися на цю новину"
              $background="rgba(255, 77, 77, 0.9)"
              onClick={(e) => {
                if (onReportClick) onReportClick(item, e);
              }}
            >
              <MdReport aria-hidden="true" />
              <span>Поскаржитися</span>
            </ReportBtn>
          )}
          <MuteBtn
            aria-label="Заглушити новину"
            $background="rgba(128, 128, 128, 0.9)"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (onMuteClick) onMuteClick(item, e);
            }}
          >
            <MdOutlineReportOff aria-hidden="true" />
            <span>Заглушити</span>
          </MuteBtn>
        </CardActions>
        {showImage && (
          <NewsImg
            src={item.displayImage}
            alt=""
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = rainbow;
            }}
          />
        )}
        {(showTitle || showDescription) && (
          <CardContent $isDarkMode={$isDarkMode} $overlay={showImage}>
            {showTitle && (
              <h4
                style={{
                  margin: "0 0 8px 0",
                  fontSize: "16px",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  fontWeight: "700",
                      WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  lineHeight: "1.3",
                }}
              >
                {item.title}
              </h4>
            )}
            {showDescription && (
              <p
                style={{
                  fontSize: "13px",
                  opacity: 0.9,
                  margin: 0,
                  lineHeight: "1.4",
    display: "-webkit-box",
    WebkitLineClamp: 3, 
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
                }}
              >
                {item.description}
              </p>
            )}
          </CardContent>
        )}
      </div>
    </Card>
  );
};
const CardContent = styled.div`
  padding: 8px;
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 2;
  min-height: auto;
  flex-grow: 0;

  ${(props) =>
    props.$overlay
      ? `
    background: ${
         "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0, 0, 0, 0.83) 80%, transparent 100%)" };
    color: #ffffff;
    text-shadow: 0 1px 3px rgba(0,0,0,0.8);
    margin-top: auto;
  `
      : `
    color: ${props.$isDarkMode ? "#ffffff" : "#000000"};
  `}
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1px;
  margin-bottom: 3px;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  width: 320px;
  box-sizing: border-box;
  @media (min-width: 468px) {
    width: 100%;
    }
`;

const FilterBtn = styled.button`
  background: ${(props) => (props.$active ? "#5a3f27" : "rgb(26, 49, 56)")};
  color: #ffffff;
  border-radius: 5px;
  padding: 1px 5px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 600;
  &:hover {
    background: rgba(255, 179, 108, 0.3);
  }
  &:disabled {
    opacity: 0.5;
  }
`;
const ProgressBar = styled.div`
  width: 300px;
  height: 8px;
  background: ${(props) => (props.$isDarkMode ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.2)")};
  border: 1px solid
    ${(props) => (props.$isDarkMode ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)")};
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background: ${(props) => (props.$isError ? "#ff4d4d" : "#ffb36c")};
  width: ${(props) => props.$progress}%;
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
  box-shadow: 0 0 10px
    ${(props) => (props.$isError ? "rgba(255, 77, 77, 0.7)" : "rgba(255, 179, 108, 0.5)")};
`;

const FilteredNewsCounter = styled.p`
  color: rgb(255, 255, 255);
  background: #0000008b;
  border-radius: 10px;
  font-weight: 600;
  padding:7px;
  font-size: 13px;
  line-height: 1.4;
  text-align: center;
`;

const getLocalDateKey = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getSourceType = (url) => {
  if (!url) return "rss";
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.includes("youtube.com") || lowerUrl.includes("youtu.be")) return "youtube";
  if (lowerUrl.includes("t.me/") || lowerUrl.includes("telegram.org") || lowerUrl.startsWith("@")) return "telegram";
  if (lowerUrl.includes("telegra.ph/")) return "telegraph";
  if (lowerUrl.includes("facebook.com")) return "facebook";
  if (lowerUrl.includes("withhive.com")) return "hive";
  return "rss";
};

const getYoutubeThumbnail = (videoUrl) => {
  if (!videoUrl) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = videoUrl.match(regExp);
  if (match && match[2].length === 11) {
    return `https://i.ytimg.com/vi/${match[2]}/hqdefault.jpg`;
  }
  return null;
};

const fetchWithProxyFallback = async (url) => {
  try {
    const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
    if (!res.ok) throw new Error("AllOrigins error status: " + res.status);
    const data = await res.json();
    if (!data.contents) throw new Error("AllOrigins returned empty contents");
    return data.contents;
  } catch (e) {
    console.warn("AllOrigins failed, trying corsproxy.io fallback...", e);
    const res = await fetch(`https://corsproxy.io/?${encodeURIComponent(url)}`);
    if (!res.ok) throw new Error("corsproxy.io error status: " + res.status);
    const text = await res.text();
    return text;
  }
};

const resolveYoutubeChannelId = async (youtubeUrl) => {
  const directMatch = youtubeUrl.match(/(UC[a-zA-Z0-9_-]{22})/);
  if (directMatch) return directMatch[1];

  try {
    const html = await fetchWithProxyFallback(youtubeUrl);
    const match = html.match(/channelId":"(UC[a-zA-Z0-9_-]{22})"/i) || 
                  html.match(/youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})/i) ||
                  html.match(/href="https:\/\/www\.youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})"/i) ||
                  html.match(/"browseId":"(UC[a-zA-Z0-9_-]{22})"/i);
    return match ? match[1] : null;
  } catch (e) {
    console.error("Error resolving YouTube channel ID:", e);
    return null;
  }
};

const cleanTelegramText = (html) => {
  if (!html) return "";
  let text = html.replace(/<br\s*\/?>/gi, "\n");
  text = text.replace(/<[^>]*>?/gm, "");
  const txt = document.createElement("textarea");
  txt.innerHTML = text;
  return txt.value.trim();
};

const fetchTelegramFeed = async (source) => {
  let channelName = "";
  const url = source.url;
  
  if (url.startsWith("@")) {
    channelName = url.substring(1);
  } else {
    const parts = url.split("/");
    channelName = parts[parts.length - 1] || parts[parts.length - 2];
  }
  
  if (channelName.startsWith("+") || url.includes("joinchat")) {
    try {
      const html = await fetchWithProxyFallback(url);
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const title = doc.querySelector(".tgme_page_title")?.textContent?.trim() || "Приватний Telegram";
      const desc = doc.querySelector(".tgme_page_description")?.textContent?.trim() || "Приватний канал або група.";
      const avatarEl = doc.querySelector(".tgme_page_photo_image");
      const avatar = avatarEl ? avatarEl.getAttribute("src") : "";
      
      return {
        status: "ok",
        items: [{
          title: title,
          description: `${desc}\n\nНадіслати контент / Приєднатися:\n${url}`,
          link: url,
          pubDate: new Date().toISOString(),
          thumbnail: avatar || "",
          displayImage: avatar || rainbow,
          sourceName: source.name,
          sourceFlag: "🔒",
          sourceHome: url,
          sourceUrl: url,
        }]
      };
    } catch (e) {
      return {
        status: "ok",
        items: [{
          title: "Приватний Telegram Канал",
          description: `Це приватний Telegram канал. Приєднайтеся за посиланням для перегляду:\n${url}`,
          link: url,
          pubDate: new Date().toISOString(),
          thumbnail: "",
          displayImage: rainbow,
          sourceName: source.name,
          sourceFlag: "🔒",
          sourceHome: url,
          sourceUrl: url,
        }]
      };
    }
  }

  try {
    const fetchUrl = `https://t.me/s/${channelName}`;
    const html = await fetchWithProxyFallback(fetchUrl);
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    
    const channelTitle = doc.querySelector(".tgme_channel_info_header_title span")?.textContent || channelName;
    const avatarEl = doc.querySelector(".tgme_page_photo_image img") || doc.querySelector(".tgme_page_photo_image");
    const channelImage = avatarEl ? (avatarEl.getAttribute("src") || "") : "";
    const home = `https://t.me/${channelName}`;
    
    const messages = doc.querySelectorAll(".tgme_widget_message");
    const items = [];
    messages.forEach(msg => {
      const textEl = msg.querySelector(".tgme_widget_message_text");
      const text = textEl ? textEl.innerHTML : "";
      
      const title = textEl ? cleanTelegramText(text).substring(0, 100) : "Повідомлення";
      const linkEl = msg.querySelector(".tgme_widget_message_date");
      const link = linkEl ? linkEl.getAttribute("href") : home;
      
      const timeEl = msg.querySelector("time");
      const date = timeEl ? timeEl.getAttribute("datetime") : new Date().toISOString();
      
      const photoEl = msg.querySelector(".tgme_widget_message_photo_wrap");
      let image = "";
      if (photoEl) {
        const style = photoEl.getAttribute("style");
        const match = style && style.match(/url\(['"]?([^'"]+)['"]?\)/);
        if (match) image = match[1];
      }
      
      items.push({
        title: title || "Новий допис",
        description: text ? cleanTelegramText(text) : "Перегляньте допис у Telegram.",
        link: link,
        pubDate: date,
        thumbnail: image || channelImage || "",
        displayImage: image || channelImage || rainbow,
        sourceName: channelTitle,
        sourceFlag: "📢",
        sourceHome: home,
        sourceUrl: url,
      });
    });
    
    return {
      status: "ok",
      items: items.reverse()
    };
  } catch (e) {
    console.error("Telegram scraping failed:", e);
    return null;
  }
};

const fetchTelegraphFeed = async (source) => {
  try {
    const html = await fetchWithProxyFallback(source.url);
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    
    const title = doc.querySelector("header h1")?.textContent?.trim() || doc.querySelector("title")?.textContent || "Telegraph стаття";
    const author = doc.querySelector("header address a")?.textContent || "Telegraph";
    
    const imgEl = doc.querySelector("article img");
    const image = imgEl ? imgEl.getAttribute("src") : "";
    const absoluteImage = image ? (image.startsWith("http") ? image : `https://telegra.ph${image}`) : "";
    
    const paragraphs = Array.from(doc.querySelectorAll("article p")).map(p => p.textContent).join("\n\n");
    const cleanDesc = paragraphs || "Читати повну статтю на Telegraph.";
    
    return {
      status: "ok",
      items: [{
        title: title,
        description: cleanDesc.substring(0, 300) + (cleanDesc.length > 300 ? "..." : ""),
        link: source.url,
        pubDate: new Date().toISOString(),
        thumbnail: absoluteImage || "",
        displayImage: absoluteImage || rainbow,
        sourceName: author,
        sourceFlag: "📝",
        sourceHome: "https://telegra.ph",
        sourceUrl: source.url,
      }]
    };
  } catch (e) {
    console.error("Telegraph load failed:", e);
    return null;
  }
};

const fetchFacebookFeed = async (source) => {
  try {
    const html = await fetchWithProxyFallback(source.url);
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    
    const title = doc.querySelector('meta[property="og:title"]')?.getAttribute("content") || source.name;
    const desc = doc.querySelector('meta[property="og:description"]')?.getAttribute("content") || "Переглянути сторінку у Facebook.";
    const image = doc.querySelector('meta[property="og:image"]')?.getAttribute("content") || "";
    
    return {
      status: "ok",
      items: [{
        title: title,
        description: desc,
        link: source.url,
        pubDate: new Date().toISOString(),
        thumbnail: image || "",
        displayImage: image || rainbow,
        sourceName: source.name,
        sourceFlag: "📘",
        sourceHome: source.url,
        sourceUrl: source.url,
      }]
    };
  } catch (e) {
    console.error("Facebook OG parsing failed, trying simple card:", e);
    return {
      status: "ok",
      items: [{
        title: source.name,
        description: "Перегляньте оновлення сторінки у Facebook за цим посиланням.",
        link: source.url,
        pubDate: new Date().toISOString(),
        thumbnail: "",
        displayImage: rainbow,
        sourceName: source.name,
        sourceFlag: "📘",
        sourceHome: source.url,
        sourceUrl: source.url,
      }]
    };
  }
};

const getHiveDetails = (url) => {
  const match = url.match(/withhive\.com\/([a-zA-Z0-9_-]+)(?:\/([a-z]{2}))?\/board\/([0-9]+)/i);
  if (match) {
    return {
      gameCode: match[1],
      lang: match[2] || "en",
      boardIdx: match[3]
    };
  }
  return null;
};

const fetchHiveFeed = async (source) => {
  const url = source.url;
  const postMatch = url.match(/board\/(\d+)\/(\d+)/);
  
  if (postMatch) {
    try {
      const html = await fetchWithProxyFallback(url);
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      
      const title = doc.querySelector('meta[property="og:title"]')?.getAttribute("content") || 
                    doc.querySelector(".title_wrap .title")?.textContent?.trim() || "Допис у Hive";
      const desc = doc.querySelector('meta[property="og:description"]')?.getAttribute("content") || 
                   doc.querySelector(".post_cont")?.textContent?.trim().substring(0, 300) || "Деталі допису у спільноті Hive.";
      const image = doc.querySelector('meta[property="og:image"]')?.getAttribute("content") || 
                    doc.querySelector(".post_cont img")?.getAttribute("src") || "";
      
      return {
        status: "ok",
        items: [{
          title: title,
          description: desc.length >= 300 ? desc.substring(0, 300) + "..." : desc,
          link: url,
          pubDate: new Date().toISOString(),
          thumbnail: image || "",
          displayImage: image || rainbow,
          sourceName: source.name,
          sourceFlag: "🐝",
          sourceHome: url.split("/board/")[0],
          sourceUrl: url,
        }]
      };
    } catch (e) {
      console.error("Failed to parse single Hive post:", e);
    }
  }

  const details = getHiveDetails(url);
  if (!details) return null;
  const { gameCode, lang, boardIdx } = details;
  
  try {
    const listApiUrl = `https://corsproxy.io/?https://community.withhive.com/${gameCode}/board/list/getBoardList`;
    const response = await fetch(listApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: new URLSearchParams({
        page: 1,
        board_idx: boardIdx,
        board_type: 1,
        board_comment: 1,
        boardtype1_preview_image: "1",
        is_mobile: 1,
        select_type: 1,
        view_type: "list"
      })
    });
    
    const data = await response.json();
    if (!data.list) throw new Error("No dynamic list found");
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(data.list, "text/html");
    const listItems = doc.querySelectorAll("li");
    const items = [];
    
    listItems.forEach(li => {
      const linkEl = li.querySelector("a");
      if (!linkEl) return;
      
      const link = linkEl.getAttribute("href") || "";
      const absoluteLink = link.startsWith("http") ? link : `https://community.withhive.com${link}`;
      
      const titleEl = li.querySelector(".title, .subject, p, h3, h4");
      const title = titleEl ? titleEl.textContent.trim() : "Hive Post";
      
      const imgEl = li.querySelector("img");
      let image = "";
      if (imgEl) {
        image = imgEl.getAttribute("src") || imgEl.getAttribute("data-src") || "";
      } else {
        const thumbEl = li.querySelector(".thumb");
        if (thumbEl) {
          const style = thumbEl.getAttribute("style");
          const match = style && style.match(/url\(['"]?([^'"]+)['"]?\)/);
          if (match) image = match[1];
        }
      }
      
      const dateEl = li.querySelector(".t_date, .date, .time");
      const date = dateEl ? dateEl.textContent.trim() : new Date().toISOString();
      const descEl = li.querySelector(".desc, .text, .wordcut");
      const description = descEl ? descEl.textContent.trim() : "";
      
      items.push({
        title: title,
        description: description || "Перегляньте допис у спільноті Hive.",
        link: absoluteLink,
        pubDate: date,
        thumbnail: image || "",
        displayImage: image || rainbow,
        sourceName: source.name,
        sourceFlag: "🐝",
        sourceHome: `https://community.withhive.com/${gameCode}`,
        sourceUrl: url,
      });
    });
    
    return {
      status: "ok",
      items: items
    };
  } catch (e) {
    console.warn("Hive dynamic board list fetch failed, falling back to page metadata...");
    try {
      const html = await fetchWithProxyFallback(url);
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      
      const title = doc.querySelector('meta[property="og:title"]')?.getAttribute("content") || 
                    doc.querySelector(".board_cmm .title")?.textContent?.trim() || `Hive Board ${boardIdx}`;
      const desc = doc.querySelector('meta[property="og:description"]')?.getAttribute("content") || 
                   "Перегляньте дописи у спільноті Hive.";
      const image = doc.querySelector('meta[property="og:image"]')?.getAttribute("content") || "";
      
      return {
        status: "ok",
        items: [{
          title: title,
          description: desc,
          link: url,
          pubDate: new Date().toISOString(),
          thumbnail: image || "",
          displayImage: image || rainbow,
          sourceName: source.name,
          sourceFlag: "🐝",
          sourceHome: `https://community.withhive.com/${gameCode}`,
          sourceUrl: url,
        }]
      };
    } catch (err) {
      return null;
    }
  }
};

const fetchCustomSource = async (source) => {
  const type = getSourceType(source.url);
  if (type === "telegram") {
    return await fetchTelegramFeed(source);
  } else if (type === "telegraph") {
    return await fetchTelegraphFeed(source);
  } else if (type === "hive") {
    return await fetchHiveFeed(source);
  } else if (type === "facebook") {
    return await fetchFacebookFeed(source);
  }
  return null;
};

const News = ({ isDarkMode, isStickyBgMode, user }) => {
  const { registerRef } = useTutorial?.() || { registerRef: () => {} };
  const $isDarkMode = isDarkMode;
  const [items, setItems] = useState([]);
  const [filteredNewsCount, setFilteredNewsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [filterSources, setFilterSources] = useState(["all"]);
  const handleToggleFilter = (sourceName) => {
    if (sourceName === "all") {
      setFilterSources(["all"]);
      return;
    }
    
    let newFilters = [...filterSources].filter(f => f !== "all");
    if (newFilters.includes(sourceName)) {
      newFilters = newFilters.filter(f => f !== sourceName);
    } else {
      newFilters.push(sourceName);
    }
    
    if (newFilters.length === 0) {
      newFilters = ["all"];
    }
    setFilterSources(newFilters);
  };
  const [lastUpdated, setLastUpdated] = useState(null);
  const [cooldown, setCooldown] = useState(0);
  const translateText = async (text) => {
    if (!text || text.length < 3) return text;
    try {
      const res = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=uk&dt=t&q=${encodeURIComponent(text)}`,
      );
      if (!isMounted.current) return text; // Тепер isMounted доступний!
      const data = await res.json();
      return data[0].map((s) => s[0]).join("");
    } catch {
      return text;
    }
  };
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [showCarouselHint, setShowCarouselHint] = useState(false);

  const [customSources, setCustomSources] = useState([]);
  const [newUrl, setNewUrl] = useState("");
  const [isAddingSource, setIsAddingSource] = useState(false);
  //blockedNewsUrls
  const [, setBlockedNewsUrls] = useState([]);
  const [blockedSources, setBlockedSources] = useState([]);
  const [showBlacklist, setShowBlacklist] = useState(false);
  const [mutedNewsUrls, setMutedNewsUrls] = useState([]);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // 1. Стан розмонтування для Memory Leak Protection
  const isMounted = useRef(true);
  const newsSectionRef = useRef(null);

  useEffect(() => {
    isMounted.current = true;
    const loadCustomSources = async () => {
      try {
        const saved = await localforage.getItem("custom_news_sources");
        if (saved) setCustomSources(saved);
      } catch (err) {}
    };
    loadCustomSources();
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const loadFilteredNewsCount = async () => {
      try {
        const stats = await localforage.getItem("filtered_news_stats");
        if (
          stats?.date === getLocalDateKey() &&
          Array.isArray(stats.links) &&
          isMounted.current
        ) {
          setFilteredNewsCount(stats.links.length);
        }
      } catch (err) {}
    };

    loadFilteredNewsCount();
  }, []);

  useEffect(() => {
    const initMutedNews = async () => {
      if (user?.syncMutedNews && user?.mutedNews) {
        setMutedNewsUrls(user.mutedNews);
      } else {
        try {
          const localMuted =
            (await localforage.getItem("muted_news_urls")) || [];
          setMutedNewsUrls(localMuted);
        } catch (err) {}
      }
    };
    initMutedNews();
  }, [user?.syncMutedNews, user?.mutedNews]);

  useEffect(() => {
    if (user?.newsAutoScroll !== true) return;

    const timer = window.setTimeout(() => {
      newsSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);

    return () => window.clearTimeout(timer);
  }, [user?.newsAutoScroll]);
  useEffect(() => {
    const triggerHint = () => {
      setShowCarouselHint(true);
      setTimeout(() => setShowCarouselHint(false), 1500); // ховаємо через 3.5 сек
    };
    const initialTimer = setTimeout(triggerHint, 2000);
    const interval = setInterval(triggerHint, 7000);
    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const getData = useCallback(async (showLoader = false) => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (showLoader && isMounted.current) {
      setLoading(true);
      setLoadProgress(5);
      setHasError(false);
    }
    try {
      let allItems = [];
      const savedCustom =
        (await localforage.getItem("custom_news_sources")) || [];
      const allSources = [...SOURCES, ...savedCustom];

      // Отримуємо списки заблокованих
      let bNews = [];
      let bSourcesList = [];
      try {
        const newsSnapshot = await getDocs(collection(db, "news_reports"));
        const rssSnapshot = await getDocs(collection(db, "rss_reports"));
        const now = Date.now();
        const oneDay = 24 * 60 * 60 * 1000;

        newsSnapshot.forEach((docSnap) => {
          if (
            (docSnap.data().reports || []).filter((ts) => {
              const time = typeof ts === "object" ? ts.timestamp : ts;
              return now - time < oneDay;
            }).length >= 10
          )
            bNews.push(docSnap.id);
        });

        const blockedSourcesArr = [];
        rssSnapshot.forEach((docSnap) => {
          const data = docSnap.data();
          if (
            (data.reports || []).filter((ts) => {
              const time = typeof ts === "object" ? ts.timestamp : ts;
              return now - time < oneDay;
            }).length >= 20
          ) {
            blockedSourcesArr.push({
              id: docSnap.id,
              url: decodeURIComponent(docSnap.id),
              name: data.name || "Джерело",
            });
            bSourcesList.push(decodeURIComponent(docSnap.id));
          }
        });

        if (isMounted.current) {
          setBlockedNewsUrls(bNews);
          setBlockedSources(blockedSourcesArr);
        }
      } catch (e) {}

      for (const source of allSources) {
        if (bSourcesList.includes(source.url)) continue;
        try {
          const type = getSourceType(source.url);
          if (type !== "rss" && type !== "youtube") {
            const customData = await fetchCustomSource(source);
            if (customData && customData.items && customData.items.length > 0) {
              allItems = [...allItems, ...customData.items];
            }
          } else {
            const res = await fetch(
              `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(source.url)}`,
              { signal },
            );
            const data = await res.json();
            if (data.status === "ok" && data.items.length > 0) {
              const itemsWithSource = data.items.map((item) => {
                const ytThumb = getYoutubeThumbnail(item.link);
                return {
                  ...item,
                  thumbnail: ytThumb || item.thumbnail || "",
                  displayImage: ytThumb || item.thumbnail || rainbow,
                  sourceName: source.name,
                  sourceFlag: source.flag,
                  sourceHome: source.home,
                  sourceUrl: source.url,
                };
              });
              allItems = [...allItems, ...itemsWithSource];
            }
          }
        } catch (e) {
          continue;
        }
      }
      if (allItems.length === 0) {
        if (isMounted.current) {
          setHasError(true);
          setLoadProgress(100);
          setLoading(false);
        }
        return;
      }
      if (showLoader && isMounted.current) setLoadProgress(25);

      allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

      const clean = allItems.filter((i) => {
        const content = i.title + " " + (i.description || "");
        return !hasBannedContent(content);
      });

      const filteredNews = allItems.filter((i) => !clean.includes(i));
      const filteredNewsLinks = filteredNews.map(
        (item) => item.link || `${item.sourceUrl}:${item.title}`,
      );
      const today = getLocalDateKey();
      const savedStats = await localforage.getItem("filtered_news_stats");
      const existingLinks =
        savedStats?.date === today && Array.isArray(savedStats.links)
          ? savedStats.links
          : [];
      const uniqueLinks = [...new Set([...existingLinks, ...filteredNewsLinks])];
      await localforage.setItem("filtered_news_stats", {
        date: today,
        links: uniqueLinks,
      });
      if (isMounted.current) setFilteredNewsCount(uniqueLinks.length);

      // Збільшуємо кількість новин до 15
      const limited = clean.slice(0, 15);
      const results = new Array(limited.length);
      const toTranslateIndices = [];
      const stringsToTranslate = [];

      // 1. Перевіряємо кеш та збираємо тексти для пакетного перекладу
      const seenLinks = (await localforage.getItem("seen_news_links")) || [];

      for (let i = 0; i < limited.length; i++) {
        const item = limited[i];
        const cacheKey = `news_trans_${item.link}`;
        const cached = await localforage.getItem(cacheKey);
        const isNew = !seenLinks.includes(item.link);

        if (cached) {
          results[i] = {
            ...cached,
            sourceName: item.sourceName,
            sourceFlag: item.sourceFlag,
            sourceHome: item.sourceHome,
            sourceUrl: item.sourceUrl,
            isNew,
            isBlocked: bNews.includes(encodeURIComponent(item.link)),
          };
        } else {
          const cleanDesc = (item.description || "")
            .replace(/<[^>]*>?/gm, "")
            .trim()
            .substring(0, 170);

          toTranslateIndices.push(i);
          stringsToTranslate.push(item.title);
          stringsToTranslate.push(cleanDesc);
        }
      }

      // 2. Пакетний переклад з безпечним роздільником ___ та перевіркою довжини
      if (stringsToTranslate.length > 0) {
        if (showLoader && isMounted.current) setLoadProgress(40);

        let currentBatchStrings = [];
        let currentBatchIndices = [];
        let currentLen = 0;
        const batches = [];

        for (let i = 0; i < toTranslateIndices.length; i++) {
          const title = stringsToTranslate[i * 2];
          const desc = stringsToTranslate[i * 2 + 1];
          const pairLen = title.length + desc.length + 10; // Довжина тексту + роздільники

          if (currentLen + pairLen > 4500 && currentBatchStrings.length > 0) {
            batches.push({
              strings: currentBatchStrings,
              indices: currentBatchIndices,
            });
            currentBatchStrings = [];
            currentBatchIndices = [];
            currentLen = 0;
          }
          currentBatchStrings.push(title, desc);
          currentBatchIndices.push(toTranslateIndices[i]);
          currentLen += pairLen;
        }
        if (currentBatchStrings.length > 0) {
          batches.push({
            strings: currentBatchStrings,
            indices: currentBatchIndices,
          });
        }
        for (const batch of batches) {
          const combinedText = batch.strings.join(" ___ ");
          const translatedCombined = await translateText(combinedText);
          const splitResults = translatedCombined.split(/\s*___\s*/);
          for (let j = 0; j < batch.indices.length; j++) {
            const idx = batch.indices[j];
            const item = limited[idx];
            const bestImg =
              (item.enclosure && item.enclosure.link) ||
              item.thumbnail ||
              rainbow;

            const translatedItem = {
              title: splitResults[j * 2]?.trim() || item.title,
              description: (splitResults[j * 2 + 1]?.trim() || "") + "...",
              link: item.link,
              displayImage: bestImg,
              sourceName: item.sourceName,
              sourceFlag: item.sourceFlag,
              sourceHome: item.sourceHome,
              sourceUrl: item.sourceUrl,
              isNew: !seenLinks.includes(item.link),
              isBlocked: bNews.includes(encodeURIComponent(item.link)),
            };

            await localforage.setItem(
              `news_trans_${item.link}`,
              translatedItem,
            );
            results[idx] = translatedItem;
          }
        }
      }

      if (showLoader && isMounted.current) setLoadProgress(100);
      const allKeys = await localforage.keys();
      const newsCacheKeys = allKeys.filter((k) => k.startsWith("news_trans_"));
      const currentActiveKeys = limited.map((i) => `news_trans_${i.link}`);

      for (const key of newsCacheKeys) {
        if (!currentActiveKeys.includes(key)) {
          await localforage.removeItem(key);
        }
      }

      if (isMounted.current) {
        setItems(results);
        setLastUpdated(new Date());
      }
    } catch (e) {
      if (e.name === "AbortError" || e.message?.includes("aborted")) {
        console.log("Запит було скасовано");
        return;
      }
      console.error("Справжня помилка завантаження:", e);
      if (isMounted.current) {
        setHasError(true);
        setLoadProgress(100);
        if (showLoader) {
          setLoading(true);
          await new Promise((resolve) => setTimeout(resolve, 2500));
        }
      }
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  }, []);
  const filteredItems = items.filter((item) => {
    return filterSources.includes("all") || filterSources.includes(item.sourceName);
  });

  const displayedItems = filteredItems
    .slice(0, 15)
    .map((item) => ({ ...item, isMuted: mutedNewsUrls.includes(item.link) }));
  const infiniteItems =
    displayedItems.length > 0
      ? [...displayedItems, ...displayedItems, ...displayedItems]
      : [];
  const carouselRef = useRef(null);
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const firstSlide = container.querySelector("[data-news-slide]");
    const slideWidth = firstSlide?.getBoundingClientRect().width || 280;
    const gap = Number.parseFloat(getComputedStyle(container).gap) || 5;
    const scrollAmount = slideWidth + gap;

    isProgrammaticScrollRef.current = true;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 600);
  };

  const handleScroll = () => {
    if (!carouselRef.current || displayedItems.length === 0) return;
    if (isProgrammaticScrollRef.current) return;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const container = carouselRef.current;
      if (!container) return;

      const oneSetWidth = container.scrollWidth / 3;
      const threshold = 12;

      const originalSnap = container.style.scrollSnapType;

      if (container.scrollLeft <= threshold) {
        isProgrammaticScrollRef.current = true;
        container.style.scrollSnapType = "none";
        container.scrollLeft += oneSetWidth;
        requestAnimationFrame(() => {
          container.style.scrollSnapType = originalSnap;
          isProgrammaticScrollRef.current = false;
        });
      } else if (container.scrollLeft >= oneSetWidth * 2 - threshold) {
        isProgrammaticScrollRef.current = true;
        container.style.scrollSnapType = "none";
        container.scrollLeft -= oneSetWidth;
        requestAnimationFrame(() => {
          container.style.scrollSnapType = originalSnap;
          isProgrammaticScrollRef.current = false;
        });
      }
    }, 150);
  };

  useEffect(() => {
    if (carouselRef.current && displayedItems.length > 0) {
      const oneSetWidth = carouselRef.current.scrollWidth / 3;
      carouselRef.current.scrollLeft = oneSetWidth;
    }
  }, [displayedItems.length, filterSources]);
  useEffect(() => {
    const init = async () => {
      try {
        const endTime = await localforage.getItem("news_refresh_cooldown_end");
        if (endTime) {
          const remaining = Math.ceil((endTime - Date.now()) / 1000);
          if (remaining > 0) setCooldown(remaining);
        }
      } catch (err) {}
      // Перший запуск із показом лоадера
      getData(true);
    };

    init();
    const interval = setInterval(() => getData(false), 60 * 60 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      localforage.removeItem("news_refresh_cooldown_end");
    }
  }, [cooldown]);
  const handleAddSource = async () => {
    let inputUrl = newUrl.trim();
    if (!inputUrl) return;
    
    if (customSources.length >= 5) {
      alert("Ви досягли ліміту! Можна додати не більше 5 власних джерел.");
      return;
    }

    try {
      let resolvedUrl = inputUrl;
      let name = "";
      let flag = "🌐";
      let home = "";
      
      if (resolvedUrl.startsWith("@")) {
        resolvedUrl = `https://t.me/${resolvedUrl.slice(1)}`;
      }
      
      if (!resolvedUrl.startsWith("http://") && !resolvedUrl.startsWith("https://")) {
        if (/^[a-zA-Z0-9_]+$/.test(resolvedUrl)) {
          resolvedUrl = `https://t.me/${resolvedUrl}`;
        } else {
          resolvedUrl = `https://${resolvedUrl}`;
        }
      }
      
      const urlObj = new URL(resolvedUrl);
      const domain = urlObj.hostname.replace("www.", "");
      name = domain;
      home = urlObj.origin;
      
      const type = getSourceType(resolvedUrl);
      
      if (type === "youtube") {
        alert("Здійснюється пошук ID YouTube каналу...");
        const channelId = await resolveYoutubeChannelId(resolvedUrl);
        if (channelId) {
          resolvedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
          name = `YouTube: ${domain}`;
          flag = "🔴";
        } else {
          alert("Не вдалося знайти ID YouTube каналу. Стрічка не буде додана.");
          return;
        }
      } else if (type === "telegram") {
        const parts = resolvedUrl.split("/");
        const channelName = parts[parts.length - 1] || parts[parts.length - 2];
        name = `Telegram: ${channelName}`;
        flag = resolvedUrl.includes("+") || resolvedUrl.includes("joinchat") ? "🔒" : "📢";
        home = resolvedUrl;
      } else if (type === "telegraph") {
        name = `Telegraph`;
        flag = "📝";
        home = "https://telegra.ph";
      } else if (type === "facebook") {
        const parts = resolvedUrl.split("/");
        const pageName = parts[parts.length - 1] || parts[parts.length - 2];
        resolvedUrl = `https://www.facebook.com/${pageName}`;
        name = `Facebook: ${pageName}`;
        flag = "📘";
        home = resolvedUrl;
      } else if (type === "hive") {
        const match = resolvedUrl.match(/withhive\.com\/([a-zA-Z0-9_-]+)/);
        const game = match ? match[1] : "Hive";
        name = `Hive: ${game}`;
        flag = "🐝";
        home = `https://community.withhive.com/${game}`;
      } else {
        name = domain;
        flag = "🌐";
      }
      
      const newSource = {
        url: resolvedUrl,
        name: name,
        flag: flag,
        home: home,
        type: type
      };

      const saved = (await localforage.getItem("custom_news_sources")) || [];
      if (!saved.find((s) => s.url === resolvedUrl)) {
        if (saved.length >= 5) {
          alert("Ви досягли ліміту! Можна додати не більше 5 власних джерел.");
          return;
        }
        const updated = [...saved, newSource];
        await localforage.setItem("custom_news_sources", updated);
        setCustomSources(updated);
        setNewUrl("");
        setIsAddingSource(false);
        getData(true);
      } else {
        alert("Це джерело вже додано.");
      }
    } catch (e) {
      console.error(e);
      alert(
        "Невірний формат URL. Введіть правильне посилання (наприклад, t.me/channel_name, youtube.com/@handle або rss-link)",
      );
    }
  };

  const handleReport = async (item, e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      alert("Тільки авторизовані користувачі можуть залишати скарги.");
      return;
    }

    if (
      !window.confirm(
        "Ви дійсно хочете поскаржитися на цю новину? (Якщо скарг буде багато, вона буде заблокована)",
      )
    )
      return;

    try {
      const firebaseUser =
        auth.currentUser || (await signInAnonymously(auth)).user;
      const reportUid = user.uid || firebaseUser.uid;
      const newsId = encodeURIComponent(item.link);
      const sourceId = encodeURIComponent(item.sourceUrl);
      const now = Date.now();
      const newReport = { uid: reportUid, timestamp: now };

      const newsRef = doc(db, "news_reports", newsId);
      const newsDoc = await getDoc(newsRef);
      if (newsDoc.exists()) {
        const reports = newsDoc.data().reports || [];
        const userReportedRecently = reports.some(
          (r) => r.uid === reportUid && now - r.timestamp < 24 * 60 * 60 * 1000,
        );
        if (userReportedRecently) {
          alert("Ви вже скаржилися на цю новину сьогодні.");
          return;
        }
        await updateDoc(newsRef, { reports: arrayUnion(newReport) });
      } else {
        await setDoc(newsRef, { reports: [newReport] });
      }

      const rssRef = doc(db, "rss_reports", sourceId);
      const rssDoc = await getDoc(rssRef);
      if (rssDoc.exists()) {
        const reports = rssDoc.data().reports || [];
        const userReportedRecently = reports.some(
          (r) => r.uid === reportUid && now - r.timestamp < 24 * 60 * 60 * 1000,
        );
        if (!userReportedRecently) {
          await updateDoc(rssRef, { reports: arrayUnion(newReport) });
        }
      } else {
        await setDoc(rssRef, { reports: [newReport], name: item.sourceName });
      }

      alert("Скаргу прийнято. Дякуємо!");
      getData(true);
    } catch (err) {
      console.warn("Помилка відправки скарги:", err);
      alert("Помилка відправки скарги.");
    }
  };

  const handleMute = async (item, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const newMuted = [...mutedNewsUrls, item.link];
    setMutedNewsUrls(newMuted);

    if (user?.syncMutedNews && user?.uid) {
      try {
        await updateDoc(doc(db, "users", user.uid), { mutedNews: newMuted });
      } catch (err) {
        console.warn("Помилка збереження заглушеної новини в Firebase", err);
      }
    } else {
      try {
        await localforage.setItem("muted_news_urls", newMuted);
      } catch (err) {}
    }
  };

  const handleUnmute = async (item) => {
    const newMuted = mutedNewsUrls.filter((link) => link !== item.link);
    setMutedNewsUrls(newMuted);

    if (user?.syncMutedNews && user?.uid) {
      try {
        await updateDoc(doc(db, "users", user.uid), { mutedNews: newMuted });
      } catch (err) {
        console.warn("Помилка розглушення новини в Firebase", err);
      }
    } else {
      try {
        await localforage.setItem("muted_news_urls", newMuted);
      } catch (err) {}
    }
  };

  const handleRemoveSource = async (urlToRemove) => {
    if (!window.confirm("Видалити це джерело новин?")) return;
    try {
      const saved = (await localforage.getItem("custom_news_sources")) || [];
      const updated = saved.filter((s) => s.url !== urlToRemove);
      await localforage.setItem("custom_news_sources", updated);
      setCustomSources(updated);
      const removedName = saved.find((s) => s.url === urlToRemove)?.name;
      if (removedName && filterSources.includes(removedName)) {
        setFilterSources(["all"]);
      }
      getData(true);
    } catch (err) {
      console.error("Localforage error:", err);
      alert("Помилка видалення джерела.");
    }
  };
  const layout = user?.newsLayout || [];
  const isVisible = (key) =>
    layout.find((item) => item.key === key)?.visible !== false;
  const showImage = true;
  const showTitle = isVisible("title");
  const showDescription = isVisible("description");

  return (
    <NewsDiv ref={newsSectionRef}>
      <Decoder $isStickyBgMode={isStickyBgMode} $isDarkMode={$isDarkMode}>
        <AihelpTitle $isDarkMode={$isDarkMode}>
          <FilterBtn
            ref={(el) => registerRef('newsHeader', el)}
            $isDarkMode={$isDarkMode}
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            style={{ marginLeft: "5px", padding: "2px", fontSize: "15px", fontWeight: "600", background: "none"}}
          >
            Натисніть для додавання стрічки новин
          </FilterBtn>
        </AihelpTitle>
        <AnimatePresence>
          {isSettingsOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              style={{ overflow: "hidden" }}
            >
              <FilterContainer>
                <FilterBtn
                  $isDarkMode={$isDarkMode}
                  onClick={() => setIsHelpModalOpen(true)}
                >
                  Інструкція
                </FilterBtn>
                <FilterBtn
                  $isDarkMode={$isDarkMode}
                  $active={filterSources.includes("all")}
                  onClick={() => handleToggleFilter("all")}
                >
                  {filterSources.includes("all") ? "☑" : "☐"} Усі
                </FilterBtn>
                {SOURCES.map((s) => (
                  <FilterBtn
                    key={s.name}
                    $isDarkMode={$isDarkMode}
                    $active={filterSources.includes(s.name)}
                    onClick={() => handleToggleFilter(s.name)}
                  >
                    {filterSources.includes(s.name) ? "☑" : "☐"} {s.name}
                  </FilterBtn>
                ))}
                {customSources.map((s) => (
                  <FilterBtn
                    key={s.url}
                    $isDarkMode={$isDarkMode}
                    $active={filterSources.includes(s.name)}
                    onClick={() => handleToggleFilter(s.name)}
                  >
                    {filterSources.includes(s.name) ? "☑" : "☐"} {s.name}
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveSource(s.url);
                      }}
                      style={{
                        marginLeft: "6px",
                        color: "#ff4d4d",
                        fontWeight: "bold",
                      }}
                      aria-label="Видалити джерело"
                    >
                      ×
                    </span>
                  </FilterBtn>
                ))}
                {customSources.length < 5 && (
                  <FilterBtn
                    $isDarkMode={$isDarkMode}
                    onClick={() => setIsAddingSource(!isAddingSource)}
                    style={{ borderStyle: "dashed" }}
                  >
                    {isAddingSource ? "Скасувати" : "Додати стрічку"}
                  </FilterBtn>
                )}
                <FilterBtn
                  $isDarkMode={$isDarkMode}
                  onClick={() => setShowBlacklist(true)}
                  style={{
                    background: "rgba(255, 77, 77, 0.2)",
                    borderColor: "#ff4d4d",
                    color: "#ff4d4d",
                  }}
                >
                  Чорний список ({blockedSources.length})
                </FilterBtn>
              </FilterContainer>
              <AnimatePresence>
                {isAddingSource && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <input
                        type="text"
                        value={newUrl}
                        onChange={(e) => setNewUrl(e.target.value)}
                        placeholder="Введіть URL RSS (Н-д: https://rss.com/day)"
                        style={{
                          padding: "5px",
                          borderRadius: "5px",
                          border: `1px solid ${$isDarkMode ? "rgba(0, 0, 0, 0.98)" : "rgb(255, 255, 255)"}`,
                          background: "transparent",
                          color: $isDarkMode ? "#000" : "#fff",
                          outline: "none",
                          minWidth: "248px",
                          fontFamily: "var(--font-family)",
                          fontSize: "12px",
                          "--placeholder-color": "rgba(255, 255, 255, 0.97)",
                        }}
                      />
                      <FilterBtn
                        $isDarkMode={$isDarkMode}
                        onClick={handleAddSource}
                        style={{ background: "#ffb36c", color: "#000" }}
                      >
                        Зберегти
                      </FilterBtn>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </Decoder>

      {loading ? (
        <div
          style={{ textAlign: "center", color: "gray", padding: "60px 20px" }}
        >
          <div
            style={{
              marginBottom: "15px",
              fontSize: "14px",
              background: "rgba(0, 0, 0, 0.71)",
              color: "#fff",
              borderRadius: "5px",
              padding: "10px 15px",
              borderRadius: "5px",
              display: "inline-block",
              fontWeight: "900",
            }}
          >
            {hasError
              ? "Помилка завантаження!"
              : `Шукаємо цікаві новини: ${loadProgress}%`}
          </div>
          <ProgressBar $isDarkMode={$isDarkMode}>
            <ProgressBarFill $progress={loadProgress} $isError={hasError} />
          </ProgressBar>
        </div>
      ) : filteredItems.length > 0 ? (
        <div
          style={{ position: "relative", maxWidth: "1400px", margin: "0 auto" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={filterSources.join(",")}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              style={{ width: "100%" }}
            >
             <CarouselWrapper>
  <MobileCarousel ref={carouselRef} onScroll={handleScroll}>
    {infiniteItems.map((item, index) => (
      <CarouselSlide data-news-slide key={`${item.link}-${index}`}>
        <NewsCard
          item={item}
          $isDarkMode={$isDarkMode}
          showImage={showImage}
          showTitle={showTitle}
          showDescription={showDescription}
          onAiSummaryClick={(news) => {
            setSelectedNews(news);
            setIsAiModalOpen(true);
          }}
          onReportClick={handleReport}
          onMuteClick={handleMute}
          onUnmuteClick={handleUnmute}
        />
      </CarouselSlide>
    ))}
  </MobileCarousel>
  <CarouselHint $visible={showCarouselHint}>
    <CarouselHintItem style={{ paddingRight: "10px" }} onClick={() => scrollCarousel("left")}>
      ◂
    </CarouselHintItem>
    <CarouselHintItem onClick={() => scrollCarousel("right")}>
      ▸
    </CarouselHintItem>
  </CarouselHint>
</CarouselWrapper>
            </motion.div>
          </AnimatePresence>
          <FilteredNewsCounter $isDarkMode={$isDarkMode}>
            За сьогодні відфільтровано {filteredNewsCount} небажаних новин.
          </FilteredNewsCounter>
        </div>
      ) : (
        <div style={{ textAlign: "center", color: "white", padding: "14px", background: "#0000009c", marginTop: "20px", fontSize: "12px" }}>
          Перевірте інтернет зв'язок. У випадку стабільного зв'язку це означає, що всі новини сайту мали недопустимий характер і ми їх не пропустили.
        </div>
      )}

      {selectedNews && (
        <NewsAiModal
          isOpen={isAiModalOpen}
          onClose={() => setIsAiModalOpen(false)}
          newsItem={selectedNews}
          isDarkMode={$isDarkMode}
        />
      )}
      {isHelpModalOpen && (
        <InfoModal
          isOpen={isHelpModalOpen}
          onClose={() => setIsHelpModalOpen(false)}
          initialFaqQuestion="Навчання по управлінню новинами"
        />
      )}
      {showBlacklist && (
        <ModalOverlay onClick={() => setShowBlacklist(false)}>
          <ModalContent
            $isDarkMode={$isDarkMode}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={() => setShowBlacklist(false)}>✕</CloseButton>
            <h2 style={{ marginTop: 0 }}>Чорний список (карантин 24 год)</h2>
            <p style={{ fontSize: "13px" }}>
              Ці RSS-джерела отримали багато скарг і відключені для
              всіх користувачів.
            </p>
            {blockedSources.length === 0 ? (
              <p>Наразі немає заблокованих джерел.</p>
            ) : (
              <ul style={{ paddingLeft: "20px", marginTop: "15px" }}>
                {blockedSources.map((s) => (
                  <li key={s.id} style={{ marginBottom: "15px" }}>
                    <strong style={{ fontSize: "16px" }}>{s.name}</strong>
                    <br />
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontSize: "12px",
                        color: "#ffb36c",
                        wordBreak: "break-all",
                      }}
                    >
                      {s.url}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </NewsDiv>
  );
};

export default News;
