"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming & Data Analysis",
    color: "from-emerald-400/20 via-green-500/15 to-teal-600/20",
    borderColor: "border-emerald-400/30",
    iconBg: "bg-emerald-500/20",
    skills: ["Python (Pandas, NumPy, Matplotlib, Seaborn)", "R", "Excel", "Google Sheets", "SQL"],
  },
  {
    title: "Data Science & AI/ML",
    color: "from-violet-400/20 via-purple-500/15 to-indigo-600/20",
    borderColor: "border-violet-400/30",
    iconBg: "bg-violet-500/20",
    skills: ["Machine Learning", "NLP", "Scikit-Learn", "TensorFlow", "Spark / PySpark", "GenAI", "LangChain", "ChromaDB"],
  },
  {
    title: "Visualization & BI",
    color: "from-amber-400/20 via-orange-500/15 to-red-500/20",
    borderColor: "border-amber-400/30",
    iconBg: "bg-amber-500/20",
    skills: ["Tableau", "Power BI", "Streamlit"],
  },
  {
    title: "DevOps & Tools",
    color: "from-cyan-400/20 via-blue-500/15 to-indigo-600/20",
    borderColor: "border-cyan-400/30",
    iconBg: "bg-cyan-500/20",
    skills: ["AWS (EC2)", "Docker", "Git", "GitHub", "Postman", "PyCharm", "React.js"],
  },
];

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

const cardVariants = {
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

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-950 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", damping: 25 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Expertise across the full data science and development stack
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`group relative p-8 rounded-3xl glassmorphic border ${category.borderColor} shadow-2xl bg-gradient-to-br ${category.color} backdrop-blur-xl hover:shadow-3xl transition-all duration-500`}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", damping: 20 }
              }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/10 via-transparent to-white/5 p-[1px] -z-10">
                <div className={`w-full h-full rounded-3xl bg-gradient-to-br ${category.color} backdrop-blur-xl`}></div>
              </div>
              
              {/* Header with Icon */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-2xl ${category.iconBg} backdrop-blur-sm border border-white/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-6 h-6 bg-gradient-to-br from-white to-slate-300 rounded-lg opacity-80"></div>
                </div>
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-white group-hover:text-slate-100 transition-colors duration-300"
                  layoutId={`title-${idx}`}
                >
                  {category.title}
                </motion.h3>
              </div>

              {/* Skills Grid */}
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={containerVariants}
              >
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    variants={skillVariants}
                    className="group/skill px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium shadow-lg backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 cursor-default"
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      transition: { type: "spring", damping: 15, stiffness: 300 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 group-hover/skill:text-slate-100 transition-colors duration-200">
                      {skill}
                    </span>
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                  </motion.span>
                ))}
              </motion.div>

              {/* Bottom shine effect */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional floating elements for ambiance */}
        <div className="absolute top-10 right-10 w-4 h-4 bg-cyan-400/30 rounded-full blur-sm animate-bounce delay-300"></div>
        <div className="absolute bottom-20 left-10 w-6 h-6 bg-purple-400/30 rounded-full blur-sm animate-bounce delay-700"></div>
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-emerald-400/30 rounded-full blur-sm animate-bounce delay-1000"></div>
      </div>
    </section>
  );
}
