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
🚀 *Frontend (Vercel):* [https://kamverse.vercel.app](https://kamverse.vercel.app/)  
⚙️ *Backend (Render):* [https://kamverse.onrender.com](https://kamverse.onrender.com)

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

Create .env file
PORT=4000
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173

# OpenAI
OPENAI_API_KEY=your_openai_api_key
OPENAI_CHAT_MODEL=gpt-4o-mini

# OpenRouter
OPENROUTER_API_KEY= your_openrouter_api_key

# Pinecone
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_ENVIRONMENT=us-west1-gcp
PINECONE_INDEX=portfolio-index
PINECONE_NAMESPACE=portfolio

Run backend:
npm run dev

👉 Server runs at: http://localhost:4000

3️⃣ Frontend Setup
cd client
npm install
npm run dev

👉 Frontend runs at: http://localhost:5173

🧠 API Endpoints

📁 Projects
| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| `GET`  | `/api/projects` | Fetch all projects |
| `POST` | `/api/projects` | Add a new project  |

POST Example (JSON):
{
  "title": "BookHub",
  "description": "A digital library built with MERN stack.",
  "tech": ["React", "Node.js", "MongoDB", "Express"],
  "github": "https://github.com/kamranahmad786/bookhub",
  "demo": "https://bookhub.vercel.app",
  "image": "https://example.com/bookhub.png"
}

🪪 Certificates
| Method | Endpoint            | Description            |
| ------ | ------------------- | ---------------------- |
| `GET`  | `/api/certificates` | Fetch all certificates |
| `POST` | `/api/certificates` | Add a new certificate  |

POST Example (JSON):
{
  "title": "Google Cloud Fundamentals",
  "issuer": "Google",
  "date": "2025-06-15",
  "certificateUrl": "https://example.com/certificate.pdf",
  "image": "https://example.com/certificate.png"
}

💬 Chatbot
| Method | Endpoint          | Description            |
| ------ | ----------------- | ---------------------- |
| `POST` | `/api/chat/query` | Ask chatbot a question |

Example:
{ "question": "What are Kamran Ahmad's skills?" }

🌍 Deployment Guide

🧱 Backend Deployment (Render)

Render
1. Go to Render.com
2. Create a New Web Service
3. Connect your GitHub repo → select server folder
4. Add environment variables from .env
5. Set:
       Build Command: npm install
       Start Command: npm start
6.Deploy 
       Render URL example → https://kamverse.onrender.com

 🖥 Frontend Deployment (Vercel)

 Vercel
 1. Go to Vercel.com
 2. New Project → Import GitHub Repo
 3. Set root = client
 4. Add:
       VITE_BACKEND_URL=https://kamverse.onrender.com
5. Deploy
       Vercel URL → https://kamverse.vercel.app


🧠 How RAG Works

1. Portfolio data is embedded into vectors using OpenAI embeddings (text-embedding-3-small).

2. Vectors are stored in Pinecone Vector DB.

3. When a user asks a question, LangChain Retriever searches relevant context.

4. The context + question is sent to ChatOpenAI, which generates a contextual reply.

 This gives the chatbot true awareness of your portfolio content


🧑‍💻 Author

👋 Kamran Ahmad
💼 Full Stack Developer — MERN + AI

📧 Email: mohammadkamranahmad786@gmail.com

🌐 Portfolio: https://kamverse.vercel.app

🐙 GitHub: https://github.com/kamranahmad786

💼 LinkedIn: https://linkedin.com/in/kamran-ahmad-786

🧾 License

This project is licensed under the MIT License — feel free to use, modify, and share.

“Innovation is seeing what everybody has seen and thinking what nobody has thought.”
— Kamran Ahmad
