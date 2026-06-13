import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './Education.module.css';

const timelineData = [
  {
    degree: 'Bachelor of Engineering',
    field: ' Artificial Intelligence & Data Science',
    institute: 'SPPU',
    duration: '2022 - 2026',
    cgpa: '8.5/10',
    description:
      'Focused on Artificial Intelligence, Data Science, DSA. Built multiple full-stack and ML projects and participated in hackathons.',
  },
  {
    degree: 'Higher Secondary (XII)',
    field: 'Science',
    institute: 'L.G. Bansude Jr. College Palasdeo',
    duration: '2020 - 2022',
    percentage: '78%',
    description:
      'Studied Physics, Chemistry and Mathematics with a strong emphasis on analytical thinking and problem-solving.',
  },
  {
    degree: 'Secondary (X)',
    institute: 'L.G. Bansude School Palasdeo',
    duration: '2020',
    percentage: '90%',
    description:
      'Completed secondary education with distinction, laying a solid academic foundation in sciences and mathematics.',
  },
];

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <SectionHeader title="Education" />

        <div className={styles.timeline}>
          {/* Center timeline line */}
          <motion.div
            className={styles.timelineLine}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
          />

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={index}
                className={`${styles.timelineItem} ${isEven ? styles.even : ''}`}
              >
                {/* Dot */}
                <div className={styles.timelineDot} />

                {/* Card */}
                <motion.div
                  className={styles.card}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: 'easeOut',
                  }}
                >
                  <span className={styles.duration}>{item.duration}</span>
                  <h4 className={styles.degree}>{item.degree}</h4>
                  <p className={styles.field}>{item.field}</p>
                  <p className={styles.institute}>{item.institute}</p>
                  <p className={styles.grade}>
                    {item.cgpa ? `CGPA: ${item.cgpa}` : `Score: ${item.percentage}`}
                  </p>
                  <p className={styles.cardDescription}>{item.description}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
