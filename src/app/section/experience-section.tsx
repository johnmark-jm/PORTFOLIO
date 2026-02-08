"use client"

import React from 'react'
import SectionTitle from '../component/section-title'
import { motion } from "framer-motion";

const Experience = () => {
  const experience = [
    {
        id: 1,
        title: "Bacolod Prosperity Feedmill Corp.",
        year: "2017-2026",
        description: "After I graduated colleged,I applied to the company and became part of the pioneering team that developed a farm management system for feed manufacturing, integrating accounting, HR, inventory, and formulation modules. In addition to my development role, I was the company’s sole Graphic Designer, handling product packaging and all marketing materials.",
        link: "#!",
        image: "/assets/bpfc.png",
    },
    {
        id: 2,
        title: "JuanCoder IT Solutions",
        year: "2015-2026",
        description: "Juancoder IT Solutions began as a thesis project developed by a group of collaborators. It initially operated under the name LevelJuan and later evolved into what is now known as Juancoder IT Solutions. As a Co-Founder and core team member, I led the company’s design direction, including branding and logo creation, and contributed as a co-developer on ERP, Inventory, POS, Food Processing, and Accounting systems for various clients.",
        link: "#!",
        image: "/assets/jc2.png",
    },
    {
        id: 3,
        title: "BR&V",
        year: "2024",
        description: "I worked part-time for three months as a UI/UX Designer and Next.js Developer, where I was responsible for designing user-centered interfaces and collaborated for existing accounting system",
        link: "#!",
        image: "/assets/brv.png",
    },
     {
        id: 4,
        title: "Freelance",
        year: "2015-2026",
        description: "Over the past years, I also worked as a freelance designer, delivering creative solutions tailored to client needs. My experience includes designing logos and branding for small businesses such as coffee shops, as well as creating T-shirt designs, business cards, and social media content. I focus on crafting visually appealing, cohesive designs that effectively communicate each client’s brand identity.",
        link: "#!",
        image: "/assets/freelance.png",
    }
];

  return (
    <section className="mt-32 relative">
      <SectionTitle
        title='Experience'
        description='I graduated from Carlos Hilado Memorial State College and completed my on-the-job training at Easy Rock Bacolod as a Software Developer and Graphic Designer. There, I gained hands-on experience in web development, software solutions, and creative design, strengthening both my technical and design skills.'
      />

      <motion.div className='relative space-y-20 md:space-y-30 mt-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
         <div className="flex-col items-center hidden md:flex absolute left-1/2 -translate-x-1/2">
         
            <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
                01
            </p>
            <div className="h-72 w-0.5 bg-gradient-to-b from-transparent via-white to-transparent" />
            <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
                02
            </p>
            <div className="h-72 w-0.5 bg-gradient-to-b from-transparent via-white to-transparent" />
            <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
                03
            </p>
            <div className="h-72 w-0.5 bg-gradient-to-b from-transparent via-white to-transparent" />
            <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
                04
            </p>
        </div>

        {experience.map((exp, index) => (
           <motion.div key={index} className={`flex items-center justify-center gap-6 md:gap-20 ${index % 2 !== 0 ? 'flex-col md:flex-row-reverse': 'flex-col md:flex-row'}`}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{type: "spring", stiffness: 320, damping: 70, mass: 1 }}
          >
            <img src={exp.image} alt="step" className="flex-1 h-auto w-full max-w-sm rounded-2xl" />

            <div key={index} className="flex-1 flex flex-col gap-6 md:px-6 max-w-md">
              <h3 className="text-2xl font-medium text-white">
                {exp.title}
              </h3>
              <h4 className="text-lg font-medium text-white">
                {exp.year}
              </h4>
              <p className="text-gray-100 text-sm/6 pb-2">
                  {exp.description}
              </p>
            </div>
            
          </motion.div>
        ))}
       

      </motion.div>
    </section>
  )
}

export default Experience