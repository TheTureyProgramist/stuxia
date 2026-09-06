import React, { useState } from "react";
import styled from "styled-components";
import { getHourlyForecastDayGroups } from "../../utils/hourlyForecast";
import { getWindDirectionText } from "../../utils/windUtils";
import * as SunCalc from "suncalc";
import { FaCloudMoonRain, FaCloudMoon, FaSun } from "react-icons/fa";
import { LiaCloudSunRainSolid, LiaCloudMoonRainSolid } from "react-icons/lia";
import { BsMoonStarsFill } from "react-icons/bs";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 10px;
`;

const ModalContent = styled.div`
  background: ${(props) => (props.$isDarkMode ? "#1a1a1a" : "#f5f5f5")};
  background-image: ${(props) =>
    props.$cityImage
      ? `linear-gradient(rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52)), url(${props.$cityImage})`
      : "none"};
  background-size: cover;
  background-position: center;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#333")};
  border-radius: 15px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  padding: 4px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

const CloseButton = styled.button`
  float: right;
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 3px 6px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;

  &:hover {
    background: #ff5252;
  }
`;

const Title = styled.h2`
  margin-top: 0;
  color: #ffb36c;
  border-bottom: 2px solid #ffb36c;
`;

const Section = styled.div`
  background: ${(props) =>
    props.$isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"};
  border-left: 4px solid #00bfff;
  border-radius: 8px;

  h3 {
    margin-top: 0;
    color: #00bfff;
    font-size: 16px;
  }
`;

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
`;

const DataItem = styled.div`
  padding: 3px;
  background: ${(props) =>
    props.$isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  border-radius: 6px;
  font-size: 13px;
`;

const Label = styled.span`
  font-weight: bold;
  color: #ffb36c;
`;

const Value = styled.span`
  color: ${(props) => (props.$isDarkMode ? "#ccc" : "#333")};
  margin-left: 8px;
`;

const DangerHighlight = styled.span`
  color: ${(props) => props.$color || "#ff6b6b"};
  font-weight: bold;
  background: ${(props) => props.$color || "#ff6b6b"}33;
  padding: 2px 6px;
  border-radius: 4px;
`;

const HourlyTable = styled.div`
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    th,
    td {
      padding: 4px;
      text-align: center;
      border: 1px solid ${(props) => (props.$isDarkMode ? "#444" : "#ddd")};
    }

    th {
      background: #00bfff;
      color: #000;
      font-weight: bold;
      position: sticky;
      top: 0;
      z-index: 10;
    }

    tbody tr:nth-child(odd) {
      background: ${(props) =>
        props.$isDarkMode
          ? "rgba(255, 255, 255, 0.03)"
          : "rgba(0, 0, 0, 0.03)"};
    }
  }
`;

const WeatherDetailsModal = ({ isOpen, onClose, card, isDarkMode }) => {
  const [activeTab, setActiveTab] = useState("hourly");
  const [selectedHourlyDay, setSelectedHourlyDay] = useState(0);

  if (!isOpen || !card) return null;

  const current = card.current || {};
  const hourly = card.hourly || [];
  const daily = card.daily16 || [];
  const hourlyDayGroups = getHourlyForecastDayGroups(hourly);
  const visibleHourly = hourlyDayGroups[selectedHourlyDay]?.items || [];
  
  const currentDaily = daily.find(d => d.date === hourlyDayGroups[selectedHourlyDay]?.label) || daily[0];

  const getMoonData = (dateStr) => {
    try {
      const date = new Date(dateStr || Date.now());
      const illum = SunCalc.getMoonIllumination(date);
      const moonTimes = SunCalc.getMoonTimes(date, card.lat, card.lon);
      const phase = illum.phase;
      let phaseText = "";
      if (phase === 0) phaseText = "Молодик";
      else if (phase < 0.25) phaseText = "Зростаючий серп";
      else if (phase === 0.25) phaseText = "Перша чверть";
      else if (phase < 0.5) phaseText = "Зростаючий місяць";
      else if (phase === 0.5) phaseText = "Повня";
      else if (phase < 0.75) phaseText = "Спадаючий місяць";
      else if (phase === 0.75) phaseText = "Остання чверть";
      else phaseText = "🌘 Спадаючий серп";
      
      const rise = moonTimes.rise ? `${String(moonTimes.rise.getHours()).padStart(2,"0")}:${String(moonTimes.rise.getMinutes()).padStart(2,"0")}` : "Не сходить";
      const set = moonTimes.set ? `${String(moonTimes.set.getHours()).padStart(2,"0")}:${String(moonTimes.set.getMinutes()).padStart(2,"0")}` : "Не заходить";
      
      return { phaseText, rise, set };
    } catch(e) { return { phaseText: "—", rise: "—", set: "—" }; }
  };
  
  const getDayLength = (rise, set) => {
    if (!rise || !set) return "—";
    const r = new Date(rise);
    const s = new Date(set);
    const diffMs = s - r;
    if (diffMs < 0) return "—";
    const hrs = Math.floor(diffMs / 3600000);
    const mins = Math.floor((diffMs % 3600000) / 60000);
    return `${hrs}г ${mins}хв`;
  };

  const moonData = getMoonData(currentDaily?.fullDate);
  const dayLength = getDayLength(currentDaily?.sunrise, currentDaily?.sunset);
  
  const formatTime = (isoString) => {
    if (!isoString) return "—";
    const d = new Date(isoString);
    return `${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`;
  };

  // Логування для діагностики
  console.log("WeatherDetailsModal card data:", {
    currentKeys: Object.keys(current),
    hourlyLength: hourly.length,
    hourlyFirst: hourly[0],
    dailyLength: daily.length,
  });

  const TabButtons = styled.div`
    display: flex;
    font-size: 13px;
    margin-bottom: 10px;
    flex-wrap: wrap;

    button {
      background: ${(props) =>
        props.$isDarkMode ? "#333" : "rgba(0, 0, 0, 0.1)"};
      color: ${(props) => (props.$isDarkMode ? "#fff" : "#333")};
      padding: 4px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s;

      &.active {
        background: #ffb36c;
        color: #000;
      }

      &:hover {
        background: #01fdf5;
                color: #000;
      }
    }
  `;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent
        $isDarkMode={isDarkMode}
        $cityImage={card.cityImage}
        onClick={(e) => e.stopPropagation()}
      >
        {card.cityImage && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                const link = document.createElement("a");
                link.href = card.cityImage;
                link.download = `${card.locationName}_фото.jpg`;
                link.target = "_blank";
                link.click();
              }}
              style={{
                background: "rgba(0,0,0,0.5)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "4px 8px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "12px",
                zIndex: 10,
              }}
            >
              ⬇ Завантажити зображення
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const win = window.open("");
                win.document.write(
                  `<img src="${card.cityImage}" style="width:100%"/>`,
                );
                win.setTimeout(() => win.print(), 500);
              }}
              style={{
                background: "rgba(0,0,0,0.5)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "4px 8px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "12px",
                zIndex: 10,
              }}
            >
              🖨️ Друкувати
            </button>
                    <CloseButton onClick={onClose}>Закрити</CloseButton>
          </div>
        )}

        <Title>Детальний прогноз: {card.locationName}</Title>

        <TabButtons $isDarkMode={isDarkMode}>
          <button
            className={activeTab === "hourly" ? "active" : ""}
            onClick={() => setActiveTab("hourly")}
          >
            По годинам ({hourly.length}г)
          </button>
          <button
            className={activeTab === "daily" ? "active" : ""}
            onClick={() => setActiveTab("daily")}
          >
            По днях (16д)
          </button>
        </TabButtons>

        {activeTab === "hourly" && hourly.length > 0 && (
          <Section $isDarkMode={isDarkMode}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
                flexWrap: "wrap",
                gap: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "6px",
                  flexWrap: "wrap",
                  marginBottom: "8px",
                }}
              >
                {hourlyDayGroups.length > 1 && (
                  <select
                    value={selectedHourlyDay}
                    onChange={(e) => setSelectedHourlyDay(Number(e.target.value))}
                    style={{
                      background: isDarkMode ? "#333" : "#fff",
                      color: isDarkMode ? "#fff" : "#000",
                      border: "1px solid #00bfff",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: "bold",
                      outline: "none"
                    }}
                  >
                    {hourlyDayGroups.map((group, index) => (
                      <option key={group.label} value={index}>
                        {group.title || group.label}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", fontSize: "12px", background: "rgba(0,0,0,0.2)", padding: "10px", borderRadius: "8px", marginBottom: "10px", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}><FaSun style={{ color: "#ffd700" }} /> Схід сонця: <b>{formatTime(currentDaily?.sunrise)}</b></div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}><BsMoonStarsFill style={{ color: "#f1c40f" }} /> Захід сонця: <b>{formatTime(currentDaily?.sunset)}</b></div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}><LiaCloudSunRainSolid style={{ color: "#3498db" }} /> Тривалість дня: <b>{dayLength}</b></div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}><FaCloudMoonRain style={{ color: "#9b59b6" }} /> Фаза місяця: <b>{moonData.phaseText}</b></div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}><FaCloudMoon style={{ color: "#ecf0f1" }} /> Схід місяця: <b>{formatTime(moonData.rise)}</b></div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}><LiaCloudMoonRainSolid style={{ color: "#34495e" }} /> Захід місяця: <b>{formatTime(moonData.set)}</b></div>
            </div>

            <HourlyTable $isDarkMode={isDarkMode}>
              <table>
                <thead>
                  <tr>
                    <th>Час</th>
                    <th>Температура<br/>(Відчувається)</th>
                    <th>Вітер (м/с)<br/>Напрям</th>
                    <th>Вологість<br/>Точка роси</th>
                    <th>Опади / Дощ</th>
                    <th>Тиск (гПа)</th>
                    <th>Хмарність</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleHourly.map((h, idx) => (
                    <tr key={idx}>
                      <td>{h.time}</td>
                      <td>
                        {h.tempNum !== undefined &&
                        (h.tempNum > 30 || h.tempNum < -30) ? (
                          <DangerHighlight
                            $color={
                              h.tempNum > 30
                                ? "#ff6b6b"
                                : h.tempNum < -30
                                  ? "#4169e1"
                                  : "#ffb36c"
                            }
                          >
                            {h.tempNum}°C
                          </DangerHighlight>
                        ) : (
                          `${h.tempNum !== undefined ? h.tempNum : "—"}°C`
                        )}
                        <br/>
                        <span style={{ fontSize: "10px", color: isDarkMode ? "#aaa" : "#555" }}>
                          ({h.feels_like !== undefined ? h.feels_like : "—"})
                        </span>
                      </td>
                      <td>
                        {h.windNum !== undefined && h.windNum > 10 ? (
                          <DangerHighlight $color="#ff9800">
                            {h.windNum.toFixed(1)} м/с
                          </DangerHighlight>
                        ) : (
                          `${h.windNum !== undefined ? h.windNum.toFixed(1) : "—"}`
                        )}
                        {h.wind_gusts_10m ? ` (${h.wind_gusts_10m.toFixed(1)})` : ""}
                        <br/>
                        <span style={{ fontSize: "10px" }}>{getWindDirectionText(h.wind_direction_10m)}</span>
                      </td>
                      <td>
                        {h.relative_humidity_2m ?? "—"}%
                        <br/>
                        <span style={{ fontSize: "10px", color: isDarkMode ? "#aaa" : "#555" }}>
                          {h.dew_point_2m !== undefined ? `${h.dew_point_2m}°C` : "—"}
                        </span>
                      </td>
                      <td>
                        {h.precipitation !== undefined ? h.precipitation.toFixed(1) : "—"} мм
                        <br/>
                        <span style={{ fontSize: "10px", color: isDarkMode ? "#aaa" : "#555" }}>
                          ({h.rain !== undefined ? h.rain.toFixed(1) : "—"} мм)
                        </span>
                      </td>
                      <td>
                        {h.pressure_msl ? Math.round(h.pressure_msl) : "—"}
                      </td>
                      <td>{h.cloud_cover ?? "—"}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </HourlyTable>
          </Section>
        )}

        {activeTab === "daily" && daily.length > 0 && (
          <Section $isDarkMode={isDarkMode}>
            <HourlyTable $isDarkMode={isDarkMode}>
              <table>
                <thead>
                  <tr>
                    <th>Дата</th>
                    <th>День</th>
                    <th>Ніч</th>
                    <th>Вітер</th>
                    <th>УФ</th>
                    <th>Опади %</th>
                    <th>Дощ (мм)</th>
                    <th>Всього (мм)</th>
                  </tr>
                </thead>
                <tbody>
                  {daily.map((d, idx) => (
                    <tr key={idx}>
                      <td>{d.date}</td>
                      <td>
                        {parseInt(d.temp_day) > 30 ||
                        parseInt(d.temp_day) < -30 ? (
                          <DangerHighlight
                            $color={
                              parseInt(d.temp_day) > 30 ? "#ff6b6b" : "#4169e1"
                            }
                          >
                            {d.temp_day}
                          </DangerHighlight>
                        ) : (
                          d.temp_day
                        )}
                      </td>
                      <td>{d.temp_night}</td>
                      <td>
                        {parseFloat(d.wind_speed) > 10 ? (
                          <DangerHighlight $color="#ff9800">
                            {d.wind_speed}
                          </DangerHighlight>
                        ) : (
                          d.wind_speed
                        )}
                      </td>
                      <td>
                        {d.uv_index > 7 ? (
                          <DangerHighlight $color="#ff6b6b">
                            {d.uv_index}
                          </DangerHighlight>
                        ) : (
                          d.uv_index
                        )}
                      </td>
                      <td>{d.precipitation_probability_max ?? "—"}%</td>
                      <td>
                        {d.rain_sum !== undefined ? d.rain_sum.toFixed(1) : "—"}
                      </td>
                      <td>
                        {d.precipitation_sum !== undefined
                          ? d.precipitation_sum.toFixed(1)
                          : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </HourlyTable>
          </Section>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default WeatherDetailsModal;
