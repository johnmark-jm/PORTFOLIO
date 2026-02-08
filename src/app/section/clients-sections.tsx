"use client"
import React from 'react'
import { motion } from "framer-motion";
import SectionTitle from '../component/section-title';

const ClientsSections = () => {
  return (
    <section id="clients" className="mt-30 relative scroll-mt-50">
      <SectionTitle title='Clients'/>

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

export default ClientsSections