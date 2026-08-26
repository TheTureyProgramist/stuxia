import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addCustomDay, removeCustomDay } from "../../features/counter/Counter.js";
import { BiTrash } from "react-icons/bi";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: ${(props) => (props.$isDarkMode ? "#222" : "#fff")};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledInput = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: ${(props) => (props.$isDarkMode ? "#333" : "#f9f9f9")};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
`;

const StyledSelect = styled.select`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: ${(props) => (props.$isDarkMode ? "#333" : "#f9f9f9")};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
`;

const CustomDatesModal = ({ onClose, isDarkMode, currentCardId }) => {
  const dispatch = useDispatch();
  const customDays = useSelector((state) => state.calendar?.customDays || []);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("00:00");
  const [reason, setReason] = useState("");
  const [duration, setDuration] = useState(1);
  const [durationUnit, setDurationUnit] = useState("hours");
  const [targetCard, setTargetCard] = useState(currentCardId);

  const myEvents = customDays.filter((d) => d.cardId === "all" || d.cardId === currentCardId);

  const handleAdd = () => {
    if (!date || !reason) return alert("Заповніть дату та назву");
    if (reason.length > 30) return alert("Назва занадто довга (макс 30)");
    
    // Check limit
    const userEvents = customDays; // Simplified: assuming 1 user for now
    if (userEvents.length >= 3) {
      return alert("Максимум 3 події на користувача");
    }

    dispatch(
      addCustomDay({
        id: Date.now(),
        date,
        time,
        reason,
        duration: Number(duration),
        durationUnit,
        cardId: targetCard,
      })
    );
    setDate("");
    setReason("");
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent $isDarkMode={isDarkMode} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ margin: 0 }}>Встановити дати</h3>
        <InputGroup>
          <label>Дата та Час початку</label>
          <div style={{ display: "flex", gap: "5px" }}>
            <StyledInput
              type="date"
              $isDarkMode={isDarkMode}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <StyledInput
              type="time"
              $isDarkMode={isDarkMode}
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </InputGroup>

        <InputGroup>
          <label>Тривалість</label>
          <div style={{ display: "flex", gap: "5px" }}>
            <StyledInput
              type="number"
              min="1"
              max="168"
              $isDarkMode={isDarkMode}
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              style={{ width: "60px" }}
            />
            <StyledSelect
              $isDarkMode={isDarkMode}
              value={durationUnit}
              onChange={(e) => setDurationUnit(e.target.value)}
            >
              <option value="hours">Годин</option>
              <option value="days">Днів</option>
            </StyledSelect>
          </div>
        </InputGroup>

        <InputGroup>
          <label>Застосувати для:</label>
          <StyledSelect
            $isDarkMode={isDarkMode}
            value={targetCard}
            onChange={(e) => setTargetCard(e.target.value)}
          >
            <option value="all">Всіх карток</option>
            <option value={currentCardId}>Цієї картки</option>
          </StyledSelect>
        </InputGroup>

        <InputGroup>
          <label>Назва події (макс 30 симв.)</label>
          <div style={{ display: "flex", gap: "5px" }}>
            <StyledInput
              type="text"
              placeholder="Наприклад: Новий Рік"
              $isDarkMode={isDarkMode}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              maxLength={30}
              style={{ flex: 1 }}
            />
            <button
              onClick={handleAdd}
              style={{
                background: "#ffb36c",
                border: "none",
                borderRadius: "5px",
                padding: "0 15px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              +
            </button>
          </div>
        </InputGroup>

        <hr style={{ border: "0.5px solid #444", margin: "10px 0" }} />

        <h4 style={{ margin: 0 }}>Наступаючі / триваючі події</h4>
        <div style={{ maxHeight: "150px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "8px" }}>
          {myEvents.length === 0 && <p style={{ fontSize: "12px", opacity: 0.7 }}>Немає подій</p>}
          {myEvents.map((ev) => (
            <div
              key={ev.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: isDarkMode ? "#333" : "#eee",
                padding: "8px",
                borderRadius: "5px",
                fontSize: "12px",
              }}
            >
              <div>
                <b>{ev.reason}</b>
                <br />
                {ev.date} {ev.time} ({ev.duration} {ev.durationUnit === "days" ? "дн" : "год"})
              </div>
              <button
                onClick={() => dispatch(removeCustomDay(ev.id))}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "red",
                  cursor: "pointer",
                }}
              >
                <BiTrash size={18} />
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          style={{
            marginTop: "10px",
            background: "#444",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Закрити
        </button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CustomDatesModal;
