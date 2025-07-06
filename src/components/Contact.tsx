import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Download, MessageCircle, Calendar, Globe, Eye } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create WhatsApp message
    const whatsappMessage = `Hi Nikhil! 👋

*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}

*Message:*
${formData.message}

---
Sent from your portfolio contact form`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/916289726069?text=${encodedMessage}`;

    // Simulate form processing
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Open WhatsApp after showing success message
      setTimeout(() => {
        window.open(whatsappURL, '_blank');
      }, 1000);
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nikagarwal983@gmail.com",
      href: "mailto:nikagarwal983@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 6289726069",
      href: "tel:+916289726069",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kolkata, West Bengal, India",
      href: "#",
      color: "from-slate-600 to-stone-600"
    },
    {
      icon: Globe,
      title: "Timezone",
      value: "IST (UTC+5:30)",
      href: "#",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/Nikhil04-india",
      color: "hover:text-slate-700 dark:hover:text-slate-300",
      bgColor: "hover:bg-slate-100 dark:hover:bg-slate-700"
    },
    {
      icon: Linkedin,
      name: "LinkedIn", 
      href: "https://linkedin.com/in/nikhil-04",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900"
    }
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Send me a quick message",
      action: "Chat Now",
      color: "from-green-600 to-emerald-600",
      onClick: () => {
        const message = "Hi Nikhil! I'm interested in discussing a project opportunity with you.";
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/916289726069?text=${encodedMessage}`, '_blank');
      }
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a 30-minute chat",
      action: "Schedule Now",
      color: "from-slate-600 to-stone-600",
      onClick: () => {
        const message = "Hi Nikhil! I'd like to schedule a call to discuss potential collaboration.";
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/916289726069?text=${encodedMessage}`, '_blank');
      }
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
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-stone-100 dark:from-slate-800 dark:to-stone-900">
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
            Let's Connect
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-stone-600 dark:text-stone-400 max-w-4xl mx-auto leading-relaxed"
          >
            Ready to start a conversation? I'm always excited to discuss new opportunities, 
            collaborate on projects, or simply connect with fellow developers and tech enthusiasts.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Quick Actions */}
            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -2 }}
                  onClick={action.onClick}
                  className={`bg-gradient-to-r ${action.color} p-6 rounded-2xl text-white cursor-pointer`}
                >
                  <div className="flex items-center mb-3">
                    <action.icon size={24} className="mr-3" />
                    <h3 className="text-lg font-bold">{action.title}</h3>
                  </div>
                  <p className="text-white/90 mb-4">{action.description}</p>
                  <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-medium transition-all duration-200">
                    {action.action}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Contact Information
              </h3>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-br ${info.color} p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="text-white" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 dark:text-stone-400 font-medium">{info.title}</p>
                    <p className="text-slate-900 dark:text-white font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Connect on Social
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-stone-600 dark:text-stone-400 ${social.color} ${social.bgColor}`}
                  >
                    <social.icon size={26} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Resume Download & Preview */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-slate-700 to-stone-700 dark:from-slate-600 dark:to-stone-600 p-6 rounded-2xl text-white"
            >
              <h4 className="text-lg font-bold mb-2">
                Resume
              </h4>
              <p className="text-white/90 mb-4 text-sm">
                Get a comprehensive overview of my skills, experience, and achievements.
              </p>
              <div className="flex gap-3">
                <motion.a
                  href="https://drive.google.com/file/d/11-obP31lcTl03IGRPUdNt-D1p8c8OEKE/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white text-slate-900 font-semibold rounded-lg hover:bg-stone-100 transition-all duration-300"
                >
                  <Download size={18} className="mr-2" />
                  Download
                </motion.a>
                <motion.a
                  href="https://drive.google.com/file/d/11-obP31lcTl03IGRPUdNt-D1p8c8OEKE/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  <Eye size={18} className="mr-2" />
                  Preview
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle className="mx-auto text-emerald-500 mb-6" size={80} />
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 text-lg mb-4">
                    Thank you for reaching out. Opening WhatsApp to send your message...
                  </p>
                  <p className="text-sm text-stone-500 dark:text-stone-400">
                    I'll get back to you within 24 hours!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                      Send a Message
                    </h3>
                    <p className="text-stone-600 dark:text-stone-400">
                      I'd love to hear about your project or opportunity
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-stone-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-stone-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-stone-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-stone-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-all duration-200 resize-none"
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-slate-700 to-stone-700 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                        />
                        Preparing WhatsApp...
                      </>
                    ) : (
                      <>
                        <Send size={22} className="mr-3" />
                        Send via WhatsApp
                      </>
                    )}
                  </motion.button>

                  <div className="text-center">
                    <p className="text-sm text-stone-500 dark:text-stone-400">
                      Your message will be sent via WhatsApp for instant communication.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;