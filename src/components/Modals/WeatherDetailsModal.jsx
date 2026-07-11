import React, { useState } from "react";
import styled from "styled-components";

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
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#333")};
  border-radius: 15px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  padding: 4px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    max-width: 700px;
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
  padding-bottom: 10px;
`;

const Section = styled.div`
  margin: 5px 0;
  padding: 5px;
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
  margin-top: 5px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1920px) {
    gap: 20px;
  }
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
  margin-top: 4px;

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
  const [activeTab, setActiveTab] = useState("current");
  const [hourlyDayIndex, setHourlyDayIndex] = useState(0);

  if (!isOpen || !card) return null;

  const current = card.current || {};
  const hourly = card.hourly || [];
  const daily = card.daily16 || [];

  // Логування для діагностики
  console.log("WeatherDetailsModal card data:", {
    currentKeys: Object.keys(current),
    hourlyLength: hourly.length,
    hourlyFirst: hourly[0],
    dailyLength: daily.length,
  });

  const TabButtons = styled.div`
    display: flex;
    gap: 3px;
    margin-bottom: 10px;
    flex-wrap: wrap;

    button {
      background: ${(props) =>
        props.$isDarkMode ? "#333" : "rgba(0, 0, 0, 0.1)"};
      color: ${(props) => (props.$isDarkMode ? "#fff" : "#333")};
      border: 2px solid transparent;
      padding: 4px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s;

      &.active {
        border-color: #ffb36c;
        background: #ffb36c;
        color: #000;
      }

      &:hover {
        border-color: #ffb36c;
      }
    }
  `;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent
        $isDarkMode={isDarkMode}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}>✕ Закрити</CloseButton>

        <Title>🌍 Детальна погода: {card.locationName}</Title>

        <TabButtons $isDarkMode={isDarkMode}>
          <button
            className={activeTab === "current" ? "active" : ""}
            onClick={() => setActiveTab("current")}
          >
            Зараз
          </button>
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

        {activeTab === "current" && (
          <div>
            <Section $isDarkMode={isDarkMode}>
              <h3>⚡ Поточні умови</h3>
              <DataGrid>
                <DataItem $isDarkMode={isDarkMode}>
                  <Label>Температура:</Label>
                  <Value>
                    {current.tempNum > 30 || current.tempNum < -30 ? (
                      <DangerHighlight
                        $color={
                          current.tempNum > 30
                            ? "#ff6b6b"
                            : current.tempNum < -30
                              ? "#4169e1"
                              : "#ffb36c"
                        }
                      >
                        {current.temp}
                      </DangerHighlight>
                    ) : (
                      current.temp
                    )}
                  </Value>
                </DataItem>

                <DataItem $isDarkMode={isDarkMode}>
                  <Label>Відчувається:</Label>
                  <Value>{current.feels_like}</Value>
                </DataItem>

                <DataItem $isDarkMode={isDarkMode}>
                  <Label>Вітер:</Label>
                  <Value>
                    {current.windNum > 10 ? (
                      <DangerHighlight $color="#ff9800">
                        {current.wind_speed}
                      </DangerHighlight>
                    ) : (
                      current.wind_speed
                    )}
                  </Value>
                </DataItem>

                <DataItem $isDarkMode={isDarkMode}>
                  <Label>Напрямок вітру:</Label>
                  <Value>
                    {(() => {
                      const deg = current.wind_direction_10m || 0;
                      const directions = [
                        "N",
                        "NNE",
                        "NE",
                        "ENE",
                        "E",
                        "ESE",
                        "SE",
                        "SSE",
                        "S",
                        "SSW",
                        "SW",
                        "WSW",
                        "W",
                        "WNW",
                        "NW",
                        "NNW",
                      ];
                      const index = Math.round(deg / 22.5) % 16;
                      return `${directions[index]} (${deg}°)`;
                    })()}
                  </Value>
                </DataItem>

                <DataItem $isDarkMode={isDarkMode}>
                  <Label>Пориви вітру:</Label>
                  <Value>
                    {current.wind_gusts_10m > 12 ? (
                      <DangerHighlight $color="#ff6b6b">
                        {current.wind_gusts_10m} м/с
                      </DangerHighlight>
                    ) : (
                      `${current.wind_gusts_10m} м/с`
                    )}
                  </Value>
                </DataItem>

                <DataItem $isDarkMode={isDarkMode}>
                  <Label>Вологість:</Label>
                  <Value>{current.humidity}</Value>
                </DataItem>

                <DataItem $isDarkMode={isDarkMode}>
                  <Label>Точка роси:</Label>
                  <Value>{current.dew_point_2m}°C</Value>
                </DataItem>

                <DataItem $isDarkMode={isDarkMode}>
                  <Label>Тиск:</Label>
                  <Value>{current.pressure}</Value>
                </DataItem>

                <DataItem $isDarkMode={isDarkMode}>
                  <Label>Хмарність:</Label>
                  <Value>{current.cloud_cover}%</Value>
                </DataItem>

                <DataItem $isDarkMode={isDarkMode}>
                  <Label>Видимість:</Label>
                  <Value>
                    {current.visibility !== undefined
                      ? (current.visibility / 1000).toFixed(1)
                      : "—"}{" "}
                    км
                  </Value>
                </DataItem>

                <DataItem $isDarkMode={isDarkMode}>
                  <Label>УФ-індекс:</Label>
                  <Value>
                    {current.uv_index > 7 ? (
                      <DangerHighlight $color="#ff6b6b">
                        {current.uv_index}
                      </DangerHighlight>
                    ) : (
                      current.uv_index
                    )}
                  </Value>
                </DataItem>

                {current.temperature_80m !== undefined && (
                  <DataItem $isDarkMode={isDarkMode}>
                    <Label>Температура 80м:</Label>
                    <Value>{current.temperature_80m}°C</Value>
                  </DataItem>
                )}
              </DataGrid>
            </Section>
          </div>
        )}

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
              <h3 style={{ margin: 0 }}>📊 Погодинні дані</h3>
              {hourly.length > 24 && (
                <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                  {Array.from({ length: Math.ceil(hourly.length / 24) }).map(
                    (_, i) => (
                      <button
                        key={i}
                        onClick={() => setHourlyDayIndex(i)}
                        style={{
                          background:
                            hourlyDayIndex === i
                              ? "#00bfff"
                              : isDarkMode
                                ? "#333"
                                : "#ddd",
                          color:
                            hourlyDayIndex === i
                              ? "#000"
                              : isDarkMode
                                ? "#fff"
                                : "#000",
                          border: "none",
                          padding: "2px 8px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        {hourly[i * 24]?.date
                          ? hourly[i * 24].date
                          : `${i + 1} доба`}
                      </button>
                    ),
                  )}
                </div>
              )}
            </div>
            <HourlyTable $isDarkMode={isDarkMode}>
              <table>
                <thead>
                  <tr>
                    <th>Час</th>
                    <th>Температура</th>
                    <th>Вітер</th>
                    <th>Вологість</th>
                    <th>Опади</th>
                    <th>Дощ</th>
                    <th>Тиск</th>
                    <th>Хмарність</th>
                  </tr>
                </thead>
                <tbody>
                  {hourly
                    .slice(hourlyDayIndex * 24, (hourlyDayIndex + 1) * 24)
                    .map((h, idx) => (
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
                        </td>
                        <td>
                          {h.windNum !== undefined && h.windNum > 10 ? (
                            <DangerHighlight $color="#ff9800">
                              {h.windNum.toFixed(1)} м/с
                            </DangerHighlight>
                          ) : (
                            `${h.windNum !== undefined ? h.windNum.toFixed(1) : "—"} м/с`
                          )}
                        </td>
                        <td>{h.relative_humidity_2m ?? "—"}%</td>
                        <td>
                          {h.precipitation !== undefined
                            ? h.precipitation.toFixed(1)
                            : "—"}{" "}
                          мм
                        </td>
                        <td>
                          {h.rain !== undefined ? h.rain.toFixed(1) : "—"} мм
                        </td>
                        <td>
                          {h.pressure_msl ? Math.round(h.pressure_msl) : "—"}{" "}
                          гПа
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
            <h3>📅 Прогноз по днях (16 днів)</h3>
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
