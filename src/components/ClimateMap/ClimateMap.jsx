import React, { useState } from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MapWrapper = styled.div`
  position: relative;
  width: 95%;
  max-width: 1200px;
  aspect-ratio: 16 / 9; 
  min-height: 450px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: #1a1a1a;

  @media (min-width: 1920px) {
    min-height: 700px;
  }
`;

const StyledIframe = styled.iframe`
  border: none;
  width: 100%;
  height: 100%;
  pointer-events: ${props => (props.$isReady ? "auto" : "none")};
  transition: opacity 0.5s ease;
  opacity: ${props => (props.$isLoading ? "0" : "1")};
`;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-family: var(--font-family);
  text-align: center;
  z-index: 1;
`;

const Controls = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ActionButton = styled.button`
  background: ${props => (props.$active ? "skyblue" : "rgba(255, 255, 255, 0.1)")};
  color: ${props => (props.$active ? "#000" : "#fff")};
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;

  &:hover {
    background: skyblue;
    color: #000;
  }
`;

const SourceLink = styled.a`
  display: block;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  text-decoration: none;
  margin-top: 15px;
  transition: color 0.3s;

  &:hover {
    color: skyblue;
    text-decoration: underline;
  }
`;

const ClimateMap = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [overlay, setOverlay] = useState("wind");
  const [isMapActive, setIsMapActive] = useState(false);
  const lat = 48.379;
  const lon = 31.165;
  const zoom = 5;

  const embedUrl = `https://embed.windy.com/embed2.html?lat=${lat}&lon=${lon}&zoom=${zoom}&level=surface&overlay=${overlay}&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1`;

  return (
    <OuterContainer>
      <Controls>
        <ActionButton $active={overlay === "wind"} onClick={() => setOverlay("wind")}>
          Вітер
        </ActionButton>
        <ActionButton $active={overlay === "rain"} onClick={() => setOverlay("rain")}>
          Дощ
        </ActionButton>
        <ActionButton $active={overlay === "temp"} onClick={() => setOverlay("temp")}>
          Температура
        </ActionButton>
        {!isMapActive && (
          <ActionButton onClick={() => setIsMapActive(true)} style={{border: '1px solid skyblue'}}>
            Активувати карту 🖱️
          </ActionButton>
        )}
      </Controls>

      <MapWrapper onClick={() => setIsMapActive(true)}>
        {isLoading && (
          <Loader>
            <div className="spinner">🌀</div>
            <p>Завантаження метеоданих...</p>
          </Loader>
        )}
        
        <StyledIframe
          title="Windy Live Weather Map"
          src={embedUrl}
          $isLoading={isLoading}
          $isReady={isMapActive}
          onLoad={() => setIsLoading(false)}
          allowFullScreen
          loading="lazy" 
        />
      </MapWrapper>

      <SourceLink
        href="https://www.windy.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Оригінальна карта на Windy.com (Open Source Weather Data)
      </SourceLink>
    </OuterContainer>
  );
};

export default ClimateMap;