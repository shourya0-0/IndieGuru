import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <HeroSection />
          <HowItWorks />
        </main>
      </div>
    </Router>
  );
}

export default App;
