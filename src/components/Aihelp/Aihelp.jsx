import React, { useState, useRef, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { GoogleGenerativeAI } from "@google/generative-ai";
import localforage from "localforage";
import ReactMarkdown from "react-markdown";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { hasBannedContent } from "../../utils/contentFilter";
import { MdAddPhotoAlternate } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import html2canvas from "html2canvas";

/* ── Animations ── */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const typingDot = keyframes`
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40%            { transform: scale(1);   opacity: 1;   }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`;

/* ── Styled components ── */
const AihelpDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 570px;
  max-width: 1200px;
  width: 100%;
  margin: 10px auto 0;
  padding: 0 5px;
  gap: 6px;
  z-index: 100;
  position: relative;
  overflow-y: auto;
  transition:
    background 0.4s ease,
    backdrop-filter 0.4s ease,
    border 0.4s ease,
    border-radius 0.4s ease,
    padding 0.4s ease;
  ${(props) =>
    props.$isStickyBgMode
      ? css`
          background: ${props.$isDarkMode ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)"};
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 18px;
          border: 1px solid
            ${props.$isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"};
          padding: 10px;
        `
      : css`
          background: transparent;
        `}
`;

const AihelpTitle = styled.div`
  font-size: 18px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 800;
  letter-spacing: 0.6px;
  color: ${(props) => (props.$isDarkMode ? "#ffffff" : "#111111")};
  margin-bottom: 6px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 22px;
  transition: all 0.3s ease;
  z-index: 100;
  ${(props) =>
    props.$isStickyBgMode
      ? css`
          background: ${props.$isDarkMode
            ? "rgba(15, 15, 25, 0.75)"
            : "rgba(255, 255, 255, 0.75)"};
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid
            ${props.$isDarkMode
              ? "rgba(255, 165, 0, 0.25)"
              : "rgba(255, 140, 0, 0.2)"};
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
        `
      : css`
          background: ${props.$isDarkMode
            ? "rgba(255, 255, 255, 0.04)"
            : "rgba(0, 0, 0, 0.04)"};
          border: 1px solid
            ${props.$isDarkMode ? "rgba(255,165,0,0.2)" : "rgba(255,140,0,0.15)"};
        `}
`;

const TitleBadge = styled.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 2px 7px;
  border-radius: 999px;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  color: #fff;
  text-transform: uppercase;
`;

const SettingsPanel = styled.div`
  flex-shrink: 0;
  padding: 8px 10px;
  background: ${(p) =>
    p.$isStickyBgMode
      ? p.$isDarkMode
        ? "rgba(10, 10, 20, 0.82)"
        : "rgba(255, 249, 235, 0.9)"
      : p.$isDarkMode
        ? "rgba(12, 12, 12, 0.72)"
        : "#fffbf0"};
  backdrop-filter: ${(p) => (p.$isStickyBgMode ? "blur(10px)" : "none")};
  -webkit-backdrop-filter: ${(p) => (p.$isStickyBgMode ? "blur(10px)" : "none")};
  border: 1px solid rgba(255, 160, 0, 0.45);
  border-radius: 12px;
  z-index: 100;
  position: relative;
  color: ${(p) => (p.$isDarkMode ? "white" : "black")};
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition:
    background 0.4s ease,
    backdrop-filter 0.4s ease;
  box-shadow: 0 2px 12px rgba(255, 150, 0, 0.08);
`;

const ProviderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  z-index: 100;
  color: ${(p) => (p.$isDarkMode ? "white" : "black")};
  ${(p) =>
    p.$isStickyBgMode
      ? css`
          background: ${p.$isDarkMode ? "rgba(15,15,25,0.4)" : "rgba(255,255,255,0.55)"};
          padding: 6px 8px;
          border-radius: 8px;
        `
      : ""}
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    min-width: 160px;
  }
  input[type="radio"] {
    margin-right: 8px;
    accent-color: orange;
  }
  input[type="password"] {
    flex: 1;
    min-width: 200px;
    padding: 7px 12px;
    border-radius: 8px;
    border: 1px solid ${(p) => (p.$hasError ? "#ff4d4d" : "rgba(255,160,0,0.4)")};
    background: ${(p) =>
      p.$isDarkMode ? "rgba(30,30,40,0.7)" : "rgba(255,255,255,0.85)"};
    color: ${(p) => (p.$isDarkMode ? "white" : "black")};
    font-size: 13px;
    outline: none;
    transition: border-color 0.2s;
    &:focus {
      border-color: orange;
      box-shadow: 0 0 0 2px rgba(255, 165, 0, 0.15);
    }
  }
`;

const GetKeyLink = styled.a`
  font-size: 11px;
  color: orange;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  &:hover { text-decoration: underline; }
`;

const LengthSettings = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 6px;
  border-top: 1px dashed rgba(255, 160, 0, 0.25);
  padding-top: 8px;
  flex-wrap: wrap;
`;

const SettingsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 180px;
`;

const GroupLabel = styled.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #ff9500;
  text-transform: uppercase;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

const LengthButton = styled.button`
  border: 1px solid ${(p) => (p.$active ? "#ff9500" : "rgba(255,165,0,0.35)")};
  border-radius: 999px;
  padding: 5px 12px;
  font-size: 12px;
  cursor: pointer;
  background: ${(p) =>
    p.$active ? "linear-gradient(135deg, #ff9500, #ff6b00)" : "transparent"};
  color: ${(p) =>
    p.$active ? "#fff" : p.$isDarkMode ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.75)"};
  font-weight: ${(p) => (p.$active ? "700" : "500")};
  transition: all 0.2s ease;
  box-shadow: ${(p) => (p.$active ? "0 2px 8px rgba(255,149,0,0.35)" : "none")};
  &:hover {
    transform: translateY(-1px);
    border-color: #ff9500;
  }
`;

const ChatHistory = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
  padding: 4px 2px;
  border-radius: 10px;
  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ff9500, #ff6b00);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track { background: transparent; }
`;

const Message = styled.div`
  align-self: ${(p) => (p.$isBot ? "flex-start" : "flex-end")};
  max-width: 82%;
  background: ${(p) =>
    p.$isBot
      ? p.$isDarkMode
        ? "rgba(28, 28, 42, 0.88)"
        : "rgba(245,245,252,0.94)"
      : "linear-gradient(135deg, rgba(30,30,30,0.92), rgba(20,20,20,0.95))"};
  backdrop-filter: ${(p) => (p.$isStickyBgMode ? "blur(8px)" : "none")};
  -webkit-backdrop-filter: ${(p) => (p.$isStickyBgMode ? "blur(8px)" : "none")};
  color: ${(p) => (p.$isBot ? (p.$isDarkMode ? "#f0f0f0" : "#111") : "#fff")};
  border: 1px solid
    ${(p) =>
      p.$isBot
        ? p.$isDarkMode
          ? "rgba(255,255,255,0.1)"
          : "rgba(0,0,0,0.1)"
        : "rgba(255,149,0,0.3)"};
  padding: 8px 12px;
  border-radius: ${(p) => (p.$isBot ? "4px 14px 14px 14px" : "14px 4px 14px 14px")};
  position: relative;
  font-size: 13px;
  line-height: 1.55;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  animation: ${fadeIn} 0.25s ease;
  pre {
    background: rgba(0, 0, 0, 0.22);
    padding: 10px;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 12px;
  }
  p:first-child { margin-top: 0; }
  p:last-child  { margin-bottom: 0; }
`;

const CopyButton = styled.button`
  position: absolute;
  top: 6px;
  right: -34px;
  background: rgba(255, 149, 0, 0.12);
  border: 1px solid rgba(255, 149, 0, 0.3);
  color: inherit;
  cursor: pointer;
  font-size: 14px;
  padding: 3px 6px;
  border-radius: 6px;
  opacity: 0;
  transition: opacity 0.2s, transform 0.2s;
  ${Message}:hover & { opacity: 1; }
  &:hover {
    transform: scale(1.1);
    background: rgba(255, 149, 0, 0.22);
  }
`;

const ErrorBox = styled.div`
  color: #ff6b6b;
  background: rgba(255, 77, 77, 0.08);
  border: 1px solid rgba(255, 77, 77, 0.25);
  padding: 10px 14px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  animation: ${fadeIn} 0.2s ease;
`;

const RetryButton = styled.button`
  padding: 5px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 107, 107, 0.5);
  background: transparent;
  color: #ff6b6b;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  &:hover { background: rgba(255, 107, 107, 0.12); }
`;

const TypingIndicator = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 14px;
  background: ${(p) =>
    p.$isDarkMode ? "rgba(28,28,42,0.88)" : "rgba(245,245,252,0.94)"};
  border: 1px solid
    ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)")};
  border-radius: 4px 14px 14px 14px;
  animation: ${fadeIn} 0.2s ease;
`;

const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  display: inline-block;
  animation: ${typingDot} 1.2s ease infinite;
  animation-delay: ${(p) => p.$delay};
`;

const InputContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border: 1.5px solid ${(p) =>
    p.$isDarkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"};
  border-radius: 12px;
  background: ${(p) =>
    p.$isDarkMode ? "rgba(10,10,18,0.88)" : "rgba(255,255,255,0.9)"};
  backdrop-filter: ${(p) => (p.$isStickyBgMode ? "blur(10px)" : "none")};
  -webkit-backdrop-filter: ${(p) => (p.$isStickyBgMode ? "blur(10px)" : "none")};
  transition:
    background 0.4s ease,
    border-color 0.2s,
    box-shadow 0.2s;
  &:focus-within {
    border-color: rgba(255, 149, 0, 0.7);
    box-shadow: 0 0 0 3px rgba(255, 149, 0, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  border: none;
  background: transparent;
  padding: 12px 14px;
  border-radius: 12px 12px 0 0;
  color: ${(p) => (p.$isDarkMode ? "rgba(255,255,255,0.92)" : "#111")};
  font-size: 14px;
  outline: none;
  resize: none;
  overflow-y: auto;
  min-height: 46px;
  line-height: 1.5;
  &::placeholder {
    color: ${(p) =>
      p.$isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.35)"};
    font-size: 13px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 4px 10px 8px;
  gap: 6px;
  border-top: 1px solid ${(p) =>
    p.$isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"};
`;

const IconBtn = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid transparent;
  background: transparent;
  color: ${(p) =>
    p.$isDarkMode ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.55)"};
  font-size: ${(p) => p.$size || "18px"};
  cursor: pointer;
  transition: all 0.2s;
  &:disabled { opacity: 0.35; cursor: not-allowed; }
  &:hover:not(:disabled) {
    background: ${(p) =>
      p.$isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"};
    color: ${(p) => (p.$isDarkMode ? "#fff" : "#000")};
    transform: scale(1.08);
  }
  ${(p) =>
    p.$danger &&
    css`
      &:hover:not(:disabled) {
        color: #ff6b6b;
        background: rgba(255, 107, 107, 0.1);
      }
    `}
  ${(p) =>
    p.$listening &&
    css`
      color: #ff4444;
      background: rgba(255, 68, 68, 0.12);
      border-color: rgba(255, 68, 68, 0.3);
      animation: listeningPulse 1s ease infinite;
      @keyframes listeningPulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(255,68,68,0.4); }
        50%       { box-shadow: 0 0 0 6px rgba(255,68,68,0); }
      }
    `}
`;

const SendButton = styled.button`
  height: 32px;
  padding: 0 14px;
  border-radius: 8px;
  border: none;
  background: ${(p) =>
    p.disabled
      ? p.$isDarkMode
        ? "rgba(255,255,255,0.08)"
        : "rgba(0,0,0,0.08)"
      : "linear-gradient(135deg, #ff9500, #ff6b00)"};
  color: ${(p) =>
    p.disabled
      ? p.$isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)"
      : "#fff"};
  font-size: 13px;
  font-weight: 700;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.2s;
  box-shadow: ${(p) => (p.disabled ? "none" : "0 2px 8px rgba(255,149,0,0.35)")};
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 14px rgba(255, 149, 0, 0.45);
  }
  &:active:not(:disabled) { transform: translateY(0); }
`;

const FilePreviewContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  flex-wrap: wrap;
  padding: 4px 2px;
`;

const FileThumb = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => (p.$isDarkMode ? "rgba(40,40,55,0.9)" : "#f0f0f0")};
  border-radius: 8px;
  border: 1px solid rgba(255, 149, 0, 0.45);
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 7px;
  }
`;

const RemoveFileBtn = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #e53e3e;
  color: white;
  border: none;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  font-size: 9px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 4px rgba(0,0,0,0.3);
  transition: transform 0.15s;
  &:hover { transform: scale(1.15); }
`;

const StatusText = styled.div`
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 600;
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 2s linear infinite;
`;

const FileSizeText = styled.div`
  width: 100%;
  font-size: 10px;
  color: rgba(255, 149, 0, 0.8);
`;

const ViewerOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 20px;
  backdrop-filter: blur(4px);
  animation: ${fadeIn} 0.2s ease;
`;

const ViewerClose = styled.button`
  position: absolute;
  top: 16px;
  right: 20px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.16);
    transform: scale(1.08);
  }
`;

const ViewerFileName = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  max-width: 90vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ViewerImage = styled.img`
  max-width: 90vw;
  max-height: 72vh;
  border-radius: 10px;
  object-fit: contain;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
`;

const ViewerVideo = styled.video`
  max-width: 90vw;
  max-height: 62vh;
  border-radius: 10px;
  background: #000;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
`;

const AudioBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

const AudioIcon = styled.div`
  font-size: 72px;
  line-height: 1;
  filter: drop-shadow(0 0 20px rgba(255, 149, 0, 0.4));
`;

const WaveformBars = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 44px;
`;

const WaveBar = styled.div`
  width: 4px;
  border-radius: 2px;
  background: linear-gradient(180deg, #ff9500, #ff6b00);
  height: ${(p) => p.$h}%;
  opacity: ${(p) => (p.$playing ? 1 : 0.35)};
  animation: ${(p) =>
    p.$playing ? `wavePulse ${p.$dur}s ease-in-out infinite alternate` : "none"};
  @keyframes wavePulse {
    from { height: ${(p) => p.$h}%; }
    to   { height: ${(p) => Math.min(100, p.$h + 40)}%; }
  }
`;

const MediaControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: min(500px, 90vw);
`;

const PlayPauseBtn = styled.button`
  background: linear-gradient(135deg, #ff9500, #ff6b00);
  border: none;
  color: #fff;
  font-size: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(255, 149, 0, 0.4);
  transition: all 0.2s;
  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 20px rgba(255, 149, 0, 0.55);
  }
`;

const TimelineBar = styled.div`
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  transition: height 0.15s;
  &:hover { height: 8px; }
`;

const TimelineFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #ff9500, #ff6b00);
  border-radius: 3px;
  pointer-events: none;
`;

const TimeLabel = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
`;

const SpeedRow = styled.div`
  display: flex;
  gap: 6px;
`;

const SpeedBtn = styled.button`
  border: 1px solid ${(p) => (p.$active ? "#ff9500" : "rgba(255,255,255,0.15)")};
  border-radius: 999px;
  padding: 3px 10px;
  font-size: 12px;
  cursor: pointer;
  background: ${(p) =>
    p.$active ? "linear-gradient(135deg, #ff9500, #ff6b00)" : "transparent"};
  color: ${(p) => (p.$active ? "#fff" : "rgba(255,255,255,0.7)")};
  font-weight: ${(p) => (p.$active ? "700" : "400")};
  transition: all 0.2s;
  &:hover { border-color: #ff9500; }
`;

const AudioHidden = styled.audio`
  display: none;
`;

const SetBgButton = styled.button`
  padding: 7px 18px;
  border-radius: 999px;
  border: 1px solid rgba(255, 149, 0, 0.5);
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: rgba(255, 149, 0, 0.15);
    border-color: #ff9500;
    color: #fff;
  }
`;

/* ── Exported helpers ── */
export const getResponseLengthInstruction = (responseLength) => {
  if (responseLength === "detailed")
    return { label: "Більше", instruction: "Докладно." };
  if (responseLength === "normal")
    return { label: "Нормально", instruction: "Нормально." };
  return { label: "Менше", instruction: "Коротко." };
};

export const getResponseStyleInstruction = (responseStyle) => {
  if (responseStyle === "scientific")
    return {
      label: "Науково",
      instruction: "Використовуй науковий стиль, чітко, з термінами і логікою.",
    };
  if (responseStyle === "friendly")
    return {
      label: "Дружньо",
      instruction: "Використовуй дружній, теплий і простий стиль.",
    };
  return {
    label: "Стандартно",
    instruction: "Використовуй нейтральний стиль.",
  };
};

const STYHIYA_SYSTEM_PROMPT = `Ти — ШІ-асистент вбудований у веб-платформу «Стихія».
КОНЦЕПЦІЯ ПЛАТФОРМИ:
«Стихія» — це безкоштовна веб-платформа (без реклами) яка поєднує:
• 🌤 Погода — поточний прогноз, 24-годинний (на 7 днів), 16-денний. Кольорові попередження (🔴 зараз, 🟠 найближчі 3 дні) при екстремальних умовах (темп. >30°C або <-30°C, вітер >10 м/с, УФ >7). Можна переглядати кілька міст одночасно.
• 🎵 Музика — плейлисти без реклами та лімітів.
• 📰 Новини — RSS-стрічки з автоматичним фільтром: відсіює насильство, політику, 18+, кримінал, релігію (крім святкових днів), казино, корупцію, секти. Можна додавати власні RSS-джерела.
• 🎨 Фан-арти — галерея різних жанрів(більшість не належить автору). Користувачі можуть завантажувати, друкувати 2д і 3д принтером роботи.
• 🗺 Карта клімату — інтерактивна кліматична карта.
• 🤖 Допомога ШІ (це ти) — чат з Gemini, аналіз фото/відео/аудіо, скріншот сторінки.

АВТОР: TheTurkeyStudio. Email: theturkeystudio@gmail.com
Вікові обмеження: 13+. Деякий контент — 14+.
Конфіденційність: платформа не збирає персональні дані.
Авторські права: пісні використовуються лише в ознайомчих цілях.

ТВОЇ ПРАВИЛА:
1. Ти знаєш усі розділи Стихії і можеш допомогти користувачу розібратись у будь-якому з них.
2. Якщо питання стосується платформи — відповідай конкретно і по суті, посилаючись на розділи та функції.
3. Якщо питання загальне (наука, технології, творчість) — відповідай як корисний асистент.
4. Не генеруй шкідливий контент, код-зловмисник, пропаганду ненависті або матеріали 18+.
5. Відповідай українською мовою, якщо запит не на іншій мові.
6. Будь дружнім, чітким і корисним — відповідно до обраного стилю користувача.`;

/* ── Component ── */
const Aihelp = ({ isDarkMode, isStickyBgMode }) => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [personalApiKey, setPersonalApiKey] = useState("");
  // FIX: corrected model name (gemini-3.5-flash-lite does not exist)
  const [geminiModel, setGeminiModel] = useState("gemini-2.5-flash-lite");
  const [responseLength, setResponseLength] = useState("normal");
  const [responseStyle, setResponseStyle] = useState("friendly");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [streamingText, setStreamingText] = useState("");
  const lastPromptRef = useRef("");
  const [totalFilesSize, setTotalFilesSize] = useState(0);
  const [error, setError] = useState(null);
  const [isListening, setIsListening] = useState(false);
  // FIX: store recognition ref to prevent duplicate instances
  const recognitionRef = useRef(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [viewingFile, setViewingFile] = useState(null);
  const [mediaPlaying, setMediaPlaying] = useState(false);
  const [mediaProgress, setMediaProgress] = useState(0);
  const [mediaDuration, setMediaDuration] = useState(0);
  const [mediaCurrentTime, setMediaCurrentTime] = useState(0);
  const [mediaSpeed, setMediaSpeed] = useState(1);
  const objectURLs = useRef([]);
  const textareaRef = useRef(null);
  const chatEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const mediaRef = useRef(null);

  const formatTime = (s) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const openViewer = (fileObj) => {
    setViewingFile(fileObj);
    setMediaPlaying(false);
    setMediaProgress(0);
    setMediaCurrentTime(0);
    setMediaDuration(0);
    setMediaSpeed(1);
  };

  const closeViewer = () => {
    if (mediaRef.current) mediaRef.current.pause();
    setViewingFile(null);
    setMediaPlaying(false);
  };

  const togglePlay = () => {
    if (!mediaRef.current) return;
    if (mediaRef.current.paused) { mediaRef.current.play(); }
    else { mediaRef.current.pause(); }
  };

  const handleMediaTimeUpdate = () => {
    if (!mediaRef.current) return;
    const { currentTime, duration } = mediaRef.current;
    setMediaCurrentTime(currentTime);
    setMediaProgress(duration ? currentTime / duration : 0);
  };

  const handleMediaLoaded = () => {
    if (!mediaRef.current) return;
    setMediaDuration(mediaRef.current.duration);
    mediaRef.current.playbackRate = mediaSpeed;
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    if (mediaRef.current && mediaRef.current.duration) {
      mediaRef.current.currentTime = ratio * mediaRef.current.duration;
    }
  };

  const handleSpeedChange = (speed) => {
    setMediaSpeed(speed);
    if (mediaRef.current) mediaRef.current.playbackRate = speed;
  };

  const handleTextChange = (e) => {
    setPrompt(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    const container = chatContainerRef.current;
    if (!container) return;
    const dist = container.scrollHeight - container.scrollTop - container.clientHeight;
    if (dist < 150) container.scrollTop = container.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (!streamingText) return;
    const container = chatContainerRef.current;
    if (!container) return;
    const dist = container.scrollHeight - container.scrollTop - container.clientHeight;
    if (dist < 150) container.scrollTop = container.scrollHeight;
  }, [streamingText]);

  const captureScreen = async () => {
    if (isCapturing || loading) return;
    setIsCapturing(true);
    setStatus("Роблю скріншот...");
    try {
      const canvas = await html2canvas(document.body, {
        useCORS: true,
        allowTaint: true,
        scale: 0.8,
        logging: false,
      });
      canvas.toBlob((blob) => {
        if (!blob) return;
        const file = new File([blob], "screenshot.png", { type: "image/png" });
        const url = URL.createObjectURL(file);
        objectURLs.current.push(url);
        setSelectedFiles((prev) => [...prev, { file, objectURL: url }]);
        setTotalFilesSize((prev) => prev + blob.size);
        setStatus("Скріншот додано — запитайте Gemini!");
        setTimeout(() => setStatus(""), 2000);
      }, "image/png");
    } catch {
      setStatus("Помилка скріншоту");
      setTimeout(() => setStatus(""), 2000);
    } finally {
      setIsCapturing(false);
    }
  };

  // FIX: prevent multiple recognition instances; toggle on second click
  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      toast.error("Ваш браузер не підтримує розпізнавання голосу.");
      return;
    }
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      return;
    }
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.lang = "uk-UA";
    recognition.interimResults = false;
    recognition.onstart = () => { setIsListening(true); setStatus("Слухаю вас..."); };
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setPrompt((prev) => (prev ? prev + " " : "") + transcript);
    };
    recognition.onerror = () => { setIsListening(false); setStatus(""); recognitionRef.current = null; };
    recognition.onend   = () => { setIsListening(false); setStatus(""); recognitionRef.current = null; };
    recognition.start();
  };

  useEffect(() => {
    const loadKey = async () => {
      const gK = await localforage.getItem("gemini_api_key");
      const gM = await localforage.getItem("gemini_model");
      const history = await localforage.getItem("ai_help_history");
      if (gK) setPersonalApiKey(gK);
      if (gM) setGeminiModel(gM);
      if (history) setMessages(history);
    };
    loadKey();
    const handleKeyChange = (e) => setPersonalApiKey(e.detail);
    window.addEventListener("geminiKeyChanged", handleKeyChange);
    return () => window.removeEventListener("geminiKeyChanged", handleKeyChange);
  }, []);

  useEffect(() => {
    return () => {
      objectURLs.current.forEach((url) => URL.revokeObjectURL(url));
      objectURLs.current = [];
    };
  }, []);

  const fileToGenerativePart = async (file) => {
    const base64 = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.readAsDataURL(file);
    });
    return { inlineData: { data: base64, mimeType: file.type } };
  };

  const clearFiles = () => {
    objectURLs.current.forEach((url) => URL.revokeObjectURL(url));
    objectURLs.current = [];
    setSelectedFiles([]);
    setTotalFilesSize(0);
  };

  const saveApiKey = async (val) => {
    setPersonalApiKey(val);
    await localforage.setItem("gemini_api_key", val);
    window.dispatchEvent(new CustomEvent("geminiKeyChanged", { detail: val }));
  };

  const handleFileSelect = (files) => {
    const incomingFiles = Array.from(files);
    const MAX_FILES = 15;
    const MAX_TOTAL_SIZE = 100 * 1024 * 1024;
    if (selectedFiles.length + incomingFiles.length > MAX_FILES) {
      toast.error(`Максимум ${MAX_FILES} файлів.`);
      return;
    }
    const currentTotalSize = selectedFiles.reduce((acc, f) => acc + f.file.size, 0);
    const incomingTotalSize = incomingFiles.reduce((acc, f) => acc + f.size, 0);
    if (currentTotalSize + incomingTotalSize > MAX_TOTAL_SIZE) {
      toast.error("Загальний розмір перевищує 100 МБ.");
      return;
    }
    const newFilesData = incomingFiles.map((file) => {
      const url = URL.createObjectURL(file);
      objectURLs.current.push(url);
      return { file, objectURL: url };
    });
    setTotalFilesSize(currentTotalSize + incomingTotalSize);
    setSelectedFiles((prev) => [...prev, ...newFilesData]);
  };

  const removeFile = (index) => {
    setSelectedFiles((prev) => {
      const fileToRemove = prev[index];
      if (fileToRemove?.objectURL) {
        URL.revokeObjectURL(fileToRemove.objectURL);
        setTotalFilesSize((curr) => Math.max(0, curr - fileToRemove.file.size));
        objectURLs.current = objectURLs.current.filter((url) => url !== fileToRemove.objectURL);
      }
      return prev.filter((_, i) => i !== index);
    });
  };

  const setAsBackground = async (fileObj) => {
    try {
      const url = fileObj.objectURL || (fileObj.file && URL.createObjectURL(fileObj.file));
      if (!url) return;
      const existing = (await localforage.getItem("custom_hero_backgrounds")) || [];
      const entry = { src: url, name: fileObj.file?.name || "ai-image", author: "AiHelp" };
      const updated = [entry, ...existing.filter((e) => e.src !== url)];
      await localforage.setItem("custom_hero_backgrounds", updated);
      await localforage.setItem("hero_background", url);
      try {
        window.dispatchEvent(new CustomEvent("heroBackgroundChanged", { detail: { src: url } }));
      } catch {}
      // FIX: replaced alert() with toast
      toast.success("Картину встановлено як фон!");
    } catch (err) {
      console.error(err);
      toast.error("Не вдалося встановити фон.");
    }
  };

  // FIX: replaced alert() with toast
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Скопійовано!", { duration: 1500 });
    });
  };

  // FIX: replaced window.confirm() with toast confirmation
  const clearHistory = () => {
    toast(
      (t) => (
        <span style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13 }}>
          Очистити всю історію?
          <button
            onClick={async () => {
              toast.dismiss(t.id);
              objectURLs.current.forEach((url) => URL.revokeObjectURL(url));
              objectURLs.current = [];
              setMessages([]);
              setTotalFilesSize(0);
              await localforage.removeItem("ai_help_history");
            }}
            style={{
              background: "#e53e3e", color: "#fff", border: "none",
              borderRadius: 6, padding: "4px 10px", cursor: "pointer",
              fontSize: 12, fontWeight: 600,
            }}
          >
            Очистити
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            style={{
              background: "transparent", border: "1px solid rgba(255,255,255,0.25)",
              color: "inherit", borderRadius: 6, padding: "4px 10px",
              cursor: "pointer", fontSize: 12,
            }}
          >
            Скасувати
          </button>
        </span>
      ),
      { duration: 6000 }
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAsk();
    }
  };

  const handleAsk = async (eventOrText = null) => {
    const isRetry = typeof eventOrText === "string";
    const originalPrompt = isRetry ? eventOrText : prompt.trim();
    if ((!originalPrompt && selectedFiles.length === 0) || loading) return;
    if (!personalApiKey) {
      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Будь ласка, введіть Gemini API-ключ у панелі налаштувань.", isBot: true },
      ]);
      return;
    }
    if (originalPrompt && hasBannedContent(originalPrompt)) {
      setMessages((prev) => [
        ...prev,
        { text: "Запит містить заборонені слова або теми.", isBot: true },
      ]);
      return;
    }
    lastPromptRef.current = originalPrompt;
    setError(null);
    setLoading(true);
    setStreamingText("");
    setMessages((prev) => [...prev, { text: originalPrompt, isBot: false }]);
    setPrompt("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
    try {
      setStatus("З'єднання з Google Gemini...");
      const genAI = new GoogleGenerativeAI(personalApiKey);
      const model = genAI.getGenerativeModel({
        model: geminiModel,
        systemInstruction: STYHIYA_SYSTEM_PROMPT,
      });
      const { instruction: lengthInstr } = getResponseLengthInstruction(responseLength);
      const { instruction: styleInstr }  = getResponseStyleInstruction(responseStyle);
      const fullPrompt = `${lengthInstr} ${styleInstr}\n${originalPrompt}`;
      const parts = [{ text: fullPrompt }];
      for (const fileObj of selectedFiles) {
        parts.push(await fileToGenerativePart(fileObj.file));
      }
      const result = await model.generateContentStream(parts);
      let accumulatedText = "";
      for await (const chunk of result.stream) {
        accumulatedText += chunk.text();
        setStreamingText(accumulatedText);
      }
      const finalBotMessage = { text: accumulatedText, isBot: true };
      setMessages((prev) => {
        const updated = [...prev, finalBotMessage];
        localforage.setItem("ai_help_history", updated.slice(-25));
        return updated;
      });
      setStreamingText("");
      clearFiles();
    } catch (err) {
      setStreamingText("");
      setError(err.message);
      clearFiles();
    } finally {
      setLoading(false);
      setStatus("");
    }
  };

  const canSend = !loading && (!!prompt.trim() || selectedFiles.length > 0);

  return (
    <AihelpDiv $isStickyBgMode={isStickyBgMode} $isDarkMode={isDarkMode}>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: isDarkMode ? "#1e1e2a" : "#fff",
            color: isDarkMode ? "#f0f0f0" : "#111",
            border: "1px solid rgba(255,149,0,0.35)",
            fontSize: 13,
          },
        }}
      />

      <AihelpTitle $isDarkMode={isDarkMode} $isStickyBgMode={isStickyBgMode}>
         Допомога ШІ
        <TitleBadge>Gemini</TitleBadge>
      </AihelpTitle>

      <SettingsPanel $isDarkMode={isDarkMode} $isStickyBgMode={isStickyBgMode}>
        <ProviderRow $isDarkMode={isDarkMode} $isStickyBgMode={isStickyBgMode}>
          <label style={{ minWidth: "unset", fontWeight: 700, fontSize: 13 }}>
            Gemini API Key
          </label>
          <input
            type="password"
            placeholder="Вставте ваш Gemini API Key..."
            value={personalApiKey}
            onChange={(e) => saveApiKey(e.target.value)}
            name="ai-help-gemini-key"
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            data-form-type="other"
            data-lpignore="true"
          />
          {!personalApiKey && (
            <GetKeyLink href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer">
              🔗 Отримати ключ
            </GetKeyLink>
          )}
        </ProviderRow>

        <LengthSettings>
          <SettingsGroup>
            <GroupLabel>Обсяг</GroupLabel>
            <ButtonRow>
              {["concise", "normal", "detailed"].map((val) => (
                <LengthButton key={val} type="button" $active={responseLength === val} $isDarkMode={isDarkMode} onClick={() => setResponseLength(val)}>
                  {getResponseLengthInstruction(val).label}
                </LengthButton>
              ))}
            </ButtonRow>
          </SettingsGroup>
          <SettingsGroup>
            <GroupLabel>Стиль</GroupLabel>
            <ButtonRow>
              {["friendly", "standard", "scientific"].map((val) => (
                <LengthButton key={val} type="button" $active={responseStyle === val} $isDarkMode={isDarkMode} onClick={() => setResponseStyle(val)}>
                  {getResponseStyleInstruction(val).label}
                </LengthButton>
              ))}
            </ButtonRow>
          </SettingsGroup>
        </LengthSettings>
      </SettingsPanel>

      <ChatHistory ref={chatContainerRef}>
        {messages.map((m, i) => (
          <Message key={i} $isBot={m.isBot} $isDarkMode={isDarkMode} $isStickyBgMode={isStickyBgMode}>
            {m.isBot && <CopyButton onClick={() => copyToClipboard(m.text)}>📋</CopyButton>}
            <ReactMarkdown>{m.text}</ReactMarkdown>
          </Message>
        ))}

        {streamingText && (
          <Message $isBot $isDarkMode={isDarkMode} $isStickyBgMode={isStickyBgMode}>
            <ReactMarkdown>{streamingText}</ReactMarkdown>
          </Message>
        )}

        {loading && !streamingText && (
          <TypingIndicator $isDarkMode={isDarkMode}>
            <Dot $delay="0s" />
            <Dot $delay="0.2s" />
            <Dot $delay="0.4s" />
          </TypingIndicator>
        )}

        {error && (
          <ErrorBox>
            ⚠️ {error}
            <RetryButton onClick={() => handleAsk(lastPromptRef.current)}>Повторити</RetryButton>
          </ErrorBox>
        )}
        <div ref={chatEndRef} />
      </ChatHistory>

      {status && <StatusText>{status}</StatusText>}

      {selectedFiles.length > 0 && (
        <FilePreviewContainer>
          <FileSizeText>
            Розмір: {(totalFilesSize / (1024 * 1024)).toFixed(2)} MB / 100 MB
          </FileSizeText>
          {selectedFiles.map((f, i) => (
            <FileThumb key={i} $isDarkMode={isDarkMode}>
              <div
                style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "zoom-in" }}
                onClick={() => openViewer(f)}
              >
                {f.file.type.startsWith("video/") ? (
                  <video src={f.objectURL} />
                ) : f.file.type.startsWith("audio/") ? (
                  <span style={{ fontSize: "26px" }}>🎵</span>
                ) : (
                  <img src={f.objectURL} alt="preview" />
                )}
              </div>
              <RemoveFileBtn onClick={() => removeFile(i)}>✕</RemoveFileBtn>
            </FileThumb>
          ))}
        </FilePreviewContainer>
      )}

      <InputContainer
        $isDarkMode={isDarkMode}
        $isStickyBgMode={isStickyBgMode}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); handleFileSelect(e.dataTransfer.files); }}
      >
        <TextArea
          ref={textareaRef}
          placeholder="Запитайте щось... (Enter — надіслати, Shift+Enter — новий рядок)"
          value={prompt}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
          rows={1}
          $isDarkMode={isDarkMode}
        />
        <ActionButtons $isDarkMode={isDarkMode}>
          <label style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
            <IconBtn as="span" $isDarkMode={isDarkMode} $size="20px" title="Додати фото, відео, аудіо">
              <MdAddPhotoAlternate />
            </IconBtn>
            <input
              type="file"
              accept="image/*, video/*, audio/*"
              multiple
              hidden
              onChange={(e) => handleFileSelect(e.target.files)}
            />
          </label>

          <IconBtn $isDarkMode={isDarkMode} onClick={captureScreen} title="Зробити скріншот" disabled={loading || isCapturing}>
            {isCapturing ? "⏳" : "📸"}
          </IconBtn>

          {/* FIX: mic button was completely missing from JSX */}
          <IconBtn $isDarkMode={isDarkMode} onClick={handleVoiceInput} title={isListening ? "Зупинити запис" : "Голосовий ввід"} $listening={isListening}>
            {isListening ? "🛑" : "🎙️"}
          </IconBtn>

          <IconBtn $isDarkMode={isDarkMode} $danger onClick={clearHistory} title="Видалити всі повідомлення" $size="20px">
            <RiDeleteBack2Fill />
          </IconBtn>

          <SendButton disabled={!canSend} $isDarkMode={isDarkMode} onClick={handleAsk} title="Надіслати">
            {loading ? "⏳" : "Надіслати ➤"}
          </SendButton>
        </ActionButtons>
      </InputContainer>

      {viewingFile && (
        <ViewerOverlay onClick={closeViewer}>
          <ViewerClose onClick={closeViewer}>✕</ViewerClose>
          <ViewerFileName>{viewingFile.file.name}</ViewerFileName>

          <div onClick={(e) => e.stopPropagation()} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            {viewingFile.file.type.startsWith("image/") ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                <ViewerImage src={viewingFile.objectURL} alt={viewingFile.file.name} />
                <SetBgButton onClick={() => setAsBackground(viewingFile)}>🖼 Зробити фоном</SetBgButton>
              </div>
            ) : viewingFile.file.type.startsWith("video/") ? (
              <>
                <ViewerVideo
                  ref={mediaRef}
                  src={viewingFile.objectURL}
                  onTimeUpdate={handleMediaTimeUpdate}
                  onLoadedMetadata={handleMediaLoaded}
                  onPlay={() => setMediaPlaying(true)}
                  onPause={() => setMediaPlaying(false)}
                  onEnded={() => setMediaPlaying(false)}
                />
                <MediaControls>
                  <TimelineBar onClick={handleSeek}>
                    <TimelineFill style={{ width: `${mediaProgress * 100}%` }} />
                  </TimelineBar>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <PlayPauseBtn onClick={togglePlay}>{mediaPlaying ? "⏸" : "▶"}</PlayPauseBtn>
                    <TimeLabel>{formatTime(mediaCurrentTime)} / {formatTime(mediaDuration)}</TimeLabel>
                  </div>
                  <SpeedRow>
                    {[0.5, 0.75, 1, 1.25, 1.5, 2].map((s) => (
                      <SpeedBtn key={s} $active={mediaSpeed === s} onClick={() => handleSpeedChange(s)}>{s}x</SpeedBtn>
                    ))}
                  </SpeedRow>
                </MediaControls>
              </>
            ) : viewingFile.file.type.startsWith("audio/") ? (
              <AudioBox>
                <AudioIcon>🎵</AudioIcon>
                <WaveformBars>
                  {[30, 55, 80, 45, 65, 90, 50, 75, 40, 60, 85, 35, 70, 55, 80].map((h, i) => (
                    <WaveBar key={i} $h={h} $playing={mediaPlaying} $dur={(0.3 + i * 0.07).toFixed(2)} />
                  ))}
                </WaveformBars>
                <AudioHidden
                  ref={mediaRef}
                  src={viewingFile.objectURL}
                  onTimeUpdate={handleMediaTimeUpdate}
                  onLoadedMetadata={handleMediaLoaded}
                  onPlay={() => setMediaPlaying(true)}
                  onPause={() => setMediaPlaying(false)}
                  onEnded={() => setMediaPlaying(false)}
                />
                <MediaControls>
                  <TimelineBar onClick={handleSeek}>
                    <TimelineFill style={{ width: `${mediaProgress * 100}%` }} />
                  </TimelineBar>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <PlayPauseBtn onClick={togglePlay}>{mediaPlaying ? "⏸" : "▶"}</PlayPauseBtn>
                    <TimeLabel>{formatTime(mediaCurrentTime)} / {formatTime(mediaDuration)}</TimeLabel>
                  </div>
                  <SpeedRow>
                    {[0.5, 0.75, 1, 1.25, 1.5, 2].map((s) => (
                      <SpeedBtn key={s} $active={mediaSpeed === s} onClick={() => handleSpeedChange(s)}>{s}x</SpeedBtn>
                    ))}
                  </SpeedRow>
                </MediaControls>
              </AudioBox>
            ) : null}
          </div>
        </ViewerOverlay>
      )}
    </AihelpDiv>
  );
};

export default Aihelp;
