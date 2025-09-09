import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[9999] p-4 transition-all duration-300 ${
        isScrolled ? 'glass-nav-scrolled' : 'glass-nav-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="glass-nav-container">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-white"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                Aryan
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  <AnimatePresence>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 glass-active-bg rounded-xl -z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      />
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-3">
              {/* Resume Button */}
              <motion.a
                href="src\assets\Aryan Kumar Resume.pdf"
                target='_blank'
                rel="noopener noreferrer"
                className="hidden md:inline-flex glass-menu-button px-4 py-2 text-sm font-medium text-white/90 rounded-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>

              {/* Dark Mode Toggle */}
              <div className="hidden sm:block">
                <DarkModeToggle />
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <motion.button
                  onClick={toggleMobileMenu}
                  className="glass-menu-button p-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        isMobileMenuOpen
                          ? 'M6 18L18 6M6 6l12 12'
                          : 'M4 6h16M4 12h16M4 18h16'
                      }
                    />
                  </motion.svg>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="md:hidden overflow-hidden"
              >
                <div className="glass-mobile-menu mt-4 p-6">
                  <div className="flex flex-col space-y-3 mb-4">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          activeSection === item.id
                            ? 'text-white glass-mobile-active'
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-2 h-2 rounded-full transition-colors ${
                              activeSection === item.id
                                ? 'bg-blue-400'
                                : 'bg-white/30'
                            }`}
                          />
                          <span>{item.label}</span>
                        </div>
                      </motion.button>
                    ))}

                    {/* Mobile Resume Button */}
                    <motion.a
                      href="src\assets\Aryan Kumar Resume.pdf"
                      target='_blank'
                      rel="noopener noreferrer"
                      className="w-full text-center px-4 py-3 rounded-xl font-medium text-white/90 glass-mobile-active"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Resume
                    </motion.a>
                  </div>

                  {/* Mobile Dark Mode Toggle */}
                  <div className="pt-4 border-t border-white/10 sm:hidden">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-sm font-medium">
                        Theme
                      </span>
                      <DarkModeToggle />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .glass-nav-transparent {
          background: transparent;
        }

        .glass-nav-scrolled {
          background: rgba(0, 0, 0, 0.1);
        }

        .glass-nav-container {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-active-bg {
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.2),
            rgba(147, 51, 234, 0.2)
          );
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .glass-menu-button {
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .glass-menu-button:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        }

        .glass-mobile-menu {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .glass-mobile-active {
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.15),
            rgba(147, 51, 234, 0.15)
          );
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 16px rgba(59, 130, 246, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .glass-active-bg::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.3),
            rgba(147, 51, 234, 0.3)
          );
          filter: blur(8px);
          opacity: 0.5;
          z-index: -1;
        }
      `}</style>
    </motion.nav>
  );
};

export default Navigation;
