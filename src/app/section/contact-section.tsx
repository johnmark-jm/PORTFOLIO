"use client"

import React from 'react'
import SectionTitle from '../component/section-title'
import { motion } from 'framer-motion'

const Contact= () => {
  return (
    <section id="contact" className="mt-30 relative scroll-mt-50">
      <SectionTitle title='Contact'/>

      <motion.div className='relative space-y-20 md:space-y-30 mt-20'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
      >

      </motion.div>
    </section>
  )
}

export default Contact