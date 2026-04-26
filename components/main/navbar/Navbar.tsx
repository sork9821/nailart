import Image from 'next/image'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        <div className={styles.logo}>
          <div className={styles.logoImgWrap}>
            <Image
              src="/nailart.png"
              alt="Nailart AI"
              fill
              sizes="30px"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className={styles.logoImg}
              priority
            />
          </div>
          <span className={styles.logoText}>Nailart AI</span>
        </div>

        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#features" className={styles.navLink}>Features</a>
          <a href="#pricing" className={styles.navLink}>Pricing</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>

        <div className={styles.actions}>
          <button className={styles.getStarted}>Get started</button>
        </div>

      </div>
    </header>
  )
}
