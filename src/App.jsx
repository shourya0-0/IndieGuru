import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import EducationalPlatform from './components/EducationalPlatform';
import { FooterSection } from './components/FooterSection';
import CategoryBrowser from './components/catrgory-browser';
import TestimonialsSection from './components/testimonials-section'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <HeroSection />
          <HowItWorks />
          <EducationalPlatform />
          <CategoryBrowser />
          <TestimonialsSection />
          <FooterSection />
        </main>
      </div>
    </Router>
  );
}

export default App;
