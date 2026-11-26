<div align="center">

# Faishal Saif — Personal Portfolio

**Software Engineer · IT Engineer · Logistics Technology & Systems**

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=000)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=fff)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=fff)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js&logoColor=fff)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb&logoColor=fff)](https://www.mongodb.com/)

A full-stack interactive portfolio showcasing software engineering projects, enterprise IT infrastructure experience, and production Reverse Vending Machine (RVM) logistics technology systems deployed in Riyadh, Saudi Arabia.

</div>

---

## Highlights & Features

- **Interactive 3D Identity & Cards** — Custom `Card3D` tilt/glare wrapper, 3D hero background, and a flippable interactive ID badge (`IdBadgeCard`).
- **Flagship RVM Case Study** — 6-stage interactive architecture pipeline (Hardware → Software → API → Database → Dashboard → Operations) detailing smart recycling kiosk telemetry.
- **Experience & Credentials Timeline** — Career progression across IT Engineering, Healthcare IT Administration, and Full-Stack Development, alongside certifications and achievements.
- **AI Portfolio Assistant** — Built-in conversational drawer (`AiAssistantDrawer`) powered by Google Gemini (`@google/genai`) to answer questions about skills, projects, and experience.
- **Command Palette & Theme Support** — Quick navigation (`Ctrl/Cmd + K`), Dark/Light mode toggle, and a dedicated Resume view with PDF download (`html2pdf.js`).
- **Full-Stack Backend API** — Express server with MongoDB (Mongoose), JWT-protected admin dashboard, Nodemailer contact handling, Helmet security headers, and rate limiting.

---

## Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite 5, Tailwind CSS, Framer Motion, React Router 7, Lucide Icons, Axios |
| **Backend** | Node.js, Express 4, MongoDB & Mongoose, JWT, Zod, Helmet, Express Rate Limit, Nodemailer |
| **AI & Tooling** | `@google/genai`, `html2pdf.js`, ESLint, Concurrently |

---

## Project Structure

```text
my-personal-portfolio/
├── client/                  # React + Vite frontend
│   ├── public/              # Static assets, images, resume PDF, SEO files
│   └── src/
│       ├── components/      # UI sections (home, common, resume, ai)
│       ├── context/         # Theme, Auth, CommandPalette, LiveWork, AI state
│       ├── data/            # Structured portfolio data
│       ├── pages/           # Home, Projects, ProjectDetail, Blog, Resume, Admin
│       └── utils/           # Helpers (resume PDF export)
├── server/                  # Node.js + Express backend
│   └── src/
│       ├── config/          # Database connection
│       ├── controllers/     # Auth, Portfolio, Contact, GitHub, AI handlers
│       ├── middleware/      # JWT auth middleware
│       ├── models/          # Mongoose schemas (User, Project, ContactMessage)
│       └── routes/          # REST API route definitions
└── package.json             # Workspace scripts (concurrently)
```

---

## Getting Started

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/iamrazzz77/my-personal-portfolio.git
cd my-personal-portfolio
npm run install:all
```

### 2. Configure Environment Variables

Copy `server/.env.example` to `server/.env` and update the values (MongoDB URI, JWT secret, SMTP credentials, and Gemini API key):

```bash
cp server/.env.example server/.env
```

### 3. Run in Development

```bash
# Start both client (Vite) and server (Nodemon) concurrently
npm run dev
```

Or run them individually:

```bash
npm run dev:client   # Frontend at http://localhost:5173
npm run dev:server   # Backend API at http://localhost:5000
```

### 4. Production Build (Client)

```bash
npm run build:client
```

---

## Contact

- **GitHub**: [@iamrazzz77](https://github.com/iamrazzz77)
- **LinkedIn**: [Faishal Saif](https://www.linkedin.com/in/faishal-saif-3b13601b7/)
- **Email**: [faishalsaif331@gmail.com](mailto:faishalsaif331@gmail.com)
