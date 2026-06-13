import { useMemo } from 'react';
import styles from './ParticleBackground.module.css';

function generateParticles(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 20,
    opacity: Math.random() * 0.3 + 0.1,
    drift: Math.floor(Math.random() * 60 - 30),
  }));
}

export default function ParticleBackground() {
  const particles = useMemo(() => generateParticles(18), []);

  return (
    <div className={styles.particleContainer}>
      {particles.map((p) => (
        <div
          key={p.id}
          className={styles.particle}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.x}%`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
