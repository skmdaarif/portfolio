import React, { useState, useEffect } from 'react';
import { Sliders, Shield, Microchip, Copy, Check, RotateCcw, AlertTriangle } from 'lucide-react';

export default function InteractivePlayground({ onShowToast }) {
  // --- Password Generator State ---
  const [pwdLength, setPwdLength] = useState(20);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [entropy, setEntropy] = useState(128);
  const [copiedPwd, setCopiedPwd] = useState(false);

  const generatePassword = () => {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let pool = '';
    let poolSize = 0;
    if (useUpper) { pool += upper; poolSize += 26; }
    if (useLower) { pool += lower; poolSize += 26; }
    if (useNumbers) { pool += numbers; poolSize += 10; }
    if (useSymbols) { pool += symbols; poolSize += symbols.length; }

    if (pool.length === 0) {
      setPassword('Select at least one character set');
      setEntropy(0);
      return;
    }

    const array = new Uint32Array(pwdLength);
    window.crypto.getRandomValues(array);
    let pwd = '';
    for (let i = 0; i < pwdLength; i++) {
      pwd += pool[array[i] % pool.length];
    }

    const calculatedEntropy = Math.round(pwdLength * Math.log2(poolSize));
    setPassword(pwd);
    setEntropy(calculatedEntropy);
  };

  useEffect(() => {
    generatePassword();
  }, [pwdLength, useUpper, useLower, useNumbers, useSymbols]);

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    setCopiedPwd(true);
    if (onShowToast) onShowToast('Password copied to clipboard!');
    setTimeout(() => setCopiedPwd(false), 2000);
  };

  // --- ESP32 Anomaly Detector State ---
  const [pm25, setPm25] = useState(15);
  const [temp, setTemp] = useState(24.0);
  const [voc, setVoc] = useState(120);

  const mean = { pm25: 15.0, temp: 24.0, voc: 120.0 };
  const std = { pm25: 6.0, temp: 2.5, voc: 40.0 };

  const z1 = (pm25 - mean.pm25) / std.pm25;
  const z2 = (temp - mean.temp) / std.temp;
  const z3 = (voc - mean.voc) / std.voc;

  const mahalanobis = Math.sqrt(Math.max(0, (z1 * z1) + (z2 * z2) + (z3 * z3) - (0.35 * z1 * z3))).toFixed(2);

  const injectHazard = () => {
    setPm25(90);
    setTemp(37.5);
    setVoc(460);
  };

  const resetSensors = () => {
    setPm25(15);
    setTemp(24.0);
    setVoc(120);
  };

  return (
    <section id="playground" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Sliders size={14} />
          <span>INTERACTIVE PLAYGROUND</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
          Live Algorithm & IoT Simulators
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Test interactive working algorithms from my resume projects in real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Simulator 1: Cryptographic Entropy */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Shield size={16} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Cryptographic Entropy Engine</h3>
                  <p className="text-xs font-mono text-slate-400">Secrets CSPRNG & E = L · log₂(R)</p>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {entropy} bits
              </span>
            </div>

            <div className="relative mt-4">
              <input 
                type="text" 
                readOnly 
                value={password}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 font-mono text-cyan-300 text-sm tracking-wider focus:outline-none"
              />
              <button 
                onClick={copyPassword}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-white"
                title="Copy Password"
              >
                {copiedPwd ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>

            <div className="space-y-4 mt-6">
              <div>
                <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                  <span>Password Length:</span>
                  <span className="text-cyan-400 font-bold">{pwdLength}</span>
                </div>
                <input 
                  type="range" 
                  min="8" 
                  max="64" 
                  value={pwdLength} 
                  onChange={(e) => setPwdLength(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono text-slate-300">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={useUpper} onChange={(e) => setUseUpper(e.target.checked)} className="rounded text-cyan-500" />
                  <span>Uppercase (A-Z)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={useLower} onChange={(e) => setUseLower(e.target.checked)} className="rounded text-cyan-500" />
                  <span>Lowercase (a-z)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={useNumbers} onChange={(e) => setUseNumbers(e.target.checked)} className="rounded text-cyan-500" />
                  <span>Digits (0-9)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={useSymbols} onChange={(e) => setUseSymbols(e.target.checked)} className="rounded text-cyan-500" />
                  <span>Symbols (!@#$)</span>
                </label>
              </div>
            </div>
          </div>

          <button 
            onClick={generatePassword}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw size={14} />
            <span>Regenerate Password</span>
          </button>
        </div>

        {/* Simulator 2: ESP32 Anomaly Detector */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Microchip size={16} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">ESP32 Mahalanobis Anomaly Engine</h3>
                  <p className="text-xs font-mono text-slate-400">Multivariate Covariance Matrix D_M</p>
                </div>
              </div>
              <div>
                {mahalanobis < 2.5 ? (
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">NORMAL</span>
                ) : mahalanobis < 4.0 ? (
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40">ELEVATED</span>
                ) : (
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-500/20 text-red-300 border border-red-500/40 animate-pulse">ANOMALY</span>
                )}
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-slate-400">Mahalanobis Distance (D_M):</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400 mt-0.5">{mahalanobis}</div>
              </div>
              <div className="text-right">
                <div className="text-[11px] font-mono text-slate-500">Threshold</div>
                <div className="text-xs font-mono text-amber-400 font-bold">&gt; 3.50 σ</div>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <div>
                <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                  <span>PMS7003 Particulate (PM2.5):</span>
                  <span className="text-emerald-400 font-bold">{pm25} µg/m³</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="150" 
                  value={pm25} 
                  onChange={(e) => setPm25(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                  <span>BME280 Ambient Temp:</span>
                  <span className="text-emerald-400 font-bold">{temp.toFixed(1)} °C</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="50" 
                  step="0.5"
                  value={temp} 
                  onChange={(e) => setTemp(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                  <span>SGP30 Total VOCs:</span>
                  <span className="text-emerald-400 font-bold">{voc} ppb</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="600" 
                  value={voc} 
                  onChange={(e) => setVoc(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={injectHazard}
              className="flex-1 py-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/40 text-xs font-bold font-mono tracking-wider transition-all"
            >
              Inject Smoke / Hazard
            </button>
            <button 
              onClick={resetSensors}
              className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-all"
            >
              Reset
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
