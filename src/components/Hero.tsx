import { motion } from 'framer-motion'
import profileImage from '@/assets/nitchu.jpg'
import { BackgroundLines } from "@/components/ui/background-lines";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  
  const words = [
    {
      text: "Aryan",
      className: "text-blue-400",
    },
    {
      text: "Kumar",
      className: "text-purple-400",
    },
    {
      text: "|",
      className: "text-white",
    },
    {
      text: "Data",
      className: "text-blue-300",
    },
    {
      text: "Engineer",
      className: "text-blue-400",
    },
    {
      text: "&",
      className: "text-white",
    },
    {
      text: "Analyst",
      className: "text-purple-400",
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col relative overflow-hidden bg-black"
    >
      <BackgroundLines className="absolute inset-0 z-0" />

      <div className="flex-1 flex items-center justify-center px-6 relative z-10">
        <div className="text-center max-w-7xl mx-auto">
          {/* Profile Avatar */}
          <motion.div
            className="relative w-44 h-44 mx-auto mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-purple-400/20 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden shadow-lg">
                <img
                  src={profileImage}
                  alt="Aryan - Data Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Main Heading with Typewriter */}
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white block mb-6 text-3xl sm:text-4xl">
              Hey, I'm
            </span>
            <div className="flex justify-center text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight">
              <TypewriterEffectSmooth words={words} />
            </div>
          </motion.div>

          {/* Description */}
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            Computer Science undergraduate specializing in <span className="text-blue-300 font-semibold">data engineering</span> and <span className="text-purple-300 font-semibold">analytics</span>. 
            Experienced with Python, SQL, AWS, and modern machine learning workflows to build scalable data solutions.
          </p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-4 text-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl border border-white/20 text-white font-medium hover:from-blue-500/30 hover:to-purple-600/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 text-lg bg-gradient-to-r from-purple-500/20 to-blue-600/20 rounded-xl border border-white/20 text-white font-medium hover:from-purple-500/30 hover:to-blue-600/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
