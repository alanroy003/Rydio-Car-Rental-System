// src/components/HeroSleek.jsx
import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/hero.png";
import { heroStyles as styles } from "../../assets/dummyStyles";

export default function HeroSleek() {
  const wrapRef = useRef(null);
  const bgRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    function onMove(e) {
      const r = el.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const x = (clientX - r.left) / r.width;
      const y = (clientY - r.top) / r.height;
      setMouse({ x, y });
      el.style.setProperty("--mx", `${x}`);
      el.style.setProperty("--my", `${y}`);
    }

    function onLeave() {
      setMouse({ x: 0.5, y: 0.5 });
      el.style.setProperty("--mx", `0.5`);
      el.style.setProperty("--my", `0.5`);
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("touchmove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchend", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchend", onLeave);
    };
  }, []);

  const maxTranslate = 14;
  const tx = (mouse.x - 0.5) * 2 * maxTranslate;
  const ty = (mouse.y - 0.5) * 2 * (maxTranslate * 0.55);

  return (
    <div className="">
      <div
        ref={wrapRef}
        className={styles.container}
        style={{ ["--mx"]: 0.5, ["--my"]: 0.5 }}
      >
        {/* Background */}
        <div
          ref={bgRef}
          className={styles.background}
          style={{
            transform: `translate3d(${tx * 0.55}px, ${
              ty * 0.55
            }px, 0) scale(1.03)`,
            transition: "transform 220ms cubic-bezier(.2,.9,.25,1)",
          }}
        >
          <img
            src={img1}
            alt="Futuristic car"
            className="w-full object-center opacity-95"
          />

          <div className={styles.gradientOverlay} />
        </div>

        {/* SVG sweeps */}
        <svg
          className={styles.svgContainer}
          viewBox="0 0 1590 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="gCenter" x1="0" x2="1">
              <stop offset="0%" stopColor="#8ee6ff" stopOpacity="0" />
              <stop offset="20%" stopColor="#58a6ff" stopOpacity="0.9" />
              <stop offset="80%" stopColor="#b78bff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ff88c2" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gSide" x1="0" x2="1">
              <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0" />
              <stop offset="30%" stopColor="#60a5fa" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
            </linearGradient>
            {/* White gradient for new line */}
            <linearGradient id="gWhite" x1="0" x2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="20%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="80%" stopColor="#f0f0f0" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            {/* Green gradient for new lines */}
            <linearGradient id="gGreen" x1="0" x2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="30%" stopColor="#34d399" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gOrange" x1="0" x2="1">
              <stop offset="0%" stopColor="#e9b361ff" stopOpacity="0.20" />
              <stop offset="20%" stopColor="#f29100ff" stopOpacity="0.65" />
              <stop offset="50%" stopColor="#ff8800ff" stopOpacity="0.9" />
              <stop offset="80%" stopColor="#f29100ff" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#e1b777ff" stopOpacity="0.20" />
            </linearGradient>
            <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Original paths */}
          <path
            id="centerPath"
            d="M320 420 C 520 220, 720 170, 880 190 C 1040 210, 1160 280, 1240 320"
            stroke="url(#gCenter)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow2)"
            className="center-path"
          />
          <path
            id="leftArc"
            d="M180 460 C 280 360, 480 300, 720 260"
            stroke="url(#gSide)"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow2)"
            className="side-path left"
          />
          <path
            id="rightArc"
            d="M1420 480 C 1240 360, 1040 300, 780 260"
            stroke="url(#gSide)"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow2)"
            className="side-path right"
          />

          {/* New white line - near center path */}
          <path
            id="whitePath"
            d="M320 450 C 520 220, 720 170, 880 190 C 1040 210, 1160 280, 1240 320"
            stroke="url(#gWhite)"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow2)"
            className="center-path"
            style={{ animationDelay: '0.8s' }}
          />

          <path
            id="orangePath"
            d="M180 380 C 220 460, 1040 300, 1280 260"
            stroke="url(#gOrange)"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow2)"
            className="center-path"
            style={{ animationDelay: '0.8s' }}
          />



          {/* New green line 1 - near left arc */}
          <path
            id="greenPath1"
            d="M180 490 C 280 390, 480 330, 720 290"
            stroke="url(#gGreen)"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow2)"
            className="side-path left"
            style={{ animationDelay: '1.1s' }}
          />

          {/* New green line 2 - near right arc */}
          <path
            id="greenPath2"
            d="M1420 490 C 1240 390, 1040 330, 780 290"
            stroke="url(#gGreen)"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow2)"
            className="side-path right"
            style={{ animationDelay: '1.4s' }}
          />
        </svg>

        {/* Refined glass CTA card */}
        <div className={styles.ctaContainer}>
          <div className={styles.ctaCard}>
            <div>
              <p className={styles.subtitle}>Rydio</p>
              <h3 className={styles.title}>Next‑gen fleet. Instant drive.</h3>
              <p className={styles.description}>
                Rent Your Dream Car. Transparent pricing. Book in seconds.
              </p>
            </div>

            <a href="/cars" className="flex items-center gap-3">
              <button className={styles.ctaButton}>
                <span className={styles.buttonText}>See fleet</span>
              </button>
            </a>

            <span aria-hidden className={styles.outline} />
          </div>
        </div>
      </div>
    </div>
  );
}