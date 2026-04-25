import prison from "../../photos/hero-header/prison.webp";
import React, { useState, useEffect, useMemo } from "react";
import styled, { keyframes, css } from "styled-components";
import turkeys from "../../photos/vip-images/turkeys/ultra-vip-turkeys.webp";
import localforage from "localforage";
import marina from "../../photos/vip-modal/mystic.webp";
import turkeythree from "../../photos/vip-images/turkeys/turkeysthree.webp";
import candyman from "../../photos/vip-modal/candyman.webp";
import flame from "../../photos/vip-images/flame.webp";
import trick from "../../photos/vip-images/dinofroz/dinofrozeight.webp";
import ronaldy from "../../photos/vip-modal/ronaldy.webp";
import meltston from "../../photos/vip-images/dinofroz/dinofrozfive.webp";
import hills from "../../photos/hero-header/fog.webp";
import nimergone from "../../photos/hero-header/nimergone.webp";
import rooster from "../../photos/vip-images/vip-rooster.webp";
import north from "../../photos/vip-modal/north.webp";
import penny from "../../photos/vip-modal/penny.webp";
const RARITY_CONFIG = {
  common: { name: "Звичайна", color: "#b0b0b0", shadow: "0 0 5px #b0b0b0" },
  uncommon: { name: "Особлива", color: "#4caf50", shadow: "0 0 10px #4caf50" },
  rare: { name: "Рідкісна", color: "#2196f3", shadow: "0 0 15px #2196f3" },
  epic: { name: "Епічна", color: "#a020f0", shadow: "0 0 20px #a020f0" },
  mythic: { name: "Міфічна", color: "#ff7f50", shadow: "0 0 25px #ff7f50" },
  legendary: {
    name: "Легендарна",
    color: "#ffeb3b",
    shadow: "0 0 30px #ffeb3b",
  },
  ultralegendary: {
    name: "Ультралегендарна",
    color: "rainbow",
    shadow: "0 0 35px rgba(255,255,255,0.5)",
    anim: keyframes`
      0% { border-color: #ff0000; color: #ff0000; text-shadow: 0 0 10px #ff0000; }
      25% { border-color: #00ff00; color: #00ff00; text-shadow: 0 0 10px #00ff00; }
      50% { border-color: #0000ff; color: #0000ff; text-shadow: 0 0 10px #0000ff; }
      75% { border-color: #ffff00; color: #ffff00; text-shadow: 0 0 10px #ffff00; }
      100% { border-color: #ff0000; color: #ff0000; text-shadow: 0 0 10px #ff0000; }
    `,
  },
};

const CHARACTERS_BASE = [
  {
    id: 1,
    hint: "1. Індичка",
    answers: ["Кейт", "Kate"],
    rarity: "ultralegendary",
    desc: "Хранителька Сценотвіру.",
    images: [turkeys],
  },
  {
    id: 2,
    hint: "2. НЕ Ніцерон(але дракон з м/с Динофроз).",
    answers: ["Генерал Трік", "General Trick"],
    rarity: "ultralegendary",
    desc: "Зрадник Ніцерона.",
    images: [trick],
  },
  {
    id: 3,
    hint: "3. Містика(ТВ шоу).",
    answers: ["Марина", "Marina"],
    rarity: "ultralegendary",
    desc: "Т/с Реальна містика",
    images: [marina],
  },
  {
    id: 4,
    hint: "4. Містика(відеогра).",
    answers: ["Кендімен", "Candyman"],
    rarity: "legendary",
    desc: "Майнкрафт кріпіпаста. ",
    images: [candyman],
  },
  {
    id: 5,
    hint: "5. Футбол.",
    answers: ["Роналду", "Ronaldo"],
    rarity: "legendary",
    desc: "Легенда спорту.",
    images: [ronaldy],
  },
  {
    id: 6,
    hint: "6. Не зовсім слон.",
    answers: ["Мелтстон", "Meltston"],
    rarity: "legendary",
    desc: "м/с Динофроз.",
    images: [meltston],
  },
  {
    id: 7,
    hint: "7. Шифр рандомного тексту під час завантаження.",
    answers: ["Зона туману", "Fog zone"],
    rarity: "mythic",
    desc: "Ви його зупинятимете.",
    images: [hills],
  },
  {
    id: 8,
    hint: "8. Цифра невдахи.",
    answers: ["13"],
    rarity: "mythic",
    desc: "Число, якого всі бояться.",
    images: [],
  },
  {
    id: 9,
    hint: "9. Полум'я.",
    answers: ["Еліс", "Alice"],
    rarity: "mythic",
    desc: "Гра Темрява та Полум'я.",
    images: [flame],
  },
  {
    id: 10,
    hint: "10. К.с. В.х.н.",
    answers: ["Кося Вухань", "Kosya Vukhanya"],
    rarity: "epic",
    desc: "Всеволод Нестайко. .",
    images: [],
  },
  {
    id: 11,
    hint: "11. Це воно.",
    answers: ["Пеннівайз", "Pennywise"],
    rarity: "epic",
    desc: "Жах у подобі клоуна.",
    images: [penny],
  },
  {
    id: 12,
    hint: "12. Вогняний павук.",
    answers: ["Німергон", "Nimergon"],
    rarity: "epic",
    desc: "м/с Атака вірусів.",
    images: [nimergone],
  },
  {
    id: 13,
    hint: "13. Слово із підказок.",
    answers: ["..-"],
    rarity: "rare",
    desc: "Здогадався.",
    images: [],
  },
  {
    id: 14,
    hint: "14. Ворог Кіри.",
    answers: ["Тітка Ерна", "Aunt Erna"],
    rarity: "rare",
    desc: "Бодо Шефер. Кіра й таємниця бублика.",
    images: [],
  },
  {
    id: 15,
    hint: "15. Жарт Дизель шоу.",
    answers: ["Я чекаю на маньяка", "I'm waiting for the maniac"],
    rarity: "rare",
    desc: "Ще один з Дизель шоу.",
    images: [],
  },
  {
    id: 16,
    hint: "16. ..-",
    answers: ["у", "u"],
    rarity: "uncommon",
    desc: "Азбука морзе.",
    images: [],
  },
  {
    id: 17,
    hint: "17. 12 18 6 11 15.",
    answers: ["Індик", "Turkey"],
    rarity: "uncommon",
    desc: "А я недооцінював вас.",
    images: [turkeythree],
  },
  {
    id: 18,
    hint: "18. Наші акції ростуть швидше, ніж Microsoft.",
    answers: ["Радіопромінь", "Radiobeam"],
    rarity: "uncommon",
    desc: "Жарт із Дизель шоу",
    images: [],
  },
  {
    id: 19,
    hint: "19. Бік моху.",
    answers: ["Північ", "North"],
    rarity: "common",
    desc: "Орієнтир для мандрівників.",
    images: [north],
  },
  {
    id: 20,
    hint: "20. 3 (↑↑) 3.",
    answers: ["7 625 597 484 987", "7625597484987", "7, 625, 597, 484, 987"],
    rarity: "common",
    desc: "Математики і калькулятори це знають :)",
    images: [],
  },
  {
    id: 21,
    hint: "21. Ворог індика.",
    answers: ["Півень", "Rooster"],
    rarity: "common",
    desc: "Нічого сюжетного, це істина у мене вдома.",
    images: [rooster],
  },
];
const fadeIn = keyframes`from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); }`;
const shake = keyframes`0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); }`;
const PrisonDiv = styled.div`
  position: relative;
  width: 98vw;
  margin-bottom: -20px;
  margin-left: 50%;
  transform: translateX(-50%);
  min-height: 360px;
  display: flex;
  background-size: cover;
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${prison});
  background-repeat: no-repeat;
  background-position: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 40px 0;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  @media (min-width: 1200px) {
    min-height: 620px;
  }
`;

const Title = styled.h2`
  color: #a020f0;
  font-size: 3rem;
  text-transform: uppercase;
  margin: 0;
  text-shadow: 0 0 15px rgba(160, 32, 240, 0.8);
`;
const ProgressWrapper = styled.div`
  width: 95%;
  max-width: 600px;
  margin-bottom: -5px;
`;
const ProgressInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-bottom: 5px;
  color: #a020f0;
  font-weight: bold;
  text-transform: uppercase;
`;

const ProgressBarBase = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${(props) => props.$percent}%;
  background: #a020f0;
  box-shadow: 0 0 10px #a020f0;
  transition: width 0.5s ease;
`;

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background: rgba(10, 10, 10, 0.85);
  padding: 30px;
  border-radius: 15px;
  border: 2px solid #a020f0;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 0 30px rgba(160, 32, 240, 0.4);
`;

const InputGroup = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  position: relative;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 14px;
  background: #000;
  color: #9800a5; /* Хакерський зелений колір тексту */
  border: 2px solid ${(props) => (props.$error ? "#ff0000" : "#333")};
  border-radius: 5px;
  outline: none;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.1rem;
  transition: all 0.3s;
  animation: ${(props) =>
    props.$error
      ? css`
          ${shake} 0.3s ease-in-out
        `
      : "none"};
  &:focus {
    border-color: #a020f0;
  }
  &::placeholder {
    color: #b300ff;
  }
`;

const ActionButton = styled.button`
  padding: 12px 20px;
  background: ${(props) => (props.$alt ? "#222" : "#a020f0")};
  color: white;
  border: 1px solid ${(props) => (props.$alt ? "#444" : "#a020f0")};
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.3s;
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(157, 0, 255, 0.4);
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const ResultCard = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #000;
  border-radius: 12px;
  image-rendering: -webkit-optimize-contrast; 
  object-fit: contain;
  aspect-ratio: attr(width) / attr(height);
  border: 2px solid;
  text-align: center;
  width: 100%;
  animation: ${fadeIn} 0.5s ease;
  ${({ $rarity }) => {
    const config = RARITY_CONFIG[$rarity];
    if (config.color === "rainbow")
      return css`
        animation: ${config.anim} 3s linear infinite;
      `;
    return css`
      border-color: ${config.color};
      box-shadow: ${config.shadow};
    `;
  }}
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  backdrop-filter: blur(15px);
`;

const ModalContent = styled.div`
  background: #050505;
  border: 1px solid #a020f0;
  padding: 20px;
  border-radius: 15px;
  width: 90%;
  max-width: 700px;
  color: white;
  position: relative;
`;

const CollectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 10px;
  margin-top: 20px;
`;

const GridItem = styled.div`
  aspect-ratio: 3 / 2;
  border-radius: 5px;
  background: #111;
  border: 1px solid #222;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  color: ${(props) => (props.$solved ? "#fff" : "#444")};
  transition: all 0.3s ease;

  ${(props) => props.$solved && css`
    ${({ $rarity }) => {
      const config = RARITY_CONFIG[$rarity];
      if (config.color === "rainbow")
        return css`
          animation: ${config.anim} 3s linear infinite;
        `;
      return css`
        border-color: ${config.color};
        box-shadow: ${config.shadow};
        background: ${config.color + "33"}; /* Напівпрозорий фон кольору рідкості */
      `;
    }}
  `}
`;
const HackerPlaceholder = ({ active, hint, isFinished }) => {
  const [display, setDisplay] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>?/[]{}";

  useEffect(() => {
    if (isFinished) {
      setDisplay("SYSTEM_LOCKED_WAIT_FOR_UPDATE");
      return;
    }
    if (!active) return;
    const interval = setInterval(() => {
      let res = "";
      for (let i = 0; i < hint.length; i++) {
        res += chars[Math.floor(Math.random() * chars.length)];
      }
      setDisplay(res);
    }, 100); 
    return () => clearInterval(interval);
  }, [hint, active, isFinished]);
  return <span>{display}</span>;
};
const layouts = {
  cyrillic: [
    "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ї",
    "Ф", "І", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Є", "Ґ",
    "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", "SPACE", "BACK"
  ],
  english: [
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L",
    "Z", "X", "C", "V", "B", "N", "M", "SPACE", "BACK"
  ],
  numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "SPACE", "BACK"]
};
const KeyboardWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const ModeSwitcher = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  @media (max-width: 480px) {
    gap: 4px;
  }
`;

const KeysGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
`;

const splitKeyAnimation = keyframes`
  0% { transform: translate(0, 0) scale(1); opacity: 1; }
  100% { transform: translate(var(--tx), var(--ty)) rotate(var(--rot)) scale(1.1); opacity: 0; }
`;

const KeyBtn = styled.button`
  position: relative;
  background: #000;
  border: 1px solid #a020f0;
  color: #a020f0;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  border-radius: 4px;
  &:hover { background: #1a0025; }
  &.wide { width: 26px; }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    font-size: 11px;
    &.wide { width: 20px; }
  }

  @media (max-width: 340px) {
    width: 22px;
    &.wide { width: 22px; }
  }
`;

const FlyPart = styled.div`
  position: absolute;
  inset: -1px;
  background: #a020f0;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  pointer-events: none;
  z-index: 10;
  animation: ${splitKeyAnimation} 0.5s ease-out forwards;
`;

const Key = ({ char, onClick }) => {
  const [isPressing, setIsPressing] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0, r: 0 });
  const displayChar = char === "SPACE" ? "" : char === "BACK" ? "⌫" : char;

  const handlePress = () => {
    // Генеруємо випадковий вектор розліту
    const rx = (Math.random() - 0.5) * 160; 
    const ry = -80 - Math.random() * 100;  
    const rr = (Math.random() - 0.5) * 120; 
    setCoords({ x: rx, y: ry, r: rr });

    setIsPressing(true);
    onClick(char);
    setTimeout(() => setIsPressing(false), 500);
  };

  return (
    <KeyBtn 
      className={char === "SPACE" || char === "BACK" ? "wide" : ""} 
      onClick={handlePress}
    >
      {displayChar}
      {isPressing && (
        <FlyPart 
          style={{ 
            '--tx': `${coords.x}px`, 
            '--ty': `${coords.y}px`, 
            '--rot': `${coords.r}deg` 
          }}
        >
          {displayChar}
        </FlyPart>
      )}
    </KeyBtn>
  );
};

const Prison = () => {
  const [solvedIds, setSolvedIds] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [showCollection, setShowCollection] = useState(false);
  const [selectedCharDetails, setSelectedCharDetails] = useState(null);
  const [keyboardMode, setKeyboardMode] = useState("cyrillic");

  useEffect(() => {
    const loadProgress = async () => {
      const saved = await localforage.getItem("prison_solved");
      if (saved) setSolvedIds(saved);
    };
    loadProgress();
  }, []);

  const unsolvedPool = useMemo(
    () => CHARACTERS_BASE.filter((c) => !solvedIds.includes(c.id)),
    [solvedIds],
  );
  const [currentChar, setCurrentChar] = useState(null);

  useEffect(() => {
    if (!currentChar && unsolvedPool.length > 0) {
      setCurrentChar(
        unsolvedPool[Math.floor(Math.random() * unsolvedPool.length)],
      );
    }
  }, [unsolvedPool, currentChar]);

  const handleCheck = () => {
    if (!currentChar || !inputValue) return;

    const isCorrect = currentChar.answers.some(
      (ans) => ans.toLowerCase() === inputValue.trim().toLowerCase()
    );

    if (isCorrect) {
      const newSolved = [...solvedIds, currentChar.id];
      setSolvedIds(newSolved);
      localforage.setItem("prison_solved", newSolved);
      setInputValue("");
      setIsError(false);
    } else {
      setIsError(true);
      setInputValue("");
      setTimeout(() => setIsError(false), 800);
    }
  };

  const handleKeyPress = (char) => {
    if (char === "SPACE") {
      setInputValue(prev => prev + " ");
    } else if (char === "BACK") {
      setInputValue(prev => prev.slice(0, -1));
    } else {
      setInputValue(prev => prev + char);
    }
  };

  const handleReset = () => {
    if (window.confirm("Ви дійсно хочете скинути весь прогрес в'язниці?")) {
      setSolvedIds([]);
      localforage.removeItem("prison_solved");
      setCurrentChar(null);
      setInputValue("");
    }
  };

  const isFinished = solvedIds.length === CHARACTERS_BASE.length;
  const progressPercent = (solvedIds.length / CHARACTERS_BASE.length) * 100;

  return (
    <PrisonDiv>
      <Title>В'язниця</Title>

      <div style={{ display: "flex", gap: "10px" }}>
        <ActionButton $alt onClick={handleReset} title="Скинути прогрес">
          ↺
        </ActionButton>
        <ActionButton $alt onClick={() => setShowCollection(true)}>
          Колекція
        </ActionButton>
      </div>
      <ProgressWrapper>
        <ProgressInfo>
          <span>Прогрес</span>
          <span>
            {solvedIds.length} / {CHARACTERS_BASE.length} Розгадано
          </span>
        </ProgressInfo>
        <ProgressBarBase>
          <ProgressFill $percent={progressPercent} />
        </ProgressBarBase>
      </ProgressWrapper>

      <GameContainer>
        <div
          style={{
            width: "100%",
            marginBottom: "10px",
            color: "#a020f0",
            fontFamily: "monospace",
            fontSize: "0.9rem",
          }}
        >
          {"> "}
          {isFinished ? (
            "Усі загадки відгадані"
          ) : (
            <>
              HINT:{" "}
              <HackerPlaceholder
                active={!inputValue}
                hint={currentChar?.hint || ""}
                isFinished={isFinished}
              />
            </>
          )}
        </div>

        <InputGroup>
          <StyledInput
            type="text"
            value={inputValue}
            $error={isError}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isFinished}
            placeholder={isFinished ? "Вірно" : "Уведіть відповідь"}
            onKeyPress={(e) => e.key === "Enter" && handleCheck()}
          />
          <ActionButton
            onClick={handleCheck}
            disabled={isFinished || !inputValue}
          >
            ✓
          </ActionButton>
          <ActionButton
            $alt
            onClick={() => setCurrentChar(null)}
            disabled={isFinished}
          >
            ⏭
          </ActionButton>
        </InputGroup>

        <KeyboardWrapper>
          <ModeSwitcher>
            <ActionButton $alt={keyboardMode !== "cyrillic"} onClick={() => setKeyboardMode("cyrillic")} style={{fontSize: '10px', padding: '5px 10px'}}>UA</ActionButton>
            <ActionButton $alt={keyboardMode !== "english"} onClick={() => setKeyboardMode("english")} style={{fontSize: '10px', padding: '5px 10px'}}>EN</ActionButton>
            <ActionButton $alt={keyboardMode !== "numbers"} onClick={() => setKeyboardMode("numbers")} style={{fontSize: '10px', padding: '5px 10px'}}>123</ActionButton>
          </ModeSwitcher>
          <KeysGrid>
            {layouts[keyboardMode].map((char, idx) => (
              <Key 
                key={`${keyboardMode}-${char}-${idx}`} 
                char={char} 
                onClick={handleKeyPress} 
              />
            ))}
          </KeysGrid>
        </KeyboardWrapper>
        {!isFinished && (
          <p style={{ fontSize: "17px", color: "#808080", marginTop: "10px" }}>
            Підказка: {currentChar?.hint}
          </p>
        )}
        {solvedIds.includes(currentChar?.id) && (
          <ResultCard $rarity={currentChar.rarity}>
            <div style={{ color: RARITY_CONFIG[currentChar.rarity].color }}>
              {RARITY_CONFIG[currentChar.rarity].name.toUpperCase()}
            </div>
            <h3
              style={{ margin: "10px 0", color: "#fff", letterSpacing: "2px" }}
            >
              {currentChar.answers[0].toUpperCase()}
            </h3>
            {currentChar.images && currentChar.images.length > 0 && (
              <img 
                src={currentChar.images[0]} 
                alt={currentChar.answers[0]} 
                style={{ 
                  width: '100%', 
                  maxWidth: '220px', 
                  borderRadius: '8px', 
                  marginBottom: '15px',
                  border: '1px solid #a020f0' 
                }} 
              />
            )}
            <p style={{ color: "#888", fontSize: "0.85rem" }}>
              {currentChar.desc}
            </p>
            <ActionButton
              onClick={() => setCurrentChar(null)}
              style={{ marginTop: "15px" }}
            >
              Далі
            </ActionButton>
          </ResultCard>
        )}
      </GameContainer>
      {showCollection && (
        <ModalOverlay onClick={() => setShowCollection(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3 style={{ color: "#a020f0", textAlign: "center" }}>Архів</h3>
            <p
              style={{
                color: "#888",
                textAlign: "center",
                fontSize: "0.7rem",
                fontStyle: "italic",
                margin: "5px 0 20px 0",
                lineHeight: "1.4",
              }}
            >
              Вхід розміщений у скромному вході, закинутого заводу. В якому безліч картин. Щоправда лунають моторошні звуки періодично. Відвідувачі не поверталися. Чи розгадаєте ви секрети місця? 
            </p>
            <CollectionGrid>
              {CHARACTERS_BASE.map((c) => (
                <GridItem 
                  key={c.id} 
                  $solved={solvedIds.includes(c.id)}
                  $rarity={c.rarity}
                  onClick={() => solvedIds.includes(c.id) && setSelectedCharDetails(c)}
                  style={{ cursor: solvedIds.includes(c.id) ? 'pointer' : 'default' }}
                >
                  {solvedIds.includes(c.id) ? (
                    c.images && c.images.length > 0 ? (
                      <img 
                        src={c.images[0]} 
                        alt={c.answers[0]} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} 
                      />
                    ) : (
                      c.answers[0].substring(0, 26)
                    )
                  ) : "???"}
                </GridItem>
              ))}
            </CollectionGrid>
            <ActionButton
              onClick={() => setShowCollection(false)}
              style={{ marginTop: "30px", width: "100%" }}
            >
              Закрити
            </ActionButton>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* МОДАЛКА ДЕТАЛЕЙ ПЕРСОНАЖА */}
      {selectedCharDetails && (
        <ModalOverlay onClick={() => setSelectedCharDetails(null)} style={{ zIndex: 2100 }}>
          <ModalContent onClick={(e) => e.stopPropagation()} style={{ maxWidth: "400px" }}>
            <ActionButton 
              onClick={() => setSelectedCharDetails(null)} 
              style={{ position: 'absolute', top: '10px', right: '10px', padding: '5px 10px', zIndex: 10 }}
            >
              ×
            </ActionButton>
            <ResultCard $rarity={selectedCharDetails.rarity} style={{ marginTop: 0 }}>
              <div style={{ color: RARITY_CONFIG[selectedCharDetails.rarity].color }}>
                {RARITY_CONFIG[selectedCharDetails.rarity].name.toUpperCase()}
              </div>
              <h3 style={{ margin: "10px 0", color: "#fff", letterSpacing: "2px" }}>
                {selectedCharDetails.answers[0].toUpperCase()}
              </h3>
              {selectedCharDetails.images && selectedCharDetails.images.length > 0 && (
                <img 
                  src={selectedCharDetails.images[0]} 
                  alt={selectedCharDetails.answers[0]} 
                  style={{ 
                    width: '100%', 
                    maxWidth: '220px', 
                    borderRadius: '8px', 
                    marginBottom: '15px',
                    border: '1px solid #a020f0' 
                  }} 
                />
              )}
              <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: "15px" }}>
                {selectedCharDetails.desc}
              </p>
              <div style={{ fontSize: '0.7rem', color: '#444' }}>
                ID: {selectedCharDetails.id}
              </div>
              <ActionButton
                onClick={() => setSelectedCharDetails(null)}
                style={{ marginTop: "15px", width: '100%' }}
              >
                Назад до архіву
              </ActionButton>
            </ResultCard>
          </ModalContent>
        </ModalOverlay>
      )}
    </PrisonDiv>
  );
};
export default Prison;