'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin, FaAws, FaPython, FaReact, FaJava, FaHtml5, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiJenkins, SiPostman } from 'react-icons/si';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900"></div>
        <div className="container-custom z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                <span className="block">Hi, I'm</span>
                <span className="text-primary block mt-2">Varun Bhat</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl mb-6 text-gray-600 dark:text-gray-300">
                Computer Science Student at OSU
              </h2>
              <p className="text-lg mb-8 max-w-lg text-gray-700 dark:text-gray-300">
                Graduating in 2025 with a passion for software development, AWS cloud solutions, 
                and machine learning. Currently working on an AI Chatbot project with Hewlett-Packard.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects" className="btn btn-primary">
                  View My Projects
                </Link>
                <Link href="/contact" className="btn border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                  Get In Touch
                </Link>
              </div>
              <div className="flex mt-8 space-x-4">
                <a 
                  href="https://github.com/varbhat10/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/varun-bhat-osu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative w-full h-80 flex items-center justify-center">
                {/* Photo with circular crop */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30">
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700">
                    <img
                      src="/Resume/images/suitpic.jpg"
                      alt="Varun Bhat"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
            <FaArrowDown className="animate-bounce text-primary" />
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section - NEW */}
      <section className="py-16 bg-accent/10 dark:bg-site-bg-dark/80">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold mb-4">My Tech Stack</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies/Services I work with regularly
            </p>
          </motion.div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 justify-items-center">
            {[
              { icon: FaPython, name: "Python", color: "text-primary" },
              { icon: FaReact, name: "React", color: "text-cyan-400" },
              { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
              { icon: FaJava, name: "Java", color: "text-red-500" },
              { icon: FaHtml5, name: "HTML", color: "text-orange-500" },
              { icon: FaAws, name: "AWS", color: "text-yellow-500" },
              { icon: FaDocker, name: "Docker", color: "text-primary" },
              { icon: SiJenkins, name: "Jenkins", color: "text-red-600" },
              { icon: SiPostman, name: "Postman", color: "text-orange-600" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-4"
              >
                <tech.icon className={`h-10 w-10 ${tech.color}`} />
                <span className="mt-2 text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Side Section - NEW */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="section-heading">My Personal Side</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Beyond coding, here's a glimpse into my personal life
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Cat Photo Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-64 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <img
                  src="/Resume/images/sophiepose.jpg"
                  alt="Sophie the cat"
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  style={{ transform: 'scale(0.5)', transformOrigin: 'center' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Meet My Cat</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  This is my homie Sophie. She keeps me company during long coding sessions, and of course, never forgets to beg for food!
                </p>
              </div>
            </motion.div>
            
            {/* Hobby/Interest Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-64 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <img
                  src="/Resume/images/motorcycleresume.jpg"
                  alt="Motorcycle adventures"
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">When I'm Not Coding</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I enjoy travelling (Most Recently Japan) and staying active. Motorcycles, working out, tennis, hiking, and spicy food
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="section-heading">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Check out some of my recent work and coding projects
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="card"
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-3xl">🐱</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Shazam for Cats</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Developed a machine learning model to classify cats using the Oxford-III Pet Dataset.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">Python</span>
                  <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">CNN</span>
                  <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">TensorFlow</span>
                </div>
                <Link href="/projects" className="text-primary hover:underline font-medium">View Project →</Link>
              </div>
            </motion.div>
            
            {/* Project Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="card"
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-3xl">📚</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Online Bookstore Management System</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Designed a web-based application to manage bookstore inventory with efficient data handling.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">Node.js</span>
                  <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">HTML/CSS</span>
                  <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">JavaScript</span>
                </div>
                <Link href="/projects" className="text-primary hover:underline font-medium">View Project →</Link>
              </div>
            </motion.div>
            
            {/* Project Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="card"
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-3xl">🤖</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AI Chatbot with HP</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Senior project developing an Artificial Intelligence Chatbot in collaboration with Hewlett-Packard.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">Python</span>
                  <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">AI</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full">NLP</span>
                </div>
                <Link href="/projects" className="text-primary hover:underline font-medium">View Project →</Link>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/projects" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* Experience Preview - NEW */}
      <section className="py-20 bg-accent/10 dark:bg-site-bg-dark/80">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="section-heading">Experience Highlights</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey in software development and beyond
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold mb-2 text-primary">BlackBerry/Cylance</h3>
              <p className="text-sm text-gray-500 mb-3">Software Developer Intern | Dec 2022 - Apr 2023</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Wrote test plans and automated integration tests for RESTful APIs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Designed and tested RESTful APIs with Postman</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Managed AWS services and conducted daily tests in Jenkins</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold mb-2 text-primary">Oregon Health & Science University</h3>
              <p className="text-sm text-gray-500 mb-3">Research Assistant | Mar 2021 - Sep 2021</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Developed websites using HTML, CSS, and JavaScript</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Supported pathology research in a primate lab</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Created web interfaces for research data visualization</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <div className="mt-10 text-center">
             <Link href="/about" className="btn border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
              More About Me
            </Link>
          </div>
        </div>
      </section> 
      
      {/* Community Impact - NEW */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-accent/20 p-8 rounded-xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
              <p className="text-gray-700 dark:text-gray-300">Making a difference beyond technology</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
              <div className="bg-white dark:bg-site-bg-dark p-6 rounded-lg shadow-md max-w-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">JoyBox</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Co-founded an organization that delivers gifts and personalized letters to cancer patients at Doernbecher Pediatric Hospital.
                </p>
                <p className="italic text-gray-600 dark:text-gray-400">
                  Working with JoyBox has been one of the most rewarding experiences I have had.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 