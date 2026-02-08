"use client"

import React from 'react'
import { motion } from 'framer-motion'; 
import { Briefcase, FileUser } from 'lucide-react';

const HeroSection = () => {
  return (
    <>
    <motion.div className='fixed inset-0 overflow-hidden -z-20 pointer-events-none'
        initial={{ opacity: 0.4 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >   
        
        <div
            className="absolute inset-0 z-0"
            style={{
                background: `
                radial-gradient(ellipse 80% 100% at 50% 0%, #858585, transparent 100%)
                `,
            }}
        />
    
        {/* <div className="absolute inset-0 bg-[#07020d]" />
         <div
            className="absolute inset-0 bg-no-repeat bg-center bg-cover"
            style={{
            backgroundImage: "url('/assets/dark-hero-gradient.svg')",
            }}
        /> */}
        
    </motion.div>
    
    <motion.div className='md:px-12 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start relative'
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
    >
        <div className='flex flex-col items-center md:items-start mt-15'>
            <h1 className='text-4xl/13 md:text-4xl/15 font-semibold tracking-tight max-w-3xl'>
                Hello!
            </h1>
            <p className='text-2xl/13 md:text-3xl/15 tracking-tight max-w-3xl md:ml-10'>
                I'm John Mark
            </p>
            <h1 className='text-4xl/13 md:text-5xl/15 font-semibold tracking-tight max-w-3xl'>
                Web Developer
            </h1>

            <div className='flex flex-col md:flex-row items-center gap-4 mt-6 w-full md:w-auto'>
                <button className='btn w-full md:w-auto flex items-center justify-center gap-2 py-3 bg-white text-gray-800'>
                    <Briefcase className='size-4.5'/> HireMe!
                </button>
                <button className='btn w-full md:w-auto flex items-center justify-center gap-2 py-3 glass'>
                    <FileUser className='size-4.5'/> Ressume
                </button>
            </div>
        </div>
        
        <div className='flex flex-col items-center md:items-end md:flex-1'>
            <div className='w-90 h-90 md:w-120 md:h-120 flex-shrink-0'>
                <img 
                    src="../assets/profile2.png" 
                    alt="Profile" 
                    className='object-cover w-full h-full rounded-xl'
                />
            </div>
        </div>
    </motion.div>
    </> 
  )
}

export default HeroSection