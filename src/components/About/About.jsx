import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader/SectionHeader";
import ownerImg from "../../assets/owners_img.png";
import styles from "./About.module.css";

const personalDetails = [
  { label: "Name", value: "Swapnil Gandhale" },
  { label: "Profile", value: "Full-Stack Developer" },
  { label: "Email", value: "swapnilofficial08@gmail.com" },
  { label: "Phone", value: "+91 9284850474" },
  { label: "Location", value: "Pune, India" },
  { label: "Languages", value: "Marathi, English, Hindi" },
];

const skills = [
  { name: "Java", percent: 80 },
  { name: "Spring Boot", percent: 85 },
  { name: "React", percent: 85 },
  { name: "JavaScript", percent: 85 },
  { name: "MySQL", percent: 90 },
  { name: "MongoDB", percent: 70 },
  { name: "Git", percent: 85 },
  { name: "REST APIs", percent: 90 },
];

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <SectionHeader title="About Me" />

        <div className={styles.grid}>
          {/* Left Column — Profile Image */}
          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className={styles.imageWrapper}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={styles.imagePlaceholder}>
                <img src={ownerImg} alt="Swapnil Gandhale" />
              </div>
            </motion.div>
            <div className={styles.imageFrame} />
          </motion.div>

          {/* Right Column — Bio & Details */}
          <motion.div
            className={styles.aboutContent}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <h3 className={styles.col}>Who I Am</h3>

            <p className={styles.aboutText}>
              I&apos;m a Java Full Stack Developer and AI & Data Science
              graduate passionate about building scalable web applications and
              intelligent solutions. My expertise includes developing responsive
              front-end interfaces with React, robust back-end systems with
              Spring Boot, and leveraging AI/ML techniques to solve real-world
              problems. 
              
            </p>

            <p className={styles.aboutText}>
               I enjoy transforming complex challenges into practical,
              user-focused applications while continuously exploring emerging
              technologies in software development, artificial intelligence, and
              data science. Through projects involving full-stack development,
              computer vision, IoT, and machine learning, I have gained hands-on
              experience in creating innovative and impactful solutions.
            </p>

            <p className={styles.aboutText}>
              Driven by curiosity and continuous learning, I strive to build technology
              that is efficient, scalable, and meaningful.
            </p>

            <div className={styles.detailsGrid}>
              {personalDetails.map((detail) => (
                <div key={detail.label} className={styles.detailItem}>
                  <span className={styles.detailLabel}>{detail.label}:</span>
                  <span className={styles.detailValue}>{detail.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className={styles.skillsSection}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3>Skills &amp; Expertise</h3>

          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={skill.name} className={styles.skillItem}>
                <div className={styles.skillInfo}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillPercent}>{skill.percent}%</span>
                </div>
                <div className={styles.skillTrack}>
                  <motion.div
                    className={styles.skillBar}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
