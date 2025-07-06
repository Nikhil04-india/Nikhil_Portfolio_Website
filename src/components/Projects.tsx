import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Star, Database, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Medical-Home App",
      description: "Created an Android application for managing medical appointments, lab tests, and medicine purchases using Java and SQLite. Developed intuitive user interfaces for booking and purchasing functionalities.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Android Studio", "Java", "SQLite"],
      features: ["Medical appointments booking", "Lab test scheduling", "Medicine purchase system", "User-friendly interface"],
      duration: "3 months",
      team: "Solo Project",
      status: "Completed",
      category: "Mobile App",
      githubUrl: "https://github.com/Nikhil04-india/Medical_Home_App", // Add your actual GitHub URL
      liveUrl: "https://github.com/Nikhil04-india/Medical_Home_App", // Add your actual demo URL or APK download link
      icon: Smartphone
    },
    {
      title: "Crypto Exchange Website",
      description: "Built a cryptocurrency tracker platform with React.js and PostgreSQL, integrating live data for 100+ cryptocurrencies and achieving 99.9% uptime. Managed backend functionalities with PostgreSQL and integrated live data from the CoinGecko API.",
      image: "https://images.pexels.com/photos/6771899/pexels-photo-6771899.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React.js", "PostgreSQL", "Chakra UI", "CoinGecko API"],
      features: ["Real-time crypto tracking", "100+ cryptocurrencies", "99.9% uptime", "Live API integration"],
      duration: "4 months",
      team: "Solo Project",
      status: "Completed",
      category: "Web Application",
      githubUrl: "", // Add your actual GitHub URL
      liveUrl: "https://majorproject-azure.vercel.app/", // Add your actual live demo URL
      icon: Database
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
    <section id="projects" className="py-16 bg-stone-50 dark:bg-slate-800">
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
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-stone-600 dark:text-stone-400 max-w-3xl mx-auto"
          >
            A showcase of my technical projects demonstrating expertise in web development and mobile applications
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 dark:bg-slate-800/90 p-2 rounded-lg">
                    <project.icon className="text-slate-600" size={20} />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' 
                      : 'bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-stone-600 dark:text-stone-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Project Meta Info */}
                <div className="flex flex-wrap gap-4 mb-4 text-xs text-stone-500 dark:text-stone-400">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {project.duration}
                  </div>
                  <div className="flex items-center">
                    <Users size={14} className="mr-1" />
                    {project.team}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-1 text-xs text-stone-600 dark:text-stone-400">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Star size={10} className="mr-2 text-amber-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons - Now using individual project URLs */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center px-3 py-2 bg-gradient-to-r from-slate-700 to-stone-700 text-white text-sm rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink size={14} className="mr-2" />
                    {project.category === 'Mobile App' ? 'Download' : 'Live Demo'}
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center px-3 py-2 border-2 border-stone-300 dark:border-slate-600 text-stone-700 dark:text-stone-300 text-sm rounded-lg hover:bg-stone-50 dark:hover:bg-slate-600 transition-all duration-300"
                  >
                    <Github size={14} className="mr-2" />
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Project Impact
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-600 mb-2">2+</div>
                <div className="text-stone-600 dark:text-stone-400">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
                <div className="text-stone-600 dark:text-stone-400">Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">8+</div>
                <div className="text-stone-600 dark:text-stone-400">Technologies Used</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;