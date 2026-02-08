"use client"

import React from 'react'
import { motion } from 'framer-motion'

export interface SectionTitleProps {
    title?: string,
    description?: string
}

const SectionTitle= ({title, description} : SectionTitleProps) => {
  return (
    <div className='text-center mt-30'>
        <motion.h2 className='text-lg font-semibold max-w-lg mx-auto mt-4 text-white'
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
    >
        {title}
        </motion.h2>
        <motion.p className='mt-4 text-center text-sm/7 text-gray-100 max-w-3xl mx-auto'
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
        >
            {description}
        </motion.p>
    </div>
  )
}

export default SectionTitle