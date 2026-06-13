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

const internships = [
  {
    id: 1,
    role: "Business Development Intern",
    company: "WillPower Group",
    location: "Remote, India",
    duration: "Nov 2022 - May 2023",
    description:
      "Contributed to networking, business communication, and online engagement activities while developing strong interpersonal and professional communication skills.",
    responsibilities: [
      "Communicated with international business owners and professionals to support relationship-building initiatives.",
      "Assisted in executing digital marketing and online branding strategies to improve outreach.",
    ],
    techUsed: ["Excel", "Google Workspace", "Canva"],
    certificate: willpowerCert,
  },
  {
    id: 2,
    role: "Web Development Intern",
    company: "CodSoft",
    location: "Remote, India",
    duration: "Aug 2024 - Sept 2024",
    description:
      "Developed and maintained responsive web applications using modern frontend technologies. Collaborated with senior developers and participated in code reviews.",
    responsibilities: [
      "Built responsive web pages using HTML5, CSS3 and JavaScript",
      "Implemented interactive UI components including navigation bars, forms and modals",
      "Gained experience in DOM manipulation and responsive design patterns",
      "Practiced version control and collaborative coding through Git and GitHub",
    ],
    techUsed: ["HTML5", "CSS3", "JavaScript", "Git"],
    certificate: codsoftCert,
  },
  {
    id: 3,
    role: "Data Analyst Intern",
    company: "NeuAi Labs",
    location: "Remote",
    duration: "Nov 2024 - Jan 2025",
    description:
      "Participated in data analysis projects involving exploratory data analysis, visualization and deriving actionable insights from large datasets.",
    responsibilities: [
      "Performed exploratory data analysis on large-scale datasets using Python",
      "Created interactive dashboards and visualizations for stakeholder presentations",
      "Applied these skills in a project analyzing Uber ride data in Pune, performing EDA to identify demand trends, peak timings and location-based insights.",
    ],
    techUsed: ["Python", "SQL", "Power BI"],
    certificate: neuaiCert,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Internship() {
  return (
    <section id="internship" className={styles.internship}>
      <SectionHeader
        title="Internship Experience"
        subtitle="Hands-on industry experience that shaped my professional journey"
      />

      <motion.div
        className={styles.internshipGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {internships.map((internship) => (
          <motion.div
            key={internship.id}
            className={styles.internshipCard}
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.roleInfo}>
                <h3 className={styles.role}>{internship.role}</h3>
                <p className={styles.company}>{internship.company}</p>
              </div>
              <div className={styles.durationBadge}>
                <FaCalendarAlt />
                <span>{internship.duration}</span>
              </div>
            </div>

            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <FaBriefcase />
                {internship.company}
              </span>
              <span className={styles.metaItem}>
                <FaMapMarkerAlt />
                {internship.location}
              </span>
            </div>

            <p className={styles.description}>{internship.description}</p>

            <div className={styles.responsibilities}>
              <h4 className={styles.subheading}>Key Contributions</h4>
              <ul className={styles.responsibilityList}>
                {internship.responsibilities.map((item, idx) => (
                  <li key={idx} className={styles.responsibilityItem}>
                    <span className={styles.bullet} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.techUsed}>
              {internship.techUsed.map((tech) => (
                <span key={tech} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>

            {internship.certificate && (
              <motion.a
                href={internship.certificate}
                className={styles.certificateBtn}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
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
