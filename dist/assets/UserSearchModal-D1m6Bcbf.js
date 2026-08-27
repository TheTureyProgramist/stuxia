import{o as e,r as t,t as n}from"./rolldown-runtime-C0FnF6B9.js";import{a as r,i,n as a,o,t as s}from"./jsx-runtime-CJi9uaNB.js";import{t as c}from"./localforage-CgxtEHGc.js";import{t as l}from"./dist-DUs_8A6T.js";import{t as u}from"./iconBase-xloHpk6U.js";import{t as d}from"./fog--GUn8Hpo.js";import{t as f}from"./texts-Cc76D5gW.js";import{t as p}from"./songAiKnowledge-CIkN1ZwA.js";import{t as m}from"./ri-0LgUC5Po.js";var h=n((e=>{var t=o();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var r=typeof Object.is==`function`?Object.is:n,i=t.useSyncExternalStore,a=t.useRef,s=t.useEffect,c=t.useMemo,l=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,o,u){var d=a(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=c(function(){function e(e){if(!i){if(i=!0,a=e,e=o(e),u!==void 0&&f.hasValue){var t=f.value;if(u(t,e))return s=t}return s=e}if(t=s,r(a,e))return t;var n=o(e);return u!==void 0&&u(t,n)?(a=e,t):(a=e,s=n)}var i=!1,a,s,c=n===void 0?null:n;return[function(){return e(t())},c===null?void 0:function(){return e(c())}]},[t,n,o,u]);var p=i(e,d[0],d[1]);return s(function(){f.hasValue=!0,f.value=p},[p]),l(p),p}})),g=n(((e,t)=>{t.exports=h()})),_=e(o(),1),v=g();function y(e){e()}function b(){let e=null,t=null;return{clear(){e=null,t=null},notify(){y(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){let t=[],n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(n){let r=!0,i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var x={notify(){},get:()=>[]};function S(e,t){let n,r=x,i=0,a=!1;function o(e){u();let t=r.subscribe(e),n=!1;return()=>{n||(n=!0,t(),d())}}function s(){r.notify()}function c(){m.onStateChange&&m.onStateChange()}function l(){return a}function u(){i++,n||(n=t?t.addNestedSub(c):e.subscribe(c),r=b())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=x)}function f(){a||(a=!0,u())}function p(){a&&(a=!1,d())}let m={addNestedSub:o,notifyNestedSubs:s,handleChangeWrapper:c,isSubscribed:l,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>r};return m}var C=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,w=typeof navigator<`u`&&navigator.product===`ReactNative`,T=C||w?_.useLayoutEffect:_.useEffect,E=Symbol.for(`react-redux-context`),D=typeof globalThis<`u`?globalThis:{};function O(){if(!_.createContext)return{};let e=D[E]??=new Map,t=e.get(_.createContext);return t||(t=_.createContext(null),e.set(_.createContext,t)),t}var k=O();function A(e){let{children:t,context:n,serverState:r,store:i}=e,a=_.useMemo(()=>{let e=S(i);return{store:i,subscription:e,getServerState:r?()=>r:void 0}},[i,r]),o=_.useMemo(()=>i.getState(),[i]);T(()=>{let{subscription:e}=a;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),o!==i.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}},[a,o]);let s=n||k;return _.createElement(s.Provider,{value:a},t)}var j=A;function M(e=k){return function(){return _.useContext(e)}}var N=M();function P(e=k){let t=e===k?N:M(e),n=()=>{let{store:e}=t();return e};return Object.assign(n,{withTypes:()=>n}),n}var F=P();function I(e=k){let t=e===k?F:P(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var L=I(),R=(e,t)=>e===t;function z(e=k){let t=e===k?N:M(e),n=(e,n={})=>{let{equalityFn:r=R}=typeof n==`function`?{equalityFn:n}:n,{store:i,subscription:a,getServerState:o}=t();_.useRef(!0);let s=_.useCallback({[e.name](t){return e(t)}}[e.name],[e]),c=(0,v.useSyncExternalStoreWithSelector)(a.addNestedSub,i.getState,o||i.getState,s,r);return _.useDebugValue(c),c};return Object.assign(n,{withTypes:()=>n}),n}var B=z(),V=e(c()),ee=JSON.parse(`[{"q":"Останнє оновлення","a":"Друзі, Стихія офіційно доступна! \\n  Погода, музика і безпечні новини, та купа інструментів, чекають на вас!","image":null},{"q":"Угода користувача","a":"Ця Угода є юридично обов'язковим договором між Користувачем та Адміністрацією платформи. Натискаючи кнопку «Прийняти» під час реєстрації або використовуючи будь-яку частину сервісу, ви підтверджуєте свою повну згоду з усіма пунктами.\\n1. Доступ до базових функцій надається особам, що досягли 13-річного віку.\\n2. Використання Штучного Інтелекту (ШІ)\\n\\n2.1. Сервіс використовує технології генеративного ШІ для надання допомоги та створення контенту.\\n2.2. ШІ може генерувати фактично невірну або суб'єктивну інформацію. Адміністрація не несе відповідальності за поради ШІ.\\n2.3. Користувачеві заборонено використовувати ШІ для створення шкідливого коду, пропаганди ненависті, дискримінації або порушення законів України.\\n2.4. Ліміт безкоштовних повідомлень залежить від ваших витрат на АПІ ключ, і може бути змінений розробниками ШІ.\\n\\n3.1. Статус контенту: Платформа «Стихія» надає технічний інструментарій для відтворення аудіо- та відеоконтенту. Адміністрація платформи не є власником розміщених сторонніх медіафайлів (Виняток: матеріали з маркуванням «TheTurkeyStudio») та відображає їх виключно в некомерційних, інформаційних та ознайомчих цілях для популяризації творчості авторів. Усі права на торговельні марки, персонажів та аудіовізуальні твори належать їхнім законним правовласникам.\\n3.2. Користувач отримує права на власну оригінальну частину роботи, проте використання чужої інтелектуальної власності регулюється правилами її правовласників. Некомерційне використання (демонстрація у віртуальному просторі) дозволяється без обмежень за умови обов'язкового посилання на джерело «Стихія». Будь-яке комерційне використання (зокрема продаж у роздрукованому чи цифровому вигляді) матеріалів, які містять елементи чужої інтелектуальної власності або персонажів, суворо заборонено та є особистою відповідальністю користувача. При некомерційному роздрукуванні матеріалів у кутку зображення має бути збережено ім'я автора, вказане на Сайті.\\n3.3. Політика видалення контенту (DMCA / Надіслати скаргу): Сторонні матеріали розміщуються з метою ознайомлення та стимулювання переходу користувачів на офіційні ресурси авторів. Якщо ви є законним правовласником (або його офіційним представником) контенту, розміщеного на Сайті, і заперечуєте проти його доступності, будь ласка, надішліть запит на електронну пошту: theturkeystudio@gmail.com.\\n\\n4. Конфіденційність та Дані\\n\\n4.1. Ми збираємо лише мінімально необхідний набір даних для функціонування акаунту (наприклад, псевдонім). Ми не збираємо реальні імена, дати народження, точні IP-адреси або дані для трекінгу.\\n\\n4.2 В якості доказів, що ваші данні в безпеці, ми надаємо посилання на Github репозиторій, де ви самі або через ШІ проаналізуєте код: https://github.com/TheTurkeyProgramist/stuxia \\n\\n5. Правила поведінки (Анти-спам)\\nЗабороняється:\\nВикористання ботів для накрутки прослуховувань треків.\\nСпроби злому системи або несанціонованого доступу до чужих акаунтів.\\n\\n6. Відмова від гарантій\\n\\nСервіс надається за принципом (as is). Ми не гарантуємо безперебійну роботу сайту у разі технічних збоїв на стороні провайдерів або форс-мажорних обставин.\\n\\n7.Адміністрація має право змінювати цю Угоду. Про суттєві зміни ми попередимо користувачів за 3 тижні до їх вступу в силу шляхом розміщення повідомлення внизу цієї сторінки.\\n\\n8. Майбутні зміни:\\nЦя Угода діє в поточній редакції до моменту публікування оновленої версії на цій сторінці.\\n9. Я сам малював :) Вибачте Ніцерона не дуже намалював. І 2 орфорграфічні помилки у слові бундюча.","image":"preview"},{"q":"Про клімат без цензури","a":"Друзі, я не хочу спілкуватись про цю тему. Проте важливо поговорити про це.\\n          Отже погода, є частиною політики, нечасто, але так.\\n          В Америці є станція для вивчення погоди(HARP), яка пливає на магнітне поле і погоду по всьому світу. \\n          На жаль, розвінчати чи підтвердити данну інформацію неможливо, оскільки джерело конспірологічне, але є дуже переконливі докази. \\n     Якщо є докази, що конспірологія не бреше, присилайте на пошту. Для метеоролога це дуже важливо. \\n          Такі досліди становлять загрозу для планети, і життя людей. Словами це не зупинити. Тому прошу, робіть все що можете, щоб зупинити ці досліди.\\n          Прикро що новини, постійно говорять про політику та показують рекламу. Але про погоду рідко, а тим паче про те, що треба це зупинити.","image":"texts"},{"q":"Співпраця та поради. Можливості сайту.","a":"Так! Я можу підказати через email, як отримати доступ до API сайтів та плагінів, які я використовую. А ось можливості сайту: Погода, музика, фан-арти, ШІ і т.д.","image":"might"},{"q":"Історія власників сайту...Не реальних: Кейт, Доміно, Марти...","a":"Це секрет поки.","image":"might"},{"q":"🌤 Погода: покроковий посібник","a":"Крок 1. Введіть назву міста в пошуковий рядок і натисніть Enter або натисніть на кнопку пошуку.\\nКрок 2. Оберіть потрібне місто зі списку підказок (якщо з'явиться кілька варіантів).\\nКрок 3. Ви побачите три блоки прогнозу:\\n  • Зараз — поточна температура, відчуття, вологість, тиск, вітер, УФ-індекс.\\n  • 24-годинний (на 7 днів) — кожна доба окремо, розбита по годинах.\\n  • 16-денний — загальний прогноз на два тижні вперед.\\nКрок 4. Зверніть увагу на кольорові мітки:\\n  🔴 Червоний (!): умови перевищують норму прямо ЗАРАЗ (темп. >30°C або <-30°C, вітер >10 м/с, УФ >7).\\n  🟠 Оранжевий (!): небезпечні умови очікуються хоча б в один із найближчих 3 днів.\\nКрок 5. Натисніть на картку дня, щоб розгорнути погодинний прогноз.\\nКрок 6. Щоб додати кілька міст одночасно — введіть наступне місто в той самий рядок після першого.\\nПорада: якщо прогноз не оновлюється, натисніть кнопку оновлення або перезавантажте сторінку.","image":"hills"},{"q":"🌤 Погода: часті питання","a":"Чому показує не те місто? — Введіть повну назву міста або додайте країну через кому, наприклад: «Київ, Україна».\\n\\nЧому немає прогнозу? — Можливо, API-ліміт вичерпано. Зачекайте кілька хвилин і спробуйте знову.\\n\\nЩо означають значки поруч із містом? — Червоний або оранжевий знак оклику попереджає про небезпечні погодні умови (детальніше у розділі «Погода: навчання»).\\n\\nЯк прибрати місто зі списку? — Натисніть хрестик (✕) на картці міста.\\n\\nЧому УФ-індекс = 0 вночі? — Це нормально: УФ-випромінювання відсутнє без сонця.\\n\\nЯк дізнатись вологість ґрунту або атмосферний тиск? — Ці дані відображаються у розгорнутому вигляді картки «Зараз».","image":"hills"},{"q":"🌤 Погода: додаткові відомості","a":"Крім, назви міста ви можете зробити пошук по координатам.\\n Замітки: під логотипом є поле з датою, назвою(до 12символів) і кнопкою додати.\\nЯкщо ви не ввели дату(лише назву), то ви моджете встановити дату, натиснувши пару разів на дату у 16денному прогнозі.\\nДата підсвічується синім кольором у 16денному прогнозі. Для того щоб прибрати натисніть на дату і назву події в фіолетовому полі, під об'єктом встановленням дати.","image":"hills"},{"q":"Бундючий пошук","a":"Тут ми розміщуємо 200-250 цікавих, корисних сайтів та ігор... А також статті з Вікіпедії. При натиску на зірочку, ви можете перейти на сайт не вводячі символів.","image":null},{"q":"Відсутність реклами на музику","a":"Це трохи дивно, але логічно. Ми поважаємо авторське право. Заробляти на чужих піснях — це неправильно.","image":"three"},{"q":"📰 Новини: покроковий посібник","a":"Крок 1. Перейдіть у розділ «Новини».\\nКрок 2. За замовчуванням завантажуються вбудовані безпечні RSS-джерела.\\nКрок 3. Щоб додати власне джерело:\\n  • Натисніть кнопку «+ Додати джерело».\\n  • Вставте посилання на RSS-стрічку сайту (закінчується на .xml, .rss або /feed).\\n  • Натисніть «Додати» — новини завантажаться автоматично.\\nКрок 4. У налаштуваннях новин можна:\\n  • Увімкнути автоскрол при відкритті сайту.\\n  • Приховати заголовок або опис новини.\\nКрок 5. Мітка «НОВЕ» — з'являється на 1 хвилину після того, як ви прокрутили до новини.\\nКрок 6. Для власників Google AI Key — доступна функція «ШІ-виклад»: чат-бот обговорює будь-яку новину. 1 новина = 10 останніх повідомлень. Повне очищення чату через 24 год без активності.\\nФільтрація: Новини з темами насильства, політики, 18+, криміналу, релігії (крім святкових привітань у погодних картках), казино, корупції, сект і теактів — не відображаються автоматично.","image":null},{"q":"📰 Новини: часті питання","a":"Чому деякі RSS не працюють? — Деякі сайти мають «биті» або порожні стрічки. Перевірте посилання через W3C Feed Validator або відкрийте його у браузері.\\n\\nЧи можна додати Facebook чи Twitter? — Ні. Ці платформи не мають RSS. Можна скористатись сторонніми конверторами (наприклад, RSS.app), але вони зазвичай платні.\\n\\nЧому новина не оновлюється? — RSS-стрічки оновлюються з боку самого сайту-джерела. Якщо джерело давно не публікувало — новин не буде.\\n\\nЯк поскаржитись на новину, що проскочила фільтр? — Надішліть скаргу на email: theturkeystudio@gmail.com з посиланням на новину.\\n\\nРекомендовані RSS-джерела:\\n• ScienceDaily: https://www.sciencedaily.com/rss/top/science.xml\\n• NASA: https://www.nasa.gov/rss/dyn/breaking_news.rss\\n• Суспільне: https://suspilne.media/feed/news/rss-uk.xml\\n• BBC World: https://feeds.bbci.co.uk/news/world/rss.xml\\n• TechCrunch: https://techcrunch.com/feed/\\n• The Verge: https://www.theverge.com/rss/index.xml\\n• Укрінформ: https://www.ukrinform.ua/rss\\n• IGN (ігри): https://feeds.feedburner.com/ign/news\\n• TED Talks: https://feeds.feedburner.com/TEDTalks_video","image":null},{"q":"Навчання по управлінню новинами","a":"У Стихії в розділі новини, ви можете додавати власні новинні сайти: RSS-стрічку. \\n      А у налаштуваннях, ви можете налаштувати автоскрол новин при відкритті сайту, і прибрати заголовок та опис новини\\nПримітка: Новини з елементами: війни, політики, 18+, порно, сексу, еротики, криміналу, суду, затримання, казино, корупції, релігії(виняток привітання зі святом, у погодних картках), таємних товариств(конспірологія або теорії змови), теракту, секти. Не відображаються. У разі якщо сайт показав вище перечислений елемент, ви можете(навіть мусите) надіслати скаргу на email! Ми хочемо щоб користувачі Стихії могли бачити к-ка погодних місць одночасно, ностальгувати, слухати музику без лімітів і реклами, а також щоб новини(більшість з яких погані) не псували вам день. \\nПримітка: Якість RSS: Деякі сайти мають \\"биті\\" або порожні RSS-стрічки. Якщо ви спробуєте додати таку, вам видасться помилка або нічого не покаже.\\nДля перевірки необхідно використати безкоштовні онлайн-валідатори, як-от W3C Feed Validation Service або просто відкрити посилання в браузері.\\nОбмеження, які важливо враховувати:\\nRSS-формат: Якщо сайт просто \\"новинний\\", але не має RSS (наприклад, Facebook або Twitter), ви не зможете його додати. Йому потрібно буде шукати спеціальні сервіси, що конвертують сторінки в RSS (наприклад, RSS.app), але це зазвичай платні послуги.\\nМітка Нове: Видима 1хв після скролу до новини.\\nДля тих хто має Google АІ Key, є функція ШІ виклад, чат-бот в плані новини, 1новина=10останніх повідомлень, повне очищення через 24год відсутності питань.\\n\\nНаука та технології:\\nScienceDaily (Top News): https://www.sciencedaily.com/rss/top/science.xml\\nNature (Research Highlights): https://www.nature.com/nature.rss\\nWired (Technology): https://www.wired.com/feed/category/science/feed/\\nTechCrunch: https://techcrunch.com/feed/\\nNASA (Breaking News): https://www.nasa.gov/rss/dyn/breaking_news.rss\\nThe Verge: https://www.theverge.com/rss/index.xml\\n\\nСвітові новини та аналітика:\\nBBC News (World): https://feeds.bbci.co.uk/news/world/rss.xml\\nReuters (Top News): https://feeds.reuters.com/reuters/topNews\\nAl Jazeera (English): https://www.aljazeera.com/xml/rss/all.xml\\nThe Economist (World): https://www.economist.com/world/rss.xml\\n\\nУкраїна (Українською):\\nУкраїнська правда: https://www.pravda.com.ua/rss/\\nNV.ua: https://nv.ua/rss/all.xml\\nСуспільне Новини: https://suspilne.media/feed/news/rss-uk.xml\\nУкрінформ: https://www.ukrinform.ua/rss\\n\\nБізнес та Економіка:\\nBloomberg (Technology): https://feeds.bloomberg.com/technology/news.rss\\nHarvard Business Review: https://hbr.org/rss/topics/leadership\\n\\nРозваги, Культура та Інше:\\nIGN (Games): https://feeds.feedburner.com/ign/news\\nNational Geographic: https://feeds.feedburner.com/ng/science\\nTED Talks: https://feeds.feedburner.com/TEDTalks_video\\nLifehacker: https://lifehacker.com/rss\\n\\nЯкщо ви помітили, що якась новина не оновлюється або посилання не працює — будь ласка, повідомте нам. Ми постійно оновлюємо список джерел.\\nІще дещо для соцмереж і т.д:\\n1. Telegram (Найпростіше для RSS)\\nRSSHub: Готовий публічний сервіс, який перетворює майже будь-що на RSS. Для Telegram-каналу достатньо посилання:\\n[https://rsshub.app/telegram/channel/ім_я_каналу](https://rsshub.app/telegram/channel/ім_я_каналу)\\nTGStat / Telemetr RSS: Деякі агрегатори надають готові RSS-стрічки публічних каналів.\\nTelegram Bot API (JS Wrapper): Створити безкоштовного бота, додати його в канал (або читати публічний канал через getChatHistory) і пересилати пости у свій React-додаток через REST API.\\n2. YouTube\\nУ YouTube є вбудовані безкоштовні RSS-стрічки для кожного каналу, про які мало хто знає. Всі відео та шортси каналу можна отримувати без жодних ключі API:\\nЗа ID каналу:\\n[https://www.youtube.com/feeds/videos.xml?channel_id=UC](https://www.youtube.com/feeds/videos.xml?channel_id=UC)...\\nЗа назвою каналу (через RSSHub):\\n[https://rsshub.app/youtube/user/ім_я_користувача](https://rsshub.app/youtube/user/ім_я_користувача)\\n\\n3. Facebook, Instagram, TikTok та Hive\\nЦі платформи найжорсткіше блокують прямий доступ. Щоб читати блогерів безкоштовно:\\nRSSHub (Universal Parser): Головний порятунок для фронтендера. Він має готові маршрути для TikTok, Instagram та Facebook:\\n[https://rsshub.app/tiktok/user/@username](https://rsshub.app/tiktok/user/@username)\\n[https://rsshub.app/instagram/user/username](https://rsshub.app/instagram/user/username)\\nRSS.app / Feed43: Безкоштовні веб-сервіси, які парсять HTML-сторінку блогера й видають вам готовий RSS XML/JSON (на безкоштовних тарифах є ліміти на 3-5 джерел, але для декількох затишних блогерів цього вистачає).\\nPuppeteer / Cheerio (Власний micro-scraper): Якщо задеплоїти невеличку безкоштовну Node.js функцію на Vercel чи Render, вона може раз на день заходити на сторінку та зчитувати останні пости.","image":null},{"q":"🤖 ШІ-Допомога: покроковий посібник","a":"Крок 1. Відкрийте розділ «Допомога ШІ» у меню.\\nКрок 2. Оберіть провайдера ШІ:\\n  • Gemini (Google) — потрібен Gemini API Key з aistudio.google.com\\n  Крок 3. Вставте ваш API-ключ у відповідне поле. Ключ зберігається лише на вашому пристрої.\\nКрок 4. Оберіть обсяг відповіді: Менше / Нормально / Більше.\\nКрок 5. Оберіть стиль: Дружньо / Стандартно / Науково.\\nКрок 6. Напишіть запитання у текстовому полі. Натисніть Enter або кнопку ➤.\\nКрок 7 (Gemini). Можна прикріпити: фото, відео або аудіофайл — натисніть іконку 📎. Gemini проаналізує вміст.\\nКрок 8 (Gemini). Кнопка 📸 — робить скріншот поточної сторінки і відправляє Gemini: «Поясни що бачиш» або «Що можна покращити на цій сторінці?»\\nКрок 9. Натисніть на прикріплений файл щоб переглянути його на весь екран.\\nКрок 10. Кнопка 📋 на відповіді бота — копіює текст у буфер обміну.\\nКрок 11. 🎤 — голосовий ввід запитання (підтримує українську мову).\\nКрок 12. 🧹 — очищає всю історію чату.\\nПорада: Shift+Enter = новий рядок у запиті без відправлення.","image":null},{"q":"🤖 ШІ-Допомога: часті питання","a":"Де взяти API-ключ Gemini? — Безкоштовно на aistudio.google.com/app/apikey. Натисніть «Create API Key». Чи зберігаються мої ключі на сервері? — Ні. Ключі зберігаються лише у вашому браузері (localforage). Ми їх ніколи не бачимо.\\n\\nПомилка 503 від Gemini — що робити? — Це тимчасове перевантаження серверів Google. Зачекайте 1-2 хвилини і натисніть «Спробувати ще раз».\\n\\nЧи може ШІ аналізувати сторінку сайту? — Так! Тільки для Gemini: натисніть 📸, а потім запитайте «Що ти бачиш?» або «Що можна покращити?».\\n\\nЧи підтримує ШІ аудіофайли? — Так, Gemini 2.5 Flash аналізує аудіо (mp3, wav, ogg та ін.).\\n\\nЯк скопіювати відповідь? — Натисніть кнопку 📋 у правому верхньому куті повідомлення бота.\\n\\nЧому ШІ дає неправильну відповідь? — ШІ може помилятися. Завжди перевіряйте важливу інформацію з офіційних джерел.","image":null},{"q":"🗺 Карта клімату: покроковий посібник","a":"Крок 1. Відкрийте розділ «Карта» або «Клімат» у меню.\\nКрок 2. На карті відображаються кліматичні зони, температурні аномалії або погодні дані по регіонах.\\nКрок 3. Клікніть на будь-яку точку карти — з'явиться детальна інформація про клімат цього регіону.\\nКрок 4. Використовуйте жести масштабування (колесо миші або пальці на сенсорному екрані) для наближення/віддалення.\\nКрок 5. Перемикайте шари карти (якщо доступно) для перегляду різних кліматичних параметрів.","image":"texts"},{"q":"🗺 Карта клімату: часті питання","a":"Чому карта не завантажується? — Перевірте інтернет-з'єднання. Карта потребує стабільного підключення.\\n\\nЧи можна зберегти знімок карти? — Використовуйте скріншот браузера або функцію ШІ 📸.\\n\\nЩо означають кольори на карті? — Зазвичай: синій — холодно, жовтий — тепло, червоний — спека або аномалія. Конкретне пояснення — у легенді на карті.","image":"texts"},{"q":"🎨 Фан-арти: покроковий посібник","a":"Крок 1. Відкрийте розділ «Фан-арти».\\nКрок 2. Перегляньте галерею — зображення відображаються у сітці.\\nКрок 3. Клікніть на зображення, щоб відкрити його у повноекранному режимі.\\nКрок 4. У повноекранному режимі можна:\\n  • Завантажити зображення.\\n  • Поділитися (якщо функція доступна).\\nКрок 5. Усі фан-арти намальовані вручну автором сайту. Права на власні твори залишаються за вами — деталі в Угоді користувача.","image":"two"},{"q":"🎨 Фан-арти: часті питання","a":"Чи можна завантажити фан-арт? — Так. Натисніть іконку завантаження в повноекранному режимі.\\n\\nЧи можна надіслати свій малюнок? — Напишіть на theturkeystudio@gmail.com. Можливо, вашу роботу додадуть до галереї!\\n\\nЩирість важливіша за досконалість.\\n\\nЧи можна використати фан-арти комерційно? — Тільки у роздрукованому вигляді з підписом автора. Докладніше — в Угоді користувача, пункт 3.2.","image":"two"},{"q":"🎬 Декоратор: покроковий посібник","a":"Крок 1. Відкрийте розділ «Декоратор».\\nКрок 2. Оберіть базовий шаблон або зображення.\\nКрок 3. Додавайте декоративні елементи: рамки, стікери, ефекти.\\nКрок 4. Налаштуйте положення, розмір та прозорість кожного елемента.\\nКрок 5. Завантажте готовий результат кнопкою «💾 Зберегти».","image":null},{"q":"🖥 Загальне: навігація та меню","a":"Меню ☰ (гамбургер) — відкриває бокову панель з усіма розділами сайту.\\nКожна кнопка у меню має підказку — наведіть курсор для опису функції.\\nЛого Стихії — три кнопки:\\n  • Зліва — завантажити поточний вигляд.\\n  • Вгорі — друкувати.\\n  • Справа — повноекранний режим.\\nТемна/Світла тема — перемикач у шапці (Header).\\nАдаптивність: сайт повністю адаптований для мобільних пристроїв.","image":"logofix"},{"q":"🖥 Загальне: часті питання","a":"Що таке Стихія? — Це веб-платформа «погода + музика + безпечні новини + інструменти». Усе в одному місці, без реклами та токсичного контенту.\\n\\nДля кого сайт? — Для всіх від 13 років. Для тих, хто хоче бачити погоду, слухати музику, читати корисні новини і творити.\\n\\nЧи є мобільний додаток? — Поки що ні. Але сайт оптимізований для мобільних браузерів.\\n\\nЯк зв'язатися з автором? — Email: theturkeystudio@gmail.com\\n\\nЧи є підписка? — Так, деякі функції можуть бути доступні за підпискою. Ціни можуть змінюватись з попередженням за 3 тижні.\\n\\nЧому сайт називається «Стихія»? — Назва відображає тематику: природа, погода, вільна музика — усе, що не підкоряється правилам.","image":"one"},{"q":"За що відповідає меню?","a":"Перестановнку секцій, зміну темної теми окремо кожної секції, відображення(так ви можете вимкнути її якщо вона непотрібна) Доступ після реєстрації. Та багато чого ще...","image":"logofix"},{"q":"Навіщо реєстрація?","a":"Це необхідно для збереження карток погоди, міток на карті та впевненості, що контент використовується за призначенням.","image":"one"},{"q":"Плани і тематика","a":"Сайту з багатьма відсилками ще ніколи не було. Працюю над поліпшенням теперішнього, та додаванхням відсилок і я відкритий до ваших ідей! The strangest site of all.","image":"two"}]`),te=`/assets/logo-CeE8IWwr.webp`;function ne(e){return u({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`m32 64.45 389.47 389.94 22.84-22.47L54.85 42zm30.67 128.46c-.56 55.63 19.77 106.94 62.16 156.88 40.25 47.42 94.56 79.67 137.47 108.21l9 6 9-6c18.49-12.3 39.1-25.3 59.79-39.89L71.74 149.28a114.6 114.6 0 0 0-9.07 43.63m355.16 156.88c42.39-49.94 62.72-101.25 62.16-156.88-.63-62-50.61-112.54-111.43-112.54-48.26 0-80.35 28-97.23 48.17-16.88-20.2-49-48.17-97.23-48.17A108.2 108.2 0 0 0 142.84 85l270 270.48c1.71-1.89 3.37-3.78 4.99-5.69`},child:[]}]})(e)}var re=`/assets/prewiew-CkyBq-Ws.webp`,ie=`/assets/what-Dh9YNb09.webp`,ae=`/assets/myone-Dyn4Do12.webp`,oe=`/assets/mytwo-DY56vL7p.webp`,se=`/assets/soon-Cz5fTUD_.webp`,ce=`/assets/mythree-BY2evDkD.webp`,H=t({default:()=>Q}),U=s(),W=a`
  0% { transform: translateY(100%) scale(0.9); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`,G=a`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.9); opacity: 0; }
`,K=a`
   from { opacity: 0; transform: scale(0.8); }
   to { opacity: 1; transform: scale(1); }
 `,q=a`
  0% { opacity: 0; transform: scale(1.3); filter: blur(10px); }
  50% { opacity: 0.5; transform: scale(1.1); filter: blur(2px); }
  100% { opacity: 1; transform: scale(1); filter: blur(0); }
`,J=i`
  opacity: 0;
  transform-origin: left center;
  animation: ${q} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
  ${({$index:e})=>i`
    animation-delay: ${.1+(e||0)*.05}s;
  `}
`,le=r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9000;
  transition:
    opacity 0.4s ease,
    pointer-events 0.4s ease;
  opacity: ${e=>+!e.$isClosing};
  pointer-events: ${e=>e.$isClosing?`none`:`auto`};
  backdrop-filter: blur(5px);
`,ue=r.div`
  background: #ffd001;
  padding: 5px;
  border-radius: 10px;
  max-width: 1200px;
  width: 95%;
  position: relative;
  font-family:
    "Inter",
    -apple-system,
    sans-serif;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  animation: ${e=>e.$isClosing?G:W} 0.4s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`,de=r.div`
  background: #ffd001;
  z-index: 10;
`,fe=r.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 5px;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
`,pe=r.div`
  display: flex;
  justify-content: center;
`,me=r.button`
  background: ${e=>e.$active?`#8a2be2`:`rgba(0, 0, 0, 0.1)`};
  color: ${e=>e.$active?`white`:`#333`};
  border: none;
  padding: 5px 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: ${e=>e.$active?`#8a2be2`:`rgba(0, 0, 0, 0.2)`};
  }
`,he=r.button`
  position: absolute;
  top: 0px;
  right: 0px;
  background: transparent;
  border-bottom-left-radius: 10px;
  border: none;
  padding-left: 10px;
  padding-bottom: 5px;
  padding-right: 9px;
  background: #3bc2f7;
  color: #000;
  height: 40px;
  font-size: 14px;
  cursor: pointer;
`,ge=r(he)`
  color: white;
  top: 20px;
  right: 20px;
  z-index: 9601;
  animation: ${K} 0.3s ease-out forwards;
  &:hover {
    color: #ffb36c;
  }
`,_e=r.div`
  margin-top: 3px;
`,ve=r.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  ${J}
`,ye=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  color: ${e=>e.$rating===1?`#8a2be2`:`#111`};
  opacity: ${e=>e.$rating===-1?.4:1};
  transition: all 0.3s ease;

  &:hover {
    color: #8a2be2;
  }

  &::before {
    content: "";
    width: 4px;
    height: 20px;
    background: ${e=>e.$rating===-1?`#ccc`:`#8a2be2`};
    margin-right: 12px;
    display: inline-block;
  }
`,be=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 5px;
`,xe=r.div`
  flex: 1;
`,Se=r.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 5px;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  gap: 3px;
  min-width: 20px;
  justify-content: flex-end;
  &:hover {
    transform: scale(1.2);
  }
`,Ce=r.div`
  display: flex;
  align-items: center;
  gap: 7px;
`,we=r.span`
  font-size: 12px;
  transition: transform 0.3s ease;
  transform: ${e=>e.$isOpen?`rotate(180deg)`:`rotate(90deg)`};
`,Te=r.div`
  max-height: ${e=>e.$isOpen?`6000px`:`0`};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding-bottom: ${e=>e.$isOpen?`5px`:`0`};
  font-size: 13px;
  line-height: 1.6;
  color: #4a4a4a;
  opacity: ${e=>e.$isOpen?`1`:`0`};
  white-space: pre-line;
`,Ee=r.img`
  max-width: 100%;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  height: auto;
  max-height: ${e=>e.$isHovered||e.$isPinned?`800px`:`10px`};
  opacity: ${e=>e.$isHovered||e.$isPinned?1:.4};

  &:hover {
    transform: scale(1.01);
  }
`,De=r.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9600;
  display: flex;
  gap: 15px;
  animation: ${K} 0.3s ease-out forwards;
`,Y=r.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
  }
`,X=r.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  display: flex;
  gap: 8px;
  transition: all 0.3s ease-in-out;
  opacity: ${e=>e.$isHovered||e.$isPinned?1:0};
  pointer-events: ${e=>e.$isHovered||e.$isPinned?`auto`:`none`};
`,Z=r.button`
  background: #8a2be2;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 2px 10px;
  cursor: pointer;
  font-size: 12px;
  transition: background 0.2s ease;
  &:hover {
    background: #a25be2;
  }
`,Oe=r.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  z-index: 9500;
`,ke=r.img`
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  cursor: zoom-out;
`,Ae=r.div`
  display: flex;
  flex-direction: column;
  position: relative;
`,je=r.button`
  padding: 3px;
  background: #8a2be2;
  color: white;
  border: none;
  background: rgb(0, 204, 255);
  color: #fbfbfb;
  border: none;
  width: 35px;
  border: 2px solid rgba(1, 248, 38, 0.7);
  height: 34.5px;
  border-bottom-right-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(138, 43, 226, 0.3);
  transition: transform 0.2s;
  ${J}
`,Me=r.input`
  width: 100%;
  padding: 6px 10px;
  border: 2px solid rgb(50, 215, 0);
  border-bottom-left-radius: 25px;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  font-size: 16px;
  outline: none;
  margin-bottom: 10px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #8a2be2;
    background: #fff;
  }

  &::placeholder {
    color: #999;
  }
`,Ne=r.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 450px;
  overflow-y: auto;
  padding: 5px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  &::-webkit-scrollbar {
    width: 4px;
  }
`,Pe=r.div`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 13px;
  max-width: 85%;
  position: relative;
  ${e=>e.$isUser?i`
          background: #8a2be2;
          color: white;
          align-self: flex-end;
        `:i`
          background: white;
          color: #333;
          align-self: flex-start;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        `}
`,Fe=r.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 10px;
  cursor: pointer;
  margin-top: 4px;
  text-decoration: underline;
`,Ie=r.div`
  display: flex;
`,Le=r.button`
  background: #ff4d4d;
  color: white;
  border: none;
  width: 35px;
  height: 35px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Re=r.button`
  background: rgb(134, 60, 60);
  color: #fbfbfb;
  border: none;
  width: 35px;
  border: 2px solid rgba(1, 248, 38, 0.7);
  height: 34.5px;
  cursor: pointer;
  font-size: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`,Q=({onClose:e,isOpen:t,initialFaqQuestion:n})=>{let[r,i]=(0,_.useState)(!1),a=B(e=>e.calendar?.customDays||[]),[o,s]=(0,_.useState)([]),[c,u]=(0,_.useState)({}),[h,g]=(0,_.useState)(``),[v,y]=(0,_.useState)(`faq`);(0,_.useEffect)(()=>{(async()=>{try{let e=await V.default.getItem(`training_actions_pinned`);e!==null&&M(e)}catch(e){console.error(`Error loading pinned state:`,e)}})()},[]);let[b,x]=(0,_.useState)([]),[S,C]=(0,_.useState)(!1),[w,T]=(0,_.useState)(``),E=(0,_.useRef)(null),D=(0,_.useRef)(null);(0,_.useEffect)(()=>{(async()=>{let e=await V.default.getItem(`gemini_api_key`),t=await V.default.getItem(`user_help_session`);e&&T(e),x(t||[{text:`Привіт! Я твій асистент 'Стихії'. Запитай мене про погоду, пісні або правила сайту.`,isBot:!0}])})()},[]),(0,_.useEffect)(()=>{D.current&&(D.current.scrollTop=D.current.scrollHeight)},[b,S]);let O=async e=>{await V.default.setItem(`user_help_session`,e.slice(-15))},[k,A]=(0,_.useState)(null),[j,M]=(0,_.useState)(!1),[N,P]=(0,_.useState)(null),F=()=>{E.current&&E.current.abort(),C(!1)},I=async()=>{window.confirm(`Очистити історію чату з асистентом?`)&&(x([{text:`Привіт! Я твій асистент 'Стихії'. Запитай мене про погоду, пісні або правила сайту.`,isBot:!0}]),await V.default.removeItem(`user_help_session`))},L=async e=>{e.stopPropagation();let t=!j;M(t),await V.default.setItem(`training_actions_pinned`,t)},R=(0,_.useCallback)(()=>{if(N){P(null);return}P(null),i(!0),setTimeout(()=>{i(!1),e()},400)},[e,N]),z=e=>{let t=document.createElement(`a`);t.href=e,t.download=`stykhiya_image_${Date.now()}.png`,document.body.appendChild(t),t.click(),document.body.removeChild(t)},H=e=>{let t=window.open(``,`_blank`);t.document.write(`<html><head><title>Print Image</title></head><body style="text-align:center;"><img src="${e}" style="max-width:100%;" onload="window.print();window.close()" /></body></html>`),t.document.close()};(0,_.useEffect)(()=>{let e=e=>{e.key===`Escape`&&R()};if(t||r)return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[t,r,R]);let W=(e,t)=>{let n=(c[e]||0)===t?0:t;u({...c,[e]:n})},G=e=>{s(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},K=_.useMemo(()=>{let e=new Date().toISOString().split(`T`)[0];return a.filter(t=>t.date<e).sort((e,t)=>t.date.localeCompare(e.date)).slice(0,5)},[a]),q=_.useMemo(()=>{let e={hills:d,texts:f,logofix:te,preview:re,info:ie,one:ae,two:oe,soon:se,might:ae,three:ce},t=ee.map(t=>({...t,image:t.image?e[t.image]??null:null}));if(K.length>0){let e=K.map(e=>`• ${e.date}: ${e.reason}`).join(`
`);t.unshift({q:`📚 Архів минулих подій (ліміт 5)`,a:`Це події, які ви додавали, але їх час уже минув:\n\n${e}`,image:null})}return t},[K]);if((0,_.useEffect)(()=>{if(!t){s([]);return}let e=[];if(n){let t=q.findIndex(e=>e.q===n);t>=0&&(e.push(t),y(`faq`))}let r=q.findIndex(e=>e.q===`Останнє оновлення`);r>=0&&!e.includes(r)&&(e.push(r),y(`faq`)),s(e)},[q,n,t]),!t&&!r)return null;let J=async()=>{if(!h.trim()||S)return;if(!w){alert(`Будь ласка, встановіть API-ключ Gemini у налаштуваннях ШІ для використання цієї функції.`);return}let e=h;g(``);let t=[...b,{text:e,isBot:!1}];x(t),C(!0);try{let n=new l(w).getGenerativeModel({model:`gemini-2.5-flash`}),r=q.map(e=>`Q: ${e.q} A: ${e.a}`).join(`
`),i=p.map(e=>{let t=e.duration?`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,`0`)}`:`невідомо`,n=e.lyrics&&Array.isArray(e.lyrics)?e.lyrics.map(e=>`${e.time}s:${e.text}`).join(`|`).substring(0,100):`no`,r=e.filters&&Array.isArray(e.filters)?e.filters.map(e=>`${e.start}-${e.end}s:${e.type}`).join(`|`):`no`,i=`Song: ${e.author}, Category: ${e.category}, Duration: ${t}, Lyrics: ${n}..., Filters: ${r}, Info: ${e.text}`;if(e.schedule){let t=e.schedule.map(e=>`S${e.season}E${e.ep}: ${e.title} (${e.date})`).join(`; `);i+=`. Schedule: ${t}`}return i}).join(`
`),a=`Ти асистент проекту "Стихія". Тобі доступні дві бази даних:
      1. База FAQ: містить правила сайту та інструкції щодо розділу Погода. 
      2. База пісень: містить повний список треків (${p.length} шт), авторів, тексти пісень та візуальні ефекти (фільтри).

      ІНСТРУКЦІЯ:
      - Якщо запит стосується температури, вітру, УФ-індексу або роботи розділу погоди — шукай у базі FAQ.
      - Якщо запит стосується конкретної пісні, її тривалості, тексту або ефектів — шукай у Базі пісень.
      - Відповідай коротко, професійно та виключно українською мовою.

      КОНТЕКСТ FAQ: ${r.substring(0,2e3)}
      КОНТЕКСТ ПІСЕНЬ: ${i.substring(0,15e3)}

      ЗАПИТ КОРИСТУВАЧА: ${e}`,o=(await(await n.generateContent(a)).response).text(),s=[...t,{text:o,isBot:!0}];x(s),await O(s)}catch(e){if(e.name!==`AbortError`){let e=[...t,{text:`Помилка зв'язку з інтелектом. Перевірте ключ.`,isBot:!0}];x(e)}}finally{C(!1)}},Q=e=>{g(b[e].text)},ze=e=>{let t=/(https?:\/\/[^\s]+)/g;return e.split(t).map((e,n)=>e.match(t)?(0,U.jsx)(`a`,{href:e,target:`_blank`,rel:`noopener noreferrer`,style:{color:`inherit`,textDecoration:`underline`},children:e},n):e)},Be=e=>e.content&&Array.isArray(e.content)&&e.content.length>0?e.content.map((t,n)=>{if(t.type===`image`){let r=t.src||t.image,i=t.alt||e.q||`FAQ image`;return(0,U.jsxs)(`div`,{style:{position:`relative`,marginBottom:`10px`},children:[(0,U.jsx)(Ee,{src:r,alt:i,$isHovered:k===r,$isPinned:j,onClick:()=>P(r),onMouseEnter:()=>A(r),onMouseLeave:()=>A(null)}),(0,U.jsxs)(X,{$isHovered:k===r,$isPinned:j,onMouseEnter:()=>A(r),onMouseLeave:()=>A(null),children:[(0,U.jsx)(Z,{onClick:L,title:j?`Відкріпити кнопки`:`Закріпити кнопки`,children:j?`📌`:`📍`}),(0,U.jsx)(Z,{onClick:e=>{e.stopPropagation(),z(r)},children:`⇩ Скачати`}),(0,U.jsx)(Z,{onClick:e=>{e.stopPropagation(),H(r)},children:`🖨️ Друкувати`})]})]},`image-${n}`)}if(t.type===`text`){let e=t.value||t.text||``;return(0,U.jsx)(`div`,{dangerouslySetInnerHTML:{__html:String(e).replace(/\n/g,`<br/>`)}},`text-${n}`)}return null}):(0,U.jsxs)(U.Fragment,{children:[e.image&&(0,U.jsx)(U.Fragment,{children:(0,U.jsxs)(X,{$isHovered:k===e.image,$isPinned:j,onMouseEnter:()=>A(e.image),onMouseLeave:()=>A(null),children:[(0,U.jsx)(Z,{onClick:L,title:j?`Відкріпити кнопки`:`Закріпити кнопки`,children:j?`📌`:`📍`}),(0,U.jsx)(Z,{onClick:t=>{t.stopPropagation(),z(e.image)},children:`⇩ Скачати`}),(0,U.jsx)(Z,{onClick:t=>{t.stopPropagation(),H(e.image)},children:`🖨️ Друкувати`})]})}),(0,U.jsx)(`div`,{dangerouslySetInnerHTML:{__html:(e.a||``).replace(/\n/g,`<br/>`)}})]}),$=[...q].map((e,t)=>({...e,originalIndex:t,rating:c[t]||0})).filter(e=>{if(!h)return!0;let t=h.toLowerCase();return e.q?.toLowerCase().includes(t)||e.a?.toLowerCase().includes(t)}).sort((e,t)=>t.rating-e.rating);return(0,U.jsxs)(le,{$isClosing:r,onClick:R,children:[(0,U.jsxs)(ue,{$isClosing:r,onClick:e=>e.stopPropagation(),children:[(0,U.jsxs)(de,{children:[(0,U.jsx)(he,{onClick:R,children:`Зрозуміло!`}),(0,U.jsx)(`h1`,{style:{textAlign:`center`,fontSize:`26px`,color:`#222`,marginTop:`-5px`},children:`Навчання`}),(0,U.jsx)(`p`,{style:{textAlign:`center`,fontSize:`13px`,color:`#000`,marginTop:`-8px`},children:`Останнє оновлення: 28 липня 2026 року`}),(0,U.jsxs)(pe,{children:[(0,U.jsx)(me,{$active:v===`faq`,onClick:()=>y(`faq`),style:{borderBottomLeftRadius:`20px`,borderTopLeftRadius:`20px`,borderRight:`1px solid rgba(0, 0, 0, 0.1)`},children:`Питання (FAQ)`}),(0,U.jsx)(me,{$active:v===`ai`,onClick:()=>y(`ai`),style:{borderBottomRightRadius:`20px`,borderTopRightRadius:`20px`},children:`ШІ Асистент`})]})]}),(0,U.jsxs)(fe,{children:[v===`ai`&&(0,U.jsxs)(`div`,{children:[(0,U.jsxs)(Ne,{ref:D,children:[b.map((e,t)=>(0,U.jsxs)(Pe,{$isUser:!e.isBot,children:[ze(e.text),!e.isBot&&t===b.length-1&&!S&&(0,U.jsx)(Fe,{onClick:()=>Q(t),children:`редагувати`})]},t)),S&&(0,U.jsx)(Pe,{$isUser:!1,children:`Думаю...`})]}),(0,U.jsxs)(Ie,{children:[(0,U.jsx)(Me,{type:`text`,placeholder:`Запитай ШІ або шукай у FAQ...`,value:h,onChange:e=>g(e.target.value),onKeyDown:e=>e.key===`Enter`&&J()}),(0,U.jsx)(Re,{onClick:I,title:`Очистити чат`,children:(0,U.jsx)(m,{})}),S?(0,U.jsx)(Le,{onClick:F,title:`Зупинити`,children:`🛑`}):(0,U.jsx)(je,{onClick:J,children:`➤`})]})]}),v===`faq`&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Me,{type:`search`,placeholder:`Пошук питань...`,"aria-label":`Пошук питань`,value:h,onChange:e=>g(e.target.value)}),(0,U.jsxs)(_e,{style:{marginTop:0},children:[$.length===0&&(0,U.jsx)(`p`,{style:{textAlign:`center`,color:`#555`},children:`Питань за цим запитом не знайдено.`}),$.map((e,t)=>{let n=e.originalIndex,r=c[n]||0;return(0,U.jsxs)(ve,{$index:t+1,children:[(0,U.jsx)(ye,{$rating:r,onClick:()=>G(n),children:(0,U.jsxs)(be,{children:[(0,U.jsx)(xe,{children:e.q}),(0,U.jsxs)(Ce,{children:[(0,U.jsx)(Se,{onClick:e=>{e.stopPropagation(),W(n,1)},title:`Корисно`,children:r===1?`❤️`:`🤍`}),(0,U.jsx)(Se,{onClick:e=>{e.stopPropagation(),W(n,-1)},title:`Не корисно`,children:(0,U.jsx)(ne,{})}),(0,U.jsx)(we,{$isOpen:o.includes(n),children:`▼`})]})]})}),(0,U.jsx)(Te,{$isOpen:o.includes(n),children:(0,U.jsxs)(Ae,{children:[e.image&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Ee,{src:e.image,alt:e.q,$isHovered:k===e.image,$isPinned:j,onClick:()=>P(e.image),onMouseEnter:()=>A(e.image),onMouseLeave:()=>A(null)}),(0,U.jsxs)(X,{$isHovered:k===e.image,$isPinned:j,onMouseEnter:()=>A(e.image),onMouseLeave:()=>A(null),children:[(0,U.jsx)(Z,{onClick:L,title:j?`Відкріпити кнопки`:`Закріпити кнопки`,children:j?`📌`:`📍`}),(0,U.jsx)(Z,{onClick:t=>{t.stopPropagation(),z(e.image)},children:`⇩ Скачати`}),(0,U.jsx)(Z,{onClick:t=>{t.stopPropagation(),H(e.image)},children:`🖨️ Друкувати`})]})]}),Be(e)]})})]},n)})]})]})]})]}),N&&(0,U.jsxs)(Oe,{onClick:()=>P(null),children:[(0,U.jsx)(ge,{onClick:()=>P(null),children:`×`}),(0,U.jsxs)(De,{children:[(0,U.jsx)(Y,{onClick:e=>{e.stopPropagation(),z(N)},children:`⇩ Скачати`}),(0,U.jsx)(Y,{onClick:e=>{e.stopPropagation(),H(N)},children:`🖨️ Друкувати`})]}),(0,U.jsx)(ke,{src:N,alt:`Прев'ю зображення`,onClick:e=>e.stopPropagation()})]})]})};export{B as a,L as i,H as n,j as r,Q as t};