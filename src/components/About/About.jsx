import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader/SectionHeader";
import ownerImg from "../../assets/owners_img.jpeg";
import styles from "./About.module.css";

const personalDetails = [
  { label: "Name", value: "Swapnil Gandhale" },
  { label: "Profile", value: "Full-Stack & AI Engineer" },
  { label: "Email", value: "swapnilofficial08@gmail.com" },
  { label: "Phone", value: "+91 9284850474" },
  { label: "Location", value: "Pune, India" },
  { label: "Education", value: "B.E. AI & DS (SPPU, 8.5 CGPA)" },
];

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Full-Stack & Cloud Frameworks",
    skills: ["React.js", "Spring Boot", "Node.js", "RESTful APIs", "Flask", "FastAPI"],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "PyTorch",
      "Google Gemini API",
      "OpenAI API",
      "Prompt Engineering",
      "Scikit-learn",
    ],
  },
  {
    title: "Databases & Developer Tools",
    skills: ["MySQL", "MongoDB", "Git", "GitHub", "VS Code", "Swagger", "Render", "Kaggle"],
  },
];

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <SectionHeader title="About Me" subtitle="My background, education & technical proficiencies" />

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
              I&apos;m a Full-Stack Developer and Artificial Intelligence & Data Science
              engineer from SPPU (CGPA: 8.5/10). I specialize in engineering robust backend
              architectures with <strong>Java &amp; Spring Boot</strong>, crafting reactive user
              experiences in <strong>React</strong>, and developing scalable <strong>Python &amp; AI-driven SaaS solutions</strong>.
            </p>

            <p className={styles.aboutText}>
              From architecting intelligent recommendation systems like <strong>Agrosphere</strong> to
              building LLM-powered mock interview platforms like <strong>HireMate AI</strong> and winning
              the <strong>Intercollegiate Hackathon</strong> for assistive tech (NavEye), I turn complex
              computational challenges into intuitive, high-impact products.
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
          <h3 className={styles.skillsTitle}>Technical Expertise</h3>

          <div className={styles.categoriesGrid}>
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className={styles.categoryCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <h4 className={styles.categoryTitle}>{category.title}</h4>
                <div className={styles.badgesWrapper}>
                  {category.skills.map((skill) => (
                    <span key={skill} className={styles.skillPill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
