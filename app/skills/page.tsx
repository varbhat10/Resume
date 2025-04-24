'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaTools, FaLaptopCode, FaCloud, FaPuzzlePiece } from 'react-icons/fa';

// Skill data organized by category
const skillsData = {
  languages: [
    { name: 'Python', proficiency: 95 },
    { name: 'JavaScript', proficiency: 85 },
    { name: 'HTML/CSS', proficiency: 90 },
    { name: 'Ruby', proficiency: 80 },
    { name: 'C++', proficiency: 85 },
    { name: 'C#', proficiency: 80 },
    { name: 'Java', proficiency: 85 },
    { name: 'MASM', proficiency: 75 },
  ],
  frontend: [
    { name: 'React', proficiency: 90 },
    { name: 'JavaScript', proficiency: 85 },
    { name: 'HTML/CSS', proficiency: 90 },
    { name: 'Responsive Design', proficiency: 85 },
    { name: 'UI/UX Principles', proficiency: 80 },
  ],
  backend: [
    { name: 'Node.js', proficiency: 85 },
    { name: 'API Development', proficiency: 90 },
    { name: 'RESTful Services', proficiency: 90 },
    { name: 'Database Design', proficiency: 80 },
  ],
  cloud: [
    { name: 'AWS', proficiency: 85 },
    { name: 'AWS Cloud Practitioner', proficiency: 90 },
    { name: 'Azure', proficiency: 75 },
    { name: 'EC2', proficiency: 80 },
    { name: 'S3', proficiency: 85 },
    { name: 'DynamoDB', proficiency: 80 },
  ],
  tools: [
    { name: 'Docker', proficiency: 85 },
    { name: 'Jenkins', proficiency: 80 },
    { name: 'Postman', proficiency: 90 },
    { name: 'Splunk', proficiency: 75 },
    { name: 'Git', proficiency: 90 },
  ],
  concepts: [
    { name: 'Data Structures', proficiency: 85 },
    { name: 'Algorithms', proficiency: 85 },
    { name: 'OOP', proficiency: 90 },
    { name: 'Machine Learning', proficiency: 80 },
    { name: 'Test Automation', proficiency: 85 },
    { name: 'CI/CD', proficiency: 80 },
  ],
};

// Category metadata with icons
const categories = [
  { id: 'languages', name: 'Programming Languages', icon: FaCode, color: 'blue' },
  { id: 'frontend', name: 'Frontend Development', icon: FaLaptopCode, color: 'purple' },
  { id: 'backend', name: 'Backend Development', icon: FaServer, color: 'green' },
  { id: 'cloud', name: 'Cloud & DevOps', icon: FaCloud, color: 'yellow' },
  { id: 'tools', name: 'Tools & Platforms', icon: FaTools, color: 'red' },
  { id: 'concepts', name: 'Concepts & Methodologies', icon: FaPuzzlePiece, color: 'indigo' },
];

// SkillBar component for animated skill bars
const SkillBar = ({ name, proficiency }: { name: string; proficiency: number }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${proficiency}%`,
        transition: { duration: 1, ease: 'easeOut' },
      });
    }
  }, [controls, inView, proficiency]);

  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          ref={ref}
          initial={{ width: 0 }}
          animate={controls}
          className="h-full bg-primary rounded-full"
        ></motion.div>
      </div>
    </div>
  );
};

// CategorySection component for each skill category
const CategorySection = ({ 
  category, 
  skills, 
  icon: Icon, 
  color 
}: { 
  category: string; 
  skills: Array<{ name: string; proficiency: number }>; 
  icon: React.ElementType;
  color: string;
}) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  };
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="card p-6"
    >
      <div className="flex items-center mb-6">
        <div className={`p-3 rounded-full mr-3 ${colorClasses[color as keyof typeof colorClasses]}`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold">{category}</h3>
      </div>
      <div>
        {skills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
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
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <CategorySection
              key={category.id}
              category={category.name}
              skills={skillsData[category.id as keyof typeof skillsData]}
              icon={category.icon}
              color={category.color}
            />
          ))}
        </div>
        
        {/* Tools Used Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 p-6 card"
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