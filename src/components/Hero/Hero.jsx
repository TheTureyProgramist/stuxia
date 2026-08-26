import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import slivki from "../../photos/programs/youtub/slivki.webp";
import weather from "../../photos/programs/youtub/weather.webp";
import planes from "../../photos/programs/youtub/planes.webp";
import { GiPalette } from "react-icons/gi";
import { BsPinAngle } from "react-icons/bs";
import styled, { keyframes, css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { MdSettingsSuggest, MdMore, MdWallpaper } from "react-icons/md";
import youtube from "../../photos/programs/youtub/youtube.webp";
import {
  addCustomDay,
  removeCustomDay,
} from "../../features/counter/Counter.js";
import localforage from "localforage";
import hills from "../../photos/hero-header/fog.webp";
import { BsPinAngleFill } from "react-icons/bs";
import herotext from "../../photos/hero-header/herotext.webp";
import customLinksData from "./customLinks.json";
import {
  buildWikipediaSearchUrl,
  parseWikipediaSnippet,
} from "../../utils/wikipediaUtils";
import { DEFAULT_BGS } from "./defaultBgs";
import News from "../News/News.jsx";
import { useTutorial } from "../DominoTutorial/TutorialContext.jsx";
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;
const slideIn = keyframes`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`;
const slideOut = keyframes`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`;
const slideUpHero = keyframes`
  0% { transform: translateY(120px) scale(1.5); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
`;
const fadeInContent = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
const HeroDiv = styled.div`
  position: relative;
  width: 100%;
  min-height: 732px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;
`;
const HeroDecors = styled.div`
  display: block;
  width: 192px;
  margin-top: 45px;
  height: 71px;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  opacity: 0;
  transform: translateY(120px) scale(1.5);
  animation: ${(props) =>
    props.$start
      ? css`
          ${slideUpHero} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards
        `
      : "none"};
`;
const DelayedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5px;
  opacity: 0;
  animation: ${(props) =>
    props.$start
      ? css`
          ${fadeInContent} 1s ease-out forwards
        `
      : "none"};
  animation-delay: ${(props) => (props.$start ? "1.5s" : "0s")};
`;
const panAnimation = keyframes`
  0% { background-position-x: 0%; }
  50% { background-position-x: 100%; }
  100% { background-position-x: 0%; }
`;

const isVideoSource = (src) => {
  if (src instanceof Blob) return src.type.startsWith("video/");
  if (typeof src !== "string") return false;
  return src.includes(".mp4") || src.startsWith("data:video/");
};

const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const mergeCitySuggestions = (
  existingSuggestions = [],
  newSuggestions = [],
) => {
  const seen = new Set();
  return [...(existingSuggestions || []), ...(newSuggestions || [])].filter(
    (city) => {
      const key = `${city?.lat ?? ""}-${city?.lon ?? ""}-${city?.name ?? ""}-${city?.country ?? ""}`;
      if (!city || seen.has(key)) return false;
      seen.add(key);
      return true;
    },
  );
};

const BgLayerStyled = styled.div`
  position: ${(props) => (props.$isStickyBgMode ? "fixed" : "absolute")} !important;
  width: ${(props) => (props.$isStickyBgMode ? "100vw" : "100%")} !important;
  height: ${(props) => (props.$isStickyBgMode ? "100vh" : "100%")} !important;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transition:
    opacity ${(props) => props.$transition}s ease-in-out,
    position 0.5s ease,
    width 0.5s ease,
    height 0.5s ease,
    z-index 0s;
  transform: scale(
      ${(props) => (props.$zoom || 1) * (props.$rotationScale || 1)}
    )
    rotate(${(props) => props.$rotation || 0}deg);
  transform-origin: ${(props) => props.$focalX}% ${(props) => props.$focalY}%;
  filter: ${(props) => {
    if (props.$blurType === "pixelated") {
      return props.$pixelation > 0.5 ? `url(#pixelate-hero)` : "none";
    }
    return `blur(${props.$blur || 0}px)`;
  }};
  z-index: ${(props) => (props.$isStickyBgMode ? "-10" : "-2")} !important;
  animation: ${(props) =>
    props.$panEnabled && props.$zoom > 1
      ? css`
          ${panAnimation} ${props.$panSpeed || 6}s infinite linear
        `
      : "none"};
`;

const BgLayer = (props) => {
  const {
    $image,
    $active,
    $focalX,
    $focalY,
    $videoStart,
    $videoEnd,
    $videoPlaybackSpeed,
  } = props;
  const [url, setUrl] = useState(typeof $image === "string" ? $image : "");
  const videoRef = useRef(null);
  const isPixelated = props.$blurType === "pixelated";
  useEffect(() => {
    let objectUrl = null;
    if ($image instanceof Blob) {
      objectUrl = URL.createObjectURL($image);
      setUrl(objectUrl);
    } else {
      setUrl($image);
    }
    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [$image]);

  useEffect(() => {
    if (videoRef.current) {
      if ($active) {
        // Seek to start position when activating
        if ($videoStart != null && videoRef.current.currentTime < $videoStart) {
          videoRef.current.currentTime = $videoStart;
        }
        videoRef.current.playbackRate = $videoPlaybackSpeed || 1;
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [$active, $videoStart, $videoPlaybackSpeed]);

  const isVideo = isVideoSource($image);
  const videoStart = $videoStart ?? 0;
  const videoEnd = $videoEnd ?? null; // null = play to natural end

  return (
    <BgLayerStyled {...props}>
      {isVideo ? (
        <video
          ref={videoRef}
          src={url}
          muted
          loop
          playsInline
          onTimeUpdate={(e) => {
            const t = e.target.currentTime;
            if (videoEnd !== null && t >= videoEnd) {
              e.target.currentTime = videoStart;
            }
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: `${$focalX}% ${$focalY}%`,
            imageRendering: isPixelated ? "pixelated" : "auto",
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${url || hills})`,
            backgroundSize: "cover",
            backgroundPosition: `${$focalX}% ${$focalY}%`,
            backgroundRepeat: "no-repeat",
            imageRendering: isPixelated ? "pixelated" : "auto",
          }}
        />
      )}
    </BgLayerStyled>
  );
};

const Overlay = styled.div`
  position: ${(props) => (props.$isStickyBgMode ? "fixed" : "absolute")} !important;
  top: 0;
  left: 0;
  width: ${(props) => (props.$isStickyBgMode ? "100vw" : "100%")} !important;
  height: ${(props) => (props.$isStickyBgMode ? "100vh" : "100%")} !important;
  background: rgba(0, 0, 0, ${(props) => props.$opacity});
  z-index: ${(props) => (props.$isStickyBgMode ? "-9" : "-1")} !important;
  pointer-events: none;
  transition:
    background 0.5s ease,
    width 0.5s ease,
    height 0.5s ease;
`;
const HeroDecor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

const HeroFix = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: start;
    gap: 0;
  }
`;
const HeroFi = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeroDate = styled.div`
  color: rgb(255, 255, 255);
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  width: 300px;
  background: #00000056;
  backdrop-filter: blur(5px);
  padding: 10px;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const TimezoneButton = styled.button`
  color: #fff;
  cursor: pointer;
  font-size: 22px;
  transition: all 0.3s ease;
`;

const TimezoneMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(2, 2, 2, 0.97);
  border-top: 2px solid #ffb36c;
  padding: 0;
  overflow-y: auto;
  z-index: 9999;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;

const TimezoneOption = styled.button`
  width: 100%;
  background: transparent;
  color: ${(props) => (props.$selected ? "#ffb36c" : "#fff")};
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  border-left: 3px solid ${(props) => (props.$selected ? "#ffb36c" : "transparent")};
  padding: 10px 16px;
  cursor: pointer;
  text-align: left;
  font-size: 13px;
  transition: all 0.15s ease;
  font-weight: ${(props) => (props.$selected ? "bold" : "normal")};
  background: ${(props) => (props.$selected ? "rgba(255,179,108,0.08)" : "transparent")};

  &:hover {
    background: rgba(255, 179, 108, 0.15);
    border-left-color: #ffb36c;
    color: #ffb36c;
  }
`;
const FestiveOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2000;
  background: radial-gradient(
    circle,
    rgba(255, 215, 0, 0.1) 0%,
    transparent 70%
  );
  border: 4px solid rgba(255, 215, 0, 0.15);
  box-shadow: inset 0 0 50px rgba(255, 215, 0, 0.2);
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transition: opacity 2s ease;

  &::after {
    position: absolute;
    top: 20px;
    left: 20px;
    color: ${(props) => props.$color || "gold"};
    font-size: 14px;
    font-weight: 900;
    text-shadow: 0 0 10px black;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  z-index: 99;
`;

const ModePicker = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const ModeIconBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 10px 0 0 0;
  border: none;
  border-right: 2px solid black;
  background: #ffe100;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 0;
  flex-shrink: 0;
  transition: background 0.2s;
  &:hover { background: #00ffd0; }
`;

const ModeDropdown = styled.div`
  position: absolute;
  top: -87px;
  left: 0;
  background: rgba(3, 3, 3, 0.76);
  backdrop-filter: blur(12px);
  border:2px solid rgba(255,179,108,0.5);
  border-radius: 5px;
  overflow: hidden;
  z-index: 200;
  min-width: 180px;
`;

const ModeDropdownItem = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 6px;
  background: ${(props) => props.$active ? 'rgba(108,255,228,0.15)' : 'transparent'};
  border: none;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  color: ${(props) => props.$active ? '#6cffe4' : '#fff'};
  font-size: 13px;
  font-weight: ${(props) => props.$active ? '700' : '500'};
  cursor: pointer;
  text-align: left;
  transition: background 0.15s;
  &:last-child { border-bottom: none; }
  &:hover { background: rgba(255,179,108,0.15); color: #ffb36c; }
`;

const ModeButton = styled.button`
  padding: 14px;
  background: ${(props) =>
    props.$active ? "#6cffe48b" : "rgba(255, 234, 0, 0.5)"};
  color: ${(props) => (props.$active ? "#000" : "#fff")};
  border: 1px solid
    ${(props) => (props.$active ? "#ffff00" : "rgb(0, 255, 238)")};
  border-radius: 2px;
  cursor: pointer;
  font-weight: 600;
  font-family: var(--font-family);
  font-size: 12px;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background: ${(props) =>
      props.$active ? "#98ff6ca0" : "rgba(0, 255, 119, 0.59)"};
  }
`;

const CoordinatesContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
`;

const CoordinateInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 120px;
    height: 30px;
    padding: 5px;
    font-size: 10px;
    border-radius: 8px;
    border: 1px solid #ffb36c;
    background: #ffffff;
    color: #222;
    font-weight: 500;
    &::placeholder {
      color: #303030;
    }
  }
`;

const TimezoneMenuHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: rgba(2, 2, 2, 0.98);
  border-bottom: 2px solid rgba(255, 179, 108, 0.4);
  backdrop-filter: blur(6px);
`;

const TimezoneMenuTitle = styled.div`
  font-weight: bold;
  color: #ffb36c;
  font-size: 16px;
  line-height: 1.2;
`;

const TimezoneMenuCloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fb7a00;
  font-size: 36px;
  font-weight: bold;
  cursor: pointer;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: background 0.2s;
  &:hover {
    background: rgba(255, 122, 0, 0.2);
  }
`;

const SortButtonsRow = styled.div`
  display: flex;
  gap: 2px;
  border-bottom: 1px solid rgba(255, 179, 108, 0.3);
`;

const SortBtn = styled.button`
  background: ${(props) =>
    props.$active ? "#ffb36c" : "rgba(255, 179, 108, 0.1)"};
  color: ${(props) => (props.$active ? "#000" : "#fff")};
  border: 1px solid #ffb36c;
  border-radius: 3px;
  padding: 8px 4px;
  font-size: 12px;
  cursor: pointer;
  flex: 1;
  font-weight: bold;
  transition: all 0.2s;
  &:hover {
    background: ${(props) =>
      props.$active ? "#ffb36c5d" : "rgba(255, 179, 108, 0.3)"};
  }
`;

const HeroFormater = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  width: 97%;
  justify-content: center;
`;

const HeroInput = styled.input`
  width: 100%;
  height: 30px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 11px;
  color: #040404;
  padding-left: 8px;
  padding-right: 35px;
  background: #ffffff;
  border-radius: 0;
  border: none;
  border-right: 2px solid black;
  outline: none;
  box-sizing: border-box;
  @media (min-width: 768px) {
    font-size: 13px;
  }
    &::placeholder {
    color: #000000;
  }
`;
const ClearButton = styled.button`
  position: absolute;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border-left: 3px solid black;
  border-top: 1px solid black;
  cursor: pointer;
  font-size: 30px;
  color: rgb(2, 2, 2);
  background: rgb(183, 101, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 31px;
  width: 30px;
  transition: all 0.2s;
  &:hover {
    font-weight: bold;
  }
  &:active {
    transform: translateY(-50%) scale(0.9);
  }
`;
const HeroButton = styled.button`
  position: relative;
  border-radius: 0 10px 0px 0;
  width: 30px;
  height: 30px;
  background: ${(props) => (props.disabled ? "#ffffff" : "yellow")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border-left: 1px solid black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  line-height: 1;
  font-size: 20px;
  color: black;
  transition: all 0.7s ease-in-out;
  overflow: hidden;
  &:hover {
    background: ${(props) => (props.disabled ? "#ccc" : "skyblue")};
    color: ${(props) => (props.disabled ? "black" : "transparent")};
  }
  ${(props) =>
    !props.disabled &&
    css`
      &:hover::after {
        content: "+";
        position: absolute;
        color: black;
        font-size: 22px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
`;
const SuggestionsList = styled.div`
  position: absolute;
  top: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-radius: 0 0 15px 15px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  height: 150px;
  overflow-y: auto;
  border: 1px solid rgb(0, 0, 0);
  @media (min-width: 768px) {
  width: 108.4%;
  }
  @media (min-width: 1200px) {
      width: 102.4%;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: skyblue;
    border-radius: 10px;
  }
`;

const SuggestionItem = styled.button`
  width: 100%;
  text-align: left;
  padding: 2px;
  background: white;
  border: 1px solid #eee;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  color: #333;
  &:hover {
    background: skyblue;
    color: white;
    transform: translateX(5px);
  }
`;

const LinksDropdown = styled.div`
  position: absolute;
  top: 100%;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-radius: 0 0 15px 15px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  max-height: 250px;
  overflow-y: ${(props) => (props.$hasExpanded ? "hidden" : "auto")};
  border-top: 2px solid rgb(0, 0, 0);
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: skyblue;
    border-radius: 10px;
  }
`;

const AccordionItem = styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;

const AccordionHeader = styled.div`
  cursor: pointer;
  font-weight: bold;
  color: #fafafa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #205d6e;
  transition: background 0.2s;
  &:hover {
    background: #566fd2;
    color: white;
  }
`;

const AccordionContent = styled.div`
  max-height: ${(props) => (props.$expanded ? "220px" : "0")};
  overflow-y: ${(props) => (props.$expanded ? "auto" : "hidden")};
  transition:
    max-height 0.4s ease-in-out,
    padding 0.4s ease-in-out;
  padding: ${(props) => (props.$expanded ? "3px" : "0 15px")};
  background: #00eaff;
  font-size: 13px;
  color: rgb(9, 9, 9);
  font-weight: 900;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  white-space: pre-wrap;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
`;

const Tag = styled.span`
  background: #f6ff00;
  color: #000;
    font-weight: 900;
  padding: 1px 5px;
  border-radius: 2px;
  border: 1px solid #000;
  font-size: 12px;
`;

const SliderContent = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 5px;
  width: 100%;
  scroll-behavior: smooth;
  padding-bottom: 5px;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0,0,0,0.1);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 4px;
  }
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.6);
  color: white;
  border: 1px solid #ffb36c;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  &:hover { background: rgba(0,0,0,0.9); }

  @media (min-width: 1025px) {
    display: none;
  }
`;

const ThumbnailImage = styled.img`
  width: 290px;
  height: 135px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #ddd;
  transition: all 0.3s ease;
  flex-shrink: 0;
  &:hover {
    transform: scale(1.05);
  }
`;

const getYoutubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const ImageSlider = ({ images = [], youtubeTrailer, setFullscreenImage, imageMap, setFullscreenVideo }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 310;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const youtubeId = youtubeTrailer ? getYoutubeId(youtubeTrailer) : null;
  const youtubeThumbnail = youtubeId ? `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg` : null;

  return (
    <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <button 
        onClick={(e) => { e.stopPropagation(); setIsCollapsed(!isCollapsed); }} 
        style={{ 
          alignSelf: 'flex-start', 
          marginBottom: '3px',
          marginTop: '3px', 
          background: '#ecfd03', 
          border: '1px solid #000', 
          borderRadius: '3px', 
          cursor: 'pointer',
          padding: '5px',
          fontSize: '11px',
          fontWeight: 'bold',
          color: '#000'
        }}
      >
        {isCollapsed ? 'Розгорнути фото і відео' : 'Згорнути фото і відео'}
      </button>
      <div style={{ display: 'flex', alignItems: 'center', position: 'relative', width: '100%' }}>
        <SliderButton style={{ left: 0 }} onClick={(e) => { e.stopPropagation(); scroll('left'); }}>{"<"}</SliderButton>
        <SliderContent ref={scrollRef}>
          {youtubeThumbnail && (
            <div 
              style={{ 
                position: 'relative', 
                cursor: 'pointer', 
                flexShrink: 0,
                width: '300px',
                height: isCollapsed ? '10px' : '135px',
                transition: 'all 0.3s ease',
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (!isCollapsed) setFullscreenVideo(youtubeTrailer);
              }}
            >
              <ThumbnailImage
                src={youtubeThumbnail}
                alt="YouTube Trailer"
                style={{ 
                  height: isCollapsed ? '10px' : '135px', 
                  opacity: 0.8,
                  border: '2px solid red',
                  boxSizing: 'border-box'
                }}
              />
              {!isCollapsed && (
                <div 
                  style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    background: 'rgba(0,0,0,0.7)', 
                    borderRadius: '50%', 
                    width: '50px', 
                    height: '50px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'red',
                    fontSize: '24px',
                    pointerEvents: 'none'
                  }}
                >
                  ▶
                </div>
              )}
            </div>
          )}

          {images.map((img, i) => {
            const imageSrc = imageMap[img] || img;
            return (
              <ThumbnailImage
                key={i}
                src={imageSrc}
                alt=""
                style={{ height: isCollapsed ? '10px' : '135px' }}
                onClick={(e) => {
                   e.stopPropagation();
                   if (!isCollapsed) setFullscreenImage(imageSrc);
                }}
              />
            );
          })}
        </SliderContent>
        <SliderButton style={{ right: 0 }} onClick={(e) => { e.stopPropagation(); scroll('right'); }}>{">"}</SliderButton>
      </div>
    </div>
  );
};

const FullscreenImageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  cursor: pointer;
`;

const FullscreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`;

const LoadMoreButton = styled.button`
  width: 100%;
  padding: 8px;
  background: ${(props) => (props.disabled ? "#eee" : "gold")};
  color: ${(props) => (props.disabled ? "#999" : "black")};
  border: 2px solid ${(props) => (props.disabled ? "#ccc" : "#b8860b")};
  border-radius: 8px;
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  font-size: 13px;
  &:hover {
    background: ${(props) => (props.disabled ? "#eee" : "#ffcc00")};
  }
`;

const ChangeBgButton = styled.button`
  position: absolute;
  top: 43px;
  right: 7px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s;
  font-size: 18px;
  backdrop-filter: blur(5px);
  &:hover {
    background: #1d5b69;
    transform: scale(1.1);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  animation: ${(props) => (props.$isClosing ? fadeOut : fadeIn)} 0.3s ease-out
    forwards;
`;

const ModalContent = styled.div`
  background: #000;
  padding: 3px;
  border-radius: 5px;
  width: 95%;
  max-width: 1200px;
  position: reletive;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid #ffb36c;
  color: white;
  position: relative;
  animation: ${(props) => (props.$isClosing ? slideOut : slideIn)} 0.4s
    cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;

const DeleteBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(255, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  z-index: 10;
  &:hover {
    background: red;
  }
`;

const EditBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 35px;
  background: rgba(255, 179, 108, 0.8);
  color: black;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  z-index: 10;
  &:hover {
    background: #ffb36c;
  }
`;

const TopOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 1px;
  font-size: 10px;
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
`;

const NameOverlay = styled.div`
  position: absolute;
  bottom: ${(props) => (props.$hasSlots ? "13px" : "0")};
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 10px;
  padding: 2px;
  text-align: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 8;
`;
const ConfigRow = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.05);
  padding: 5px;
  border-radius: 6px;
  label {
    font-size: 12px;
    font-weight: bold;
    color: #ffb36c;
  }
`;

const ModalConfigGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3px;
  align-items: end;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

const FocusButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const BgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 0px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr))
  }
`;

const BgItem = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid ${(props) => (props.$active ? "#ffb36c" : "transparent")};
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
  cursor: pointer;
`;

const RatingOverlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  gap: 98px;
  z-index: 5;
`;

const HeartIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 16px;
  color: "#000dff";
  font-weight: 900;
  text-shadow: 0 0 3px black;
`;

const SlotButtons = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  background: rgba(0, 0, 0, 0.6);
`;

const SlotBtn = styled.button`
  flex: 1;
  background: ${(props) => (props.$active ? "#ffb36c" : "transparent")};
  color: ${(props) => (props.$active ? "black" : "white")};
  border: none;
  padding: 1px;
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
`;

const DropZone = styled.div`
  position: sticky;
  top: 0;
  border: 2px dashed #ffb36c;
  padding: 10px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
  color: #ccc;

  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
`;

const CloseBtn = styled.button`
  color: #ff7b00;
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  align-self: center;
`;

const ModalSearchInput = styled.input`
  padding: 4px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: rgba(255, 255, 255, 0.01);
  color: white;
  width: 100%;
  max-width: 300px;
  font-size: 12px;
  outline: none;
  &::placeholder {
    color: #aaa;
  }
  &:focus {
    background: rgba(255, 255, 255, 0.15);
    border-color: white;
  }
`;

const ModalDivider = styled.hr`
  border: 0;
  border-top: 1px solid rgba(255, 179, 108, 0.3);
  width: 100%;
`;

const ModalSectionTitle = styled.h3`
  font-weight: bold;
  color: #ffb36c;
  margin: 5px;
  font-size: 14px;
`;

const TIMEZONES = [
  { label: "UTC (Всесвітній час)", value: "UTC" },
  { label: "GMT (Лондон, Дублін)", value: "Europe/London" },
  { label: "UTC+1 (Берлін, Париж, Рим, Варшава)", value: "Europe/Berlin" },
  { label: "UTC+2 (Київ, Хельсінкі, Каїр, Бухарест)", value: "Europe/Kyiv" },
  { label: "UTC+3 (Стамбул, Ер-Ріяд, Найробі)", value: "Europe/Istanbul" },
  { label: "UTC+4 (Дубай, Баку, Тбілісі)", value: "Asia/Dubai" },
  { label: "UTC+5 (Ісламабад, Ташкент, Мальдіви)", value: "Asia/Karachi" },
  { label: "UTC+6 (Астана, Дакка, Алмати)", value: "Asia/Almaty" },
  { label: "UTC+7 (Бангкок, Джакарта, Ханой)", value: "Asia/Bangkok" },
  { label: "UTC+8 (Пекін, Сінгапур, Перт)", value: "Asia/Shanghai" },
  { label: "UTC+9 (Токіо, Сеул, Іркутськ)", value: "Asia/Tokyo" },
  {
    label: "UTC+10 (Сідней, Мельбурн, Порт-Морсбі)",
    value: "Australia/Sydney",
  },
  { label: "UTC+11 (Номеа, Соломонові Острови)", value: "Pacific/Noumea" },
  { label: "UTC+12 (Окленд, Фіджі)", value: "Pacific/Auckland" },
  { label: "UTC-1 (Азорські острови, Кабо-Верде)", value: "Atlantic/Azores" },
  { label: "UTC-2 (Південна Джорджія)", value: "Atlantic/South_Georgia" },
  {
    label: "UTC-3 (Буенос-Айрес, Бразиліа, Гренландія)",
    value: "America/Argentina/Buenos_Aires",
  },
  { label: "UTC-4 (Сантьяго, Галіфакс, Каракас)", value: "America/Santiago" },
  { label: "UTC-5 (Нью-Йорк, Торонто, Богота)", value: "America/New_York" },
  { label: "UTC-6 (Чикаго, Мехіко, Вінніпег)", value: "America/Chicago" },
  { label: "UTC-7 (Денвер, Едмонтон, Калгарі)", value: "America/Denver" },
  {
    label: "UTC-8 (Лос-Анджелес, Ванкувер, Сан-Франциско)",
    value: "America/Los_Angeles",
  },
  { label: "UTC-9 (Аляска, Анкоридж)", value: "America/Anchorage" },
  { label: "UTC-10 (Гаваї, Гонолулу)", value: "Pacific/Honolulu" },
  { label: "UTC-11 (Паго-Паго, Алофі)", value: "Pacific/Pago_Pago" },
  { label: "UTC-12 (Острів Бейкер, Острів Гоуленд)", value: "Etc/GMT+12" },
  { label: "EST (Північна Америка: Східний час)", value: "America/New_York" },
  {
    label: "CST (Північна Америка: Центральний час)",
    value: "America/Chicago",
  },
  { label: "MST (Північна Америка: Гірський час)", value: "America/Denver" },
  {
    label: "PST (Північна Америка: Тихоокеанський час)",
    value: "America/Los_Angeles",
  },
  { label: "CET (Центральна Європа: Прага, Мадрид)", value: "Europe/Berlin" },
  { label: "EET (Східна Європа: Софія, Таллінн)", value: "Europe/Kyiv" },
  { label: "IST (Індія, Нью-Делі)", value: "Asia/Kolkata" },
  { label: "JST (Японія, Токіо)", value: "Asia/Tokyo" },
  { label: "AEST (Східна Австралія, Брісбен)", value: "Australia/Brisbane" },
  { label: "Інший (ввести вручну)", value: "custom_input" },
];
const imageMap = {
  planes: planes,
  weather: weather,
  slivki: slivki,
  herotext: herotext,
  hills: hills,
  youtube: youtube,
};

const Hero = ({
  isStickyBgMode,
  heroDateString,
  onAddCity,
  startAnimation,
  user,
  isDarkMode,
  checkWeatherDanger,
  heroBg,
  setHeroBg,
  heroBg2,
  setHeroBg2,
  heroBg3,
  setHeroBg3,
  heroBg4,
  setHeroBg4,
  customHeroBgs = [],
  setCustomHeroBgs,
  heroBgMode,
  setHeroBgMode,
  heroOverlayOpacity,
  setHeroOverlayOpacity,
  bgRatings,
  setBgRatings,
  slideshowInterval,
  setSlideshowInterval,
  slideshowTransition,
  setSlideshowTransition,
  filterCategory,
  setFilterCategory,
  heroBgZoom,
  setHeroBgZoom,
  heroBgRotation,
  setHeroBgRotation,
  heroBgBlur,
  setHeroBgBlur,
  heroBgPixelation,
  setHeroBgPixelation,
  heroBgBlurType,
  setHeroBgBlurType,
  heroBgFocal1,
  setHeroBgFocal1,
  heroBgFocal2,
  setHeroBgFocal2,
  heroBgFocal3,
  setHeroBgFocal3,
  heroBgFocal4,
  setHeroBgFocal4,
  heroBgPanEnabled,
  setHeroBgPanEnabled,
  heroBgPanSpeed,
  setHeroBgPanSpeed,
  videoPlaybackSpeed,
  setVideoPlaybackSpeed,
  screenshots = [],
  selectedTimezone,
  setSelectedTimezone,
  customHolidayName,
  setCustomHolidayName,
}) => {
  const dispatch = useDispatch();
  const { registerRef, isActive } = useTutorial?.() || { registerRef: () => {} };
  const customDays = useSelector((state) => state.calendar?.customDays || []);
  const [newDayInput, setNewDayInput] = useState({ date: "", reason: "" });
  const [inputValue, setInputValue] = useState("");
  const linksDropdownRef = useRef(null);
  const [expandedLinkId, setExpandedLinkId] = useState(null);

  useEffect(() => {
    const handleAutoKonotop = () => {
      setInputValue("Конотоп");
      setTimeout(() => {
        onAddCity({ name: "Конотоп", fullName: "Конотоп (UA)", lat: 51.24, lon: 33.20 });
      }, 2000);
    };
    window.addEventListener("domino-auto-input-konotop", handleAutoKonotop);
    return () => window.removeEventListener("domino-auto-input-konotop", handleAutoKonotop);
  }, [onAddCity]);

  useEffect(() => {
    if (expandedLinkId !== null && linksDropdownRef.current) {
      const expandedElement = linksDropdownRef.current.querySelector(
        `[data-id="${expandedLinkId}"]`
      );
      if (expandedElement) {
        linksDropdownRef.current.scrollTo({
          top: expandedElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [expandedLinkId]);
  const [suggestions, setSuggestions] = useState([]);
  const [limit, setLimit] = useState(3);
  const [showList, setShowList] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleBgCount, setVisibleBgCount] = useState(300);
  const MAX_DAILY_HERO_CARDS = 1000;
  const [uploadedToday, setUploadedToday] = useState(0);

  useEffect(() => {
    const loadCount = async () => {
      try {
        const uid = user?.uid || "guest";
        const today = new Date().toISOString().split("T")[0];
        const key = `hero_cards_${uid}_${today}`;
        const val = await localforage.getItem(key);
        setUploadedToday(Number(val) || 0);
      } catch (err) {
        console.error("Failed to load hero uploaded count:", err);
      }
    };
    loadCount();
  }, [user]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [descriptionModal, setDescriptionModal] = useState(null); // { name, text }

  // Блокування прокрутки при відкритій модалці
  useEffect(() => {
    if (isModalOpen || descriptionModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen, descriptionModal]);
  const [showTimezoneMenu, setShowTimezoneMenu] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchMode, setSearchMode] = useState("city");
  const [showModeDropdown, setShowModeDropdown] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [fullscreenVideo, setFullscreenVideo] = useState(null);
  const [pinnedLinks, setPinnedLinks] = useState([]);
  const [wikipediaResults, setWikipediaResults] = useState([]);
  const [isWikipediaLoading, setIsWikipediaLoading] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [sortType, setSortType] = useState("rating");
  const [activeLayer, setActiveLayer] = useState(1);
  const rotationScale = 1;
  const [tzSortMode, setTzSortMode] = useState("default");
  const [randomBgsList, setRandomBgsList] = useState([]);
  const [randomCurrentIndex, setRandomCurrentIndex] = useState(0);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customTimezoneInputValue, setCustomTimezoneInputValue] = useState("");
  const isCustom = (src) => !DEFAULT_BGS.some((bg) => bg.src === src);
  const allBgs = useMemo(
    () => [
      ...DEFAULT_BGS,
      ...(customHeroBgs || []),
      ...(screenshots || []).map((s) => ({
        src: s.image,
        name: `Скріншот: ${s.trackName}`,
        category: "Скріншоти",
      })),
    ],
    [customHeroBgs, screenshots],
  );

  const handleSelectBg = useCallback(
    (src, targetLayer = 1) => {
      const indexInQueue = randomBgsList.findIndex((item) => item.src === src);

      if (heroBgMode === "random") {
        const layerToUpdate = activeLayer === 2 ? 2 : 1;
        if (layerToUpdate === 2) {
          setHeroBg2(src);
        } else {
          setHeroBg(src);
        }
        if (indexInQueue !== -1) {
          setRandomCurrentIndex(indexInQueue);
        }
        return;
      }

      if (targetLayer === 2) {
        setHeroBg2(src);
      } else if (targetLayer === 3) {
        setHeroBg3(src);
      } else if (targetLayer === 4) {
        setHeroBg4(src);
      } else {
        setHeroBg(src);
      }
    },
    [
      activeLayer,
      heroBgMode,
      randomBgsList,
      setHeroBg,
      setHeroBg2,
      setHeroBg3,
      setHeroBg4,
    ],
  );

  const getTzTimeInfo = useCallback((tzValue) => {
    if (!tzValue || tzValue === "custom_input") return null;
    try {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat("uk", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: tzValue,
      });
      const timeStr = fmt.format(now);
      const hour = parseInt(timeStr.split(":")[0]);
      const isDay = hour >= 6 && hour < 20;
      return { timeStr, isDay };
    } catch (e) {
      return null;
    }
  }, []);

  const getNumericOffset = useCallback((tzValue) => {
    if (tzValue === "UTC") return 0;
    if (tzValue === "custom_input") return 999;
    try {
      const date = new Date();
      const tzString = date.toLocaleString("en-US", { timeZone: tzValue });
      const localDate = new Date(tzString);
      const utcString = date.toLocaleString("en-US", { timeZone: "UTC" });
      const utcDate = new Date(utcString);
      return (localDate - utcDate) / (1000 * 60);
    } catch (e) {
      return 0;
    }
  }, []);

  const sortedTimezones = useMemo(() => {
    let list = [...TIMEZONES];
    if (tzSortMode === "alpha") {
      list.sort((a, b) => a.label.localeCompare(b.label));
    } else if (tzSortMode === "offset") {
      list.sort(
        (a, b) => getNumericOffset(a.value) - getNumericOffset(b.value),
      );
    }
    return list;
  }, [tzSortMode, getNumericOffset]);
 useEffect(() => {
    if (heroBgMode === "slideshow-2" && heroBg && heroBg2) {
      setActiveLayer(1);
      const timer = setInterval(() => {
        setActiveLayer((prev) => (prev === 1 ? 2 : 1));
      }, slideshowInterval * 1000);
      return () => clearInterval(timer);
    } else if (heroBgMode === "slideshow-3" && heroBg && heroBg2 && heroBg3) {
      setActiveLayer(1);
      const timer = setInterval(() => {
        setActiveLayer((prev) => (prev === 3 ? 1 : prev + 1));
      }, slideshowInterval * 1000);
      return () => clearInterval(timer);
    } else if (
      heroBgMode === "slideshow-4" &&
      heroBg &&
      heroBg2 &&
      heroBg3 &&
      heroBg4
    ) {
      setActiveLayer(1);
      const timer = setInterval(() => {
        setActiveLayer((prev) => (prev === 4 ? 1 : prev + 1));
      }, slideshowInterval * 1000);
      return () => clearInterval(timer);
    } else if (heroBgMode === "random") {
      if (randomBgsList.length === 0 && allBgs.length > 0) {
        const shuffled = shuffleArray(allBgs);
        setRandomBgsList(shuffled);
        setRandomCurrentIndex(0);
        if (shuffled[0]) {
          // ЗМІНА 1: Використовуємо setHeroBg замість handleSelectBg
          setHeroBg(shuffled[0].src);
        }
        return;
      }
      if (randomBgsList.length > 0) {
        const timer = setInterval(() => {
          setRandomCurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % randomBgsList.length;
            setActiveLayer((prevLayer) => {
              const nextLayer = prevLayer === 1 ? 2 : 1;
              if (nextLayer === 1) {
                setHeroBg(randomBgsList[nextIndex].src);
              } else {
                setHeroBg2(randomBgsList[nextIndex].src);
              }
              return nextLayer;
            });
            return nextIndex;
          });
        }, slideshowInterval * 1000);
        return () => clearInterval(timer);
      }
    }
  }, [
    heroBgMode,
    allBgs,
    slideshowInterval,
    randomBgsList,
    setHeroBg,
    setHeroBg2
  ]);
  useEffect(() => {
    if (heroBgMode === "random" && allBgs.length > 0) {
      if (randomBgsList.length !== allBgs.length) {
        const shuffled = shuffleArray(allBgs);
        setRandomBgsList(shuffled);
        setRandomCurrentIndex(0);
        if (shuffled[0]) {
          handleSelectBg(shuffled[0].src);
          setActiveLayer(1);
        }
      }
    }
  }, [allBgs.length, heroBgMode]);

  useEffect(() => {
    const isPredefined = TIMEZONES.some((tz) => tz.value === selectedTimezone);
    if (!isPredefined) {
      setCustomTimezoneInputValue(selectedTimezone);
      setShowCustomInput(true);
    } else {
      setCustomTimezoneInputValue("");
      setShowCustomInput(false);
    }
  }, [selectedTimezone]);
  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 350);
  };
  const timezoneMenuRef = useRef(null);

  const filteredBgs = (allBgs || []).filter((bg) => {
    const matchesCategory =
      filterCategory === "all" ||
      (filterCategory === "custom"
        ? isCustom(bg.src)
        : bg.category === filterCategory);
    const matchesSearch = (bg.name || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedBgs = [...filteredBgs].sort((a, b) => {
    if (sortType === "az") return a.name.localeCompare(b.name);
    if (sortType === "za") return b.name.localeCompare(a.name);

    const rA = bgRatings[a.src] || 0;
    const rB = bgRatings[b.src] || 0;
    if (rA !== rB) return rB - rA;
    return a.name.localeCompare(b.name);
  });
  const pagedBgs = sortedBgs.slice(0, visibleBgCount);
  const resetBgSettings = () => {
    setHeroOverlayOpacity(0.3);
    setHeroBgZoom(1);
    setHeroBgRotation(0);
    setHeroBgBlur(0);
    setHeroBgFocal1({ x: 50, y: 50 });
    setHeroBgFocal2({ x: 50, y: 50 });
    setHeroBgPanEnabled(false);
    setHeroBgPanSpeed(6);
    if (setVideoPlaybackSpeed) setVideoPlaybackSpeed(1);
  };

  const handleRate = (src) => {
    setBgRatings((prev) => {
      const current = prev[src] || 0;
      const next = (current + 1) % 3; // 0 -> 1 -> 2 -> 0
      return { ...prev, [src]: next };
    });
  };

  const fileInputRef = useRef(null);

  const handleFileUpload = async (file) => {
    if (!file) return;
    const isImage = file.type.startsWith("image/");
    const isVideo = file.type.startsWith("video/");
    if (!isImage && !isVideo) return;

    // enforce daily limit (Hero only)
    try {
      const uid = user?.uid || "guest";
      const today = new Date().toISOString().split("T")[0];
      const key = `hero_cards_${uid}_${today}`;
      const current = Number((await localforage.getItem(key)) || 0);
      if (current >= MAX_DAILY_HERO_CARDS) {
        alert(
          `Ліміт досягнуто — не більше ${MAX_DAILY_HERO_CARDS} карток на добу.`,
        );
        return;
      }
    } catch (err) {
      console.error("Failed to check hero daily limit:", err);
    }

    if (isVideo) {
      if (file.size > 20 * 1024 * 1024) {
        alert("Відео занадто велике! Максимум 20мб для стабільності.");
        return;
      }
      setCustomHeroBgs((prev) => [
        { src: file, name: file.name, category: "Ваші відео" },
        ...prev,
      ]);
      setHeroBg(file);

      // update daily count
      try {
        const uid = user?.uid || "guest";
        const today = new Date().toISOString().split("T")[0];
        const key = `hero_cards_${uid}_${today}`;
        const prevVal = Number((await localforage.getItem(key)) || 0);
        const nextVal = prevVal + 1;
        await localforage.setItem(key, nextVal);
        setUploadedToday(nextVal);
      } catch (err) {
        console.error("Failed to update hero uploaded count:", err);
      }
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 1200;
        const scale = MAX_WIDTH / img.width;
        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(
          async (blob) => {
            // update daily count before adding
            try {
              const uid = user?.uid || "guest";
              const today = new Date().toISOString().split("T")[0];
              const key = `hero_cards_${uid}_${today}`;
              const prevVal = Number((await localforage.getItem(key)) || 0);
              if (prevVal >= MAX_DAILY_HERO_CARDS) {
                alert(
                  `Ліміт досягнуто — не більше ${MAX_DAILY_HERO_CARDS} карток на добу.`,
                );
                return;
              }
              const nextVal = prevVal + 1;
              await localforage.setItem(key, nextVal);
              setUploadedToday(nextVal);
            } catch (err) {
              console.error("Failed to update hero uploaded count:", err);
            }

            setCustomHeroBgs((prev) => [
              { src: blob, name: file.name, category: "Ваші картинки" },
              ...prev,
            ]);
            setHeroBg(blob);
          },
          "image/jpeg",
          0.7,
        );
      };
    };
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const [coordinateSuggestions, setCoordinateSuggestions] = useState([]);
  const [showCoordinateSuggestions, setShowCoordinateSuggestions] =
    useState(false);
  const [isSearchingNearby, setIsSearchingNearby] = useState(false);
  const [nearbySearchStatus, setNearbySearchStatus] = useState("");
  const [cooldown, setCooldown] = useState(() => {
    const saved = localStorage.getItem("hero_cooldown_until");
    if (saved) {
      const until = parseInt(saved, 10);
      const now = Date.now();
      return until > now ? Math.ceil((until - now) / 1000) : 0;
    }
    return 0;
  });
  const searchRef = useRef(null);
  const API_KEY = "5104647d3e574f4a3f23c0aa092eb2b9";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.type === "mousedown" && event.button !== 0) return;
      if (
        event.type === "mousedown" &&
        (event.target === document.body ||
          event.target === document.documentElement)
      )
        return;
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchSuggestions = async (currentLimit, value, append = false) => {
    if (value.trim().length < 3) {
      setSuggestions([]);
      setShowList(false);
      return;
    }
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=${currentLimit}&appid=${API_KEY}`,
      );
      const data = await response.json();
      setHasMore(data.length >= currentLimit);
      setSuggestions((prev) =>
        append ? mergeCitySuggestions(prev, data) : data,
      );
      setShowList(true);
    } catch (error) {
      console.error("Помилка API:", error);
    }
  };

  useEffect(() => {
    localforage.getItem("pinnedLinks").then((val) => {
      if (val) setPinnedLinks(val);
    });
  }, []);

  const togglePin = (id) => {
    setPinnedLinks((prev) => {
      let newPinned;
      if (prev.includes(id)) {
        newPinned = prev.filter((p) => p !== id);
      } else {
        newPinned = [id, ...prev].slice(0, 5);
      }
      localforage.setItem("pinnedLinks", newPinned);
      return newPinned;
    });
  };

  const fetchWikipediaResults = useCallback(async (query) => {
    const trimmed = query.trim();
    if (!trimmed) {
      setWikipediaResults([]);
      return;
    }

    setIsWikipediaLoading(true);
    try {
      const response = await fetch(buildWikipediaSearchUrl(trimmed));
      if (!response.ok) {
        throw new Error(`Wikipedia request failed: ${response.status}`);
      }
      const data = await response.json();
      const results = (data?.query?.search || []).map((item) => ({
        id: item.pageid,
        title: item.title,
        snippet: parseWikipediaSnippet(item.snippet),
        url: `https://uk.wikipedia.org/wiki/${encodeURIComponent(item.title).replace(/%20/g, "_")}`,
      }));
      setWikipediaResults(results);
    } catch (error) {
      console.error("Wikipedia search error:", error);
      setWikipediaResults([]);
    } finally {
      setIsWikipediaLoading(false);
    }
  }, []);

  useEffect(() => {
    if (searchMode !== "links") {
      setWikipediaResults([]);
      setIsWikipediaLoading(false);
      return undefined;
    }

    const timeoutId = setTimeout(() => {
      fetchWikipediaResults(inputValue);
    }, 350);

    return () => clearTimeout(timeoutId);
  }, [searchMode, inputValue, fetchWikipediaResults]);

  useEffect(() => {
    setLimit(3);
    setHasMore(true);
    const timeoutId = setTimeout(() => {
      if (inputValue) fetchSuggestions(3, inputValue, false);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  const handleLoadMore = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newLimit = limit + 3;
    setLimit(newLimit);
    fetchSuggestions(newLimit, inputValue, true);
  };

  useEffect(() => {
    let interval;
    if (cooldown > 0) {
      interval = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) {
            localStorage.removeItem("hero_cooldown_until");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [cooldown]);

  const handleSelectByCoordinates = async () => {
    if (cooldown > 0) return;

    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);

    if (isNaN(lat) || isNaN(lon)) {
      alert("Будь ласка, введіть правильні координати");
      return;
    }

    if (lat < -90 || lat > 90) {
      alert("Широта має бути від -90 до 90");
      return;
    }

    if (lon < -180 || lon > 180) {
      alert("Довгота має бути від -180 до +180");
      return;
    }

    const currentPoint = {
      name: "Обрана точка",
      state: `Широта: ${lat}`,
      country: `Довгота: ${lon}`,
      lat: lat,
      lon: lon,
      isManual: true,
    };

    try {
      // Перший запит — точні координати
      setNearbySearchStatus("🔍 Шукаємо за вказаними координатами...");
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=10&appid=${API_KEY}`,
      );
      const data = await response.json();

      if (data && data.length > 0) {
        // Знайшли результати одразу
        setCoordinateSuggestions([currentPoint, ...data]);
        setShowCoordinateSuggestions(true);
        setNearbySearchStatus("");
        return;
      }

      // Не знайшли — запускаємо спіральний пошук
      setIsSearchingNearby(true);
      setShowCoordinateSuggestions(true);
      setCoordinateSuggestions([currentPoint]);
      setNearbySearchStatus("🌍 Нічого не знайшли точно — шукаємо найближче...");

      const TIMEOUT_MS = 10000;
      const startTime = Date.now();
      let found = false;

      // Спіраль: спочатку по довготі (±1,±2,...), потім по широті
      outer: for (let delta = 1; delta <= 15 && !found; delta++) {
        // Кандидати: ±delta по lon, потім ±delta по lat
        const candidates = [
          [lat, Math.max(-180, Math.min(180, lon + delta))],
          [lat, Math.max(-180, Math.min(180, lon - delta))],
          [Math.max(-90, Math.min(90, lat + delta)), lon],
          [Math.max(-90, Math.min(90, lat - delta)), lon],
        ];

        for (const [tryLat, tryLon] of candidates) {
          if (Date.now() - startTime >= TIMEOUT_MS) break outer;

          setNearbySearchStatus(
            `🔎 Перевіряємо: ±${delta}° (шир: ${tryLat.toFixed(1)}°, довг: ${tryLon.toFixed(1)}°)...`
          );

          try {
            const tryRes = await fetch(
              `https://api.openweathermap.org/geo/1.0/reverse?lat=${tryLat}&lon=${tryLon}&limit=4&appid=${API_KEY}`,
            );
            const tryData = await tryRes.json();

            if (tryData && tryData.length > 0) {
              setCoordinateSuggestions([currentPoint, ...tryData]);
              setNearbySearchStatus(`✅ Знайдено поруч (відхилення ~${delta}°)`);
              found = true;
              break outer;
            }
          } catch (e) {
            // ігноруємо помилки окремих запитів
          }
        }
      }

      if (!found) {
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
        setNearbySearchStatus(
          `⚠️ Пошук завершено (${elapsed}с) — навколо немає населених пунктів. Можна додати точку вручну.`
        );
      }
    } catch (error) {
      console.error("Помилка при пошуку за координатами:", error);
      setCoordinateSuggestions([currentPoint]);
      setShowCoordinateSuggestions(true);
      setNearbySearchStatus("❌ Помилка запиту. Спробуйте ще раз.");
    } finally {
      setIsSearchingNearby(false);
    }
  };

  const handleSelectCoordinateResult = (city) => {
    if (cooldown > 0) return;

    const cityObj = {
      name: city.name,
      fullName: `${city.name}${city.state ? `, ${city.state}` : ""} (${city.country})`,
      lat: city.lat,
      lon: city.lon,
    };
    onAddCity(cityObj);
    window.dispatchEvent(new CustomEvent('domino-next-step-auto'));
    
    // Встановлення перезарядки на 10 секунд
    setCooldown(10);
    localStorage.setItem("hero_cooldown_until", Date.now() + 10000);
    
    setLatitude("");
    setLongitude("");
    setShowCoordinateSuggestions(false);
    setCoordinateSuggestions([]);
  };

  const handleSelect = (city) => {
    if (cooldown > 0) return;

    const cityObj = {
      name: city.name,
      fullName: `${city.name}${city.state ? `, ${city.state}` : ""} (${city.country})`,
      lat: city.lat,
      lon: city.lon,
    };
    onAddCity(cityObj);
    window.dispatchEvent(new CustomEvent('domino-next-step-auto'));
    setCooldown(9);
    localStorage.setItem("hero_cooldown_until", Date.now() + 9000);
    
    setInputValue("");
    setSuggestions([]);
    setShowList(false);
  };

  const handleAddDay = () => {
    if (newDayInput.date && customHolidayName) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selectedDate = new Date(newDayInput.date);

      if (selectedDate < today) {
        alert("Неможливо додати подію в минулому!");
        return;
      }

      if (customHolidayName.length > 12) {
        alert("Назва свята занадто довга (макс. 12 символів)!");
        return;
      }

      dispatch(
        addCustomDay({ date: newDayInput.date, reason: customHolidayName }),
      );
      setNewDayInput({ ...newDayInput, date: "" });
      setCustomHolidayName("");
    }
  };

  // Перевірка типу свята та кольору для ефектів
  const todayHolidayInfo = useMemo(() => {
    const now = new Date();
    const todayStr = now.toISOString().split("T")[0];

    // 1. Пріоритет: День народження (Червоний)
    if (user?.birthDate) {
      const [, uMonth, uDay] = user.birthDate.split("-");
      if (
        now.getDate() === parseInt(uDay) &&
        now.getMonth() + 1 === parseInt(uMonth)
      ) {
        return {
          active: true,
          color: "#ff5252",
          label: "З ДНЕМ НАРОДЖЕННЯ! 🎂",
        };
      }
    }
    const customDay = customDays.find((day) => day.date === todayStr);
    if (customDay) {
      return {
        active: true,
        color: "#fff59d",
        label: customDay.reason.toUpperCase() + "! 🎉",
      };
    }

    const dayOfWeek = now.getDay(); // 0 - Sun, 6 - Sat
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return { active: true, color: "#ffff00" };
    }

    return { active: false, color: "#fff59d", label: "" };
  }, [customDays, user]);

  const isTodayHoliday = todayHolidayInfo.active;

  // Генерація позицій для світлячків
  const fireflies = useMemo(() => {
    if (!isTodayHoliday) return [];
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      x: `${(Math.random() - 0.5) * 100}px`,
      y: `${(Math.random() - 0.5) * 100}px`,
      duration: `${3 + Math.random() * 4}s`,
      delay: `${Math.random() * 5}s`,
    }));
  }, [isTodayHoliday]);

  return (
    <HeroDiv>
      <svg
        width="0"
        height="0"
        style={{
          position: "absolute",
          pointerEvents: "none",
          visibility: "hidden",
        }}
      >
        <filter id="pixelate-hero" x="0" y="0" width="100%" height="100%">
          <feFlood x="0" y="0" height="1" width="1" />
          <feComposite
            width={Math.max(1, heroBgPixelation * 2)}
            height={Math.max(1, heroBgPixelation * 2)}
          />
          <feTile result="tiles" />
          <feComposite in="SourceGraphic" in2="tiles" operator="in" />
          <feMorphology operator="dilate" radius={heroBgPixelation} />
        </filter>
      </svg>
      <BgLayer
        $isStickyBgMode={isStickyBgMode}
        $image={heroBg}
        $active={heroBgMode === "static" || activeLayer === 1}
        $transition={slideshowTransition}
        $zoom={heroBgZoom}
        $rotation={heroBgRotation}
        $rotationScale={rotationScale}
        $blur={heroBgBlur}
        $pixelation={heroBgPixelation}
        $blurType={heroBgBlurType}
        $focalX={heroBgFocal1?.x || 50}
        $focalY={heroBgFocal1?.y || 50}
        $panEnabled={heroBgPanEnabled && heroBgZoom > 1}
        $panSpeed={heroBgPanSpeed}
        $videoStart={allBgs.find((b) => b.src === heroBg)?.start}
        $videoEnd={allBgs.find((b) => b.src === heroBg)?.end}
        $videoPlaybackSpeed={videoPlaybackSpeed}
      />
      <BgLayer
        $isStickyBgMode={isStickyBgMode}
        $image={heroBg2}
        $active={
          (heroBgMode === "slideshow-2" ||
            heroBgMode === "slideshow-3" ||
            heroBgMode === "slideshow-4" ||
            heroBgMode === "random") &&
          activeLayer === 2
        }
        $transition={slideshowTransition}
        $zoom={heroBgZoom}
        $rotation={heroBgRotation}
        $rotationScale={rotationScale}
        $blur={heroBgBlur}
        $pixelation={heroBgPixelation}
        $blurType={heroBgBlurType}
        $focalX={heroBgFocal2?.x || 50}
        $focalY={heroBgFocal2?.y || 50}
        $panEnabled={heroBgPanEnabled && heroBgZoom > 1}
        $panSpeed={heroBgPanSpeed}
        $videoStart={allBgs.find((b) => b.src === heroBg2)?.start}
        $videoEnd={allBgs.find((b) => b.src === heroBg2)?.end}
      />
      <BgLayer
        $isStickyBgMode={isStickyBgMode}
        $image={heroBg3}
        $active={
          (heroBgMode === "slideshow-3" || heroBgMode === "slideshow-4") &&
          activeLayer === 3
        }
        $transition={slideshowTransition}
        $zoom={heroBgZoom}
        $rotation={heroBgRotation}
        $rotationScale={rotationScale}
        $blur={heroBgBlur}
        $pixelation={heroBgPixelation}
        $blurType={heroBgBlurType}
        $focalX={heroBgFocal3?.x || 50}
        $focalY={heroBgFocal3?.y || 50}
        $panEnabled={heroBgPanEnabled && heroBgZoom > 1}
        $panSpeed={heroBgPanSpeed}
        $videoStart={allBgs.find((b) => b.src === heroBg3)?.start}
        $videoEnd={allBgs.find((b) => b.src === heroBg3)?.end}
      />
      <BgLayer
        $isStickyBgMode={isStickyBgMode}
        $image={heroBg4}
        $active={heroBgMode === "slideshow-4" && activeLayer === 4}
        $transition={slideshowTransition}
        $zoom={heroBgZoom}
        $rotation={heroBgRotation}
        $rotationScale={rotationScale}
        $blur={heroBgBlur}
        $pixelation={heroBgPixelation}
        $blurType={heroBgBlurType}
        $focalX={heroBgFocal4?.x || 50}
        $focalY={heroBgFocal4?.y || 50}
        $panEnabled={heroBgPanEnabled && heroBgZoom > 1}
        $panSpeed={heroBgPanSpeed}
        $videoStart={allBgs.find((b) => b.src === heroBg4)?.start}
        $videoEnd={allBgs.find((b) => b.src === heroBg4)?.end}
      />
      <Overlay $opacity={heroOverlayOpacity} $isStickyBgMode={isStickyBgMode} />

      <ChangeBgButton ref={(el) => registerRef('changeBgButton', el)} onClick={() => setIsModalOpen(true)} title="Зміна фону">
        <GiPalette />
      </ChangeBgButton>
      <HeroDecors $image={herotext} $start={startAnimation} />


      <DelayedContent $start={startAnimation}>
        <HeroDecor>
          <HeroFix>
            <HeroFi>
              <HeroDate ref={timezoneMenuRef}>
                {heroDateString}
                <TimezoneButton
                  ref={(el) => registerRef('timezoneButton', el)}
                  onClick={() => setShowTimezoneMenu(!showTimezoneMenu)}
                  title="Змінити часовий пояс"
                >
                  <MdSettingsSuggest/>
                </TimezoneButton>
                {showTimezoneMenu && (
                  <TimezoneMenu>
                    <TimezoneMenuHeader>
                      <TimezoneMenuCloseBtn
                        type="button"
                        onClick={() => setShowTimezoneMenu(false)}
                        title="Закрити"
                        aria-label="Закрити список часових поясів"
                      >
                        ×
                      </TimezoneMenuCloseBtn>
                      <TimezoneMenuTitle>Часовий пояс</TimezoneMenuTitle>
                    </TimezoneMenuHeader>
                    <SortButtonsRow>
                      <SortBtn
                        $active={tzSortMode === "default"}
                        onClick={() => setTzSortMode("default")}
                      >
                        За замовчуванням
                      </SortBtn>
                      <SortBtn
                        $active={tzSortMode === "alpha"}
                        onClick={() => setTzSortMode("alpha")}
                      >
                        А-Я
                      </SortBtn>
                      <SortBtn
                        $active={tzSortMode === "offset"}
                        onClick={() => setTzSortMode("offset")}
                      >
                        UTC +/-
                      </SortBtn>
                    </SortButtonsRow>
                    <div style={{ flex: 1, overflowY: "auto", padding: "0 8px 16px" }}>
                    {sortedTimezones.map((tz) => {
                      const isSelected =
                        selectedTimezone === tz.value ||
                        (tz.value === "custom_input" && showCustomInput);
                      const info = getTzTimeInfo(tz.value);
                      return (
                        <TimezoneOption
                          key={tz.value}
                          $selected={isSelected}
                          onClick={() => {
                            if (tz.value === "custom_input") {
                              setShowCustomInput(true);
                              const isCurrentPredefined = TIMEZONES.some(
                                (t) => t.value === selectedTimezone,
                              );
                              if (!isCurrentPredefined) {
                                setCustomTimezoneInputValue(selectedTimezone);
                              } else {
                                setCustomTimezoneInputValue("");
                              }
                            } else {
                              setShowCustomInput(false);
                              setSelectedTimezone(tz.value);
                              localforage.setItem(
                                "selected_timezone",
                                tz.value,
                              );
                              setShowTimezoneMenu(false);
                            }
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              width: "100%",
                            }}
                          >
                            <span>{tz.label}</span>
                            {info && (
                              <span
                                style={{
                                  fontSize: "12px",
                                  opacity: 0.9,
                                  whiteSpace: "nowrap",
                                  marginLeft: "12px",
                                  color: info.isDay ? "#ffd54f" : "#90caf9",
                                }}
                              >
                                {info.isDay ? "☀️" : "🌙"} {info.timeStr}
                              </span>
                            )}
                          </div>
                        </TimezoneOption>
                      );
                    })}
                    {showCustomInput && (
                      <div style={{ padding: "12px 0" }}>
                        <input
                          type="text"
                          value={customTimezoneInputValue}
                          onChange={(e) =>
                            setCustomTimezoneInputValue(e.target.value)
                          }
                          placeholder="Наприклад: Europe/Warsaw"
                          style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ffb36c",
                            background: "#111",
                            color: "#fff",
                            fontSize: "14px",
                            boxSizing: "border-box",
                            marginBottom: "8px",
                          }}
                        />
                        <button
                          onClick={() => {
                            if (customTimezoneInputValue.trim()) {
                              try {
                                Intl.DateTimeFormat("en", {
                                  timeZone: customTimezoneInputValue.trim(),
                                });
                                setSelectedTimezone(
                                  customTimezoneInputValue.trim(),
                                );
                                localforage.setItem(
                                  "selected_timezone",
                                  customTimezoneInputValue.trim(),
                                );
                                setShowTimezoneMenu(false);
                              } catch (e) {
                                alert(
                                  "Невірний формат часового поясу. Спробуйте, наприклад, 'Europe/Kyiv' або 'America/New_York'.",
                                );
                              }
                            } else {
                              alert("Будь ласка, введіть часовий пояс.");
                            }
                          }}
                          style={{
                            width: "100%",
                            padding: "10px",
                            background: "#ffb36c",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            fontSize: "14px",
                            color: "#1e1e1e",
                          }}
                        >
                          Застосувати
                        </button>
                      </div>
                    )}
                    </div>
                  </TimezoneMenu>
                )}
              </HeroDate>
            </HeroFi>
          </HeroFix>
        </HeroDecor>
        <SearchWrapper ref={searchRef}>

          {searchMode === "city" ? (
            <HeroFormater>
              <SearchContainer>
                <ModePicker>
                  <ModeIconBtn
                    onClick={() => setShowModeDropdown((v) => !v)}
                    title="Вибрати режим пошуку"
                  >
                    🏠
                  </ModeIconBtn>
                  {showModeDropdown && (
                    <ModeDropdown>
                      <ModeDropdownItem $active={searchMode === "city"} onClick={() => { setSearchMode("city"); setShowModeDropdown(false); setLatitude(""); setLongitude(""); setSuggestions([]); setShowList(false); }}>
                        🏠 За назвою міста
                      </ModeDropdownItem>
                      <ModeDropdownItem $active={searchMode === "coordinates"} onClick={() => { setSearchMode("coordinates"); setShowModeDropdown(false); setInputValue(""); setSuggestions([]); setShowList(false); }}>
                        📍 Координати
                      </ModeDropdownItem>
                      <ModeDropdownItem $active={searchMode === "links"} onClick={() => { setSearchMode("links"); setShowModeDropdown(false); setInputValue(""); setSuggestions([]); setShowList(false); setExpandedLinkId(null); }}>
                        🔗 Посилання
                      </ModeDropdownItem>
                    </ModeDropdown>
                  )}
                </ModePicker>
                <HeroInput
                  ref={(el) => registerRef('heroInput', el)}
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    window.dispatchEvent(new CustomEvent('domino-hero-input-change', { detail: { value: e.target.value } }));
                  }}
                  onFocus={() => suggestions.length > 0 && setShowList(true)}
                  placeholder={
                    cooldown > 0
                      ? `Зачекайте ${cooldown} сек...`
                      : "Уведіть місто, село."
                  }
                  disabled={cooldown > 0}
                  type="text"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  name="hero-city-search"
                  inputMode="search"
                  enterKeyHint="search"
                  aria-label="Пошук міста"
                  data-form-type="other"
                  data-lpignore="true"
                />
                {showList && suggestions.length > 0 && (
                  <SuggestionsList>
                    {suggestions.map((city, index) => (
                      <SuggestionItem
                        key={`${city.lat}-${city.lon}-${index}`}
                        onClick={() => handleSelect(city)}
                      >
                         {city.name}
                        {city.state ? `, ${city.state}` : ""} ({city.country})
                        <br />
                        <span style={{ fontSize: "0.85em", color: "#666" }}>
                          {city.lat.toFixed(2)}°, {city.lon.toFixed(2)}°
                        </span>
                      </SuggestionItem>
                    ))}

                    {hasMore ? (
                      <LoadMoreButton onClick={handleLoadMore}>
                        ⬇ Завантажити ще варіанти
                      </LoadMoreButton>
                    ) : (
                      <LoadMoreButton disabled>Кінець списку</LoadMoreButton>
                    )}
                  </SuggestionsList>
                )}
                <HeroButton
                  onClick={() => {
                    if (cooldown === 0 && suggestions[0])
                      handleSelect(suggestions[0]);
                  }}
                  disabled={cooldown > 0}
                >
                  {cooldown > 0 ? cooldown : "⌕"}
                </HeroButton>
              </SearchContainer>
            </HeroFormater>
          ) : searchMode === "links" ? (
            <HeroFormater>
              <SearchContainer>
                <ModePicker>
                  <ModeIconBtn
                    onClick={() => setShowModeDropdown((v) => !v)}
                    title="Вибрати режим пошуку"
                  >
                    🔗
                  </ModeIconBtn>
                  {showModeDropdown && (
                    <ModeDropdown>
                      <ModeDropdownItem $active={searchMode === "city"} onClick={() => { setSearchMode("city"); setShowModeDropdown(false); setLatitude(""); setLongitude(""); setSuggestions([]); setShowList(false); }}>
                        🏠 За назвою міста
                      </ModeDropdownItem>
                      <ModeDropdownItem $active={searchMode === "coordinates"} onClick={() => { setSearchMode("coordinates"); setShowModeDropdown(false); setInputValue(""); setSuggestions([]); setShowList(false); }}>
                        📍 Координати
                      </ModeDropdownItem>
                      <ModeDropdownItem $active={searchMode === "links"} onClick={() => { setSearchMode("links"); setShowModeDropdown(false); setInputValue(""); setSuggestions([]); setShowList(false); setExpandedLinkId(null); }}>
                        🔗 Посилання
                      </ModeDropdownItem>
                    </ModeDropdown>
                  )}
                </ModePicker>
                <div style={{ position: 'relative', flex: 1 }}>
                  <HeroInput
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Корисні сайти, ігри, статті Вікіпедії..."
                    type="text"
                    autoComplete="off"
                  />
                  {inputValue && (
                    <ClearButton
                      onClick={() => setInputValue("")}
                      title="Очистити"
                      type="button"
                    >
                      ×
                    </ClearButton>
                  )}
                </div>
                <HeroButton
                  onClick={() => {
                    if (inputValue.trim()) {
                      window.open(
                        "https://www.google.com/search?q=" +
                          encodeURIComponent(inputValue),
                        "_blank",
                      );
                    }
                  }}
                >
                  ⌕
                </HeroButton>
                {inputValue.trim() !== "" || pinnedLinks.length > 0 ? (
                  <LinksDropdown ref={linksDropdownRef} $hasExpanded={expandedLinkId !== null}>
                    {customLinksData
                      .filter((link) => {
                        if (inputValue.trim() === "") {
                          return pinnedLinks.includes(link.id);
                        }
                        const lowerInput = inputValue.toLowerCase();
                        const matchesText =
                          link.title.toLowerCase().includes(lowerInput) ||
                          link.snippet.toLowerCase().includes(lowerInput);
                        const matchesTags =
                          link.tags &&
                          link.tags.some((tag) =>
                            tag.toLowerCase().includes(lowerInput),
                          );
                        return matchesText || matchesTags;
                      })
                      .map((link) => (
                        <AccordionItem key={link.id} data-id={link.id}>
                          <AccordionHeader
                            onClick={() =>
                              setExpandedLinkId(
                                expandedLinkId === link.id ? null : link.id,
                              )
                            }
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "2px",
                                width: "100%",
                              }}
                            >
                              <span style={{ flex: 1, fontSize: "13px" }}>{link.title}</span>
                                <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(link.url, "_blank");
                                }}
                                style={{
                                  padding: "3px 10px",
                                  background: "#ffb36c",
                                  border: "none",
                                  borderRadius: "5px",
                                  cursor: "pointer",
                                  fontWeight: "bold",
                                  color: "#000",
                                  fontSize: "12px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {link.buttonText || "Відкрити"}
                              </button>
                               <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  togglePin(link.id);
                                }}
                                title={
                                  pinnedLinks.includes(link.id)
                                    ? "Відкріпити"
                                    : "Закріпити"
                                }
                                style={{
                                  padding: "0",
                                  background: "transparent",
                                  border: "none",
                                  cursor: "pointer",
                                  fontSize: "16px",
                                }}
                              >
                                {pinnedLinks.includes(link.id) ? <BsPinAngleFill /> : <BsPinAngle />}
                              </button>
                              <span>
                                {expandedLinkId === link.id ? "▲" : "▼"}
                              </span>
                            </div>
                          </AccordionHeader>
                          <AccordionContent
                            $expanded={expandedLinkId === link.id}
                          >
                            {link.tags && (
                              <TagsContainer>
                                {link.tags.map((tag) => (
                                  <Tag key={tag}>#{tag}</Tag>
                                ))}
                              </TagsContainer>
                            )}
                            {((link.images && link.images.length > 0) || link.youtubeTrailer) && (
                              <ImageSlider 
                                images={link.images || []} 
                                youtubeTrailer={link.youtubeTrailer}
                                setFullscreenImage={setFullscreenImage} 
                                imageMap={imageMap} 
                                setFullscreenVideo={setFullscreenVideo}
                              />
                            )}
                            <div>{link.snippet}</div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}

                    {wikipediaResults.map((result) => (
                      <AccordionItem key={result.id} data-id={result.id}>
                        <AccordionHeader
                          onClick={() =>
                            setExpandedLinkId(
                              expandedLinkId === result.id ? null : result.id,
                            )
                          }
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              width: "100%",
                            }}
                          >
                            <span style={{ flex: 1 }}>{result.title}</span>
                                                        <button
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(result.url, "_blank");
                              }}
                              style={{
                                padding: "3px 10px",
                                background: "#00bfff",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontWeight: "bold",
                                color: "#000",
                                fontSize: "12px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Вікіпедія
                            </button>
                            <span style={{ marginLeft: "10px" }}>
                              {expandedLinkId === result.id ? "▲" : "▼"}
                            </span>
                          </div>
                        </AccordionHeader>
                        <AccordionContent
                          $expanded={expandedLinkId === result.id}
                        >
                          <div>{result.snippet}</div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}

                    {isWikipediaLoading && (
                      <div style={{ padding: "10px", color: "#333" }}>
                        Завантажую результати Вікіпедії...
                      </div>
                    )}
                    {customLinksData.filter((link) => {
                      const lowerInput = inputValue.toLowerCase();
                      const matchesText =
                        link.title.toLowerCase().includes(lowerInput) ||
                        link.snippet.toLowerCase().includes(lowerInput);
                      const matchesTags =
                        link.tags &&
                        link.tags.some((tag) =>
                          tag.toLowerCase().includes(lowerInput),
                        );
                      return matchesText || matchesTags;
                    }).length === 0 &&
                      inputValue.trim() !== "" &&
                      wikipediaResults.length === 0 &&
                      !isWikipediaLoading && (
                        <div
                          style={{
                            padding: "15px",
                            textAlign: "center",
                            color: "#333",
                          }}
                        >
                          Нічого не знайдено в закладках та Вікіпедії. <br />
                          <button
                            onClick={() =>
                              window.open(
                                "https://www.google.com/search?q=" +
                                  encodeURIComponent(inputValue),
                                "_blank",
                              )
                            }
                            style={{
                              marginTop: "10px",
                              padding: "5px 10px",
                              background: "#ffb36c",
                              border: "none",
                              borderRadius: "5px",
                              cursor: "pointer",
                              fontWeight: "bold",
                              color: "#000",
                            }}
                          >
                            Шукати в Google
                          </button>
                        </div>
                      )}
                  </LinksDropdown>
                ) : null}
              </SearchContainer>
            </HeroFormater>
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px",
                position: "relative",
              }}
            >
              <CoordinatesContainer style={{ alignItems: "flex-start" }}>
                <ModePicker style={{ alignSelf: "flex-start" }}>
                  <ModeIconBtn
                    onClick={() => setShowModeDropdown((v) => !v)}
                    title="Вибрати режим пошуку"
                    style={{ borderRadius: "8px 0 0 8px", height: "30px" }}
                  >
                    📍
                  </ModeIconBtn>
                  {showModeDropdown && (
                    <ModeDropdown>
                      <ModeDropdownItem $active={searchMode === "city"} onClick={() => { setSearchMode("city"); setShowModeDropdown(false); setLatitude(""); setLongitude(""); setSuggestions([]); setShowList(false); }}>
                        🏠 За назвою міста
                      </ModeDropdownItem>
                      <ModeDropdownItem $active={searchMode === "coordinates"} onClick={() => { setSearchMode("coordinates"); setShowModeDropdown(false); setInputValue(""); setSuggestions([]); setShowList(false); }}>
                        📍 Координати
                      </ModeDropdownItem>
                      <ModeDropdownItem $active={searchMode === "links"} onClick={() => { setSearchMode("links"); setShowModeDropdown(false); setInputValue(""); setSuggestions([]); setShowList(false); setExpandedLinkId(null); }}>
                        🔗 Посилання
                      </ModeDropdownItem>
                    </ModeDropdown>
                  )}
                </ModePicker>
                <CoordinateInput>
                  <input
                    type="number"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    placeholder="Широта: Від -90° до +90°"
                    disabled={cooldown > 0 || isSearchingNearby}
                    min="-90"
                    max="90"
                    step="0.01"
                  />
                </CoordinateInput>
                <CoordinateInput>
                  <input
                    type="number"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    placeholder="Довгота: Від -180° до +180°"
                    disabled={cooldown > 0 || isSearchingNearby}
                    min="-180"
                    max="180"
                    step="0.01"
                  />
                </CoordinateInput>
                <HeroButton
                  onClick={handleSelectByCoordinates}
                  disabled={cooldown > 0 || isSearchingNearby}
                  style={{ alignSelf: "flex-start" }}
                >
                  {cooldown > 0 ? cooldown : isSearchingNearby ? "…" : "⌕"}
                </HeroButton>
              </CoordinatesContainer>

              {/* Статус спірального пошуку */}
              {nearbySearchStatus && (
                <div style={{
                  color: nearbySearchStatus.startsWith("✅") ? "#00e676"
                       : nearbySearchStatus.startsWith("❌") ? "#ff5252"
                       : nearbySearchStatus.startsWith("⚠️") ? "#ffb36c"
                       : "#00eaff",
                  fontSize: "11px",
                  fontWeight: "bold",
                  textAlign: "center",
                  padding: "4px 10px",
                  background: "rgba(0,0,0,0.65)",
                  borderRadius: "6px",
                  maxWidth: "340px",
                  margin: "4px auto 0",
                  backdropFilter: "blur(4px)",
                  lineHeight: 1.4,
                }}>
                  {isSearchingNearby && (
                    <span style={{ marginRight: "6px" }}>⟳</span>
                  )}
                  {nearbySearchStatus}
                </div>
              )}

              {showCoordinateSuggestions && (
                <SuggestionsList
                  style={{
                    width: "auto",
                    minWidth: "300px",
                    marginTop: "6px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    position: "absolute",
                  }}
                >
                  <div
                    style={{
                      color: "#333",
                      fontWeight: "bold",
                      marginBottom: "6px",
                      textAlign: "center",
                      fontSize: "12px",
                    }}
                  >
                    {isSearchingNearby
                      ? "🔄 Шукаємо поруч…"
                      : coordinateSuggestions.length > 1
                        ? "📍 Знайдено поруч з координатами:"
                        : "📍 Лише точка за координатами (міст не знайдено)"}
                  </div>
                  {coordinateSuggestions.map((city, index) => (
                    <SuggestionItem
                      key={`${city.lat}-${city.lon}-${index}`}
                      onClick={() => handleSelectCoordinateResult(city)}
                    >
                       {city.name}
                      {city.state ? `, ${city.state}` : ""} ({city.country})
                      <br />
                      <span style={{ fontSize: "0.85em", color: "#666" }}>
                        {city.lat.toFixed(2)}°, {city.lon.toFixed(2)}°
                      </span>
                    </SuggestionItem>
                  ))}
                  <button
                    onClick={() => {
                      setShowCoordinateSuggestions(false);
                      setCoordinateSuggestions([]);
                      setNearbySearchStatus("");
                    }}
                    style={{
                      width: "100%",
                      padding: "8px",
                      background: "#f0f0f0",
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      cursor: "pointer",
                      marginTop: "10px",
                      fontSize: "12px",
                    }}
                  >
                    ✕ Закрити
                  </button>
                </SuggestionsList>
              )}
            </div>
          )}
        </SearchWrapper>
        
        <div style={{ marginTop: "250px", zIndex: 90 }}>
          <News user={user} isDarkMode={isDarkMode} isStickyBgMode={isStickyBgMode} />
        </div>
      </DelayedContent>
      {isModalOpen && (
        <ModalOverlay $isClosing={isClosing} onClick={handleCloseModal}>
          <ModalContent
            $isClosing={isClosing}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1px",
              }}
            >
              <h2 style={{ color: "#fff", margin: 0, fontSize: "14px", color: "orange"}}>
                Налаштування фону, вигляду
              </h2>
              <div style={{ display: "flex", gap: "1px" }}>
                <CloseBtn
                  onClick={resetBgSettings}
                  style={{
                    padding: "4px 8px",
                    fontSize: "12px",
                    height: "auto",
                  }}
                >
                  Скинути
                </CloseBtn>
                <CloseBtn
                  onClick={handleCloseModal}
                  style={{
                    padding: "4px 8px",
                    fontSize: "16px",
                    height: "auto",
                  }}
                >
                  ✖
                </CloseBtn>
              </div>
            </div>
            <ModalConfigGrid>
              <ConfigRow>
                <label>🎞️ Режим зміни фону:</label>
                <div style={{ display: "flex", gap: "5px", width: "100%" }}>
                  <select
                    value={heroBgMode}
                    onChange={(e) => {
                      setHeroBgMode(e.target.value);
                      if (e.target.value === "random") {
                        const shuffled = shuffleArray(allBgs);
                        setRandomBgsList(shuffled);
                        setRandomCurrentIndex(0);
                        if (shuffled[0]) {
                          handleSelectBg(shuffled[0].src);
                        }
                      }
                      setActiveLayer(1);
                    }}
                    style={{                
                      background: "#000",
                      color: "#fff",
                      fontSize: "11px",
                      border: "1px solid #555",
                      borderRadius: "2px",
                      padding: "1px",
                      flex: 1,
                    }}
                  >
                    <option value="static">Статичний (1 фото)</option>
                    <option value="slideshow-2">Слайд-шоу (2 фото)</option>
                    <option value="slideshow-3">Слайд-шоу (3 фото)</option>
                    <option value="slideshow-4">Слайд-шоу (4 фото)</option>
                    <option value="random">Випадковий (усі фото)</option>
                  </select>
                  {heroBgMode === "random" && (
                    <button
                      onClick={() => {
                        const shuffled = shuffleArray(allBgs);
                        setRandomBgsList(shuffled);
                        setRandomCurrentIndex(0);
                        if (shuffled[0]) {
                          handleSelectBg(shuffled[0].src);
                          setActiveLayer(1);
                        }
                      }}
                      title="Перемішати та скинути чергу"
                      style={{
                        background: "#ffb36c",
                        border: "none",
                        borderRadius: "2px",
                        color: "#000",
                        padding: "1px 8px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "11px",
                        whiteSpace: "nowrap",
                      }}
                    >
                    Скинути
                    </button>
                  )}
                </div>
              </ConfigRow>
              <ConfigRow>
                <label>
                  Затемнення: {(heroOverlayOpacity * 100).toFixed(0)}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="0.8"
                  step="0.05"
                  value={heroOverlayOpacity}
                  onChange={(e) =>
                    setHeroOverlayOpacity(parseFloat(e.target.value))
                  }
                />
              </ConfigRow>
              <ConfigRow>
                <label>Наближення: {heroBgZoom.toFixed(2)}x</label>
                <input
                  type="range"
                  min="1"
                  max="2"
                  step="0.01"
                  value={heroBgZoom}
                  onChange={(e) => setHeroBgZoom(parseFloat(e.target.value))}
                />
              </ConfigRow>
              <ConfigRow>
                <label>🎭 Ефект фокусу:</label>
                <div style={{ display: "flex", gap: "3px" }}>
                  <ModeButton
                    $active={heroBgBlurType === "smooth"}
                    onClick={() => {
                      setHeroBgBlurType("smooth");
                      setHeroBgPixelation(0);
                    }}
                    style={{ flex: 1, fontSize: "10px", padding: "2px" }}
                  >
                    Плавне
                  </ModeButton>
                  <ModeButton
                    $active={heroBgBlurType === "pixelated"}
                    onClick={() => setHeroBgBlurType("pixelated")}
                    style={{ flex: 1, fontSize: "10px", padding: "2px" }}
                  >
                    Піксельне
                  </ModeButton>
                </div>
              </ConfigRow>
              <ConfigRow>
                <label>🔄 Розворот: {heroBgRotation}°</label>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  step="1"
                  value={heroBgRotation}
                  onChange={(e) => setHeroBgRotation(parseInt(e.target.value))}
                />
              </ConfigRow>
              <ConfigRow>
                <label>Розмиття: {heroBgBlur.toFixed(1)}px</label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="0.5"
                  value={heroBgBlur}
                  onChange={(e) => setHeroBgBlur(parseFloat(e.target.value))}
                />
              </ConfigRow>
              <ConfigRow
                style={{ opacity: heroBgBlurType === "pixelated" ? 1 : 0.4 }}
              >
                <label>Пікселізація: {heroBgPixelation.toFixed(1)}</label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="0.2"
                  value={heroBgPixelation}
                  disabled={heroBgBlurType !== "pixelated"}
                  onChange={(e) =>
                    setHeroBgPixelation(parseFloat(e.target.value))
                  }
                />
              </ConfigRow>
            </ModalConfigGrid>

            {(heroBgMode === "slideshow-2" ||
              heroBgMode === "slideshow-3" ||
              heroBgMode === "slideshow-4" ||
              heroBgMode === "random") && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <ModalDivider />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "3px",
                  }}
                >
                  <ConfigRow>
                    <label>
                      Інтервал:{" "}
                      {slideshowInterval >= 60
                        ? `${Math.floor(slideshowInterval / 60)}хв ${slideshowInterval % 60 > 0 ? (slideshowInterval % 60) + "с" : ""}`
                        : `${slideshowInterval}с`}
                    </label>
                    <input
                      type="range"
                      min="4"
                      max="300"
                      step="1"
                      value={slideshowInterval}
                      onChange={(e) =>
                        setSlideshowInterval(parseInt(e.target.value))
                      }
                    />
                  </ConfigRow>
                  <ConfigRow>
                    <label>Перехід: {slideshowTransition}с</label>
                    <input
                      type="range"
                      min="0.5"
                      max="1"
                      step="0.1"
                      value={slideshowTransition}
                      onChange={(e) =>
                        setSlideshowTransition(parseFloat(e.target.value))
                      }
                    />
                  </ConfigRow>
                  <ConfigRow>
                    <label>Швидкість відео: {videoPlaybackSpeed}x</label>
                    <input
                      type="range"
                      min="0.25"
                      max="2"
                      step="0.25"
                      value={videoPlaybackSpeed}
                      onChange={(e) =>
                        setVideoPlaybackSpeed(parseFloat(e.target.value))
                      }
                    />
                  </ConfigRow>
                </div>
              </div>
            )}

            <ModalDivider />
            <ModalSectionTitle>Бібліотека зображень</ModalSectionTitle>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "5px",
              }}
            >
              <ModalSearchInput
                placeholder="Пошук картин за назвою..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setVisibleBgCount(300);
                }}
              />
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <label style={{ fontSize: "12px" }}>Категорія:</label>
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    style={{
                      background: "#000",
                      fontSize: "11px",
                      color: "#fff",
                      border: "1px solid #555",
                      borderRadius: "2px",
                      padding: "1px",
                    }}
                  >
                    <option value="all">Усі</option>
                    <option value="Дракони">Дракони</option>
                    <option value="Стихія">Стихія та тварини</option>
                    <option value="Локації">Локації і предмети</option>
                    <option value="Фентезі">Фентезі</option>
                    <option value="Хоррор">Хоррор</option>
                    <option value="Майбутне">Песимізм</option>
                    <option value="Скріншоти">Скріншоти</option>
                    <option value="custom">Ваші завантажені</option>
                  </select>
                </div>
                <div
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <label style={{ fontSize: "12px" }}>Сортувати:</label>
                  <select
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                    style={{
                     background: "#000",
                      color: "#fff",
                      border: "1px solid #555",
                      borderRadius: "2px",
                      fontSize: "11px",
                      padding: "1px",
                    }}
                  >
                    <option value="rating">За рейтингом</option>
                    <option value="az">Назва А-Я</option>
                    <option value="za">Назва Я-А</option>
                  </select>
                </div>
              </div>
            </div>

            <BgGrid>
              {pagedBgs.map((bg, idx) => {
                const rating = bgRatings[bg.src] || 0;
                const qIndex = randomBgsList.findIndex((item) => item.src === bg.src);
                return (
                  <BgItem
                    key={idx}
                    $active={heroBg === bg.src || heroBg2 === bg.src}
                  >
                    <RatingOverlay>
                      <HeartIcon
                        $color={
                          rating === 2 ? "gold" : rating === 1 ? "red" : "white"
                        }
                        onClick={() => handleRate(bg.src)}
                      >
                        {rating === 2 ? "💛" : rating === 1 ? "❤️" : "🤍"}
                      </HeartIcon>
                      {bg.description && (
                        <HeartIcon
                          $color="#aef"
                          title="Опис картини"
                          onClick={(e) => {
                            e.stopPropagation();
                            setDescriptionModal({
                              name: bg.name,
                              text: bg.description,
                              src: bg.src,
                              author: bg.author,
                              source: bg.source,
                            });
                          }}
                          style={{
                            fontSize: "18px",
                            background: "rgb(7, 7, 7)",
                            borderRadius: "50%",
                            width: 20,
                            height: 20,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          ?
                        </HeartIcon>
                      )}
                    </RatingOverlay>
                    {isCustom(bg.src) && (
                      <>
                        <EditBtn
                          onClick={(e) => {
                            e.stopPropagation();
                            const newName = window.prompt(
                              "Введіть нову назву для цих шпалер:",
                              bg.name,
                            );
                            if (newName) {
                              setCustomHeroBgs((prev) =>
                                prev.map((b) =>
                                  b.src === bg.src
                                    ? { ...b, name: newName }
                                    : b,
                                ),
                              );
                            }
                          }}
                          title="Редагувати назву"
                        >
                          ✎
                        </EditBtn>
                        <DeleteBtn
                          onClick={(e) => {
                            e.stopPropagation();
                            if (
                              window.confirm(`Видалити шпалери "${bg.name}"?`)
                            ) {
                              setCustomHeroBgs((prev) =>
                                prev.filter((b) => b.src !== bg.src),
                              );
                              setBgRatings((prev) => {
                                const newRatings = { ...prev };
                                delete newRatings[bg.src];
                                return newRatings;
                              });
                              if (heroBg === bg.src) setHeroBg(hills);
                              if (heroBg2 === bg.src) setHeroBg2(hills);
                            }
                          }}
                          title="Видалити"
                        >
                          ×
                        </DeleteBtn>
                      </>
                    )}
                    {bg.author && (
                      <TopOverlay>
                        <div style={{ fontWeight: "bold" }}>{bg.author}</div>
                        {bg.source && <div>{bg.source}</div>}
                      </TopOverlay>
                    )}
                    <NameOverlay
                      $hasSlots={
                        heroBgMode === "slideshow-2" ||
                        heroBgMode === "slideshow-3" ||
                        heroBgMode === "slideshow-4"
                      }
                    >
                      {heroBgMode === "random" && qIndex !== -1 && (
                        <span style={{ 
                          color: qIndex === randomCurrentIndex ? "#6cffe4" : "#ffb36c", 
                          marginRight: "6px", 
                          fontWeight: "bold",
                          textShadow: qIndex === randomCurrentIndex ? "0 0 8px #6cffe4" : "none"
                        }}>
                          #{qIndex + 1} {qIndex === randomCurrentIndex && "(Зараз)"}
                        </span>
                      )}
                      {bg.name}
                    </NameOverlay>
                    {isVideoSource(bg.src) ? (
                      <video
                        src={bg.src}
                        muted
                        style={{
                          width: "100%",
                          aspectRatio: "3/2",
                          objectFit: "cover",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => e.target.play()}
                        onMouseLeave={(e) => {
                          e.target.pause();
                          e.target.currentTime = 0;
                        }}
                        onClick={() => handleSelectBg(bg.src)}
                      />
                    ) : (
                      <BgSquare
                        src={bg.src}
                        loading="lazy"
                        onClick={() => handleSelectBg(bg.src)}
                        title={bg.name}
                      />
                    )}
                    {heroBgMode === "slideshow-2" && (
                      <SlotButtons>
                        <SlotBtn
                          $active={heroBg === bg.src}
                          onClick={() => handleSelectBg(bg.src, 1)}
                        >
                          Слот 1
                        </SlotBtn>
                        <SlotBtn
                          $active={heroBg2 === bg.src}
                          onClick={() => handleSelectBg(bg.src, 2)}
                        >
                          Слот 2
                        </SlotBtn>
                      </SlotButtons>
                    )}
                    {heroBgMode === "slideshow-3" && (
                      <SlotButtons>
                        <SlotBtn
                          $active={heroBg === bg.src}
                          onClick={() => handleSelectBg(bg.src, 1)}
                        >
                          Слот 1
                        </SlotBtn>
                        <SlotBtn
                          $active={heroBg2 === bg.src}
                          onClick={() => handleSelectBg(bg.src, 2)}
                        >
                          Слот 2
                        </SlotBtn>
                        <SlotBtn
                          $active={heroBg3 === bg.src}
                          onClick={() => handleSelectBg(bg.src, 3)}
                        >
                          Слот 3
                        </SlotBtn>
                      </SlotButtons>
                    )}
                    {heroBgMode === "slideshow-4" && (
                      <SlotButtons>
                        <SlotBtn
                          $active={heroBg === bg.src}
                          onClick={() => handleSelectBg(bg.src, 1)}
                        >
                          Слот 1
                        </SlotBtn>
                        <SlotBtn
                          $active={heroBg2 === bg.src}
                          onClick={() => handleSelectBg(bg.src, 2)}
                        >
                          Слот 2
                        </SlotBtn>
                        <SlotBtn
                          $active={heroBg3 === bg.src}
                          onClick={() => handleSelectBg(bg.src, 3)}
                        >
                          Слот 3
                        </SlotBtn>
                        <SlotBtn
                          $active={heroBg4 === bg.src}
                          onClick={() => handleSelectBg(bg.src, 4)}
                        >
                          Слот 4
                        </SlotBtn>
                      </SlotButtons>
                    )}
                  </BgItem>
                );
              })}
            </BgGrid>

            {sortedBgs.length > visibleBgCount && (
              <LoadMoreButton
                onClick={() => setVisibleBgCount((prev) => prev + 300)}
              >
                Завантажити ще
              </LoadMoreButton>
            )}

            <ModalDivider />
            <DropZone
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current.click()}
            >
              Перетягніть сюди картинку(відео) або натисніть
              <input
                type="file"
                ref={fileInputRef}
                hidden
                accept="image/*,video/*"
                onChange={(e) => handleFileUpload(e.target.files[0])}
              />
            </DropZone>
          </ModalContent>
        </ModalOverlay>
      )}
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
            padding: "5px",
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
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)",
                zIndex: 2,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 3,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                boxSizing: "border-box",
                padding: "10px",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                <h3 style={{ color: "#ffb36c", margin: 0, fontSize: "20px", fontWeight: "bold", textShadow: "0 2px 4px rgba(0,0,0,0.9)" }}>
                  {descriptionModal.name}
                </h3>
                <button
                  onClick={() => setDescriptionModal(null)}
                  style={{
                    background: "rgba(0,0,0,0.6)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "5px",
                    width: "30px",
                    height: "30px",
                    color: "#fff",
                    fontSize: "30px",
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
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  margin: "5px 0",
                  paddingRight: "5px",
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
                    borderRadius: "8px",
                    backdropFilter: "blur(2px)",
                  }}
                >
                  {descriptionModal.text}
                </p>
              </div>
     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.75)",
                    padding: "8px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    border: "1px solid rgba(255, 179, 108, 0.4)",
                    color: "#ffb36c",
                    fontWeight: "bold",
                    textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                  }}
                >
                   Автор: {descriptionModal.author || "Невідомий"}
                </div>
                {descriptionModal.source && (
                  <div
                    style={{
                      background: "rgba(0, 0, 0, 0.75)",
                      padding: "8px",
                      borderRadius: "8px",
                      fontSize: "13px",
                      border: "1px solid rgba(255, 179, 108, 0.4)",
                      color: "#ffb36c",
                      fontWeight: "bold",
                      textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                    }}
                  >
                    Джерело: {descriptionModal.source}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {fullscreenImage && (
        <FullscreenImageOverlay onClick={() => setFullscreenImage(null)}>
          <FullscreenImage src={fullscreenImage} alt="Fullscreen" />
        </FullscreenImageOverlay>
      )}

      {fullscreenVideo && (
        <FullscreenImageOverlay onClick={() => setFullscreenVideo(null)}>
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{ 
              position: 'relative', 
              width: '90%', 
              maxWidth: '800px', 
              aspectRatio: '16/9', 
              background: '#000', 
              borderRadius: '8px', 
              overflow: 'hidden',
              boxShadow: '0 0 20px rgba(255,255,255,0.2)'
            }}
          >
            <iframe 
              src={fullscreenVideo.includes("embed") ? `${fullscreenVideo}?autoplay=1` : `https://www.youtube.com/embed/${getYoutubeId(fullscreenVideo)}?autoplay=1`} 
              title="YouTube Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
            ></iframe>
            <button 
              onClick={() => setFullscreenVideo(null)} 
              style={{ 
                position: 'absolute', 
                top: '10px', 
                right: '10px', 
                background: 'rgba(0,0,0,0.6)', 
                border: 'none', 
                borderRadius: '50%', 
                width: '30px', 
                height: '30px', 
                color: '#fff', 
                cursor: 'pointer',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 100
              }}
            >
              ×
            </button>
          </div>
        </FullscreenImageOverlay>
      )}
    </HeroDiv>
  );
};
export default Hero;
