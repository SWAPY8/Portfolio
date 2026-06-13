import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './Certification.module.css';

// Import certificate files from assets
import oracleDataSciCert from '../../assets/DataScience_Oracle_eCerti.pdf';
import oracleGenAICert from '../../assets/Oracle_GenAI_eCerti.pdf';
import tataCert from '../../assets/tata_certificate.pdf';
import codsoftCert from '../../assets/codesoft_certi.pdf';
import cyberSecCert from '../../assets/Cyber_Security_Linkedln.PDF';
import neuaiCert from '../../assets/neuai_certi.jpg';
import willpowerCert from '../../assets/willpower_group.pdf';
import jkInfotechCert from '../../assets/Jk Infotech.pdf';

const certifications = [
  {
    id: 1,
    title: 'Oracle Data Science Professional',
    issuer: 'Oracle',
    date: '2024',
    credentialId: 'ORACLE-DS-001',
    description:
      'Professional certification in Data Science covering data analysis, machine learning fundamentals and Oracle Cloud infrastructure for data-driven applications.',
    skills: ['Data Science', 'Oracle Cloud', 'Machine Learning', 'Analytics'],
    link: oracleDataSciCert,
  },
  {
    id: 2,
    title: 'Oracle Generative AI Professional',
    issuer: 'Oracle',
    date: '2024',
    credentialId: 'ORACLE-GAI-002',
    description:
      'Certification covering generative AI concepts, large language models, prompt engineering and practical AI integration using Oracle Cloud services.',
    skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'Oracle Cloud'],
    link: oracleGenAICert,
  },
  {
    id: 3,
    title: 'Tata Data Visualization',
    issuer: 'Tata Group',
    date: '2024',
    credentialId: 'TATA-DV-003',
    description:
      'Certification in data visualization and business intelligence, covering dashboard creation, data storytelling, and visual analytics best practices.',
    skills: ['Data Visualization', 'Power BI', 'Tableau', 'Business Intelligence'],
    link: tataCert,
  },
  {
    id: 4,
    title: 'Web Development Certificate',
    issuer: 'CodSoft',
    date: '2024',
    credentialId: 'CODSOFT-WD-004',
    description:
      'Certification in web development covering HTML, CSS, JavaScript, responsive design and building interactive web applications.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    link: codsoftCert,
  },
  {
    id: 5,
    title: 'Cybersecurity Certification',
    issuer: 'LinkedIn Learning',
    date: '2024',
    credentialId: 'LI-CS-005',
    description:
      'Certification in cybersecurity fundamentals covering network security, threat analysis, vulnerability assessment, and security best practices for modern applications.',
    skills: ['Cybersecurity', 'Network Security', 'Threat Analysis', 'Vulnerability Assessment'],
    link: cyberSecCert,
  },
  {
    id: 6,
    title: 'Data Analytics Certificate',
    issuer: 'NeuAI Labs',
    date: '2025',
    credentialId: 'NEUAI-DA-006',
    description:
      'Certification in data analytics covering Python, EDA, data visualization and deriving insights from real-world datasets.',
    skills: ['Python', 'Pandas', 'EDA', 'Data Analytics'],
    link: neuaiCert,
  },
  {
    id: 7,
    title: 'Business Development Certificate',
    issuer: 'WillPower Group',
    date: '2023',
    credentialId: 'WPG-BD-007',
    description:
      'Certification in business development covering professional communication, digital marketing, networking and stakeholder engagement.',
    skills: ['Business Development', 'Marketing', 'Communication', 'Networking'],
    link: willpowerCert,
  },
  {
    id: 8,
    title: 'JK Infotech Certificate',
    issuer: 'JK Infotech',
    date: '2024',
    credentialId: 'JKIT-008',
    description:
      'Professional certification from JK Infotech covering practical software development skills, industry workflows, and hands-on project experience.',
    skills: ['Software Development', 'Industry Practices', 'Project Management', 'IT Solutions'],
    link: jkInfotechCert,
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Certification() {
  return (
    <section id="certifications" className={styles.certification}>
      <SectionHeader
        title="Certifications"
        subtitle="Professional certifications validating my skills and knowledge"
      />

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
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
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

            <motion.a
              href={cert.link}
              className={styles.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              View Certificate <FaExternalLinkAlt />
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
