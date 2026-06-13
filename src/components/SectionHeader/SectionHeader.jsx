import { motion } from 'framer-motion';
import styles from './SectionHeader.module.css';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <motion.div
      className={styles.header}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.titleWrapper}>
        <span className={styles.watermark}>{title}</span>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.line} />
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.div>
  );
};

export default SectionHeader;
