import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import profileImage from '@/assets/nitchu.jpg';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      {/* Interactive Floating Elements */}
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 30 }}
      >
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-300" />
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </motion.div>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">

          {/* Enhanced Profile Avatar */}
          <motion.div
            className="relative w-48 h-48 mx-auto mb-12"
            initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-full h-full rounded-full p-2 glassmorphic border border-cyan-400/30 shadow-2xl bg-gradient-to-br from-cyan-400/20 via-purple-500/15 to-pink-600/20 backdrop-blur-xl">
              <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
                <img
                  src={profileImage}
                  alt="Aryan - Data Engineer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Animated Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 opacity-60"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Enhanced Status Indicator */}
              <motion.div
                className="absolute bottom-4 right-4 w-8 h-8 glassmorphic border border-white/30 rounded-full flex items-center justify-center backdrop-blur-md bg-white/10"
                animate={{ 
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 20px rgba(34, 197, 94, 0.3)",
                    "0 0 30px rgba(34, 197, 94, 0.6)",
                    "0 0 20px rgba(34, 197, 94, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-4 h-4 bg-emerald-400 rounded-full shadow-lg" />
              </motion.div>

              {/* Floating Particles */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-400/60 rounded-full blur-sm animate-bounce delay-300"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-purple-400/60 rounded-full blur-sm animate-bounce delay-700"></div>
            </div>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <motion.span 
              className="text-white block mb-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Hey, I'm 
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Aryan
            </motion.span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="relative px-8 py-4 rounded-2xl glassmorphic border border-white/20 shadow-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl inline-block mb-6">
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Data Engineer & Analyst
              </p>
            </div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div
            className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <div className="relative p-8 rounded-3xl glassmorphic border border-white/10 shadow-2xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl">
              <p>
                A <span className="text-cyan-400 font-semibold">Computer Science undergraduate</span> with practical experience in <span className="text-purple-400 font-semibold">Python, SQL, Data Engineering, and GenAI</span>. Skilled in applying Machine Learning and Big Data techniques, I leverage cloud platforms like <span className="text-emerald-400 font-semibold">AWS</span> to build scalable solutions that solve real-world problems and deliver business value.
              </p>
            </div>
          </motion.div>

          {/* Enhanced Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="relative px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-xl rounded-2xl border border-white/20 text-white font-semibold hover:from-cyan-500/30 hover:to-purple-600/30 hover:border-white/40 transition-all duration-300 group overflow-hidden min-w-[220px]"
              whileHover={{ 
                scale: 1.05,
                y: -4,
                transition: { type: "spring", stiffness: 400, damping: 20 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <span className="text-lg">View My Work</span>
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ y: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </span>
              
              {/* Button hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative px-8 py-4 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 backdrop-blur-xl rounded-2xl border border-white/20 text-white font-semibold hover:from-emerald-500/30 hover:to-teal-600/30 hover:border-white/40 transition-all duration-300 group overflow-hidden min-w-[220px]"
              whileHover={{ 
                scale: 1.05,
                y: -4,
                transition: { type: "spring", stiffness: 400, damping: 20 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <span className="text-lg">Get In Touch</span>
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </motion.svg>
              </span>
              
              {/* Button hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400/30 rounded-full blur-sm animate-bounce delay-300"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-purple-400/30 rounded-full blur-sm animate-bounce delay-700"></div>
      <div className="absolute top-1/3 right-32 w-3 h-3 bg-emerald-400/30 rounded-full blur-sm animate-bounce delay-1000"></div>
    </section>
  );
};

export default Hero;
