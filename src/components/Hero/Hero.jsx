import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileImg from '../../assets/profile_picture.jpg';
import resumePdf from '../../assets/Swapnil_CV.pdf';
import styles from './Hero.module.css';

const roles = [
  'Full-Stack Developer',
  'AI & ML Engineer',
  'Java & Spring Boot Specialist',
];

const TYPING_SPEED = 90;
const DELETING_SPEED = 45;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, TYPING_SPEED);
      } else {
        // Finished typing – pause then start deleting
        timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, DELETING_SPEED);
      } else {
        // Finished deleting – move to next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        timeout = setTimeout(() => {}, PAUSE_AFTER_DELETE);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className={styles.hero}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* ---- Left: Content ---- */}
        <div className={styles.content}>
          <motion.p className={styles.greeting} variants={itemVariants}>
            👋 Hello, I&rsquo;m
          </motion.p>

          <motion.h1 className={styles.name} variants={itemVariants}>
            Swapnil <span className={styles.highlight}>Gandhale</span>
          </motion.h1>

          <motion.div className={styles.typingWrapper} variants={itemVariants}>
            <span className={styles.typingText}>{displayText}</span>
            <span className={styles.cursor} />
          </motion.div>

          <motion.p className={styles.description} variants={itemVariants}>
            A passionate Full-Stack Developer & AI Engineer dedicated to crafting
            scalable, intelligent web applications. Experienced in Java, Spring Boot,
            React, Python, and Machine Learning integrations.
          </motion.p>

          <motion.div className={styles.ctaButtons} variants={itemVariants}>
            <motion.a
              href={resumePdf}
              download="Swapnil_Gandhale_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#projects"
              className={styles.btnSecondary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>

        {/* ---- Right: Hero Visual ---- */}
        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <div className={styles.heroGlow} />
          <div className={styles.heroImageWrapper}>
            <div className={styles.heroImagePlaceholder}><img src={profileImg} alt="Swapnil Gandhale" /></div>
          </div>

          {/* Floating decorative elements */}
          <span
            className={`${styles.floatingElement} ${styles.float1}`}
          />
          <span
            className={`${styles.floatingElement} ${styles.float2}`}
          />
          <span
            className={`${styles.floatingElement} ${styles.float3}`}
          />
          <span
            className={`${styles.floatingElement} ${styles.float4}`}
          />
        </motion.div>
      </motion.div>

      {/* ---- Scroll Indicator ---- */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLine} />
        <small className={styles.scrollText}>Scroll</small>
      </div>
    </section>
  );
};

export default Hero;
