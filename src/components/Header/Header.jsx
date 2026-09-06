import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { BsMoonStarsFill } from "react-icons/bs";
import BurgerMenu from "./Menu.jsx";
import { IoIosEye } from "react-icons/io";
import { GiShop, GiExitDoor } from "react-icons/gi";
import relax from "../../mp3/modals/relax.mp3";
import { FaSun } from "react-icons/fa";
import { MdSettingsSuggest, MdMore, MdWallpaper } from "react-icons/md";
import bell from "../../mp3/modals/bell.mp3";
import paper from "../../mp3/modals/paper.mp3";
import conimg from "../../mp3/modals/concierge.mp3";
import { useVisualFilters } from "./useVisualFilters";
import { useTutorial } from "../DominoTutorial/TutorialContext.jsx";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  arrow,                 
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  useTransitionStyles,  
  FloatingPortal,
  FloatingArrow,         
} from "@floating-ui/react";
const TooltipBox = styled.div`
  background-color: ${(props) => (props.$isDarkMode ? "#0c0c0cbf" : "#fdff98bb")};
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#1a1a1a")};
  border: 2px solid #00afce;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, ${(props) => (props.$isDarkMode ? "0.5" : "0.15")});
  font-size: 12px;
  font-weight: 500;
  padding: 5px 9px;
  z-index: 10000;
  pointer-events: none;
`;
const flow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeInHeader = keyframes`
  from { opacity: 0; transform: translateY(-100%); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeaderDiv = styled.div`
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid ${(props) => (props.$isDarkMode ? "white" : "#000000")};
  position: fixed;
  background: ${(props) => (props.$isDarkMode ? "rgba(0, 0, 0, 0.45)" : "rgba(255, 255, 255, 0.86)")};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: ${(props) => (props.$isStickyBgMode ? "blur(10px)" : "none")};
  color: ${(props) => (props.$isDarkMode ? "white" : "#000000")};
  top: 0;
  left: 0;
  z-index: 1000;
  transition:
    background-color 0.4s ease,
    backdrop-filter 0.4s ease;
  box-sizing: border-box;
  animation: ${fadeInHeader} 0.8s ease-out 4.3s both;
  margin: 0;
`;

const HeaderFix = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  justify-content: space-between;
  gap: 8px;
  padding: 0 8px;
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#1a1a1a")};
  align-items: center;
  justify-content: center;
  padding: 2px;
  flex-shrink: 0;
`;

const EmojiWrapper = styled.span`
  display: inline-block;
  font-size: 21px;
`;

const UserName = styled.span`
  font-size: 12px;
  font-weight: 900;
  max-width: 78%;
  white-space: nowrap;
  text-shadow: 
    -1px -1px 0 #080808,  
     1px -1px 0 #080808,
    -1px  1px 0 #080808,
     1px  1px 0 #080808;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 3px;
  flex-shrink: 2;

  ${(props) => {
    if (props.$uColor?.includes("linear")) {
      return css`
        background: ${props.$uColor};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        background-size: 400% 400%;
        animation: ${flow} 5s ease infinite;
      `;
    }
    return `color: ${props.$uColor || "inherit"};`;
  }}
`;

const HeaderAvatar = styled.img`
  width: 35px;
  height: 35px;
  min-width: 30px;
  margin-right: 0;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1.5px solid transparent;
  box-sizing: border-box;
  background-image: ${(props) =>
    props.$bColor?.includes("linear-gradient")
      ? `linear-gradient(white, white), ${props.$bColor}`
      : "none"};
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-color: ${(props) =>
    props.$bColor?.includes("linear-gradient")
      ? "transparent"
      : props.$bColor || "transparent"};
`;

const ProfileButtonWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  background: ${(props) =>
    props.$isDarkMode ? "rgba(255, 255, 255, 0.07)" : "rgba(0, 0, 0, 0.04)"};
  border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.12)")};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#111")};
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: translateY(-1px);
  }
`;
const ProfileModal = styled.div`
  position: absolute;
  top: 42px;
  right: 0;
  z-index: 2001;
  min-width: 290px;
  background: ${(props) =>
    props.$isDarkMode ? "rgba(14, 14, 14, 0.96)" : "rgba(255, 255, 255, 0.96)"};
  border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.12)")};
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.35);
  border-radius: 14px;
  padding: 12px 14px;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#111")};
`;

const ProfileModalBody = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileModalName = styled.div`
  font-size: 12px;
  font-weight: 800;
  line-height: 1.2;
`;

const ProfileModalLabel = styled.div`
  font-size: 11px;
  letter-spacing: 0.08em;
  opacity: 0.7;
  margin-bottom: 2px;
`;

const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  gap: 4px;
    & > * {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`;

const VisualSettingsPanel = styled.div`
  position: absolute;
  top: 52px;
  right: 10px;
  background: ${(props) =>
    props.$isDarkMode ? "rgba(18, 18, 18, 0.95)" : "rgba(255, 255, 255, 0.95)"};
  border: 1px solid ${(props) => (props.$isDarkMode ? "#444" : "#ddd")};
  backdrop-filter: blur(5px);
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const VisualLabel = styled.label`
  font-size: 11px;
  font-weight: bold;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#333")};
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const VisualRange = styled.input`
  width: 100%;
  cursor: pointer;
  accent-color: ${(props) => (props.$isDarkMode ? "#ffb36c" : "#007bff")};
`;

const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 10px;
`;

const FilterButton = styled.button`
  background: ${(props) => (props.$active ? "#ffb36c" : "transparent")};
  color: ${(props) =>
    props.$active ? "#3e2723" : props.$isDarkMode ? "#ffb36c" : "#333"};
  border: 1px solid #ffb36c;
  border-radius: 6px;
  padding: 6px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: rgba(255, 179, 108, 0.3);
  }
`;
export const Tooltip = ({
  content,
  children,
  placement = "bottom",
  isDarkMode = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);
const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    strategy: "fixed",
    transform: false, 
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(8),
      flip(),
      shift({ padding: 5 }),
      arrow({ element: arrowRef }),
    ],
  });
  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    duration: 150,
    initial: {
      opacity: 0,
      transform: "scale(0.9)",
    },
    open: {
      opacity: 1,
      transform: "scale(1)",
    },
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  if (!content) return children;

  const bgTheme = isDarkMode ? "#111111" : "#ffffff";
  const borderTheme = "#00acb9";

  return (
    <>
      <span
        ref={refs.setReference}
        {...getReferenceProps()}
        style={{ display: "inline-flex" }}
      >
        {children}
      </span>
      {isMounted && (
        <FloatingPortal>
          <TooltipBox
            ref={refs.setFloating}
            $isDarkMode={isDarkMode}
            style={{ ...floatingStyles, ...transitionStyles }}
            {...getFloatingProps()}
          >
            {content}
            <FloatingArrow
              ref={arrowRef}
              context={context}
              fill={bgTheme}
              stroke={borderTheme}
              strokeWidth={1}
            />
          </TooltipBox>
        </FloatingPortal>
      )}
    </>
  );
};
const Header = ({
  sfxVolume = 0.2,
  onOpenLogin,
  onOpenRegister,
  onOpenSettings,
  onOpenVip,
  onOpenShop,
  onOpenHelp,
  onOpenOtherOptions,
  onOpenInfo,
  isInfoOpen,
  isDarkMode,
  toggleTheme,
  isStickyBgMode,
  setIsStickyBgMode,
  sectionThemes,
  hiddenSections,
  onToggleSectionVisibility,
  onToggleSectionTheme,
  onResetSectionThemes,
  onOpenAchievements,
  currentAvatar,
  onLogout,
  user,
  siteSections,
  moveSiteSection,
  resetSiteSections,
  isRoutingMode,
  setIsRoutingMode,
  currentPath,
  setIsFsActive,
  loadingStrategy,
  onSetLoadingStrategy,
}) => {
  const { registerRef } = useTutorial?.() || { registerRef: () => {} };
  const [showUltra, setShowUltra] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [showVisualSettings, setShowVisualSettings] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  useEffect(() => {
    if (!isProfileModalOpen) return;

    const handlePointerDown = (event) => {
      const modal = document.getElementById("header-profile-modal");
      const button = document.getElementById("header-profile-button");

      if (
        modal &&
        !modal.contains(event.target) &&
        button &&
        !button.contains(event.target)
      ) {
        setIsProfileModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [isProfileModalOpen]);
  
  const {
    visualConfig,
    setVisualConfig,
    resetFilters,
    FILTERS,
    PRESETS,
    customPresets,
    saveCustomPreset,
    deleteCustomPreset,
    updateCustomPresetName,
    reorderCustomPresets,
  } = useVisualFilters(user);

  useEffect(() => {
    const interval = setInterval(() => setShowUltra((prev) => !prev), 3000);
    return () => clearInterval(interval);
  }, []);

  // Helper to play sound effects with current volume
  const playSfx = (sound) => {
    const audio = new Audio(sound);
    audio.volume = sfxVolume;
    audio.play().catch(() => {});
  };

  // ==========================================
  //     ОКРЕМІ ОБРОБНИКИ ЗВУКІВ ДЛЯ КНОПОК
  // ==========================================

  // 1. Тема
  const handleThemeToggle = () => {
    playSfx(bell);
    toggleTheme();
  };

  // 2. Бургер меню
  const handleBurgerOpen = () => {
    playSfx(paper);
    setIsBurgerOpen(true);
  };

  // 3. Фон на увесь сайт
  const handleStickyBgToggle = () => {
    playSfx(conimg);
    setIsStickyBgMode((prev) => !prev);
  };

  // 4. Око (Налаштування вигляду)
  const handleEyeToggle = () => {
    playSfx(relax);
    setShowVisualSettings((prev) => !prev);
  };

  // 5. Допомога / Навчання (?)
  const handleHelpClick = () => {
    playSfx(relax);
    if (onOpenHelp) onOpenHelp();
  };

  // 6. Магазин
  const handleShopClick = () => {
    playSfx(relax);
    if (onOpenShop) onOpenShop();
  };

  // 7. Інші опції (три крапки)
  const handleOtherOptionsClick = () => {
    playSfx(relax);
    if (onOpenOtherOptions) onOpenOtherOptions();
  };

  // 8. Налаштування (шестерня)
  const handleSettingsClick = () => {
    playSfx(relax);
    if (onOpenSettings) onOpenSettings();
  };

  // 9. Вихід з акаунту
  const handleLogoutClick = () => {
    playSfx(relax);
    if (onLogout) onLogout();
  };

  // 10. Кнопка "Вхід" (для незалогіненого)
  const handleLoginClick = () => {
    playSfx(relax);
    if (onOpenLogin) onOpenLogin();
  };

  // 11. Кнопка "Акаунт" / "Реєстрація" (для незалогіненого)
  const handleRegisterClick = () => {
    playSfx(relax);
    if (onOpenRegister) onOpenRegister();
  };

  // 12. Кнопки фільтрів у панелі вигляду
  const handleFilterClick = (filterId) => {
    playSfx(relax);
    setVisualConfig((prev) => ({ ...prev, filterType: filterId }));
  };

  // 13. Пресети стилів
  const handlePresetClick = (config) => {
    playSfx(relax);
    setVisualConfig(config);
  };

  return (
    <><HeaderDiv
  $isDarkMode={isDarkMode}
  $isStickyBgMode={isStickyBgMode}
  data-decorator-ignore="true"
>
  <HeaderFix>
    {user ? (
      <>
        <ButtonsGroup ref={(el) => registerRef('headerBgTheme', el)}>
          {/* Зміна теми */}
          <Tooltip content="Змінити тему" isDarkMode={isDarkMode}>
            <IconButton
              onClick={handleThemeToggle}
              $isDarkMode={isDarkMode}
              aria-label="Змінити тему"
            >
              <EmojiWrapper style={{ fontSize: "19px" }}>
                {isDarkMode ? <FaSun /> : <BsMoonStarsFill />}
              </EmojiWrapper>
            </IconButton>
          </Tooltip>

          {/* Липкий фон */}
          <Tooltip content="Фон на увесь сайт" isDarkMode={isDarkMode}>
            <IconButton
              onClick={handleStickyBgToggle}
              $isDarkMode={isDarkMode}
              aria-label="Фон на увесь сайт"
            >
              <EmojiWrapper>
                <MdWallpaper
                  style={{ color: isStickyBgMode ? "#ff005d" : "inherit" }}
                />
              </EmojiWrapper>
            </IconButton>
          </Tooltip>

          {/* Налаштування вигляду */}
          <Tooltip content="Налаштування вигляду" isDarkMode={isDarkMode}>
            <IconButton
              onClick={handleEyeToggle}
              $isDarkMode={isDarkMode}
              aria-label="Налаштування вигляду"
            >
              <EmojiWrapper style={{ marginTop: "2px", fontSize: "24px" }}>
                <IoIosEye />
              </EmojiWrapper>
            </IconButton>
          </Tooltip>

          {/* Допомога (?) */}
          <Tooltip content="Допомога" isDarkMode={isDarkMode}>
            <IconButton 
              onClick={handleHelpClick} 
              $isDarkMode={isDarkMode}
              aria-label="Допомога"
            >
              <EmojiWrapper style={{ fontWeight: 900 }}>?</EmojiWrapper>
            </IconButton>
          </Tooltip>

          {/* Магазин */}
          <Tooltip content="Спонсорство" isDarkMode={isDarkMode}>
            <IconButton
              onClick={handleShopClick}
              $isDarkMode={isDarkMode}
              aria-label="Спонсорство"
            >
              <GiShop />
            </IconButton>
          </Tooltip>

          {/* Інші опції */}
          <Tooltip content="Інші опції та фонова музика" isDarkMode={isDarkMode}>
            <IconButton
              onClick={handleOtherOptionsClick}
              $isDarkMode={isDarkMode}
              aria-label="Інші опції та фонова музика"
            >
              <EmojiWrapper style={{ fontSize: "19px", marginTop: "2px" }}>
                <MdMore />
              </EmojiWrapper>
            </IconButton>
          </Tooltip>

          {/* Налаштування */}
          <Tooltip content="Налаштування" isDarkMode={isDarkMode}>
            <IconButton 
              onClick={handleSettingsClick} 
              $isDarkMode={isDarkMode}
              aria-label="Налаштування"
            >
              <EmojiWrapper>
                <MdSettingsSuggest />
              </EmojiWrapper>
            </IconButton>
          </Tooltip>

          {/* Вихід */}
          <Tooltip content="Вихід з акаунта" isDarkMode={isDarkMode}>
            <IconButton 
              onClick={handleLogoutClick} 
              $isDarkMode={isDarkMode}
              aria-label="Вихід з акаунта"
            >
              <EmojiWrapper>
                <GiExitDoor />
              </EmojiWrapper>
            </IconButton>
          </Tooltip>

          {/* Бургер */}
          <Tooltip content="Відкрити меню" isDarkMode={isDarkMode}>
            <IconButton
              onClick={handleBurgerOpen}
              $isDarkMode={isDarkMode}
              aria-label="Відкрити меню"
            >
              <EmojiWrapper>☰</EmojiWrapper>
            </IconButton>
          </Tooltip>
        </ButtonsGroup>
        <ProfileButtonWrap>
          <Tooltip content="Ваш профіль" isDarkMode={isDarkMode}>
          <ProfileButton
            id="header-profile-button"
            $isDarkMode={isDarkMode}
            onClick={() => setIsProfileModalOpen((prev) => !prev)}
            aria-label="Профіль користувача"
          >
            <HeaderAvatar
              src={currentAvatar}
              $bColor={user.borderColor}
              style={{ width: "33px", height: "33px" }}
            />
          </ProfileButton>
         </Tooltip>
          {isProfileModalOpen && (
            <ProfileModal
              id="header-profile-modal"
              $isDarkMode={isDarkMode}
            >
              <ProfileModalBody>
                <HeaderAvatar
                  src={currentAvatar}
                  $bColor={user.borderColor}
                  style={{ width: "42px", height: "42px" }}
                />
                <div>
                  <ProfileModalLabel>Профіль</ProfileModalLabel>
                   <ProfileModalName>Ваше ім'я: {user.firstName}</ProfileModalName>
                </div>
              </ProfileModalBody>
            </ProfileModal>
          )}
        </ProfileButtonWrap>
      </>
    ) : (
      <ButtonsGroup ref={(el) => registerRef('headerBgTheme', el)}>
        {/* Незалогінений користувач */}
        <Tooltip content="Змінити тему" isDarkMode={isDarkMode}>
          <IconButton 
            onClick={handleThemeToggle} 
            $isDarkMode={isDarkMode}
            aria-label="Змінити тему"
          >
            <EmojiWrapper style={{ fontSize: "18px" }}>
              {isDarkMode ? <FaSun /> : <BsMoonStarsFill />}
            </EmojiWrapper>
          </IconButton>
        </Tooltip>

        <Tooltip content="Фон на увесь сайт" isDarkMode={isDarkMode}>
          <IconButton
            onClick={handleStickyBgToggle}
            $isDarkMode={isDarkMode}
            aria-label="Фон на увесь сайт"
          >
            <EmojiWrapper>
              <MdWallpaper
                style={{ color: isStickyBgMode ? "#ff005d" : "inherit" }}
              />
            </EmojiWrapper>
          </IconButton>
        </Tooltip>

        <Tooltip content="Налаштування вигляду" isDarkMode={isDarkMode}>
          <IconButton
            onClick={handleEyeToggle}
            $isDarkMode={isDarkMode}
            aria-label="Налаштування вигляду"
          >
            <EmojiWrapper>
              <IoIosEye />
            </EmojiWrapper>
          </IconButton>
        </Tooltip>

        <Tooltip content="Навчання" isDarkMode={isDarkMode}>
          <IconButton
            onClick={handleHelpClick}
            $isDarkMode={isDarkMode}
            aria-label="Навчання"
          >
            <EmojiWrapper style={{ fontWeight: 900 }}>?</EmojiWrapper>
          </IconButton>
        </Tooltip>

        <Tooltip content="Інші опції" isDarkMode={isDarkMode}>
          <IconButton
            onClick={handleOtherOptionsClick}
            $isDarkMode={isDarkMode}
            aria-label="Інші опції"
          >
            <EmojiWrapper>
              <MdMore />
            </EmojiWrapper>
          </IconButton>
        </Tooltip>

        <button
          onClick={handleLoginClick}
          style={{
            fontSize: "11px",
            cursor: "pointer",
            background: "none",
            border: "none",
            textDecoration: "underline",
            display: "none",
            color: isDarkMode ? "#fff" : "#000",
          }}
        >
          Вхід
        </button>

        <button
          onClick={handleRegisterClick}
          style={{
            fontSize: "14px",
            cursor: "pointer",
            background: "none",
            border: "none",
            marginRight: "15px",
            textDecoration: "underline",
            color: isDarkMode ? "#fff" : "#000",
          }}
        >
          Акаунт
        </button>
      </ButtonsGroup>
    )}
  </HeaderFix>
  {showVisualSettings && (
    <VisualSettingsPanel $isDarkMode={isDarkMode}>
      <div>
        <VisualLabel $isDarkMode={isDarkMode}>
          Яскравість <span>{visualConfig.darkIntensity}%</span>
        </VisualLabel>
        <VisualRange
          type="range"
          min="0"
          max="100"
          value={visualConfig.darkIntensity}
          onChange={(e) =>
            setVisualConfig((prev) => ({
              ...prev,
              darkIntensity: Number(e.target.value),
            }))
          }
          $isDarkMode={isDarkMode}
        />
      </div>

      <FilterGrid>
        {FILTERS.map((f) => (
          <FilterButton
            key={f.id}
            $active={visualConfig.filterType === f.id}
            $isDarkMode={isDarkMode}
            onClick={() => handleFilterClick(f.id)}
          >
            {f.label}
          </FilterButton>
        ))}
      </FilterGrid>

      {visualConfig.filterType !== "none" && (
        <div>
          <VisualLabel $isDarkMode={isDarkMode}>
            Сила ефекту <span>{visualConfig.filterIntensity}%</span>
          </VisualLabel>
          <VisualRange
            type="range"
            min="0"
            max="100"
            value={visualConfig.filterIntensity}
            onChange={(e) =>
              setVisualConfig((prev) => ({
                ...prev,
                filterIntensity: Number(e.target.value),
              }))
            }
            $isDarkMode={isDarkMode}
          />
        </div>
      )}

      <div style={{ marginTop: "5px" }}>
        <VisualLabel
          $isDarkMode={isDarkMode}
          style={{ marginBottom: "8px" }}
        >
          Стилі
        </VisualLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5px",
          }}
        >
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              style={{
                background: "transparent",
                border: "1px solid #ffb36c",
                color: isDarkMode ? "#ffb36c" : "#333",
                borderRadius: "6px",
                padding: "5px",
                fontSize: "10px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => handlePresetClick(preset.config)}
            >
              {preset.label}
            </button>
          ))}
          {customPresets.map((preset) => (
            <button
              key={preset.id}
              style={{
                background: "rgba(255, 179, 108, 0.1)",
                border: "1px solid #7afcff",
                color: isDarkMode ? "#7afcff" : "#006666",
                borderRadius: "6px",
                padding: "5px",
                fontSize: "10px",
                fontWeight: "bold",
                cursor: "pointer",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              onClick={() => handlePresetClick(preset.config)}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>
    </VisualSettingsPanel>
  )}
</HeaderDiv>
      <BurgerMenu
        isOpen={isBurgerOpen}
        onClose={() => setIsBurgerOpen(false)}
        isDarkMode={isDarkMode}
        siteSections={siteSections}
        moveSiteSection={moveSiteSection}
        resetSiteSections={resetSiteSections}
        sectionThemes={sectionThemes}
        hiddenSections={hiddenSections}
        onToggleSectionVisibility={onToggleSectionVisibility}
        onToggleSectionTheme={onToggleSectionTheme}
        onResetSectionThemes={onResetSectionThemes}
        onToggleTheme={handleThemeToggle}
        onOpenShop={handleShopClick}
        onOpenVip={onOpenVip}
        onOpenAchievements={onOpenAchievements}
        showUltra={showUltra}
        onOpenSettings={handleSettingsClick}
        onOpenHelp={handleHelpClick}
        onOpenInfo={onOpenInfo}
        onOpenOtherOptions={handleOtherOptionsClick}
        onLogout={handleLogoutClick}
        isRoutingMode={isRoutingMode}
        setIsRoutingMode={setIsRoutingMode}
        currentPath={currentPath}
        visualConfig={visualConfig}
        setVisualConfig={setVisualConfig}
        onResetFilters={resetFilters}
        customPresets={customPresets}
        onSavePreset={saveCustomPreset}
        onDeletePreset={deleteCustomPreset}
        onUpdatePresetName={updateCustomPresetName}
        onReorderPresets={reorderCustomPresets}
        setIsFsActive={setIsFsActive}
        loadingStrategy={loadingStrategy}
        onSetLoadingStrategy={onSetLoadingStrategy}
        isStickyBgMode={isStickyBgMode}
        onToggleStickyBg={handleStickyBgToggle}
      />
    </>
  );
};

export default Header;
