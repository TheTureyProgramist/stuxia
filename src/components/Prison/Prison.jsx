import prison from "../../photos/hero-header/prison.webp";
import React, { useState, useEffect, useMemo } from "react";
import styled, { keyframes, css } from "styled-components";

// ==========================================
// 1. КОНСТАНТИ ТА КОНФІГУРАЦІЯ
// ==========================================

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
    desc: "Героїня, що сховала пристрій Сценотвір.",
    images: [],
  },
  {
    id: 2,
    hint: "2. НЕ Ніцерон(але дракон з м/с Динофроз).",
    answers: ["Генерал Трік", "General Trick"],
    rarity: "common",
    desc: "Зрадник Ніцерона.",
    images: [],
  },
  {
    id: 3,
    hint: "3. Містика(ТВ шоу).",
    answers: ["Марина", "Marina"],
    rarity: "legendary",
    desc: "Т/с Реальна містика",
    images: [],
  },
  {
    id: 4,
    hint: "4. Містика(відеогра).",
    answers: ["Кендімен", "Candyman"],
    rarity: "legendary",
    desc: "Майнкрафт кріпіпаста.",
    images: [],
  },
  {
    id: 5,
    hint: "5. Футбол.",
    answers: ["Роналду", "Ronaldo"],
    rarity: "mythic",
    desc: "Легенда спорту.",
    images: [],
  },
  {
    id: 6,
    hint: "6. Не зовсім слон.",
    answers: ["Мелтстон", "Meltston"],
    rarity: "mythic",
    desc: "м/с Динофроз.",
    images: [],
  },
  {
    id: 7,
    hint: "7. Неживе, небезпечне, підказка у назві сайту.",
    answers: ["Вогонь", "Fire"],
    rarity: "common",
    desc: "Володіння ним, привело людину, до прогресу.",
    images: [],
  },
  {
    id: 8,
    hint: "8. шифру із рандомний текст під час завантаження.",
    answers: ["Зона туману", "Fog zone"],
    rarity: "common",
    desc: "Ви його зупинятимете.",
    images: [],
  },
  {
    id: 9,
    hint: "9. Цифра невдахи.",
    answers: ["13"],
    rarity: "common",
    desc: "Число, якого всі бояться.",
    images: [],
  },
  {
    id: 10,
    hint: "10. Полум'я.",
    answers: ["Еліс", "Alice"],
    rarity: "uncommon",
    desc: "Гра Темрява та Полум'я.",
    images: [],
  },
  {
    id: 11,
    hint: "11. .... жлоб.",
    answers: ["Саня", "Sanya"],
    rarity: "uncommon",
    desc: "Персонаж із народних анекдотів.",
    images: [],
  },
  {
    id: 12,
    hint: "12. К.с. В.х.н.",
    answers: ["Кося Вухань", "Kosya Vukhanya"],
    rarity: "uncommon",
    desc: "Всеволод Нестайко. .",
    images: [],
  },
  {
    id: 13,
    hint: "13. Це воно.",
    answers: ["Пеннівайз", "Pennywise"],
    rarity: "uncommon",
    desc: "Жах у подобі клоуна.",
    images: [],
  },
  {
    id: 14,
    hint: "14. Вогняний павук.",
    answers: ["Німергон", "Nimergon"],
    rarity: "uncommon",
    desc: "м/с Атака вірусів.",
    images: [],
  },
  {
    id: 15,
    hint: "15. Власник архіву.",
    answers: ["Хранитель", "Keeper"],
    rarity: "rare",
    desc: "Знає все про минуле.",
    images: [],
  },
  {
    id: 16,
    hint: "16. Слово із підказок.",
    answers: ["..-"],
    rarity: "rare",
    desc: "Здогадався.",
    images: [],
  },
  {
    id: 17,
    hint: "17. Місце.",
    answers: ["Катакомби", "Catacombs"],
    rarity: "rare",
    desc: "Там, де Кейт сховала пристрій.",
    images: [],
  },
  {
    id: 18,
    hint: "18. Ворог Кіри.",
    answers: ["Тітка Ерна", "Aunt Erna"],
    rarity: "rare",
    desc: "Бодо Шефер. Кіра й таємниця бублика.",
    images: [],
  },
  {
    id: 19,
    hint: "19. Жарт Дизель шоу.",
    answers: ["Я чекаю на маньяка", "I'm waiting for the maniac"],
    rarity: "rare",
    desc: "Об'єкт вічного гумору.",
    images: [],
  },
  {
    id: 20,
    hint: "20. ..-",
    answers: ["у", "u"],
    rarity: "common",
    desc: "Азбука морзе.",
    images: [],
  },
  {
    id: 21,
    hint: "21. 12 18 6 11 15.",
    answers: ["Індик", "Turkey"],
    rarity: "uncommon",
    desc: "А я недооцінював вас.",
    images: [],
  },
  {
    id: 22,
    hint: "22. У книзі",
    answers: ["Сторінка", "Page"],
    rarity: "epic",
    desc: "Місце для тексту.",
    images: [],
  },
  {
    id: 23,
    hint: "23. Лео, Ларс і 3персонажі.",
    answers: ["Знайди злочинця", "Find a crimary", "Find a criminal"],
    rarity: "epic",
    desc: "Юліан Пресс. Книга.",
    images: [],
  },
  {
    id: 24,
    hint: "24. Наші акції ростуть швидше, ніж Microsoft.",
    answers: ["Радіопромінь", "Radiobeam"],
    rarity: "epic",
    desc: ".",
    images: [],
  },
  {
    id: 25,
    hint: "25. Японія.",
    answers: ["Гейша", "Geisha"],
    rarity: "epic",
    desc: "Мистецтво висхідного сонця.",
    images: [],
  },
  {
    id: 26,
    hint: "26. Зоотрополіс.",
    answers: ["Шеф Гримало", "Chief Bogo"],
    rarity: "mythic",
    desc: "М/ф Зоотросполіс.",
    images: [],
  },
  {
    id: 27,
    hint: "27. Бік моху.",
    answers: ["Північ", "North"],
    rarity: "common",
    desc: "Орієнтир для мандрівників.",
    images: [],
  },
  {
    id: 28,
    hint: "28. 3 (↑↑) 3.",
    answers: ["7 625 597 484 987", "7625597484987"],
    rarity: "common",
    desc: "Математики і калькулятори це знають :)",
    images: [],
  },
  {
    id: 29,
    hint: "29. Ворог індика.",
    answers: ["Півень", "Rooster"],
    rarity: "common",
    desc: "Нічого сюжетного, це істина у мене вдома.",
    images: [],
  },
];

// ==========================================
// 2. СТИЛІЗОВАНІ КОМПОНЕНТИ
// ==========================================

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

// --- Прогрес Бар ---
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
    box-shadow: 0 5px 15px rgba(160, 32, 240, 0.4);
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
  padding: 30px;
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
  aspect-ratio: 1;
  border-radius: 5px;
  background: ${(props) =>
    props.$solved ? "rgba(160, 32, 240, 0.4)" : "#111"};
  border: 1px solid ${(props) => (props.$solved ? "#a020f0" : "#222")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: ${(props) => (props.$solved ? "#fff" : "#444")};
`;

// ==========================================
// 3. ХАКЕРСЬКИЙ ПЛЕЙСХОЛДЕР (Логіка символів)
// ==========================================

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
      // Створюємо рядок випадкових символів тієї ж довжини, що і підказка
      let res = "";
      for (let i = 0; i < hint.length; i++) {
        res += chars[Math.floor(Math.random() * chars.length)];
      }
      setDisplay(res);
    }, 100); // Оновлення кожні 100мс для ефекту мерехтіння

    return () => clearInterval(interval);
  }, [hint, active, isFinished]);

  return <span>{display}</span>;
};

// ==========================================
// 4. ОСНОВНИЙ КОМПОНЕНТ
// ==========================================

const Prison = () => {
  const [solvedIds, setSolvedIds] = useState(() =>
    JSON.parse(localStorage.getItem("prison_solved") || "[]"),
  );
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [showCollection, setShowCollection] = useState(false);

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
      localStorage.setItem("prison_solved", JSON.stringify(newSolved));
      setInputValue("");
      setIsError(false);
    } else {
      setIsError(true);
      setInputValue("");
      setTimeout(() => setIsError(false), 800);
    }
  };

  const handleReset = () => {
    if (window.confirm("Ви дійсно хочете скинути весь прогрес в'язниці?")) {
      setSolvedIds([]);
      localStorage.removeItem("prison_solved");
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

      {/* ПРОГРЕС БАР */}
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

        {/* ПІДКАЗКА (справжня) з'являється тільки якщо користувач навів мишку або вона стабільна під інпутом */}
        {!isFinished && (
          <p style={{ fontSize: "17px", color: "#808080", marginTop: "10px" }}>
            Підказка: {currentChar?.hint}
          </p>
        )}

        {/* КАРТКА ПРИ ВІДГАДУВАННІ */}
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

      {/* МОДАЛКА КОЛЕКЦІЇ */}
      {showCollection && (
        <ModalOverlay onClick={() => setShowCollection(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3 style={{ color: "#a020f0", textAlign: "center" }}>Архів</h3>
            <CollectionGrid>
              {CHARACTERS_BASE.map((c) => (
                <GridItem key={c.id} $solved={solvedIds.includes(c.id)}>
                  {solvedIds.includes(c.id)
                    ? c.answers[0].substring(0, 6)
                    : "???"}
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
    </PrisonDiv>
  );
};

export default Prison;
