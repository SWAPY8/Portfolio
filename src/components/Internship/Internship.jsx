import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCertificate,
} from "react-icons/fa";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Internship.module.css";

// Import certificate files from assets
import willpowerCert from "../../assets/willpower_group.pdf";
import codsoftCert from "../../assets/codesoft_certi.pdf";
import neuaiCert from "../../assets/neuai_certi.jpg";

const experiences = [
  {
    id: 1,
    role: "AI Software Developer Intern",
    company: "Infystent",
    location: "Pune, India (On-site)",
    duration: "May 2026",
    isCurrent: true,
    description:
      "Engineered end-to-end laundry management web platform covering customer, order, pickup, delivery, garment tracking and operational workflows with AI automation.",
    responsibilities: [
      "Developed an end-to-end laundry management web application covering customer, order, pickup, delivery, garment tracking and operational workflows.",
      "Built and integrated responsive web interfaces with backend services and database-driven functionality.",
      "Contributed to AI-powered features and workflow automation to improve operational efficiency and customer service.",
    ],
    techUsed: ["Python", "React.js", "AI Automation", "REST APIs", "MySQL"],
  },
  {
    id: 2,
    role: "Data Analyst Intern",
    company: "NeuAi Labs",
    location: "Remote, India",
    duration: "Nov 2024 - Jan 2025",
    description:
      "Conducted exploratory data analysis, analytics modeling, and visual storytelling on large-scale datasets.",
    responsibilities: [
      "Performed exploratory data analysis on large-scale datasets using Python.",
      "Created interactive dashboards and visualizations for stakeholder presentations.",
      "Analyzed Uber ride trip data in Pune, performing EDA to identify demand patterns and peak hours.",
    ],
    techUsed: ["Python", "SQL", "Power BI", "Pandas"],
    certificate: neuaiCert,
  },
  {
    id: 3,
    role: "Web Development Intern",
    company: "CodSoft",
    location: "Remote, India",
    duration: "Aug 2024 - Sept 2024",
    description:
      "Developed and maintained responsive web applications using modern frontend technologies.",
    responsibilities: [
      "Built responsive web pages using HTML5, CSS3, and JavaScript.",
      "Implemented interactive UI components including navigation bars, forms, and modals.",
      "Practiced collaborative coding, code reviews, and Git workflows.",
    ],
    techUsed: ["HTML5", "CSS3", "JavaScript", "Git"],
    certificate: codsoftCert,
  },
  {
    id: 4,
    role: "Business Development Intern",
    company: "WillPower Group",
    location: "Remote, India",
    duration: "Nov 2022 - May 2023",
    description:
      "Contributed to professional business communications, client outreach, and digital branding initiatives.",
    responsibilities: [
      "Communicated with international business owners and professionals to support relationship-building initiatives.",
      "Assisted in executing digital marketing and online branding strategies to improve outreach.",
    ],
    techUsed: ["Client Outreach", "Google Workspace", "Business Analytics"],
    certificate: willpowerCert,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Internship() {
  return (
    <section id="internship" className={styles.internship}>
      <SectionHeader
        title="Experience & Internships"
        subtitle="Practical industry roles across AI development, data analytics, and web engineering"
      />

      <motion.div
        className={styles.internshipGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {experiences.map((item) => (
          <motion.div
            key={item.id}
            className={`${styles.internshipCard} ${item.isCurrent ? styles.currentCard : ''}`}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.roleInfo}>
                <div className={styles.roleTitleRow}>
                  <h3 className={styles.role}>{item.role}</h3>
                  {item.isCurrent && (
                    <span className={styles.featuredBadge}>Primary Role</span>
                  )}
                </div>
                <p className={styles.company}>{item.company}</p>
              </div>
              <div className={styles.durationBadge}>
                <FaCalendarAlt />
                <span>{item.duration}</span>
              </div>
            </div>

            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <FaBriefcase />
                {item.company}
              </span>
              <span className={styles.metaItem}>
                <FaMapMarkerAlt />
                {item.location}
              </span>
            </div>

            <p className={styles.description}>{item.description}</p>

            <div className={styles.responsibilities}>
              <h4 className={styles.subheading}>Key Contributions</h4>
              <ul className={styles.responsibilityList}>
                {item.responsibilities.map((resp, idx) => (
                  <li key={idx} className={styles.responsibilityItem}>
                    <span className={styles.bullet} />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.techUsed}>
              {item.techUsed.map((tech) => (
                <span key={tech} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>

            {item.certificate && (
              <motion.a
                href={item.certificate}
                className={styles.certificateBtn}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaCertificate />
                View Certificate
              </motion.a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
