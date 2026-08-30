/**
 * Interactive Simulations for Sheikh Md Aarif Al Zubair's Projects
 * 1. Cryptographic Password Generator & Shannon Entropy Analyzer (Secrets module simulation)
 * 2. ESP32 Multivariate IoT Anomaly Detection Simulator (Mahalanobis Distance)
 */

// ==========================================
// 1. Password Generator & Entropy Engine
// ==========================================
class PasswordSimulation {
  constructor() {
    this.outputEl = document.getElementById('sim-pwd-output');
    this.entropyEl = document.getElementById('sim-pwd-entropy');
    this.strengthBar = document.getElementById('sim-pwd-strength-bar');
    this.strengthText = document.getElementById('sim-pwd-strength-text');
    this.lengthSlider = document.getElementById('sim-pwd-length');
    this.lengthDisplay = document.getElementById('sim-pwd-length-val');
    
    this.chkUpper = document.getElementById('chk-upper');
    this.chkLower = document.getElementById('chk-lower');
    this.chkNumbers = document.getElementById('chk-numbers');
    this.chkSymbols = document.getElementById('chk-symbols');
    this.generateBtn = document.getElementById('btn-generate-pwd');
    this.copyBtn = document.getElementById('btn-copy-pwd');

    if (!this.outputEl) return;
    this.bindEvents();
    this.generatePassword();
  }

  bindEvents() {
    this.lengthSlider.addEventListener('input', (e) => {
      this.lengthDisplay.textContent = e.target.value;
      this.generatePassword();
    });

    [this.chkUpper, this.chkLower, this.chkNumbers, this.chkSymbols].forEach(chk => {
      chk.addEventListener('change', () => this.generatePassword());
    });

    this.generateBtn.addEventListener('click', () => this.generatePassword());
    this.copyBtn.addEventListener('click', () => this.copyToClipboard());
  }

  generatePassword() {
    const len = parseInt(this.lengthSlider.value, 10);
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let pool = '';
    let poolSize = 0;
    if (this.chkUpper.checked) { pool += upper; poolSize += 26; }
    if (this.chkLower.checked) { pool += lower; poolSize += 26; }
    if (this.chkNumbers.checked) { pool += numbers; poolSize += 10; }
    if (this.chkSymbols.checked) { pool += symbols; poolSize += symbols.length; }

    if (pool.length === 0) {
      this.outputEl.value = 'Select at least one set';
      return;
    }

    // Cryptographic pseudo-random generation using window.crypto (equivalent to Python secrets)
    const array = new Uint32Array(len);
    window.crypto.getRandomValues(array);
    let pwd = '';
    for (let i = 0; i < len; i++) {
      pwd += pool[array[i] % pool.length];
    }

    this.outputEl.value = pwd;

    // Calculate Entropy: E = L * log2(R)
    const entropy = Math.round(len * Math.log2(poolSize));
    this.entropyEl.textContent = `${entropy} bits`;

    // Update Strength visualizer
    let pct = Math.min(100, Math.round((entropy / 128) * 100));
    this.strengthBar.style.width = `${pct}%`;

    if (entropy < 40) {
      this.strengthBar.className = 'h-full bg-red-500 rounded-full transition-all duration-300';
      this.strengthText.textContent = 'Weak (Easily Brute-Forced)';
      this.strengthText.className = 'text-xs font-mono text-red-400';
    } else if (entropy < 70) {
      this.strengthBar.className = 'h-full bg-amber-500 rounded-full transition-all duration-300';
      this.strengthText.textContent = 'Moderate (Standard)';
      this.strengthText.className = 'text-xs font-mono text-amber-400';
    } else if (entropy < 100) {
      this.strengthBar.className = 'h-full bg-emerald-500 rounded-full transition-all duration-300';
      this.strengthText.textContent = 'Strong (Cryptographically Robust)';
      this.strengthText.className = 'text-xs font-mono text-emerald-400';
    } else {
      this.strengthBar.className = 'h-full bg-cyan-400 shadow-[0_0_12px_#38bdf8] rounded-full transition-all duration-300';
      this.strengthText.textContent = 'Military Grade (Extremely Secure)';
      this.strengthText.className = 'text-xs font-mono text-cyan-400 font-bold';
    }
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.outputEl.value);
    showToast('Password copied to clipboard!');
  }
}

// ==========================================
// 2. ESP32 Multivariate Anomaly Detection Simulator
// ==========================================
class AnomalyDetectorSimulation {
  constructor() {
    this.pm25Slider = document.getElementById('sensor-pm25');
    this.tempSlider = document.getElementById('sensor-temp');
    this.vocSlider = document.getElementById('sensor-voc');

    this.pm25Val = document.getElementById('sensor-pm25-val');
    this.tempVal = document.getElementById('sensor-temp-val');
    this.vocVal = document.getElementById('sensor-voc-val');

    this.distanceDisplay = document.getElementById('mahalanobis-distance');
    this.statusBadge = document.getElementById('anomaly-status-badge');
    this.alertLog = document.getElementById('anomaly-alert-log');

    // Baseline stats (Mean & Standard Deviation for PMS7003 / BME280 / SGP30 indoor normal)
    this.mean = { pm25: 15.0, temp: 24.0, voc: 120.0 };
    this.std = { pm25: 6.0, temp: 2.5, voc: 40.0 };

    if (!this.pm25Slider) return;
    this.bindEvents();
    this.computeMahalanobis();
  }

  bindEvents() {
    [this.pm25Slider, this.tempSlider, this.vocSlider].forEach(slider => {
      slider.addEventListener('input', () => {
        this.updateLabels();
        this.computeMahalanobis();
      });
    });

    const injectBtn = document.getElementById('btn-inject-anomaly');
    if (injectBtn) {
      injectBtn.addEventListener('click', () => {
        this.pm25Slider.value = 88;
        this.tempSlider.value = 36;
        this.vocSlider.value = 450;
        this.updateLabels();
        this.computeMahalanobis();
      });
    }

    const resetBtn = document.getElementById('btn-reset-sensors');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.pm25Slider.value = 16;
        this.tempSlider.value = 24.2;
        this.vocSlider.value = 115;
        this.updateLabels();
        this.computeMahalanobis();
      });
    }
  }

  updateLabels() {
    this.pm25Val.textContent = `${this.pm25Slider.value} µg/m³`;
    this.tempVal.textContent = `${parseFloat(this.tempSlider.value).toFixed(1)} °C`;
    this.vocVal.textContent = `${this.vocSlider.value} ppb`;
  }

  computeMahalanobis() {
    const pm = parseFloat(this.pm25Slider.value);
    const temp = parseFloat(this.tempSlider.value);
    const voc = parseFloat(this.vocSlider.value);

    // Standardized vector components (Z-scores)
    const z1 = (pm - this.mean.pm25) / this.std.pm25;
    const z2 = (temp - this.mean.temp) / this.std.temp;
    const z3 = (voc - this.mean.voc) / this.std.voc;

    // Simplified diagonalized covariance matrix inverse estimation
    // D_M = sqrt( z1^2 + z2^2 + z3^2 - 0.4*z1*z3 )
    const distSq = Math.max(0, (z1 * z1) + (z2 * z2) + (z3 * z3) - (0.35 * z1 * z3));
    const dM = Math.sqrt(distSq);

    this.distanceDisplay.textContent = dM.toFixed(2);

    if (dM < 2.5) {
      this.statusBadge.innerHTML = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> NORMAL (Gaussian Baseline)</span>`;
      this.alertLog.textContent = 'All environmental telemetry channels are operating within nominal 95% confidence ellipsoid.';
      this.alertLog.className = 'text-xs font-mono text-slate-400';
    } else if (dM < 4.2) {
      this.statusBadge.innerHTML = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40"><span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span> ELEVATED DRIFT</span>`;
      this.alertLog.textContent = 'Covariance deviation detected across PM2.5 and VOC vectors. Minor environmental variance.';
      this.alertLog.className = 'text-xs font-mono text-amber-300';
    } else {
      this.statusBadge.innerHTML = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-red-500/20 text-red-300 border border-red-500/40"><span class="w-2 h-2 rounded-full bg-red-400 animate-bounce"></span> CRITICAL ANOMALY DETECTED</span>`;
      this.alertLog.textContent = '🚨 MULTIVARIATE ANOMALY TRIGGERED: D_M threshold exceeded (>3.5σ). Microcontroller alert dispatched via ESP32 WiFi.';
      this.alertLog.className = 'text-xs font-mono text-red-400 font-semibold';
    }
  }
}

// Global Toast notification helper
function showToast(message) {
  let toast = document.getElementById('global-toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

document.addEventListener('DOMContentLoaded', () => {
  new PasswordSimulation();
  new AnomalyDetectorSimulation();
});
