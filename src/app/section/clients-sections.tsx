"use client"

import { motion } from "framer-motion";
import SectionTitle from '../component/section-title';

const ClientsSections = () => {
  const data = [
        {
            review: 'Super clean and easy to use. These Tailwind + React components saved me hours of dev time and countless lines of extra code!',
            name: 'E&S Meat Corp.',
            about: 'Founder & CEO',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
        },
        {
            review: 'The design quality is top-notch. Perfect balance between simplicity and style. Highly recommend for any creative developer!',
            name: 'QL Poultry and Agricultural Supply',
            about: 'Founder & CEO',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
        },
        {
            review: 'Absolutely love the reusability of these components. My workflow feels 10x faster now with cleaner and more consistent layouts.',
            name: 'Kiddieland Learning Center',
            about: 'Founder & CEO',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
        },
        {
            review: 'Clean, elegant, and efficient. These components are a dream for any modern web developer who values beautiful code.',
            name: 'Bacolod Prosperity Feeds Corp.',
            about: 'Founder & CEO',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
        },
        {
            review: "I've tried dozens of UI kits, but this one just feels right. Everything works seamlessly and looks incredibly polished.",
            name: 'JuanCoder IT Solutions',
            about: 'Founder & CEO',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop',
        },
        {
            review: 'Brilliantly structured components with clean, modern styling. Makes development a joy and design updates super quick.',
            name: 'BR&V',
            about: 'Founder & CEO',
            rating: 5,
            image: 'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png',
        },
        {
            review: 'Brilliantly structured components with clean, modern styling. Makes development a joy and design updates super quick.',
            name: 'BR&V',
            about: 'Brew Decafe',
            rating: 5,
            image: 'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png',
        },
    ];

  return (
    <section id="clients" className="mt-30 relative scroll-mt-50">
      <SectionTitle 
        title='Clients'
        description='List of all Clients/Companies I have worked with.'
      />

      <div className='flex flex-wrap items-center justify-center gap-6 mt-10 px-6'>
        {data.map((client, index) => (
          <motion.div key={index}
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
            <div className='flex items-center justify-between'>
              <p className="font-medium">{client.name}</p>
              <img src={client.image} className="size-10 rounded-full object-cover"/>
            </div>
            <p className="line-clamp-3">{client.review}</p>
            
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ClientsSections