import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '@/assets/nitchu.jpg';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

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

  return (
    <section 
      id="about" 
      ref={ref}
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-black flex items-center relative overflow-hidden"
    >
      {/* Background Effects */}
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

        {/* Main Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto"
        >
          {/* Image Card */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
            <CardContainer className="inter-var">
              <CardBody className="w-[340px] md:w-[500px] h-[800px] md:h-[540px] rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-2xl relative">
                <CardItem translateZ="80" className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-[90%] h-[90%] object-cover rounded-2xl shadow-2xl"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>

          {/* Writeup + Stats */}
          <motion.div variants={itemVariants} className="space-y-12">
            {/* Narrative Paragraph */}
            <div className="space-y-6 max-w-3xl">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-lg md:text-xl leading-relaxed text-gray-300 border-l-4 border-transparent bg-gradient-to-b from-emerald-500/40 to-cyan-500/40 pl-6 rounded-md"
              >
                I’m a <span className="font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Computer Science undergraduate</span> passionate about building scalable solutions that solve real-world problems through data and intelligent systems. With strong expertise in <span className="font-semibold text-white">Python, SQL, Data Engineering, and Generative AI</span>, I apply Machine Learning, NLP, and Big Data techniques to create impactful applications.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl leading-relaxed text-gray-300 pl-6"
              >
                Beyond coding, I thrive in <span className="font-semibold text-white">hackathons</span>, enjoy exploring cutting-edge AI models, and love analyzing datasets to uncover actionable insights. With <span className="font-semibold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">100% passion</span> for learning and creating, I’m constantly pushing the boundaries of what technology can achieve.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="group p-6 rounded-3xl border border-white/20 text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md hover:border-white/30 transition-all duration-500"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-base text-gray-300 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="pt-4">
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-10 py-5 rounded-3xl text-white font-bold text-lg bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-xl border border-white/30 hover:from-emerald-500/30 hover:to-teal-500/30 hover:border-white/40 transition-all duration-500 shadow-2xl hover:shadow-emerald-500/25 relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Let’s Work Together 
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
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
