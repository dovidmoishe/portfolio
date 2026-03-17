'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaXTwitter, FaGithub, FaInstagram, FaYoutube, FaTiktok, FaTelegram, FaBars, FaXmark } from "react-icons/fa6";
import { HiMoon, HiSun } from "react-icons/hi2";
import Dave from '@/../public/dave.jpg'
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="fixed top-[16px] md:top-[20px] lg:top-[24px] left-0 right-0 z-[100] px-[16px] md:px-[32px] lg:px-[64px] animate-fade-in-up">
      <div className="flex items-center justify-between py-[8px] px-[16px] md:py-[8px] md:px-[32px] lg:py-[18px] lg:px-[40px] bg-white/80 dark:bg-[#1a474d]/80 backdrop-blur-md border border-gray-200/50 dark:border-white/10 rounded-4xl shadow-lg dark:shadow-2xl transition-all duration-300">
        <button onClick={() => scrollToSection('hero')} className="cursor-pointer group">
          <Image src={Dave} alt="Dave" width={50} height={50} className='rounded-full md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] transition-transform duration-300 group-hover:scale-105' />
        </button>

        <div className="hidden md:flex items-center gap-[16px] lg:gap-[24px]">
          <button onClick={() => scrollToSection('hero')} className="hover:opacity-70 transition-all duration-300 hover:scale-105 dark:text-white">
            <p>Home</p>
          </button>
          <button onClick={() => scrollToSection('projects')} className="hover:opacity-70 transition-all duration-300 hover:scale-105 dark:text-white">
            <p>Projects</p>
          </button>
          <button onClick={() => scrollToSection('work')} className="hover:opacity-70 transition-all duration-300 hover:scale-105 dark:text-white">
            <p>Work</p>
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="hover:opacity-70 transition-all duration-300 hover:scale-105 dark:text-white">
            <p>Testimonials</p>
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:opacity-70 transition-all duration-300 hover:scale-105 dark:text-white">
            <p>Contact</p>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-[12px] lg:gap-[16px]">
          <Link href="https://x.com/itsdavetech" target='_blank' className="hover:opacity-70 transition-all duration-300 hover:scale-110 dark:text-white">
            <FaXTwitter size={20} className="lg:w-[24px] lg:h-[24px]" />
          </Link>
          <Link href="https://github.com/dovidmoishe" target='_blank' className="hover:opacity-70 transition-all duration-300 hover:scale-110 dark:text-white">
            <FaGithub size={20} className="lg:w-[24px] lg:h-[24px]" />
          </Link>
          <Link href="https://instagram.com/itsdavetech_" target='_blank' className="hover:opacity-70 transition-all duration-300 hover:scale-110 dark:text-white">
            <FaInstagram size={20} className="lg:w-[24px] lg:h-[24px]" />
          </Link>
          <Link href="https://youtube.com/itsdavetech" target='_blank' className="hover:opacity-70 transition-all duration-300 hover:scale-110 dark:text-white">
            <FaYoutube size={20} className="lg:w-[24px] lg:h-[24px]" />
          </Link>
          <Link href="https://tiktok.com/itsdavetech" target='_blank' className="hover:opacity-70 transition-all duration-300 hover:scale-110 dark:text-white">
            <FaTiktok size={20} className="lg:w-[24px] lg:h-[24px]" />
          </Link>
          <Link href="https://t.me/itsdavetech" target='_blank' className="hover:opacity-70 transition-all duration-300 hover:scale-110 dark:text-white">
            <FaTelegram size={20} className="lg:w-[24px] lg:h-[24px]" />
          </Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden relative dark:text-white" aria-label="Toggle menu">
          <FaBars size={24} />
        </button>
      </div>

      <button onClick={toggleMenu} className={`md:hidden fixed top-[28px] right-[32px] md:right-[48px] lg:right-[80px] z-[110] text-white bg-black dark:bg-white dark:text-black p-2 rounded-full shadow-xl transition-all duration-300 hover:scale-110 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-label="Close menu">
        <FaXmark size={28} />
      </button>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 dark:bg-[#225A62]/95 z-[99] flex flex-col items-center justify-center text-white backdrop-blur-sm">
          <div className="flex flex-col items-center gap-[32px] mb-[48px]">
            <button onClick={() => scrollToSection('hero')} className="animate-fade-in-up animation-delay-100">
              <p className="text-2xl hover:opacity-70 transition-all duration-300 hover:scale-110">Home</p>
            </button>
            <button onClick={() => scrollToSection('projects')} className="animate-fade-in-up animation-delay-200">
              <p className="text-2xl hover:opacity-70 transition-all duration-300 hover:scale-110">Projects</p>
            </button>
            <button onClick={() => scrollToSection('work')} className="animate-fade-in-up animation-delay-300">
              <p className="text-2xl hover:opacity-70 transition-all duration-300 hover:scale-110">Work</p>
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="animate-fade-in-up animation-delay-400">
              <p className="text-2xl hover:opacity-70 transition-all duration-300 hover:scale-110">Testimonials</p>
            </button>
            <button onClick={() => scrollToSection('contact')} className="animate-fade-in-up animation-delay-500">
              <p className="text-2xl hover:opacity-70 transition-all duration-300 hover:scale-110">Contact</p>
            </button>
          </div>

          <div className="flex flex-col items-center gap-[16px] mb-[32px] animate-fade-in">
        
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
        </div>
      )}
    </div>
  )
}

export default Navbar