import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '@/assets/nitchu.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        duration: 0.6,
      },
    },
  };

  const stats = [
    { value: "20+", label: "Projects", color: "from-emerald-400 to-teal-500" },
    { value: "1+", label: "Years", color: "from-violet-400 to-purple-500" },
    { value: "100%", label: "Passion", color: "from-amber-400 to-orange-500" },
  ];

  return (
    <section 
      id="about" 
      className="min-h-screen py-16 px-6 bg-gradient-to-br from-slate-900 via-slate-950 to-black relative overflow-hidden flex items-center"
      ref={ref}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-300"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6, type: "spring", damping: 20 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              About 
            </span>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent ml-4">
              Me
            </span>
          </motion.h2>
          
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="relative group flex flex-col h-full"
          >
            <div className="relative flex-1">
              {/* Animated background glow */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 via-teal-500/15 to-cyan-600/20 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.03, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Glassmorphic container */}
              <div className="relative p-3 rounded-3xl glassmorphic border border-emerald-400/30 shadow-2xl bg-gradient-to-br from-emerald-400/10 via-teal-500/5 to-cyan-600/10 backdrop-blur-xl group-hover:shadow-3xl transition-all duration-500 h-full flex flex-col">
                {/* Image */}
                <motion.img
                  src={profileImage}
                  alt="Aryan-Data Engineer"
                  className="w-full rounded-2xl object-cover shadow-2xl flex-1"
                  style={{ aspectRatio: '4/5' }}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-3 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative elements */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400/60 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-cyan-400/40 rounded-full blur-sm animate-pulse delay-1000"></div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-6 flex flex-col h-full">
            {/* Main Content */}
            <div className="space-y-4 flex-1">
              <motion.div 
                variants={itemVariants} 
                className="space-y-4 text-slate-300 leading-relaxed"
              >
                <motion.p
                  className="relative p-4 rounded-2xl glassmorphic border border-white/10 shadow-xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm text-sm"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  I'm a Computer Science undergraduate passionate about building scalable solutions that solve real-world problems and deliver business value through data.
                </motion.p>
                
                <motion.p
                  className="relative p-4 rounded-2xl glassmorphic border border-white/10 shadow-xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm text-sm"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  My journey began with a curiosity for data, which has evolved into practical experience in Python, SQL, Data Engineering, and Generative AI. I specialize in applying Machine Learning, NLP, and Big Data techniques.
                </motion.p>
                
                <motion.p
                  className="relative p-4 rounded-2xl glassmorphic border border-white/10 shadow-xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm text-sm"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  When I'm not coding, you'll find me competing in hackathons, exploring new AI models, or diving into large datasets to uncover actionable insights.
                </motion.p>
              </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative p-4 rounded-2xl glassmorphic border border-white/20 shadow-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl text-center group hover:shadow-2xl transition-all duration-500"
                  whileHover={{ 
                    y: -4,
                    transition: { type: "spring", damping: 20 }
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 group-hover:scale-105 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {stat.label}
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 backdrop-blur-xl rounded-2xl border border-white/20 text-white font-semibold hover:from-emerald-500/30 hover:to-teal-600/30 hover:border-white/40 transition-all duration-300 group overflow-hidden w-full sm:w-auto"
                whileHover={{ 
                  scale: 1.02,
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 20 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Let's Work Together</span>
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
                
                {/* Button hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-16 left-16 w-3 h-3 bg-emerald-400/30 rounded-full blur-sm animate-bounce delay-300"></div>
        <div className="absolute bottom-20 right-12 w-4 h-4 bg-teal-400/30 rounded-full blur-sm animate-bounce delay-700"></div>
        <div className="absolute top-1/2 left-20 w-2 h-2 bg-cyan-400/30 rounded-full blur-sm animate-bounce delay-1000"></div>
      </div>
    </section>
  );
};

export default About;
