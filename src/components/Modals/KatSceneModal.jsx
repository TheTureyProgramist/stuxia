import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import ultra from "../../photos/hero-header/fogtwo.webp";
import theoryAudio from "../../mp3/silent.mp3";
import { DEFAULT_BGS } from "../Hero/defaultBgs.js";

// 1. Текстові титри
const CAPTIONS = [
  { duration: 5500, text: "Я не хочу багато користувачів, але я хочу людей, які з радістю використовуватимуть мій сайт для різних цілей." },
  { duration: 3500, text: "Надати вам чудову погоду — наш обов'язок." },
  { duration: 4500, text: "Політика — це фактор, який ми не підтримуємо і який ви не побачите..." },
  { duration: 4000, text: "Різноманітна та захоплива музика, яку можна додавати та шукати." },
  { duration: 3500, text: "Пишіть, підказуйте, що зробити для вас :)" },
  { duration: 7000, text: "Ми зробимо красиву оселю з вашим принтером, картинами з Pixabay, нашими сюжетними історіями та моментами з ігор і фільмів." },
  { duration: 4000, text: "Налаштуйте сайт під себе. Можливостей для персоналізації дуже багато!" },
  { duration: 5500, text: "Колись я не думав, що це може дійти до такого масштабу, проте фантазія робить дива :)" },
  { duration: 8500, text: "Велика подяка: API-сайтам, інструментам Firebase, npm-плагінам, які допомогли при створенні Стихії. Малятко ТВ, Mondo TV, Пікселю за гарні роки дитинства. І найголовніше — сім'ї та близьким." },
  { duration: 4500, text: "Окрема подяка: всім, хто дивиться ці титри та загалом користується сайтом." },
];
// 2. Музичні титри (список саундтреків з авторами)
const MUSIC_CREDITS = [
  { title: "Динофроз", author: "Mondo TV" },
  { title: "No No No, Monody, Unity, Hunger", author: "TheFatRat" },
  { title: "Dragonora, Asium, Factorium", author: "SayGames - MyLittleUniverse (Estoty)" },
  { title: "Electrodynamix, Clubstep, Theory of Everything, Theory of Everything II", author: "DJ-Nate" },
  { title: "Fingerbang (Fingerdash), Deadlocked", author: "Geometry Dash" },
  { title: "Болотна крамниця, Звуки індиків", author: "Авторська робота" },
  { title: "Faded", author: "Alan Walker" },
  { title: "Вовчиця", author: "Олег Вінник" }
];
// 3. Галерея зображень
const GALLERY_IMAGES = DEFAULT_BGS.filter(bg => bg.src && !bg.src.endsWith('.mp4'));

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(1.02); }
  to { opacity: 1; transform: scale(1); }
`;

const textFade = keyframes`
  from { opacity: 0; transform: translate(-50%, 10px); }
  to { opacity: 1; transform: translate(-50%, 0); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  z-index: 1500;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const SceneContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #000;
  overflow: hidden;
`;

const SceneImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Заповнює весь екран без бічних смуг та зсувів */
  animation: ${fadeIn} 0.8s ease-in-out forwards;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  font-size: 12px;
  padding: 8px 14px;
  border: 1px solid rgba(148, 255, 250, 0.5);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.75);
  color: #94fffa;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(148, 255, 250, 0.2);
  }
`;

const Caption = styled.div`
  position: absolute;
  bottom: 48px;
  left: 50%;
  z-index: 5;
  width: min(90%, 900px);
  padding: 12px 18px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(6px);
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  animation: ${textFade} 0.6s ease-out forwards;
`;

const Badge = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background: rgba(0, 0, 0, 0.85);
  border: 1px solid rgba(148, 255, 250, 0.3);
  padding: 10px 22px;
  border-radius: 20px;
  color: #94fffa;
  font-size: 13px;
  letter-spacing: 0.5px;
  text-align: center;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  animation: ${textFade} 0.5s ease-out forwards;

  span {
    color: #fff;
    font-weight: bold;
  }
`;

const BackgroundAudio = styled.audio`
  display: none;
`;

const KatSceneModal = ({ onClose }) => {
  const audioRef = useRef(null);
  
  // Фази кат-сцени: 'text' | 'music' | 'gallery'
  const [phase, setPhase] = useState("text");
  const [captionIndex, setCaptionIndex] = useState(0);
  const [musicIndex, setMusicIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Фонове аудіо
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      audio.play().catch(() => {});
    }
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  // Фаза 1: Текстові титри
  useEffect(() => {
    if (phase !== "text") return;

    const timer = setTimeout(() => {
      if (captionIndex < CAPTIONS.length - 1) {
        setCaptionIndex((prev) => prev + 1);
      } else {
        // Переходимо до фази музичних титрів
        setPhase("music");
      }
    }, CAPTIONS[captionIndex].duration);

    return () => clearTimeout(timer);
  }, [captionIndex, phase]);

  // Фаза 2: Музичні титри (показуємо кожен трек на 3 секунди)
  useEffect(() => {
    if (phase !== "music") return;

    const musicTimer = setInterval(() => {
      setMusicIndex((prev) => {
        if (prev < MUSIC_CREDITS.length - 1) {
          return prev + 1;
        } else {
          // Коли всі треки показали — переходимо до галереї зображень
          setPhase("gallery");
          return prev;
        }
      });
    }, 3000);

    return () => clearInterval(musicTimer);
  }, [phase]);

  // Фаза 3: Галерея зображень (зміна кожні 4 секунди)
  useEffect(() => {
    if (phase !== "gallery" || GALLERY_IMAGES.length === 0) return;

    const galleryTimer = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 4000);

    return () => clearInterval(galleryTimer);
  }, [phase]);

  // Закриття через ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const currentBg = GALLERY_IMAGES[galleryIndex];
  const currentTrack = MUSIC_CREDITS[musicIndex];

  return (
    <Overlay>
      <SceneContainer>
        {/* Стартне фонове зображення для текстів/музики, або зміна слайдів у галереї */}
        <SceneImage
          key={phase === "gallery" ? `gallery-${galleryIndex}` : "hero-bg"}
          src={phase === "gallery" ? currentBg?.src : ultra}
          alt="Stuxia Showcase"
        />

        <CloseButton type="button" onClick={onClose}>
          Пропустити
        </CloseButton>

        {/* 1. Показ текстових титрів */}
        {phase === "text" && CAPTIONS[captionIndex]?.text && (
          <Caption key={`caption-${captionIndex}`}>
            {CAPTIONS[captionIndex].text}
          </Caption>
        )}

        {/* 2. Показ музичних титрів */}
        {phase === "music" && currentTrack && (
          <Badge key={`music-${musicIndex}`}>
            Музичний саундтрек: <span>{currentTrack.title}</span> — {currentTrack.author}
          </Badge>
        )}

        {/* 3. Показ галереї картин */}
        {phase === "gallery" && currentBg && (
          <Badge key={`gallery-${galleryIndex}`}>
            Зображення на сайті: <span>{currentBg.name}</span> {currentBg.author ? `— ${currentBg.author}` : ""}
          </Badge>
        )}

        <BackgroundAudio ref={audioRef} src={theoryAudio} loop />
      </SceneContainer>
    </Overlay>
  );
};

export default KatSceneModal;