import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { GoogleGenerativeAI } from "@google/generative-ai";
import localforage from "localforage";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

const BANNED_KEYWORDS = [
  "війна",
  "вибори",
  "депутат",
  "рецепт",
  "порно",
  "казино",
];

const AihelpDiv = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 0 5px;
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`;

const AihelpTitle = styled.div`
  font-size: 14px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  color: ${(props) => (props.$isDarkMode ? "white" : "black")};
  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.$isDarkMode ? '#444' : '#ccc'};
  border-radius: 8px;
  background: ${props => props.$isDarkMode ? '#2c2c2c' : 'white'};
  transition: border-color 0.2s;
  &:focus-within { border-color: orange; }
`;

const TextArea = styled.textarea`
  width: 100%;
  border: none;
  background: transparent;
  padding: 12px;
  border-radius: 8px 8px 0 0;
  color: ${props => props.$isDarkMode ? 'white' : 'black'};
  font-size: 14px;
  outline: none;
  resize: none; /* Заборона ручної зміни розміру */
  overflow-y: auto; /* Дозволити прокрутку, якщо текст перевищує висоту */
  min-height: 50px;
`;

const ChatHistory = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  max-height: 500px;
  overflow-y: auto;
  padding: 10px;
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-thumb { background: orange; border-radius: 10px; }
`;

const Message = styled.div`
  align-self: ${props => props.$isBot ? 'flex-start' : 'flex-end'};
  max-width: 80%;
  background: ${props => props.$isBot 
    ? (props.$isDarkMode ? 'rgba(255,255,255,0.1)' : '#f0f0f0') 
    : 'orange'};
  color: ${props => props.$isBot ? (props.$isDarkMode ? 'white' : 'black') : 'white'};
  padding: 15px;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);

  pre {
    background: rgba(0,0,0,0.2);
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
  }
`;

const CopyButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(0,0,0,0.1);
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 12px;
  padding: 2px 5px;
  border-radius: 4px;
  opacity: 0.6;
  &:hover { opacity: 1; }
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

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px 10px 10px;
  gap: 8px;
  z-index: 5;
`;

const MiniButton = styled.button`
  background: ${props => props.$primary ? '#007bff' : 'none'};
  color: ${props => props.$primary ? 'white' : (props.$isDarkMode ? 'white' : 'black')};
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  &:disabled { opacity: 0.5; cursor: not-allowed; }
  &:hover:not(:disabled) { transform: scale(1.1); }
`;

const FilePreviewContainer = styled.div` // Додано для відображення кількох файлів
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
  flex-wrap: wrap;
`;

const FileThumb = styled.div` // Оновлено для підтримки відео
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.$isDarkMode ? '#333' : '#eee'};
  border-radius: 5px;
  border: 1px solid orange;

  img { width: 100%; height: 100%; object-fit: cover; border-radius: 5px; }
  video { width: 100%; height: 100%; object-fit: cover; border-radius: 5px; }
  span { font-size: 24px; color: orange; } // Для іконки відео
`;

const RemoveFileBtn = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  background: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorBox = styled.div`
  color: #ff4d4d;
  background: rgba(255, 77, 77, 0.1);
  padding: 10px;
  border-radius: 8px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Aihelp = ({ isDarkMode }) => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [personalApiKey, setPersonalApiKey] = useState("");
  const [openaiApiKey, setOpenaiApiKey] = useState("");
  const [groqApiKey, setGroqApiKey] = useState("");
  const [groqKeyStatus, setGroqKeyStatus] = useState("idle");
  const [geminiModel, setGeminiModel] = useState("gemini-2.5-flash");
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [responseLength, setResponseLength] = useState("concise"); // 'concise' або 'detailed'
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [aiMode, setAiMode] = useState("gemini"); 
  const [streamingText, setStreamingText] = useState("");
  // Зберігаємо останній промпт для повторних спроб при помилках
  const lastPromptRef = useRef("");
  const [totalFilesSize, setTotalFilesSize] = useState(0);
  const [error, setError] = useState(null);
  const [isListening, setIsListening] = useState(false);
  
  const objectURLs = useRef([]); // Для відкликання URL.createObjectURL
  const textareaRef = useRef(null);
  const chatEndRef = useRef(null);

  const handleTextChange = (e) => {
    setPrompt(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (streamingText) {
      chatEndRef.current?.scrollIntoView({ behavior: "auto" });
    }
  }, [streamingText]);

  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Ваш браузер не підтримує розпізнавання голосу.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'uk-UA';
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
      setStatus("Слухаю вас...");
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setPrompt(prev => (prev ? prev + " " : "") + transcript);
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => { setIsListening(false); setStatus(""); };

    recognition.start();
  };

  useEffect(() => {
    const loadKey = async () => {
      const gK = await localforage.getItem("gemini_api_key");
      const oK = await localforage.getItem("openai_api_key");
      const grK = await localforage.getItem("groq_api_key");
      const gM = await localforage.getItem("gemini_model");
      const history = await localforage.getItem("ai_help_history");

      if (gK) setPersonalApiKey(gK);
      if (oK) setOpenaiApiKey(oK);
      if (grK) {
        setGroqApiKey(grK);
        verifyGroqKey(grK);
      }
      if (gM) setGeminiModel(gM);
      if (history) setMessages(history);
    };

    loadKey();
  }, []);

  // Очищення Object URLs при розмонтуванні компонента
  useEffect(() => {
    return () => {
      objectURLs.current.forEach(url => URL.revokeObjectURL(url));
      objectURLs.current = [];
    };
  }, []);
  const fileToGenerativePart = async (file) => {
    const base64 = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.readAsDataURL(file);
    });
    return { inlineData: { data: base64, mimeType: file.type } };
  };

  const clearFiles = () => {
    if (objectURLs.current.length > 0) {
      objectURLs.current.forEach(url => URL.revokeObjectURL(url));
    }
    objectURLs.current = [];
    setSelectedFiles([]);
    setTotalFilesSize(0);
  };

  const verifyGroqKey = async (key) => {
    if (!key || key.length < 10) { setGroqKeyStatus("idle"); return; }
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

  const handleFileSelect = (files) => {
    const incomingFiles = Array.from(files);
    const MAX_FILES = 15;
    const MAX_TOTAL_SIZE = 100 * 1024 * 1024; // 100MB

    if (selectedFiles.length + incomingFiles.length > MAX_FILES) {
      alert(`Ви можете прикріпити максимум ${MAX_FILES} файлів.`);
      return;
    }

    const currentTotalSize = selectedFiles.reduce((acc, f) => acc + f.file.size, 0);
    const incomingTotalSize = incomingFiles.reduce((acc, f) => acc + f.size, 0);

    if (currentTotalSize + incomingTotalSize > MAX_TOTAL_SIZE) {
      alert("Загальний розмір вибраних файлів перевищує 100МБ.");
      return;
    }

    const newFilesData = incomingFiles.map(file => {
      const url = URL.createObjectURL(file);
      objectURLs.current.push(url); // Додаємо URL до рефу для подальшого очищення
      return { file: file, objectURL: url };
    });
    setTotalFilesSize(currentTotalSize + incomingTotalSize);
    setSelectedFiles(prev => [...prev, ...newFilesData]);
  };

  const removeFile = (index) => {
    setSelectedFiles(prev => {
      const fileToRemove = prev[index];
      if (fileToRemove && fileToRemove.objectURL) {
        URL.revokeObjectURL(fileToRemove.objectURL); // Відкликаємо URL конкретного файлу
        setTotalFilesSize(curr => Math.max(0, curr - fileToRemove.file.size));
        objectURLs.current = objectURLs.current.filter(url => url !== fileToRemove.objectURL);
      }
      return prev.filter((_, i) => i !== index);
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Скопійовано!");
  };

  const clearHistory = async () => {
    if(window.confirm("Очистити історію чату?")) {
      objectURLs.current.forEach(url => URL.revokeObjectURL(url)); // Відкликаємо всі URL
      objectURLs.current = [];
      setMessages([]);
      setTotalFilesSize(0);
      await localforage.removeItem("ai_help_history");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAsk();
    }
  };

  const handleAsk = async (retryText = null) => {
    const originalPrompt = retryText !== null ? retryText : prompt.trim();
    if ((!originalPrompt && selectedFiles.length === 0) || loading) return;
    
    lastPromptRef.current = originalPrompt;
    const lowerQuery = originalPrompt.toLowerCase();
    if (BANNED_KEYWORDS.some((word) => lowerQuery.includes(word))) {
      setMessages(prev => [...prev, { text: "Запит містить заборонені слова.", isBot: true }]);
      return; // Вихід, якщо є заборонені слова
    }

    setError(null);
    setLoading(true);
    setStreamingText("");
    
    const newUserMessage = { text: originalPrompt, isBot: false };
    setMessages(prev => [...prev, newUserMessage]);
    setPrompt("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "0px";
      textareaRef.current.style.height = "auto";
    }

    try {
      if (aiMode === "gemini") {
        if (!personalApiKey) {
          setMessages(prev => [...prev, { text: "Введіть API-ключ Gemini.", isBot: true }]);
          setLoading(false); // Зупиняємо завантаження
          return;
        }
        
        setStatus("З'єднання з Google Gemini...");
        const genAI = new GoogleGenerativeAI(personalApiKey);
        const model = genAI.getGenerativeModel({ model: geminiModel });
        
        const lengthInstr = responseLength === "detailed" ? "Докладно." : "Коротко.";
        const fullPrompt = `${lengthInstr} Запитання: ${originalPrompt}`;

        let parts = [{ text: fullPrompt }]; // Gemini API очікує об'єкт { text: ... }
        for (const fileObj of selectedFiles) {
          parts.push(await fileToGenerativePart(fileObj.file));
        }

        const result = await model.generateContentStream(parts);
        let accumulatedText = "";
        
        for await (const chunk of result.stream) {
          const chunkText = chunk.text();
          accumulatedText += chunkText;
          setStreamingText(accumulatedText);
        }
        
        const finalBotMessage = { text: accumulatedText, isBot: true };
        setMessages(prev => {
          const updated = [...prev, finalBotMessage];
          localforage.setItem("ai_help_history", updated.slice(-25));
          return updated;
        });
        setStreamingText("");
        clearFiles();

      } else if (aiMode === "openai" || aiMode === "groq") {
        // Оновлена логіка для OpenAI/Groq з використанням стрімінгу та контексту
        const isOAI = aiMode === "openai";
        const key = isOAI ? openaiApiKey : groqApiKey;
        const endpoint = isOAI ? "https://api.openai.com/v1/chat/completions" : "https://api.groq.com/openai/v1/chat/completions";
        const modelName = isOAI ? "gpt-4o-mini" : "llama-3.3-70b-versatile";

        if (!key) {
          setMessages(prev => [...prev, { text: `Введіть API-ключ ${isOAI ? 'OpenAI' : 'Groq'}.`, isBot: true }]);
          setLoading(false);
          return;
        }
        setStatus(`З'єднання з ${isOAI ? 'OpenAI' : 'Groq'}...`);

        // Формуємо актуальний контекст, включаючи нове повідомлення користувача
        const conversation = [...messages.slice(-24), newUserMessage].map(m => ({
          role: m.isBot ? "assistant" : "user",
          content: m.text
        }));

        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Authorization": `Bearer ${key}` },
          body: JSON.stringify({
              model: modelName,
              messages: [
                { role: "system", content: responseLength === "detailed" ? "Ти відповідаєш максимально докладно." : "Ти відповідаєш максимально стисло." },
                ...conversation
              ],
              stream: true,
              temperature: 0.7
            })
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error?.message || "API request failed");
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let accumulatedText = "";
        let buffer = ""; // Буфер для неповних SSE-рядків

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true }); // Додаємо новий фрагмент до буфера

            // Обробляємо всі повні рядки в буфері
            let newlineIndex;
            while ((newlineIndex = buffer.indexOf('\n')) !== -1) {
              const line = buffer.substring(0, newlineIndex).trim();
              buffer = buffer.substring(newlineIndex + 1); // Видаляємо оброблений рядок з буфера

              if (line === "data: [DONE]") {
                buffer = ""; // Очищаємо залишок, щоб не намагатися парсити [DONE] поза циклом
                break;
              }

              if (line.startsWith("data: ")) {
                try {
                  const data = JSON.parse(line.substring(6));
                  const content = data.choices[0]?.delta?.content || "";
                  accumulatedText += content;
                  setStreamingText(accumulatedText);
                } catch (e) { /* Неповний чанк JSON */ }
              }
            }
          }
        } finally {
          // Гарантуємо скасування рідера, навіть якщо виникла помилка
          reader.cancel().catch(e => console.error("Failed to cancel reader:", e));
        }

        // Після завершення стрімінгу або помилки, обробляємо залишок буфера, якщо він є
        const finalLine = buffer.trim();
        if (finalLine.startsWith("data: ") && finalLine !== "data: [DONE]") {
          try {
            const data = JSON.parse(finalLine.substring(6));
            const content = data.choices[0]?.delta?.content || "";
            accumulatedText += content;
            setStreamingText(accumulatedText);
          } catch (e) { /* Помилка формату */ }
        }

        // Оновлюємо повідомлення лише після повного завершення стрімінгу
        if (accumulatedText) {
          const finalBotMessage = { text: accumulatedText, isBot: true };
          setMessages(prev => {
            const updated = [...prev, finalBotMessage];
            localforage.setItem("ai_help_history", updated.slice(-25));
            return updated;
          });
        setStreamingText("");
        } else {
          // Якщо стрімінг завершився, але тексту немає (наприклад, порожня відповідь або помилка)
          setMessages(prev => {
            const updated = [...prev, { text: "Не вдалося отримати відповідь від AI.", isBot: true }];
            localforage.setItem("ai_help_history", updated.slice(-25));
            return updated;
          });
          setStreamingText("");
        }
        clearFiles(); // Очищаємо файли після обробки
        }
    } catch (err) {
      setStreamingText("");
      setError(err.message); // Використовуємо стейт error для відображення помилок
      clearFiles();
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

      <ChatHistory> {/* Відображення історії чату */}
        {messages.map((m, i) => (
          <Message key={i} $isBot={m.isBot} $isDarkMode={isDarkMode}>
            {m.isBot && <CopyButton onClick={() => copyToClipboard(m.text)}>📋</CopyButton>} {/* Кнопка копіювання */}
            <ReactMarkdown>{m.text}</ReactMarkdown>
          </Message>
        ))}
        {streamingText && (
          <Message $isBot={true} $isDarkMode={isDarkMode}>
            <ReactMarkdown>{streamingText}</ReactMarkdown>
          </Message>
        )}
        {error && ( // Відображення помилок
          <ErrorBox>
            ⚠️ Помилка: {error}
            <MiniButton $primary onClick={() => handleAsk(lastPromptRef.current)}>Спробувати ще раз</MiniButton>
          </ErrorBox>
        )}
        <div ref={chatEndRef} />
      </ChatHistory>

      {status && (
        <div style={{ fontSize: "12px", color: "orange" }}>
          {status}
        </div>
      )}

      <FilePreviewContainer> 
        {selectedFiles.length > 0 && (
          <div style={{ width: '100%', fontSize: '10px', color: 'orange', marginBottom: '5px' }}>
            Загальний розмір: {(totalFilesSize / (1024 * 1024)).toFixed(2)} MB / 100 MB
          </div>
        )}
        {selectedFiles.map((f, i) => (
          <FileThumb key={i}>
            {f.file.type.startsWith('video/') ? (
              <video src={f.objectURL} />
            ) : (
              <img src={f.objectURL} alt="preview" />
            )}
            <RemoveFileBtn onClick={() => removeFile(i)}>✕</RemoveFileBtn>
          </FileThumb>
        ))}
      </FilePreviewContainer>

      <InputContainer $isDarkMode={isDarkMode}
           onDragOver={(e) => e.preventDefault()}
           onDrop={(e) => { e.preventDefault(); handleFileSelect(e.dataTransfer.files); }}>
        <TextArea
          ref={textareaRef}
          placeholder="Запитайте щось... (Enter - відправити, Shift+Enter - новий рядок)"
          value={prompt}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
          rows={1}
        />
        <ActionButtons>
          {aiMode === 'gemini' && (
            <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <span title="Додати фото (Drag and Drop)" style={{ fontSize: '28px' }}>+</span>
              <input type="file" accept="image/*" multiple hidden onChange={(e) => handleFileSelect(e.target.files)} />
            </label>
          )}
          <MiniButton onClick={clearHistory} title="Очистити чат">🗑️</MiniButton>
          <MiniButton 
            $primary 
            disabled={loading || (!prompt.trim() && selectedFiles.length === 0)} 
            onClick={handleAsk}
            title="Запитати"
          >
            {loading ? "..." : "➤"}
          </MiniButton>
          <MiniButton 
            onClick={handleVoiceInput}
            $isDarkMode={isDarkMode}
            style={{ color: isListening ? 'red' : (isDarkMode ? 'white' : 'black') }}
            title="Голосовий ввід"
          >
            {isListening ? "🛑" : "🎤"}
          </MiniButton>
        </ActionButtons>
      </InputContainer>
    </AihelpDiv>
  );
};

export default Aihelp;
