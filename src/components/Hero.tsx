import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ArrowDown, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Premium Matte Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-stone-50 to-neutral-100 dark:from-slate-900 dark:via-stone-900 dark:to-neutral-900">
        {/* Geometric Shapes with Matte Colors */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-32 h-32 border border-stone-200 dark:border-stone-700 rounded-full opacity-20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-20 w-24 h-24 border border-slate-200 dark:border-slate-700 rounded-full opacity-20"
          />
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-stone-400 to-slate-400 rounded-lg opacity-10 rotate-45"
          />
        </div>

        {/* Floating Particles with Matte Colors */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-4 h-4 text-stone-400 dark:text-stone-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Photo Section - Now properly positioned */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12 relative"
          >
            <div className="relative inline-block">
              <div className="w-44 h-44 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-gradient-to-br from-stone-200 to-slate-300 dark:from-stone-700 dark:to-slate-700">
                <img
                  src="/nikhil-photo.jpg"
                  alt="Nikhil Agarwal"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <motion.div
                variants={sparkleVariants}
                animate="animate"
                className="absolute -top-2 -right-2 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Code className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Title Section with Matte Colors */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-700 via-stone-600 to-neutral-700 dark:from-slate-300 dark:via-stone-300 dark:to-neutral-300 bg-clip-text text-transparent">
                Nikhil Agarwal
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-emerald-600 rounded-full"
              />
              <span className="text-sm text-stone-600 dark:text-stone-400 font-medium">
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Enhanced Subtitle with Matte Colors */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-6">
              <span className="text-stone-700 dark:text-stone-300">Software Developer</span> & 
              <span className="text-slate-700 dark:text-slate-300"> Frontend Specialist</span>
            </h2>
            <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed">
              Dedicated software developer with expertise in building dynamic web applications and data-driven solutions.
              <br />
              <span className="text-base md:text-lg">MCA Graduate • React.js Expert • Problem Solver</span>
            </p>
          </motion.div>

          {/* Enhanced Action Buttons with Matte Colors */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            <motion.a
              href="https://drive.google.com/file/d/11-obP31lcTl03IGRPUdNt-D1p8c8OEKE/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-700 to-stone-700 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Download className="mr-3 group-hover:animate-bounce" size={22} />
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center px-8 py-4 border-2 border-slate-700 text-slate-700 dark:text-slate-300 dark:border-slate-300 font-bold rounded-xl hover:bg-slate-700 hover:text-white dark:hover:bg-slate-300 dark:hover:text-slate-900 transition-all duration-300"
            >
              <Mail className="mr-3 group-hover:animate-pulse" size={22} />
              Let's Connect
            </motion.a>
          </motion.div>

          {/* Enhanced Social Links with Matte Colors */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center space-x-8"
          >
            {[
              { icon: Github, href: 'https://github.com/Nikhil04-india', label: 'GitHub', color: 'hover:text-slate-700 dark:hover:text-slate-300' },
              { icon: Linkedin, href: 'https://linkedin.com/in/nikhil-04', label: 'LinkedIn', color: 'hover:text-stone-700 dark:hover:text-stone-300' },
              { icon: Mail, href: 'mailto:nikagarwal983@gmail.com', label: 'Email', color: 'hover:text-neutral-700 dark:hover:text-neutral-300' },
            ].map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-stone-600 dark:text-stone-400 ${color} border border-stone-200 dark:border-slate-700`}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-stone-500 dark:text-stone-400 mb-2">Scroll to explore</span>
          <ArrowDown className="text-stone-400 dark:text-stone-500" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;