import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import localforage from "localforage";
import horse from "../../photos/vip-images/horse/horse.webp";
import puzzle1 from "../../photos/fan-art/puzzle-1.webp";
import puzzle4 from "../../photos/fan-art/puzzle-4.webp";
import niceron from "../../photos/vip-images/dinofroz/vip-dinofroz.webp";
import christmas from "../../photos/vip-images/christmas.webp";
import telegram from "../../photos/fan-art/telegram.webp";
import clip from "../../photos/vip-images/clip.webp";
import stars from "../../photos/vip-images/stars.webp";
import macduck from "../../photos/fan-art/macduck.webp";
import matrix from "../../photos/fan-art/matrix.webp";
import matrix2 from "../../photos/fan-art/matrix2.webp";
import parol from "../../photos/fan-art/parol.webp";
import password from "../../photos/fan-art/password.webp";
import money from "../../photos/fan-art/money.webp";
import text from "../../photos/vip-modal/texts.webp";
import rooster from "../../photos/vip-images/vip-rooster.webp";
import turkeys from "../../photos/vip-images/collectors-edition.webp";
import cloud from "../../photos/fan-art/strangecloud.webp";
//chess
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const slideOut = keyframes`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`;

const appearAndShrink = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.3); 
    filter: blur(10px);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.1);
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    transform: scale(1); 
    filter: blur(0);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(3px);
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${(props) => (props.isClosing ? fadeOut : fadeIn)} 0.3s ease-out
    forwards;
`;

const ModalContent = styled.div`
  background: #093500;
  color: #2eb813;
  padding: 5px;
  width: 95%;
  max-width: 750px;
  max-height: 95vh;
  border: 2px solid #2eb813;
  position: relative;
  display: flex;
  flex-direction: column;
  animation: ${(props) =>
    props.isClosing
      ? css`
          ${slideOut} 0.3s ease-in forwards
        `
      : css`
          ${slideIn} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards
        `};
`;

const ScrollContainer = styled.div`
  overflow-y: auto;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #051a00;
  }
  &::-webkit-scrollbar-thumb {
    background: #2eb813;
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
  scrollbar-width: thin;
  scrollbar-color: #2eb813 #051a00;
`;

const CategorySection = styled.div`
  display: ${(props) => (props.$isActive ? "flex" : "none")};
  flex-direction: column;
  gap: 12px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;
//
const CategoryTitle = styled.div`
  font-size: 14px;
  letter-spacing: 1.5px;
  color: #a2ff6c;
  border-bottom: 1px solid rgba(162, 255, 108, 0.3);
  padding-bottom: 8px;
  margin-bottom: 3px;
  font-weight: 900;
  opacity: 0;
  animation: ${appearAndShrink} 0.6s ease-out forwards;
  ${({ $delay }) => css`
    animation-delay: ${$delay || "0.2s"};
  `}
`;

const AchivmentItem = styled.div`
  display: flex;
  align-items: center;
  background: rgba(162, 255, 108, 0.05);
  gap: 5px;
  border: 1px solid #a2ff6c;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  animation: ${appearAndShrink} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
  ${({ $index }) => css`
    animation-delay: ${0.3 + $index * 0.05}s;
  `}
  cursor: ${(props) => (props.$isTurkey ? "pointer" : "default")};

  &:hover {
    background: rgba(162, 255, 108, 0.15);
    transform: translateX(5px) scale(1.01);
    box-shadow: 0 0 15px rgba(46, 184, 19, 0.2);
  }
`;

const AchivmentImagePlace = styled.img`
  width: 70px;
  height: 50px;
  object-fit: cover;
  border: 1px solid #2eb813;
  background: #051a00;
`;

const AchivmentName = styled.h3`
  margin: 0;
  font-size: 15px;
  color: #ffb36c;
`;

const AchivmentGoal = styled.p`
  margin: 4px 0 0;
  font-size: 13px;
  line-height: 1.4;
  opacity: 0.8;
  color: #a2ff6c;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #2eb813;
  z-index: 10;
  transition: all 0.3s;
  &:hover {
    color: #a2ff6c;
    transform: rotate(90deg) scale(1.2);
  }
`;

const MainTitle = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  font-size: 22px;
  letter-spacing: 2px;
  color: #a2ff6c;
`;

const NavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 10px;
`;

const NavButton = styled.button`
  background: ${(props) =>
    props.$active ? "#a2ff6c" : "rgba(162, 255, 108, 0.1)"};
  color: ${(props) => (props.$active ? "#093500" : "#a2ff6c")};
  border: 1px solid #a2ff6c;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
  transition: all 0.3s;
  &:hover {
    background: #a2ff6c;
    color: #093500;
  }
`;

const AchivmentsModal = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [turkeyStatus, setTurkeyStatus] = useState("idle");

  useEffect(() => {
    const loadStatus = async () => {
      const status = await localforage.getItem("turkeyStudioStatus");
      if (status) setTurkeyStatus(status);
    };
    loadStatus();
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 300);
  };

  const categories = React.useMemo(() => {
    const categoriesRaw = [
      {
        title: "🎮 Секрети",
        items: [
          {
            name: "Натяки прийняті",
            goal: "Ціль: Відкрийти 3 розділи колекції.",
            img: horse,
          },
          {
            name: "Індики винні!",
            goal: "Ціль: За 1хв змініть світлу-темну тему 8разів. Під звуки індиків!",
            img: turkeys,
          },
          {
            name: "Здогадка",
            goal: "Ціль: Вирішіть 30 загадок колекціонерії",
            img: puzzle1,
          },
          {
            name: "Дивно",
            goal: "Ціль: .",
            img: puzzle4,
          },
        ],
      },
      {
        title: "👥 Соціальні та Активність",
        items: [
          {
            name: "Дюна",
            goal: "Ціль: Використовуйте кліматичну карту.",
            img: telegram,
          },
          {
            name: "Бог любить трійцю!",
            goal: "Ціль: Заходь 3дні підряд.",
            img: christmas,
          },
          {
            name: "TheTurkeyStudio",
            goal: "Ціль: Підпишіться на мій ютуб канал.",
            img: money,
          },
          {
            name: "Мінливий характер!",
            goal: "Ціль: Змініть 10разів аватар.",
            img: cloud,
          },
        ],
      },
      {
        title: "🛠 Технічні та Налаштування",
        items: [
          {
            name: "Ви зараз виконуєте це afk :(  ?",
            goal: "Ціль: Читайте угоду користувача(навчання) більше 2хв!",
            img: text,
          },
          {
            name: "Lorem impusm",
            goal: "Ціль:Перейдіть на сайт де ми взяли новину!",
            img: text,
          },
          {
            name: "Краще перестрахуюсь!",
            goal: "Ціль: Установіть на робочий стіл наш сайт",
            img: parol,
          },
          {
            name: "Хм дай подумаю ні!",
            goal: "Ціль: Змініть щось в налаштуваннях.",
            img: password,
          },
        ],
      },
      {
        title: "🎵 Медіа та Контент",
        items: [
          {
            name: "Дубль 2",
            goal: "Ціль: Прослухайте двічі мелодію, через автоповтор.",
            img: clip,
          },
          {
            name: "Тестувальник",
            goal: "Ціль: Випробуйте режим відео.",
            img: matrix,
          },
          {
            name: "Фанат чи хейтер?",
            goal: "Ціль: Натисніть на кнопку роздрукувати фан-арт, скачати його або пісню.",
            img: rooster,
          },
          {
            name: "Слід",
            goal: "Ціль: Оцініть 3 пісні.",
            img: stars,
          },
        ],
      },
      {
        title: "🕵️ Секретні та Особливі",
        items: [
          {
            name: "Кінець божевілля",
            goal: "Ціль: Знайдіть щось цікаве в в'язниці.",
            img: matrix2,
          },
          {
            name: "Незвичні варіанти",
            goal: "Ціль: Змініть ім'я на .ре....., .е..р. чи ...ер..(пов'язано з драконами, 3 варіанти!)",
            img: macduck,
          },
          {
            name: "Світ навиворіт",
            goal: "Ціль: Розмістіть елементи сайту по порядку, але навиворіт!",
            img: macduck,
          },
          {
            name: "Віч-на-віч",
            goal: "Ціль: Ви його, зустрінете рано чи пізно.",
            img: niceron,
          },
        ],
      },
    ];

    return categoriesRaw.map((cat) => {
      if (cat.title.includes("Соціальні")) {
        let items = [...cat.items];
        const turkeyIdx = items.findIndex((i) => i.name === "TheTurkeyStudio");
        if (turkeyIdx !== -1) {
          const item = items.splice(turkeyIdx, 1)[0];
          if (turkeyStatus === "completed") {
            items.push(item);
          } else {
            items.unshift(item);
          }
        }
        return { ...cat, items };
      }
      return cat;
    });
  }, [turkeyStatus]);

  const handleTurkeyClick = async () => {
    window.open(
      "https://www.facebook.com/groups/33984901414490236/?notif_id=1770630384341499&notif_t=group_milestone&ref=notif",
      "_blank",
    );
    await localforage.setItem("turkeyStudioStatus", "completed");
    setTurkeyStatus("completed");
  };

  return (
    <ModalOverlay isClosing={isClosing} onClick={handleClose}>
      <ModalContent isClosing={isClosing} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        <MainTitle>Досягнення</MainTitle>
        <NavContainer>
          {categories.map((cat, idx) => (
            <NavButton
              key={idx}
              $active={activeTab === idx}
              onClick={() => setActiveTab(idx)}
            >
              {cat.title.split(" ")[0]}
            </NavButton>
          ))}
        </NavContainer>
        <ScrollContainer>
          {categories.map((cat, idx) => (
            <CategorySection key={idx} $isActive={activeTab === idx}>
              <CategoryTitle $delay={`${0.2 + idx * 0.4}s`}>
                {cat.title}
              </CategoryTitle>
              {cat.items.map((item, i) => (
                <AchivmentItem
                  key={i}
                  $index={idx * 10 + i}
                  $isTurkey={item.name === "TheTurkeyStudio"}
                  onClick={
                    item.name === "TheTurkeyStudio"
                      ? handleTurkeyClick
                      : undefined
                  }
                >
                  <AchivmentImagePlace src={item.img} alt={item.name} />
                  <div style={{ flexGrow: 1 }}>
                    <AchivmentName>{item.name}</AchivmentName>
                    <AchivmentGoal>{item.goal}</AchivmentGoal>
                  </div>
                </AchivmentItem>
              ))}
            </CategorySection>
          ))}
        </ScrollContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AchivmentsModal;
