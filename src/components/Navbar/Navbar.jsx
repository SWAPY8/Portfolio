import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#internship' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'light';
  });

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Scroll detection with RAF throttling to eliminate scroll stutter
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 50;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={closeMobile}>
          Port<span>folio</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className={styles.navLinks}>
          {navItems.map(({ label, href }) => {
            const sectionId = href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                >
                  {label}
                  <span className={styles.underline} />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Actions: Theme Mode Toggle & Mobile Menu */}
        <div className={styles.navActions}>
          <motion.button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            title={theme === 'dark' ? 'Switch to Light Neumorphic Mode' : 'Switch to Dark Neumorphic Mode'}
          >
            <span className={styles.themeIconWrapper}>
              {theme === 'dark' ? (
                <FaSun className={styles.sunIcon} />
              ) : (
                <FaMoon className={styles.moonIcon} />
              )}
            </span>
            <span className={styles.themeLabel}>
              {theme === 'dark' ? 'Light' : 'Dark'}
            </span>
          </motion.button>

          {/* Mobile Toggle */}
          <button
            className={styles.menuToggle}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {navItems.map(({ label, href }, i) => {
              const sectionId = href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <motion.a
                  key={href}
                  href={href}
                  className={`${styles.mobileNavLink} ${isActive ? styles.active : ''}`}
                  onClick={closeMobile}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.3 }}
                >
                  {label}
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
