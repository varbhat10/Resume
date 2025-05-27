'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPython, FaReact, FaNodeJs, FaHtml5, FaAws, FaJava, FaRobot } from 'react-icons/fa';
import { SiTensorflow, SiKeras, SiMongodb, SiJavascript, SiCplusplus } from 'react-icons/si';

// Project data matching Varun's resume
const projects = [
  {
    id: 1,
    title: 'Shazam for Cats (Breed Classifier)',
    description: 'Developed a machine learning model to classify cats using the Oxford-III Pet Dataset.',
    longDescription: 'Created a CNN-based application that can identify cat breeds from images using transfer learning. The model was built using Python with TensorFlow and Keras, implementing VGG16 architecture with fine-tuning to achieve high accuracy. This project demonstrates my skills in machine learning, computer vision, and deep learning techniques.',
    tags: ['Python', 'TensorFlow', 'Keras', 'CNN', 'VGG16', 'Transfer Learning'],
    image: '/images/project-placeholder.svg',
    github: null,
    demo: null,
    featured: true,
    icons: [FaPython, SiTensorflow, SiKeras]
  },
  {
    id: 2,
    title: 'Online Bookstore Management System',
    description: 'A web-based application to manage bookstore inventory with efficient data handling.',
    longDescription: 'Designed and implemented a comprehensive web application for managing bookstore operations. Built the backend using Node.js and created an intuitive frontend with HTML, CSS, and JavaScript. The system features inventory management, order processing, and customer management capabilities. Implemented multi-worker processing and modular components for efficient data extraction and client handling.',
    tags: ['Node.js', 'JavaScript', 'HTML/CSS', 'Database Design', 'RESTful API'],
    image: '/images/project-placeholder.svg',
    github: null,
    demo: null,
    featured: true,
    icons: [FaNodeJs, SiJavascript, FaHtml5]
  },
  {
    id: 3,
    title: 'AI Chatbot in Collaboration with HP',
    description: 'Senior project developing an Artificial Intelligence Chatbot in partnership with Hewlett-Packard.',
    longDescription: 'Working on an advanced AI chatbot system in collaboration with Hewlett-Packard as part of my senior project. The chatbot leverages natural language processing and machine learning to provide intelligent responses and assistance. This project involves working with a team of professionals and implementing industry best practices for AI system development.',
    tags: ['Python', 'NLP', 'Machine Learning', 'AI', 'Industry Collaboration'],
    image: '/images/project-placeholder.svg',
    github: null,
    demo: null,
    featured: true,
    icons: [FaPython, FaRobot]
  },
  {
    id: 4,
    title: 'Automated API Testing Framework',
    description: 'Developed at BlackBerry/Cylance for RESTful API testing with Python.',
    longDescription: 'Created a comprehensive testing framework for RESTful APIs during my internship at BlackBerry/Cylance. Implemented automated integration and unit tests using Python, ensuring API endpoints functioned correctly and met specifications. The framework included test reporting, error detection, and continuous integration capabilities with Jenkins.',
    tags: ['Python', 'RESTful API', 'Test Automation', 'Jenkins', 'CI/CD'],
    image: '/images/project-placeholder.svg',
    github: null,
    demo: null,
    featured: false,
    icons: [FaPython, FaAws]
  },
  {
    id: 5,
    title: 'AWS Cloud Infrastructure',
    description: 'Designed and implemented AWS services including EC2, S3, and DynamoDB for application hosting.',
    longDescription: 'Leveraged my AWS Cloud Practitioner certification to design and implement cloud infrastructure for application hosting. The project included setting up EC2 instances for computing, S3 buckets for storage, and DynamoDB for database services. Implemented security best practices, automated scaling, and monitoring to ensure optimal performance and reliability.',
    tags: ['AWS', 'EC2', 'S3', 'DynamoDB', 'Cloud Architecture'],
    image: '/images/project-placeholder.svg',
    github: 'https://github.com/',
    demo: null,
    featured: false,
    icons: [FaAws]
  }
];

// Technology icon mapping
const TechIcons = ({ icons }: { icons: any[] }) => (
  <div className="flex space-x-3 mb-4">
    {icons.map((Icon, index) => (
      <span key={index} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
        <Icon className="h-5 w-5 text-primary" />
      </span>
    ))}
  </div>
);

export default function Projects() {
  return (
    <div className="py-32">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my technical projects showcasing skills.
          </p>
        </motion.div>
        
        {/* Personal Projects */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
            Personal Projects
          </h2>
          
          <div className="grid grid-cols-1 gap-12">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="rounded-lg overflow-hidden shadow-md bg-gray-200 dark:bg-gray-700 aspect-video flex items-center justify-center">
                    {project.id === 1 && <span className="text-6xl">🐱</span>}
                    {project.id === 2 && <span className="text-6xl">📚</span>}
                    {project.id === 3 && <span className="text-6xl">🤖</span>}
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <TechIcons icons={project.icons} />
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.longDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-800 dark:text-gray-200 hover:text-primary transition-colors"
                      >
                        <FaGithub className="mr-2" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-800 dark:text-gray-200 hover:text-primary transition-colors"
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
            Related Experience
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="p-6">
                  <TechIcons icons={project.icons} />
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 dark:text-gray-200 hover:text-primary transition-colors"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 dark:text-gray-200 hover:text-primary transition-colors"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl font-bold mb-4"></h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            I'm always open to new projects and opportunities. Let's create something cool.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Hit me up
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 