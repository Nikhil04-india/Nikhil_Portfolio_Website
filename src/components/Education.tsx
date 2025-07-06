import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "Techno India University, Kolkata, Saltlake",
      location: "Kolkata, West Bengal, India",
      duration: "Nov 2022 — July 2024",
      grade: "7.88 CGPA",
      status: "Completed",
      description: "Advanced studies in computer science with specialization in software development, data structures, algorithms, and modern web technologies. Focused on practical application of theoretical concepts through hands-on projects.",
      coursework: [
        "Advanced Data Structures & Algorithms",
        "Software Engineering & Project Management",
        "Database Management Systems",
        "Web Technologies & Frameworks",
        "Machine Learning & Data Science",
        "System Design & Architecture"
      ],
      projects: [
        "Developed Medical-Home Android application as major project",
        "Built Crypto Exchange website with real-time data"
      ]
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Techno India University, Kolkata, Saltlake",
      location: "Kolkata, West Bengal, India", 
      duration: "Aug 2019 — July 2022",
      grade: "8.44 CGPA",
      status: "Completed",
      description: "Comprehensive undergraduate program covering fundamental computer science concepts, programming languages, and software development practices. Built strong foundation in programming and problem-solving.",
      coursework: [
        "Programming Fundamentals (C, Python, Java)",
        "Data Structures & Algorithms",
        "Computer Networks & Security",
        "Operating Systems",
        "Web Development (HTML, CSS, JavaScript)",
        "Database Systems & SQL"
      ],
      projects: [
        "Library Management System using Java",
        "Personal Portfolio Website development",
        "Student Management System with database integration"
      ]
    }
  ];

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

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Education
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            My academic journey in computer science and application development at Techno India University
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-start mb-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg mr-4">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {education.degree}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        {education.institution}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {education.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {education.location}
                        </div>
                        <div className="flex items-center">
                          <Award size={16} className="mr-2" />
                          {education.grade}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {education.description}
                  </p>
                </div>

                <span className={`px-4 py-2 rounded-full text-sm font-medium lg:ml-4 ${
                  education.status === 'Completed'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }`}>
                  {education.status}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="flex items-center font-semibold text-gray-900 dark:text-white mb-4">
                    <BookOpen size={18} className="mr-2 text-blue-500" />
                    Key Coursework
                  </h4>
                  <ul className="space-y-2">
                    {education.coursework.map((course, courseIndex) => (
                      <li
                        key={courseIndex}
                        className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center font-semibold text-gray-900 dark:text-white mb-4">
                    <Award size={18} className="mr-2 text-purple-500" />
                    Notable Projects
                  </h4>
                  <ul className="space-y-2">
                    {education.projects.map((project, projectIndex) => (
                      <li
                        key={projectIndex}
                        className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                      >
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Academic Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Academic Highlights
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">8.44</div>
                <div className="text-gray-600 dark:text-gray-400">BCA CGPA</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">7.88</div>
                <div className="text-gray-600 dark:text-gray-400">MCA CGPA</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;