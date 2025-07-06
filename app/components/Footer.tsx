'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Main brand */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">Varun Bhat</h2>
            <p className="text-gray-600">Computer Science Graduate • Oregon State University 2025</p>
          </div>
          
          {/* Contact links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <a 
              href="mailto:varbhat10@gmail.com"
              className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
            >
              <FaEnvelope className="h-4 w-4" />
              varbhat10@gmail.com
            </a>
            <a 
              href="mailto:bhatv@oregonstate.edu"
              className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
            >
              <FaEnvelope className="h-4 w-4" />
              bhatv@oregonstate.edu
            </a>
          </div>
          
          {/* Social links */}
          <div className="flex space-x-6">
            <a 
              href="https://github.com/varbhat10/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/varun-bhat-osu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="pt-6 border-t border-gray-200 w-full">
            <p className="text-center text-sm text-gray-500">
              © {currentYear} Varun Bhat. Built with Next.js and hosted on GitHub Pages.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 