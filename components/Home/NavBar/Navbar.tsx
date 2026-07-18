'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from "framer-motion";
import { FaXTwitter, FaGithub, FaInstagram, FaYoutube, FaTiktok, FaTelegram, FaBars, FaXmark } from "react-icons/fa6";
import Dave from '@/../public/dave.jpg'
import ThemeToggle from "./ThemeToggle";

const NAVBAR_OFFSET = 96

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSectionScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId)

    if (section) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET

      window.scrollTo({
        top: Math.max(sectionTop, 0),
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      })
    }

    setIsMenuOpen(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-[10px] md:top-[14px] lg:top-[16px] left-0 right-0 z-[100] px-[10px] md:px-[20px] lg:px-[32px]"
    >
      <div className="flex items-center justify-between py-[4px] px-[10px] md:py-[4px] md:px-[14px] lg:py-[6px] lg:px-[18px] bg-surface/82 text-foreground backdrop-blur-md border border-border rounded-4xl shadow-lg shadow-black/[0.05] transition-all duration-300 dark:shadow-black/30">
        <motion.button whileTap={{ scale: 0.96 }} onClick={() => handleSectionScroll('hero')} className="cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full" aria-label="Go to home section">
          <Image src={Dave} alt="Dave" width={42} height={42} className='rounded-full md:w-[48px] md:h-[48px] lg:w-[56px] lg:h-[56px] transition-transform duration-300 group-hover:scale-105' />
        </motion.button>

        <div className="hidden md:flex items-center gap-[24px] lg:gap-[32px] text-[14px] lg:text-[15px]">
          <motion.button whileTap={{ scale: 0.96 }} onClick={() => handleSectionScroll('hero')} className="cursor-pointer hover:opacity-70 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">
            <p>Home</p>
          </motion.button>
          <motion.button whileTap={{ scale: 0.96 }} onClick={() => handleSectionScroll('about')} className="cursor-pointer hover:opacity-70 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">
            <p>About</p>
          </motion.button>
          <motion.button whileTap={{ scale: 0.96 }} onClick={() => handleSectionScroll('projects')} className="cursor-pointer hover:opacity-70 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">
            <p>Projects</p>
          </motion.button>
          <motion.button whileTap={{ scale: 0.96 }} onClick={() => handleSectionScroll('work')} className="cursor-pointer hover:opacity-70 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">
            <p>Work</p>
          </motion.button>
          <motion.button whileTap={{ scale: 0.96 }} onClick={() => handleSectionScroll('contact')} className="cursor-pointer hover:opacity-70 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">
            <p>Contact</p>
          </motion.button>
        </div>

        <div className="hidden md:flex items-center gap-[7px] lg:gap-[9px]">
          <ThemeToggle />
          <Link href="https://x.com/itsdavetech" target='_blank' className="hover:opacity-70 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">
            <FaXTwitter size={18} className="lg:w-[20px] lg:h-[20px]" />
          </Link>
          <Link href="https://github.com/dovidmoishe" target='_blank' className="hover:opacity-70 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">
            <FaGithub size={18} className="lg:w-[20px] lg:h-[20px]" />
          </Link>
          <Link href="https://instagram.com/itsdavetech_" target='_blank' className="hover:opacity-70 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">
            <FaInstagram size={18} className="lg:w-[20px] lg:h-[20px]" />
          </Link>
          <Link href="https://youtube.com/itsdavetech" target='_blank' className="hover:opacity-70 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">
            <FaYoutube size={18} className="lg:w-[20px] lg:h-[20px]" />
          </Link>
          <Link href="https://tiktok.com/itsdavetech" target='_blank' className="hover:opacity-70 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">
            <FaTiktok size={18} className="lg:w-[20px] lg:h-[20px]" />
          </Link>
          <Link href="https://t.me/itsdavetech" target='_blank' className="hover:opacity-70 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">
            <FaTelegram size={18} className="lg:w-[20px] lg:h-[20px]" />
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <motion.button whileTap={{ scale: 0.92 }} onClick={toggleMenu} className="relative inline-flex min-h-10 min-w-10 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" aria-label="Toggle menu">
          <FaBars size={24} />
          </motion.button>
        </div>
      </div>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={toggleMenu}
        className={`md:hidden fixed top-[28px] right-[32px] md:right-[48px] lg:right-[80px] z-[110] text-white bg-black p-2 rounded-full shadow-xl transition-all duration-300 hover:scale-110 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-label="Close menu"
      >
        <FaXmark size={28} />
      </motion.button>

      <AnimatePresence>
        {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="md:hidden fixed inset-0 bg-black/95 z-[99] flex flex-col items-center justify-center text-white backdrop-blur-sm"
        >
          <div className="flex flex-col items-center gap-[32px] mb-[48px]">
            <motion.button initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.25, delay: 0.05 }} onClick={() => handleSectionScroll('hero')} className="cursor-pointer">
              <p className="text-2xl hover:opacity-70 transition-all duration-300 hover:scale-110">Home</p>
            </motion.button>
            <motion.button initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.25, delay: 0.1 }} onClick={() => handleSectionScroll('about')} className="cursor-pointer">
              <p className="text-2xl hover:opacity-70 transition-all duration-300 hover:scale-110">About</p>
            </motion.button>
            <motion.button initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.25, delay: 0.15 }} onClick={() => handleSectionScroll('projects')} className="cursor-pointer">
              <p className="text-2xl hover:opacity-70 transition-all duration-300 hover:scale-110">Projects</p>
            </motion.button>
            <motion.button initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.25, delay: 0.2 }} onClick={() => handleSectionScroll('work')} className="cursor-pointer">
              <p className="text-2xl hover:opacity-70 transition-all duration-300 hover:scale-110">Work</p>
            </motion.button>
            <motion.button initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.25, delay: 0.25 }} onClick={() => handleSectionScroll('contact')} className="cursor-pointer">
              <p className="text-2xl hover:opacity-70 transition-all duration-300 hover:scale-110">Contact</p>
            </motion.button>
          </div>

          <div className="flex flex-col items-center gap-[16px] mb-[32px] animate-fade-in">
            <ThemeToggle mobile />
          </div>

          <div className="flex items-center gap-[24px] animate-fade-in">
            <Link href="https://x.com/itsdavetech" target='_blank' className="hover:opacity-70 transition-all duration-300 hover:scale-110">
              <FaXTwitter size={28} />
            </Link>
            <Link href="https://github.com/dovidmoishe" target='_blank' className="hover:opacity-70 transition-all duration-300 hover:scale-110">
              <FaGithub size={28} />
            </Link>
            <Link href="https://instagram.com/itsdavetech_" target='_blank' className="hover:opacity-70 transition-all duration-300 hover:scale-110">
              <FaInstagram size={28} />
            </Link>
            <Link href="https://youtube.com/itsdavetech" target='_blank' className="hover:opacity-70 transition-all duration-300 hover:scale-110">
              <FaYoutube size={28} />
            </Link>
            <Link href="https://tiktok.com/itsdavetech" target='_blank' className="hover:opacity-70 transition-all duration-300 hover:scale-110">
              <FaTiktok size={28} />
            </Link>
            <Link href="https://t.me/itsdavetech" target='_blank' className="hover:opacity-70 transition-all duration-300 hover:scale-110">
              <FaTelegram size={28} />
            </Link>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar
