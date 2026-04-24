// Утиліта для аналізу яскравості картинки та вибору кольору тексту
export const getImageBrightness = async (imageUrl) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      let brightness = 0;
      let centerBrightness = 0;
      let count = 0;
      let centerCount = 0;
      
      // Аналіз яскравості по всій картинці
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // Формула для розрахунку яскравості
        const pixelBrightness = (r * 299 + g * 587 + b * 114) / 1000;
        brightness += pixelBrightness;
        count++;
      }
      
      brightness = brightness / count;
      
      // Аналіз яскравості в центрі картинки (для виявлення заходу сонця)
      const centerWidth = Math.floor(canvas.width * 0.2);
      const centerHeight = Math.floor(canvas.height * 0.2);
      const centerStartX = Math.floor(canvas.width * 0.4);
      const centerStartY = Math.floor(canvas.height * 0.3);
      
      const centerImageData = ctx.getImageData(
        centerStartX, 
        centerStartY, 
        centerWidth, 
        centerHeight
      );
      const centerData = centerImageData.data;
      
      for (let i = 0; i < centerData.length; i += 4) {
        const r = centerData[i];
        const g = centerData[i + 1];
        const b = centerData[i + 2];
        
        const pixelBrightness = (r * 299 + g * 587 + b * 114) / 1000;
        centerBrightness += pixelBrightness;
        centerCount++;
      }
      
      centerBrightness = centerBrightness / centerCount;
      
      // Виявлення синього та помаранчевого (захід)
      const blueRedRatio = getColorRatio(data);
      
      resolve({
        average: brightness,
        center: centerBrightness,
        blueRedRatio,
      });
    };
    img.onerror = () => {
      resolve({ average: 128, center: 128, blueRedRatio: 0.5 });
    };
    img.src = imageUrl;
  });
};

// Вилучення типу кольору для виявлення заходу сонця
const getColorRatio = (data) => {
  let blueTotal = 0;
  let redTotal = 0;
  let orangeTotal = 0;
  
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    blueTotal += b;
    redTotal += r;
    // Помаранчевий = висока значення R та G
    if (r > 150 && g > 100 && b < 100) {
      orangeTotal += 1;
    }
  }
  
  const pixelCount = data.length / 4;
  return {
    blue: blueTotal / pixelCount / 255,
    red: redTotal / pixelCount / 255,
    orange: orangeTotal / pixelCount,
  };
};

// Основна функція для вибору кольору тексту
export const getTextColorForImage = async (imageUrl) => {
  const analysis = await getImageBrightness(imageUrl);
  
  // Якщо це захід сонця або синє небо - білий текст
  if (analysis.blueRedRatio?.blue > 0.4 || analysis.blueRedRatio?.orange > 0.01) {
    return 'white';
  }
  
  // Якщо центр яскравий (сонце) - білий текст
  if (analysis.center > 180) {
    return 'white';
  }
  
  // Загальна яскравість > 150 - чорний текст
  if (analysis.average > 150) {
    return 'black';
  }
  
  // У інших випадках білий текст для видимості на темних фонах
  return 'white';
};
