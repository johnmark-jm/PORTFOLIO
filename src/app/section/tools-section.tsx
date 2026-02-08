"use client";

import { motion } from 'framer-motion'
import { GithubIcon, icons } from 'lucide-react';
import React from 'react'
import ImgSwiper, { SwiperItem } from '../component/swiper';
import SectionTitle from '../component/section-title';

const ToolsSection = () => {
    const toolsIcon: SwiperItem[] = [
        {   
            image: '../assets/github.svg',
            title: 'Github'
            
        },
        {   
            image:'../assets/gitlab.svg',
            title:'Gitlab'
            
        },
        {   
            image: '../assets/vscode.svg',
            title: 'VScode',
            
        },
        {
            image: '../assets/git.svg',
            title: 'Git'
        },
        {   
            image:  '../assets/xampp.svg',
            title: 'Xampp'
        },
        {   
            image: '../assets/photoshop.svg',
            title: 'Photoshop'
        },
        {   
            image: '../assets/illustrator.svg',
            title: 'Illustrator'
        },
        {   
            image: '../assets/aftereffects.svg',
            title: 'After Effects'
        },
        {   
            image: '../assets/premierepro.svg',
            title: 'Premiere Pro'
        },
        {   
            image: '../assets/figma.svg',
            title: 'Figma'
        }
    ]

  return (
   <section className='mt-20 md:mt-5'>
        <div className='text-center'>
                <motion.h2 className='text-lg font-semibold max-w-lg mx-auto mt-4 text-white'
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
            >   Tools Utilized
                </motion.h2>
        </div>

        <motion.div className='flex flex-wrap justify-between max-sm:justify-center gap-10 max-w-4xl w-full mx-auto py-4 mt-5'
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
        >
             <ImgSwiper 
                slides={toolsIcon}
                perview={6}
                autoplay={true}
            />
        </motion.div>
   </section>
  )
}

export default ToolsSection