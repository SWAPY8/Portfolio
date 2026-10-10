import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTrophy,
  FaQrcode,
  FaTimes,
  FaCheckCircle,
  FaLayerGroup,
  FaServer,
  FaDatabase,
  FaLock,
  FaMobileAlt,
  FaInfoCircle,
} from "react-icons/fa";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Projects.module.css";

// Import project images from assets
import OutReachImg from "../../assets/outreach-review-system.png";
import VirDoctorImg from "../../assets/Vir_Doctor.jpg";
import AgrosphereImg from "../../assets/Agrosphere.png";
import UberRideImg from "../../assets/Uber_ride.jpg";
import StudentManImg from "../../assets/Student_Man.jpg";
import NaveyeImg from "../../assets/Naveye.jpg";
import HireMateImg from "../../assets/hiremate_ai.jpg";
import PromptPathImg from "../../assets/promptpath.jpg";

const projects = [
  {
    id: 1,
    title: "OutReach System",
    subtitle: "Customer Review Management Platform",
    awardBadge: "🚀 Production Deployed • Dhankranti Classes",
    description:
      "Developed and deployed a full-stack review assistance platform that helps businesses streamline customer feedback collection through QR-based access, category-based review selection, predefined review templates, and a dedicated administrative interface.",
    image: OutReachImg,
    techStack: [
      "React.js",
      "Vite",
      "FastAPI",
      "Python",
      "MongoDB Atlas",
      "PyMongo",
      "JWT",
      "REST API",
      "Render",
    ],
    features: [
      
    ],
    category: "Full Stack",
    demo: "https://outreach-system-frontend.onrender.com/",
    reviewDemo: "https://outreach-system-frontend.onrender.com/r/dhankranti",
    github: "https://github.com/SWAPY8/OutReach_System",
    hasDetails: true,
    details: {
      overview:
        "OutReach System is a QR-based customer review assistance platform developed for Dhankranti Share Market Classes. The purpose of this application is to simplify the customer review process through a branded, mobile-friendly interface.\n\nBusinesses display a physical QR code at their premises. Customers scan the QR code using their smartphones and enter a dedicated, business-specific review route (/r/dhankranti). Customers browse 8 structured categories, select a relevant review template, copy it to their clipboard with one tap, navigate directly to the business's Google review page, and manually paste and submit their review.",
      problemSolved:
        "Businesses struggle to collect high-volume, high-quality Google reviews because customers face multiple friction points: they don't know what to write, spend too much time phrasing thoughts, or struggle to find the exact Google Maps review listing. OutReach System eliminates this barrier by providing ready-to-use, genuine review templates categorized by customer experience (Teaching Quality, Practical Learning, Supportive Mentors, etc.) and a 1-tap clipboard bridge to Google Maps.",
      solution:
        "The application connects physical QR code scanning with a responsive web app and cloud API:\n1. Dedicated QR Routing: Customers scan the premise QR code and hit /r/dhankranti.\n2. Category Exploration: 8 distinct learning dimensions allow targeted feedback.\n3. Template Selection: 80 curated, natural-sounding reviews (10 per category).\n4. Clipboard & Deep-Link: 1-click copy of the selected template paired with instant navigation to Dhankranti's Google review URL for manual paste & submission.\n5. Administrative Console: Business owners log in with JWT credentials to manage categories, update templates, adjust business settings, and track review sessions.",
      architecture: [
        {
          step: "1. Customer Mobile Browser",
          subtitle: "Client Entry Point",
          desc: "Scans QR token, loads responsive mobile UI, browses categories, and selects a tailored review",
        },
        {
          step: "2. React + Vite Frontend",
          subtitle: "Render Static Site",
          desc: "Client-side routing via React Router, Axios REST client, clipboard API, and responsive CSS3 design",
        },
        {
          step: "3. FastAPI REST API",
          subtitle: "Render Web Service",
          desc: "High-performance Python backend, Pydantic validation, CORS middleware, and JWT authentication",
        },
        {
          step: "4. PyMongo Object Layer",
          subtitle: "Driver Layer",
          desc: "Translates high-performance asynchronous queries and updates between API and cloud database",
        },
        {
          step: "5. MongoDB Atlas",
          subtitle: "Cloud NoSQL Database",
          desc: "Cloud document store with structured, indexed collections for shops, categories, templates, and sessions",
        },
      ],
      adminSecurity:
        "Administrative users access protected endpoints through the authentication system utilizing JWT bearer tokens and bcrypt password hashing.",
      featuresList: [
        
      ],
      engineeringDecisions: [
        {
          title: "Mobile-First QR Routing & Lightweight Payload",
          desc: "Optimized Vite bundles and asset delivery to guarantee sub-second load times on mobile 4G/5G connections when customers scan table QR codes.",
        },
        {
          title: "Reliable Clipboard & Navigation Bridge",
          desc: "Engineered a safe copy-and-open sequence using navigator.clipboard with fallback support, ensuring text is placed on the customer's clipboard before opening the Google review tab.",
        },
        {
          title: "Document-Oriented Schemas & Indexing",
          desc: "Structured MongoDB Atlas collections for shops, categories, review templates, and review sessions with indexes on lookup fields for fast REST API responses.",
        },
        {
          title: "JWT Authentication & Secure Admin Endpoints",
          desc: "Implemented bearer token verification with bcrypt password hashing in FastAPI to protect administrative operations without server session overhead.",
        },
        {
          title: "Decoupled Cloud CI/CD on Render",
          desc: "Separated frontend static asset distribution from backend REST execution with environment-based CORS and API URL resolution.",
        },
      ],
      contributions:
        "Sole full-stack developer responsible for frontend architecture in React/Vite, backend REST API design in FastAPI/Python, database schema and indexes in MongoDB Atlas, JWT authentication implementation, QR code generator integration, and cloud deployment on Render.",
    },
  },
  {
    id: 2,
    title: "HireMate AI – Mock Interview & ATS SaaS",
    description:
      "Autonomous full-stack SaaS platform automating resume parsing, ATS match scoring, and stateful 8-turn mock interviews using Google Gemini API with conversation history context pruning, structured JSON scorecards, and Playwright E2E testing.",
    image: HireMateImg,
    techStack: [
      "Python",
      "FastAPI",
      "React.js",
      "Google Gemini API",
      "SQLite",
      "Playwright",
    ],
    category: "AI & ML",
    github: "https://github.com/SWAPY8",
  },
  {
    id: 3,
    title: "Agrosphere – AI Scheme Recommendation",
    description:
      "End-to-end full-stack portal leveraging a hybrid Machine Learning eligibility engine to recommend personalized welfare schemes based on farmer demographic and financial profiles, with Spring Boot REST APIs and optimized MySQL queries.",
    image: AgrosphereImg,
    techStack: [
      "React.js",
      "Java",
      "Spring Boot",
      "Python",
      "MySQL",
      "Machine Learning",
    ],
    category: "Full Stack",
    github: "https://github.com/SWAPY8",
  },
  {
    id: 4,
    title: "PromptPath – Interactive AI Roadmap",
    description:
      "Interactive roadmap dashboard visualizing 64 progressive prompt engineering topics for GenAI orchestration. Built with zero-dependency client-side DOM search and real-time highlight filtering.",
    image: PromptPathImg,
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "SVG Animation",
      "Web APIs",
      "GitHub Pages",
    ],
    category: "Full Stack",
    github: "https://github.com/SWAPY8",
    demo: "https://github.com/SWAPY8",
  },
  {
    id: 5,
    title: "NavEye – AI Assistive System",
    awardBadge: "🏆 1st Position — Pune Hackathon (30+ Teams)",
    description:
      "Secured 1st Position among 30+ teams at the Pune Intercollegiate Hackathon. Assistive wearable system for visually impaired users detecting obstacles with YOLOv8 on Raspberry Pi 3 with spatial audio feedback.",
    image: NaveyeImg,
    techStack: [
      "YOLOv8",
      "Python",
      "Raspberry Pi 3",
      "Edge AI",
      "Camera Sensor",
    ],
    category: "IOT",
    github: "https://github.com/SWAPY8",
  },
  {
    id: 6,
    title: "Student Management System",
    description:
      "Full-stack student management application with CRUD operations, authentication, and responsive dashboard for managing student academic records.",
    image: StudentManImg,
    techStack: ["Java", "Spring Boot", "MySQL", "React"],
    category: "Full Stack",
    github: "https://github.com/SWAPY8",
  },
  {
    id: 7,
    title: "Uber Ride Analysis",
    description:
      "Exploratory data analysis on Uber ride datasets in Pune to uncover demand trends, peak rush hours, and location-based passenger mobility patterns.",
    image: UberRideImg,
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    category: "Data Science",
    github: "https://github.com/SWAPY8",
  },
  {
    id: 8,
    title: "IOT-Based Virtual Doctor",
    description:
      "Remote patient vitals monitoring system utilizing IoT sensors (temperature, pulse) and ESP8266 to transmit health telemetry to medical dashboards.",
    image: VirDoctorImg,
    techStack: [
      "Arduino Uno",
      "C++",
      "ESP8266 Wi-Fi",
      "IoT Sensors",
    ],
    category: "IOT",
    github: "https://github.com/SWAPY8",
  },
];

const filters = ["All", "Full Stack", "AI & ML", "IOT", "Data Science"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") setSelectedProject(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedProject]);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className={styles.projects}>
      <SectionHeader
        title="Featured Projects"
        subtitle="Full-stack web applications, AI/ML integrations, and hardware systems"
      />

      <div className={styles.filterButtons}>
        {filters.map((filter) => (
          <button
            key={filter}
            className={`${styles.filterBtn} ${
              activeFilter === filter ? styles.active : ""
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className={styles.projectsGrid}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <div className={styles.projectImage}>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImg}
                  />
                )}
                <div className={styles.imageOverlay} />
                {project.awardBadge && (
                  <div className={styles.awardBanner}>
                    <FaTrophy /> {project.awardBadge}
                  </div>
                )}
              </div>

              <div className={styles.projectContent}>
                <div className={styles.headerRow}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <span className={styles.categoryPill}>{project.category}</span>
                </div>

                {project.subtitle && (
                  <div className={styles.projectSubtitle}>{project.subtitle}</div>
                )}

                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                {project.features && (
                  <ul className={styles.featuresList}>
                    {project.features.slice(0, 4).map((feat, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <span className={styles.featureDot} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className={styles.techStack}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.projectLinks}>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className={`${styles.projectLink} ${styles.primaryDemoLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}

                  

                  {project.github && (
                    <a
                      href={project.github}
                      className={styles.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Source Code
                    </a>
                  )}

                 
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Details & Architecture Modal via Portal to document.body */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedProject && selectedProject.details && (
              <motion.div
                id="project-details-modal"
                className={styles.modalBackdrop}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-project-title"
              >
                <motion.div
                  className={styles.modalContent}
                  initial={{ opacity: 0, scale: 0.94, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 24 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={styles.modalHeader}>
                    <div className={styles.modalTitleGroup}>
                      <div className={styles.modalBadgeRow}>
                        <span className={styles.categoryPill}>
                          {selectedProject.category}
                        </span>
                        {selectedProject.awardBadge && (
                          <span className={styles.categoryPill}>
                            {selectedProject.awardBadge}
                          </span>
                        )}
                      </div>
                      <h2 id="modal-project-title" className={styles.modalTitle}>
                        {selectedProject.title}
                      </h2>
                      {selectedProject.subtitle && (
                        <div className={styles.modalSubtitle}>
                          {selectedProject.subtitle}
                        </div>
                      )}
                    </div>
                    <button
                      id="close-project-modal-btn"
                      type="button"
                      className={styles.modalCloseBtn}
                      onClick={() => setSelectedProject(null)}
                      aria-label="Close project modal"
                    >
                      <FaTimes />
                    </button>
                  </div>

              {/* Quick Link Action Bar */}
              <div className={styles.modalActionsRow}>
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    className={`${styles.modalActionBtn} ${styles.modalActionPrimary}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Live Landing Demo
                  </a>
                )}
                {selectedProject.reviewDemo && (
                  <a
                    href={selectedProject.reviewDemo}
                    className={`${styles.modalActionBtn} ${styles.modalActionSecondary}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaQrcode /> Customer Review Route (/r/dhankranti)
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    className={`${styles.modalActionBtn} ${styles.modalActionGhost}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub Repository
                  </a>
                )}
              </div>

              {/* Overview */}
              <div className={styles.modalSection}>
                <div className={styles.modalSectionHeader}>
                  <FaInfoCircle className={styles.modalSectionIcon} />
                  <span>Overview & Business Purpose</span>
                </div>
                <p className={styles.modalText}>
                  {selectedProject.details.overview}
                </p>
              </div>

              {/* Problem Solved */}
              <div className={styles.modalSection}>
                <div className={styles.modalSectionHeader}>
                  <FaCheckCircle className={styles.modalSectionIcon} />
                  <span>Problem Solved</span>
                </div>
                <p className={styles.modalText}>
                  {selectedProject.details.problemSolved}
                </p>
              </div>

              {/* Solution */}
              <div className={styles.modalSection}>
                <div className={styles.modalSectionHeader}>
                  <FaLayerGroup className={styles.modalSectionIcon} />
                  <span>Solution & Customer Workflow</span>
                </div>
                <p className={styles.modalText}>
                  {selectedProject.details.solution}
                </p>
              </div>

              {/* Technical Architecture */}
              <div className={styles.modalSection}>
                <div className={styles.modalSectionHeader}>
                  <FaServer className={styles.modalSectionIcon} />
                  <span>Technical Architecture & Data Pipeline</span>
                </div>
                <div className={styles.archPipeline}>
                  {selectedProject.details.architecture.map((node, idx) => (
                    <div key={idx} className={styles.archStepCard}>
                      <div className={styles.archStepNumber}>{idx + 1}</div>
                      <div className={styles.archStepContent}>
                        <div className={styles.archStepTitle}>
                          {node.step} — <span style={{ fontWeight: 500, opacity: 0.85 }}>{node.subtitle}</span>
                        </div>
                        <div className={styles.archStepDesc}>{node.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.archFlowNote}>
                  <FaLock style={{ marginRight: 6 }} />
                  {selectedProject.details.adminSecurity}
                </div>
              </div>

              {/* Core Features */}
              <div className={styles.modalSection}>
                <div className={styles.modalSectionHeader}>
                  <FaCheckCircle className={styles.modalSectionIcon} />
                  <span>Implemented Core Capabilities</span>
                </div>
                <div className={styles.featuresGrid}>
                  {selectedProject.details.featuresList.map((item, idx) => (
                    <div key={idx} className={styles.featureCard}>
                      <FaCheckCircle className={styles.featureCardCheck} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges and Engineering Decisions */}
              <div className={styles.modalSection}>
                <div className={styles.modalSectionHeader}>
                  <FaDatabase className={styles.modalSectionIcon} />
                  <span>Challenges & Engineering Decisions</span>
                </div>
                <div className={styles.decisionsGrid}>
                  {selectedProject.details.engineeringDecisions.map(
                    (dec, idx) => (
                      <div key={idx} className={styles.decisionCard}>
                        <div className={styles.decisionTitle}>
                          {dec.title}
                        </div>
                        <div className={styles.decisionDesc}>{dec.desc}</div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* My Contribution */}
              <div className={styles.modalSection} style={{ marginBottom: 0 }}>
                <div className={styles.modalSectionHeader}>
                  <FaMobileAlt className={styles.modalSectionIcon} />
                  <span>My Full-Stack Contribution</span>
                </div>
                <div className={styles.contributionCard}>
                  {selectedProject.details.contributions}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </section>
  );
}
