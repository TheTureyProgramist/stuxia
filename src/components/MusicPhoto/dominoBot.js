import axios from 'axios';
import { pipeline } from '@huggingface/transformers';

// 1. ВСТАВ СВІЙ СКОПІЙОВАНИЙ КЛЮЧ СЮДИ:
// Рекомендується використовувати змінні середовища для зберігання API ключів.
// Наприклад, створіть файл .env у корені проекту та додайте:
// REACT_APP_HF_TOKEN="hf_YOUR_LONG_KEY_HERE"
// Потім ви можете отримати його за допомогою process.env.REACT_APP_HF_TOKEN
const HF_TOKEN = process.env.REACT_APP_HF_TOKEN || "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"; // Placeholder for user's token
let localPipe = null; // Кеш для локальної моделі

async function askServerAI(userMessage, trackAuthor, trackCategory, modelId) {
  const response = await axios.post(
    "https://router.huggingface.co/v1/chat/completions",
    {
      model: modelId,
      messages: [
        {
          role: "system",
          content: `Ти — робот Доміно, доброзичливий та розумний помічник на музично-погодному сайті. Твій творець — крутий розробник. Відповідай коротко, з гумором і тільки українською мовою. Контекст: Автор пісні - ${trackAuthor}, категорія - ${trackCategory}.`
        },
        {
          role: "user",
          content: userMessage
        }
      ],
      max_tokens: 150,
      temperature: 0.7
    },
    {
      headers: {
        "Authorization": `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json"
      }
    }
  );
  return response.data.choices[0].message.content;
}

async function askLocalAI(userMessage) {
  // Завантажуємо крихітну модель тільки якщо серверний API підвів
  if (!localPipe) {
    localPipe = await pipeline('text-generation', 'Xenova/Qwen1.5-0.5B-Chat', {
      device: 'cpu' // Примусово CPU для старих процесорів
    });
  }

  const prompt = `<|system|>\nТи робот Доміно.<|endoftext|>\n<|user|>\n${userMessage}<|endoftext|>\n<|assistant|>\n`;
  const out = await localPipe(prompt, { 
    max_new_tokens: 60,
    temperature: 0.7,
    do_sample: true 
  });
  
  return out[0].generated_text.replace(prompt, '').trim();
}

export async function askDomino(userMessage, trackAuthor, trackCategory, modelId = "meta-llama/Llama-3.2-3B-Instruct") {
  try {
    // Спроба 1: Швидкий серверний API
    return await askServerAI(userMessage, trackAuthor, trackCategory, modelId);
  } catch (error) {
    console.warn("⚠️ API помилка (можливо ліміт 429). Перемикаюсь на локальний CPU...", error);
    
    try {
      // Спроба 2: Резервний локальний ШІ
      return await askLocalAI(userMessage);
    } catch (localError) {
      console.error("❌ Локальний ШІ також видав помилку:", localError);
      
      if (error.response && error.response.status === 429) {
        return "Ой, забагато запитів до сервера, а мої локальні шестірні ще змащуються. Спробуй за хвилину!";
      }
      return "Ой, щось мої мізки зовсім заклинило... Спробуй ще раз пізніше!";
    }
  }
}