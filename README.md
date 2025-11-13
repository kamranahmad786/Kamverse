# ⚡ Kamverse — AI Powered Portfolio Website with RAG Chatbot

<p align="center">
  <em>Next-Gen Portfolio built with React, Node.js, MongoDB, and an AI RAG Chatbot powered by OpenAI , OpenRouter & LangChain</em>
</p>

<p align="center">
  <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/></a>
  <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/></a>
  <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/></a>
  <a href="https://www.langchain.com/"><img src="https://img.shields.io/badge/LangChain-4B8BBE?style=for-the-badge&logo=openai&logoColor=white"/></a>
  <a href="https://openai.com/"><img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white"/></a>
  <a href="https://www.pinecone.io/"><img src="https://img.shields.io/badge/Pinecone-0266D6?style=for-the-badge&logo=pinecone&logoColor=white"/></a>
  <a href="https://openrouter.ai/"><img src="https://img.shields.io/badge/OpenRouter-1E1E1E?style=for-the-badge&logo=openrouter&logoColor=white"/></a>

</p>

---

## 🌐 Live Demo  
🚀 *Frontend (Vercel):* [https://kamranahmad.vercel.app](https://kamranahmad.vercel.app)  
⚙️ *Backend (Render):* [https://mern-portfolio-server.onrender.com](https://mern-portfolio-server.onrender.com)

---

## 🧠 Overview
A *modern AI-powered developer portfolio* designed to showcase your skills, projects, and achievements in an interactive and visually appealing way.  
Built using the **MERN stack** with **LangChain**, **OpenAI**, **OpenRouter** and **Pinecone** for a personalized **RAG Chatbot** experience.

---

## 🧩 Tech Stack

| Category | Technologies |
|-----------|---------------|
| *Frontend* | React.js, Vite, Tailwind CSS, Framer Motion, Lucide React Icons |
| *Backend* | Node.js, Express.js, Mongoose, MongoDB Atlas |
| *AI / RAG* | LangChain.js, OpenAI API, OpenRouter,  Pinecone Vector Database |
| *Utilities* | Helmet, Compression, Morgan, CORS |
| *Deployment* | Vercel (Frontend), Render (Backend) |

---

## 🚀 Features

### 🤖 AI RAG Chatbot
- Built using **LangChain.js**, **Pinecone**, **OpenRouter** and **OpenAI Embeddings**
- Understands your portfolio content
- Answers contextually relevant questions about you, your skills, and your work

### 💼 Dynamic Projects
- Projects fetched directly from MongoDB
- Each project includes title, tech stack, image, GitHub, and demo links
- Easily add via Postman API

### 🪪 Certificates Section
- Showcases your certifications dynamically from MongoDB
- Includes preview images, issuer, and verification links

### 🧠 Experience Timeline
- Interactive vertical timeline with glowing gradient cards
- Fully responsive for both desktop & mobile

### 🎓 Education Timeline
- Styled similar to work experience
- Shows your degrees, years, and CGPA/marks with elegant animations

### 🧑‍🎨 UI & UX Highlights
- Gen-Z design with *neon glow animations*
- Gradient *loader screen*
- *Cursor follower* & scroll indicator
- Dark/light mode toggle with ThemeContext
- Fully responsive across all devices

---

## 🧩 Folder Structure

```
Kamverse/
├── .gitignore
├── README.md
├── client/
│   ├── .env.example
│   ├── .gitignore
│   ├── README.md
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets/
│   │   │   ├── profile.jpg
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── Certificates.jsx
│   │   │   ├── Chatbot.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   ├── CursorFollower.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── ScrollIndicator.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── UI/
│   │   │       ├── Button.jsx
│   │   │       └── Card.jsx
│   │   ├── context/
│   │   │   ├── ThemeContext.jsx
│   │   │   └── ThemeContextInstance.js
│   │   ├── hooks/
│   │   │   ├── useChat.js
│   │   │   └── useTheme.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── main.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── NotFound.jsx
│   │   └── services/
│   │       ├── api.js
│   │       ├── certificateApi.js
│   │       └── chatApi.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── package-lock.json
├── package.json
└── server/
    ├── app.js
    ├── data/
    │   └── resume.pdf
    ├── package-lock.json
    ├── package.json
    ├── scripts/
    │   └── ingest.js
    ├── server.js
    └── src/
        ├── config/
        │   ├── db.js
        │   ├── openai.js
        │   └── pinecone.js
        ├── controllers/
        │   ├── certificateController.js
        │   ├── chatController.js
        │   ├── contactController.js
        │   ├── projectController.js
        │   └── skillController.js
        ├── models/
        │   ├── Contact.js
        │   ├── Message.js
        │   ├── Project.js
        │   ├── Skill.js
        │   └── certificateModel.js
        ├── routes/
        │   ├── certificateRoutes.js
        │   ├── chatRoutes.js
        │   ├── contactRoutes.js
        │   ├── projectRoutes.js
        │   └── skillRoutes.js
        ├── services/
        │   ├── certificateService.js
        │   ├── chatService.js
        │   ├── contactService.js
        │   ├── embeddingService.js
        │   └── projectService.js
        └── utils/
            ├── errorHandler.js
            └── logger.js
```
## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

git clone https://github.com/kamranahmad786/kamverse.git

cd kamverse

### 2️⃣ Backend Setup

cd server
npm install

