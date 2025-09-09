import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: 'https://github.com/aryankumar120',
      color: 'from-slate-400 to-slate-600',
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: 'https://linkedin.com/in/yourprofile',
      color: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      url: 'https://twitter.com/yourprofile',
      color: 'from-sky-400 to-sky-600',
    },
  ];

  return (
    <footer className="py-16 px-6 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="relative p-8 rounded-3xl glassmorphic border border-white/10 shadow-2xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/10 via-transparent to-white/5 p-[1px] -z-10">
            <div className="w-full h-full rounded-3xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl"></div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
            {/* Brand Section */}
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                Aryan Portfolio
              </motion.div>
              <p className="text-slate-400 text-sm max-w-md text-center lg:text-left">
                Data Engineer & Analyst passionate about turning data into actionable insights
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center space-y-4">
              <p className="text-slate-300 font-medium">Connect with me</p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-2xl glassmorphic border border-white/10 shadow-lg bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md hover:shadow-xl transition-all duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      y: -4,
                      transition: { type: "spring", damping: 15 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className={`text-slate-400 group-hover:bg-gradient-to-r group-hover:${link.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                      {link.icon}
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Back to Top */}
            <div className="flex flex-col items-center space-y-4">
              <p className="text-slate-300 font-medium">Back to top</p>
              <motion.button
                onClick={scrollToTop}
                className="relative p-4 rounded-2xl glassmorphic border border-white/20 shadow-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md hover:shadow-xl transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.1,
                  y: -4,
                  transition: { type: "spring", damping: 15 }
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Back to top"
              >
                <motion.div
                  className="text-slate-400 group-hover:text-white transition-colors duration-300"
                  whileHover={{ rotate: -90 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </motion.div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </motion.button>
            </div>
          </div>

          {/* Bottom shine effect */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50"></div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          className="relative p-6 rounded-2xl glassmorphic border border-white/5 shadow-xl bg-gradient-to-br from-white/3 to-transparent backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-slate-400 text-sm">
              © {currentYear} Aryan Kumar. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2 text-slate-400 text-xs">
              <span>Built with</span>
              <div className="flex items-center space-x-1">
                <motion.span 
                  className="text-cyan-400"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  React
                </motion.span>
                <span>•</span>
                <motion.span 
                  className="text-blue-400"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  TypeScript
                </motion.span>
                <span>•</span>
                <motion.span 
                  className="text-emerald-400"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  Tailwind
                </motion.span>
                <span>•</span>
                <motion.span 
                  className="text-purple-400"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  Framer Motion
                </motion.span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-slate-400 text-xs">
              <span>Designed with</span>
              <motion.span 
                className="text-red-400 text-sm"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ❤️
              </motion.span>
              <span>for the modern web</span>
            </div>
          </div>

          {/* Subtle shine effect */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-30"></div>
        </motion.div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-8 right-16 w-3 h-3 bg-cyan-400/20 rounded-full blur-sm animate-bounce delay-300"></div>
        <div className="absolute bottom-8 left-16 w-4 h-4 bg-purple-400/20 rounded-full blur-sm animate-bounce delay-700"></div>
      </div>
    </footer>
  );
};

export default Footer;
