'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaCode, FaServer, FaLaptopCode, FaTools, FaPuzzlePiece } from 'react-icons/fa';

export default function Skills() {
  // List of my skills by category for display without progress bars
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "HTML/CSS", "Java", "C++", "C#", "Ruby", "MASM"],
      icon: FaCode,
      color: "primary"
    },
    {
      title: "Frontend Development",
      skills: ["React", "Responsive Design", "UI/UX Principles"],
      icon: FaLaptopCode,
      color: "purple"
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "API Development", "RESTful Services", "Database Design"],
      icon: FaServer,
      color: "green"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "EC2", "S3", "DynamoDB", "Azure"],
      icon: FaCloud,
      color: "yellow"
    },
    {
      title: "Tools & Platforms",
      skills: ["Docker", "Jenkins", "Postman", "Git", "Splunk"],
      icon: FaTools,
      color: "red"
    },
    {
      title: "Concepts & Methodologies",
      skills: ["Data Structures", "Algorithms", "OOP", "Machine Learning", "Test Automation", "CI/CD"],
      icon: FaPuzzlePiece,
      color: "indigo"
    }
  ];

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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Technical Skills</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            As an AWS Certified Cloud Practitioner with experience in full-stack development, 
            I've acquired a diverse range of technical skills.
          </p>
        </motion.div>
        
        {/* AWS Certification Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-8 rounded-lg text-center"
        >
          <div className="inline-block p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-full mb-4">
            <FaCloud className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
          </div>
          <h2 className="text-2xl font-bold mb-2">AWS Certified Cloud Practitioner</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Certified in cloud technologies with in-depth knowledge of AWS services including EC2, S3, and DynamoDB.
            I specialize in cloud architecture and implementation for modern applications.
          </p>
        </motion.div>
        
        {/* Skills Overview - No progress bars, just listing skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className={category.color === 'primary' 
                  ? "p-3 rounded-full mr-3 bg-primary/10 text-primary" 
                  : category.color === 'purple' 
                    ? "p-3 rounded-full mr-3 bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200"
                    : category.color === 'green'
                      ? "p-3 rounded-full mr-3 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200"
                      : category.color === 'yellow'
                        ? "p-3 rounded-full mr-3 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200"
                        : category.color === 'red'
                          ? "p-3 rounded-full mr-3 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200"
                          : "p-3 rounded-full mr-3 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-200"
                }>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Continuous Development Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="p-6 card"
        >
          <h2 className="text-2xl font-bold mb-4">Continuous Development</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I'm passionate about staying at the forefront of technology by actively learning and applying new skills.
            My current focus areas include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-bold text-primary mb-2">Advanced Machine Learning</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Building upon my experience creating a cat breed classifier with CNNs.
              </p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-bold text-primary mb-2">Advanced AWS Architecture</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Expanding my cloud expertise with more advanced AWS services and patterns.
              </p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-bold text-primary mb-2">DevOps Best Practices</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Perfecting CI/CD pipelines and infrastructure as code principles.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 