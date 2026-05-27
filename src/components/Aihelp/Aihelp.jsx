import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { pipeline } from "@huggingface/transformers";
import { GoogleGenerativeAI } from "@google/generative-ai";
import localforage from "localforage";
import { motion, AnimatePresence } from "framer-motion";
const BANNED_KEYWORDS = [
  "війна",
  "вибори",
  "депутат",
  "рецепт",
  "порно",
  "казино",
];

const AihelpDiv = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
  @media (min-width: 768px) {
    margin-top: 50px;
  }
  @media (min-width: 1200px) {
    margin-top: 80px;
  }
`;

const AihelpTitle = styled.div`
  font-size: 14px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${(props) => (props.$isDarkMode ? "black" : "white")};
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1200px) {
    font-size: 30px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${props => props.$isDarkMode ? '#444' : '#ccc'};
  background: ${props => props.$isDarkMode ? '#2c2c2c' : 'white'};
  color: ${props => props.$isDarkMode ? 'white' : 'black'};
  font-family: inherit;
  outline: none;
  &:focus { border-color: orange; }
`;

const SendButton = styled.button`
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    background: #0056b3;
  }
`;

const ResponseBox = styled.div`
  width: 100%;
  max-width: 500px;
  color: ${(props) => (props.$isDarkMode ? "white" : "#333")};
  background: ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.05)" : "#f9f9f9")};
  padding: 15px;
  border-radius: 10px;
  white-space: pre-wrap;
  border: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.1)" : "#eee")};
  line-height: 1.5;
`;

const ModeSelector = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  color: ${(props) => (props.$isDarkMode ? "black" : "white")};
  font-size: 14px;

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  input[type="radio"] {
    margin-right: 5px;
    accent-color: orange;
  }
`
const Aihelp = ({ isDarkMode }) => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [aiMode, setAiMode] = useState("gemini"); // 'offline', 'openai', 'groq', 'gemini'
  const [modelLoadingProgress, setModelLoadingProgress] = useState(0); // New state for model loading progress
  const [streamingText, setStreamingText] = useState("");
  const [personalApiKey, setPersonalApiKey] = useState("");
  const [openaiApiKey, setOpenaiApiKey] = useState("");
  const [groqApiKey, setGroqApiKey] = useState("");
  const [groqKeyStatus, setGroqKeyStatus] = useState("idle");
  const [geminiModel, setGeminiModel] = useState("gemini-2.5-flash");
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [responseLength, setResponseLength] = useState("concise"); // 'concise' або 'detailed'

  const generator = useRef(null);

  useEffect(() => {
    const loadKey = async () => {
      const gK = await localforage.getItem("gemini_api_key");
      const oK = await localforage.getItem("openai_api_key");
      const grK = await localforage.getItem("groq_api_key");
      const gM = await localforage.getItem("gemini_model");

      if (gK) setPersonalApiKey(gK);
      if (oK) setOpenaiApiKey(oK);
      if (grK) {
        setGroqApiKey(grK);
        verifyGroqKey(grK);
      }
      if (gM) setGeminiModel(gM);
    };

    loadKey();
  }, []);

  const verifyGroqKey = async (key) => {
    if (!key || key.length < 10) {
      setGroqKeyStatus("idle");
      return;
    }
    setGroqKeyStatus("loading");
    try {
      const res = await fetch("https://api.groq.com/openai/v1/models", {
        headers: { "Authorization": `Bearer ${key}` }
      });
      setGroqKeyStatus(res.ok ? "valid" : "invalid");
    } catch {
      setGroqKeyStatus("invalid");
    }
  };

  const saveKeys = async (type, val) => {
    if (type === "gemini") {
      setPersonalApiKey(val);
      await localforage.setItem("gemini_api_key", val);
      return;
    }

    if (type === "openai") {
      setOpenaiApiKey(val);
      await localforage.setItem("openai_api_key", val);
      return;
    }

    if (type === "groq") {
      setGroqApiKey(val);
      await localforage.setItem("groq_api_key", val);
      verifyGroqKey(val);
      return;
    }
  };

  const handleAsk = async () => {
    if (!prompt.trim() || loading) return;

    const query = prompt.trim().toLowerCase();
    // Перевірка на заборонені слова
    if (BANNED_KEYWORDS.some((word) => query.includes(word))) {
      setResponse("Вибачте, але я не можу відповідати на запити, що стосуються політики, війни або неприйнятного контенту.");
      setStreamingText("");
      return;
    }

    setLoading(true);
    setResponse("");
    setStreamingText("");

    try {
      // Офлайн тепер використовують локальну модель
      if (aiMode === "offline") {
        if (!generator.current) {
          setStatus("Ініціалізація локальної моделі...");
          setModelLoadingProgress(0); // Reset progress
          const isWebGPUSupported = "gpu" in navigator;
          // Використовуємо дуже легку модель для швидкості
          generator.current = await pipeline("text-generation", "onnx-community/Qwen2.5-0.5B-Instruct", {
            device: isWebGPUSupported ? "webgpu" : "cpu",
            dtype: isWebGPUSupported ? "q4" : "fp32",
            progress_callback: (progress) => {
              if ((progress.status === 'download' || progress.status === 'decode') && progress.total) {
                const percent = Math.round((progress.loaded / progress.total) * 100);
                setModelLoadingProgress(percent);
                setStatus(`Завантаження моделі: ${percent}%`);
              } else if (progress.status === 'ready') {
                setModelLoadingProgress(100);
              }
            }
          });
        }

        let finalPrompt = `Context: User question. Question: ${query}. Answer in Ukrainian briefly:`;

        setStatus(navigator.gpu ? "Обробка (WebGPU прискорення)..." : "Обробка (CPU)...");

        const output = await generator.current(finalPrompt, {
          max_new_tokens: 128,
          temperature: 0.7,
          do_sample: true,
          stream: true, // Enable streaming
          callback_function: (beams) => {
            const decoded = generator.current.tokenizer.decode(beams[0].output_token_ids, { skip_special_tokens: true });
            const content = decoded.replace(finalPrompt, "").trim();
            setStreamingText(content);
          }
        });
        setResponse(output[0].generated_text.replace(finalPrompt, "").trim() || "Не вдалося згенерувати відповідь.");

      } else if (aiMode === "gemini") {
        if (!personalApiKey) {
          setResponse("Будь ласка, введіть ваш API-ключ Gemini (кнопка 🔑 поруч з вибором режимів).");
          return;
        }
        
        setStatus("З'єднання з Google Gemini...");
        try {
          const genAI = new GoogleGenerativeAI(personalApiKey);
          const model = genAI.getGenerativeModel({ model: geminiModel });
          const lengthInstruction = responseLength === "detailed" ? "Надай дуже розгорнуту та детальну відповідь." : "Відповідай максимально коротко.";
          const promptWithLength = `${lengthInstruction} Запитання: ${query}`;
          const result = await model.generateContent(promptWithLength);
          const botText = result.response.text();
          
          setResponse(botText || "Gemini не повернув тексту.");
        } catch (e) {
          setResponse(`Помилка Gemini: ${e.message}`);
        }

      } else if (aiMode === "openai" || aiMode === "groq") {
        const isOAI = aiMode === "openai";
        const key = isOAI ? openaiApiKey : groqApiKey;
        const endpoint = isOAI ? "https://api.openai.com/v1/chat/completions" : "https://api.groq.com/openai/v1/chat/completions";
        const modelName = isOAI ? "gpt-4o-mini" : "llama-3.3-70b-versatile";

        if (!key) { setResponse(`Введіть API-ключ ${isOAI ? 'OpenAI' : 'Groq'}.`); setLoading(false); return; }
        setStatus(`З'єднання з ${isOAI ? 'OpenAI' : 'Groq'}...`);

        try {
          const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${key}` },
            body: JSON.stringify({
              model: modelName,
              messages: [
                { role: "system", content: responseLength === "detailed" ? "Ти відповідаєш максимально докладно." : "Ти відповідаєш максимально стисло." },
                { role: "user", content: query }
              ],
              temperature: 0.7
            })
          });
          if (!res.ok) throw new Error("API request failed");
          const data = await res.json();
          setResponse(data.choices[0]?.message?.content || "Помилка відповіді.");
        } catch (e) {
          setResponse(`Помилка: ${e.message}`);
        }
      }
    } catch (err) {
      console.error("AI Error:", err);
      setResponse(`Сталася помилка в режимі ${aiMode}. Можливо, перевищено ліміт запитів або немає підключення. Деталі: ${err.message}`);
    } finally {
      setLoading(false);
      setStatus("");
    }
  };

  return (
    <AihelpDiv>
      <AihelpTitle $isDarkMode={isDarkMode}>Допомога ШІ</AihelpTitle>

      <ModeSelector $isDarkMode={isDarkMode}>
        <label>
          <input
            type="radio"
            value="offline"
            checked={aiMode === "offline"}
            onChange={(e) => setAiMode(e.target.value)}
            disabled={loading}
          />
          Офлайн (локально)
        </label>
        <label>
          <input
            type="radio"
            value="groq"
            checked={aiMode === "groq"}
            onChange={(e) => setAiMode(e.target.value)}
            disabled={loading}
          />
          Groq (Free & Fast)
        </label>
        <label>
          <input
            type="radio"
            value="openai"
            checked={aiMode === "openai"}
            onChange={(e) => setAiMode(e.target.value)}
            disabled={loading}
          />
          OpenAI (GPT-4o)
        </label>
        <label>
          <input
            type="radio"
            value="gemini"
            checked={aiMode === "gemini"}
            onChange={(e) => setAiMode(e.target.value)}
            disabled={loading}
          />
          Gemini (Мій ключ)
        </label>
        <button 
          onClick={() => setShowKeyInput(!showKeyInput)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}
          title="Налаштування ключа"
        >
          🔑
        </button>
      </ModeSelector>

      <AnimatePresence>
      {showKeyInput && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          style={{
            width: '100%',
            maxWidth: '500px',
            padding: '15px',
            background: isDarkMode ? 'rgba(255,255,255,0.05)' : '#fff9e6',
            borderRadius: '8px',
            border: '1px solid orange',
            color: isDarkMode ? 'white' : 'black',
            overflow: 'hidden'
          }}
        >
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', fontSize: '11px' }}>Google Gemini Key:</label>
            <input
              type="password"
              value={personalApiKey}
              onChange={(e) => saveKeys("gemini", e.target.value)}
              style={{ width: '100%', padding: '6px' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', fontSize: '11px' }}>OpenAI API Key:</label>
            <input
              type="password"
              value={openaiApiKey}
              onChange={(e) => saveKeys("openai", e.target.value)}
              style={{ width: '100%', padding: '6px' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', fontSize: '11px' }}>
              Groq API Key:
            </label>
            <input
              type="password"
              value={groqApiKey}
              onChange={(e) => saveKeys("groq", e.target.value)}
              style={{
                width: '100%',
                  padding: '6px', borderRadius: '4px',
                border: groqKeyStatus === 'invalid' ? '1px solid red' : '1px solid #ccc'
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
            <label style={{ fontSize: '11px', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
              <input type="radio" name="len" checked={responseLength === 'concise'} onChange={() => setResponseLength('concise')} />
              Стисла відповідь
            </label>
            <label style={{ fontSize: '11px', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
              <input type="radio" name="len" checked={responseLength === 'detailed'} onChange={() => setResponseLength('detailed')} />
              Докладна відповідь
            </label>
          </div>
            <p style={{ fontSize: '9px', opacity: 0.7, marginTop: '5px' }}>
              Ключі зберігаються локально. Якщо вам менше 18 років, попросіть батьків допомогти.
            </p>
        </motion.div>
        )}
      </AnimatePresence>

      {status && (
        <div style={{ fontSize: "12px", color: "orange" }}>
          {status}
          {loading && aiMode === "offline" && modelLoadingProgress > 0 && modelLoadingProgress < 100 && ` (${modelLoadingProgress}%)`}
        </div>
      )}

      <TextArea
        placeholder="Напишіть ваше запитання..."
        $isDarkMode={isDarkMode}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={3}
      />

      <SendButton onClick={handleAsk} disabled={loading || !prompt.trim()}>
        {loading ? "Думаю..." : "Запитати ШІ"}
      </SendButton>

      {(response || streamingText) && (
        <ResponseBox $isDarkMode={isDarkMode}>
          <strong>Відповідь:</strong>
          <p>{streamingText || response}</p>
        </ResponseBox>
      )}
    </AihelpDiv>
  );
};

export default Aihelp;
