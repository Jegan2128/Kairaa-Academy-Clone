
# 🚀 Academy Clone — Learning Platform UI

A modern course learning platform built using **React + Vite + TailwindCSS**.  
This project is structured for scalability — with modular components, course pages, blog cards, overlays, and routing integration.

---

## 🌟 Features

| Feature | Description |
|---|---|
| 🔹 Modern UI with Tailwind | Fully-responsive, utility-first styling |
| 🔹 Popup Login/Registration Modal | Appears on open, dismiss + reopen behavior |
| 🔹 Course Detail Pages | Overview + syllabus + tab-based UI |
| 🔹 Blog Card System | Supports multiple vertical or horizontal layouts |
| 🔹 Routing Enabled | Navigation-ready for multiple pages |
| 🔹 Extendable Architecture | Easy to add new modules, courses, and pages |

---

## 📂 Project Structure

```
academyclone/
 ├── index.html                 # Root HTML - Vite injects bundles here
 ├── vite.config.js             # Build + dev server config
 ├── package.json               # Dependencies, scripts, metadata
 └── src/
      ├── App.jsx               # Main route-rendering wrapper
      ├── main.jsx              # ReactDOM renderer
      ├── index.css             # Tailwind global CSS import
      ├── assets/               # Media files (PNG/JPG/SVG icons)
      ├── components/           # Reusable UI building blocks
      ├── pages/                # Routed screens like Courses, Blogs
      └── utils/ *(optional)*   # Shared helpers
```

---

## 🔧 Installation & Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build production bundle
npm run build
```

Local Server URL:  
> **http://localhost:5173/**

---

## 🎨 UI/UX Themes

- Based on **Tailwind utility CSS**
- Fully responsive for mobile → desktop
- Sky-blue + cyan accent theme (primary color scheme)
- Smooth overlay and tab animations

---

## 📌 Roadmap / Future Scope

| Future Additions | Priority |
|---|:---:|
| 🔥 Backend authentication (JWT / OAuth) | HIGH |
| 📚 Dynamic Courses via API/DB | HIGH |
| 📝 Admin dashboard for content upload | MEDIUM |
| 🌙 Dark/Light theme switcher | MEDIUM |
| 🔊 Video course player integration | LOW |

---

## 🤝 Contribution Guidelines

Pull requests welcome!

```bash
# Create new feature branch
git checkout -b feature-name

# Commit changes
git commit -m "Added feature-name"

# Push & open PR
git push origin feature-name
```

---

## 📜 License

This project is open for personal, academic & development use.  
For commercial deployments, please add a License file (MIT recommended).
