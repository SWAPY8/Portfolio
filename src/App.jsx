import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8,
    });

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Make lenis globally available for smooth programmatic anchor clicks
    window.lenis = lenis;

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <ScrollProgress />
        <ParticleBackground />
        <Navbar />
        <Home />
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
