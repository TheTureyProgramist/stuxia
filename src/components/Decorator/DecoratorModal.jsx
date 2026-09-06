import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useDecorator, getUniqueSelector } from "./DecoratorContext";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(30px) scale(0.95); opacity: 0; }
  to { transform: translateY(0) scale(1); opacity: 1; }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.2s ease-out;
`;

const Modal = styled.div`
  background: ${(props) => (props.$isStickyBgMode ? "rgba(30, 30, 46, 0.85)" : "#1e1e2e")};
  backdrop-filter: ${(props) => (props.$isStickyBgMode ? "blur(10px)" : "none")};
  color: #cdd6f4;
  border-radius: 16px;
  border: 2px solid #ffb36c;
  width: 90%;
  max-width: 480px;
  max-height: 85vh;
  overflow-y: auto;
  padding: 0;
  animation: ${slideUp} 0.3s ease-out;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 179, 108, 0.2);
  position: sticky;
  top: 0;
  background: #1e1e2e;
  z-index: 1;
`;

const Title = styled.h3`
  margin: 0;
  color: #ffb36c;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TagBadge = styled.span`
  background: rgba(255, 179, 108, 0.15);
  color: #ffb36c;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-family: monospace;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  color: #ffb36c;
  font-size: 22px;
  cursor: pointer;
  padding: 4px;
  &:hover {
    color: #fff;
  }
`;

const Body = styled.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ModeTabsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px;
  border-radius: 10px;
`;

const TabGroup = styled.div`
  display: flex;
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 179, 108, 0.3);
`;

const Tab = styled.button`
  flex: 1;
  background: ${(props) => (props.$active ? "rgba(255, 179, 108, 0.2)" : "transparent")};
  color: ${(props) => (props.$active ? "#ffb36c" : "#a6adc8")};
  border: none;
  padding: 6px;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: rgba(255, 179, 108, 0.1);
  }
`;

const PropRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  transition: background 0.15s;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

const PropLabel = styled.label`
  font-size: 13px;
  font-weight: bold;
  color: #ffb36c;
`;

const PropInput = styled.input`
  flex: 1;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 179, 108, 0.3);
  color: #cdd6f4;
  padding: 7px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-family: monospace;
  outline: none;
  &:focus {
    border-color: #ffb36c;
  }
`;

const ColorInput = styled.input`
  width: 36px;
  height: 30px;
  border: 2px solid rgba(255, 179, 108, 0.4);
  border-radius: 6px;
  cursor: pointer;
  padding: 0;
  background: none;
  &::-webkit-color-swatch-wrapper {
    padding: 2px;
  }
  &::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
  }
`;

const Footer = styled.div`
  display: flex;
  gap: 10px;
  padding: 14px 20px;
  border-top: 1px solid rgba(255, 179, 108, 0.2);
  position: sticky;
  bottom: 0;
  background: #1e1e2e;
`;

const ActionBtn = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: translateY(0);
  }
`;

const ApplyBtn = styled(ActionBtn)`
  background: #ffb36c;
  color: #1e1e2e;
  &:hover {
    background: #ffa149;
  }
`;

const PassthroughBtn = styled(ActionBtn)`
  background: rgba(255, 255, 255, 0.1);
  color: #cdd6f4;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const EDITABLE_PROPS_CONFIG = {
  color: {
    label: "Колір тексту",
    cssProp: "color",
    type: "color",
    desc: "Змінює колір шрифту елемента"
  },
  backgroundColor: {
    label: "Колір фону",
    cssProp: "backgroundColor",
    type: "color",
    desc: "Змінює фоновий колір елемента"
  },
  border: {
    label: "Рамка (бордюр)",
    cssProp: "border",
    type: "border",
    desc: "Налаштування межі елемента"
  },
  borderRadius: {
    label: "Заокруглення кутів",
    cssProp: "borderRadius",
    type: "text",
    placeholder: "напр., 8px або 50%",
    desc: "Радіус заокруглення рамки"
  },
  boxShadow: {
    label: "Тінь елемента",
    cssProp: "boxShadow",
    type: "text",
    placeholder: "напр., 0 4px 10px rgba(0,0,0,0.3)",
    desc: "Додає ефект тіні навколо елемента"
  },
  textShadow: {
    label: "Тінь тексту",
    cssProp: "textShadow",
    type: "text",
    placeholder: "напр., 1px 1px 2px #000",
    desc: "Ефект тіні для тексту"
  },
  backdropFilter: {
    label: "Розмиття фону",
    cssProp: "backdropFilter",
    type: "text",
    placeholder: "напр., blur(10px)",
    desc: "Ефекти для фону (скляний ефект)"
  },
  filter: {
    label: "Фільтри",
    cssProp: "filter",
    type: "text",
    placeholder: "напр., grayscale(50%)",
    desc: "Ефекти зображення/кольору"
  },
  outline: {
    label: "Контур",
    cssProp: "outline",
    type: "text",
    placeholder: "напр., 2px solid red",
    desc: "Зовнішня рамка елемента"
  },
  textDecoration: {
    label: "Декорування тексту",
    cssProp: "textDecoration",
    type: "text",
    placeholder: "напр., underline або none",
    desc: "Підкреслення, закреслення тощо"
  },
  cursor: {
    label: "Курсор миші",
    cssProp: "cursor",
    type: "cursor",
    desc: "Вигляд курсора при наведенні"
  },
};

const EDITABLE_PROPS = Object.values(EDITABLE_PROPS_CONFIG);

const rgbToHex = (rgb) => {
  if (!rgb || rgb === "transparent" || rgb === "rgba(0, 0, 0, 0)")
    return "#000000";
  if (rgb.startsWith("#")) return rgb;
  const match = rgb.match(/\d+/g);
  if (!match || match.length < 3) return "#000000";
  return (
    "#" +
    match
      .slice(0, 3)
      .map((n) => parseInt(n).toString(16).padStart(2, "0"))
      .join("")
  );
};

const parseBorder = (borderStr) => {
  if (!borderStr || borderStr === "none") {
    return { width: "0px", style: "none", color: "#000000" };
  }
  const parts = borderStr.split(/\s+/);
  let width = "1px";
  let style = "solid";
  let color = "#000000";

  parts.forEach(part => {
    if (/^\d+(px|em|rem|%|pt)$/.test(part) || /^\d+$/.test(part)) {
      width = part.includes("px") || part.includes("em") || part.includes("rem") || part.includes("%") || part.includes("pt") ? part : part + "px";
    } else if (["solid", "double", "dashed", "dotted", "groove", "ridge", "inset", "outset", "none"].includes(part)) {
      style = part;
    } else if (part.startsWith("#") || part.startsWith("rgb") || part.startsWith("hsl") || /^[a-zA-Z]+$/.test(part)) {
      color = part;
    }
  });
  return { width, style, color };
};

const combineBorder = (width, style, color) => {
  if (style === "none" || width === "0px") return "none";
  return `${width} ${style} ${color}`;
};

const DecoratorModal = ({ targetElement, onClose, isStickyBgMode }) => {
  const { applyStyle, getOverridesForElement, isDarkMode } = useDecorator();

  const [activeTheme, setActiveTheme] = useState(isDarkMode ? "dark" : "light");
  const [activeState, setActiveState] = useState("default");

  const currentMode = `${activeTheme}_${activeState}`;

  const tagName = targetElement?.tagName?.toLowerCase() || "?";
  const elementId = targetElement ? getUniqueSelector(targetElement) : "";

  const [editedStyles, setEditedStyles] = useState({});

  useEffect(() => {
    if (elementId) {
      const existing = getOverridesForElement(elementId);
      setEditedStyles(JSON.parse(JSON.stringify(existing)));
    }
  }, [elementId, getOverridesForElement]);

  const handleChange = (key, value) => {
    setEditedStyles((prev) => ({
      ...prev,
      [currentMode]: {
        ...(prev[currentMode] || {}),
        [key]: value,
      },
    }));
  };

  const handleApply = () => {
    const existing = getOverridesForElement(elementId);

    ["light_default", "light_hover", "dark_default", "dark_hover"].forEach(
      (mode) => {
        const modeStyles = editedStyles[mode] || {};
        const oldStyles = existing[mode] || {};

        EDITABLE_PROPS.forEach(({ cssProp }) => {
          if (modeStyles[cssProp] !== oldStyles[cssProp]) {
            if (modeStyles[cssProp]) {
              applyStyle(
                elementId,
                tagName,
                cssProp,
                oldStyles[cssProp],
                modeStyles[cssProp],
                mode,
              );
            } else if (oldStyles[cssProp]) {
              applyStyle(elementId, tagName, cssProp, oldStyles[cssProp], "", mode);
            }
          }
        });
      },
    );

    onClose();
  };

  const handlePassthrough = () => {
    onClose();
    setTimeout(() => {
      if (
        tagName === "input" ||
        tagName === "textarea" ||
        tagName === "select"
      ) {
        targetElement.focus();
      } else {
        targetElement.click();
      }
    }, 10);
  };

  if (!targetElement) return null;

  const currentModeStyles = editedStyles[currentMode] || {};

  let previewCss = "";
  if (editedStyles) {
    const selector = elementId.includes(" > ") || elementId.includes("#") || elementId.includes(":") 
      ? elementId 
      : `[data-decorator-id="${elementId}"]`;

    if (editedStyles.light_default) {
      previewCss += `body:not(.decorator-dark-mode) ${selector} { `;
      Object.entries(editedStyles.light_default).forEach(([prop, val]) => {
        previewCss += `${prop.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${val} !important; `;
      });
      previewCss += `}\n`;
    }
    if (editedStyles.light_hover) {
      previewCss += `body:not(.decorator-dark-mode) ${selector}:hover { `;
      Object.entries(editedStyles.light_hover).forEach(([prop, val]) => {
        previewCss += `${prop.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${val} !important; `;
      });
      previewCss += `}\n`;
    }
    if (editedStyles.dark_default) {
      previewCss += `body.decorator-dark-mode ${selector} { `;
      Object.entries(editedStyles.dark_default).forEach(([prop, val]) => {
        previewCss += `${prop.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${val} !important; `;
      });
      previewCss += `}\n`;
    }
    if (editedStyles.dark_hover) {
      previewCss += `body.decorator-dark-mode ${selector}:hover { `;
      Object.entries(editedStyles.dark_hover).forEach(([prop, val]) => {
        previewCss += `${prop.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${val} !important; `;
      });
      previewCss += `}\n`;
    }
  }

  return (
    <Overlay
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      data-decorator-ignore="true"
    >
      <style>{previewCss}</style>

      <Modal
        data-decorator-ignore="true"
        onClick={(e) => e.stopPropagation()}
        $isStickyBgMode={isStickyBgMode}
      >
        <ModalHeader>
          <Title>
            🎨 Декоратор <TagBadge>&lt;{tagName}&gt;</TagBadge>
          </Title>
          <CloseBtn onClick={onClose} data-decorator-ignore="true">
            &times;
          </CloseBtn>
        </ModalHeader>

        <Body>
          <ModeTabsContainer>
            <TabGroup>
              <Tab
                $active={activeTheme === "light"}
                onClick={() => setActiveTheme("light")}
              >
                🌞 Денна
              </Tab>
              <Tab
                $active={activeTheme === "dark"}
                onClick={() => setActiveTheme("dark")}
              >
                🌙 Темна
              </Tab>
            </TabGroup>
            <TabGroup>
              <Tab
                $active={activeState === "default"}
                onClick={() => setActiveState("default")}
              >
                Стандарт
              </Tab>
              <Tab
                $active={activeState === "hover"}
                onClick={() => setActiveState("hover")}
              >
                :hover
              </Tab>
            </TabGroup>
          </ModeTabsContainer>

          {EDITABLE_PROPS.map(({ cssProp, label, type, placeholder, desc }) => {
            const val = currentModeStyles[cssProp] || "";

            return (
              <PropRow key={cssProp}>
                <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "5px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <PropLabel>{label}</PropLabel>
                    <span style={{ fontSize: "10px", color: "#858da3" }}>{desc}</span>
                  </div>

                  {type === "color" && (
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <ColorInput
                        type="color"
                        value={rgbToHex(val)}
                        onChange={(e) => handleChange(cssProp, e.target.value)}
                        data-decorator-ignore="true"
                      />
                      <PropInput
                        value={val}
                        onChange={(e) => handleChange(cssProp, e.target.value)}
                        placeholder="напр., #ffb36c або transparent"
                        data-decorator-ignore="true"
                      />
                    </div>
                  )}

                  {type === "cursor" && (
                    <select
                      value={val}
                      onChange={(e) => handleChange(cssProp, e.target.value)}
                      data-decorator-ignore="true"
                      style={{
                        background: "rgba(0, 0, 0, 0.3)",
                        border: "1px solid rgba(255, 179, 108, 0.3)",
                        color: "#cdd6f4",
                        padding: "7px 10px",
                        borderRadius: "8px",
                        fontSize: "12px",
                        outline: "none",
                        width: "100%"
                      }}
                    >
                      <option value="">успадковується (default)</option>
                      <option value="default">стрілка (default)</option>
                      <option value="pointer">вказівник / посилання (pointer)</option>
                      <option value="grab">захоплення / рука відкрито (grab)</option>
                      <option value="grabbing">рука стиснута (grabbing)</option>
                      <option value="zoom-in">збільшення (zoom-in)</option>
                      <option value="zoom-out">зменшення (zoom-out)</option>
                      <option value="text">виділення тексту (text)</option>
                      <option value="not-allowed">заборонено (not-allowed)</option>
                      <option value="help">довідка (help)</option>
                      <option value="wait">очікування (wait)</option>
                      <option value="move">переміщення (move)</option>
                    </select>
                  )}

                  {type === "border" && (() => {
                    const parsed = parseBorder(val);
                    return (
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
                        <select
                          value={parsed.width}
                          onChange={(e) => {
                            const newBorder = combineBorder(e.target.value, parsed.style, parsed.color);
                            handleChange(cssProp, newBorder);
                          }}
                          data-decorator-ignore="true"
                          style={{
                            background: "rgba(0, 0, 0, 0.3)",
                            border: "1px solid rgba(255, 179, 108, 0.3)",
                            color: "#cdd6f4",
                            padding: "7px 8px",
                            borderRadius: "8px",
                            fontSize: "12px",
                            outline: "none",
                            flex: 1
                          }}
                        >
                          <option value="0px">0px</option>
                          <option value="1px">1px</option>
                          <option value="2px">2px</option>
                          <option value="3px">3px</option>
                          <option value="4px">4px</option>
                          <option value="5px">5px</option>
                          <option value="8px">8px</option>
                          <option value="10px">10px</option>
                        </select>

                        <select
                          value={parsed.style}
                          onChange={(e) => {
                            const newBorder = combineBorder(parsed.width, e.target.value, parsed.color);
                            handleChange(cssProp, newBorder);
                          }}
                          data-decorator-ignore="true"
                          style={{
                            background: "rgba(0, 0, 0, 0.3)",
                            border: "1px solid rgba(255, 179, 108, 0.3)",
                            color: "#cdd6f4",
                            padding: "7px 8px",
                            borderRadius: "8px",
                            fontSize: "12px",
                            outline: "none",
                            flex: 2
                          }}
                        >
                          <option value="none">немає (none)</option>
                          <option value="solid">суцільна (solid)</option>
                          <option value="double">подвійна (double)</option>
                          <option value="dashed">штрихова (dashed)</option>
                          <option value="dotted">пунктирна (dotted)</option>
                          <option value="groove">3D жолоб (groove)</option>
                          <option value="ridge">3D гребінь (ridge)</option>
                          <option value="inset">3D втиснута (inset)</option>
                          <option value="outset">3D витиснута (outset)</option>
                        </select>

                        <ColorInput
                          type="color"
                          value={rgbToHex(parsed.color)}
                          onChange={(e) => {
                            const newBorder = combineBorder(parsed.width, parsed.style, e.target.value);
                            handleChange(cssProp, newBorder);
                          }}
                          data-decorator-ignore="true"
                        />
                        <PropInput
                          value={parsed.color}
                          onChange={(e) => {
                            const newBorder = combineBorder(parsed.width, parsed.style, e.target.value);
                            handleChange(cssProp, newBorder);
                          }}
                          placeholder="#ffb36c"
                          data-decorator-ignore="true"
                          style={{ flex: 2, minWidth: "70px" }}
                        />
                      </div>
                    );
                  })()}

                  {type === "text" && (
                    <PropInput
                      value={val}
                      onChange={(e) => handleChange(cssProp, e.target.value)}
                      placeholder={placeholder || "успадковується"}
                      data-decorator-ignore="true"
                    />
                  )}
                </div>
              </PropRow>
            );
          })}
        </Body>

        <Footer>
          <PassthroughBtn
            onClick={handlePassthrough}
            data-decorator-ignore="true"
          >
            ▶ Виконати дію
          </PassthroughBtn>
          <ApplyBtn onClick={handleApply} data-decorator-ignore="true">
            ✓ Застосувати
          </ApplyBtn>
        </Footer>
      </Modal>
    </Overlay>
  );
};

export default DecoratorModal;
