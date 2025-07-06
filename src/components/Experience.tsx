import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Briefcase, Code, Database, Brain, Cloud, Container, Settings } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Front End Developer Intern",
      company: "IntrainZ Edutech",
      location: "Remote",
      duration: "Sept 2023 — Nov 2023",
      type: "Internship",
      description: "Enhanced skills in HTML, CSS, and JavaScript through project-based assignments. Developed a form validation system and an online calculator utilizing HTML, CSS, and JavaScript. Designed and executed a responsive hotel booking website to optimize user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Form Validation"],
      achievements: [
        "Built responsive hotel booking website with optimized UX",
        "Developed form validation system from scratch",
        "Created functional online calculator application",
        "Gained hands-on experience with modern web development practices"
      ]
    },
    {
      title: "Data Science Intern",
      company: "Celebal Technologies",
      location: "Remote",
      duration: "May 2023 — July 2023",
      type: "Internship",
      description: "Developed predictive models utilizing Linear Regression, Random Forest, and Logistic Regression. Conducted exploratory data analysis (EDA) on Netflix datasets using Google Colab. Implemented comparative analysis of different machine learning models for data-driven insights.",
      technologies: ["Python", "Linear Regression", "Random Forest", "Logistic Regression", "Google Colab", "EDA"],
      achievements: [
        "Built comprehensive data analysis models with multiple ML algorithms",
        "Conducted extensive EDA on Netflix datasets",
        "Implemented comparative analysis of different regression models",
        "Gained expertise in data preprocessing and model evaluation"
      ]
    }
  ];

  // Add AWS DevOps training as a special highlight
  const additionalTraining = {
    title: "AWS DevOps Professional Training",
    company: "Galaxy Technologies Edwiki",
    location: "Online",
    duration: "2025",
    type: "Professional Training",
    description: "Completed comprehensive AWS DevOps training covering essential cloud services, containerization, and orchestration. Gained hands-on experience with AWS core services including EC2, S3, Route 53, CloudWatch, IAM Basics.",// along with Docker containerization and Kubernetes orchestration for scalable application deployment.
    technologies: ["AWS EC2", "AWS S3", "AWS Route 53", "AWS CloudWatch", "AWS IAM", "Cloud Infrastructure"],//"Docker", "Kubernetes",
    achievements: [
      "Mastered AWS EC2 instance management and configuration",
      "Learned S3 bucket management and storage optimization",
      "Understood Route 53 DNS configuration and management",
      "Gained proficiency in CloudWatch monitoring and alerting",
      "Implemented IAM policies and security best practices"
      //"Mastered Docker containerization for application deployment",
      //"Learned Kubernetes orchestration for scalable container management"
    ],
    highlight: true
  };

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
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
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-stone-700 dark:from-slate-300 dark:to-stone-300 bg-clip-text text-transparent"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-stone-600 dark:text-stone-400 max-w-3xl mx-auto"
          >
            My journey through internships and professional development in software engineering, data science, and cloud technologies
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-600 to-stone-600 hidden md:block" />

          <div className="space-y-12">
            {/* AWS DevOps Training - Featured */}
            <motion.div
              variants={itemVariants}
              className="relative md:ml-16"
            >
              <div className="absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full border-4 border-white dark:border-slate-900 hidden md:block" />

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500"
              >
                <div className="flex flex-wrap items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <Cloud className="text-orange-600 mr-2" size={24} />
                      <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm font-medium rounded-full">
                        Latest Training
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {additionalTraining.title}
                    </h3>
                    <div className="flex items-center text-orange-600 dark:text-orange-400 mb-2">
                      <Building size={18} className="mr-2" />
                      <span className="font-semibold text-lg">{additionalTraining.company}</span>
                    </div>
                  </div>
                  <span className="px-4 py-2 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                    {additionalTraining.type}
                  </span>
                </div>

                <div className="flex flex-wrap gap-6 mb-6 text-sm text-stone-600 dark:text-stone-400">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {additionalTraining.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    {additionalTraining.location}
                  </div>
                </div>

                <p className="text-stone-700 dark:text-stone-300 mb-8 leading-relaxed text-lg">
                  {additionalTraining.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="flex items-center font-semibold text-slate-900 dark:text-white mb-4">
                      <Briefcase size={18} className="mr-2 text-orange-500" />
                      Key Learning Outcomes
                    </h4>
                    <ul className="space-y-3">
                      {additionalTraining.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start text-stone-600 dark:text-stone-400"
                        >
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="flex items-center font-semibold text-slate-900 dark:text-white mb-4">
                      <Cloud size={18} className="mr-2 text-amber-500" />
                      Technologies Covered
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {additionalTraining.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-sm rounded-lg border transition-colors duration-200 ${
                            tech === 'Docker' || tech === 'Kubernetes'
                              ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40'
                              : 'bg-white dark:bg-slate-700 text-stone-700 dark:text-stone-300 border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-900/20'
                          }`}
                        >
                          {tech === 'Docker' && <Container size={14} className="inline mr-1" />}
                          {tech === 'Kubernetes' && <Settings size={14} className="inline mr-1" />}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Regular Experiences */}
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative md:ml-16"
              >
                <div className="absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r from-slate-600 to-stone-600 rounded-full border-4 border-white dark:border-slate-900 hidden md:block" />

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-stone-50 dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex items-center text-slate-600 dark:text-slate-400 mb-2">
                        <Building size={18} className="mr-2" />
                        <span className="font-semibold text-lg">{experience.company}</span>
                      </div>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      experience.type === 'Internship'
                        ? 'bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200'
                        : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
                    }`}>
                      {experience.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-6 mb-6 text-sm text-stone-600 dark:text-stone-400">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {experience.location}
                    </div>
                  </div>

                  <p className="text-stone-700 dark:text-stone-300 mb-8 leading-relaxed text-lg">
                    {experience.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="flex items-center font-semibold text-slate-900 dark:text-white mb-4">
                        <Briefcase size={18} className="mr-2 text-slate-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start text-stone-600 dark:text-stone-400"
                          >
                            <div className="w-2 h-2 bg-slate-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="flex items-center font-semibold text-slate-900 dark:text-white mb-4">
                        <Code size={18} className="mr-2 text-stone-500" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white dark:bg-slate-700 text-stone-700 dark:text-stone-300 text-sm rounded-lg border border-stone-200 dark:border-slate-600 hover:bg-stone-50 dark:hover:bg-slate-600 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Gained Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-stone-50 to-slate-50 dark:from-slate-800 dark:to-stone-700 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Skills Developed Through Experience
            </h3>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="flex items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md">
                <Code className="text-slate-500 mr-3" size={24} />
                <span className="font-medium text-slate-900 dark:text-white">Frontend Development</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md">
                <Database className="text-emerald-500 mr-3" size={24} />
                <span className="font-medium text-slate-900 dark:text-white">Data Analysis</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md">
                <Cloud className="text-orange-500 mr-3" size={24} />
                <span className="font-medium text-slate-900 dark:text-white">Cloud Infrastructure</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md">
                <Container className="text-blue-500 mr-3" size={24} />
                <span className="font-medium text-slate-900 dark:text-white">DevOps & Containers</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;