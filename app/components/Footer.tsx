'use client';

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              OSU CS Resume
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Computer Science Student @ Oregon State University
            </p>
          </div>
          
          <div className="flex flex-col mb-4 md:mb-0">
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-2">
              <Link href="/" className="text-sm hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/skills" className="text-sm hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="/projects" className="text-sm hover:text-primary transition-colors">
                Projects
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h3 className="font-semibold mb-2 text-center md:text-right">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:bhatv@oregonstate.edu" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Email Contact"
              >
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} OSU CS Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 