import test from 'node:test';
import assert from 'node:assert/strict';
import { sanitizeWeatherCards } from './weatherPersistence.js';

test('sanitizeWeatherCards strips React elements and keeps plain data', () => {
  const icon = { $$typeof: Symbol.for('react.transitional.element'), props: { children: '☀️' } };

  const cards = [{
    id: 'main',
    current: {
      iconSymbol: icon,
      temp: '20°C',
    },
    hourly: [
      { time: '09:00', iconSymbol: icon, tempNum: 18 },
    ],
    daily16: [
      { date: '12.09', iconSymbol: icon },
    ],
  }];

  const sanitized = sanitizeWeatherCards(cards);

  assert.deepEqual(sanitized, [{
    id: 'main',
    current: {
      iconSymbol: '☀️',
      temp: '20°C',
    },
    hourly: [{
      time: '09:00',
      iconSymbol: '☀️',
      tempNum: 18,
    }],
    daily16: [{
      date: '12.09',
      iconSymbol: '☀️',
    }],
  }]);
});
