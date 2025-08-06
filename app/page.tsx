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
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
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
                B.S. Computer Science, Oregon State University • Expected June 2025 • GPA 3.86 • AWS Certified
              </h2>
              <p className="text-lg mb-8 max-w-lg text-gray-700">
                I am a Computer Science student at Oregon State University graduating in June 2025. I particularly care about building tools that have an impact. My most recent professional experience was creating an AI chatbot with HP for OSU students and faculty.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="#projects" 
                  className="btn btn-primary"
                >
                  See my work
                </a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-8">
                <h3 className="font-semibold mb-2">Get in touch:</h3>
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
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">A bit about me</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Beyond my professional side, here are some examples of what I like to do. I love to travel (recently went to Japan), 
              go on hikes, ride motorcycles, and ofc, hang out with my cat Sophie who somehow always knows when I need a break.
            </p>
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
                <p className="text-sm text-gray-500 italic text-center mb-3">The hike got to me.</p>
                <h3 className="text-xl font-bold mb-2">Academic Life</h3>
                <p className="text-gray-600">
                  Oregon State University Computer Science student with a 3.86 GPA, graduating June 2025. I actually enjoy studying CS - 
                  the problem-solving aspect keeps me hooked. Whether it's debugging code at 2 AM or 
                  figuring out algorithms, I genuinely love what I do.
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
                <p className="text-sm text-gray-500 italic text-center mb-3">Sophie posin</p>
                <h3 className="text-xl font-bold mb-2">Meet Sophie</h3>
                <p className="text-gray-600">
                  This is Sophie, my coding companion and chief keyboard inspector. 
                  She's an expert at stepping on keyboards at the worst possible moments and 
                  reminding me that there's life beyond the screen. Best debugging partner ever.
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
                <p className="text-sm text-gray-500 italic text-center mb-3">✌️</p>
                <h3 className="text-xl font-bold mb-2">Life Outside Code</h3>
                <p className="text-gray-600">
                  When I'm not coding, I'm probably riding my motorcycle, playing tennis, 
                  or on a quest to find the spiciest food in town. Recently got back from Japan 
                  (incredible trip!) and always planning the next adventure.
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
                <h3 className="text-xl font-semibold mb-4 text-primary">Programming Languages</h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                    <FaPython className="text-blue-500" />
                    Python
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                    <FaJava className="text-red-500" />
                    Java
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                    JavaScript
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                    HTML/CSS
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                    C++
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                    C
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                    C#
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                    Ruby
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                    Kotlin
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                    MASM
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Frameworks & Tools</h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                    <FaReact className="text-cyan-400" />
                    React
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                    <FaNodeJs className="text-green-500" />
                    Node.js
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                    <FaDocker className="text-blue-500" />
                    Docker
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                    <SiJenkins className="text-red-600" />
                    Jenkins
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                    <SiPostman className="text-orange-600" />
                    Postman
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                    Splunk
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-primary text-center">Cloud Platforms</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                  <FaAws className="text-orange-400" />
                  AWS (Certified)
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                  Azure
                </span>
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
            <h2 className="text-3xl font-bold mb-4">Some cool stuff I've built</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                <p className="text-gray-600 mb-4">
                  Built an AI chatbot in partnership with Hewlett-Packard for Oregon State students and faculty. 
                  Led development of conversational AI capabilities using retrieval-augmented generation (RAG) for OSU-specific documentation access.
                  This was a great learning experience where I held a leadership role and worked with industry professionals.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Python</span>
                  <span className="text-xs px-3 py-1 bg-orange-100 text-orange-800 rounded-full">AI/ML</span>
                  <span className="text-xs px-3 py-1 bg-purple-100 text-purple-800 rounded-full">RAG</span>
                  <span className="text-xs px-3 py-1 bg-green-100 text-green-800 rounded-full">FastAPI</span>
                  <span className="text-xs px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full">LangChain</span>
                  <span className="text-xs px-3 py-1 bg-gray-100 text-gray-800 rounded-full">Industry Partnership</span>
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
                <p className="text-gray-600 mb-4">
                  Built this after realizing how dangerous drug interactions can be for pets. 
                  It combines my love for animals with practical AI to help pet owners keep their paw friends safe.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full">React</span>
                  <span className="text-xs px-3 py-1 bg-green-100 text-green-800 rounded-full">Node.js</span>
                  <span className="text-xs px-3 py-1 bg-purple-100 text-purple-800 rounded-full">AI</span>
                  <span className="text-xs px-3 py-1 bg-pink-100 text-pink-800 rounded-full">Pet Care</span>
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
                <p className="text-gray-600 mb-4">
                  Classify cat breeds with a single picture using CNN model built with TensorFlow/Keras. 
                  Trained and fine-tuned a CNN model using VGG16 + transfer learning for high accuracy breed detection.
                  Created a simple user interface to classify cat breeds from images. Achieved 92% test accuracy for cat breed detection.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Python</span>
                  <span className="text-xs px-3 py-1 bg-orange-100 text-orange-800 rounded-full">TensorFlow</span>
                  <span className="text-xs px-3 py-1 bg-purple-100 text-purple-800 rounded-full">CNN</span>
                  <span className="text-xs px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">Computer Vision</span>
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
            
            {/* CS/Tech Experience - Featured */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-6 text-primary border-b border-primary/30 pb-2">
                💻 Software & Tech Experience
              </h3>
              <div className="space-y-12">
                <div className="relative pl-8 border-l-4 border-primary bg-primary/5 rounded-r-lg p-6">
                  <div className="absolute -left-2 top-6 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-bold text-primary">BlackBerry/Cylance</h4>
                    <span className="text-sm text-gray-500 font-medium">Dec 2022 - Apr 2023</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-4">Software Developer Intern</p>
                  <p className="text-gray-700 mb-4">
                    My first real taste of enterprise software development. Worked on API testing and automation 
                    in the cybersecurity space - learned a ton about Python, AWS, and how to write tests that actually matter.
                  </p>
                  <div className="text-sm text-gray-600 mb-4">
                    <span className="font-medium">Key achievements:</span> Built automated testing frameworks, worked with RESTful APIs, 
                    managed AWS services (EC2, S3, DynamoDB), and set up CI/CD pipelines with Jenkins.
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
                    <h4 className="text-xl font-bold text-primary">Oregon Health & Science University</h4>
                    <span className="text-sm text-gray-500 font-medium">Jun 2021 - Sep 2021</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-4">Research Volunteer</p>
                  <p className="text-gray-700 mb-4">
                    Created educational websites using HTML, CSS, and JavaScript for tutoring and outreach.
                    Supported underrepresented students in STEM through workshops and presentations.
                    Participated in research focused on early exposure to computer science concepts.
                  </p>
                  <div className="text-sm text-gray-600 mb-4">
                    <span className="font-medium">Key achievements:</span> Developed web-based educational tools, 
                    supported STEM outreach initiatives, and presented findings to a group of 50+ attendees.
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">HTML/CSS</span>
                    <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">JavaScript</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Education</span>
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">Research</span>
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
                    <h4 className="text-lg font-semibold text-gray-700">Viking Veterinary Care</h4>
                    <span className="text-sm text-gray-500">Jun 2024 - Sep 2024</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">Technician Assistant</p>
                  <p className="text-gray-600 text-sm">
                    Managed treatments for vaccine administration, blood tests, X-rays, and animal primary care. 
                    Developed strong communication skills for sensitive situations.
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
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-primary">JoyBox</h3>
              <p className="text-lg text-gray-700 mb-4">
                I co-founded this organization that delivers personalized gifts and letters to kids fighting cancer 
                at Doernbecher Pediatric Hospital. It started small - just wanting to brighten someone's day during 
                a really tough time.
              </p>
              <p className="text-gray-600 italic">
                Honestly, this has been one of the most meaningful things I've ever been part of. 
                Nothing is better than creating an impact and seeing it with your own eyes.
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
