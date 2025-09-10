import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '@/assets/nitchu.jpg';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", damping: 25, stiffness: 120, duration: 0.6 },
    },
  };

  const stats = [
    { value: "20+", label: "Projects", color: "from-emerald-400 to-teal-500" },
    { value: "1+", label: "Years", color: "from-violet-400 to-purple-500" },
    { value: "100%", label: "Passion", color: "from-amber-400 to-orange-500" },
  ];

  const highlights = [
    { text: "I'm a Computer Science undergraduate passionate about building scalable solutions that solve real-world problems using data." },
    { text: "I specialize in Python, SQL, Data Engineering, and Generative AI, applying Machine Learning, NLP, and Big Data techniques." },
    { text: "Outside coding, I enjoy hackathons, exploring new AI models, and analyzing datasets to uncover actionable insights." }
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-black flex items-center relative overflow-hidden"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring", damping: 20 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">About</span>{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Single Large 3D Glassmorphic Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center"
        >
          <CardContainer className="inter-var w-full max-w-6xl">
            <CardBody className="w-full min-h-[600px] lg:min-h-[700px] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 shadow-2xl backdrop-blur-xl relative p-8 lg:p-12">
              <CardItem translateZ="20" className="w-full h-full">
                
                {/* Content Grid Inside the 3D Card */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full">
                  
                  {/* Image Section */}
                  <motion.div variants={itemVariants} className="flex justify-center">
                    <CardItem translateZ="80" className="relative">
                      <div className="w-[280px] md:w-[360px] lg:w-[400px] h-[280px] md:h-[360px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                        <img
                          src={profileImage}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CardItem>
                  </motion.div>

                  {/* Text Content Section */}
                  <motion.div variants={itemVariants} className="space-y-8">
                    
                    {/* Highlights */}
                    <CardItem translateZ="40" className="space-y-6">
                      {highlights.map((highlight, index) => (
                        <motion.div
                          key={index}
                          className="group p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-500"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                          whileHover={{ y: -3 }}
                        >
                          <p className="text-gray-200 text-base md:text-lg leading-relaxed font-medium">
                            {highlight.text}
                          </p>
                        </motion.div>
                      ))}
                    </CardItem>

                    {/* Stats */}
                    <CardItem translateZ="60" className="grid grid-cols-3 gap-4 lg:gap-6">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          className="group p-4 lg:p-6 rounded-2xl border border-white/25 text-center bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm hover:border-white/40 transition-all duration-500"
                          whileHover={{ scale: 1.05, y: -3 }}
                        >
                          <div className={`text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                            {stat.value}
                          </div>
                          <div className="text-sm lg:text-base text-gray-300 font-semibold">{stat.label}</div>
                        </motion.div>
                      ))}
                    </CardItem>

                    {/* CTA Button */}
                    <CardItem translateZ="50" className="pt-4">
                      <motion.button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group w-full lg:w-auto px-8 lg:px-10 py-4 lg:py-5 rounded-2xl text-white font-bold text-lg bg-gradient-to-r from-emerald-600/30 to-teal-600/30 backdrop-blur-xl border border-white/40 hover:from-emerald-500/40 hover:to-teal-500/40 hover:border-white/50 transition-all duration-500 shadow-xl hover:shadow-emerald-500/25 relative overflow-hidden"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          Let's Work Together 
                          <motion.span 
                            className="inline-block"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          >
                            →
                          </motion.span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </motion.button>
                    </CardItem>

                  </motion.div>
                </div>

              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
