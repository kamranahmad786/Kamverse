# ⚡ Kamverse — AI Powered Portfolio Website with RAG Chatbot

An interactive **MERN Stack Developer Portfolio** with an integrated **RAG-based AI Chatbot**, dynamic project & certificate management, and visually rich Gen-Z design.

This portfolio showcases my projects, skills, and achievements while using cutting-edge technologies such as **LangChain**, **OpenAI**, **Pinecone**, and **Framer Motion** to deliver a futuristic developer experience.

---

## 🚀 Tech Stack

### 🖥 Frontend
- **React.js (Functional Components + Hooks)**
- **Tailwind CSS** — modern responsive UI
- **Framer Motion** — smooth animations
- **Lucide React** & **React Icons**
- **Vite** — fast build tool

### ⚙️ Backend
- **Node.js** + **Express.js**
- **MongoDB Atlas** — cloud database
- **Mongoose** — data modeling
- **Helmet**, **Compression**, **Morgan**, **CORS** — security & optimization

### 🤖 AI & RAG (Retrieval-Augmented Generation)
- **LangChain.js**
- **OpenAI API (text-embedding-3-small, gpt-4o-mini)**
- **Pinecone** — vector database for embeddings
- **Retrieval Chain** setup for context-aware chatbot

---

## 💡 Key Features

### 🧠 RAG Chatbot
- Chatbot trained using LangChain + Pinecone + OpenAI.
- Answers portfolio-related questions dynamically.
- Uses **Retrieval-Augmented Generation** for context-based answers.

### 💼 Dynamic Projects
- Backend API for creating, reading, and managing projects.
- Fully responsive and animated project cards on frontend.
- Projects include description, tech stack, GitHub, and live demo links.

### 🪪 Certificates Section
- Dynamically fetched certificates from MongoDB.
- Includes title, issuer, preview image, date, and verification link.
- Easily add new certificates via Postman.

### 👨‍💻 Work Experience Timeline
- Neon-inspired vertical timeline cards.
- Modern gradient glow effect.
- Fully responsive (desktop & mobile).

### 🎓 Education Timeline
- Follows same glowing timeline design as experience.
- Displays degrees, years, and CGPA/marks beautifully.

### 🧑‍🎨 Aesthetic Enhancements
- Animated **gradient loader** with floating neon particles.
- **Cursor follower** — glowing circular pointer animation.
- **Scroll indicator**, **dark/light mode toggle**, and **responsive navbar**.
- **Contact form** connected to backend API.
- **Footer & Navbar** include glowing profile image with gradient effects.

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
