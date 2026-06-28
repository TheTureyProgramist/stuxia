import React, { useState, useMemo } from "react";
import styled, { keyframes } from "styled-components";

const LAT = 48.379;
const LON = 31.165;
const ZOOM = 5;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AihelpTitle = styled.div`
  font-size: 14px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${(props) => (props.$isDarkMode ? "black" : "white")};
  margin-bottom: 15px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  aspect-ratio: 16 / 8;
  min-height: 360px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: #1a1a1a;
`;

const Controls = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: rgba(0, 0, 0, 0.7);
  padding: 8px;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const StyledIframe = styled.iframe`
  border: none;
  width: 100%;
  height: 100%;
  pointer-events: ${(props) => (props.$isReady ? "auto" : "none")};
  transition: opacity 0.5s ease;
  opacity: ${(props) => (props.$isLoading ? "0" : "1")};
`;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 1;
  pointer-events: none;

  .spinner {
    display: inline-block;
    animation: ${spin} 2s linear infinite;
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

const ActionButton = styled.button`
  background: ${(props) =>
    props.$active ? "skyblue" : "rgba(255, 255, 255, 0.1)"};
  color: ${(props) => (props.$active ? "#000" : "#fff")};
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s;
  text-align: left;
  white-space: nowrap;

  &:hover {
    background: skyblue;
    color: #000;
  }
`;

const MapLink = styled.a`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  padding: 4px 6px;
  transition: color 0.3s;
  text-align: center;
  margin-top: 4px;

  &:hover {
    color: skyblue;
  }
`;

const ClimateMap = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [overlay, setOverlay] = useState("wind");
  const [isMapActive, setIsMapActive] = useState(false);

  const embedUrl = useMemo(() => {
    return `https://embed.windy.com/embed2.html?lat=${LAT}&lon=${LON}&zoom=${ZOOM}&level=surface&overlay=${overlay}&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1`;
  }, [overlay]);

  return (
    <OuterContainer>
      <AihelpTitle>Кліматична мапа</AihelpTitle>
      <MapWrapper onClick={() => !isMapActive && setIsMapActive(true)}>
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
          
          <div style={{ height: "1px", background: "rgba(255,255,255,0.2)", margin: "4px 0" }} />
          
          <ActionButton 
            onClick={(e) => { e.stopPropagation(); setIsMapActive(!isMapActive); }}
            style={{ border: isMapActive ? "1px solid #ff4d4d" : "1px solid skyblue" }}
          >
            {isMapActive ? "Деактивувати" : "Активувати"}
          </ActionButton>

          <MapLink href="https://www.windy.com/" target="_blank" rel="noopener noreferrer">
            Windy.com
          </MapLink>
        </Controls>

        {isLoading && (
          <Loader>
            <div className="spinner">🌀</div>
            <p>Завантаження...</p>
          </Loader>
        )}

        <StyledIframe
          title="Windy Live Weather Map"
          src={embedUrl}
          $isLoading={isLoading}
          $isReady={isMapActive}
          onLoad={() => setIsLoading(false)}
          allowFullScreen
        />
      </MapWrapper>
    </OuterContainer>
  );
};

export default ClimateMap;