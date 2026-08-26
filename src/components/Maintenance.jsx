import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import sirenhead from "../photos/vip-images/sirenhead/sirenhead.webp";

/* ─── анімації ──────────────────────────────────────────────── */
const scanline = keyframes`
  0%   { background-position: 0 0; }
  100% { background-position: 0 100vh; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
`;

const flicker = keyframes`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
  20%, 24%, 55%                           { opacity: 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50%       { transform: translateY(-12px) rotate(1deg); }
`;

/* ─── стилі ─────────────────────────────────────────────────── */
const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  text-align: center;
  overflow: hidden;
  font-family: var(--font-family, "Inter", sans-serif);

  /* фон: зображення + чорний градієнт */
  background:
    url(${sirenhead}) center / cover no-repeat,
    linear-gradient(135deg, #000 0%, #0a0a0a 100%);

  /* скан-лінії поверх */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 3px,
      rgba(0, 0, 0, 0.15) 3px,
      rgba(0, 0, 0, 0.15) 4px
    );
    animation: ${scanline} 8s linear infinite;
    pointer-events: none;
  }
`;

const GlowTitle = styled(motion.h1)`
  font-size: clamp(2rem, 6vw, 5rem);
  font-weight: 900;
  margin: 0 0 16px;
  line-height: 1.15;
  background: linear-gradient(90deg, #ffb36c, #94fffa, #ffb36c);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 18px rgba(148, 255, 250, 0.55));
  animation: ${flicker} 6s infinite;
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 22px;
  margin-bottom: 28px;
  border-radius: 999px;
  border: 1px solid rgba(255, 179, 108, 0.45);
  background: rgba(255, 179, 108, 0.1);
  color: #ffb36c;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  backdrop-filter: blur(8px);

  span.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffb36c;
    animation: ${pulse} 1.2s ease-in-out infinite;
    flex-shrink: 0;
  }
`;

const Card = styled(motion.div)`
  position: relative;
  background: rgba(0, 0, 0, 0.62);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 36px 40px;
  max-width: 640px;
  width: 100%;
  box-shadow:
    0 0 0 1px rgba(148, 255, 250, 0.08),
    0 24px 60px rgba(0, 0, 0, 0.6);
`;

const TimeRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: 24px;
`;

const TimeLabel = styled.p`
  margin: 0;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.45);
  text-transform: uppercase;
  letter-spacing: 0.12em;
`;

const TimeValue = styled.p`
  margin: 0;
  font-size: 2.2rem;
  font-weight: 800;
  color: #94fffa;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.04em;
  text-shadow: 0 0 20px rgba(148, 255, 250, 0.5);
`;

const Desc = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.65;
  margin: 0 0 28px;
`;

const StatusBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  margin-bottom: 10px;
`;

const StatusDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $ok }) => ($ok ? "#4ade80" : "#ffb36c")};
  box-shadow: 0 0 8px ${({ $ok }) => ($ok ? "#4ade80" : "#ffb36c")};
  animation: ${pulse} 1.5s ease-in-out infinite;
  flex-shrink: 0;
`;

const StatusText = styled.span`
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.6);
`;

const FloatingImg = styled.div`
  position: absolute;
  right: -60px;
  bottom: -40px;
  width: 220px;
  opacity: 0.06;
  animation: ${float} 5s ease-in-out infinite;
  pointer-events: none;

  img {
    width: 100%;
    border-radius: 12px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

/* ─── компонент ─────────────────────────────────────────────── */
const Maintenance = ({ isDarkMode = true, endTime = null, message = null }) => {
  const [countdown, setCountdown] = useState(null);
  const [isComplete, setIsComplete] = useState(false);

  /* таймер зворотного відліку */
  useEffect(() => {
    if (!endTime) return;

    const tick = () => {
      const diff = new Date(endTime) - Date.now();
      if (diff <= 0) {
        setCountdown(null);
        setIsComplete(true);
        // Автоматичне перезавантаження через 1 хвилину після завершення
        setTimeout(() => window.location.reload(), 60_000);
        return;
      }

      const h = Math.floor(diff / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1_000);

      setCountdown(
        `${h > 0 ? `${h}год ` : ""}${String(m).padStart(2, "0")}хв ${String(s).padStart(2, "0")}с`,
      );
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [endTime]);

  return (
    <AnimatePresence>
      <Overlay
        key="maintenance-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Badge
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <span className="dot" />
          Технічні роботи
        </Badge>

        <GlowTitle
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {isComplete ? "⚡ Завершено!" : "⚙️ Увага!\nЗараз техроботи"}
        </GlowTitle>

        <Card
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.35,
            duration: 0.55,
            type: "spring",
            stiffness: 120,
          }}
        >
          <FloatingImg>
            <img src={sirenhead} alt="" />
          </FloatingImg>

          {/* Час ─ показуємо лише якщо endTime заданий */}
          {endTime && (
            <TimeRow>
              <TimeLabel>
                {isComplete ? "Перезавантаження через" : "Залишилось часу"}
              </TimeLabel>
              <TimeValue>
                {isComplete ? "~1 хв" : (countdown ?? "Підраховуємо…")}
              </TimeValue>
            </TimeRow>
          )}

          <Desc>
            {message ??
              "Ми проводимо технічне обслуговування сайту. " +
                "Якщо роботи завершаться раніше — ви отримаєте сповіщення " +
                "і сторінка перезавантажиться автоматично. " +
                "Якщо ні — очікуйте, час буде вказано вище."}
          </Desc>

          <StatusBar>
            <StatusDot $ok={false} />
            <StatusText>Сайт тимчасово недоступний</StatusText>
          </StatusBar>

          {isComplete && (
            <StatusBar>
              <StatusDot $ok={true} />
              <StatusText>Роботи завершено — перезавантаження…</StatusText>
            </StatusBar>
          )}
        </Card>
      </Overlay>
    </AnimatePresence>
  );
};

export default Maintenance;
