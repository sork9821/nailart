import CybercoreBackground from './CybercoreBackground'
import styles from './HeroSection.module.css'

function BrandIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <rect x="1" y="7" width="19" height="13" rx="2" stroke="#00C8FF" strokeWidth="1.4" fill="rgba(0,200,255,0.07)" />
      <path d="M7.5 11L7.5 16L12.5 13.5L7.5 11Z" fill="#00C8FF" />
      <path d="M24 2L24.9 5.1L28 6L24.9 6.9L24 10L23.1 6.9L20 6L23.1 5.1L24 2Z" fill="#00C8FF" />
      <path d="M26.5 17.5L27 19.5L29 20L27 20.5L26.5 22.5L26 20.5L24 20L26 19.5L26.5 17.5Z" fill="#DC00FF" />
    </svg>
  )
}

function PlayCircleSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
      <polygon points="6.5,5 6.5,11 12,8" fill="currentColor" />
    </svg>
  )
}

function ThumbnailAI() {
  return (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.thumbSvg}>
      <defs>
        <linearGradient id="aiBg" x1="0" y1="0" x2="320" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#000d1a" />
          <stop offset="100%" stopColor="#001830" />
        </linearGradient>
        <radialGradient id="aiGlow" cx="160" cy="90" r="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C8FF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#00C8FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="320" height="180" fill="url(#aiBg)" />
      <ellipse cx="160" cy="90" rx="100" ry="90" fill="url(#aiGlow)" />
      {Array.from({ length: 5 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={36 * i + 18} x2="320" y2={36 * i + 18} stroke="rgba(0,200,255,0.07)" strokeWidth="1" />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`v${i}`} x1={40 * i + 20} y1="0" x2={40 * i + 20} y2="180" stroke="rgba(0,200,255,0.07)" strokeWidth="1" />
      ))}
      <circle cx="160" cy="90" r="65" stroke="rgba(0,200,255,0.12)" strokeWidth="1" fill="none" />
      <circle cx="160" cy="90" r="45" stroke="rgba(0,200,255,0.18)" strokeWidth="1" fill="none" />
      <circle cx="160" cy="90" r="28" stroke="rgba(0,200,255,0.25)" strokeWidth="1" fill="none" />
      <polygon points="149,73 149,107 179,90" fill="rgba(0,200,255,0.88)" />
      <path d="M8 20 L8 8 L20 8" stroke="rgba(0,200,255,0.4)" strokeWidth="1.2" fill="none" />
      <path d="M312 20 L312 8 L300 8" stroke="rgba(0,200,255,0.4)" strokeWidth="1.2" fill="none" />
      <path d="M8 160 L8 172 L20 172" stroke="rgba(0,200,255,0.4)" strokeWidth="1.2" fill="none" />
      <path d="M312 160 L312 172 L300 172" stroke="rgba(0,200,255,0.4)" strokeWidth="1.2" fill="none" />
      <rect x="12" y="146" width="145" height="9" rx="4.5" fill="rgba(255,255,255,0.72)" />
      <rect x="12" y="160" width="95" height="7" rx="3.5" fill="rgba(255,255,255,0.38)" />
      <rect x="267" y="11" width="42" height="18" rx="9" fill="rgba(0,200,255,0.12)" stroke="rgba(0,200,255,0.5)" strokeWidth="1" />
      <text x="288" y="24" textAnchor="middle" fill="#00C8FF" fontSize="9" fontWeight="700" fontFamily="system-ui,sans-serif">AI</text>
    </svg>
  )
}

function ThumbnailAction() {
  return (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.thumbSvg}>
      <defs>
        <linearGradient id="actBg" x1="0" y1="0" x2="320" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0e0008" />
          <stop offset="100%" stopColor="#220300" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#actBg)" />
      <polygon points="170,0 198,0 85,180 57,180" fill="rgba(255,80,10,0.14)" />
      <polygon points="208,0 230,0 117,180 95,180" fill="rgba(255,80,10,0.09)" />
      <polygon points="244,0 260,0 147,180 131,180" fill="rgba(255,80,10,0.06)" />
      <ellipse cx="275" cy="45" rx="70" ry="55" fill="rgba(255,110,10,0.13)" />
      <rect x="13" y="13" width="130" height="11" rx="5.5" fill="rgba(255,255,255,0.78)" />
      <rect x="13" y="28" width="86" height="7.5" rx="3.75" fill="rgba(255,255,255,0.43)" />
      <rect x="13" y="150" width="120" height="8.5" rx="4.25" fill="rgba(255,110,20,0.65)" />
      <rect x="13" y="163" width="78" height="6.5" rx="3.25" fill="rgba(255,255,255,0.28)" />
      <path d="M250 62L251.8 67.2L257 69L251.8 70.8L250 76L248.2 70.8L243 69L248.2 67.2Z" fill="rgba(255,190,20,0.75)" />
      <path d="M270 91L271.2 94.8L275 96L271.2 97.2L270 101L268.8 97.2L265 96L268.8 94.8Z" fill="rgba(255,190,20,0.5)" />
    </svg>
  )
}

function ThumbnailVlog() {
  return (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.thumbSvg}>
      <defs>
        <linearGradient id="vlBg" x1="0" y1="0" x2="320" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#080015" />
          <stop offset="100%" stopColor="#12002a" />
        </linearGradient>
        <radialGradient id="vlGlow" cx="160" cy="150" r="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#DC00FF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#DC00FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="320" height="180" fill="url(#vlBg)" />
      <ellipse cx="160" cy="155" rx="155" ry="120" fill="url(#vlGlow)" />
      <line x1="0" y1="112" x2="320" y2="112" stroke="rgba(220,0,255,0.15)" strokeWidth="1" />
      <polygon points="0,180 55,82 110,140 175,72 235,118 275,90 320,105 320,180" fill="rgba(90,0,140,0.32)" />
      <polygon points="0,180 35,112 75,142 115,97 155,122 195,87 235,108 275,97 320,102 320,180" fill="rgba(70,0,110,0.42)" />
      <circle cx="48" cy="32" r="1.5" fill="rgba(255,255,255,0.6)" />
      <circle cx="128" cy="22" r="1" fill="rgba(255,255,255,0.5)" />
      <circle cx="198" cy="37" r="1.5" fill="rgba(255,255,255,0.65)" />
      <circle cx="270" cy="27" r="1.1" fill="rgba(255,255,255,0.4)" />
      <circle cx="88" cy="52" r="0.9" fill="rgba(255,255,255,0.3)" />
      <circle cx="308" cy="47" r="1.4" fill="rgba(255,255,255,0.5)" />
      <circle cx="235" cy="18" r="1.1" fill="rgba(255,255,255,0.45)" />
      <rect x="13" y="13" width="138" height="9" rx="4.5" fill="rgba(255,255,255,0.73)" />
      <rect x="13" y="26" width="92" height="7" rx="3.5" fill="rgba(255,255,255,0.39)" />
      <path d="M293 16C293 13.2 288.5 11 286.5 13.5C284.5 11 280 13.2 280 16C280 20.5 286.5 26 286.5 26C286.5 26 293 20.5 293 16Z" fill="rgba(220,0,255,0.68)" />
    </svg>
  )
}

export default function HeroSection() {
  return (
    <section className={styles.wrapper}>
      <CybercoreBackground />
      <div className={styles.overlay}>
        <div className={styles.inner}>

          <div className={styles.left}>

            <h1 className={styles.headline}>
              클릭을 부르는<br />
              <span className={styles.accent}>썸네일</span>을<br />
              <span className={styles.accent}>AI</span>가 완성합니다
            </h1>

            <p className={styles.sub}>
              텍스트 한 줄 입력으로 조회수를 폭발시키는<br />
              유튜브 썸네일을 3초 만에 생성하세요
            </p>

            <div className={styles.ctaRow}>
              <button className={styles.ctaPrimary}>Get Started</button>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <strong>10,000+</strong>
                <span>썸네일 생성</span>
              </div>
              <div className={styles.statDiv} />
              <div className={styles.stat}>
                <strong>2.4×</strong>
                <span>평균 CTR 향상</span>
              </div>
              <div className={styles.statDiv} />
              <div className={styles.stat}>
                <strong>3초</strong>
                <span>생성 시간</span>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.cards}>
              <div className={`${styles.card} ${styles.cardBack1}`}>
                <ThumbnailAction />
              </div>
              <div className={`${styles.card} ${styles.cardFront}`}>
                <ThumbnailAI />
              </div>
              <div className={`${styles.card} ${styles.cardBack2}`}>
                <ThumbnailVlog />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
