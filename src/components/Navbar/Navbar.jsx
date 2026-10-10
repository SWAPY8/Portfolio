import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiMenuAlt3, 
  HiX, 
  HiHome, 
  HiUser, 
  HiAcademicCap, 
  HiBriefcase, 
  HiFolder, 
  HiBadgeCheck, 
  HiDocumentText, 
  HiMail 
} from 'react-icons/hi';
import { FaSun, FaMoon } from 'react-icons/fa';
import resumePdf from '../../assets/Swapnil_CV.pdf';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Home', href: '#home', icon: HiHome },
  { label: 'About', href: '#about', icon: HiUser },
  { label: 'Education', href: '#education', icon: HiAcademicCap },
  { label: 'Experience', href: '#internship', icon: HiBriefcase },
  { label: 'Projects', href: '#projects', icon: HiFolder },
  { label: 'Certifications', href: '#certifications', icon: HiBadgeCheck },
  { label: 'Contact', href: '#contact', icon: HiMail },
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

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close mobile menu on window resize above 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
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

            {/* Mobile Toggle Button */}
            <button
              className={styles.menuToggle}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Dropdown & Backdrop (Portaled to document.body) */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Soft dim backdrop */}
              <motion.div
                className={styles.dropdownBackdrop}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeMobile}
              />

              {/* Floating Dropdown Card (Slide Menu / Neumorphic Dropdown) */}
              <motion.div
                className={styles.dropdownCard}
                initial={{ opacity: 0, scale: 0.92, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -10 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.dropdownList}>
                  {navItems.map(({ label, href, icon: Icon }) => {
                    const sectionId = href.replace('#', '');
                    const isActive = activeSection === sectionId;
                    return (
                      <a
                        key={href}
                        href={href}
                        className={`${styles.dropdownItem} ${isActive ? styles.itemActive : ''}`}
                        onClick={closeMobile}
                      >
                        <Icon className={styles.itemIcon} />
                        <span className={styles.itemLabel}>{label}</span>
                      </a>
                    );
                  })}

                  {/* Resume Download Item */}
                  <a
                    href={resumePdf}
                    download="Swapnil_Gandhale_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.dropdownItem}
                    onClick={closeMobile}
                  >
                    <HiDocumentText className={styles.itemIcon} />
                    <span className={styles.itemLabel}>Resume</span>
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Navbar;
