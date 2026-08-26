import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaSun } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { GiPalette } from "react-icons/gi";
import { FaAnchorCircleCheck } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { FILTERS, PRESETS } from "./useVisualFilters";
import { FaRocket } from "react-icons/fa6";
import { useDecorator } from "../Decorator/DecoratorContext.jsx";
export const DEFAULT_SITE_SECTIONS = [
  { key: "hero", label: "Головна", path: "hero" },
  { key: "weather", label: "Погода", path: "weather" },
  { key: "map", label: "Кліматична мапа", path: "map" },
  // { key: "puzzles", label: "🧩 Пазли", path: "puzzles" },
  { key: "aihelp", label: "Допомога ШІ", path: "aihelp" },
  // { key: "music", label: "🎵 Музика", path: "music" },
  { key: "fanart", label: "Друкарня", path: "fanart" },
  // { key: "prison", label: "🔒 Prison", path: "prison" },
];

const slideDown = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`;

const slideUp = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-100%); }
`;

const appearScale = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`;

const flow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const LogoActionsRow = styled.div`
  display: flex;
  margin-left: -5px;
  gap: 3px;
`;

const SubsMenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  background: ${(props) =>
    props.$isUltra ? "rgba(113, 0, 151, 0.05)" : "rgba(255, 179, 108, 0.05)"};
  border: 1.5px solid ${(props) => (props.$isUltra ? "#710097" : "#ffb36c")};
  padding: 5px 4px;
  margin-bottom: 5px;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.5s ease;
  text-align: left;

  &:hover {
    background: ${(props) =>
      props.$isUltra ? "rgba(113, 0, 151, 0.15)" : "rgba(255, 179, 108, 0.15)"};
    transform: translateX(5px);
    box-shadow: 0 4px 15px
      ${(props) =>
        props.$isUltra ? "rgba(113, 0, 151, 0.2)" : "rgba(255, 179, 108, 0.2)"};
  }
`;

const SubsIconBox = styled.div`
  width: 32px;
  height: 32px;
  background: #1a1a1a;
  border: 1px solid ${(props) => (props.$isUltra ? "#710097" : "#ffb36c")};
  border-radius: 8px;
  display: grid;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const SubsTextWrapper = styled.div`
  display: grid;
  align-items: center;
  flex-grow: 1;
`;

const SubsAnimatedPart = styled.span`
  grid-area: 1/1;
  font-weight: 800;
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.$show ? 1 : 0)};
  font-size: ${(props) => (props.$isSymbol ? "20px" : "16px")};

  ${(props) =>
    props.$variant === "rainbow" &&
    css`
      background: linear-gradient(
        45deg,
        #ff0000,
        #ff7f00,
        #ffff00,
        #00ff00,
        #0000ff,
        #8b00ff
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `}

  ${(props) =>
    props.$variant === "ultra" &&
    css`
      background: linear-gradient(
        270deg,
        #ff7eb3,
        #ff758c,
        #7afcff,
        #feffb7,
        #58e2c2
      );
      background-size: 400% 400%;
      animation: ${flow} 3s ease infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `}
`;

const ModeToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 7px;
  margin-bottom: 4px;
  background: ${(props) =>
    props.$isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)"};
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.$isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"};
  }
      span {
      font-size: 23px;
      }
`;

const Switch = styled.div`
  position: relative;
  width: 36px;
  height: 20px;
  background: ${(props) => (props.$active ? "#ff005d" : "#ccc")};
  border-radius: 20px;
  transition: 0.3s;

  &::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: ${(props) => (props.$active ? "18px" : "2px")};
    transition: 0.3s;
  }
`;

const BurgerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: ${(props) => (props.$isRendered ? "block" : "none")};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transition: opacity 0.4s ease;
`;

const BurgerMenuPanel = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 95vh;
  overflow-y: auto;
  background: ${(props) => (props.$isDarkMode ? "#1a1a1a83" : "#ffffff8a")};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#1a1a1a")};
  z-index: 1001;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 5px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.$isRendered ? "block" : "none")};
  animation: ${(props) => (props.$isOpen ? slideDown : slideUp)} 0.4s
    cubic-bezier(0.16, 1, 0.3, 1) forwards;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => (props.$isDarkMode ? "rgba(255, 179, 108, 0.5)" : "rgba(255, 0, 93, 0.5)")};
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
  scrollbar-width: thin;
  scrollbar-color: ${(props) => (props.$isDarkMode ? "#ffb36c" : "#ff005d")}
    transparent;
`;

const BurgerCloseBtn = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#1a1a1a")};
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 10px;
    @media (min-width: 768px) {
      top: 5px;
  right: 10px;
  }
`;

const BurgerContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const MobileTabBar = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    position: sticky;
    top: 0;
    z-index: 50;
    background: ${(props) => (props.$isDarkMode ? '#111' : '#fff')};
    border-bottom: 2px solid ${(props) => (props.$isDarkMode ? '#ffb36c' : '#ff005d')};
    margin-bottom: 3px;
  }
`;

const MobileTabBtn = styled.button`
  flex: 1;
  padding: 2px;
  font-size: 13px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.25s;
  background: ${(props) =>
    props.$active
      ? props.$isDarkMode ? '#ffb36c' : '#ff005d'
      : 'transparent'};
  color: ${(props) =>
    props.$active
      ? props.$isDarkMode ? '#1a1a1a' : '#fff'
      : props.$isDarkMode ? '#ffb36c' : '#ff005d'};
  border-bottom: 3px solid ${(props) =>
    props.$active
      ? props.$isDarkMode ? '#ffb36c' : '#ff005d'
      : 'transparent'};
`;

const MobileTabPanel = styled.div`
  @media (max-width: 767px) {
    display: ${(props) => (props.$active ? 'block' : 'none')};
  }
  @media (min-width: 768px) {
    display: block;
  }
`;

const MenuSectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
  border-bottom: 2px solid #ff005d;
  padding-bottom: 5px;
  display: none;
    @media (min-width: 768px) {
    display: inline-block;
  }
`;

const LegendList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  background: transparent;
  border: none;
  padding: 5px 6px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#1a1a1a")};
  cursor: pointer;
  border-radius: 10px;
  transition: background 0.2s ease;
  text-align: left;

  &:hover {
    background: ${(props) =>
      props.$isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"};
  }

  span.icon {
    font-size: 20px;
  }
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 6px;
  padding: 8px 5px;
  margin-bottom: 8px;
  background: ${(props) =>
    props.$isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)"};
  border-radius: 10px;
`;
const NavButton = styled.button`
  background: transparent;
  border: none;
  text-align: left;
  color: ${(props) => (props.$isDarkMode ? "#ffb36c" : "#ff005d")};
  font-size: 16px;
  font-weight: 600;
  flex-grow: 1;
  cursor: pointer;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`;

const ControlButtons = styled.div`
  display: flex;
  gap: 5px;
  margin-left: 5px;
`;

const OrderButton = styled.button`
  background: ${(props) => (props.$isDarkMode ? "#333" : "#eee")};
  border: 1px solid ${(props) => (props.$isDarkMode ? "#444" : "#ccc")};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#333")};
  border-radius: 6px;
  padding: 4px 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  font-size: 14px;
  font-weight: bold;

  &:hover:not(:disabled) {
    background: #ff005d;
    color: white;
    border-color: #ff005d;
  }
`;

const FilterGridInMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 3px;
  margin-bottom: 5px;
`;

const FilterButtonInMenu = styled.button`
  background: ${(props) => (props.$active ? "#ffb36c" : "transparent")};
  color: ${(props) =>
    props.$active ? "#3e2723" : props.$isDarkMode ? "#ffb36c" : "#333"};
  border: 1px solid #ffb36c;
  border-radius: 6px;
  padding: 3px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 179, 108, 0.3);
  }
`;

const PresetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  margin-top: 5px;
`;

const PresetActionRow = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const PresetInput = styled.input`
  flex: 1;
  background: ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)")};
  border: 1px solid #ffb36c;
  border-radius: 8px;
  padding: 6px 10px;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#333")};
  font-size: 12px;
  outline: none;
  &::placeholder {
    color: #888;
  }
`;

const AddPresetBtn = styled.button`
  background: #ffb36c;
  color: #3e2723;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #ffa04d;
  }
`;

const PresetButton = styled.button`
  background: ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)")};
  border: 1px solid #ffb36c;
  color: ${(props) => (props.$isDarkMode ? "#ffb36c" : "#333")};
  border-radius: 8px;
  padding: 6px;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #ffb36c;
    color: #3e2723;
  }
`;

const CustomPresetWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  width: 100%;
  button:first-child {
    flex: 1;
  }
  animation: ${appearScale} 0.3s ease-out forwards;
`;

const EditPresetBtn = styled.button`
  background: transparent;
  border: none;
  color: #ffb36c;
  cursor: pointer;
  font-size: 14px;
  padding: 0 5px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

const DeletePresetBtn = styled.button`
  background: transparent;
  border: none;
  color: #ff4d4d;
  cursor: pointer;
  font-size: 16px;
  padding: 0 5px;
  &:hover {
    color: #ff1a1a;
    transform: scale(1.1);
  }
`;

const DragHandle = styled.div`
  cursor: grab;
  color: #ffb36c;
  font-size: 14px;
  padding: 0 4px;
  user-select: none;
`;

const ResetFiltersBtn = styled.button`
  width: 100%;
  background: #8a3939;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #ff1a1a;
  }
`;

const Menu = ({
  isOpen,
  onClose,
  isDarkMode,
  siteSections,
  resetSiteSections,
  moveSiteSection,
  sectionThemes,
  hiddenSections,
  onToggleSectionVisibility,
  onToggleSectionTheme,
  onResetSectionThemes,
  onToggleTheme,
  onOpenShop,
  onOpenVip,
  onOpenSettings,
  onOpenHelp,
  onOpenOtherOptions,
  showUltra,
  onOpenInfo,
  onLogout,
  isRoutingMode,
  setIsRoutingMode,
  currentPath,
  visualConfig,
  setVisualConfig,
  onResetFilters,
  customPresets = [],
  onSavePreset,
  onDeletePreset,
  onUpdatePresetName,
  onReorderPresets,
  loadingStrategy,
  onSetLoadingStrategy,
  isStickyBgMode,
  onToggleStickyBg,
}) => {
  const {
    isDecoratorMode,
    setIsDecoratorMode,
    changeLog,
    undoChange,
    resetAll,
    isPersistent,
    setIsPersistent,
  } = useDecorator();
  const [isRendered, setIsRendered] = useState(false);
  const [newPresetName, setNewPresetName] = useState("");
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [copiedSectionKey, setCopiedSectionKey] = useState(null);
  const [activeMenuTab, setActiveMenuTab] = useState("nav");
  const navigate = useNavigate();

  const buildSectionLink = (sectionPath) => {
    if (typeof window === "undefined") return "";

    const normalizedPath = sectionPath
      ? `/${sectionPath}`.replace(/\/+/g, "/")
      : "/";
    const basePath =
      `${window.location.origin}${window.location.pathname}`.replace(/\/$/, "");
    return `${basePath}#${normalizedPath}`;
  };

  const handleCopySectionLink = async (sectionKey, sectionPath) => {
    const link = buildSectionLink(sectionPath || sectionKey);
    if (!link) return;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(link);
      } else {
        const tempInput = document.createElement("input");
        tempInput.value = link;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
      }

      setCopiedSectionKey(sectionKey);
      window.setTimeout(() => setCopiedSectionKey(null), 1500);
    } catch (error) {
      console.error("Не вдалося скопіювати посилання секції", error);
    }
  };

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
    e.currentTarget.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.currentTarget.style.opacity = "1";
    setDraggedIndex(null);
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === targetIndex) return;

    const updatedPresets = [...customPresets];
    const [movedItem] = updatedPresets.splice(draggedIndex, 1);
    updatedPresets.splice(targetIndex, 0, movedItem);
    onReorderPresets(updatedPresets);
  };

  const handleFilterChange = (filterId) => {
    setVisualConfig((prev) => ({ ...prev, filterType: filterId }));
  };

  const handleBrightnessChange = (value) => {
    setVisualConfig((prev) => ({ ...prev, darkIntensity: value }));
  };

  const handleIntensityChange = (value) => {
    setVisualConfig((prev) => ({ ...prev, filterIntensity: value }));
  };

  useEffect(() => {
    if (isOpen) setIsRendered(true);
    else {
      const timer = setTimeout(() => setIsRendered(false), 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleNavClick = (sectionKey, path) => {
    onClose();
    if (isRoutingMode) {
      navigate("/" + path);
    } else {
      const element = document.getElementById(sectionKey);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (sectionKey === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  if (!isRendered) return null;

  return (
    <>
      <BurgerOverlay
        $isOpen={isOpen}
        $isRendered={isRendered}
        onClick={onClose}
        data-decorator-ignore="true"
      />
      <BurgerMenuPanel
        $isOpen={isOpen}
        $isRendered={isRendered}
        $isDarkMode={isDarkMode}
        data-decorator-ignore="true"
      >
        <BurgerCloseBtn onClick={onClose} $isDarkMode={isDarkMode}>
          ✕
        </BurgerCloseBtn>
        <MobileTabBar $isDarkMode={isDarkMode}>
          <MobileTabBtn
            $active={activeMenuTab === 'nav'}
            $isDarkMode={isDarkMode}
            onClick={() => setActiveMenuTab('nav')}
          >
           Навігація та порядок
          </MobileTabBtn>
          <MobileTabBtn
            $active={activeMenuTab === 'controls'}
            $isDarkMode={isDarkMode}
            onClick={() => setActiveMenuTab('controls')}
          >
            Керування
          </MobileTabBtn>
        </MobileTabBar>

        <BurgerContentGrid>
          <MobileTabPanel $active={activeMenuTab === 'nav'}>
            <MenuSectionTitle>Навігація та порядок</MenuSectionTitle>
            {siteSections &&
                siteSections.map((section, idx) => {
                  const sectionLink = buildSectionLink(
                    section.path || section.key,
                  );

                  return (
                    <NavItem key={section.key} $isDarkMode={isDarkMode}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <NavButton
                          $isDarkMode={isDarkMode}
                          onClick={() =>
                            handleNavClick(section.key, section.path)
                          }
                        >
                          {section.label}
                        </NavButton>
                        <ControlButtons>
                          <OrderButton
                            $isDarkMode={isDarkMode}
                            onClick={() =>
                              onToggleSectionVisibility?.(section.key)
                            }
                            title={
                              hiddenSections?.includes(section.key)
                                ? "Показати"
                                : "Приховати"
                            }
                            disabled={
                              !hiddenSections?.includes(section.key) &&
                              siteSections.length -
                                (hiddenSections?.length || 0) <=
                                2
                            }
                          >
                            {hiddenSections?.includes(section.key)
                              ? <FaEyeSlash />
                              : <FaEye />}
                          </OrderButton>
                        </ControlButtons>
                        <ControlButtons>
                          <OrderButton
                            $isDarkMode={isDarkMode}
                            onClick={() => onToggleSectionTheme?.(section.key)}
                            title="Змінити тему секції"
                          >
                            {(sectionThemes?.[section.key] ?? isDarkMode)
                              ?  <BsMoonStarsFill/>
                              : <FaSun/>}
                          </OrderButton>
                        </ControlButtons>
                        {section.key !== "hero" && (
                          <ControlButtons>
                            <OrderButton
                              $isDarkMode={isDarkMode}
                              disabled={idx <= 1}
                              onClick={() => moveSiteSection(idx, -1)}
                              title="Вище"
                            >
                              ↑
                            </OrderButton>
                            <OrderButton
                              $isDarkMode={isDarkMode}
                              disabled={idx === siteSections.length - 1}
                              onClick={() => moveSiteSection(idx, 1)}
                              title="Нижче"
                            >
                              ↓
                            </OrderButton>
                          </ControlButtons>
                        )}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "6px",
                          width: "100%",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "11px",
                            color: isRoutingMode
                              ? "#8a8a8a"
                              : isDarkMode
                                ? "#ffb36c"
                                : "#ff005d",
                            wordBreak: "break-all",
                            flex: 1,
                            minWidth: 0,
                          }}
                          title={sectionLink}
                        >
                          {sectionLink}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            handleCopySectionLink(section.key, section.path)
                          }
                          style={{
                            border: "none",
                            borderRadius: "6px",
                            padding: "4px",
                            background: isDarkMode
                              ? "rgba(255,255,255,0.08)"
                              : "rgba(0,0,0,0.05)",
                            color: isDarkMode ? "#fff" : "#333",
                            cursor: "pointer",
                            fontSize: "11px",
                            fontWeight: "600",
                          }}
                          title="Скопіювати посилання"
                        >
                          {copiedSectionKey === section.key
                            ? "✓ Скопійовано"
                            : "Копіювати посилання"}
                        </button>
                      </div>
                    </NavItem>
                  );
                })}
            <div style={{ display: "flex", gap: "5px" }}>
              <button
                onClick={onResetSectionThemes}
                style={{
                  width: "100%",
                  cursor: "pointer",
                  padding: "2px",
                  borderRadius: "7px",
                  border: "none",
                  fontWeight: "bold",
                  background: isDarkMode ? "#333" : "#eee",
                  color: isDarkMode ? "#fff" : "#333",
                }}
              >
                Скинути теми
              </button>
                <button
                onClick={resetSiteSections}
                style={{
                  width: "100%",
                  cursor: "pointer",
                  padding: "2px",
                  borderRadius: "7px",
                  border: "none",
                  fontWeight: "bold",
                  background: "#990038",
                  color: "white",
                }}
              >
                Скинути порядок 
              </button>
            </div>
            {hiddenSections?.length > 0 && (
              <div
                style={{
                  marginTop: "10px",
                  fontSize: "10px",
                  color: isDarkMode ? "#aaa" : "#666",
                  fontStyle: "italic",
                }}
              >
                💡 Приховані секції доступні через "Маршрутизацію". Щоб залишити
                лише одну секцію, увімкніть режим ракети 🚀.
              </div>
            )}
          </MobileTabPanel>

          <MobileTabPanel $active={activeMenuTab === 'controls'}>
            <MenuSectionTitle>Керування</MenuSectionTitle>
            <LegendList>
              <li style={{ display: "none" }}>
                <SubsMenuItem
                  $isUltra={showUltra}
                  onClick={() => {
                    onOpenVip();
                    onClose();
                  }}
                >
                  <SubsIconBox $isUltra={showUltra}>
                    <SubsAnimatedPart
                      $show={!showUltra}
                      $variant="rainbow"
                      $isSymbol
                    >
                      +
                    </SubsAnimatedPart>
                    <SubsAnimatedPart
                      $show={showUltra}
                      $variant="ultra"
                      $isSymbol
                    >
                      ♔
                    </SubsAnimatedPart>
                  </SubsIconBox>
                  <SubsTextWrapper>
                    <SubsAnimatedPart $show={!showUltra} $variant="rainbow">
                      Стихія+
                    </SubsAnimatedPart>
                    <SubsAnimatedPart $show={showUltra} $variant="ultra">
                      Стихія Ultra
                    </SubsAnimatedPart>
                  </SubsTextWrapper>
                  <span
                    style={{
                      fontSize: "12px",
                      color: showUltra ? "#710097" : "#ffb36c",
                      fontWeight: "bold",
                    }}
                  >
                    ➔
                  </span>
                </SubsMenuItem>
              </li>
              <li>
                <ModeToggle
                  $isDarkMode={isDarkMode}
                  onClick={() => setIsRoutingMode(!isRoutingMode)}
                >
                  <span className="icon">{isRoutingMode ? <FaRocket /> : <FaAnchorCircleCheck />}</span>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                      {isRoutingMode ? "Маршрутизація" : "Навігація"}
                    </div>
                    <div style={{ fontSize: "10px", opacity: 0.85 }}>
                      {isRoutingMode ? "Зміна URL" : "Плавний скрол"}
                    </div>
                    <div style={{ fontSize: "10px", opacity: 0.85 }}>
                      {isRoutingMode ? "При натиску ввімкнеться ремим навігації" : "При натиску ввімкнеться ремим маршрутизації"}
                    </div>
                  </div>
                  <Switch $active={isRoutingMode} />
                </ModeToggle>
              </li>
              <li>
                <ModeToggle
                  $isDarkMode={isDarkMode}
                  onClick={() => setIsDecoratorMode(!isDecoratorMode)}
                >
                  <span className="icon"><GiPalette /></span>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                      Режим Декоратора
                    </div>
                    <div style={{ fontSize: "10px", opacity: 0.85 }}>
                      Редагування стилів сторінки
                    </div>
                    <div style={{ fontSize: "10px", opacity: 0.85 }}>
                      Необхідні незначні знання CSS
                    </div>
                  </div>
                  <Switch $active={isDecoratorMode} />
                </ModeToggle>

                {isDecoratorMode && (
                  <div
                    style={{
                      padding: "10px",
                      background: isDarkMode
                        ? "rgba(255,255,255,0.05)"
                        : "rgba(0,0,0,0.05)",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: isDarkMode ? "#ffb36c" : "#ff005d",
                        }}
                      >
                        Зберігати після перезавантаження:
                      </span>
                      <Switch
                        $active={isPersistent}
                        onClick={() => setIsPersistent(!isPersistent)}
                        style={{ transform: "scale(0.8)", cursor: "pointer" }}
                      />
                    </div>

                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        marginBottom: "10px",
                        color: isDarkMode ? "#ffb36c" : "#ff005d",
                      }}
                    >
                      Журнал змін ({changeLog.length})
                    </div>

                    {changeLog.length > 0 ? (
                      <div
                        style={{
                          maxHeight: "150px",
                          overflowY: "auto",
                          display: "flex",
                          flexDirection: "column",
                          gap: "5px",
                        }}
                      >
                        {changeLog.map((log) => {
                          let modeLabel = "";
                          if (log.mode === "light_default") modeLabel = "☀️ ";
                          else if (log.mode === "light_hover")
                            modeLabel = "☀️👆 ";
                          else if (log.mode === "dark_default")
                            modeLabel = "🌙 ";
                          else if (log.mode === "dark_hover")
                            modeLabel = "🌙👆 ";

                          return (
                            <div
                              key={log.id}
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                fontSize: "11px",
                                background: isDarkMode
                                  ? "rgba(0,0,0,0.3)"
                                  : "rgba(255,255,255,0.5)",
                                padding: "5px",
                                borderRadius: "5px",
                              }}
                            >
                              <div>
                                <span
                                  style={{ opacity: 0.8, marginRight: "4px" }}
                                >
                                  {modeLabel}
                                </span>
                                <span style={{ color: "#ffb36c" }}>
                                  {log.tagName}
                                </span>{" "}
                                {log.property}:{" "}
                                <span style={{ opacity: 0.7 }}>
                                  {log.originalValue || "none"}
                                </span>{" "}
                                ➔ <b>{log.newValue}</b>
                              </div>
                              <button
                                onClick={() => undoChange(log.id)}
                                style={{
                                  background: "#ff4d4d",
                                  color: "#fff",
                                  border: "none",
                                  borderRadius: "4px",
                                  cursor: "pointer",
                                  padding: "2px 6px",
                                  fontSize: "10px",
                                  marginLeft: "5px",
                                }}
                              >
                                Відмінити
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div
                        style={{
                          fontSize: "11px",
                          opacity: 0.7,
                          fontStyle: "italic",
                        }}
                      >
                        Змін ще немає
                      </div>
                    )}

                    {changeLog.length > 0 && (
                      <button
                        onClick={resetAll}
                        style={{
                          width: "100%",
                          background: "transparent",
                          color: "#ff4d4d",
                          border: "1px solid #ff4d4d",
                          borderRadius: "5px",
                          marginTop: "10px",
                          padding: "5px",
                          fontSize: "11px",
                          cursor: "pointer",
                        }}
                      >
                        Скинути всі зміни
                      </button>
                    )}
                  </div>
                )}
              </li>
              <li>
                <div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: isDarkMode ? "#ffb36c" : "#ff005d",
                      marginBottom: "5px",
                    }}
                  >
                    Режим завантаження
                  </div>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <FilterButtonInMenu
                      $active={loadingStrategy === "eager"}
                      $isDarkMode={isDarkMode}
                      onClick={() => onSetLoadingStrategy("eager")}
                      title="Завантажує все відразу при старті сайту"
                    >
                      Повний
                    </FilterButtonInMenu>
                    <FilterButtonInMenu
                      $active={loadingStrategy === "delayed"}
                      $isDarkMode={isDarkMode}
                      onClick={() => onSetLoadingStrategy("delayed")}
                      title="Завантажує важкі модулі через 8 секунд"
                    >
                      Оптимальний
                    </FilterButtonInMenu>
                    <FilterButtonInMenu
                      $active={loadingStrategy === "lazy"}
                      $isDarkMode={isDarkMode}
                      onClick={() => onSetLoadingStrategy("lazy")}
                      title="Завантажує тільки при натисканні (економія)"
                    >
                      Економний
                    </FilterButtonInMenu>
                  </div>
                </div>
              </li>
              <li style={{display: "flex"}}>
                <ActionButton $isDarkMode={isDarkMode} onClick={onToggleTheme}>
                 Змінити тему? <span className="icon">{isDarkMode ? <FaSun/> :  <BsMoonStarsFill/>}</span>
                </ActionButton>
                <ActionButton
                  $isDarkMode={isDarkMode}
                  onClick={onToggleStickyBg}
                  style={{
                    color: isStickyBgMode ? "#ff005d" : undefined,
                  }}
                >
                  {isStickyBgMode ? "Вимкнути" : "Ввімкнути"} липкий фон?
                </ActionButton>
              </li>
              <li>
                <div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: isDarkMode ? "#ffb36c" : "#ff005d",
                    }}
                  >
                    Зменшення Яскравості</div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={visualConfig.darkIntensity || 0}
                    onChange={(e) =>
                      handleBrightnessChange(Number(e.target.value))
                    }
                    style={{ width: "90%", cursor: "pointer" }}
                  />
                  <div
                    style={{
                      fontSize: "12px",
                      textAlign: "right",
                      marginTop: "-25px"
                    }}
                  >
                    {visualConfig.darkIntensity || 0}%
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: isDarkMode ? "#ffb36c" : "#ff005d",
                    }}
                  >
                     Фільтри
                  </div>
                  <FilterGridInMenu $isDarkMode={isDarkMode}>
                    {FILTERS.map((f) => (
                      <FilterButtonInMenu
                        key={f.id}
                        $active={visualConfig.filterType === f.id}
                        $isDarkMode={isDarkMode}
                        onClick={() => handleFilterChange(f.id)}
                      >
                        {f.label}
                      </FilterButtonInMenu>
                    ))}
                  </FilterGridInMenu>
                </div>
              </li>
              {visualConfig.filterType !== "none" && (
                <li>
                  <div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: isDarkMode ? "#ffb36c" : "#ff005d",
                      }}
                    >
                      ⚡ Сила ефекту
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={visualConfig.filterIntensity || 50}
                      onChange={(e) =>
                        handleIntensityChange(Number(e.target.value))
                      }
                      style={{ width: "92%", cursor: "pointer" }}
                    />
                    <div
                      style={{
                        fontSize: "12px",
                        textAlign: "right",
                        marginTop: "-25px",
                      }}
                    >
                      {visualConfig.filterIntensity || 50}%
                    </div>
                  </div>
                </li>
              )}
              <li>
                <div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: isDarkMode ? "#ffb36c" : "#ff005d",
                    }}
                  >
                    Швидкі стилі
                  </div>
                  <PresetGrid>
                    {PRESETS.map((preset) => (
                      <PresetButton
                        key={preset.id}
                        $isDarkMode={isDarkMode}
                        onClick={() => setVisualConfig(preset.config)}
                      >
                        {preset.label}
                      </PresetButton>
                    ))}
                    {customPresets.map((preset, idx) => (
                      <CustomPresetWrapper
                        key={preset.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, idx)}
                        onDragEnd={handleDragEnd}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => handleDrop(e, idx)}
                      >
                        <DragHandle title="Перетягніть для сортування">
                          ⠿
                        </DragHandle>
                        <PresetButton
                          $isDarkMode={isDarkMode}
                          style={{
                            borderColor: "#7afcff",
                            color: isDarkMode ? "#7afcff" : "#006666",
                          }}
                          onClick={() => setVisualConfig(preset.config)}
                        >
                          {preset.label}
                        </PresetButton>
                        <EditPresetBtn
                          onClick={() => {
                            const currentName = preset.label.replace("✨ ", "");
                            const n = window.prompt(
                              "Введіть нову назву пресета:",
                              currentName,
                            );
                            if (n) onUpdatePresetName(preset.id, n);
                          }}
                          title="Редагувати назву"
                        >
                          ✎
                        </EditPresetBtn>
                        <DeletePresetBtn
                          onClick={() => onDeletePreset(preset.id)}
                          title="Видалити пресет"
                        >
                          ×
                        </DeletePresetBtn>
                      </CustomPresetWrapper>
                    ))}
                  </PresetGrid>
                  <PresetActionRow>
                    <PresetInput
                      $isDarkMode={isDarkMode}
                      placeholder="Назва пресета..."
                      value={newPresetName}
                      onChange={(e) => setNewPresetName(e.target.value)}
                      maxLength={15}
                    />
                    <AddPresetBtn
                      onClick={() => {
                        if (newPresetName.trim()) {
                          onSavePreset(newPresetName);
                          setNewPresetName("");
                        }
                      }}
                    >
                      Зберегти
                    </AddPresetBtn>
                  </PresetActionRow>
                </div>
              </li>
              <li>
                <ResetFiltersBtn onClick={onResetFilters}>
                  Скинути всі фільтри ↺
                </ResetFiltersBtn>
              </li>
              <LogoActionsRow>
                <li>
                  <ActionButton
                    style={{ display: "none" }}
                    $isDarkMode={isDarkMode}
                    onClick={() => {
                      onOpenShop();
                      onClose();
                    }}
                  >
                    Магазин
                  </ActionButton>
                </li>
                <li>
                  <ActionButton
                    $isDarkMode={isDarkMode}
                    onClick={() => {
                      onOpenOtherOptions();
                      onClose();
                    }}
                  >
                    Фонова музика
                  </ActionButton>
                </li>
                <li>
                  <ActionButton
                    $isDarkMode={isDarkMode}
                    onClick={() => {
                      onOpenSettings();
                      onClose();
                    }}
                  >
                    Налаштування
                  </ActionButton>
                </li>
                <li>
                  <ActionButton
                    $isDarkMode={isDarkMode}
                    onClick={() => {
                      onOpenHelp();
                      onClose();
                    }}
                  >
                    Навчання
                  </ActionButton>
                </li>
                <li>
                  <ActionButton
                    $isDarkMode={isDarkMode}
                    onClick={() => {
                      onLogout();
                      onClose();
                    }}
                  >
                    Вихід
                  </ActionButton>
                </li>
              </LogoActionsRow>
            </LegendList>
          </MobileTabPanel>
        </BurgerContentGrid>
      </BurgerMenuPanel>
    </>
  );
};

export default Menu;
