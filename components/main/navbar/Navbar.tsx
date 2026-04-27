'use client'

import Image from 'next/image'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'

export default function Navbar() {
  const { user, signOut } = useAuth()
  const avatarUrl = user?.user_metadata?.avatar_url as string | undefined
  const displayName = (user?.user_metadata?.full_name ?? user?.email ?? '') as string
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
          {user ? (
            <div className={styles.userArea}>
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt={displayName}
                  width={32}
                  height={32}
                  className={styles.avatar}
                />
              ) : (
                <div className={styles.avatarFallback}>
                  {displayName.charAt(0).toUpperCase()}
                </div>
              )}
              <button className={styles.signOut} onClick={signOut}>
                Sign out
              </button>
            </div>
          ) : (
            <Link href="/auth" className={styles.getStarted}>
              Get started
            </Link>
          )}
        </div>

      </div>
    </header>
  )
}
