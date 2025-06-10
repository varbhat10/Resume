'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaAward, FaHospital, FaShoppingCart, FaPizzaSlice } from 'react-icons/fa';

export default function About() {
  return (
    <div className="py-32">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Computer Science student at Oregon State University with the hunger to learn more.
          </p>
        </motion.div>
        
        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="aspect-square bg-primary/10 dark:bg-primary/20 rounded-lg overflow-hidden flex items-center justify-center">
              <div className="text-6xl font-bold">V</div>
            </div>
          </motion.div>
          
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h2 className="text-3xl font-bold mb-4">Varun Bhat</h2>
            <p className="text-xl text-primary font-medium mb-6">Oregon State University | AWS Certified Cloud Practitioner</p>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm a Computer Science student at Oregon State University in Corvallis, graduating in 2025 with a strong 
                3.86/4.0 GPA. My academic journey has equipped me with a strong foundation in software development, 
                cloud computing, and problem-solving.
              </p>
              <p>
                As an AWS Certified Cloud Practitioner, I specialize in cloud architectures and services. My experience includes
                software development at BlackBerry/Cylance, where I worked on RESTful APIs and AWS services, and web development 
                for pathology research at OHSU.
              </p>
              <p>
                My senior project involves creating an Artificial Intelligence Chatbot in collaboration with Hewlett-Packard Company,
                allowing me to apply my skills in a real-world industry partnership.
              </p>
              <p>
                When I'm not coding, you can find me at the gym or cuddling with my cat.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link href="/contact" className="btn border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Education & Experience Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 mr-4">
                  <FaGraduationCap className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">BS in Computer Science</h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                      2022 - 2025
                    </span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">Oregon State University, Corvallis, OR</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    GPA: 3.86/4.0
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                    <li>Honors: Finley Academic Scholarship</li>
                    <li>Senior Project: Artificial Intelligence Chatbot with Hewlett-Packard</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 mr-4">
                  <FaAward className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">Certifications</h2>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">AWS Cloud Practitioner</h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                      Certified
                    </span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">Amazon Web Services</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Certified in cloud technologies with knowledge of AWS services including EC2, S3, and DynamoDB.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Software Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="card p-8">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 mr-4">
                <FaLaptopCode className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">Software Experience</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">Software Developer Intern</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                    Dec 2022 - Apr 2023
                  </span>
                </div>
                <p className="text-gray-800 dark:text-gray-200 font-medium">BlackBerry/Cylance, Portland, OR</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                  <li>Wrote test plans and developed automated integration and unit tests for RESTful APIs using Python</li>
                  <li>Designed and tested RESTful APIs with Postman, validated functionality with unit tests</li>
                  <li>Managed AWS services including EC2, S3, and DynamoDB, conducted daily test runs in Jenkins to debug issues</li>
                  <li>Contributed to backend and frontend development using Docker and Postman</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">Research Assistant</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                    Mar 2021 - Sep 2021
                  </span>
                </div>
                <p className="text-gray-800 dark:text-gray-200 font-medium">Oregon Health & Science University (OHSU), Portland, OR</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                  <li>Developed websites using HTML, CSS, and JavaScript to support pathology research in a primate lab</li>
                  <li>Created web interfaces for visualizing and analyzing research data</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Other Professional Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="card p-8">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 mr-4">
                <FaBriefcase className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">Other Professional Experience</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full mr-3 mt-1">
                    <FaHospital className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Viking Veterinary Care</h3>
                    <p className="text-sm text-gray-500 mb-1">May 2023 - Sep 2024</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Managed treatments for animal care and learned compassionate communication about sensitive topics.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full mr-3 mt-1">
                    <FaShoppingCart className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Target</h3>
                    <p className="text-sm text-gray-500 mb-1">June 2022 - Aug 2022</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Developed skills in customer service, conflict resolution, and prioritization as Team Specialist.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full mr-3 mt-1">
                    <FaPizzaSlice className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Taco Bell</h3>
                    <p className="text-sm text-gray-500 mb-1">June 2021 - Sep 2021</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Developed comfort with high-tempo work, food safety compliance, and maintaining a clean workspace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Community Engagement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="card p-8 bg-gradient-to-r from-primary/5 to-accent/5">
            <h2 className="text-2xl font-bold mb-6 text-center">Community Engagement</h2>
            
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <span className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">JoyBox</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Co-founded an organization that delivers gifts and personalized letters to cancer patients at Doernbecher Pediatric Hospital.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Interests & Hobbies</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "Machine Learning", "Sales", "Robotics", "Motorcycles", "Tennis", "Cats", "Hiking", "Spicy Food"
            ].map((interest, index) => (
              <motion.div
                key={interest}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-3 rounded-lg text-center shadow-sm"
              >
                {interest}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects, opportunities, or collaborative ventures.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 