import React, { useState, useEffect, useCallback, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import music from "../../../mp3/mechanik-kindom.mp3";
import decor from "../../../photos/fan-art/modaldecor.webp";

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const pulseElectric = keyframes`0% { box-shadow: inset 0 0 5px #00e5ff; } 50% { box-shadow: inset 0 0 15px #00e5ff; } 100% { box-shadow: inset 0 0 5px #00e5ff; }`;

const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  animation: ${fadeIn} 0.5s ease-in-out;
  height: 100vh;
  width: 100vw;
  background: #0a0a0a;
  padding: 5px;
  box-sizing: border-box;
  overflow: hidden;
  font-family: "Segoe UI", sans-serif;
`;

const GameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 1px;
  width: 90vw;
  max-width: 400px;
  aspect-ratio: 1 / 1;
  background: #222;
  border: 3px solid #444;
  position: relative;
  user-select: none;
`;

const Cell = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => (props.$isElectric ? "#002b36" : "#1a1a1a")};
  border: ${(props) =>
    props.$isElectric ? "1px solid #00e5ff" : "1px solid #333"};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${(props) =>
    props.$isElectric &&
    css`
      animation: ${pulseElectric} 2s infinite;
    `}

  &::after {
    content: "${(props) => (props.$isElectric ? "⚡" : "")}";
    font-size: 12px;
    opacity: 0.5;
  }
`;

const MetalBlock = styled(motion.div)`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(${(props) => props.$width}, 1fr);
  grid-template-rows: repeat(${(props) => props.$height}, 1fr);
  width: ${(props) => props.$blockWidth}px;
  height: ${(props) => props.$blockHeight}px;
  cursor: grab;
  z-index: 100;
  touch-action: none;
  gap: 1px;

  &:active {
    cursor: grabbing;
  }
`;

const BlockPart = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #90a4ae 0%, #37474f 100%);
  border: 1px solid #263238;
  box-shadow:
    inset 0 0 8px rgba(0, 0, 0, 0.6),
    1px 1px 2px rgba(255, 255, 255, 0.1);
  display: ${(props) => (props.$active ? "block" : "none")};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 4px;
    height: 4px;
    background: #cfd8dc;
    border-radius: 50%;
  }
`;

const RotateButton = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  background: rgba(255, 179, 108, 0.95);
  color: #3e2723;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  z-index: 210;
  top: -11px;
  ${(props) => (props.$side === "left" ? "left: -11px;" : "right: -11px;")}
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  transition: all 0.2s;
  &:hover {
    background: #fff;
    transform: scale(1.1);
  }
`;

const BottomPanel = styled.div`
  background-color: #3e2723;
  color: #ffb36c;
  border: 2px solid #ffb36c;
  padding: 8px 12px;
  width: 90vw;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
`;

const StatsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  font-size: 12px;
  font-weight: bold;
`;

const VoltageDisplay = styled.div`
  font-size: 18px;
  color: ${(props) => (props.$isGoal ? "#00e676" : "#ffb36c")};
  text-shadow: 0 0 10px
    ${(props) => (props.$isGoal ? "#00e676" : "transparent")};
  transition: color 0.3s;
`;

const GameButton = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  border: 2px solid #ffb36c;
  color: #ffb36c;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all 0.2s;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 179, 108, 0.1);
    transform: scale(1.05);
  }
`;

const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid rgba(255, 179, 108, 0.3);
  input {
    width: 60px;
    accent-color: #ffb36c;
    cursor: pointer;
  }
`;

const BLOCK_SHAPES = [
  {
    id: 1,
    shape: [
      [1, 1],
      [1, 1],
    ],
    w: 2,
    h: 2,
    startX: 0,
    startY: 0,
  }, // 2x2
  {
    id: 2,
    shape: [
      [1, 1, 1],
      [0, 1, 0],
    ],
    w: 3,
    h: 2,
    startX: 3,
    startY: 0,
  }, // T
  {
    id: 3,
    shape: [
      [1, 1, 1, 1],
      [1, 0, 0, 0],
    ],
    w: 4,
    h: 2,
    startX: 0,
    startY: 3,
  }, // L long
  {
    id: 4,
    shape: [
      [1, 1, 1],
      [1, 1, 1],
    ],
    w: 3,
    h: 2,
    startX: 5,
    startY: 3,
  }, // 3x2
];

const ELECTRIC_MATRIX = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const PuzzleNine = ({ onExit }) => {
  const [blocks, setMetalBlocks] = useState(
    BLOCK_SHAPES.map((b) => ({ ...b, x: b.startX, y: b.startY })),
  );
  const [voltage, setVoltage] = useState(0);
  const [displayVoltage, setDisplayVoltage] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isWon, setIsWon] = useState(false);
  const audioRef = useRef(null);
  const boardRef = useRef(null);

  const GOAL_VOLTAGE = 360;

  useEffect(() => {
    audioRef.current = new Audio(music);
    audioRef.current.loop = true;
    audioRef.current.play().catch(() => {});
    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (displayVoltage !== voltage) {
      const diff = voltage - displayVoltage;
      const step = diff > 0 ? 5 : -5;
      const timer = setTimeout(() => {
        setDisplayVoltage((prev) => prev + step);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [voltage, displayVoltage]);

  const calculateVoltage = useCallback((currentBlocks) => {
    let coveredTiles = new Set();

    currentBlocks.forEach((block) => {
      block.shape.forEach((row, dy) => {
        row.forEach((active, dx) => {
          if (active) {
            const tx = block.x + dx;
            const ty = block.y + dy;
            if (tx >= 0 && tx < 10 && ty >= 0 && ty < 10) {
              if (ELECTRIC_MATRIX[ty][tx] === 1) {
                coveredTiles.add(`${tx}-${ty}`);
              }
            }
          }
        });
      });
    });

    const newVoltage = coveredTiles.size * 20;
    setVoltage(newVoltage);
    if (newVoltage >= GOAL_VOLTAGE) setIsWon(true);
    else setIsWon(false);
  }, []);

  const rotateMatrix = (matrix, direction) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let newMatrix = [];
    if (direction === "cw") {
      for (let j = 0; j < cols; j++) {
        newMatrix[j] = [];
        for (let i = rows - 1; i >= 0; i--) {
          newMatrix[j].push(matrix[i][j]);
        }
      }
    } else {
      for (let j = cols - 1; j >= 0; j--) {
        newMatrix[cols - 1 - j] = [];
        for (let i = 0; i < rows; i++) {
          newMatrix[cols - 1 - j].push(matrix[i][j]);
        }
      }
    }
    return newMatrix;
  };

  const handleRotate = (id, direction) => {
    setMetalBlocks((prev) => {
      const block = prev.find((b) => b.id === id);
      const newShape = rotateMatrix(block.shape, direction);
      const newW = newShape[0].length;
      const newH = newShape.length;
      const potential = prev.map((b) =>
        b.id === id ? { ...b, shape: newShape, w: newW, h: newH } : b,
      );
      if (!checkCollision(id, block.x, block.y, potential)) {
        calculateVoltage(potential);
        return potential;
      }
      return prev;
    });
  };

  const checkCollision = (id, nx, ny, currentBlocks) => {
    const movingBlock = currentBlocks.find((b) => b.id === id);
    const otherBlocks = currentBlocks.filter((b) => b.id !== id);

    const movingCoords = [];
    movingBlock.shape.forEach((row, dy) => {
      row.forEach((active, dx) => {
        if (active) movingCoords.push({ x: nx + dx, y: ny + dy });
      });
    });

    if (movingCoords.some((c) => c.x < 0 || c.x >= 10 || c.y < 0 || c.y >= 10))
      return true;

    for (const other of otherBlocks) {
      const otherCoords = [];
      other.shape.forEach((row, dy) => {
        row.forEach((active, dx) => {
          if (active) otherCoords.push({ x: other.x + dx, y: other.y + dy });
        });
      });

      if (
        movingCoords.some((mc) =>
          otherCoords.some((oc) => oc.x === mc.x && oc.y === mc.y),
        )
      ) {
        return true;
      }
    }

    return false;
  };

  const handleDragEnd = (id, event, info) => {
    const board = boardRef.current.getBoundingClientRect();
    const cellSize = board.width / 10;

    const currentBlock = blocks.find((b) => b.id === id);
    const gridX = Math.round(
      (currentBlock.x * cellSize + info.offset.x) / cellSize,
    );
    const gridY = Math.round(
      (currentBlock.y * cellSize + info.offset.y) / cellSize,
    );

    if (checkCollision(id, gridX, gridY, blocks)) {
      setMetalBlocks([...blocks]);
    } else {
      const nextBlocks = blocks.map((b) =>
        b.id === id ? { ...b, x: gridX, y: gridY } : b,
      );
      setMetalBlocks(nextBlocks);
      calculateVoltage(nextBlocks);
    }
  };
  return (
    <GameWrapper
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${decor})`,
        backgroundSize: "cover",
      }}
    >
      <h2
        style={{
          color: "#ffb36c",
          margin: 0,
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        {isWon ? "СИСТЕМА АКТИВОВАНА" : "ЕНЕРГОМЕРЕЖА"}
      </h2>
      <div style={{ color: "#00e5ff", fontSize: "14px", marginBottom: "5px" }}>
        Потрібно: {GOAL_VOLTAGE}V
      </div>

      <GameBoard ref={boardRef}>
        {ELECTRIC_MATRIX.map((row, y) =>
          row.map((cell, x) => (
            <Cell key={`${x}-${y}`} $isElectric={cell === 1} />
          )),
        )}

        {blocks.map((block) => {
          const cellSize = boardRef.current?.clientWidth / 10 || 40;
          return (
            <MetalBlock
              key={block.id}
              $width={block.w}
              $height={block.h}
              $blockWidth={cellSize * block.w}
              $blockHeight={cellSize * block.h}
              drag
              dragMomentum={false}
              dragElastic={0.1}
              onDragEnd={(e, info) => handleDragEnd(block.id, e, info)}
              animate={{
                x: block.x * cellSize,
                y: block.y * cellSize,
              }}
              whileDrag={{ scale: 1.1, zIndex: 200 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <RotateButton
                $side="left"
                onPointerDown={(e) => e.stopPropagation()}
                onClick={() => handleRotate(block.id, "ccw")}
              >
                ↺
              </RotateButton>
              <RotateButton
                $side="right"
                onPointerDown={(e) => e.stopPropagation()}
                onClick={() => handleRotate(block.id, "cw")}
              >
                ↻
              </RotateButton>
              {block.shape.map((row, dy) =>
                row.map((active, dx) => (
                  <BlockPart key={`${dx}-${dy}`} $active={active === 1} />
                )),
              )}
            </MetalBlock>
          );
        })}

        <AnimatePresence>
          {isWon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,230,118,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 300,
                backdropFilter: "blur(4px)",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  background: "#1a1a1a",
                  padding: "20px",
                  border: "2px solid #00e676",
                  borderRadius: "10px",
                }}
              >
                <h3 style={{ color: "#00e676", margin: 0 }}>ПЕРЕМОГА! ⚡</h3>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GameBoard>

      <BottomPanel>
        <StatsGrid>
          <VoltageDisplay $isGoal={isWon}>
            Напруга: {displayVoltage}V
          </VoltageDisplay>
          <span style={{ fontSize: "10px", opacity: 0.7 }}>
            Переміщуйте залізні модулі на ⚡ блоки
          </span>
        </StatsGrid>

        <div style={{ display: "flex", gap: "5px" }}>
          <VolumeControl>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
            />
          </VolumeControl>
          <GameButton
            onClick={onExit}
            style={{ borderColor: "#f44336", color: "#f44336" }}
          >
            ✖
          </GameButton>
        </div>
      </BottomPanel>
    </GameWrapper>
  );
};

export default PuzzleNine;
