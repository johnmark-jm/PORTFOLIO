"use client";
import React from 'react'
import SectionTitle from '../component/section-title'
import { Facebook, Instagram, Mail, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <div id="about" className='mt-30 scroll-mt-50'>
        <SectionTitle
            title='About Me'
            description='Multidisciplinary Software Developer & Designer with 7 years of experience crafting responsive websites, intuitive UI/UX, and impactful digital experiences. Skilled in React, Next.js, Tailwind CSS, PHP, JavaScript, Bootstrap, and the Adobe Creative Suite.'    
        />

        <motion.div className='flex flex-col md:flex-row items-center justify-center gap-4 pb-6 mt-8'
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
          <a 
            href='https://www.facebook.com/johnmark.jm.4' 
            target='_blank' 
            rel='noopener noreferrer'
            className='flex items-center gap-2 hover:-translate-y-0.5 text-gray-200 transition-all duration-300'
          >
            <Facebook size={18}/> 
            <span>johnmark.jm.4</span>
          </a>

          <a 
            href='https://www.instagram.com/psstjm/' 
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center gap-2 hover:-translate-y-0.5 text-gray-200 transition-all duration-300'
          >
            <Instagram size={18}/> 
            <span>@psstjm</span>
          </a>

          <a 
            href="https://mail.google.com/mail/?view=cm&to=jmamarajg@gmail.com"
            target="_blank"
            className='flex items-center gap-2 hover:-translate-y-0.5 text-gray-200 transition-all duration-300'
          >
            <Mail size={18}/> 
            <span>jmamarajg@gmail.com</span>
          </a>

        </motion.div>
    </div>
  )
}

export default AboutMe