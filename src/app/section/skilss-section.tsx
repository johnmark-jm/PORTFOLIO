"use client"
import React, { useRef } from 'react'
import SectionTitle from '../component/section-title'
import { motion } from "framer-motion";

const SkilssSection = () => {
    const refs = useRef([]);
    const skills = [
        {   
            icon: "../assets/phplogo.svg",
            title: "PHP",
            description: "PHP is a server-side scripting language used to build dynamic websites and web applications.",
        },
        {   
            icon: "../assets/javascript.svg",
            title: "JavaScript",
            description: "JavaScript is a programming language that makes websites interactive and dynamic.",
        },
        {
            icon: "../assets/vue.svg",
            title: "Vue",
            description: "Vue.js is a progressive JavaScript framework for building interactive and reactive web interfaces.",
        },
        {   
            icon: "../assets/next-js.svg",
            title: "Next Js",
            description: "ANext.js is a React framework for building fast, server-rendered, and SEO-friendly web applications.",
        },
        {   
            icon: "../assets/node-js.svg",
            title: "Node Js",
            description: "Node.js is a server-side JavaScript runtime for building scalable backend applications.",
        },
        {
            icon: "../assets/typescript.svg",
            title: "Typescript",
            description: "TypeScript is a typed superset of JavaScript that adds static types for safer and more maintainable code.",
        },
        {
            icon: "../assets/bootstrap.svg",
            title: "Bootstrap",
            description: "Bootstrap is a CSS framework for building responsive and mobile-friendly web interfaces quickly.",
        },
        {
            icon: "../assets/sql.svg",
            title: "SQL",
            description: "SQL (Structured Query Language) is a language for managing and querying databases.",
        },
        {
            icon: "../assets/adobe.svg",
            title: "Adobe Creative Suit",
            description: "Adobe Creative Suite is a collection of software for graphic design, video editing, and digital content creation",
        },
        {
            icon: "../assets/figma.svg",
            title: "Figma",
            description: "Figma is a cloud-based design tool for UI/UX design and collaborative prototyping.",
        }
    ];

  return (
   <section className="mt-30">
    <SectionTitle
        title='Skills'    
    />

     <div className="flex flex-wrap items-center justify-center gap-6 mt-10 px-6">
        {skills.map((skill, index) => (
            <motion.div
                key={index}
                className='hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full'
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 320,
                    damping: 70,
                    mass: 1
                }}
            >   

                <img src={skill.icon} alt="Profile" className='size-15'/>
                <h3 className="text-base font-medium text-white">
                    {skill.title}
                </h3>
                
                <p className="text-gray-100 pb-2">
                    {skill.description}
                </p>

            </motion.div>
        ))}
     </div>

   </section>
  )
}

export default SkilssSection