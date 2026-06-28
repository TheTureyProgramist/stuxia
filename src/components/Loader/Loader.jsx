import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import loadimage from "../../photos/hero-header/start-image.webp";
import loadtwo from "../../photos/hero-header/fogtwo.webp";

// Анімація появи та розширення
const expandEntrance = keyframes`
  0% { transform: scale(1.1); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1994;
  opacity: ${(props) => (props.$isFadingOut ? 0 : 1)};
  visibility: ${(props) => (props.$isFadingOut ? "hidden" : "visible")};
  transition:
    opacity 0.8s ease-in-out,
    visibility 1.5s ease-in-out;
  overflow: hidden;
`;

const LoaderContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  animation: ${expandEntrance} 1.5s ease-out forwards;
`;

const LoaderImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  object-position: center;
  transition: opacity 1.5s ease-in-out;
  opacity: ${(props) => (props.$active ? 1 : 0)};
`;
const UIOverlay = styled.div`
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: 0.5vh;
  text-align: center;
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  overflow: hidden;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.03);
`;

const ProgressBar = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #00c6ff 0%, #0072ff 50%, #ff8c00 100%);
  width: 0%;
  animation: load 4s forwards cubic-bezier(0.42, 0, 0.58, 1);
  @keyframes load {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;

const InfoText = styled.div`
  margin-top: 14px;
  color: #fff;
  font-family: "Inter", sans-serif;
`;
const TopLeftInfo = styled.div`
  position: absolute;
  top: -9px;
  left: -7px;
  z-index: 3;
  color: #fff;
  text-align: left;
`;

const VersionText = styled.p`
  font-size: 12px;
  background: rgba(0, 0, 0, 0.5);
  padding: 15px;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 20px;
  opacity: 0.9;
  margin: 0;
  font-family: "Inter", sans-serif;
`;
const PhraseText = styled.p`
  font-size: 13px;
  color: #00c6ff;
  line-height: 1.5;
  max-width: 500px;
  font-style: italic;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;
export default function Loader({ isLoading, isFadingOut, randomPhrase }) {
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setShowSecondImage(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <LoaderWrapper $isFadingOut={isFadingOut}>
      {/* Переміщена версія в лівий верхній кут */}
      <TopLeftInfo>
        <VersionText>Версія 0.9.9 Конотоп-Україна</VersionText>
      </TopLeftInfo>

      <LoaderContent>
        <ImageContainer>
          <LoaderImage
            src={loadimage}
            $active={!showSecondImage}
            alt="Loading..."
          />
          <LoaderImage
            src={loadtwo}
            $active={showSecondImage}
            alt="Loading..."
          />
        </ImageContainer>

        <UIOverlay>
          <ProgressContainer>
            <ProgressBar />
          </ProgressContainer>

          <InfoText>
            {/* PhraseText залишився внизу, як ви і хотіли */}
            <PhraseText>{randomPhrase}</PhraseText>
          </InfoText>
        </UIOverlay>
      </LoaderContent>
    </LoaderWrapper>
  );
}