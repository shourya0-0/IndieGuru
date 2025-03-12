import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '1'
        }}
      />

      {/* Content Container */}
      <div className="relative h-full w-full flex items-center">
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Text Content */}
            <div className="space-y-6 lg:space-y-8 pt-20">
              {/* Reviews Section */}
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="User review"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="User review"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/47.jpg"
                    alt="User review"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    {[1, 2, 3, 4].map((_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-black-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg
                      className="w-4 h-4 text-black-100"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm">(10k+ Reviews)</span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Grow up your skills by online mentoring with{' '}
                <span className="text-primary">IndieGuru</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg text-gray-600">
                Grow up your skills by online mentoring with IndieGuru
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to="/appointment" className="btn-primary">Take An Appointment</Link>
                <Link to="/experts" className="btn-outline">Choose Your Expert</Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative flex items-end justify-center h-full">
              <div className="w-full max-w-md xl:max-w-lg relative">
                <img
                  src="/girl image.png"
                  alt="Student with backpack"
                  className="w-full h-auto object-contain animate-float"
                  style={{ marginBottom: '-12rem' }}
                />
                {/* Stat Bubbles */}
                <div className="absolute top-8 -right-4 lg:-right-16">
                  <div className="stats-bubble">
                    <div className="stats-bubble-icon">
                      <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="stats-bubble-text">
                      <span className="stats-bubble-number">250k</span>
                      <span className="stats-bubble-label">Assisted Student</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/3 -left-4 lg:-left-16">
                  <div className="stats-bubble">
                    <div className="stats-bubble-icon">
                      <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="stats-bubble-text">
                      <span className="stats-bubble-number">250k</span>
                      <span className="stats-bubble-label">Assisted Student</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-32 -right-4 lg:-right-16">
                  <div className="stats-bubble">
                    <div className="stats-bubble-icon">
                      <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="stats-bubble-text">
                      <span className="stats-bubble-number">250k</span>
                      <span className="stats-bubble-label">Assisted Student</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
