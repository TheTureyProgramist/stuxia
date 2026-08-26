import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCustomDay,
  removeCustomDay,
} from "../../features/counter/Counter.js";
import styled, { keyframes, css } from "styled-components";
import InfoModal from "./UserSearchModal.jsx";
import KatSceneModal from "./KatSceneModal";
import { auth, googleProvider } from "../../firebase";
import { linkWithPopup } from "firebase/auth";
import { FaBlackTie } from "react-icons/fa";
const slideIn = keyframes`
  0% { 
    transform: translateY(100%) scale(0.5);
    opacity: 0;
  }
  100% { 
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateY(0%) scale(1); 
    opacity: 1; 
  }
  100% { 
    transform: translateY(100%) scale(0.5); 
    opacity: 0; 
  }
`;
const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const flow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const swapUp = keyframes`
  0%   { transform: translateY(0);   opacity: 1; }
  40%  { transform: translateY(-60px) scale(0.93); opacity: 0.6; }
  100% { transform: translateY(0);   opacity: 1; }
`;

const swapDown = keyframes`
  0%   { transform: translateY(0);   opacity: 1; }
  40%  { transform: translateY(60px) scale(0.93); opacity: 0.6; }
  100% { transform: translateY(0);   opacity: 1; }
`;

const carouselSlideLeft = keyframes`
  0%   { transform: translateX(60px); opacity: 0; }
  100% { transform: translateX(0);    opacity: 1; }
`;

const carouselSlideRight = keyframes`
  0%   { transform: translateX(-60px); opacity: 0; }
  100% { transform: translateX(0);     opacity: 1; }
`;

const AnimatedText = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-weight: bold;
  background: linear-gradient(
    270deg,
    #ff7eb3,
    #ff758c,
    #7afcff,
    #feffb7,
    #58e2c2
  );
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${flow} 5s ease infinite;
  display: inline-block;
  margin-left: 5px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(3px);
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${(props) => (props.$isClosing ? fadeOut : "none")} 0.5s ease-out
    forwards;
`;

const ModalContent = styled.div`
  background: ${(props) => (props.$isDarkMode ? "#2e1d30" : "#d3b0d3")};
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "inherit")};
  border: 2px solid #a929ff;
  border-radius: 10px;
  width: 90%;
  max-width: 1200px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${(props) => (props.$isClosing ? slideOut : slideIn)} 0.5s ease-out
    forwards;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => (props.$isDarkMode ? "#5e3e61" : "#a981a9")};
    border-radius: 10px;
  }
`;

const SectionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  margin-top: -40px;
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const MobileStickyBar = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    gap: 4px;
    position: sticky;
    top: 0;
    z-index: 20;
    background: #8300c9;
    padding: 5px 8px;
    border-radius: 8px;
    margin-bottom: 6px;
    flex-wrap: wrap;
  }
`;

const MobileViewToggle = styled.button`
  padding: 4px 10px;
  border-radius: 6px;
  border: 2px solid ${(props) => (props.$active ? '#ffb36c' : 'rgba(255,255,255,0.3)')};
  background: ${(props) => (props.$active ? '#ffb36c' : 'transparent')};
  color: ${(props) => (props.$active ? '#000' : '#fff')};
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
`;

const CarouselPageBtn = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.$active ? '#ffb36c' : 'rgba(255,255,255,0.4)')};
  background: ${(props) => (props.$active ? '#ffb36c' : 'transparent')};
  color: ${(props) => (props.$active ? '#000' : '#fff')};
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;
`;

const CarouselSlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  animation: ${(props) => (props.$dir === 'left' ? carouselSlideLeft : carouselSlideRight)} 0.3s ease forwards;
`;

const MobileOnlySections = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: -7px;
  right: 2px;
  background: none;
  border: none;
  font-size: 34px;
  cursor: pointer;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#000000")};
  &:hover {
    color: #00e1ff;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px;
  background: ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(129, 39, 255, 0.4)")};
  border-radius: 6px;
  border: 2px solid #a70080;
    ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.5)")};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  min-width: 0;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "inherit")};
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3px;
`;

const Input = styled.input`
  padding: 6px;
  border: 2px solid #000000;
  border-radius: 5px;
  font-size: 13px;
  width: 100%;
  background: transparent;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "black")};
  box-sizing: border-box;
  &::placeholder {
    color: ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.6)" : "#000000")};
    font-style: italic;
    font-weight: 900;
    font-size: 13px;
    opacity: 1;
  }
`;
const ModalFooter = styled.div`
  position: sticky;
  bottom: 0;
  z-index: 10;
  background: #8300c9;
  padding: 1px;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;
const NameInput = styled(Input)`
  caret-color: black;
  font-weight: bold;
  ${(props) => {
    const color = props.$textColor || "inherit";
    const isGradient = color.includes("linear");
    const isAnimated = color.includes("270deg");
    if (isGradient) {
      return css`
        background: ${color};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        ${
          isAnimated &&
          css`
            background-size: 400% 400%;
            animation: ${flow} 5s ease infinite;
          `
        }
      `;
    } else {
      return css`
        color: ${color};
        background: transparent;
        -webkit-background-clip: none;
        -webkit-text-fill-color: currentcolor;
      `;
    }
  }}
`;
const Select = styled.select`
  padding: 4px;
  border: 2px solid
    ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.3)" : "#000000")};
  background: transparent;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "black")};
  border-radius: 5px;
  flex: 1;
  font-weight: 900;
  font-size: 12px;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: #ffb36c;
  }
`;

const DateRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
`;

const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 14px;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "black")};

`;

const TermsBtn = styled.span`
  color: #ff7b00;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
`;
const AvatarOption = styled.div`
  width: 50px;
  height: 60px;
  min-width: 60px;
  border-radius: 50%;
  padding: 3px;
  background: ${(props) =>
    props.$isSelected ? props.$borderColor : "transparent"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.$isSelected &&
    props.$borderColor?.includes("270deg") &&
    css`
      background-size: 400% 400%;
      animation: ${flow} 5s ease infinite;
    `}
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
const AvatarSlider = styled.div`
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;

const ColorContainer = styled.div`
  display: flex;
  gap: 3px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;
const ColorCircle = styled.div`
  width: 30px;
  height: 30px;
  min-width: 30px;
  border-radius: 50%;
  background: ${(props) => props.$color};
  cursor: pointer;
  border: 2px solid ${(props) => (props.$isSelected ? "#000" : "transparent")};
  box-shadow: ${(props) =>
    props.$isSelected ? "0 0 5px rgba(0,0,0,0.5)" : "0 0 2px rgba(0,0,0,0.2)"};
  ${(props) =>
    props.$color.includes("270deg") &&
    css`
      background-size: 400% 400%;
      animation: ${flow} 5s ease infinite;
    `}
`;
const SaveButton = styled.button`
  background: #ffb36c;
  height: 30px;
  border: 5px solid ${(props) => (props.$isDarkMode ? "transparent" : "black")};
  flex: 1;
  color: black;
 border-bottom-right-radius: 10px;
 border-top-right-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CancelButton = styled.button`
  background: transparent;
  height: 30px;
   border-bottom-left-radius: 10px;
 border-top-left-radius: 10px;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "black")};
  flex: 1;
  font-weight: bold;
  border: 5px solid
    ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.5)" : "black")};
  cursor: pointer;
`;
const Title = styled.h3`
  font-weight: 900;
  margin-top: 0px;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "black")};
`;
const PasswordStrengthContainer = styled.div`
  background: rgba(0, 0, 0, 0.1);
  height: 8px;
  border: 2px solid black;
  border-radius: 3px;
  width: 100%;
  overflow: hidden;
`;

const PasswordStrengthBar = styled.div`
  height: 100%;
  border-radius: 3px;
  background-color: ${(props) => props.$color || "transparent"};
  width: ${(props) => props.$width || "0%"};
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
`;

const PasswordStrengthLabel = styled.span`
  font-size: 11px;
  font-weight: bold;
  color: ${(props) => props.$color};
  background: #0000009f;
  align-self: flex-end;
  margin-bottom: 2px;
  border-radius: 2px;
  
`;

const OrderButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid
    ${(props) => (props.disabled ? (props.$isDarkMode ? "#0a0a0a" : "#0c0c0c") : props.$isDarkMode ? "rgba(255, 255, 255, 0.3)" : "#000")};
  background: ${(props) => (props.disabled ? "transparent" : props.$isDarkMode ? "#3e2b42" : "#fff")};
  color: ${(props) => (props.disabled ? (props.$isDarkMode ? "#4c4c4c" : "#5b5b5b") : props.$isDarkMode ? "#fff" : "#000")};
  margin-left: 6px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s;
  box-shadow: ${(props) => (props.disabled ? "none" : props.$isDarkMode ? "0 2px 0 rgba(255,255,255,0.2)" : "0 2px 0 #000")};

  &:hover:not(:disabled) {
    background: #ffb36c;
    color: #000;
    transform: translateY(-1px);
    box-shadow: 0 3px 0
      ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.3)" : "#000")};
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
    box-shadow: 0 0 0
      ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.3)" : "#000")};
  }
`;

const AnimatedSection = styled.div`
  animation: ${(props) =>
    props.$swapAnim === 'up'
      ? css`${swapUp} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`
      : props.$swapAnim === 'down'
      ? css`${swapDown} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`
      : 'none'};
`;
const Label = styled.label`
  font-size: 13px;
  font-weight: bold;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "black")};
`;
const ResetOrderButton = styled.button`
  padding: 2px;
  border-radius: 2px;
    position: absolute;
  top: 6px;
  right: 57px;
  border: 2px solid;
  ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.5)" : "#000")};
  background: transparent;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "black")};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 0
    ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.5)" : "#000")};

  &:hover {
    background: #ffe0b2;
    color: #000;
    transform: translateY(-1px);
    box-shadow: 0 3px 0
      ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.7)" : "#000")};
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 0 0
      ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.7)" : "#000")};
  }
`;

const COLORS = [
  { name: "Сірий", value: "grey" },
  { name: "Фіолетовий", value: "purple" },
  { name: "Червоний", value: "red" },
  {
    name: "Веселковий",
    value: "linear-gradient(45deg, red, orange, yellow, green, blue, purple)",
  },
  {
    name: "Анімований",
    value:
      "linear-gradient(270deg, #ff7eb3, #ff758c, #7afcff, #feffb7, #58e2c2)",
  },
  { name: "Голубий", value: "#00e1ff" },
  { name: "Синій", value: "blue" },
];

const DEFAULT_SECTIONS = [
  "name",
  "birthDate",
  "security",
  "textColor",
  "borderColor",
  "avatar",
  "voiceActing",
  "dateDisplay",
  "interfaceSettings", 
  "weatherLayout",
  "newsLayout",
];
const WEATHER_BLOCK_LABELS = {
  current: "Температура та іконка",
  ai: "Підсумок ШІ",
  hourly: "Годинний графік",
  daily: "Прогноз на 16 днів",
};

const NEWS_BLOCK_LABELS = {
  title: "Заголовок",
  description: "Опис",
};

const UserSettingsModal = ({
  onClose,
  user,
  availableAvatars,
  onUpdate,
  weatherCardLayout,
  isDarkMode = false,
  onUpdateLayout,
  showUpdateTimer,
  setShowUpdateTimer,
}) => {
  const dispatch = useDispatch();
  const customDays = useSelector((state) => state.calendar?.customDays || []);
  const [newDay, setNewDay] = useState({ d: "", m: "", reason: "" });
  // Track which sections are animating and in which direction
  const [swapAnimMap, setSwapAnimMap] = useState({});

  // Mirror/flip state — session only, resets on page reload
  const [mirrorX, setMirrorX] = useState(false); // horizontal flip
  const [mirrorY, setMirrorY] = useState(false); // vertical flip
  useEffect(() => {
    const scaleX = mirrorX ? -1 : 1;
    const scaleY = mirrorY ? -1 : 1;
    if (scaleX === 1 && scaleY === 1) {
      document.documentElement.style.transform = "";
      document.documentElement.style.transformOrigin = "";
    } else {
      document.documentElement.style.transform = `scale(${scaleX}, ${scaleY})`;
      document.documentElement.style.transformOrigin = "center center";
    }
    return () => {
      // cleanup not needed since we always apply on change
    };
  }, [mirrorX, mirrorY]);
  // Mobile view mode: 'scroll' or 'carousel'
  const [mobileViewMode, setMobileViewMode] = useState(
    user?.mobileViewMode || "scroll"
  );
  const [carouselPage, setCarouselPage] = useState(0);
  const [carouselDir, setCarouselDir] = useState('left');
  const SECTIONS_PER_PAGE = 3;

  const [formData, setFormData] = useState({
    name: user?.firstName || "",
    day: "",
    month: "",
    year: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    avatarIndex:
      availableAvatars.indexOf(user?.avatar) !== -1
        ? availableAvatars.indexOf(user?.avatar)
        : user?.avatar &&
            typeof user.avatar === "string" &&
            user.avatar.startsWith("http") &&
            availableAvatars.indexOf(user.avatar) === -1
          ? -1
          : 0,
    textColor: user?.textColor || "grey",
    borderColor: user?.borderColor || "grey",
    fontFamily: user?.fontFamily || "",
    showSeconds: user?.showSeconds !== false,
    dateDisplayMode: user?.dateDisplayMode || "both",
    hour12: user?.hour12 === true,
    voiceActingMode: user?.voiceActingMode || "malyatko",
    showUpdateTimer: showUpdateTimer !== false,
    newsAutoScroll: user?.newsAutoScroll || false,
    syncMutedNews: user?.syncMutedNews || false,
    gestureSensitivity: user?.gestureSensitivity ?? 1.5,
    fastClicks: user?.fastClicks ?? false,
    mobileViewMode: user?.mobileViewMode || "scroll",
  });
  const [showTerms, setShowTerms] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [sectionsOrder, setSectionsOrder] = useState([...DEFAULT_SECTIONS]);
  const [newsLayout, setNewsLayout] = useState(
    user?.newsLayout || [
      { key: "image", visible: true },
      { key: "title", visible: true },
      { key: "description", visible: true },
    ],
  );
 const initialUser = useMemo(() => ({ ...user }), [user]);
  useEffect(() => {
    if (!user) return;
    let initialY = "",
      initialM = "",
      initialD = "";
    if (user.birthDate) {
      if (user.birthDate.includes("-")) {
        [initialY, initialM, initialD] = user.birthDate.split("-");
      } else if (user.birthDate.includes(".")) {
        [initialD, initialM, initialY] = user.birthDate.split(".");
      }
    }

    const avatarIndex =
      availableAvatars.indexOf(user?.avatar) !== -1
        ? availableAvatars.indexOf(user?.avatar)
        : user?.avatar &&
            typeof user.avatar === "string" &&
            user.avatar.startsWith("http")
          ? -1
          : 0;

    setFormData({
      name: user?.firstName || "",
      day: initialD ? String(parseInt(initialD)) : "",
      month: initialM ? String(parseInt(initialM)) : "",
      year: initialY ? String(parseInt(initialY)) : "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      avatarIndex: avatarIndex,
      textColor: user?.textColor || "grey",
      borderColor: user?.borderColor || "grey",
      fontFamily: user?.fontFamily || "",
      showSeconds: user?.showSeconds !== false,
      dateDisplayMode: user?.dateDisplayMode || "both",
      hour12: user?.hour12 === true,
      voiceActingMode: user?.voiceActingMode || "malyatko",
      showUpdateTimer: showUpdateTimer !== false,
      newsAutoScroll: user?.newsAutoScroll || false,
      syncMutedNews: user?.syncMutedNews || false,
      gestureSensitivity: user?.gestureSensitivity ?? 1.5,
      fastClicks: user?.fastClicks ?? false,
    });
  }, [user, availableAvatars, showUpdateTimer]);

  const finishClosing = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setIsClosing(true);
    setTimeout(() => onClose(), 500);
  };

  const handleCancel = (e) => {
    if (e) e.stopPropagation();
    // Відкочуємо зміни в App.js до стану, який був при відкритті вікна
    onUpdate(initialUser);
    finishClosing();
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1909 + 1 },
    (_, i) => currentYear - i,
  );
  const updateLivePreview = (updates) => {
    const newFormData = { ...formData, ...updates };
    setFormData(newFormData);
    if (updates.hasOwnProperty("showUpdateTimer")) {
      setShowUpdateTimer(updates.showUpdateTimer);
    }
    onUpdate({
      ...user,
      firstName: newFormData.name,
      avatar:
        newFormData.avatarIndex === -1
          ? user?.avatar
          : availableAvatars[newFormData.avatarIndex],
      birthDate: `${newFormData.year}-${newFormData.month.toString().padStart(2, "0")}-${newFormData.day.toString().padStart(2, "0")}`,
      textColor: newFormData.textColor,
      borderColor: newFormData.borderColor,
      fontFamily: newFormData.fontFamily,
      showSeconds: newFormData.showSeconds,
      dateDisplayMode: newFormData.dateDisplayMode,
      hour12: newFormData.hour12,
      voiceActingMode: newFormData.voiceActingMode,
      showUpdateTimer: newFormData.showUpdateTimer,
      newsLayout: updates.newsLayout || newsLayout,
      newsAutoScroll: updates.newsAutoScroll ?? newFormData.newsAutoScroll,
      syncMutedNews: updates.syncMutedNews ?? newFormData.syncMutedNews,
      gestureSensitivity:
        updates.gestureSensitivity ?? newFormData.gestureSensitivity,
      fastClicks: updates.fastClicks ?? newFormData.fastClicks,
    });
  };

  const isInvalidDate = useMemo(() => {
    if (!formData.day || !formData.month || !formData.year) return false;
    const date = new Date(formData.year, formData.month - 1, formData.day);
    return (
      date.getFullYear() !== parseInt(formData.year) ||
      date.getMonth() !== parseInt(formData.month) - 1 ||
      date.getDate() !== parseInt(formData.day)
    );
  }, [formData.day, formData.month, formData.year]);

  const formattedBirthDate = useMemo(() => {
    const day = formData.day ? String(formData.day).padStart(2, "0") : "";
    const month = formData.month ? String(formData.month).padStart(2, "0") : "";
    const year = formData.year ? String(formData.year) : "";

    if (!day || !month || !year) return "";
    if (isInvalidDate) return "";

    return `${day}.${month}.${year}`;
  }, [formData.day, formData.month, formData.year, isInvalidDate]);

  const calculateAge = (d, m, y) => {
    if (!d || !m || !y) return null;
    const today = new Date();
    const birth = new Date(y, m - 1, d);
    if (isNaN(birth.getTime())) return null;
    let age = today.getFullYear() - birth.getFullYear();
    const mDiff = today.getMonth() - birth.getMonth();
    if (mDiff < 0 || (mDiff === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  };
  const currentAge = calculateAge(formData.day, formData.month, formData.year);

  const getPasswordStrength = (password) => {
    if (!password) return { width: "0%", color: "transparent", label: "" };
    let score = 0;
    if (password.length >= 6) score += 1;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password) || /[a-z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    if (score <= 2) return { width: "33%", color: "#ff4d4d", label: "Слабкий" };
    if (score <= 4)
      return { width: "66%", color: "#ffb36c", label: "Середній" };
    return { width: "100%", color: "#4caf50", label: "Надійний" };
  };

  const pwStrength = getPasswordStrength(formData.newPassword);

  const handleSubmit = () => {
    if (isInvalidDate) {
      alert("Введена некоректна дата!");
      return;
    }
    if (!formData.day || !formData.month || !formData.year) {
      alert("Будь ласка, виберіть дату народження!");
      return;
    }
    if (formData.newPassword) {
      if (formData.newPassword !== formData.confirmPassword) {
        alert("Нові паролі не збігаються!");
        return;
      }
      if (formData.newPassword.length < 6) {
        alert("Пароль занадто короткий!");
        return;
      }
    }
    onUpdate({
      account: user?.account || formData.name,
      firstName: formData.name,
      avatar:
        formData.avatarIndex === -1
          ? user?.avatar
          : availableAvatars[formData.avatarIndex],
      birthDate: `${formData.year}-${formData.month.toString().padStart(2, "0")}-${formData.day.toString().padStart(2, "0")}`,
      textColor: formData.textColor,
      borderColor: formData.borderColor,
      fontFamily: formData.fontFamily,
      showSeconds: formData.showSeconds,
      dateDisplayMode: formData.dateDisplayMode,
      hour12: formData.hour12,
      voiceActingMode: formData.voiceActingMode,
      showUpdateTimer: formData.showUpdateTimer, // Save new setting
      newsLayout: newsLayout,
      newsAutoScroll: formData.newsAutoScroll,
      syncMutedNews: formData.syncMutedNews,
      gestureSensitivity: formData.gestureSensitivity,
      fastClicks: formData.fastClicks,
      ...(formData.newPassword
        ? {
            oldPassword: formData.oldPassword,
            newPassword: formData.newPassword,
          }
        : {}),
    });
    finishClosing();
  };

  const moveSection = (idx, dir) => {
    const newIdx = idx + dir;
    setSectionsOrder((prev) => {
      const arr = [...prev];
      if (newIdx < 0 || newIdx >= arr.length) return arr;
      [arr[idx], arr[newIdx]] = [arr[newIdx], arr[idx]];
      return arr;
    });
    // Animate both sections simultaneously
    const keyA = sectionsOrder[idx];
    const keyB = sectionsOrder[newIdx];
    if (keyA && keyB) {
      setSwapAnimMap((prev) => ({
        ...prev,
        [keyA]: dir > 0 ? 'down' : 'up',
        [keyB]: dir > 0 ? 'up' : 'down',
      }));
      setTimeout(() => {
        setSwapAnimMap((prev) => {
          const next = { ...prev };
          delete next[keyA];
          delete next[keyB];
          return next;
        });
      }, 420);
    }
  };

  const resetSectionsOrder = () => {
    setSectionsOrder([...DEFAULT_SECTIONS]);
    setCarouselPage(0);
  };

  const moveWeatherBlock = (idx, dir) => {
    const arr = [...weatherCardLayout];
    const newIdx = idx + dir;
    if (newIdx < 0 || newIdx >= arr.length) return;
    [arr[idx], arr[newIdx]] = [arr[newIdx], arr[idx]];
    onUpdateLayout(arr);
  };

  const toggleWeatherBlockVisibility = (key) => {
    const visibleCount = weatherCardLayout.filter((b) => b.visible).length;
    const block = weatherCardLayout.find((b) => b.key === key);

    if (block.visible && visibleCount <= 1) {
      alert("Має бути видимим хоча б один елемент!");
      return;
    }

    const newLayout = weatherCardLayout.map((b) =>
      b.key === key ? { ...b, visible: !b.visible } : b,
    );
    onUpdateLayout(newLayout);
  };

  const toggleNewsBlockVisibility = (key) => {
    if (key === "image") return;

    const newLayout = newsLayout.map((b) =>
      b.key === key ? { ...b, visible: !b.visible } : b,
    );
    setNewsLayout(newLayout);
    updateLivePreview({ newsLayout: newLayout });
  };

  const accepted = true;
  const [showKatScene, setShowKatScene] = useState(false);
  const handleKatSceneClose = () => {
    setShowKatScene(false);
    finishClosing();
  };
  const hasExternalAvatar =
    user?.avatar &&
    typeof user.avatar === "string" &&
    user.avatar.startsWith("http") &&
    availableAvatars.indexOf(user.avatar) === -1;
  const isGoogleAccount = Boolean(user?.email && !user?.password);

  const totalPages = Math.ceil(sectionsOrder.length / SECTIONS_PER_PAGE);

  const handleCarouselPage = (page) => {
    setCarouselDir(page > carouselPage ? 'left' : 'right');
    setCarouselPage(page);
  };

  const renderSectionHeader = (sectionKey, idx, label) => (
    <SectionHeader>
      <Label style={{ fontSize: "13px", fontWeight: "bold" }}>{label}</Label>
      <div style={{ display: "flex"}}>
        <OrderButton
          disabled={idx === 0}
          onClick={() => moveSection(idx, -1)}
          title="Вище"
          style={{ width: "22px", height: "22px", fontSize: "19px", fontWeight: 900 }}
        >
          ⬆
        </OrderButton>
        <OrderButton
          disabled={idx === sectionsOrder.length - 1}
          onClick={() => moveSection(idx, 1)}
          title="Нижче"
          style={{ width: "22px", height: "22px", fontSize: "19px", fontWeight: 900 }}
        >
          ⬇
        </OrderButton>
      </div>
    </SectionHeader>
  );

  // Shared section content renderer — used by both desktop grid and mobile scroll/carousel
  const renderSectionContent = (section, idx) => {
    if (section === "name") {
      return (
        <Section key="name">
          {renderSectionHeader(section, idx, "Ім'я")}
          <NameInput
            $textColor={formData.textColor}
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          {renderSectionHeader(section, idx, "Колір рамки аватара")}
          <ColorContainer>
            {COLORS.map((color, i) => (
              <ColorCircle
                key={i}
                $color={color.value}
                $isSelected={formData.borderColor === color.value}
                title={color.name}
                onClick={() =>
                  setFormData({
                    ...formData,
                    borderColor: color.value,
                  })
                }
              />
            ))}
          </ColorContainer>
          <Input
            placeholder="Власний колір (напр. rgba(255, 0, 0, 0.5) або #ff00ff)"
            value={formData.borderColor}
            onChange={(e) =>
              setFormData({
                ...formData,
                borderColor: e.target.value,
              })
            }
            style={{ marginTop: "5px" }}
          />
        </Section>
      );
    } else if (section === "birthDate") {
      return (
        <Section key="birthDate">
          {renderSectionHeader(
            section,
            idx,
            `Дата народження${currentAge !== null && !isInvalidDate ? `: ${formattedBirthDate} • Вік: ${currentAge}`: ""}`,
          )}
          <DateRow>
            <Select
              value={formData.day}
              onChange={(e) =>
                setFormData({ ...formData, day: e.target.value })
              }
            >
              <option value="">День</option>
              {days.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </Select>
            <Select
              value={formData.month}
              onChange={(e) =>
                setFormData({ ...formData, month: e.target.value })
              }
            >
              <option value="">Місяць</option>
              {months.map((m, i) => (
                <option key={i} value={i + 1}>
                  {m}
                </option>
              ))}
            </Select>
            <Select
              value={formData.year}
              onChange={(e) =>
                setFormData({ ...formData, year: e.target.value })
              }
            >
              <option value="">Рік</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </Select>
          </DateRow>
          {isInvalidDate && (
            <span style={{ color: "red", fontSize: "11px" }}>
              Такої дати не існує!
            </span>
          )}
        </Section>
      );
    } else if (section === "security") {
      return (
        <Section key="security">
          {renderSectionHeader(section, idx, "Безпека")}
          {isGoogleAccount ? (
            <div style={{ fontSize: 13, color: "#444" }}>
              Google-акаунт — змінюйте пароль у налаштуваннях Google.
            </div>
          ) : (
            <>
              <button
                type="button"
                onClick={async () => {
                  if (!auth.currentUser)
                    return alert(
                      "Потрібно авторизуватись в системі!",
                    );
                  try {
                    await linkWithPopup(
                      auth.currentUser,
                      googleProvider,
                    );
                    alert("Google акаунт успішно прив'язано!");
                  } catch (error) {
                    if (
                      error.code === "auth/credential-already-in-use"
                    ) {
                      alert(
                        "Цей Google акаунт вже прив'язаний до іншого профілю!",
                      );
                    } else if (
                      error.code === "auth/cancelled-popup-request" ||
                      error.code === "auth/popup-closed-by-user"
                    ) {
                      // Ігноруємо скасування користувачем
                    } else {
                      alert("Помилка прив'язки: " + error.message);
                    }
                  }
                }}
                style={{
                  background: "#105fdf",
                  border: "2px solid black",
                  color: "white",
                  padding: "5px",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  marginBottom: "3px",
                  fontSize: "14px",
                }}
              >
                 Прив'язати Google
              </button>
              <Input
                type="password"
                placeholder="Поточний пароль"
                disabled
                readOnly
                value="********"
                style={{
                  marginBottom: "2px",
                  opacity: 0.6,
                  cursor: "not-allowed",
                }}
              />
              <Input
                name="settings-new-password"
                type="password"
                placeholder="Новий пароль"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    newPassword: e.target.value,
                  })
                }
                style={{
                  marginBottom: "4px",
                }}
                autoComplete="new-password"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                data-form-type="other"
                data-lpignore="true"
              />
              {formData.newPassword && (
                <>
                  <PasswordStrengthContainer>
                    <PasswordStrengthBar
                      $width={pwStrength.width}
                      $color={pwStrength.color}
                    />
                  </PasswordStrengthContainer>
                  <PasswordStrengthLabel $color={pwStrength.color}>
                    Надійність: {pwStrength.label}
                  </PasswordStrengthLabel>
                </>
              )}
              <Input
                name="settings-confirm-password"
                type="password"
                placeholder="Підтвердіть новий пароль"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  })
                }
                autoComplete="new-password"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                data-form-type="other"
                data-lpignore="true"
              />
            </>
          )}
        </Section>
      );
    } else if (section === "textColor") {
      return (
        <Section key="textColor">
          {renderSectionHeader(section, idx, "Колір тексту")}
          <ColorContainer>
            {COLORS.map((color, i) => (
              <ColorCircle
                key={i}
                $color={color.value}
                $isSelected={formData.textColor === color.value}
                title={color.name}
                onClick={() =>
                  setFormData({ ...formData, textColor: color.value })
                }
              />
            ))}
          </ColorContainer>
          <Input
            placeholder="Власний колір (напр. rgba(255, 0, 0, 0.5) або #ff00ff)"
            value={formData.textColor}
            onChange={(e) =>
              setFormData({ ...formData, textColor: e.target.value })
            }
            style={{ marginTop: "5px" }}
          />
        </Section>
      );
    } else if (section === "borderColor") {
      return null; // borderColor is embedded in the "name" section
    } else if (section === "avatar") {
      return (
        <Section key="avatar">
          {renderSectionHeader(section, idx, "Оберіть аватар")}
          <AvatarSlider>
            {availableAvatars.map((img, i) => (
              <AvatarOption
                key={i}
                $isSelected={formData.avatarIndex === i}
                $borderColor={formData.borderColor}
                onClick={() =>
                  setFormData({ ...formData, avatarIndex: i })
                }
              >
                <img src={img} alt="avatar" />
              </AvatarOption>
            ))}
            {hasExternalAvatar && (
              <AvatarOption
                key="external"
                $isSelected={formData.avatarIndex === -1}
                $borderColor={formData.borderColor}
                title="Google аватарка"
                onClick={() =>
                  setFormData({ ...formData, avatarIndex: -1 })
                }
              >
                <img src={user.avatar} alt="google-avatar" />
              </AvatarOption>
            )}
          </AvatarSlider>
        </Section>
      );
    } else if (section === "voiceActing") {
      return null; // no separate voiceActing section UI in this version
    } else if (section === "dateDisplay") {
      return (
        <Section key="dateDisplay">
          {renderSectionHeader(
            section,
            idx,
            "Налаштування годинника",
          )}
          <CheckboxRow>
            <input
              type="checkbox"
              checked={formData.showSeconds}
              onChange={(e) =>
                updateLivePreview({ showSeconds: e.target.checked })
              }
            />
            <label style={{fontWeight: "900", fontSize: "11px"}}>Показувати секунди (17:23:17)</label>
          </CheckboxRow>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
            }}
          >
            <label style={{ fontSize: "12px", fontWeight: "bold", color: "#000" }}>
              Формат часу
            </label>
            <Select
              value={formData.hour12 ? "12" : "24"}
              onChange={(e) =>
                updateLivePreview({ hour12: e.target.value === "12" })
              }
            >
              <option value="24">24-годинний формат</option>
              <option value="12">12-годинний формат (AM/PM)</option>
            </Select>
            <Select
              value={formData.dateDisplayMode}
              onChange={(e) =>
                updateLivePreview({ dateDisplayMode: e.target.value })
              }
            >
              <option value="both">Час та Дата (разом)</option>
              <option value="time">Тільки Час</option>
              <option value="date">Тільки Дата</option>
            </Select>
          </div>
        </Section>
      );
    } else if (section === "interfaceSettings") {
      return (
        <Section key="interfaceSettings">
          {renderSectionHeader(
            section,
            idx,
            "Налаштування інтерфейсу",
          )}
          <CheckboxRow>
            <input
              type="checkbox"
              checked={formData.showUpdateTimer}
              onChange={(e) =>
                updateLivePreview({
                  showUpdateTimer: e.target.checked,
                })
              }
            />
            <label style={{fontSize: "11px",
              fontWeight: 900}}>Показувати таймер оновлення погоди</label>
          </CheckboxRow>
          <div>
            <label style={{ fontSize: "13px", fontWeight: "bold", color: "#000" }}>
              Власний шрифт (Google Fonts)
            </label>
            <Input
              placeholder="Назва шрифту (напр. Roboto, Open Sans)"
              value={formData.fontFamily}
              onChange={(e) =>
                updateLivePreview({ fontFamily: e.target.value })
              }
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label style={{ fontSize: "13px", color: "#000", fontWeight: "bold" }}>
              Чутливість жестів (свайпи, слайдери)
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.1"
                value={formData.gestureSensitivity}
                onChange={(e) =>
                  updateLivePreview({
                    gestureSensitivity: parseFloat(e.target.value),
                  })
                }
                style={{ flex: 1 }}
              />
              <span
                style={{
                  fontSize: "14px",
                  minWidth: "30px",
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                {formData.gestureSensitivity}x
              </span>
            </div>
          </div>
          <CheckboxRow>
            <input
              type="checkbox"
              checked={formData.fastClicks}
              onChange={(e) =>
                updateLivePreview({ fastClicks: e.target.checked })
              }
            />
            <label style={{fontWeight: 900, fontSize: "11px"}}>Швидкий відгук на кліки (без затримки)</label>
          </CheckboxRow>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "6px", marginTop: "4px" }}>
            <label style={{ fontSize: "12px", fontWeight: "bold", color: "#000", display: "block", marginBottom: "4px" }}>
              🪞 Дзеркальність сайту (скидається при перезавантаженні)
            </label>
            <CheckboxRow>
              <input
                type="checkbox"
                id="mirrorX"
                checked={mirrorX}
                onChange={(e) => setMirrorX(e.target.checked)}
              />
              <label htmlFor="mirrorX" style={{ fontWeight: 900, fontSize: "11px" }}>↔️ По горизонталі (ліво↔право)</label>
            </CheckboxRow>
            <CheckboxRow>
              <input
                type="checkbox"
                id="mirrorY"
                checked={mirrorY}
                onChange={(e) => setMirrorY(e.target.checked)}
              />
              <label htmlFor="mirrorY" style={{ fontWeight: 900, fontSize: "11px" }}>↕️ По вертикалі (верх↕низ)</label>
            </CheckboxRow>
            {(mirrorX || mirrorY) && (
              <button
                onClick={() => { setMirrorX(false); setMirrorY(false); }}
                style={{
                  marginTop: "4px",
                  padding: "4px 10px",
                  background: "#ff4d4d",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  fontSize: "11px",
                  cursor: "pointer"
                }}
              >
                ✖ Прибрати дзеркало
              </button>
            )}
          </div>
        </Section>
      );
    } else if (section === "weatherLayout") {
      return (
        <Section key="weatherLayout">
          {renderSectionHeader(
            section,
            idx,
            "Налаштування картки погоди",
          )}
          <p
            style={{
              fontSize: "11px",
              fontWeight: 900,
              color: "#000",
            }}
          >
            Виберіть, які блоки відображати та в якому порядку.
          </p>
          {weatherCardLayout
            .filter((block) => WEATHER_BLOCK_LABELS[block.key])
            .map((block, bIdx) => (
              <div
                key={block.key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(244, 240, 244, 0.09)",
                  padding: "1px",
                  borderRadius: "8px",
                  marginBottom: "4px",
                }}
              >
                <CheckboxRow style={{ flex: 1 }}>
                  <input
                    type="checkbox"
                    checked={block.visible}
                    onChange={() =>
                      toggleWeatherBlockVisibility(block.key)
                    }
                  />
                  <span style={{ fontSize: "12px", fontWeight: 500 }}>
                    {WEATHER_BLOCK_LABELS[block.key]}
                  </span>
                </CheckboxRow>
                <div style={{ display: "flex" }}>
                  <OrderButton
                    style={{
                      width: "22px",
                      height: "22px",
                      fontWeight: 900,
                      fontSize: "19px",
                    }}
                    disabled={bIdx === 0}
                    onClick={() => moveWeatherBlock(bIdx, -1)}
                  >
                    ⬆
                  </OrderButton>
                  <OrderButton
                    style={{
                      width: "22px",
                      fontWeight: 900,
                      height: "22px",
                      fontSize: "19px",
                    }}
                    disabled={bIdx === weatherCardLayout.length - 1}
                    onClick={() => moveWeatherBlock(bIdx, 1)}
                  >
                    ⬇
                  </OrderButton>
                </div>
              </div>
            ))}
        </Section>
      );
    } else if (section === "newsLayout") {
      return (
        <Section key="newsLayout">
          {renderSectionHeader(section, idx, "Налаштування новин")}
          <p
            style={{
              fontSize: "11px",
              color: "#050505",
              fontWeight: 900
            }}
          >
            Виберіть, які елементи новин відображати.
          </p>
          <CheckboxRow style={{ marginBottom: "6px" }}>
            <input
              type="checkbox"
              checked={formData.syncMutedNews}
              onChange={(e) =>
                updateLivePreview({ syncMutedNews: e.target.checked })
              }
            />
            <span style={{ fontSize: "12px", fontWeight: 500 }}>
              Синхронізувати заглушені новини між
              пристроями
            </span>
          </CheckboxRow>
          {newsLayout
            .filter((block) => block.key !== "image")
            .map((block) => (
              <div
                key={block.key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: "rgba(255, 255, 255, 0.12)",
                  padding: "3px",
                  borderRadius: "5px",
                  marginBottom: "4px",
                }}
              >
                <CheckboxRow style={{ flex: 1 }}>
                  <input
                    type="checkbox"
                    checked={block.visible}
                    onChange={() =>
                      toggleNewsBlockVisibility(block.key)
                    }
                  />
                  <span style={{ fontSize: "12px", fontWeight: 500 }}>
                    {NEWS_BLOCK_LABELS[block.key]}
                  </span>
                </CheckboxRow>
              </div>
            ))}
        </Section>
      );
    }
    return null;
  };

  return (
    <>
      {showKatScene && <KatSceneModal onClose={handleKatSceneClose} />}
      <ModalOverlay $isClosing={isClosing} onClick={() => finishClosing()}>
        <ModalContent
          $isClosing={isClosing}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            style={{
              top: "-4px",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
              background: "violet",
              position: "sticky",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Title>Налаштування</Title>
              <div style={{ fontSize: 12, color: "#000000", fontWeight: "900" }}>
                {user?.email || user?.account}
              </div>
            </div>
            <ResetOrderButton
              style={{ fontSize: "9px" }}
              onClick={resetSectionsOrder}
            >
              Скинути порядок
            </ResetOrderButton>
            <button
              style={{
                color: "#000",
                border: "none",
                marginBottom: "15px",
                marginRight: "28px",
                fontWeight: 600,
                fontSize: 20,
                cursor: "pointer",
              }}
              onClick={() => setShowKatScene(true)}
            >
              📹︎
            </button>
            <CloseButton onClick={handleCancel}>&times;</CloseButton>
          </div>

          {/* Mobile-only sticky bar: view mode + carousel page buttons */}
          <MobileStickyBar>
            <MobileViewToggle
              $active={mobileViewMode === 'scroll'}
              onClick={() => { setMobileViewMode('scroll'); setCarouselPage(0); }}
            >
              📜 Скрол
            </MobileViewToggle>
            <MobileViewToggle
              $active={mobileViewMode === 'carousel'}
              onClick={() => { setMobileViewMode('carousel'); setCarouselPage(0); }}
            >
              🎠 Карусель
            </MobileViewToggle>
            {mobileViewMode === 'carousel' &&
              Array.from({ length: totalPages }).map((_, p) => (
                <CarouselPageBtn
                  key={p}
                  $active={carouselPage === p}
                  onClick={() => handleCarouselPage(p)}
                >
                  {p + 1}
                </CarouselPageBtn>
              ))
            }
          </MobileStickyBar>

          {/* DESKTOP: normal multi-column grid (hidden on mobile via CSS) */}
          <SectionsContainer>
            {sectionsOrder.map((section, idx) => {
              const content = renderSectionContent(section, idx);
              if (!content) return null;
              return (
                <AnimatedSection key={section} $swapAnim={swapAnimMap[section] || null}>
                  {content}
                </AnimatedSection>
              );
            })}
          </SectionsContainer>

          {/* MOBILE: single-column scroll or paged carousel (hidden on desktop via CSS) */}
          <MobileOnlySections>
            {mobileViewMode === 'scroll' ? (
              sectionsOrder.map((section, idx) => {
                const content = renderSectionContent(section, idx);
                if (!content) return null;
                return (
                  <AnimatedSection key={`m-${section}`} $swapAnim={swapAnimMap[section] || null}>
                    {content}
                  </AnimatedSection>
                );
              })
            ) : (
              <CarouselSlideWrapper key={carouselPage} $dir={carouselDir}>
                {sectionsOrder
                  .slice(carouselPage * SECTIONS_PER_PAGE, (carouselPage + 1) * SECTIONS_PER_PAGE)
                  .map((section, idx) => {
                    const realIdx = carouselPage * SECTIONS_PER_PAGE + idx;
                    const content = renderSectionContent(section, realIdx);
                    if (!content) return null;
                    return (
                      <AnimatedSection key={`c-${section}`} $swapAnim={swapAnimMap[section] || null}>
                        {content}
                      </AnimatedSection>
                    );
                  })}
              </CarouselSlideWrapper>
            )}
          </MobileOnlySections>

          <ModalFooter $isDarkMode={isDarkMode}>
            <CheckboxRow>
              <input
                type="checkbox"
                checked={accepted}
                readOnly
                style={{ accentColor: "#ffb36c" }}
              />
              <span style={{fontWeight: "900"}}>
                Ви погодились з{" "}
                <TermsBtn onClick={() => setShowTerms(true)}>Угодою</TermsBtn>
              </span>
            </CheckboxRow>
            <div style={{ display: "flex" }}>
              <CancelButton onClick={handleCancel}>Скасувати</CancelButton>
              <SaveButton onClick={handleSubmit} disabled={isInvalidDate}>
                Зберегти
              </SaveButton>
            </div>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
      {showTerms && (
        <InfoModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
      )}
    </>
  );
};
export default UserSettingsModal;
