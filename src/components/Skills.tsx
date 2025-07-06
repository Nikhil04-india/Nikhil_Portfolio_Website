import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 70, color: "from-amber-600 to-yellow-600" },
        { name: "Python", level: 85, color: "from-slate-600 to-stone-600" },
        { name: "HTML", level: 95, color: "from-orange-600 to-red-600" },
        { name: "CSS", level: 80, color: "from-blue-600 to-slate-600" },
        { name: "React.js", level: 70, color: "from-cyan-600 to-blue-600" },
      ]
    },
    {
      title: "Database & Backend",
      skills: [
        { name: "PostgreSQL", level: 80, color: "from-blue-700 to-slate-700" },
        { name: "SQL", level: 85, color: "from-stone-600 to-slate-600" },
        { name: "REST APIs", level: 75, color: "from-purple-600 to-indigo-600" },
        { name: "Google Colab", level: 80, color: "from-orange-600 to-amber-600" },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "VS Code", level: 95, color: "from-blue-600 to-slate-600" },
        { name: "Android Studio", level: 70, color: "from-green-700 to-emerald-700" },
        { name: "GitHub", level: 85, color: "from-slate-700 to-stone-700" },
        { name: "Vercel", level: 75, color: "from-black to-slate-800" },
        { name: "Netlify", level: 75, color: "from-teal-600 to-cyan-600" },
        { name: "AWS DevOps", level: 75, color: "from-blue-600 to-slate-600" }
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="skills" className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-700 to-stone-700 dark:from-slate-300 dark:to-stone-300 bg-clip-text text-transparent"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-stone-600 dark:text-stone-400 max-w-3xl mx-auto"
          >
            A comprehensive overview of my technical expertise and proficiency levels
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-stone-50 dark:bg-slate-800 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-stone-500 dark:text-stone-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-stone-200 dark:bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-6"
          >
            Soft Skills
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-4"
          >
            {[
              "Communication", "Teamwork", "Problem-solving", "Time management"
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-gradient-to-r from-slate-600 to-stone-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* DevOps & Cloud */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-6"
          >
            DevOps & Cloud
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-4"
          >
            {[
              "GitHub", "Vercel", "Netlify", "Basics of AWS"
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white dark:bg-slate-800 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-stone-700 dark:text-stone-300 font-medium border border-stone-200 dark:border-slate-700"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;