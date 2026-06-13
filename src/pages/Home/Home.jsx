import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Education from '../../components/Education/Education';
import Internship from '../../components/Internship/Internship';
import Projects from '../../components/Projects/Projects';
import Certification from '../../components/Certification/Certification';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Internship />
      <Projects />
      <Certification />
      <Contact />
    </main>
  );
};

export default Home;
