const isPlainData = (value) => {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return true;
  if (typeof value === 'bigint') return true;
  if (Array.isArray(value)) return value.every(isPlainData);
  if (typeof value === 'object') {
    if (value.$$typeof && typeof value.$$typeof === 'symbol') {
      return false;
    }
    return Object.values(value).every(isPlainData);
  }
  return false;
};

const toSerializableIcon = (icon) => {
  if (typeof icon === 'string') return icon;
  if (icon && typeof icon === 'object') {
    const typeName = icon.type?.name || '';
    if (typeName === 'FaSun') return '☀️';
    if (typeName === 'BsMoonStarsFill') return '🌙';
    if (typeName === 'FaCloudMoon') return '☁️';
    if (typeName === 'FaSmog') return '☁️';
    if (typeName === 'IoRainy' || typeName === 'LiaCloudSunRainSolid' || typeName === 'FaCloudMoonRain' || typeName === 'LiaCloudMoonRainSolid') return '🌧️';
    if (typeName === 'GiSnowing') return '❄️';
    if (typeName === 'IoThunderstorm') return '⛈️';
    if (icon.props?.children) {
      const child = icon.props.children;
      if (typeof child === 'string') return child;
      if (Array.isArray(child)) return child.filter(Boolean).map(String).join('');
    }
  }
  return '☁️';
};

export const sanitizeWeatherCards = (cards) => {
  if (!Array.isArray(cards)) return [];

  return cards.map((card) => {
    const safeCard = { ...card };

    const sanitizeValue = (value) => {
      if (Array.isArray(value)) {
        return value.map((item) => sanitizeValue(item));
      }
      if (value && typeof value === 'object') {
        if (value.$$typeof && typeof value.$$typeof === 'symbol') {
          return toSerializableIcon(value);
        }
        const next = {};
        Object.entries(value).forEach(([key, innerValue]) => {
          next[key] = sanitizeValue(innerValue);
        });
        return next;
      }
      return value;
    };

    Object.entries(safeCard).forEach(([key, value]) => {
      if (key === 'current' || key === 'hourly' || key === 'daily16' || key === 'seasonal') {
        safeCard[key] = sanitizeValue(value);
      }
    });

    if (safeCard.current) {
      safeCard.current.iconSymbol = toSerializableIcon(safeCard.current.iconSymbol ?? safeCard.current.iconPlaceholder);
      safeCard.current.iconPlaceholder = safeCard.current.iconPlaceholder ?? safeCard.current.iconSymbol ?? '☁️';
    }

    if (Array.isArray(safeCard.hourly)) {
      safeCard.hourly = safeCard.hourly.map((hour) => ({
        ...hour,
        iconSymbol: toSerializableIcon(hour.iconSymbol ?? hour.iconPlaceholder),
        iconPlaceholder: hour.iconPlaceholder ?? hour.iconSymbol ?? '☁️',
      }));
    }

    if (Array.isArray(safeCard.daily16)) {
      safeCard.daily16 = safeCard.daily16.map((day) => ({
        ...day,
        iconSymbol: toSerializableIcon(day.iconSymbol ?? day.iconPlaceholder),
        iconPlaceholder: day.iconPlaceholder ?? day.iconSymbol ?? '☁️',
      }));
    }

    if (Array.isArray(safeCard.seasonal)) {
      safeCard.seasonal = safeCard.seasonal.map((item) => ({
        ...item,
      }));
    }

    return safeCard;
  });
};

export const shouldPersistWeatherCards = (cards) => Array.isArray(cards) && cards.every(isPlainData);
