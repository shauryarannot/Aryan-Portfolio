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
    transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, y: 0, scale: 1, 
    transition: { type: "spring", damping: 25, stiffness: 120, duration: 0.6 } 
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", damping: 20 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-2"
          >
            Technical Skills
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-slate-400 mt-4 text-sm md:text-base max-w-xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Expertise across the full data science and development stack
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`relative p-6 rounded-2xl glassmorphic border ${cat.borderColor} shadow-md bg-gradient-to-br ${cat.color} backdrop-blur-lg hover:shadow-xl transition-all duration-300`}
              whileHover={{ y: -4, transition: { type: "spring", damping: 20 } }}
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 ${cat.iconBg} rounded-xl flex items-center justify-center mr-3`}></div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">{cat.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-2 rounded-xl bg-white/10 text-white text-sm font-medium backdrop-blur-sm border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
