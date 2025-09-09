import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import project1Image from '@/assets/customer-sentiment-analysis-main.jpg';
import project2Image from '@/assets/email.png';
import project3Image from '@/assets/bellabeat.jpeg';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Amazon Review Sentiment Analysis",
      description: "A Natural Language Processing (NLP) project comparing NLTK's VADER and Hugging Face's RoBERTa Transformer for sentiment classification on Amazon Fine Food Reviews.",
      image: project1Image,
      technologies: ["Python", "Hugging Face", "NLP", "Kaggle"],
      color: "from-emerald-400/20 via-green-500/15 to-teal-600/20",
      borderColor: "border-emerald-400/30",
      accentColor: "emerald-400",
      githubUrl: "https://github.com/aryankumar120/Amazon-Fine-Food-Reviews",
    },
    {
      id: 2,
      title: "Cold Mail Generator",
      description: "The Cold Mail Generator is a Generative AI tool that creates personalized cold emails for software and AI companies. It's built with Llama 3.1, ChromaDB, LangChain, and Streamlit.",
      image: project2Image,
      technologies: ["Llama 3.1", "ChromaDB", "LangChain", "Streamlit"],
      color: "from-violet-400/20 via-purple-500/15 to-indigo-600/20",
      borderColor: "border-violet-400/30",
      accentColor: "violet-400",
      githubUrl: "https://github.com/aryankumar120/Cold-Email-Generator?tab=readme-ov-file",
    },
    {
      id: 3,
      title: "Google Capstone",
      description: "Using SQL, R, and Tableau for the Google Data Analytics Certificate, I delivered actionable strategies for Cyclistic by analyzing data to convert casual riders to members, and for Bellabeat by using fitness data to drive marketing.",
      image: project3Image,
      technologies: ["Python", "SQL", "Tableau"],
      color: "from-amber-400/20 via-orange-500/15 to-red-500/20",
      borderColor: "border-amber-400/30",
      accentColor: "amber-400",
      githubUrl: "https://github.com/aryankumar120/Google-Capstone-Project",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        duration: 0.8,
      },
    },
  };

  return (
    <section 
      id="projects" 
      className="min-h-screen py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-950 to-black relative overflow-hidden flex items-center"
      ref={ref}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/3 left-1/6 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, type: "spring", damping: 25 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Featured 
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ml-4">
              Projects
            </span>
          </motion.h2>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          
          <motion.p
            className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            A collection of projects that showcase my expertise in machine learning, 
            data analysis, and cutting-edge AI technologies
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="group relative"
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className={`relative p-6 rounded-3xl glassmorphic border ${project.borderColor} shadow-2xl bg-gradient-to-br ${project.color} backdrop-blur-xl hover:shadow-3xl transition-all duration-500 overflow-hidden h-full`}>
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/10 via-transparent to-white/5 p-[1px] -z-10">
                  <div className={`w-full h-full rounded-3xl bg-gradient-to-br ${project.color} backdrop-blur-xl`}></div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 text-xs font-medium bg-white/10 text-${project.accentColor} rounded-full border border-white/20 backdrop-blur-sm`}>
                    {project.category}
                  </span>
                </div>

                {/* Project Image */}
                <div className="relative overflow-hidden rounded-2xl mb-6 group-hover:shadow-2xl transition-all duration-500">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Actions */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0,
                      scale: hoveredProject === project.id ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-xl text-white font-medium border border-white/30 hover:bg-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="flex items-center space-x-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>View Code</span>
                        </span>
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="space-y-4 flex-grow">
                  <motion.h3 
                    className="text-xl md:text-2xl font-bold text-white group-hover:text-slate-100 transition-colors duration-300"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-xl border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * techIndex }}
                        whileHover={{ 
                          scale: 1.05,
                          y: -2,
                          transition: { type: "spring", stiffness: 400, damping: 20 }
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Bottom Shine Effect */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-cyan-400/30 rounded-full blur-sm animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 bg-purple-400/30 rounded-full blur-sm animate-bounce delay-700"></div>
        <div className="absolute top-1/2 right-32 w-3 h-3 bg-emerald-400/30 rounded-full blur-sm animate-bounce delay-1000"></div>
      </div>
    </section>
  );
};

export default Projects;
