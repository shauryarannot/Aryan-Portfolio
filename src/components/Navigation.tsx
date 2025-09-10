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
      setIsScrolled(window.scrollY > 20);

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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
          isScrolled ? 'py-2 px-4' : 'py-4 px-4'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className={`relative rounded-2xl border border-white/20 backdrop-blur-xl bg-transparent shadow-glow transition-all duration-500`}
            animate={{
              scale: isScrolled ? 0.98 : 1,
              y: 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? 'px-6 py-3' : 'px-8 py-4'
            }`}>
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`font-bold text-white transition-all duration-300 ${
                  isScrolled ? 'text-lg' : 'text-xl'
                }`}
              >
                Aryan
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative font-medium transition-all duration-300 ${
                      isScrolled ? 'px-3 py-2 text-sm' : 'px-4 py-2 text-base'
                    } ${
                      activeSection === item.id
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                    } rounded-xl`}
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    <AnimatePresence>
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute inset-0 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm -z-10"
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
                <motion.a
                  href="/resume.pdf"
                  target='_blank'
                  rel="noopener noreferrer"
                  className={`hidden md:inline-flex items-center space-x-2 font-medium text-white/90 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 rounded-xl shadow-md ${
                    isScrolled ? 'px-3 py-2 text-sm' : 'px-4 py-2 text-sm'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Resume</span>
                </motion.a>

                <div className="hidden sm:block">
                  <DarkModeToggle />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 rounded-xl p-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.svg
                      className="w-5 h-5 text-white"
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
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="md:hidden overflow-hidden border-t border-white/20 bg-transparent backdrop-blur-xl"
                >
                  <div className="p-6">
                    <div className="flex flex-col space-y-2 mb-6">
                      {navItems.map((item, index) => (
                        <motion.button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                            activeSection === item.id
                              ? 'text-white bg-white/10 border border-white/20 backdrop-blur-md'
                              : 'text-white/80 hover:text-white hover:bg-white/5'
                          }`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {item.label}
                        </motion.button>
                      ))}

                      <motion.a
                        href="/resume.pdf"
                        target='_blank'
                        rel="noopener noreferrer"
                        className="w-full text-center px-4 py-3 rounded-xl font-medium text-white/90 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Download Resume
                      </motion.a>
                    </div>

                    <div className="pt-4 border-t border-white/20 sm:hidden">
                      <div className="flex items-center justify-between px-4 py-2">
                        <span className="text-white/80 text-sm font-medium">
                          Theme Mode
                        </span>
                        <DarkModeToggle />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.nav>

      <div className={`transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`} />
    </>
  );
};

export default Navigation;
