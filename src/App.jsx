import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <HeroSection />
              {/* Add other sections here as we create them */}
            </main>
          } />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
