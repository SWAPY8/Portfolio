import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';

function App() {
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
