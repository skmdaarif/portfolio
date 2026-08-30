/**
 * Sheikh Md Aarif Al Zubair - Main Portfolio Interaction Logic
 * Updated: Removed GitHub links for hardware/embedded projects that are not on GitHub.
 */

// Project Data for Interactive Modals
const projectsData = {
  'password-generator': {
    title: 'Secure Password Generator (CLI + GUI)',
    subtitle: 'Cross-Platform Desktop & Command-Line Cryptographic Utility',
    date: 'Mar 2026 – Apr 2026',
    badge: 'Desktop & Security',
    overview: 'Engineered an ultra-secure, cross-platform password generation software providing both high-throughput CLI workflows and an intuitive Tkinter GUI interface. Utilizes cryptographically secure pseudo-random number generation (CSPRNG) backed by Python\'s native secrets module.',
    metrics: [
      { label: 'Entropy Standard', val: 'CSPRNG (secrets)' },
      { label: 'CI/CD Targets', val: 'Linux, Win, macOS' },
      { label: 'Deployment', val: 'PyInstaller & GH Pages' }
    ],
    features: [
      'Engineered a unified cross-platform desktop password generation tool supporting both Command Line Interface (CLI) and Tkinter Graphical User Interface (GUI).',
      'Implemented cryptographically secure password generation logic utilizing Python’s native secrets module for robust entropy generation.',
      'Automated multi-platform production application builds for Linux, Windows, and macOS operating systems via GitHub Actions CI/CD pipelines.',
      'Packaged standalone distribution binaries using PyInstaller and deployed a public-facing project landing page hosted on GitHub Pages.'
    ],
    techStack: ['Python', 'Tkinter', 'PyInstaller', 'GitHub Actions', 'CI/CD', 'Git', 'GitHub Pages'],
    githubUrl: 'https://github.com/skmdaarif',
    demoType: 'password'
  },
  'environmental-rover': {
    title: 'Semi-Autonomous Environmental Surveillance and Fire Response Rover',
    subtitle: 'ESP32 Robotic Platform with Tri-Directional Flame Localization & Mahalanobis Anomaly Engine',
    date: 'Feb 2026 – Mar 2026',
    badge: 'Robotics, Edge AI & IoT',
    overview: 'Architected a low-cost embedded robotic rover on a single ESP32 microcontroller coordinating real-time navigation, environmental sensing, tri-directional flame tracking, and active fire suppression payloads with robust hardware power regulation.',
    metrics: [
      { label: 'Microcontroller', val: 'ESP32 Dual-Core' },
      { label: 'Sensors Integrated', val: 'PMS7003, MQ135, DHT22, IR Flame' },
      { label: 'Anomaly Engine', val: 'Mahalanobis Covariance' }
    ],
    features: [
      'Architected a low-cost embedded robotic rover on a single ESP32 microcontroller coordinating real-time navigation, environmental sensing, and active suppression payloads.',
      'Integrated multi-sensor array acquiring PM1.0, PM2.5, PM10 particulate matter, volatile organic compounds (VOCs), temperature, and humidity, implementing Mahalanobis distance covariance-aware statistical algorithms for real-time anomaly detection.',
      'Implemented directional flame localization using a tri-directional IR sensor array coupled with real-time sensor fusion logic for target tracking.',
      'Transmitted continuous atmospheric telemetry and anomaly alerts over Wi-Fi to a Blynk IoT cloud server for remote visualization.',
      'Engineered active fire response payload featuring a MOSFET-switched water pump and PWM servo-controlled oscillatory spray mechanism with automated safety state-transitions.',
      'Designed robust hardware power management using LM2596 buck converter regulation, IRF540N MOSFET switches, and flyback diode snubbers to prevent voltage spikes under load.'
    ],
    techStack: ['Embedded C++', 'ESP32', 'Statistical Modeling (Mahalanobis Distance)', 'PMS7003', 'MQ135', 'DHT22', 'IR Flame Sensors', 'Blynk IoT', 'Wi-Fi', 'PWM', 'MOSFET Circuitry', 'LM2596'],
    githubUrl: null,
    demoType: 'anomaly'
  },
  'home-automation': {
    title: 'Smart Home Automation System',
    subtitle: 'WiFi-Enabled IoT Appliance Controller with Remote Cloud Interface',
    date: 'Apr 2025 – Jun 2025',
    badge: 'IoT & Remote Control',
    overview: 'Developed a robust WiFi-enabled home automation hardware hub capable of remotely switching and scheduling high-voltage AC electrical appliances through a mobile application dashboard over Blynk Cloud.',
    metrics: [
      { label: 'Microcontroller', val: 'ESP32 32-bit' },
      { label: 'Protocol', val: 'WiFi / Blynk IoT' },
      { label: 'Hardware Interface', val: 'Relay Modules & Feedback' }
    ],
    features: [
      'Developed a WiFi-enabled home automation system for remote appliance control via a mobile application.',
      'Integrated relay modules with Blynk IoT for real-time device management and continuous state feedback.',
      'Implemented communication between embedded hardware and mobile interface over local networks and internet interfaces.'
    ],
    techStack: ['Embedded C++', 'Internet of Things', 'ESP32', 'Blynk IoT', 'Relay Systems'],
    githubUrl: null,
    demoType: 'none'
  }
};

// ==========================================
// Main UI Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initTypingEffect();
  initSwipers();
  initSkillFilters();
  initModals();
  initStatsCounter();
  initMobileMenu();
  initCopyButtons();
  initContactForm();
});

// 1. Typing Headline Effect
function initTypingEffect() {
  const typingElement = document.getElementById('typing-headline');
  if (!typingElement) return;

  const words = [
    'Autonomous UAV Navigation & RL Researcher',
    'Embedded Systems & Robotics Engineer',
    'IIT Delhi Research Intern',
    'First-Principles Deep Learning Developer',
    'C++ & Python Software Engineer'
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 85;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 90;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typeSpeed = 1800;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

// 2. Swiper.js Carousels
function initSwipers() {
  if (document.querySelector('.projects-swiper')) {
    new Swiper('.projects-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: false,
      autoplay: {
        delay: 6000,
        disableOnInteraction: true,
      },
      pagination: {
        el: '.projects-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.projects-next',
        prevEl: '.projects-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 28,
        }
      }
    });
  }
}

// 3. Skill Filter Matrix
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'bg-cyan-500/20', 'text-cyan-300', 'border-cyan-400/50'));
      btn.classList.add('active', 'bg-cyan-500/20', 'text-cyan-300', 'border-cyan-400/50');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.classList.add('animate-fadeIn');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 4. Interactive Project Detail Modals
function initModals() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalButtons = document.querySelectorAll('[data-project-target]');

  if (!modal) return;

  modalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project-target');
      const data = projectsData[projectId];
      if (!data) return;

      document.getElementById('modal-title').textContent = data.title;
      document.getElementById('modal-subtitle').textContent = data.subtitle;
      document.getElementById('modal-date').textContent = data.date;
      document.getElementById('modal-badge').textContent = data.badge;
      document.getElementById('modal-overview').textContent = data.overview;

      // Metrics
      const metricsContainer = document.getElementById('modal-metrics');
      metricsContainer.innerHTML = data.metrics.map(m => `
        <div class="bg-slate-800/80 border border-slate-700/60 p-3 rounded-lg text-center">
          <div class="text-xs text-slate-400 font-mono">${m.label}</div>
          <div class="text-sm md:text-base font-bold text-cyan-400 mt-1">${m.val}</div>
        </div>
      `).join('');

      // Features
      const featList = document.getElementById('modal-features');
      featList.innerHTML = data.features.map(f => `
        <li class="flex items-start gap-2.5 text-sm text-slate-300">
          <span class="text-cyan-400 mt-0.5">▹</span>
          <span>${f}</span>
        </li>
      `).join('');

      // Tech Stack Badges
      const techBox = document.getElementById('modal-tech');
      techBox.innerHTML = data.techStack.map(t => `
        <span class="px-2.5 py-1 text-xs font-mono rounded bg-slate-800 text-cyan-300 border border-cyan-500/20">${t}</span>
      `).join('');

      // Links: Only display GitHub button if githubUrl is defined
      const githubLink = document.getElementById('modal-github-link');
      if (githubLink) {
        if (data.githubUrl) {
          githubLink.href = data.githubUrl;
          githubLink.style.display = 'inline-flex';
        } else {
          githubLink.style.display = 'none';
        }
      }

      // Show modal
      modal.classList.remove('hidden');
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// 5. Animated Stats Counter
function initStatsCounter() {
  const counters = document.querySelectorAll('.counter-val');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const isDecimal = target % 1 !== 0;
          const duration = 1600;
          const steps = 50;
          const stepTime = duration / steps;
          let current = 0;
          const increment = target / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = isDecimal ? target.toFixed(2) : Math.round(target);
              clearInterval(timer);
            } else {
              counter.textContent = isDecimal ? current.toFixed(2) : Math.round(current);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats-section');
  if (statsSection) observer.observe(statsSection);
}

// 6. Mobile Nav Menu
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// 7. Direct Copy Buttons with Visual Feedback
function initCopyButtons() {
  const copyEmail = document.getElementById('btn-copy-email');
  const copyPhone = document.getElementById('btn-copy-phone');

  if (copyEmail) {
    copyEmail.addEventListener('click', () => {
      navigator.clipboard.writeText('skmd.aarif5391@gmail.com');
      showToast('Copied skmd.aarif5391@gmail.com to clipboard!');
    });
  }

  if (copyPhone) {
    copyPhone.addEventListener('click', () => {
      navigator.clipboard.writeText('+919910224613');
      showToast('Copied +91 99102 24613 to clipboard!');
    });
  }
}

// 8. Contact Form
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const message = document.getElementById('form-message').value;

    const mailto = `mailto:skmd.aarif5391@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)} (${encodeURIComponent(email)})&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;

    showToast('Launching email client to send message to Sheikh Md Aarif Al Zubair!');
  });
}

// Global Toast notification helper
function showToast(message) {
  let toast = document.getElementById('global-toast');
  if (!toast) return;
  toast.querySelector('span') ? toast.querySelector('span').textContent = message : toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}
