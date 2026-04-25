import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import hills from "../../photos/hero-header/fog.webp";
import herotext from "../../photos/hero-header/herotext.webp";

import soloveyko from "../../photos/vip-images/vip-soloveyko.webp";
import harmony from "../../photos/vip-images/asium/asium.webp";
import horse from "../../photos/vip-images/horse/horse.webp";
import theorytwo from "../../photos/fan-art/theorytwo.webp";
import fingerdash from "../../photos/vip-images/dinofroz/fingerdash.webp";
import electrodynamix from "../../photos/vip-images/electrodynamix.webp";
//Desert
import desert from "../../photos/vip-images/desert/vip-desert.webp";
import deserttwo from "../../photos/vip-images/desert/deserttwo.webp";
import desertthree from "../../photos/vip-images/desert/desertthree.webp";
import desertfour from "../../photos/vip-images/desert/desertfour.webp";
import desertone from "../../photos/vip-images/desert/desertone.webp";
import mecha from "../../photos/vip-images/mechannic.webp";
// import christmas from "../../photos/vip-images/christmas.webp";
import clubstep from "../../photos/fan-art/clubstep.webp";
import turkeys from "../../photos/vip-images/turkeys/ultra-vip-turkeys.webp";
//Horses
import horsethree from "../../photos/vip-images/horse/horsethree.webp";
import horsetwo from "../../photos/vip-images/horse/horsetwo.webp";
import chess from "../../photos/vip-images/horse/chess.webp";
//Turkeys
import turkeytwo from "../../photos/vip-images/turkeys/turkeytwo.webp";
import turkeythree from "../../photos/vip-images/turkeys/turkeysthree.webp";
import turkeyfour from "../../photos/vip-images/turkeys/turkeysfour.webp";
import turkeyfive from "../../photos/vip-images/turkeys/turkeysfive.webp";
import turkeysix from "../../photos/vip-images/turkeys/turkeyssix.webp";
import turkeysone from "../../photos/vip-images/turkeys/turkeysone.webp";
import turkeyseven from "../../photos/vip-images/turkeys/turkeysseven.webp";
//Asium
import asiumnine from "../../photos/vip-images/asium/vip-forest.webp";
import asiumone from "../../photos/vip-images/asium/asiumone.webp";
import asiumtwo from "../../photos/vip-images/asium/asiuntwo.webp";
import asiumthree from "../../photos/vip-images/asium/asiumthree.webp";
import asiumfour from "../../photos/vip-images/asium/asiumfour.webp";
import asiumfive from "../../photos/vip-images/asium/asiumfive.webp";
import asiumsix from "../../photos/vip-images/asium/asiumsix.webp";
import asiumten from "../../photos/vip-images/asium/asiumeleven.webp";
import asiumeleven from "../../photos/vip-images/asium/asiumtwelve.webp";
import asiumseven from "../../photos/vip-images/asium/asiumseven.webp";
//Swamp
import swamptwo from "../../photos/vip-images/swamp/swamptwo.webp";
import swampthree from "../../photos/vip-images/swamp/swampthree.webp";
import swampfour from "../../photos/vip-images/swamp/swampfour.webp";
import swampfive from "../../photos/vip-images/swamp/swampfive.webp";
import swampsix from "../../photos/vip-images/swamp/swampsix.webp";
import swampseven from "../../photos/vip-images/swamp/seampseven.webp";
import swampeight from "../../photos/vip-images/swamp/swampeight.webp";
import swampnine from "../../photos/vip-images/swamp/swampnine.webp";
import theory from "../../photos/fan-art/theory.webp";
import deadlocked from "../../photos/vip-images/swamp/deadlocked.webp";
//Horror
import horrortwo from "../../photos/vip-images/horror/horrortwo.webp";
import horrorthree from "../../photos/vip-images/horror/horrorthree.webp";
import horrorfour from "../../photos/vip-images/horror/horrorfour.webp";
import horrorfive from "../../photos/vip-images/horror/horrorfive.webp";
import horror from "../../photos/vip-images/horror/horror.webp";
import horrorsix from "../../photos/vip-images/horror/horrorsix.webp";
import horrorseven from "../../photos/vip-images/horror/horrorseven.webp";
import horroreight from "../../photos/vip-images/horror/horroreight.webp";
//Динофроз
import dinofrozone from "../../photos/vip-images/dinofroz/vip-dinofroz.webp";
import dinofrozthree from "../../photos/vip-images/dinofroz/dinofrozthree.webp";
import dinofrozfour from "../../photos/vip-images/dinofroz/dinofrozfour.webp";
import dinofrozfive from "../../photos/vip-images/dinofroz/dinofrozfive.webp";
import dinofrozsix from "../../photos/vip-images/dinofroz/dinofrozsix.webp";
import dinofrozseven from "../../photos/vip-images/dinofroz/dinofrozseven.webp";
import dinofrozeight from "../../photos/vip-images/dinofroz/dinofrozeight.webp";
import dinofroztwo from "../../photos/vip-images/dinofroz/vip-dragons.webp";
import dinofroznine from "../../photos/vip-images/dinofroz/dinofroznine.webp";
//Mia and me
import mia from "../../photos/vip-images/mia/miaandme.webp";
import volcano from "../../photos/vip-images/fire.webp";
const DEFAULT_BGS = [
  // Основні / Головні
  { src: hills, name: "Туманний ліс", category: "Стихія" },
  { src: volcano, name: "Вулкан", category: "Стихія" },
  // Світ Динофроз та Дракони
  { src: dinofrozone, name: "Імператор Ніцерон", category: "Динофроз" },
  { src: dinofroztwo, name: "Генерал Влад (2 сезон)", category: "Динофроз" },
  { src: dinofrozthree, name: "Прев'ю мультфільму", category: "Динофроз" },
  { src: dinofrozfour, name: "Драгемон (2 сезон)", category: "Динофроз" },
  { src: dinofrozfive, name: "Мелтстон", category: "Динофроз" },
  { src: dinofrozsix, name: "Динофроз (Епізод)", category: "Динофроз" },
  { src: dinofrozseven, name: "Генерал Влад (1 сезон)", category: "Динофроз" },
  { src: dinofrozeight, name: "Генерал Трік (1 сезон)", category: "Динофроз" },
  { src: dinofroznine, name: "Погляд у Рокфроз", category: "Динофроз" },
  { src: fingerdash, name: "Замок Ніцерона", category: "Динофроз" },

  // Тварини та Істоти (Індики, Коні)
  { src: horse, name: "Кінь", category: "Тварини" },
  { src: horsetwo, name: "Армія козаків", category: "Тварини" },
  { src: horsethree, name: "Лицар", category: "Тварини" },
  { src: turkeys, name: "Індичка Кейт (VIP)", category: "Тварини" },
  { src: turkeysone, name: "Мале бундюче стадо", category: "Тварини" },
  { src: turkeytwo, name: "Малий, але впевнений", category: "Тварини" },
  { src: turkeythree, name: "Дивись мені в очі!", category: "Тварини" },
  { src: turkeyfour, name: "І знову про індиків", category: "Тварини" },
  { src: turkeyfive, name: "2 Індики", category: "Тварини" },
  { src: turkeysix, name: "Ми вже виросли!", category: "Тварини" },
  { src: turkeyseven, name: "Шукаю друга", category: "Тварини" },
  { src: soloveyko, name: "Соловейко", category: "Тварини" },

  // Природа та Локації (Пустеля, Болото, Азіум)
  { src: desert, name: "Загадки пустелі", category: "Локації" },
  { src: desertone, name: "Пустеля 1", category: "Локації" },
  { src: deserttwo, name: "Пустеля 2", category: "Локації" },
  { src: desertthree, name: "Пустеля 3", category: "Локації" },
  { src: desertfour, name: "Пустеля 4", category: "Локації" },
  { src: swampnine, name: "Озеро волі", category: "Локації" },
  { src: swamptwo, name: "Записка", category: "Локації" },
  { src: asiumten, name: "Зимовий ліс", category: "Локації" },
  { src: asiumeleven, name: "Водоспад", category: "Локації" },

  // Містичні та Казкові місця
  { src: asiumnine, name: "Казковий ліс", category: "Фентезі" },
  { src: asiumone, name: "Під водою", category: "Фентезі" },
  { src: asiumtwo, name: "Поле і сакури", category: "Фентезі" },
  { src: asiumthree, name: "Печера", category: "Фентезі" },
  { src: asiumfour, name: "Річка з лави", category: "Фентезі" },
  { src: asiumfive, name: "Спуск з гори", category: "Фентезі" },
  { src: asiumsix, name: "Скарбниця + Відсилки", category: "Фентезі" },
  { src: asiumseven, name: "Японський балкон", category: "Фентезі" },
  { src: harmony, name: "Японський храм", category: "Фентезі" },
  { src: mia, name: "Міа та я", category: "Фентезі" },

  // Хоррор та Болото (Темна тематика)
  { src: horror, name: "Бійцівська собака", category: "Хоррор" },
  { src: horrortwo, name: "Будинок Granny", category: "Хоррор" },
  { src: horrorthree, name: "Підвал", category: "Хоррор" },
  { src: horrorfour, name: "Город зла", category: "Хоррор" },
  { src: horrorfive, name: "Зіграймо!", category: "Хоррор" },
  { src: horrorsix, name: "Втеча", category: "Хоррор" },
  { src: horrorseven, name: "Далі невідомо...", category: "Хоррор" },
  { src: horroreight, name: "Втеча (фінал)", category: "Хоррор" },
  { src: swampfour, name: "Матка павуків", category: "Хоррор" },
  { src: swampfive, name: "Злі духи", category: "Хоррор" },
  { src: swampseven, name: "Туман, що дивиться", category: "Хоррор" },
  { src: swampeight, name: "Болотний дракон", category: "Хоррор" },
  { src: deadlocked, name: "Болото мук", category: "Хоррор" },

  // Ігри та Техно
  { src: theorytwo, name: "Чорна діра", category: "Аркада" },
  { src: electrodynamix, name: "Гроза", category: "Аркада" },
  { src: mecha, name: "Шестерні", category: "Аркада" },
  { src: clubstep, name: "Невідоме місце", category: "Аркада" },
  { src: theory, name: "Вогнище", category: "Аркада" },
  { src: chess, name: "Шахи", category: "Аркада" },
  { src: swampthree, name: "Підказка свічки", category: "Аркада" },
  { src: swampsix, name: "Печера кристалів", category: "Аркада" },
];
const slideUpHero = keyframes`
  0% { transform: translateY(120px) scale(1.8); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
`;

const fadeInContent = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const HeroDiv = styled.div`
  position: relative;
  width: 100%;
  min-height: 360px;
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;
  @media (min-width: 768px) {
    gap: 25px;
    margin-bottom: 50px;
  }
  @media (min-width: 1200px) {
    gap: 60px;
    min-height: 620px;
    margin-bottom: 75px;
  }
  @media (min-width: 1920px) {
    min-height: 1200px;
    margin-bottom: 120px;
    gap: 90px;
  }
`;const HeroDecors = styled.div`
  display: block;
  width: 160px; 
  margin-top: 85px;
  height: 67px;
  background-image: url(${(props) => props.$image});
  background-size: cover;     
  background-position: center; 
  background-repeat: no-repeat;
  opacity: 0;
  transform: translateY(120px) scale(1.8);
  animation: ${(props) =>
    props.$start ? css`${slideUpHero} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards` : "none"};
  @media (min-width: 768px) {
    width: 350px;
    height: 140px;
  }
  @media (min-width: 1200px) {
    width: 350px;
    height: 139px;
  }
  @media (min-width: 1920px) {
    width: 700px;
    height: 280px;
  }
`;
const DelayedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
  opacity: 0;
  animation: ${(props) =>
    props.$start ? css`${fadeInContent} 1s ease-out forwards` : "none"};
  animation-delay: ${(props) => (props.$start ? "3s" : "0s")};

  @media (min-width: 768px) {
    gap: 25px;
  }
  @media (min-width: 1200px) {
    gap: 50px;
  }
  @media (min-width: 1920px) {
    gap: 80px;
  }
`;

const BgLayer = styled.div`
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.$image || hills});
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transition: opacity ${(props) => props.$transition}s ease-in-out;
  transform: scale(${(props) => (props.$zoom || 1) * (props.$rotationScale || 1)}) rotate(${(props) => props.$rotation || 0}deg); /* Apply zoom and rotation */
  filter: blur(${(props) => props.$blur || 0}px); /* Apply blur */
  z-index: -2;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, ${(props) => props.$opacity});
  z-index: -1;
  pointer-events: none;
`;

const HeroTitle = styled.h1`
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 10px;
  color: #fff;
  width: 250px;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5);
  @media (min-width: 768px) {
    font-size: 15px;
    width: 450px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
    width: 650px;
  }
  @media (min-width: 1920px) {
    font-size: 42px;
    width: 1400px;
    line-height: 1.3;
  }
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
  gap: 15px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`;

const HeroTextLink = styled.a`
  color: #fff;
  font-family: var(--font-family);
  font-size: 10px;
  font-weight: 500;
  text-decoration: none;
  display: block;
  text-align: center;
  width: auto;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    font-size: 11px;
    flex: 1; 
    text-align: right;
    padding-right: 20px;
  }
  @media (min-width: 1200px) {
    font-size: 19px;
    padding-right: 30px;
  }
  @media (min-width: 1920px) {
    font-size: 30px;
    padding-right: 50px;
  }
`;
const HeroDate = styled.div`
  color: #fff;
  font-size: 10px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    font-size: 11px;
    flex: 1; 
    text-align: left;
    padding-left: 20px;
  }
  @media (min-width: 1200px) {
    font-size: 19px;
    padding-left: 30px;
  }
  @media (min-width: 1920px) {
    font-size: 34px;
    padding-left: 50px;
  }
`;

const DownloadAppsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5px;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

const DownloadAppButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 179, 108, 0.5);
  border-radius: 20px;
  color: #fff;
  text-decoration: none;
  font-size: 10px;
  font-weight: 600;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(255, 179, 108, 0.2);
    transform: translateY(-2px);
    border-color: #ffb36c;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99;
`;

const SearchModeToggle = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 15px;
    margin-bottom: 20px;
  }

  @media (min-width: 1920px) {
    gap: 20px;
    margin-bottom: 30px;
  }
`;

const ModeButton = styled.button`
  padding: 8px 16px;
  background: ${(props) => (props.$active ? "#ffb36c" : "rgba(255, 255, 255, 0.1)")};
  color: ${(props) => (props.$active ? "#000" : "#fff")};
  border: 2px solid ${(props) => (props.$active ? "#ffb36c" : "rgba(255, 179, 108, 0.5)")};
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  font-family: var(--font-family);
  font-size: 12px;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background: ${(props) => (props.$active ? "#ffb36c" : "rgba(255, 179, 108, 0.2)")};
    border-color: #ffb36c;
  }

  @media (min-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
  }

  @media (min-width: 1920px) {
    font-size: 20px;
    padding: 15px 30px;
  }
`;

const CoordinatesContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;

  @media (min-width: 1920px) {
    gap: 20px;
    margin-bottom: 20px;
  }
`;

const CoordinateInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;

  label {
    color: #fff;
    font-size: 10px;
    font-weight: 600;
    text-align: center;

    @media (min-width: 1920px) {
      font-size: 18px;
    }
  }

  input {
    width: 100px;
    height: 20px;
    padding: 5px 10px;
    font-size: 10px;
    border-radius: 8px;
    border: 1px solid #ffb36c;
    background: #d9d9d9;
    color: #222;
    font-weight: 500;

    @media (min-width: 768px) {
      width: 120px;
      height: 25px;
      font-size: 12px;
    }

    @media (min-width: 1920px) {
      width: 200px;
      height: 50px;
      font-size: 18px;
      padding: 10px 15px;
    }

    &::placeholder {
      color: #888;
    }
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
  width: 100%;
  justify-content: center;
`;

const HeroInput = styled.input`
  width: 173px;
  height: 20px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 9px;
  color: #222;
  padding-left: 30px;
  background: #d9d9d9;
  border-radius: 10px 0 0 10px;
  border: none;
  outline: none;
  @media (min-width: 768px) {
    width: 402px;
    height: 25px;
    font-size: 14px;
  }
  @media (min-width: 1200px) {
    width: 629px;
    height: 42px;
  }
  @media (min-width: 1920px) {
    width: 1000px;
    height: 90px;
    font-size: 32px;
    padding-left: 60px;
    border-radius: 20px 0 0 20px;
  }
`;
const HeroButton = styled.button`
  position: relative;
  border-radius: 0 10px 10px 0;
  width: 20px;
  height: 22px;
  background: ${(props) => (props.disabled ? "#ccc" : "yellow")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: 2px solid black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
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

  @media (min-width: 768px) {
    width: 28px;
    height: 26px;
    font-size: 22px;
    &:hover::after { font-size: 24px; }
  }
  @media (min-width: 1200px) {
    width: 40px;
    height: 43px;
    font-size: 30px;
    &:hover::after { font-size: 34px; }
  }
  @media (min-width: 1920px) {
    width: 95px;
    height: 94px;
    border-radius: 0 20px 20px 0;
    border-width: 4px;
    font-size: 60px;
    &:hover::after { font-size: 70px; }
  }
`;
const SuggestionsList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: calc(100% - 2px);
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-radius: 0 0 15px 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 8px;
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid rgba(0, 0, 0, 0.1);

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
  @media (min-width: 1920px) {
    padding: 20px;
    gap: 15px;
    max-height: 500px;
  }
`;

const SuggestionItem = styled.button`
  width: 100%;
  text-align: left;
  padding: 10px 15px;
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
  @media (min-width: 1920px) {
    font-size: 26px;
    padding: 20px 30px;
    border-radius: 15px;
  }
`;

const LoadMoreButton = styled.button`
  width: 100%;
  padding: 12px;
  background: ${(props) => (props.disabled ? "#eee" : "gold")};
  color: ${(props) => (props.disabled ? "#999" : "black")};
  border: 2px solid ${(props) => (props.disabled ? "#ccc" : "#b8860b")};
  border-radius: 8px;
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  margin-top: 5px;
  font-size: 13px;
  &:hover {
    background: ${(props) => (props.disabled ? "#eee" : "#ffcc00")};
  }
  @media (min-width: 1920px) {
    font-size: 24px;
    padding: 25px;
    border-width: 4px;
  }
`;

const ChangeBgButton = styled.button`
  position: absolute;
  top: 140px;
  right: 30px;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 179, 108, 0.5);
  color: white;
  width: 35px;
  height: 35px;
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
    background: #ffb36c;
    color: black;
    transform: scale(1.1);
  }
  @media (min-width: 1920px) {
    width: 60px;
    height: 60px;
    font-size: 30px;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.85);
  display: flex; justify-content: center; align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #1e1e1e;
  padding: 30px;
  border-radius: 20px;
  width: 90%;
  max-width: 800px;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid #ffb36c;
  color: white;
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
  &:hover { background: red; }
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
  &:hover { background: #ffb36c; }
`;

const NameOverlay = styled.div`
  position: absolute;
  bottom: ${(props) => (props.$hasSlots ? "25px" : "0")};
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 10px;
  padding: 4px;
  text-align: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 8;
`;

// const BgItem = styled.div`
//   position: relative;
//   border-radius: 10px;
//   overflow: hidden;
//   border: 2px solid ${(props) => (props.$active ? "#ffb36c" : "transparent")};
//   transition: transform 0.2s;
//   &:hover { 
//     transform: scale(1.05);
//     ${NameOverlay} { opacity: 1; }
//   }
// `;

const ConfigRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: rgba(255,255,255,0.05);
  padding: 15px;
  border-radius: 12px;
  label { font-size: 14px; font-weight: bold; color: #ffb36c; }
`;

const BgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 15px;
`;

const BgItem = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid ${(props) => (props.$active ? "#ffb36c" : "transparent")};
  transition: transform 0.2s;
  &:hover { 
    transform: scale(1.05);
    ${NameOverlay} {
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
  top: 5px; left: 5px;
  display: flex; gap: 4px;
  z-index: 5;
`;

const HeartIcon = styled.button`
  background: none; border: none; cursor: pointer; padding: 0;
  font-size: 16px;
  color: ${(props) => props.$color || "white"};
  text-shadow: 0 0 3px black;
`;

const SlotButtons = styled.div`
  position: absolute;
  bottom: 0; left: 0; width: 100%;
  display: flex;
  background: rgba(0,0,0,0.6);
`;

const SlotBtn = styled.button`
  flex: 1;
  background: ${(props) => (props.$active ? "#ffb36c" : "transparent")};
  color: ${(props) => (props.$active ? "black" : "white")};
  border: none; padding: 4px; cursor: pointer; font-size: 10px; font-weight: bold;
`;

const DropZone = styled.div`
  border: 2px dashed #ffb36c;
  padding: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
  color: #ccc;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s;
  &:hover { background: rgba(255, 255, 255, 0.1); color: #fff; }
`;

const CloseBtn = styled.button`
  background: #ffb36c;
  border: none;
  padding: 10px 30px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  align-self: center;
`;

const ModalSearchInput = styled.input`
  padding: 8px 15px;
  border-radius: 20px;
  border: 1px solid #ffb36c;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  width: 100%;
  max-width: 300px;
  font-size: 14px;
  outline: none;
  &::placeholder { color: #aaa; }
  &:focus { background: rgba(255, 255, 255, 0.15); border-color: white; }
`;

const ModalDivider = styled.hr`
  border: 0;
  border-top: 1px solid rgba(255, 179, 108, 0.3);
  margin: 10px 0;
  width: 100%;
`;

const ModalSectionTitle = styled.h3`
  font-weight: bold;
  color: #ffb36c;
  margin: 15px 0 10px 0;
  text-transform: uppercase;
  font-size: 14px;
  border-left: 3px solid #ffb36c;
  padding-left: 10px;
`;

const Hero = ({ 
  heroDateString, onAddCity, startAnimation, user, 
  heroBg, setHeroBg, heroBg2, setHeroBg2, customHeroBgs = [], setCustomHeroBgs,
  heroBgMode, setHeroBgMode, heroOverlayOpacity, setHeroOverlayOpacity,
  bgRatings, setBgRatings, slideshowInterval, setSlideshowInterval,
  slideshowTransition, setSlideshowTransition,
  filterCategory, setFilterCategory,
  heroBgZoom, setHeroBgZoom, heroBgRotation, setHeroBgRotation,
  heroBgBlur, setHeroBgBlur
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [limit, setLimit] = useState(5);
  const [showList, setShowList] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleBgCount, setVisibleBgCount] = useState(30);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // FIX: Added missing states to resolve ESLint errors
  const [hasMore, setHasMore] = useState(true);
  const [searchMode, setSearchMode] = useState("city");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  // Moved sortType state here to ensure it's within the component's scope
  const [sortType, setSortType] = useState("rating"); // 'rating', 'az', 'za'
  const [activeLayer, setActiveLayer] = useState(1);

  // Define rotationScale as a state or computed value
  const rotationScale = 1; // You can change this to useState if you want it to be dynamic

  // Логіка слайд-шоу
  useEffect(() => {
    if (heroBgMode !== "slideshow" || !heroBg || !heroBg2) return;
    
    const timer = setInterval(() => {
      setActiveLayer(prev => (prev === 1 ? 2 : 1));
    }, slideshowInterval * 1000);
    
    return () => clearInterval(timer);
  }, [heroBgMode, heroBg, heroBg2, slideshowInterval]);

  const isCustom = (src) => !DEFAULT_BGS.some(bg => bg.src === src);

  const allBgs = [...DEFAULT_BGS, ...(customHeroBgs || [])];
  
  const filteredBgs = (allBgs || []).filter(bg => {
    const matchesCategory = filterCategory === "all" || 
                           (filterCategory === "custom" ? isCustom(bg.src) : bg.category === filterCategory);
    const matchesSearch = (bg.name || "").toLowerCase().includes(searchTerm.toLowerCase());
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

  // Compute pagedBgs from sortedBgs and visibleBgCount
  const pagedBgs = sortedBgs.slice(0, visibleBgCount);

  // Function to reset background settings
  const resetBgSettings = () => {
    setHeroOverlayOpacity(0.3);
    setHeroBgZoom(1);
    setHeroBgRotation(0);
    setHeroBgBlur(0);
  };

  const handleRate = (src) => {
    setBgRatings(prev => {
      const current = prev[src] || 0;
      const next = (current + 1) % 3; // 0 -> 1 -> 2 -> 0
      return { ...prev, [src]: next };
    });
  };

  const fileInputRef = useRef(null);

  const handleFileUpload = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      // "Штука" для зменшення якості (Canvas resize)
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
        const compressed = canvas.toDataURL("image/jpeg", 0.7);
        setCustomHeroBgs(prev => [{ src: compressed, name: file.name }, ...prev]);
        setHeroBg(compressed);
      };
    };
    reader.readAsDataURL(file);
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
  const [showCoordinateSuggestions, setShowCoordinateSuggestions] = useState(false);
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
      // Не закривати при правому кліку або скролі по скролбару
      if (event.type === "mousedown" && event.button !== 0) return;
      // Якщо клік був по скролбару (event.target === document.body або html), не закривати
      if (
        event.type === "mousedown" &&
        (event.target === document.body || event.target === document.documentElement)
      ) return;
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchSuggestions = async (currentLimit, value) => {
    if (value.trim().length < 3) {
      setSuggestions([]);
      return;
    }
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=${currentLimit}&appid=${API_KEY}`,
      );
      const data = await response.json();
      if (data.length < currentLimit) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
      setSuggestions(data);
      setShowList(true);
    } catch (error) {
      console.error("Помилка API:", error);
    }
  };

  useEffect(() => {
    setLimit(5);
    setHasMore(true);
    const timeoutId = setTimeout(() => {
      if (inputValue) fetchSuggestions(5, inputValue);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  const handleLoadMore = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newLimit = limit + 5;
    setLimit(newLimit);
    fetchSuggestions(newLimit, inputValue);
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

    try {
      // Обернене геокодування - отримуємо назву місця за координатами
      // limit=10 щоб отримати варіанти поруч, якщо точних немає
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=10&appid=${API_KEY}`,
      );
      const data = await response.json();
      const currentPoint = {
        name: "Обрана точка",
        state: `Широта: ${lat}`,
        country: `Довгота: ${lon}`,
        lat: lat,
        lon: lon,
        isManual: true
      };
      setCoordinateSuggestions([currentPoint, ...data]);
      setShowCoordinateSuggestions(true);

    } catch (error) {
      console.error("Помилка при пошуку за координатами:", error);
      alert("Помилка при пошуку. Спробуйте ще раз.");
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
    setLatitude("");
    setLongitude("");
    setShowCoordinateSuggestions(false);
    setCoordinateSuggestions([]);
    const until = Date.now() + 40000;
    localStorage.setItem("hero_cooldown_until", until.toString());
    setCooldown(40);
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
    setInputValue("");
    setSuggestions([]);
    setShowList(false);
    const until = Date.now() + 40000;
    localStorage.setItem("hero_cooldown_until", until.toString());
    setCooldown(40);
  };

  return (
    <HeroDiv>
      <BgLayer $image={heroBg} $active={heroBgMode === 'static' || activeLayer === 1} $transition={slideshowTransition} $zoom={heroBgZoom} $rotation={heroBgRotation} $rotationScale={rotationScale} $blur={heroBgBlur} />
      <BgLayer $image={heroBg2} $active={heroBgMode === 'slideshow' && activeLayer === 2} $transition={slideshowTransition} $zoom={heroBgZoom} $rotation={heroBgRotation} $rotationScale={rotationScale} $blur={heroBgBlur} />
      <Overlay $opacity={heroOverlayOpacity} />

      <ChangeBgButton onClick={() => setIsModalOpen(true)} title="Змінити фон">🎨</ChangeBgButton>
      <HeroDecors $image={herotext} $start={startAnimation}/>
      <DelayedContent $start={startAnimation}>
        <HeroTitle>
          Погода, музика, фан-арти, ШІ, системи: 🧧, 🏆.
        </HeroTitle>

        <HeroDecor>
          <HeroFix>
            <HeroTextLink
              href="https://www.facebook.com/groups/33984901414490236/?notif_id=1770630384341499&notif_t=group_milestone&ref=notif"
              target="_blank"
            >
              Мій фейсбук канал. Натисніть.
            </HeroTextLink>
            <HeroDate>{heroDateString}</HeroDate>
          </HeroFix>
        </HeroDecor>

        {user && (
          <DownloadAppsContainer>
            <DownloadAppButton href="/downloads/stykhiya-pc.exe" download="stykhiya-pc.exe" title="Завантажити для Windows">
              💻 Скачати для ПК
            </DownloadAppButton>
            <DownloadAppButton href="/downloads/stykhiya-mobile.apk" download="stykhiya-mobile.apk" title="Завантажити для Android">
              📱 Мобільний додаток
            </DownloadAppButton>
          </DownloadAppsContainer>
        )}

        <SearchWrapper ref={searchRef}>
          <SearchModeToggle>
            <ModeButton
              $active={searchMode === "city"}
              onClick={() => {
                setSearchMode("city");
                setLatitude("");
                setLongitude("");
                setSuggestions([]);
                setShowList(false);
              }}
            >
              🏙️ За назвою міста
            </ModeButton>
            <ModeButton
              $active={searchMode === "coordinates"}
              onClick={() => {
                setSearchMode("coordinates");
                setInputValue("");
                setSuggestions([]);
                setShowList(false);
              }}
            >
              📍 За координатами
            </ModeButton>
          </SearchModeToggle>

          {searchMode === "city" ? (
            <HeroFormater>
              <SearchContainer>
                <HeroInput
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={() => suggestions.length > 0 && setShowList(true)}
                  placeholder={cooldown > 0 ? `Зачекайте ${cooldown}с` : "Уведіть місто, село."}
                  disabled={cooldown > 0}
                />
                {showList && suggestions.length > 0 && (
                  <SuggestionsList>
                    {suggestions.map((city, index) => (
                      <SuggestionItem
                        key={`${city.lat}-${city.lon}-${index}`}
                        onClick={() => handleSelect(city)}
                      >
                        📍 {city.name}
                        {city.state ? `, ${city.state}` : ""} ({city.country})
                        <br />
                        <span style={{ fontSize: "0.85em", color: "#666" }}>
                          🧭 {city.lat.toFixed(2)}°, {city.lon.toFixed(2)}°
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
                  if (cooldown === 0 && suggestions[0]) handleSelect(suggestions[0]);
                }}
                disabled={cooldown > 0}
              >
                {cooldown > 0 ? cooldown : "⌕"}
              </HeroButton>
              </SearchContainer>
            </HeroFormater>
          ) : (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "15px", position: "relative" }}>
              <CoordinatesContainer>
                <CoordinateInput>
                  <label>🧭 Широта (N/S)<br/>-90 до +90</label>
                  <input
                    type="number"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    placeholder="55.75"
                    disabled={cooldown > 0}
                    min="-90"
                    max="90"
                    step="0.01"
                  />
                </CoordinateInput>
                <CoordinateInput>
                  <label>📍 Довгота (E/W)<br/>-180 до +180</label>
                  <input
                    type="number"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    placeholder="37.62"
                    disabled={cooldown > 0}
                    min="-180"
                    max="180"
                    step="0.01"
                  />
                </CoordinateInput>
              <HeroButton
                onClick={handleSelectByCoordinates}
                disabled={cooldown > 0}
                style={{marginBottom: "15px" }}
              >
                {cooldown > 0 ? cooldown : "⌕"}
              </HeroButton>
              </CoordinatesContainer>

              {showCoordinateSuggestions && (
                <SuggestionsList style={{ width: "auto", minWidth: "300px", marginTop: "10px", left: "50%", transform: "translateX(-50%)" }}>
                  <div style={{ color: "#333", fontWeight: "bold", marginBottom: "10px", textAlign: "center" }}>
                    📍 Знайдено поруч з координатами:
                  </div>
                  {coordinateSuggestions.map((city, index) => (
                    <SuggestionItem
                      key={`${city.lat}-${city.lon}-${index}`}
                      onClick={() => handleSelectCoordinateResult(city)}
                    >
                      📍 {city.name}
                      {city.state ? `, ${city.state}` : ""} ({city.country})
                      <br />
                      <span style={{ fontSize: "0.85em", color: "#666" }}>
                        🧭 {city.lat.toFixed(2)}°, {city.lon.toFixed(2)}°
                      </span>
                    </SuggestionItem>
                  ))}
                  <button
                    onClick={() => {
                      setShowCoordinateSuggestions(false);
                      setCoordinateSuggestions([]);
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
      </DelayedContent>

      {isModalOpen && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: '#fff', textAlign: 'center', margin: 0}}>Налаштування фону</h2>
            
            <ModalSectionTitle>🎨 Налаштування вигляду</ModalSectionTitle>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', alignItems: 'end'}}>
              <ConfigRow>
                <label>Режим фону:</label>
                <select value={heroBgMode} onChange={e => setHeroBgMode(e.target.value)} style={{padding: '8px', borderRadius: '5px'}}>
                  <option value="static">Статичний (1 фото)</option>
                  <option value="slideshow">Слайд-шоу (2 фото)</option>
                </select>
              </ConfigRow>
              <ConfigRow>
                <label>Затемнення: {(heroOverlayOpacity * 100).toFixed(0)}%</label>
                <input type="range" min="0" max="0.8" step="0.05" value={heroOverlayOpacity} onChange={e => setHeroOverlayOpacity(parseFloat(e.target.value))} />
              </ConfigRow>
              <ConfigRow>
                <label>Наближення: {heroBgZoom.toFixed(2)}x</label>
                <input type="range" min="1" max="2" step="0.01" value={heroBgZoom} onChange={e => setHeroBgZoom(parseFloat(e.target.value))} />
              </ConfigRow>
              <ConfigRow>
                <label>Розворот: {heroBgRotation}°</label>
                <input type="range" min="-180" max="180" step="1" value={heroBgRotation} onChange={e => setHeroBgRotation(parseInt(e.target.value))} />
              </ConfigRow>
              <ConfigRow>
                <label>Розмиття: {heroBgBlur.toFixed(1)}px</label>
                <input type="range" min="0" max="20" step="0.5" value={heroBgBlur} onChange={e => setHeroBgBlur(parseFloat(e.target.value))} />
              </ConfigRow>
              <CloseBtn onClick={resetBgSettings} style={{ marginTop: '10px', width: 'auto', justifySelf: 'start' }}>
                Скинути налаштування
              </CloseBtn>
            </div>

            {heroBgMode === 'slideshow' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <ModalDivider />
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
                <ConfigRow>
                  <label>Інтервал: {slideshowInterval}с</label>
                  <input type="range" min="4" max="8" step="1" value={slideshowInterval} onChange={e => setSlideshowInterval(parseInt(e.target.value))} />
                </ConfigRow>
                <ConfigRow>
                  <label>Перехід: {slideshowTransition}с</label>
                  <input type="range" min="0.5" max="1" step="0.1" value={slideshowTransition} onChange={e => setSlideshowTransition(parseFloat(e.target.value))} />
                </ConfigRow>
              </div>
              </div>
            )}

            <ModalDivider />
            <ModalSectionTitle>🖼️ Бібліотека зображень</ModalSectionTitle>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
              <ModalSearchInput 
                placeholder="Пошук картин за назвою..." 
                value={searchTerm} 
                onChange={e => {
                  setSearchTerm(e.target.value);
                  setVisibleBgCount(30);
                }}
              />
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                  <label style={{ fontSize: '12px' }}>Категорія:</label>
                  <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)} style={{ background: '#333', color: '#fff', border: '1px solid #555', borderRadius: '4px', padding: '2px 5px' }}>
                    <option value="all">Усі</option>
                    <option value="Динофроз">Динофроз</option>
                    <option value="Тварини">Тварини</option>
                    <option value="Стихія">Стихія</option>
                    <option value="Локації">Локації</option>
                    <option value="Фентезі">Фентезі</option>
                    <option value="Хоррор">Хоррор</option>
                      <option value="Аркада">Аркада</option>
                    <option value="custom">Ваші завантажені</option>
                  </select>
                </div>
                <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                  <label style={{ fontSize: '12px' }}>Сортувати:</label>
                  <select value={sortType} onChange={e => setSortType(e.target.value)} style={{ background: '#333', color: '#fff', border: '1px solid #555', borderRadius: '4px', padding: '2px 5px' }}>
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
                return (
                  <BgItem key={idx} $active={heroBg === bg.src || heroBg2 === bg.src}>
                    <RatingOverlay>
                      <HeartIcon 
                        $color={rating === 2 ? "gold" : rating === 1 ? "red" : "white"}
                        onClick={() => handleRate(bg.src)}
                      >
                        {rating === 2 ? "💛" : rating === 1 ? "❤️" : "🤍"}
                      </HeartIcon>
                    </RatingOverlay>
                    {isCustom(bg.src) && (
                      <>
                        <EditBtn onClick={(e) => {
                          e.stopPropagation();
                          const newName = window.prompt("Введіть нову назву для цих шпалер:", bg.name);
                          if (newName) {
                            setCustomHeroBgs(prev => prev.map(b => b.src === bg.src ? { ...b, name: newName } : b));
                          }
                        }} title="Редагувати назву">✎</EditBtn>
                        <DeleteBtn onClick={(e) => {
                          e.stopPropagation();
                          if(window.confirm(`Видалити шпалери "${bg.name}"?`)) {
                            setCustomHeroBgs(prev => prev.filter(b => b.src !== bg.src));
                            // Видаляємо з рейтингів
                            setBgRatings(prev => {
                              const newRatings = { ...prev };
                              delete newRatings[bg.src];
                              return newRatings;
                            });
                            if(heroBg === bg.src) setHeroBg(hills);
                            if(heroBg2 === bg.src) setHeroBg2(hills);
                          }
                        }} title="Видалити">✕</DeleteBtn>
                      </>
                    )}
                    <NameOverlay $hasSlots={heroBgMode === 'slideshow'}>{bg.name}</NameOverlay>
                    <BgSquare 
                      src={bg.src} 
                      loading="lazy"
                      onClick={() => setHeroBg(bg.src)}
                      title={bg.name}
                    />
                    {heroBgMode === 'slideshow' && (
                      <SlotButtons>
                        <SlotBtn $active={heroBg === bg.src} onClick={() => setHeroBg(bg.src)}>Слот 1</SlotBtn>
                        <SlotBtn $active={heroBg2 === bg.src} onClick={() => setHeroBg2(bg.src)}>Слот 2</SlotBtn>
                      </SlotButtons>
                    )}
                  </BgItem>
                );
              })}
            </BgGrid>

            {sortedBgs.length > visibleBgCount && (
              <LoadMoreButton onClick={() => setVisibleBgCount(prev => prev + 30)}>
                Завантажити ще
              </LoadMoreButton>
            )}

            <ModalDivider />
            <DropZone 
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current.click()}
            >
              📁 Перетягніть сюди картинку або натисніть для вибору
              <input 
                type="file" ref={fileInputRef} hidden accept="image/*" 
                onChange={(e) => handleFileUpload(e.target.files[0])} 
              />
            </DropZone>

            <CloseBtn onClick={() => setIsModalOpen(false)}>Закрити</CloseBtn>
          </ModalContent>
        </ModalOverlay>
      )}
    </HeroDiv>
  );
};

export default Hero;