import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaTrophy } from 'react-icons/fa';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './Certification.module.css';

// Import certificate files from assets
import oracleDataSciCert from '../../assets/DataScience_Oracle_eCerti.pdf';
import oracleGenAICert from '../../assets/Oracle_GenAI_eCerti.pdf';
import tataCert from '../../assets/tata_certificate.pdf';
import cyberSecCert from '../../assets/Cyber_Security_Linkedln.PDF';
import jkInfotechCert from '../../assets/Jk Infotech.pdf';

const achievements = [
  {
    id: 'ach-1',
    title: 'Hackathon Champion — 1st Position',
    issuer: 'Pune Intercollegiate Hackathon',
    year: '2026',
    description:
      'Secured 1st Position among 30+ competing engineering teams by architecting and presenting NavEye — an AI-powered assistive wearable with real-time YOLOv8 spatial obstacle detection for visually impaired individuals.',
    tag: 'Competitive Achievement',
  },
];

const certifications = [
  {
    id: 1,
    title: 'Microsoft Certified: Software Development & Cybersecurity',
    issuer: 'Microsoft',
    date: '2025',
    credentialId: 'MS-DEV-SEC',
    description:
      'Industry certification validating software engineering principles, secure coding methodologies, application security, and cybersecurity essentials.',
    skills: ['Software Development', 'Cybersecurity', 'Application Security', 'Best Practices'],
  },
  {
    id: 2,
    title: 'Advanced Data Structures & Algorithms in Java',
    issuer: 'Udemy',
    date: '2025',
    credentialId: 'UDEMY-DSA-JAVA',
    description:
      'Comprehensive masterclass covering complex algorithmic problems, time-space complexity optimization, graphs, trees, dynamic programming, and Java concurrency.',
    skills: ['Java', 'Algorithms', 'Data Structures', 'Problem Solving'],
  },
  {
    id: 3,
    title: 'Oracle Data Science Professional',
    issuer: 'Oracle',
    date: '2024',
    credentialId: 'ORACLE-DS-001',
    description:
      'Professional certification in Data Science covering data analysis, machine learning pipelines and Oracle Cloud infrastructure for intelligent data solutions.',
    skills: ['Data Science', 'Machine Learning', 'Oracle Cloud', 'Analytics'],
    link: oracleDataSciCert,
  },
  {
    id: 4,
    title: 'Oracle Generative AI Professional',
    issuer: 'Oracle',
    date: '2024',
    credentialId: 'ORACLE-GAI-002',
    description:
      'Certification validating knowledge in Large Language Models (LLMs), prompt engineering paradigms, generative model fine-tuning, and OCI Generative AI service integrations.',
    skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'Oracle AI'],
    link: oracleGenAICert,
  },
  {
    id: 5,
    title: 'Tata Data Visualization',
    issuer: 'Tata Group',
    date: '2024',
    credentialId: 'TATA-DV-003',
    description:
      'Certification in business intelligence, executive dashboard design, data storytelling, and analytical visualization frameworks.',
    skills: ['Data Visualization', 'Power BI', 'Business Intelligence'],
    link: tataCert,
  },
  {
    id: 6,
    title: 'Cybersecurity Fundamentals',
    issuer: 'LinkedIn Learning',
    date: '2024',
    credentialId: 'LI-CS-005',
    description:
      'Fundamentals covering threat identification, defense mechanisms, and network security protocols.',
    skills: ['Cybersecurity', 'Threat Analysis', 'Network Security'],
    link: cyberSecCert,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Certification() {
  return (
    <section id="certifications" className={styles.certification}>
      <SectionHeader
        title="Achievements & Certifications"
        subtitle="Hackathon recognition and professional credentials validating technical competence"
      />

      {/* Achievement Spotlight */}
      <div className={styles.spotlightContainer}>
        {achievements.map((ach) => (
          <motion.div
            key={ach.id}
            className={styles.achievementCard}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.trophyIconWrapper}>
              <FaTrophy />
            </div>
            <div className={styles.achievementContent}>
              <div className={styles.achievementHeader}>
                <span className={styles.achievementTag}>{ach.tag}</span>
                <span className={styles.achievementYear}>{ach.year}</span>
              </div>
              <h3 className={styles.achievementTitle}>{ach.title}</h3>
              <p className={styles.achievementIssuer}>{ach.issuer}</p>
              <p className={styles.achievementDesc}>{ach.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.certGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            className={styles.certCard}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <div className={styles.cardTop}>
              <div className={styles.iconWrapper}>
                <FaCertificate />
              </div>
              <div className={styles.dateBadge}>
                <FaCalendarAlt />
                <span>{cert.date}</span>
              </div>
            </div>

            <h3 className={styles.certTitle}>{cert.title}</h3>
            <p className={styles.issuer}>{cert.issuer}</p>
            <p className={styles.certDescription}>{cert.description}</p>

            <div className={styles.skillTags}>
              {cert.skills.map((skill) => (
                <span key={skill} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>

            {cert.link && (
              <motion.a
                href={cert.link}
                className={styles.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                View Certificate <FaExternalLinkAlt />
              </motion.a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
