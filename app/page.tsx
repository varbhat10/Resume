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
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900"></div>
        <div className="container-custom z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                <span className="block">Hey there! I'm</span>
                <span className="text-primary block mt-2">Varun Bhat</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl mb-6 text-gray-600 dark:text-gray-300">
                CS Student • AWS Certified • Cat Dad
              </h2>
              <p className="text-lg mb-8 max-w-lg text-gray-700 dark:text-gray-300">
                I'm graduating from OSU in 2025 and I love building things that matter. 
                Currently working on an AI chatbot with HP, and yes, that's my cat Sophie you'll meet below.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="mailto:bhatv@oregonstate.edu" 
                  className="btn btn-primary"
                >
                  Let's chat
                </a>
                <a 
                  href="#projects" 
                  className="btn border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  See my work
                </a>
              </div>
              <div className="flex space-x-4">
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
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30">
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
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">A bit about me</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="relative">
                                 <div className="aspect-square rounded-lg overflow-hidden mb-4">
                   <Image
                     src="/Resume/images/hikingrest.jpg"
                     alt="Varun hiking"
                     fill
                     className="object-cover"
                   />
                 </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Oregon State University senior with a 3.86 GPA. I actually enjoy studying CS - 
                  the problem-solving keeps me hooked.
                </p>
              </div>
              <div className="relative">
                                 <div className="aspect-square rounded-lg overflow-hidden mb-4">
                   <Image
                     src="/Resume/images/sophiepose.jpg"
                     alt="Sophie the cat"
                     fill
                     className="object-cover"
                     style={{ objectPosition: 'center 40%' }}
                   />
                 </div>
                <p className="text-gray-600 dark:text-gray-400">
                  This is Sophie, my coding companion and chief keyboard inspector. 
                  She's excellent at reminding me to take breaks.
                </p>
              </div>
              <div className="relative">
                                 <div className="aspect-square rounded-lg overflow-hidden mb-4">
                   <Image
                     src="/Resume/images/motorcycleresume.jpg"
                     alt="Motorcycle adventures"
                     fill
                     className="object-cover"
                     style={{ objectPosition: 'center 45%' }}
                   />
                 </div>
                <p className="text-gray-600 dark:text-gray-400">
                  When I'm not coding, I'm probably riding my motorcycle, playing tennis, 
                  or trying to find the spiciest food in town.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">What I'm working with</h2>
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
                <h3 className="text-xl font-semibold mb-4 text-primary">Cloud & Tools</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <FaAws className="text-orange-400" />
                    AWS Certified
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

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Some cool stuff I've built</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are a few projects I'm actually excited about (and some that employers seem to like too)
            </p>
          </motion.div>
          
          <div className="space-y-20">
            {/* Project 1 - HP Chatbot */}
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
                <h3 className="text-2xl font-bold mb-4">AI Chatbot with HP</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  My senior project - building an AI chatbot in partnership with Hewlett-Packard. 
                  It's been incredible working with industry professionals and learning how real-world AI development works.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">Python</span>
                  <span className="text-xs px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">AI/ML</span>
                  <span className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">NLP</span>
                  <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full">Industry Partnership</span>
                </div>
              </div>
            </motion.div>
            
            {/* Project 2 - PawRx */}
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
                     src="/Resume/images/PawRx.jpg"
                     alt="PawRx Pet Medication Safety"
                     fill
                     className="object-cover"
                   />
                 </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-2xl font-bold mb-4">PawRx - Pet Medication Safety</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Built this after realizing how dangerous drug interactions can be for pets. 
                  It combines my love for animals with practical AI to help pet owners keep their furry friends safe.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full">React</span>
                  <span className="text-xs px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">Node.js</span>
                  <span className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">AI Safety</span>
                  <span className="text-xs px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full">Pet Care</span>
                </div>
                <a 
                  href="https://varbhat10.github.io/PawRx/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Check it out →
                </a>
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
                <h3 className="text-2xl font-bold mb-4">Shazam for Cats</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Started as a joke about identifying cat breeds, but turned into a solid machine learning project. 
                  Sophie wasn't impressed with her classification results, but the CNN model turned out pretty decent.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">Python</span>
                  <span className="text-xs px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">TensorFlow</span>
                  <span className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">CNN</span>
                  <span className="text-xs px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">Computer Vision</span>
                </div>
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
            
            <div className="space-y-12">
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-primary">BlackBerry/Cylance</h3>
                  <span className="text-sm text-gray-500">Dec 2022 - Apr 2023</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">Software Developer Intern</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  My first real taste of enterprise software development. Worked on API testing and automation 
                  in the cybersecurity space - learned a ton about Python, AWS, and how to write tests that actually matter.
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">What I did:</span> Built automated testing frameworks, worked with RESTful APIs, 
                  managed AWS services (EC2, S3, DynamoDB), and set up CI/CD pipelines with Jenkins.
                </div>
              </div>
              
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-primary">Oregon Health & Science University</h3>
                  <span className="text-sm text-gray-500">Mar 2021 - Sep 2021</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">Research Assistant</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Built web tools for pathology researchers working with primate studies. 
                  My first experience creating applications that real people used for important work.
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">What I did:</span> Web development with HTML, CSS, and JavaScript, 
                  created data visualization interfaces for research data.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Something I'm Proud Of */}
      <section className="py-20 bg-primary/5 dark:bg-gray-900/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Something that actually matters to me</h2>
            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-primary">JoyBox</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                I co-founded this organization that delivers personalized gifts and letters to kids fighting cancer 
                at Doernbecher Pediatric Hospital. It started small - just wanting to brighten someone's day during 
                a really tough time.
              </p>
              <p className="text-gray-600 dark:text-gray-400 italic">
                Honestly, this has been one of the most meaningful things I've ever been part of. 
                Sometimes the best projects aren't the ones with the most code.
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
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              I'm graduating in 2025 and looking for opportunities where I can actually make a difference. 
              Whether it's a full-time role, internship, or just want to chat about tech - I'm all ears.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-8">
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FaEnvelope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:bhatv@oregonstate.edu" 
                  className="text-primary hover:underline"
                >
                  bhatv@oregonstate.edu
                </a>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FaPhone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">(503) 577-4228</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FaMapMarkerAlt className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Portland, Oregon</p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://github.com/varbhat10/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-primary/10 transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/varun-bhat-osu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-primary/10 transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700 max-w-lg mx-auto">
              <h3 className="font-semibold mb-3">What I'm looking for</h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Software Engineering roles</li>
                <li>• Cloud/DevOps positions</li>
                <li>• Interesting projects to collaborate on</li>
                <li>• Opportunities to actually make an impact</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 