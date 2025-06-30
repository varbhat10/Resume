'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
                and machine learning. Most recently created an AI Chatbot for OSU with Hewlett-Packard.
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

      {/* What I'm Working With */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8">What I'm working with these days</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Languages & Frameworks</h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <FaPython className="text-blue-500" />
                    Python
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <FaReact className="text-cyan-400" />
                    React
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <FaNodeJs className="text-green-500" />
                    Node.js
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <FaJava className="text-red-500" />
                    Java
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Tools & Services</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <FaAws className="text-orange-400" />
                    AWS
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <FaDocker className="text-blue-500" />
                    Docker
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <SiJenkins className="text-red-600" />
                    Jenkins
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <SiPostman className="text-orange-600" />
                    Postman
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Stuff */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Life outside of code</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
              When I'm not building things, you'll find me doing other things I love.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Cat section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <div className="relative h-80 mb-4 rounded-xl overflow-hidden">
                  <img
                    src="/Resume/images/sophiepose.jpg"
                    alt="Sophie the cat"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 40%' }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Meet Sophie</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  My coding companion. She's an expert at stepping on keyboards and reminding me to take breaks (usually for food).
                </p>
              </motion.div>
              
              {/* Adventures section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="relative h-80 mb-4 rounded-xl overflow-hidden">
                  <img
                    src="/Resume/images/motorcycleresume.jpg"
                    alt="Motorcycle adventures"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 45%' }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Adventures & Staying Active</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I love exploring new places and staying active. Recently got back from Japan (incredible trip!). 
                  When I'm not traveling, you can find me:
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">🏍️</span> Riding motorcycles
                    <br />
                    <span className="font-semibold">🎾</span> Playing tennis
                    <br />
                    <span className="font-semibold">💪</span> Working out
                  </div>
                  <div>
                    <span className="font-semibold">🥾</span> Hiking trails
                    <br />
                    <span className="font-semibold">🌶️</span> Trying spicy foods
                    <br />
                    <span className="font-semibold">📚</span> Learning new things
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
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
            <h2 className="text-3xl font-bold mb-4">Some things I've built</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A few projects I'm particularly excited about
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
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <Image
                  src="/Resume/images/CatShazam.jpg"
                  alt="Shazam for Cats breed classifier application screenshot"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
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
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <Image
                  src="/Resume/images/PawRx.jpg"
                  alt="PawRx Pet Medication Safety application screenshot"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">PawRx - Pet Medication Safety</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Comprehensive web application for pet medication tracking, drug interaction checking, and AI-powered safety analysis.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">React</span>
                  <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">Node.js</span>
                  <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">AI/ML</span>
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
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <Image
                  src="/Resume/images/chatbotxex.jpg"
                  alt="AI Chatbot project screenshot"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
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
      
      {/* Work Experience */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Work experience</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
              Some places I've worked and things I've learned along the way.
            </p>
            
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-primary">BlackBerry/Cylance</h3>
                  <span className="text-sm text-gray-500 md:text-right">Dec 2022 - Apr 2023</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">Software Developer Intern</p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Worked on testing and API development for cybersecurity products. Got hands-on experience with Python, AWS, and CI/CD pipelines.
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Key work:</span> RESTful API testing, automated integration tests, AWS services (EC2, S3, DynamoDB), Jenkins CI/CD
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-primary">Oregon Health & Science University</h3>
                  <span className="text-sm text-gray-500 md:text-right">Mar 2021 - Sep 2021</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">Research Assistant</p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Built web tools for pathology researchers. First real experience creating applications that others actually used.
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Key work:</span> Web development (HTML, CSS, JavaScript), data visualization interfaces, research support tools
                </div>
              </motion.div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/about" className="inline-flex items-center text-primary hover:underline font-medium">
                See full work history →
              </Link>
            </div>
          </motion.div>
        </div>
      </section> 
      
      {/* Something I'm proud of */}
      <section className="py-20 bg-primary/5 dark:bg-gray-900/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Something I'm really proud of</h2>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-primary">JoyBox</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                I co-founded an organization that delivers personalized gifts and letters to cancer patients 
                at Doernbecher Pediatric Hospital. It started as a small idea to brighten someone's day 
                and has grown into something that brings joy to families during their toughest times.
              </p>
              <p className="text-gray-600 dark:text-gray-400 italic">
                This has honestly been one of the most meaningful things I've been part of.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 