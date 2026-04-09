import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes, css } from "styled-components";

const slideIn = keyframes`
  0% { transform: translateY(100%) scale(0.9); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`;

const slideOut = keyframes`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.9); opacity: 0; }
`;

const appearAndShrink = keyframes`
  0% { opacity: 0; transform: scale(1.3); filter: blur(10px); }
  50% { opacity: 0.5; transform: scale(1.1); filter: blur(2px); }
  100% { opacity: 1; transform: scale(1); filter: blur(0); }
`;

const animatedStyle = css`
  opacity: 0;
  transform-origin: left center;
  animation: ${appearAndShrink} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  ${({ $index }) => css`
    animation-delay: ${0.1 + ($index || 0) * 0.05}s;
  `}
`;

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
  transition: opacity 0.4s ease, pointer-events 0.4s ease;
  opacity: ${(props) => (props.$isClosing ? 0 : 1)};
  pointer-events: ${(props) => (props.$isClosing ? "none" : "auto")};
  backdrop-filter: blur(5px);
`;

const Content = styled.div`
  background: #ffd001;
  padding: 40px;
  border-radius: 20px;
  max-width: 700px;
  width: 95%;
  position: relative;
  font-family: "Inter", -apple-system, sans-serif;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  animation: ${(props) => (props.$isClosing ? slideOut : slideIn)} 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 20px; right: 20px;
  background: transparent;
  border: none;
  width: 40px; height: 40px;
  font-size: 34px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover { transform: rotate(90deg); }
`;

const AccordionWrapper = styled.div`
  margin-top: 20px;
`;

const AccordionItem = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  ${animatedStyle}
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  color: #111;
  
  &:hover { color: #8a2be2; }

  &::before {
    content: '';
    width: 4px;
    height: 20px;
    background: #8a2be2;
    margin-right: 12px;
    display: inline-block;
  }
`;

const Arrow = styled.span`
  font-size: 12px;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(90deg)")};
`;

const Answer = styled.div`
  max-height: ${(props) => (props.$isOpen ? "1000px" : "0")}; /* Збільшено для довгих списків */
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding-bottom: ${(props) => (props.$isOpen ? "15px" : "0")};
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  white-space: pre-line; /* Ключова зміна для відображення переносів рядків */
`;

const AcceptBtn = styled.button`
  margin-top: 30px;
  padding: 12px 40px;
  background: #8a2be2;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(138, 43, 226, 0.3);
  transition: transform 0.2s;
  ${animatedStyle}
  &:hover { transform: scale(1.05); }
`;

const InfoModal = ({ onClose, isOpen }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 400);
  }, [onClose]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") handleClose(); };
    if (isOpen || isClosing) {
      window.addEventListener("keydown", handleEsc);
      return () => window.removeEventListener("keydown", handleEsc);
    }
  }, [isOpen, isClosing, handleClose]);

  // Якщо модаль не видима, не рендеривати
  if (!isOpen && !isClosing) return null;

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    { q: "Останнє оновлення", a: "Тут текст про нову версію, виправлення помилок та покращення стабільності." },
    { q: "Невідомі кнопки в меню", a: "Роз’яснення всіх функцій можна знайти, натиснувши на символ меню ☰. Кожна кнопка має свою підказку." },
    { q: "Чому ШІ відмовив у запиті за конверти?", a: "API штучного інтелекту є платним для розробника. Після вичерпання безкоштовного ліміту система може просити оплату для підтримки сервісу." },
    { q: "Співпраця та поради", a: "Так! Я можу підказати через email, як отримати доступ до API сайтів та плагінів, які я використовую." },
    { q: "Я втратив акаунт. Чому?", a: "Ваші дані в безпеці, ми не зберігаємо їх постійно. Через очищення кешу браузера сесія може бути перервана." },
    { q: "Про тематику та ностальгію", a: "Скоріше за все, мені нудно, тому спогади вставили: музику з Geometry Dash, бо мої друзі любили грати в цю гру. А я в My Litle Universe. Індики, бо вони роблять мене щасливими. А динофроз, бо я маю надію, що Malatko TV, повернеться і можливо покажуть, і я відкритий до ваших ідей!" },
    { q: "Чому є реклама при переході на новину?", a: "Реклама допомагає отримувати прибуток, який е головною мотивацією розвивати проект далі для вас." },
    { q: "Обмеження підписки на музику", a: "Ми поважаємо авторське право. Заробляти на чужих піснях — це неправильно." },
    { q: "Навіщо реєстрація для погоди та арту?", a: "Це необхідно для ідентифікації підписників та впевненості, що контент використовується за призначенням." },
    { q: "Чи буде після Стихії щось?", a: "Ви навіть не уявляєте мій задум! Час покаже, а ваша підтримка та мотивація збільшують шанси!" },
    { 
  q: "Повний конспект Paint: усі можливості та як їх отримати", 
  a: `🎨 ПАНЕЛЬ ІНСТРУМЕНТІВ (Класика + ШІ):
• Виділення: прямокутне, довільне, «Виділити все» та інверсія вибору.
• Видалення фону: (Win 11) автоматичне прибирання фону навколо об'єкта одним кліком.
• Шари (Layers): створення малюнка на різних рівнях (Ctrl+Shift+L), щоб елементи не злипалися.
• Ластик: стирання (лівий клік — у колір фону; правий клік — стирання лише обраного кольору).
• Заливка: зафарбовування замкнених областей (регулюється допуском у нових версіях).
• Піпетка: копіювання точного кольору з полотна.
• Лупа: масштабування (від 12.5% до 800%) для піксельної точності.
• Олівець: малювання тонких ліній (1 піксель).
• Пензлі: 9 текстур (пензель, каліграфічні пера, аерозоль, олія, пастель, маркер, олівець, акварель).
• Текст: додавання написів із вибором шрифту, розміру та форматування (жирний, курсив тощо).
• Фігури: 23 готові форми (лінії, криві, багатокутники, хмаринки, серця, блискавки).
• Cocreator: (ШІ) генерація зображень за текстовим описом (залежить від регіону та NPU).

🌈 РОБОТА З КОЛЬОРАМИ ТА ПОЛОТНОМ:
• Палітра: вибір Кольору 1 (основний) та Кольору 2 (фон/правий клік).
• Редактор кольорів: створення власних відтінків через палітру RGB, HEX-коди або повзунок яскравості.
• Прозорість: підтримка прозорого фону (PNG) та «Прозоре виділення» для накладання об'єктів.
• Зміна розміру: масштабування в пікселях або відсотках (Ctrl+W), збереження пропорцій.
• Поворот/Віддзеркалення: поворот на 90/180 градусів, віддзеркалення по вертикалі/горизонталі.

📐 ВИГЛЯД ТА ДОПОМІЖНІ ЗАСОБИ:
• Лінійки та Сітка: для точного позиціювання об'єктів (Ctrl+R, Ctrl+G).
• Рядок стану: відображення координат курсора та розміру виділеної області.
• Повноекранний режим: перегляд малюнка без панелей інструментів (F11).

⚙️ ЯК ОТРИМАТИ ВСІ ЦІ МОЖЛИВОСТІ:
1. Базовий набір: вбудований у будь-яку Windows (Пуск -> Paint).
2. Нові функції (Шари, ШІ, Прозорість): доступні лише в Windows 11.
3. Оновлення: відкрийте Microsoft Store -> Бібліотека -> Отримати оновлення -> Оновити "Microsoft Paint".
4. Paint 3D: окрема програма з Microsoft Store для роботи з об'ємними моделями.` 
}
  ];

  return (
    <Overlay $isClosing={isClosing} onClick={handleClose}>
      <Content $isClosing={isClosing} onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={handleClose}>&times;</CloseBtn>
        <h1 style={{ textAlign: "center", fontSize: "26px", color: "#222", marginBottom: "5px" }}>
          Навчання
        </h1>
        <p style={{ textAlign: "center", fontSize: "13px", color: "#666", marginBottom: "30px" }}>
          Останнє оновлення: 8 квітня 2026 року
        </p>

        <AccordionWrapper>
          {faqData.map((item, i) => (
            <AccordionItem key={i} $index={i + 1}>
              <Question onClick={() => toggleAccordion(i)}>
                {item.q}
                <Arrow $isOpen={activeIndex === i}>▼</Arrow>
              </Question>
              <Answer $isOpen={activeIndex === i}>
                {item.a}
              </Answer>
            </AccordionItem>
          ))}
        </AccordionWrapper>

        <div style={{ textAlign: "center" }}>
          <AcceptBtn $index={faqData.length + 2} onClick={handleClose}>
            Дякую, зрозуміло!
          </AcceptBtn>
        </div>
      </Content>
    </Overlay>
  );
};

export default InfoModal;