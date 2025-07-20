import { useState, useEffect } from 'react';
// import { FaBars } from 'react-icons/fa';
import img1 from"../assets/Images/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    // Apply initial theme
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + 80; // Adding navbar height offset
        setIsScrolledPastHero(scrollPosition > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  useEffect(() => {
    // Function to handle scroll and intersection observation
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Create observer for all sections
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
      rootMargin: '-80px 0px 0px 0px' // Accounts for fixed navbar
    });

    // Observe all sections
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Handle smooth scroll and section focus
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    
    if (section) {
      // Remove any existing focus animations
      document.querySelectorAll('.section-focus').forEach(el => {
        el.classList.remove('section-focus');
      });

      // Add focus animation class
      section.classList.add('section-focus');

      // Remove class after animation
      setTimeout(() => {
        section.classList.remove('section-focus');
      }, 1000);

      // Scroll to section
      section.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const navItems = ['Home', 'Services', 'Our Progress', 'Testimonials', 'About', 'Contact'];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 py-4 ${isScrolledPastHero ? 'navbar-scrolled' : ''}`}>
      <div className="container mx-auto px-4 relative flex justify-between items-center">
        {/* Theme toggle positioned absolutely */}
        <button
          onClick={toggleTheme}
          className="theme-toggle-glass absolute right-4 text-2xl cursor-pointer transition-opacity"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
          aria-label="Toggle Theme"
        >
          {isDarkMode ? '🌞' : '🌓'}
        </button>

        {/* Main navbar content with glass effect */}
        <div className="navbar-glass mx-auto">
          <div className="flex items-center gap-4">
            <a href="#" className="text-white px-3 py-1 rounded-md font-bold text-xl relative">
              <img 
                src={img1}
                alt="Devaura Logo" 
                className="h-11 w-auto"
              />
            </a>
            <a href="#" className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} no-underline`}>
              Devaura
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8 ml-12">
            <div className="navbar-links">
              <ul className="flex gap-8 list-none">
                {navItems.map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      onClick={(e) => handleNavClick(e, item.toLowerCase().replace(' ', '-'))}
                      className={`font-medium text-base relative transition-all duration-300 py-2 ${
                        activeSection === item.toLowerCase().replace(' ', '-') ? 'font-semibold' : ''
                      }`}
                    >
                      {item}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${isDarkMode ? 'from-blue-400 to-blue-600' : 'from-blue-600 to-blue-800'} transition-all duration-300 ${
                        activeSection === item.toLowerCase().replace(' ', '-') ? 'w-full' : 'w-0'
                      }`}></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 items-center">
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="primary-glass-button font-medium transition-all duration-300"
              >
                Get Started
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, 'services')}
                className="glass-button font-medium transition-all duration-300 text-gray-900 dark:text-white"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className={`md:hidden ${isDarkMode ? 'text-white' : 'text-blue-900'} text-2xl`}
        >
          {/* <FaBars /> */}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden navbar-glass mt-4 mx-4`}>
          <div className="navbar-links">
            <ul className="flex flex-col gap-4 list-none">
              {navItems.map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={(e) => handleNavClick(e, item.toLowerCase().replace(' ', '-'))}
                    className={`font-medium text-base block py-2 ${
                      activeSection === item.toLowerCase().replace(' ', '-') ? 'font-semibold' : ''
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')} 
              className="primary-glass-button font-medium text-center transition-all duration-300"
            >
              Get Started
            </a>
            <a 
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')} 
              className="glass-button font-medium text-center transition-all duration-300 text-gray-900 dark:text-white"
            >
              Learn More
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;