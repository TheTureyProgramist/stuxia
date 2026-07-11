// Це простий Service Worker, який необхідний для того, щоб браузер 
// розпізнав сайт як PWA (Progressive Web App) і дозволив його встановлювати.
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Порожній обробник fetch є достатнім для виконання вимог PWA щодо встановлення
});
