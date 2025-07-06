import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, Zap, Code, Users, Award, TrendingUp, Brain, Medal, Cloud } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Code,
      title: "150+ Programming Problems Solved",
      description: "Resolved 150+ programming questions on platforms such as LeetCode and HackerRank",
      category: "Technical",
      color: "from-slate-600 to-stone-600"
    },
    {
      icon: Award,
      title: "META Front-End Developer Certificate",
      description: "Completed advanced coursework in React JS, HTML, CSS, JavaScript, and UI/UX through Meta",
      category: "Certification",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: Target,
      title: "SAP S/4HANA Development",
      description: "Completed the course through SAP University Alliances",
      category: "Certification",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Cloud,
      title: "AWS DevOps Professional Training",
      description: "Mastered AWS EC2, S3, Route 53, CloudWatch, IAM fundamentals", // Docker containerization, and Kubernetes orchestration through Galaxy Technologies Edwiki
      category: "Cloud & DevOps",
      color: "from-orange-600 to-amber-600",
      highlight: true
    },
    {
      icon: Medal,
      title: "ALOHA Mental Mathematics",
      description: "Secured 2nd place in the ALOHA Mental Mathematics State-Level Competitions",
      category: "Competition",
      color: "from-yellow-600 to-orange-600"
    },
    {
      icon: Users,
      title: "BePoliteCalculta Campaign",
      description: "Contributed to the BePoliteCalculta Crowd-Funding Campaign, raising 15,000 INR for a solar-powered light for a street vendor in Kolkata",
      category: "Social Impact",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: TrendingUp,
      title: "Academic Excellence",
      description: "Maintained consistent academic performance with 8.44 CGPA in BCA and 7.88 CGPA in MCA",
      category: "Academic",
      color: "from-indigo-600 to-purple-600"
    },
    {
      icon: Zap,
      title: "Project Success Rate",
      description: "Successfully completed all major projects including Medical-Home App and Crypto Exchange Website",
      category: "Professional",
      color: "from-teal-600 to-green-600"
    }
  ];

  const stats = [
    { value: "150+", label: "Problems Solved", icon: Code },
    { value: "6+", label: "Certifications", icon: Award },
    { value: "2nd", label: "State Competition | ALOHA ", icon: Medal },
    { value: "15K", label: "INR Raised | BePolite Campaign", icon: Users }
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
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statVariants = {
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
    <section id="achievements" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-stone-700 dark:from-slate-300 dark:to-stone-300 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
            Milestones and accomplishments that reflect my dedication to excellence and continuous growth in technology
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-stone-50 dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-slate-600 to-stone-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-stone-600 dark:text-stone-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className={`bg-stone-50 dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative ${
                achievement.highlight ? 'ring-2 ring-orange-400 dark:ring-orange-500' : ''
              }`}
            >
              {achievement.highlight && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                  NEW
                </div>
              )}
              
              <div className={`bg-gradient-to-br ${achievement.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon className="text-white" size={28} />
              </div>
              
              <div className="mb-2">
                <span className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
                  achievement.category === 'Cloud & DevOps' 
                    ? 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200'
                }`}>
                  {achievement.category}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                {achievement.title}
              </h3>
              
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-stone-50 to-slate-50 dark:from-slate-800 dark:to-stone-700 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Create More Success Stories?
            </h3>
            <p className="text-stone-600 dark:text-stone-400 mb-6 max-w-2xl mx-auto">
              These achievements represent my commitment to excellence and continuous learning. 
              I'm excited to bring this same dedication to new challenges and opportunities.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-slate-700 to-stone-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Let's Work Together
              <Trophy className="ml-2" size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;