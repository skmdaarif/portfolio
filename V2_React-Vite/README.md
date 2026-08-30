# Sheikh Md Aarif Al Zubair - Developer Portfolio (React + Vite Edition)

Modern component-driven developer portfolio built with **React 18**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

---

## ⚡ Quickstart & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## 🛠️ Tech Stack & Libraries
- **React 18** (Component-driven architecture)
- **Vite** (Lightning-fast HMR and bundling)
- **Framer Motion** (Physics-based spring animations, layout transitions & modals)
- **Tailwind CSS** (Cyber glassmorphism styling)
- **Lucide React** (Crisp modern SVG icons)
- **HTML5 2D Canvas** (Interactive neural particle network)

---

## 🚀 Deploying to Vercel / Netlify / GitHub Pages

### Deploying to Vercel (1-Click)
```bash
npm install -g vercel
vercel
```

### Deploying to GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add `base: './'` to `vite.config.js`.
3. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run:
   ```bash
   npm run deploy
   ```
