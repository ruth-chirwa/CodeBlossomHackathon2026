# 🌱 Habit Tracker App

A simple habit tracker built with **React, HTML, and CSS**. The app helps users monitor daily health and wellness habits with a clean, calm UI that works on **desktop and mobile**.

---

## ✨ Features

### 📊 View & Check Progress
- Daily habit overview dashboard
- Visual progress bars for goals
- Simple, distraction-free layout

### 💧 Water Intake Tracking
- Log daily water consumption
- Increment-based tracking (e.g. glasses of water)
- Progress towards a daily hydration goal

### 🏃 Physical Activities
- Track activities such as:
  - Walking
  - Jogging
  - General step count
- Increment activity throughout the day
- Visual feedback on activity progress

### ❤️ Health Monitoring
- **Blood Pressure** input (e.g. 120/80)
- **Body Temperature** input (e.g. 36.6°C)
- Manual entry for quick daily logging

### 🔐 Authentication (Frontend)
- Login and Signup pages
- Protected dashboard route
- Authentication state managed with React state
- User session stored in `localStorage`

---

## 🖥️ Tech Stack

- **React** (Frontend framework)
- **React Router DOM** (Client-side routing)
- **HTML & CSS** (Styling, responsive layout)
- **localStorage** (Temporary data persistence)

No backend is required for the MVP.

---

## 📁 Project Structure

```txt
src/
 ├─ components/
 │   ├─ HabitCard.jsx
 │   ├─ ProgressBar.jsx
 │   └─ Navbar.jsx
 ├─ pages/
 │   ├─ Login.jsx
 │   ├─ Signup.jsx
 │   └─ Dashboard.jsx
 ├─ styles/
 │   ├─ global.css
 │   ├─ auth.css
 │   └─ dashboard.css
 ├─ App.jsx
 └─ main.jsx
```

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Install React Router

```bash
npm install react-router-dom
```

### 3️⃣ Run the App

```bash
npm run dev   # Vite
npm start     # Create React App
```

Open your browser at:
```
http://localhost:5173
```
(or the port shown in your terminal)

---

## 📱 Responsive Design

- Mobile-first layout
- Grid-based dashboard
- Touch-friendly buttons and inputs
- Notion-style neutral color palette

---

## 🧠 Future Improvements

- Daily streak tracking 🔥
- Weekly and monthly analytics 📈
- Dark mode 🌙
- Backend integration
- Real authentication with JWT
- Cloud database storage

---

## 🎯 Purpose

This project is designed as:
- A personal wellness tracker
- A learning project for React fundamentals
- A portfolio-ready frontend application

---

## 📝 License

This project is open-source and free to use for learning and personal projects.

---

✨ *Built with simplicity, consistency, and calm in mind — inspired by Team 9
