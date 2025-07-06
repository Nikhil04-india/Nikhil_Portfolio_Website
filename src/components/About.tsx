import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Target, Users, Award, Zap, Heart, Coffee } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expertise in React.js, Python, and modern web technologies",
      color: "from-slate-600 to-stone-600"
    },
    {
      icon: Lightbulb,
      title: "Data Science Skills",
      description: "Experience with machine learning models and data analysis",
      color: "from-amber-600 to-yellow-600"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "150+ programming questions solved on competitive platforms",
      color: "from-emerald-600 to-green-600"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong communication and teamwork abilities",
      color: "from-rose-600 to-pink-600"
    },
    {
      icon: Award,
      title: "Certified Professional",
      description: "META Front-End Developer and SAP certified",
      color: "from-indigo-600 to-purple-600"
    },
    {
      icon: Zap,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices",
      color: "from-red-600 to-rose-600"
    }
  ];

  const stats = [
    { number: "4+", label: "Projects Built", icon: Code },
    { number: "0+", label: "Years Experience / Fresher", icon: Heart },
    { number: "150+", label: "Problems Solved", icon: Zap },
    { number: "5+", label: "Certifications", icon: Award }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-stone-50 to-slate-50 dark:from-stone-900 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-700 to-stone-700 dark:from-slate-300 dark:to-stone-300 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-stone-600 dark:text-stone-400 max-w-4xl mx-auto leading-relaxed"
          >
            Dedicated software developer with a strong foundation in building dynamic web applications and data-driven solutions
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-slate-600 to-stone-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white" size={28} />
              </div>
              <div className="text-3xl font-black text-slate-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-stone-600 dark:text-stone-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                My Journey
              </h3>
              <div className="space-y-6 text-stone-600 dark:text-stone-400 leading-relaxed">
                <p>
                  As a dedicated software developer with a Master's in Computer Applications from Techno India University, 
                  I've built a strong foundation in modern web technologies. My journey has been driven 
                  by a passion for creating user-focused projects and leveraging technology to solve real-world challenges.
                </p>
                <p>
                  I specialize in building dynamic web applications using React.js, JavaScript, and Python. My experience 
                  spans from frontend development to database management with PostgreSQL and SQL.
                </p>
                <p>
                  I'm committed to continuous learning and have earned certifications from META and SAP, while actively 
                  contributing to innovative software development initiatives. I'm always excited to collaborate on 
                  projects that make a meaningful impact.
                </p>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-slate-600 to-stone-600 p-8 rounded-2xl text-white"
            >
              <h4 className="text-xl font-bold mb-4">What Drives Me</h4>
              <p className="leading-relaxed">
                I believe in the power of technology to transform ideas into reality. Every project I work on is an 
                opportunity to create something meaningful, solve complex problems, and contribute to the digital 
                future we're all building together.
              </p>
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`bg-gradient-to-br ${highlight.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <highlight.icon className="text-white" size={26} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                  {highlight.title}
                </h4>
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-stone-600 dark:text-stone-400 mb-8 text-lg leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or simply connect with fellow developers and tech enthusiasts.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-700 to-stone-700 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Start a Conversation
              <Users className="ml-3" size={22} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
