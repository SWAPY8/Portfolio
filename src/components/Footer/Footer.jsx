import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import styles from './Footer.module.css';

const socialLinks = [
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/swapnil-gandhale', label: 'LinkedIn' },
  { icon: <FaGithub />, href: 'https://github.com/SWAPY8', label: 'GitHub' },
  { icon: <SiLeetcode />, href: 'https://leetcode.com/u/6aFOFsFi6w/', label: 'LeetCode' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p className={styles.copyright}>
          &copy; {currentYear} Swapnil Gandhale. All rights reserved.
        </p>

       
      </div>
    </footer>
  );
}
