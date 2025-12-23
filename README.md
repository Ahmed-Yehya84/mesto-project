# Mesto (Interactive Gallery) 📸

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![BEM](https://img.shields.io/badge/BEM-Methodology-blue?style=for-the-badge)
![API](https://img.shields.io/badge/Unsplash-API-green?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

[English](#english) | [Русский](#russian)

---

<a name="english"></a>

## 🇬🇧 English

**Mesto** is a responsive, interactive image gallery where users can share photos of their travels, edit their profile details, and interact with cards. This version is integrated with the **Unsplash API** to provide high-quality, real-time travel photography.

### 🚀 Key Features

- **Dynamic Loading:** Fetches 10 random "Travel & Architecture" images using the Unsplash API.
- **Form Validation:** Custom JavaScript validation for all inputs (URL patterns, character length).
- **Interactive UI:** Smooth modal windows (popups) for editing profile and adding new cards.
- **UX Enhancements:** "Saving..." state feedback on buttons and "Esc/Overlay" closing for modals.
- **Responsive Design:** Fully functional on mobile, tablet, and desktop.

### 🎓 Lessons Learned

- **API Adaptation:** Pivoting from a static local array to the **Unsplash API** taught me how to handle asynchronous data and map external data structures to my own component needs.
- **UX is Key:** Implementing "Loading..." states and clear validation messages significantly improved the feel of the app, moving it from a "static page" to a "web application."
- **BEM & Scalability:** Using the BEM methodology allowed me to manage complex CSS without style conflicts as the project grew.

### 🗺️ Future Roadmap

- **Full-Stack Integration:** Implement a dedicated Node.js/Express backend with MongoDB to allow permanent storage of user uploads and likes.
- **User Authentication:** Add JWT-based sign-up and login so users can have personal profiles and private galleries.
- **Search Functionality:** Add a search bar to allow users to query specific travel destinations through the API.

### 📥 Installation & Build

1. Clone the repo: `git clone https://github.com/Ahmed-Yehya84/mesto-project.git`
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Build for production: `npm run build`

---

<a name="russian"></a>

## 🇷🇺 Русский

**Место** — это адаптивная интерактивная галерея изображений, где пользователи могут делиться фотографиями своих путешествий, редактировать данные профиля и взаимодействовать с карточками. Данная версия интегрирована с **Unsplash API** для получения высококачественных фотографий в реальном времени.

### 🚀 Основные возможности

- **Динамическая загрузка:** Получение 10 случайных изображений по теме "Путешествия и Архитектура" через Unsplash API.
- **Валидация форм:** Собственная логика валидации всех полей ввода (URL-паттерны, длина текста).
- **Интерактивный интерфейс:** Плавные модальные окна (попапы) для редактирования профиля и добавления карточек.
- **Улучшение UX:** Состояние "Сохранение..." на кнопках и закрытие попапов клавишей "Esc" или кликом по оверлею.
- **Адаптивность:** Корректное отображение на мобильных устройствах, планшетах и десктопах.

### 🎓 Чему я научился

- **Работа с API:** Переход от статического массива к **Unsplash API** научил меня работать с асинхронными запросами и адаптировать внешние структуры данных под нужды моих компонентов.
- **Приоритет UX:** Реализация состояний «Сохранение...» значительно улучшила восприятие приложения, превратив его из «статичной страницы» в полноценное веб-приложение.
- **БЭМ и масштабируемость:** Использование методологии БЭМ позволило эффективно управлять стилями по мере роста проекта.

### 🗺️ Планы на будущее

- **Full-Stack разработка:** Создание собственного бэкенда на Node.js/Express с использованием MongoDB для постоянного хранения данных.
- **Авторизация пользователей:** Добавление регистрации и входа на основе JWT для создания личных профилей.
- **Поиск по сайту:** Добавление строки поиска для запроса конкретных направлений путешествий через API.

### 📥 Установка и запуск

1. Клонировать репозиторий: `git clone https://github.com/Ahmed-Yehya84/mesto-project.git`
2. Установить зависимости: `npm install`
3. Запуск сервера для разработки: `npm run dev`
4. Сборка проекта: `npm run build`
