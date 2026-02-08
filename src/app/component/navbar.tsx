"use client"; 
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon, XIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const Links = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills'},
        { name: 'Experience', href: '#experience'},
        { name: 'Works', href: '#works'},
        { name: 'Clients', href: '#clients'},
        { name: 'Contact', href: '#contact'},
    ];

    useEffect(() => {
        const handleScroll = () =>{
            if(window.scrollY > 50) {
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

  return (
  <>
    <style>{`html { scroll-behavior: smooth; }`}</style>
    <motion.nav className={`sticky top-0 z-50 flex w-full items-center justify-between px-4 py-3.5 md:px-16 lg:px-24 transition-colors ${isScrolled ? 'bg-white/15 backdrop-blur-lg':''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}    
    >   
        <motion.p className='text-center text-lg md:text-xl/19 font-semibold tracking-tight max-w-3xl'>
           <a href='/#' className='text-white'>MY PROFILE</a>
        </motion.p> 
        {/* <a href='#!'>
            <Image src='../../assets/logo.svg' alt='logo' className='h-8.5 w-auto' width={205} height={48} />
        </a> */}

        <div className='hidden items-center space-x-10 md:flex'>
            {Links.map((link) =>(
                <Link key={link.name} href={link.href} className='transition hover:text-gray-300'>{link.name}</Link>
            ))}

            <Link href='/' className='btn glass'>
                Contact
            </Link>
        </div>
        
        <button onClick={() => setIsOpen(true)} className='transition active:scale-90 md:hidden'>
            <MenuIcon className='size-6.5' />
        </button>
    </motion.nav>

    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/20 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {Links.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                {link.name}
            </Link>
        ))}

        <Link key='' href='' className='btn glass' onClick={() => setIsOpen(false)}>
            Sign Up
        </Link>

        <button onClick={() => setIsOpen(false)} className='rounded-md p-2 glass'>
            <XIcon/>
        </button>

    </div>
  </>
  )
}

export default Navbar