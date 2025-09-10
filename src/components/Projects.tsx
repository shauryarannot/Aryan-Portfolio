"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import project1Image from "@/assets/customer-sentiment-analysis-main.jpg";
import project2Image from "@/assets/email.png";
import project3Image from "@/assets/bellabeat.jpeg";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Amazon Review Sentiment Analysis",
    description:
      "A Natural Language Processing (NLP) project comparing NLTK's VADER and Hugging Face's RoBERTa Transformer for sentiment classification on Amazon Fine Food Reviews.",
    image: project1Image,
    technologies: ["Python", "Hugging Face", "NLP", "Kaggle"],
    githubUrl: "https://github.com/aryankumar120/Amazon-Fine-Food-Reviews",
  },
  {
    id: 2,
    title: "Cold Mail Generator",
    description:
      "The Cold Mail Generator is a Generative AI tool that creates personalized cold emails for software and AI companies. Built with Llama 3.1, ChromaDB, LangChain, and Streamlit.",
    image: project2Image,
    technologies: ["Llama 3.1", "ChromaDB", "LangChain", "Streamlit"],
    githubUrl: "https://github.com/aryankumar120/Cold-Email-Generator?tab=readme-ov-file",
  },
  {
    id: 3,
    title: "Google Capstone",
    description:
      "Using SQL, R, and Tableau for the Google Data Analytics Certificate, I delivered actionable strategies for Cyclistic by analyzing data to convert casual riders to members, and for Bellabeat by using fitness data to drive marketing.",
    image: project3Image,
    technologies: ["Python", "SQL", "Tableau"],
    githubUrl: "https://github.com/aryankumar120/Google-Capstone-Project",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 25 } },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-950 to-black relative overflow-hidden"
    >
      {/* Floating decorative elements */}
      <div className="absolute top-10 right-10 w-4 h-4 bg-cyan-400/30 rounded-full blur-sm animate-bounce delay-300"></div>
      <div className="absolute bottom-32 left-16 w-6 h-6 bg-purple-400/30 rounded-full blur-sm animate-bounce delay-700"></div>
      <div className="absolute top-1/2 right-32 w-3 h-3 bg-emerald-400/30 rounded-full blur-sm animate-bounce delay-1000"></div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing expertise in machine learning, data analysis, and AI technologies.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="break-inside-avoid relative rounded-3xl overflow-hidden glassmorphic p-4 mb-6 shadow-xl bg-gradient-to-br from-indigo-800/20 to-purple-900/20 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              variants={cardVariants}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              onClick={() => setModalProject(project)}
            >
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover rounded-xl"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/40 transition-all"
                  >
                    View Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/40 transition-all"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {modalProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
          <motion.div
            className="bg-slate-900 rounded-3xl max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={() => setModalProject(null)}
            >
              &times;
            </button>
            <img
              src={modalProject.image}
              alt={modalProject.title}
              className="w-full object-cover rounded-2xl mb-6"
            />
            <h3 className="text-2xl font-bold text-white mb-4">{modalProject.title}</h3>
            <p className="text-slate-300 mb-4">{modalProject.description}</p>
            <div className="flex flex-wrap gap-2">
              {modalProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex space-x-4">
              <a
                href={modalProject.githubUrl}
                target="_blank"
                className="px-4 py-2 bg-cyan-500/20 text-white rounded-lg hover:bg-cyan-500/40 transition-all"
              >
                View Code
              </a>
              {modalProject.liveUrl && (
                <a
                  href={modalProject.liveUrl}
                  target="_blank"
                  className="px-4 py-2 bg-purple-500/20 text-white rounded-lg hover:bg-purple-500/40 transition-all"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
