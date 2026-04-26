'use client'

import React, { useState, useEffect, CSSProperties } from 'react'
import styles from './CybercoreBackground.module.css'

export interface CybercoreBackgroundProps {
  beamCount?: number
}

const DEFAULT_BEAM_COUNT = 70

export default function CybercoreBackground({
  beamCount = DEFAULT_BEAM_COUNT,
}: CybercoreBackgroundProps) {
  const [beams, setBeams] = useState<
    Array<{ id: number; type: 'primary' | 'secondary'; style: CSSProperties }>
  >([])

  useEffect(() => {
    const generated = Array.from({ length: beamCount }).map((_, i) => {
      const riseDur = Math.random() * 3 + 5
      const fadeDur = riseDur
      const type = Math.random() < 0.15 ? 'secondary' : 'primary'
      return {
        id: i,
        type,
        style: {
          left: `${Math.random() * 100}%`,
          width: `${Math.floor(Math.random() * 2) + 1}px`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${riseDur}s, ${fadeDur}s`,
        },
      }
    })
    setBeams(generated)
  }, [beamCount])

  return (
    <div
      className={styles.scene}
      role="img"
      aria-label="Animated cybercore grid background"
    >
      <div className={styles.floor} />
      <div className={styles.mainColumn} />
      <div className={styles.lightStreamContainer}>
        {beams.map((beam) => (
          <div
            key={beam.id}
            className={`${styles.lightBeam} ${styles[beam.type]}`}
            style={beam.style}
          />
        ))}
      </div>
    </div>
  )
}
