# ✅ TypeScript Todo App

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Learning%20Project-orange?style=for-the-badge)

A simple todo list app built as a hands-on introduction to **TypeScript with React** — written by a developer with extensive full-stack React experience who wanted to bridge that knowledge with TypeScript fundamentals and explore **Zustand** for state management.

---

## 🎯 Purpose

This project wasn't about building something complex — it was about learning deliberately. Having built dozens of production-ready full-stack React applications in JavaScript, the goal here was to:

- Apply existing React knowledge within a **typed TypeScript environment**
- Get comfortable with **type annotations, interfaces, and TS-specific patterns** in a real component context
- Try **Zustand** as a lightweight alternative to Redux or Context for global state

---

## ✨ Features

- Add new tasks via an input field
- Mark tasks as **complete** (renders with strikethrough)
- **Undo** a completed task back to active
- **Delete** tasks permanently
- Clean, minimal UI

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| React | UI framework |
| TypeScript | Type safety & first-time learning goal |
| Zustand | Global state management |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

---

## 🧠 What I Learned

- Typing React component props and state with interfaces
- Using typed Zustand stores (`create<StoreType>()(...)`)
- How TypeScript catches bugs at compile time that would otherwise surface at runtime
- The minimal overhead TypeScript adds to a familiar React workflow — and why it's worth it

---

## 📌 Notes

This is a learning project, not a production app. The focus was depth of understanding over feature breadth. Future iterations could add drag-to-reorder, or categories.
