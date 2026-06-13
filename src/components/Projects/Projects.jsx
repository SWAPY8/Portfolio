import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Projects.module.css";

// Import project images from assets
import VirDoctorImg from "../../assets/Vir_Doctor.jpg";
import AgrosphereImg from "../../assets/Agrosphere.png";
import UberRideImg from "../../assets/Uber_ride.jpg";
import StudentManImg from "../../assets/Student_Man.jpg";
import NaveyeImg from "../../assets/Naveye.jpg";

const projects = [
  {
    id: 1,
    title: "IOT-Based Virtual Doctor",
    description:
      "The IoT-Based Virtual Doctor monitors patient health remotely using sensors and sends real-time data to doctors.",
    image: VirDoctorImg,
    techStack: [
      "Arduino Uno",
      "C++",
      "ESP8266 Wi-Fi Module",
      "Temperature Sensor",
    ],
    category: "IOT",
    github: "https://github.com/SWAPY8",
  },

  {
    id: 2,
    title: "Uber Ride Analysis",
    description:
      "Conducted exploratory data analysis on Uber ride data to uncover trends in ride frequency, time, and location.",
    image: UberRideImg,
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    category: "Data Science",
    github: "https://github.com/SWAPY8",
  },
  {
    id: 3,
    title: "Student Management System",
    description:
      "A full-stack student management application with CRUD operations, authentication and responsive dashboard.",
    image: StudentManImg,
    techStack: ["Java", "Spring Boot", "MySQL", "React"],
    category: "Full Stack",
    github: "https://github.com/SWAPY8",
  },
  {
    id: 4,
    title: "NavEye - Assistive System ",
    description:
      "Wearable system for visually impaired users that detects obstacles using YOLOv8 and Raspberry Pi. providing audio feedback with object details and distance through a hearing device.",
    image: NaveyeImg,
    techStack: [
      "YOLOv8",
      "Python",
      "Raspberry Pi 3",
      "Camera Sensor",
    ],
    category: "IOT",
    github: "https://github.com/SWAPY8",
  },
  {
    id: 5,
    title: "Agrosphere",
    description:
      "Built a smart scheme recommendation system that connects farmers with relevant government benefits based on their profiles.",
    image: AgrosphereImg,
    techStack: ["Java", "Spring Boot", "MySQL", "React", "ML", "GitHub"],
    category: "Full Stack",
    github: "https://github.com/SWAPY8",
  },
];

const filters = ["All", "Full Stack", "IOT", "Data Science"];

const gradientVariants = [
  "linear-gradient(135deg, rgba(95,46,27,0.25), rgba(20,20,19,0.8))",
  "linear-gradient(135deg, rgba(139,69,19,0.2), rgba(26,35,36,0.8))",
  "linear-gradient(135deg, rgba(26,35,36,0.5), rgba(95,46,27,0.15))",
  "linear-gradient(135deg, rgba(95,46,27,0.18), rgba(26,35,36,0.7))",
  "linear-gradient(135deg, rgba(139,69,19,0.15), rgba(20,20,19,0.85))",
  "linear-gradient(135deg, rgba(26,35,36,0.4), rgba(95,46,27,0.2))",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className={styles.projects}>
      <SectionHeader
        title="Projects"
        subtitle="A showcase of my recent work and experiments"
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

      <motion.div className={styles.projectsGrid} layout>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -8 }}
            >
              <div
                className={styles.projectImage}
                style={{
                  background: project.image
                    ? "none"
                    : gradientVariants[index % gradientVariants.length],
                }}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImg}
                  />
                )}
                <div className={styles.imageOverlay} />
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.techStack}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.projectLinks}>
                  <a
                    href={project.github}
                    className={styles.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className={styles.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
