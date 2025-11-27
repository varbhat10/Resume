'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaAws, FaPython, FaReact, FaJava, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiJenkins, SiPostman, SiTensorflow } from 'react-icons/si';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-green-50 via-amber-50 to-red-50"></div>
        <div className="container-custom z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                <span className="text-primary block mt-2">Varun Bhat</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl mb-6 text-gray-600">
                Product Engineering Services Technician @ Intel • Portland, OR
              </h2>
              <p className="text-lg mb-8 max-w-lg text-gray-700">
                Oregon State CS grad working on silicone validation and testing for next-gen server platforms on a contract with Intel Corporation. 
                I am always hungry learn more in the tech/business industry to contriubute to a lasting impact.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="#projects" 
                  className="btn btn-primary"
                >
                  See my work
                </a>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-amber-50 asymmetric-padding quirky-border mb-8 slightly-tilted">
                <h3 className="font-semibold mb-2 wavy-underline">Get in touch:</h3>
                <div className="space-y-1">
                  <a href="mailto:varbhat10@gmail.com" className="block text-primary hover:underline">varbhat10@gmail.com</a>
                  <a href="mailto:bhatv@oregonstate.edu" className="block text-primary hover:underline">bhatv@oregonstate.edu</a>
                </div>
              </div>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/varbhat10/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/varun-bhat-osu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary transition-colors"
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
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 casual-shadow reverse-tilt">
                  <Image
                    src="/Resume/images/suitpic.jpg"
                    alt="Varun Bhat"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me - More Personal */}
      <section className="py-20 bg-gradient-to-r from-amber-50 via-green-50 to-emerald-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold organic-spacing wavy-underline">A bit about me</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              I love traveling (recently went to Japan), 
              go on hikes, ride motorcycles, and ofc, hang out with my cat Sophie.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="relative slightly-tilted">
                <div className="aspect-square quirky-border overflow-hidden mb-4 casual-shadow">
                  <Image
                    src="/Resume/images/hikingrest.jpg"
                    alt="Varun hiking"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 italic text-center mb-3">The hike got to me.</p>
                <h3 className="text-xl font-bold mb-2">Academic Life</h3>
                <p className="text-gray-600">
                  Computer Science major with a Business minor at Oregon State University (3.88 GPA). 
                  The problem-solving aspect keeps me hooked. Whether it's debugging code in the AMs or 
                  setting up databases, I genuinely love what I do. I also have a passion for management and leadership. I hope to pursue the managerial route in the future. 
                </p>
              </div>
              <div className="relative reverse-tilt organic-spacing">
                <div className="aspect-square quirky-border overflow-hidden mb-4 casual-shadow">
                  <Image
                    src="/Resume/images/sophiepose.jpg"
                    alt="Sophie the cat"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 40%' }}
                  />
                </div>
                <p className="text-sm text-gray-500 italic text-center mb-3">Sophie posin</p>
                <h3 className="text-xl font-bold mb-2">Meet Sophie</h3>
                <p className="text-gray-600">
                  This is Sophie, my coding companion and chief keyboard inspector. 
                  She's an expert at stepping on keyboards at the worst possible moments and 
                  reminding me that there's life beyond the screen. Best debugging partner ever.
                </p>
              </div>
              <div className="relative slightly-tilted">
                <div className="aspect-square quirky-border overflow-hidden mb-4 casual-shadow">
                  <Image
                    src="/Resume/images/motorcycleresume.jpg"
                    alt="Motorcycle adventures"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 45%' }}
                  />
                </div>
                <p className="text-sm text-gray-500 italic text-center mb-3">✌️</p>
                <h3 className="text-xl font-bold mb-2">Life Outside Code</h3>
                <p className="text-gray-600">
                  When I'm not coding, I'm probably at the gym, or hanging out with my friends 
                 on a quest to find the spiciest food in town. Recently got back from Japan 
                  (incredible trip!) and have a goal to travel the world.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold organic-spacing wavy-underline">Some cool stuff I've built</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto slightly-tilted">
              Here are a few projects I'm actually excited about (and some that employers seem to like too)
            </p>
          </motion.div>
          
          <div className="space-y-20">
            {/* Project 1 - PawRx */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/Resume/images/PawRx.jpg"
                    alt="PawRx Pet Medication Safety"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">PawRx - Pet Medication Safety Platform</h3>
                <p className="text-gray-600 mb-4">
                  Designed a full-stack responsive platform using React, Node.js, and MongoDB with AI-powered drug interaction checking. 
                  Built with FastAPI + OpenAI to synchronously check for dangerous drug interactions when adding medications to pet profiles. 
                  Currently beta testing with active users and working with Viking Veterinary Care for real-world feedback.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full">React</span>
                  <span className="text-xs px-3 py-1 bg-green-100 text-green-800 rounded-full">Node.js</span>
                  <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full">MongoDB</span>
                  <span className="text-xs px-3 py-1 bg-purple-100 text-purple-800 rounded-full">FastAPI</span>
                  <span className="text-xs px-3 py-1 bg-orange-100 text-orange-800 rounded-full">OpenAI</span>
                  <span className="text-xs px-3 py-1 bg-pink-100 text-pink-800 rounded-full">Pet Care</span>
                </div>
                <a 
                  href="https://varbhat10.github.io/PawRx/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Try it out →
                </a>
              </div>
            </motion.div>
            
            {/* Project 2 - HP Chatbot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/Resume/images/chatbotxex.jpg"
                    alt="AI Chatbot project"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">HP Oregon State RAG Chatbot</h3>
                <p className="text-gray-600 mb-4">
                  Led development of a Retrieval-Augmented Generation (RAG) chatbot for OSU documentation access in partnership with Hewlett-Packard. 
                  Built scalable multi-threaded components using Python, FastAPI, LangChain, and OpenAI APIs. 
                  Facilitated GitHub repos, sprint cycles, and team meetings with HP engineers and stakeholders while focusing on modular backend design.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Python</span>
                  <span className="text-xs px-3 py-1 bg-purple-100 text-purple-800 rounded-full">FastAPI</span>
                  <span className="text-xs px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full">LangChain</span>
                  <span className="text-xs px-3 py-1 bg-orange-100 text-orange-800 rounded-full">OpenAI</span>
                  <span className="text-xs px-3 py-1 bg-green-100 text-green-800 rounded-full">RAG</span>
                  <span className="text-xs px-3 py-1 bg-gray-100 text-gray-800 rounded-full">Leadership</span>
                </div>
              </div>
            </motion.div>
            
            {/* Project 3 - Cat Shazam */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/Resume/images/CatShazam.jpg"
                    alt="Shazam for Cats"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Cat Shazam - Breed Classifier</h3>
                <p className="text-gray-600 mb-4">
                  Allows classifaction of cat breeds with a single picture using a ML CNN model built with TensorFlow/Keras. 
                  Trained and fine-tuned a CNN model using VGG16 + transfer learning in Python with TensorFlow/Keras.
                  Created a simple user interface to classify cat breeds from images and achieved 92% test accuracy for cat breed detection.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Python</span>
                  <span className="text-xs px-3 py-1 bg-orange-100 text-orange-800 rounded-full">TensorFlow</span>
                  <span className="text-xs px-3 py-1 bg-green-100 text-green-800 rounded-full">Keras</span>
                  <span className="text-xs px-3 py-1 bg-purple-100 text-purple-800 rounded-full">CNN</span>
                  <span className="text-xs px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">VGG16</span>
                  <span className="text-xs px-3 py-1 bg-red-100 text-red-800 rounded-full">Transfer Learning</span>
                </div>
              </div>
            </motion.div>
            
            {/* Project 4 - Resume Website */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="lg:order-2 relative">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/Resume/images/resumewebpic.jpg"
                    alt="Resume Website"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-2xl font-bold mb-4">Resume Website</h3>
                <p className="text-gray-600 mb-4">
                  Designed and deployed this personal portfolio using HTML/CSS/JavaScript and modern frameworks, hosted on GitHub Pages. 
                  Features responsive design, smooth animations, and a personal touch that shows my personality alongside my technical skills.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-orange-100 text-orange-800 rounded-full">HTML/CSS</span>
                  <span className="text-xs px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">JavaScript</span>
                  <span className="text-xs px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full">React</span>
                  <span className="text-xs px-3 py-1 bg-gray-100 text-gray-800 rounded-full">GitHub Pages</span>
                  <span className="text-xs px-3 py-1 bg-green-100 text-green-800 rounded-full">Responsive Design</span>
                </div>
                <a 
                  href="https://varbhat10.github.io/Resume/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  You're looking at it! →
                </a>
              </div>
            </motion.div>
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
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Where I've worked</h2>
            
            {/* CS/Tech Experience - Featured */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-6 text-primary border-b border-primary/30 pb-2">
                💻 Software & Tech Experience
              </h3>
              <div className="space-y-12">
                <div className="relative pl-8 border-l-4 border-primary bg-primary/5 rounded-r-lg p-6">
                  <div className="absolute -left-2 top-6 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-bold text-primary">UST – Hillsboro, OR</h4>
                    <span className="text-sm text-gray-500 font-medium">Oct 2025 – Present</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-4">Product Engineering Services Technician (Contracting for Intel Corporation)</p>
                  <p className="text-gray-700 mb-4">
                    Collaborate with Intel engineers to triage hardware and firmware issues, perform analysis, and verify fixes
                    Pre-release silicon validation and bring-up for next-generation server and workstation platforms
                    Develop Python automation scripts to streamline regression testing and reduce manual testing cycles
                    Debug, maintain, and assemble complex test systems
                    Flash firmware and hardware components in Linux and customer particular OS environments
                    Log and track issues using Jira and internal Intel tools
                    Maintain thorough documentation of test configurations, hardware inventory, and validation outcomes

                  </p>
                  <div className="text-sm text-gray-600 mb-4">
                    <span className="font-medium">Key achievements:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Python</span>
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">Linux</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Hardware Validation</span>
                    <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">BIOS/Firmware</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">Jira</span>
                    <span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full">Automation</span>
                  </div>
                </div>
                
                <div className="relative pl-8 border-l-4 border-primary bg-primary/5 rounded-r-lg p-6">
                  <div className="absolute -left-2 top-6 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-bold text-primary">BlackBerry/Cylance</h4>
                    <span className="text-sm text-gray-500 font-medium">Dec 2022 - Apr 2023</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-4">Software Developer Intern</p>
                  <p className="text-gray-700 mb-4">
                    Engineered automated integration and unit tests in Python to validate RESTful APIs, improving testing coverage by 40%. 
                    Used Postman and internal tools to debug endpoints and verify functionality. Deployed AWS services (EC2, S3, DynamoDB) to support scalable backend systems.
                  </p>
                  <div className="text-sm text-gray-600 mb-4">
                    <span className="font-medium">Key achievements:</span> Implemented Jenkins CI/CD pipelines, diagnosed container issues in Dockerized environments, 
                    and collaborated across frontend (React/JS) and backend (FastAPI/Flask/Python) layers to resolve bugs.
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Python</span>
                    <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">AWS</span>
                    <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">Jenkins</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">REST APIs</span>
                  </div>
                </div>
                
                <div className="relative pl-8 border-l-4 border-primary bg-primary/5 rounded-r-lg p-6">
                  <div className="absolute -left-2 top-6 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-bold text-primary">Viking Veterinary Care</h4>
                    <span className="text-sm text-gray-500 font-medium">Jun 2024 - Sep 2024</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-4">Technician Assistant & PawRx Beta Testing Partner</p>
                  <p className="text-gray-700 mb-4">
                    Beta tested and validated PawRx (my full-stack pet medication safety platform) with real veterinary workflows and patient data. 
                    Gathered user feedback from veterinarians and technicians to iterate on features, UI/UX, and AI drug interaction detection accuracy. 
                    Performed essential treatments including vaccine administration, diagnostic testing, and imaging support while integrating tech solutions into clinical practice.
                  </p>
                  <div className="text-sm text-gray-600 mb-4">
                    <span className="font-medium">Key achievements:</span> Successfully deployed PawRx platform with ~10 active users in a real veterinary environment. 
                    Collaborated with veterinary staff to improve pet medication education and safety through technology. 
                    Bridged the gap between software development and real-world clinical application.
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">Beta Testing</span>
                    <span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full">Full-Stack Development</span>
                    <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">User Feedback</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Product Validation</span>
                    <span className="text-xs px-2 py-1 bg-pink-100 text-pink-800 rounded-full">Veterinary Tech</span>
                  </div>
                </div>
                
                <div className="relative pl-8 border-l-4 border-primary bg-primary/5 rounded-r-lg p-6">
                  <div className="absolute -left-2 top-6 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-bold text-primary">Oregon Health & Science University</h4>
                    <span className="text-sm text-gray-500 font-medium">Jun 2021 - Sep 2021</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-4">Research Volunteer</p>
                  <p className="text-gray-700 mb-4">
                    Created educational websites using HTML/CSS/JavaScript for tutoring and outreach. 
                    Supported underrepresented students in STEM through workshops and peer guidance, participating in research focused on early exposure to computer science concepts.
                  </p>
                  <div className="text-sm text-gray-600 mb-4">
                    <span className="font-medium">Key achievements:</span> Presented findings on Malaria research to a group of 50+ attendees, 
                    developed web-based educational tools for STEM outreach initiatives.
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">HTML/CSS</span>
                    <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">JavaScript</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Education</span>
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">STEM Outreach</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Experience - Supporting */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-600">
                🏢 Other Professional Experience
              </h3>
              <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-gray-200">
                  <div className="absolute -left-1.5 top-0 w-3 h-3 bg-gray-400 rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                    <h4 className="text-lg font-semibold text-gray-700">Target</h4>
                    <span className="text-sm text-gray-500">Jun 2022 - Aug 2022</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">Team Specialist</p>
                  <p className="text-gray-600 text-sm">
                    Coordinated inventory movement and team communication during peak customer hours. 
                    Trained new team members on POS and in-store customer service standards. Recognized for consistency and problem-solving under pressure.
                  </p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-gray-200">
                  <div className="absolute -left-1.5 top-0 w-3 h-3 bg-gray-400 rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                    <h4 className="text-lg font-semibold text-gray-700">Target</h4>
                    <span className="text-sm text-gray-500">Jun 2022 - Aug 2022</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">Team Specialist</p>
                  <p className="text-gray-600 text-sm">
                    Developed skills in customer service, conflict resolution, and prioritization in a fast-paced retail environment.
                  </p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-gray-200">
                  <div className="absolute -left-1.5 top-0 w-3 h-3 bg-gray-400 rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                    <h4 className="text-lg font-semibold text-gray-700">Taco Bell</h4>
                    <span className="text-sm text-gray-500">Jun 2021 - Aug 2021</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">Service Champion</p>
                  <p className="text-gray-600 text-sm">
                    Operated drive-through and register under high-volume conditions while maintaining great customer service.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Something I'm Proud Of */}
      <section className="py-20 bg-primary/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Something that actually matters to me</h2>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm quirky-border slightly-tilted">
              <h3 className="text-2xl font-bold mb-4 text-primary wavy-underline">JoyBox</h3>
              <p className="text-lg text-gray-700 mb-4">
                I co-founded and led this registered nonprofit to deliver gift boxes ("JoyBoxes") to pediatric cancer patients at OHSU Doernbecher Pediatric Hospital. 
                Each box includes personalized toys, crafts, and handwritten letters from myself and other team members. 
                I organized donation drives, managed student volunteers, and partnered with hospital staff to ensure safe and timely delivery.
              </p>
              <p className="text-gray-600 italic">
                This is honestly the most meaningful and personally rewarding initiative I've ever led. 
                There's nothing quite like seeing the direct impact you can have on someone's day during such a difficult time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Want to work together?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Looking for opportunities where I can actually make a difference and learn more.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-8">
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FaEnvelope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <div className="space-y-1">
                  <a 
                    href="mailto:varbhat10@gmail.com" 
                    className="block text-primary hover:underline"
                  >
                    varbhat10@gmail.com
                  </a>
                  <a 
                    href="mailto:bhatv@oregonstate.edu" 
                    className="block text-primary hover:underline"
                  >
                    bhatv@oregonstate.edu
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FaPhone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">(503) 577-4228</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FaMapMarkerAlt className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-600">Portland, Oregon</p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://github.com/varbhat10/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full hover:bg-primary/10 transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/varun-bhat-osu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full hover:bg-primary/10 transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 max-w-lg mx-auto">
              <h3 className="font-semibold mb-3">What I'm looking for</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Entry Level Software Engineering/Development roles</li>
                <li>• Cloud/DevOps/QA positions</li>
                <li>• Interesting projects to collaborate on</li>
                <li>• Opportunities to actually make an impact and learn more</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
