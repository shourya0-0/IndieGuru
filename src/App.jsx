import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import EducationalPlatform from './components/EducationalPlatform';
import { FooterSection } from './components/FooterSection';
import CategoryBrowser from './components/catrgory-browser';
import TestimonialsSection from './components/testimonials-section';
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import BlogPage from "./components/BlogPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <HowItWorks />
                  <EducationalPlatform />
                  <CategoryBrowser />
                  <TestimonialsSection />
                  <FooterSection />
                </>
              }
            />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
