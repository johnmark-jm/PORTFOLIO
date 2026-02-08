"use client";

import React from 'react'
import SectionTitle from '../component/section-title'
import { motion } from "framer-motion";
import Link from 'next/link';

const Work= () => {
    const works = {
        designs:[
            {
                id: 1,
                title: "Logos",
                year: "2017-2026",
                description: "Logo designs with mock up.",
                link: "#!",
                image: "/assets/logos.png",
            },
            {
                id: 2,
                title: "Social Media",
                year: "2017-2026",
                description: "Social media posts.",
                link: "#!",
                image: "/assets/social_media.png",
            },
            {
                id: 3,
                title: "Cards",
                year: "2017-2026",
                description: "Cards desing and mock up.",
                link: "#!",
                image: "/assets/cards.png",
            },
            {
                id: 4,
                title: "Company Profile",
                year: "2017-2026",
                description: "Company profile presentation design.",
                link: "#!",
                image: "/assets/company_profile.png",
            }
        ],
        systems:[
            {
                id: 1,
                title: "Farm Management System",
                year: "2017-2026",
                description: "A customized farm management system focused on improving feed manufacturing operations and workflow management.",
                link: "#!",
                image: "/assets/notes.png",
            },
            {
                id: 2,
                title: "E&S Meat ERP System",
                year: "2017-2026",
                description: "E&S Meat ERP System is a customized ERP solution built to support and streamline their fast-paced food distribution workflow.",
                link: "#!",
                image: "/assets/esmeart_erp.png",
            },
            {
                id: 3,
                title: "Kiddieland Website",
                year: "2017-2026",
                description: "A modern school website developed to enhance online presence, streamline information access, and strengthen engagement with parents and the community.",
                link: "#!",
                image: "/assets/kiddieland.png",
            },
            {
                id: 4,
                title: "Company Profile",
                year: "2017-2026",
                description: "All of my logo designs with mock up",
                link: "#!",
                image: "/assets/bpfc.png",
            }
        ]
    }
  return (
   <section className='mt-32 relative'>
        <SectionTitle title='All My Works'/>

        <motion.div className='mx-auto mt-10'
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
            <p className='text-center font-semibold mb-5'>DESIGNS</p>
            <div className="mx-auto h-0.5 w-100 bg-gradient-to-r from-transparent via-white to-transparent" />
        </motion.div>
        


        <div className='flex flex-wrap items-center justify-center gap-6 mt-5 px-6'>
        {works.designs.map((design, index) => (
            <motion.div
                key={index}
                className='p-6 rounded-3xl space-y-4 glass max-w-80 w-full'
                whileHover={{ scale: 1.05 }}
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

                <img src={design.image} alt="Profile" className='flex-1 h-auto w-full max-w-sm rounded-2xl'/>
                <h3 className="text-base font-medium text-white">
                    {design.title}
                </h3>
                <p className=" text-gray-100 ">
                    {design.description}
                </p>
                    
                <Link href='/' className='btn glass flex justify-center mt-6'>
                    View
                </Link>
            </motion.div>
        ))}
        </div>

        
        <motion.div className='mx-auto mt-20'
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
            <p className='text-center font-semibold mb-5'>SYSTEMS</p>
            <div className="mx-auto h-0.5 w-100 bg-gradient-to-r from-transparent via-white to-transparent" />
        </motion.div>

        <div className='flex flex-wrap items-center justify-center gap-6 mt-5 px-6'>
        {works.systems.map((system, index) => (
            <motion.div
                key={index}
                className='p-6 rounded-3xl space-y-4 glass max-w-80 w-full'
                whileHover={{ scale: 1.05 }}
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

                <img src={system.image} alt="Profile" className='flex-1 h-auto w-full max-w-sm rounded-2xl'/>
                <h3 className="text-base font-medium text-white">
                    {system.title}
                </h3>
                <p className=" text-gray-100 ">
                    {system.description}
                </p>
                    
                <Link href='/' className='btn glass flex justify-center mt-6'>
                    View
                </Link>
                

            </motion.div>
        ))}
        </div>

   </section>
  )
}

export default Work