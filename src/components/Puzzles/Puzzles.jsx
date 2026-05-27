import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const MainTitle = styled.h2`
  text-align: center;
  font-size: 22px;
  color: white;
  margin-bottom: 30px;
  font-family: "Montserrat", sans-serif;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
`;

const HelpButton = styled.button`
  background: #ffb36c;
  color: black;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  &:hover {
    background: white;
    transform: scale(1.1);
  }
`;

const PuzzlesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
  justify-items: center;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const PuzzleCard = styled(motion.div)`
  cursor: pointer;
  text-align: center;
  position: relative;
  width: 100%;
  max-width: 320px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 12px;
  border: 3px solid ${(props) => props.$rarityColor || "#ffb36c"};
  background: ${(props) => props.$rarityBackground || "black"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: white;
`;

// const PreviewImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: transform 0.3s;
//   ${PuzzleCard}:hover & {
//     transform: scale(1.1);
//   }
// `;
const SearchInput = styled.input`
  display: block;
  margin: 0 auto 30px;
  width: 100%;
  max-width: 400px;
  padding: 12px 20px;
  border-radius: 25px;
  border: 2px solid #ffb36c;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 16px;
  outline: none;
  transition: all 0.3s;
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  &:focus {
    box-shadow: 0 0 15px rgba(255, 179, 108, 0.3);
    border-color: #ffb36c;
  }
`;

const LoadMoreBtn = styled.button`
  display: block;
  margin: 40px auto;
  padding: 12px 30px;
  background: transparent;
  border: 2px solid #ffb36c;
  color: #ffb36c;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s;
  &:hover {
    background: #ffb36c;
    color: black;
  }
`;

const FullscreenOverlay = styled.div`
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
`;

const InfoModal = styled(motion.div)`
  background: #222;
  padding: 3px;
  border-radius: 3px;
  border: 2px solid #ffb36c;
  color: white;
  max-width: 500px;
  width: 90%;
  text-align: center;
  border: 2px solid ${(props) => props.$rarityColor || "#ffb36c"};
  background: ${(props) => props.$rarityBackground || "#222"};
`;

const CloseBtn = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #ffb36c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;

const getRarityInfo = (id) => {
  if (id >= 1 && id <= 16) return { level: "Звичайна", color: "#4caf50" };
  if (id >= 17 && id <= 28) return { level: "Подвійна", color: "#2196f3" };
  if (id >= 29 && id <= 50) return { level: "Пошукова", color: "#9c27b0" };
  if (id >= 51 && id <= 70) return { level: "Ускладнена", color: "#ff9800" };
  if (id >= 71 && id <= 76) return { level: "Хардкорна", color: "#fe5f94" };
  if (id >= 77 && id <= 84) return { level: "Обмежена", color: "#b3453e" };
  if (id >= 85 && id <= 100) return { level: "Загадково-неможлива", color: "#ff4545", background: "#000" };
  return { level: "Невідома", color: "#ccc" };
};

const customMessages = {
  1: "Все почнеться з будинку.",
  2: "У дворі свої правила.",
  3: "Повірте, поле і ліс, прояснюють таємниці.",
  4: "У закинутому будинку, є таємниця.",
  5: "Школа, школа. А вона це не забула.",
  6: "Завод. Тільки який :) Іграшок? Ні спирту :)",
  7: "По коліях. Павук.",
  8: "Поїзд, пригод вирушає.",
  9: "Ніч в музеї :) Але не зовсім.",
  10: "Катакомби, які ж секрети вони ховають.",
  11: "Цікавіше і цікавіше",
  12: "Бібліотека. Історія починає прояснюватись",
  13: "Історія Кейт",
  14: "Здохни ТВ. Телешоу к-ка років тому, яка змінило вас і долю к-кох людей. Смерч",
  15: "Здохни ТВ. Післязавтра, тут буде холодно!",
  16: "Здохни ТВ. Коли холодно. Він вас знайде де завгодно.",
  17: "Пливи, пливи до бережка.",
  18: "З гороху.",
  19: "Яйце-райце.",
  20: "Кривенька ніжка.",
  21: "Кобиляча голова.",
  22: "Перевтілюйтеся в що і кого завгодно для втечі",
  23: "І знову ліс.",
  24: "Цей дракон такий прекрасний.",
  25: "Її викрали.",
  26: "Микито, здавайся.",
  27: "А цей змій вже не дружній",
  28: "Козацтво закінчилось. А пошук злочинця почався. Знайди злочинця - Юліан Пресс",
  29: "Хочеш бути мільйонером. То ось роби що. Це книга 'Кіра і таємниця бублика'",
  30: "Неймовірні теорії. Макс Кідрук",
  31: "3 щоденники.",
  32: "Болото.",
  33: "Таємничий острів і порятук друга. Жуль Верн",
  34: "Папороть.",
  35: "10000льє під водою, і подорож у центр землі.",
  36: "Пожежник, але він не гасить, він вогнем полює на книги.",
  37: "Париж. Але не реальний",
  38: "Небезпека ШІ.",
  39: "Ця будівля ходить? Ні не совиний дім. Бо це замок. І не ходить, а мандрує. Мандрівний замок Хаула, без нікого.",
  40: "Пандора.",
  41: "Діма: А хто убив космонавтів? Кейт: Чужий. Влад: Ура! Сорі, треба знищити цю тварюку, хоча фотку з нею, я не проти зробити.",
  42: "Вау, я маленькй, як комаха.",
  43: "Рікдень.",
  44: "Діма, це не ліліпути, чи маленькі люди, це...",
  45: "Теорія неймовірності.",
  46: "Єдинороги.",
  47: "Кейт, чому нас переслідує собаколов?",
  48: "Діма: '(чистить зуби), не думав, що той собаколов з м/с 'Цуценя в моїй кишені''. Позаду Діми з'явилась людина з ножем. Кейт(телепатично): 'Вдавай, що все гаразд, ти став жертвою аномалії. Той чоловік, що стоїть позаду тебе з ножем, не чіпатиме, доки ти вдаватимеш, що все гаразд.' Зустріньте першу аномалію!",
  49: "Болото мук.",
  50: "Дім з клоуном.",
  51: "Реальність. Атлантида. Ми тонемо! Звісно, ми ж на Титаніку.",
  52: "У бермудському трикутнику. Кайдзю.",
  53: "Антарктида. Руїни.",
  54: "Сибірська нескінченність.",
  55: "Китайська стіна.",
  56: "...... Ні! Але .....",
  57: "Секрет масонів у статї свободи.",
  58: "Переслідування спецлужб.",
  59: "Інший світ, під ногами.",
  60: "Аномалія: охоронець супермаркету, що переслідує вас.",
  61: "Мег.",
  62: "Піраміда.",
  63: "Потойбічні бджоли з т/с 'Реальна містика'.",
  64: "Аномалія: зупинка часу.",
  65: "Повітряна куля над Італією.",
  66: "Хованки з динозаврами. Історія Поліни",
  67: "Рослини, це монстри, в деяких місцях. Історія Олі",
  68: "Я зайва. Історія Помилки.",
  69: "Кішки-мишки. Історія Доміно",
  70: "Ти мій друг. Історія Домініца.",
  71: "Не відводь від неї погляду!",
  72: "Не дивись на фото та відео із ним!",
  73: "Спуск в нікуди.",
  74: "Він виє.",
  75: "Старий маєток.",
  76: "Білі очі.",
  77: "Мертвий світ.",
  78: "Війна світів.",
  79: "Будинок, знову :)",
  80: "100 дверей",
  81: "Відеокамера, єдине, що рятує.",
  82: "Очі",
  83: "У тебе залишилось 7 хвилин.",
  84: "2 рази попереджаю, а на 3тій тебе по звуку шукаю.",
  85: "Завод.",
  86: "Поїзд у Київ.",
  87: "Закинута телестудія",
  88: "Жовтневий палац. За годину до виступу 'Дизель шоу'",
  89: "Енеїда. Касета",
  90: "Агенти справедливості. Ще одна касета.",
  91: "Речдок у нашій пригоді.",
  92: "Чому всі мовчать? Метра: 'Мовчи, як ягнятко'",
  93: "Ці оси полюють на нас!",
  94: "Містичне волосся.",
  95: "Страшко.",
  96: "Бездонні очі. Ця і 2 останні пригоди з 'Реальної містики'",
  97: "Кімната 1408.",
  98: "Минуле",
  99: "Вулканічний замок",
  100: "Підйом на Еверест.",
};

const Puzzles = () => {
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [helpModalCustomText] = useState(
    `Друзі, «Стихія» — непростий сайт. Механіки та сценарій можуть змінитися, але наразі в мене такий план. Приблизно планую <strong>100 епізодів з головоломками</strong> за сюжетом «Сценотвору». Сюжет ділиться на <strong>8 глав</strong>, кожна з яких важча за попередню.

              <div
                style={{
                  padding: "1px",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "3px",
                  marginBottom: "12px",
                }}
              >
                <strong style={{ color: "#ff4d4d" }}>
                  ❤️ Механіка здоров'я та обмежень:
                </strong>
                <p
                  style={{
                    margin: "4px 0 0 0",
                    fontSize: "10px",
                    color: "#ccc",
                  }}
                >
                  У вас буде шкала здоров'я. Вона втрачається при невірному
                  натисканні на локаціях, бездіяльності, скрімерах та
                  потраплянні в пастки. Відновлюється при застосуванні аптечки
                  або вирішенні головоломки.
                  <br />
                  <strong>Аптечка (5 шт. на розділ):</strong> неможливо купити
                  (з метою поваги до авторських прав). Відновлює 50% здоров'я та
                  зменшує отриману шкоду на 50% на 50 секунд.
                  <br />
                  <span style={{ color: "#ff4d4d" }}>⚠️ Увага:</span> у разі
                  смерті розділ починається з самого початку!
                </p>
              </div>

              <h4 style={{ margin: "10px 0 5px 0", fontSize: "13px" }}>
                Рівні складності глав:
              </h4>
              <ul
                style={{ listStyleType: "none", paddingLeft: "0", margin: "0" }}
              >
                <li style={{ marginBottom: "6px", fontSize: "11px" }}>
                  <span
                    style={{
                      background: "#4caf50",
                      color: "#fff",
                      padding: "1px 6px",
                      borderRadius: "3px",
                      marginRight: "6px",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    ЗВИЧАЙНА (1-15)
                  </span>
                  Розв'яжіть головоломку, щоб втекти. Розгадуйте таємниці міста
                  та села. На локаціях буде багато пазлів, які розповідають
                  історію для просування далі.
                </li>
                <li style={{ marginBottom: "6px", fontSize: "11px" }}>
                  <span
                    style={{
                      background: "#2196f3",
                      color: "#fff",
                      padding: "1px 6px",
                      borderRadius: "3px",
                      marginRight: "6px",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    ПОДВІЙНА (16-27)
                  </span>
                  Головоломка, що має 2 фази або рівні. Досліджуйте різні світи
                  українських казок.
                </li>
                <li style={{ marginBottom: "6px", fontSize: "11px" }}>
                  <span
                    style={{
                      background: "#9c27b0",
                      color: "#fff",
                      padding: "1px 6px",
                      borderRadius: "3px",
                      marginRight: "6px",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    ПОШУКОВА (28-50)
                  </span>
                  Подвійна + пошук предметів для розблокування
                  підказок/об'єктів. Деякі предмети будуть дуже маленькими, і
                  для їх отримання знадобиться приціл та постріл із рушниці.
                  Кількість предметів указана. Знайдіть нових союзників.
                  Досліджуйте світи казок і детективу.
                </li>
                <li style={{ marginBottom: "6px", fontSize: "11px" }}>
                  <span
                    style={{
                      background: "#ff9800",
                      color: "#fff",
                      padding: "1px 6px",
                      borderRadius: "3px",
                      marginRight: "6px",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    УСКЛАДНЕНА (51-70)
                  </span>
                  Пошукова + для отримання ключового предмета головоломки
                  спочатку необхідно знайти інший допоміжний предмет. Казка
                  закінчується, реальний світ має купу загадок: конспірологія,
                  змови.
                </li>
                <li style={{ marginBottom: "6px", fontSize: "11px" }}>
                  <span
                    style={{
                      background: "#e91e63",
                      color: "#fff",
                      padding: "1px 6px",
                      borderRadius: "3px",
                      marginRight: "6px",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    ХАРДКОРНА (71-77)
                  </span>
                  Ускладнена + необхідно протриматися певний час після
                  проходження головоломки. Патрони надалі обмежені. У цих світах
                  стають реальними, історії, які були лише нічними страшилками.
                </li>
                <li style={{ marginBottom: "6px", fontSize: "11px" }}>
                  <span
                    style={{
                      background: "#f44336",
                      color: "#fff",
                      padding: "1px 6px",
                      borderRadius: "3px",
                      marginRight: "6px",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    ОБМЕЖЕНА (78-85)
                  </span>
                  Жорсткі ліміти часу, кількості ходів тощо. Гра жаху, де ніхто
                  вам не допоможе. Ви любите перемагати монстрів у відеогрі, але
                  їм набридло програвати. Сценотвір зробив їх реальними, тож
                  вони беруть реванш.
                </li>
                <li style={{ marginBottom: "6px", fontSize: "11px" }}>
                  <span
                    style={{
                      background: "#000",
                      color: "#ff3333",
                      border: "1px solid #ff3333",
                      padding: "1px 6px",
                      borderRadius: "3px",
                      marginRight: "6px",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Загадково-неможлива (86-100)
                  </span>
                  Кількість патронів та необхідних предметів повністю
                  засекречена. Розгадуйте секрети Києва, і покладіть жахіттю
                  кінець.
                </li>
              </ul>`
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
  const puzzleData = Array.from({ length: 100 }, (_, i) => {
    const id = i + 1;
    const rarityInfo = getRarityInfo(id);
    return {
      id,
      title: `Головоломка ${id}`,
      message:
        customMessages[id] ||
        `Об'єкт заблоковано. Рівень: ${rarityInfo.level}. Унікальний ID: #PZ-${1001 + i}. Тимчасово недоступно через підготовку до оновлення "Сценотвору".`,
      rarityColor: rarityInfo.color,
      rarityBackground: rarityInfo.background || "black", // Default to black if not specified
    };
  });

  const filteredPuzzles = puzzleData.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const displayedPuzzles = filteredPuzzles.slice(0, visibleCount);
  const showLoadMore = filteredPuzzles.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <div
      style={{ padding: "40px 20px", minHeight: "100vh", background: "#111" }}
    >
      <TitleContainer>
        <HelpButton onClick={() => setShowHelpModal(true)}>?</HelpButton>
        <MainTitle style={{ marginBottom: 0 }}>ОБЕРІТЬ ГОЛОВОЛОМКУ</MainTitle>
      </TitleContainer>

      <SearchInput
        type="text"
        placeholder="Пошук головоломки..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <PuzzlesGrid layout>
        <AnimatePresence>
          {displayedPuzzles.map((p) => (
            <PuzzleCard
              key={p.id}
              onClick={() => setSelectedBlock(p)}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.02 }}
            >
              <ImageWrapper $rarityColor={p.rarityColor} $rarityBackground={p.rarityBackground}>???</ImageWrapper>
              <h3 style={{ color: p.rarityColor, marginTop: "10px" }}>{p.title}</h3>
            </PuzzleCard>
          ))}
        </AnimatePresence>
      </PuzzlesGrid>

      {showLoadMore && (
        <LoadMoreBtn onClick={handleLoadMore}>ЗАВАНТАЖИТИ ЩЕ</LoadMoreBtn>
      )}

      <AnimatePresence>
        {selectedBlock && (
          <FullscreenOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBlock(null)}
          >
            <InfoModal
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              $rarityColor={selectedBlock.rarityColor}
              $rarityBackground={selectedBlock.rarityBackground}
            >
              <h3>{selectedBlock.title}</h3>
              <p style={{ marginTop: "15px" }}>{selectedBlock.message}</p>
              <CloseBtn onClick={() => setSelectedBlock(null)}>
                Зрозуміло
              </CloseBtn>
            </InfoModal>
          </FullscreenOverlay>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showHelpModal && (
          <FullscreenOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowHelpModal(null)}
          >
            <InfoModal
              initial={{ scale: 0.8, y: -50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: -50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div dangerouslySetInnerHTML={{ __html: helpModalCustomText }} />
              <CloseBtn onClick={() => setShowHelpModal(null)}>
                Зрозуміло
              </CloseBtn>
            </InfoModal>
          </FullscreenOverlay>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Puzzles;
