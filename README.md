# Sheikh Md Aarif Al Zubair - Developer Portfolio Website

Official dual-version portfolio codebase for **Sheikh Md Aarif Al Zubair** (Computer Science Engineer, IIT Delhi Research Alum, AI/ML & Embedded IoT Systems Developer).

---

## 🚀 Side-by-Side Comparison on Separate Ports

| Edition | Technology Stack | Localhost URL | Launcher Command |
| :--- | :--- | :--- | :--- |
| **🟢 Version 1 (`V1_Vanilla`)** | HTML5, Tailwind CSS, Canvas, Swiper.js | **`http://localhost:3001`** | `./start-v1.sh` |
| **⚛️ Version 2 (`V2_React-Vite`)** | React 18, Vite, Framer Motion, Lucide | **`http://localhost:3002`** | `./start-v2.sh` |

---

## ⚡ Quick Launch Options

### Option A: Launch Both Simultaneously (Recommended)
Run the automated script to launch both servers side-by-side:
```bash
./start-both.sh
```
* **V1 (Vanilla)** will open at `http://localhost:3001`
* **V2 (React + Vite)** will open at `http://localhost:3002`

---

### Option B: Launch Individually

#### Run `V1_Vanilla` on port `3001`:
```bash
cd V1_Vanilla
python3 -m http.server 3001
# Or from root: ./start-v1.sh
```

#### Run `V2_React-Vite` on port `3002`:
```bash
cd V2_React-Vite
npm install
npm run dev
# Or from root: ./start-v2.sh
```

---

## 📂 Directory Layout

```
resume-portfolio/
├── start-both.sh     # 🚀 Launches both V1 (3001) & V2 (3002) side-by-side
├── start-v1.sh       # 🟢 Launches V1 on port 3001
├── start-v2.sh       # ⚛️ Launches V2 on port 3002
├── V1_Vanilla/       # Zero-build static web edition
│   ├── index.html
│   ├── css/style.css
│   └── js/
└── V2_React-Vite/    # Component-driven React 18 + Framer Motion edition
    ├── package.json
    ├── vite.config.js (Configured for port 3002)
    └── src/
        ├── App.jsx
        ├── data/resumeData.js
        └── components/
```
