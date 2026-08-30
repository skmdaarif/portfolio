# Sheikh Md Aarif Al Zubair - Developer Portfolio Website

A modern, responsive, animated developer portfolio website designed in accordance with the professional engineering resume of **Sheikh Md Aarif Al Zubair** (Autonomous Systems, Reinforcement Learning, Embedded IoT & Robotics Developer).

![Theme](https://img.shields.io/badge/Theme-Obsidian%20Glassmorphism-blue)
![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20TailwindCSS%20%7C%20Canvas%20%7C%20Swiper.js-cyan)
![Deployment](https://img.shields.io/badge/Deployment-Vercel%20%26%20GitHub%20Pages%20Ready-emerald)

---

## 🌟 Key Highlights & Features

1. **Interactive Neural & IoT Particle Constellation Canvas**
   - 60 FPS HTML5 Canvas particle network simulating neural synapses and IoT mesh communication with interactive cursor gravity.
2. **IIT Delhi Research Spotlight**
   - Autonomous UAV Trajectory Optimization under Prof. Brejesh Lall & Dr. Shoaib M. Nasti (first-principles MLP with \(1.11 \times 10^{-8}\) MSE, \(< 10^{-7}\) relative error, 11 discrete & model-based RL agents [Dyna-Q+, Prioritized Sweeping, Double Q-Learning], and UAV swarm literature survey).
3. **Smooth Sliding Project Showcase (Swiper.js)**
   - Touch & drag sliding project cards with interactive modal deep dives:
     - **Secure Password Generator (CLI + GUI)** (Python, secrets, Tkinter, PyInstaller, GitHub Actions CI/CD)
     - **Semi-Autonomous Environmental Surveillance and Fire Response Rover** (ESP32, PMS7003, MQ135, DHT22, Tri-directional IR Flame sensor fusion, active MOSFET pump & PWM servo spray)
     - **Smart Home Automation System** (ESP32, Blynk IoT, Relay modules)
4. **Live Interactive Algorithm & Hardware Simulators**
   - **CSPRNG Password & Shannon Entropy Engine**: Computes real-time entropy bits \(E = L \log_2(R)\) and cryptographic brute-force strength.
   - **ESP32 Multivariate Mahalanobis Distance Simulator**: Computes live covariance anomaly score \(D_M = \sqrt{(x-\mu)^T \Sigma^{-1} (x-\mu)}\) with adjustable PM2.5, VOC, and temperature sensor sliders.
5. **Categorized & Filterable Technical Skills Matrix**
   - Interactive category filtering for Programming Languages, Machine Learning & RL, Embedded & Robotics, Web & Backend, and Tools/CAD.
6. **Education & Certifications Timeline**
   - Lovely Professional University (B.Tech CSE - CGPA: 9.80/10.0), Senior Secondary & Secondary education, CodeTantra Python certification, Udemy Git bootcamp, and NeoColab C certification.
7. **One-Click Contact & Copy Actions**
   - Instant copy-to-clipboard buttons for email (`skmd.aarif5391@gmail.com`) and phone (`+91 99102 24613`), direct mail dispatch, and social profiles.

---

## 🚀 How to Run Locally

You can preview the website immediately using the included start script or Python's built-in HTTP server:

```bash
./start.sh
# Or run: python3 -m http.server 3000
```
Open your browser and navigate to `http://localhost:3000`.

---

## 🌐 Instant Deployment

### Vercel (1-Click Free Hosting)
1. Go to [Vercel.com](https://vercel.com) and import your `portfolio` GitHub repository.
2. Framework Preset: **Other**.
3. Root Directory: `./`.
4. Click **Deploy** — your portfolio goes live instantly with global CDN caching.

### GitHub Pages
1. Go to **Settings** > **Pages** in your GitHub repository.
2. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
3. Select branch **`main`** and folder **`/ (root)`**, then click **Save**.
4. Your site will be live at `https://skmdaarif.github.io/portfolio/`.

---

## 📂 Project Architecture

```
resume-portfolio/
├── index.html          # Core single-page web app with semantic sections & modals
├── css/
│   └── style.css       # Obsidian glassmorphism styles, glowing gradients, animations
├── js/
│   ├── main.js         # Navigation, typed animations, Swiper sliders, modal popup handlers
│   ├── particles.js    # Canvas particle constellation / neural network simulation
│   └── simulations.js  # Live interactive Password Entropy & ESP32 Mahalanobis calculators
├── start.sh            # Quickstart local dev server launcher
└── README.md           # Documentation & deployment guide
```
