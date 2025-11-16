'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaXTwitter, FaGithub, FaInstagram, FaYoutube, FaTiktok, FaTelegram, FaBars, FaXmark } from "react-icons/fa6";
import Dave from '@/../public/dave.jpg'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="fixed top-[16px] md:top-[20px] lg:top-[24px] left-0 right-0 z-[100] px-[16px] md:px-[32px] lg:px-[64px]">
      <div className="flex items-center justify-between py-[8px] px-[16px] md:py-[8px] md:px-[32px] lg:py-[18px] lg:px-[40px] bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-4xl shadow-lg">
        <Link href="/">
          <Image src={Dave} alt="Dave" width={50} height={50} className='rounded-full md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]' />
        </Link>

        <div className="hidden md:flex items-center gap-[16px] lg:gap-[24px]">
          <Link href="/">
            <p className="hover:opacity-70 transition-opacity">Home</p>
          </Link>
          <Link href="/about">
            <p className="hover:opacity-70 transition-opacity">Works</p>
          </Link>
          <Link href="/experience">
            <p className="hover:opacity-70 transition-opacity">Experience</p>
          </Link>
          <Link href="/contact">
            <p className="hover:opacity-70 transition-opacity">Contact</p>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-[12px] lg:gap-[16px]">
          <Link href="https://x.com/itsdavetech" target='_blank' className="hover:opacity-70 transition-opacity">
            <FaXTwitter size={20} className="lg:w-[24px] lg:h-[24px]" />
          </Link>
          <Link href="https://github.com/dovidmoishe" target='_blank' className="hover:opacity-70 transition-opacity">
            <FaGithub size={20} className="lg:w-[24px] lg:h-[24px]" />
          </Link>
          <Link href="https://instagram.com/itsdavetech_" target='_blank' className="hover:opacity-70 transition-opacity">
            <FaInstagram size={20} className="lg:w-[24px] lg:h-[24px]" />
          </Link>
          <Link href="https://youtube.com/itsdavetech" target='_blank' className="hover:opacity-70 transition-opacity">
            <FaYoutube size={20} className="lg:w-[24px] lg:h-[24px]" />
          </Link>
          <Link href="https://tiktok.com/itsdavetech" target='_blank' className="hover:opacity-70 transition-opacity">
            <FaTiktok size={20} className="lg:w-[24px] lg:h-[24px]" />
          </Link>
          <Link href="https://t.me/itsdavetech" target='_blank' className="hover:opacity-70 transition-opacity">
            <FaTelegram size={20} className="lg:w-[24px] lg:h-[24px]" />
          </Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden relative" aria-label="Toggle menu">
          <FaBars size={24} />
        </button>
      </div>

      <button onClick={toggleMenu} className={`md:hidden fixed top-[28px] right-[32px] md:right-[48px] lg:right-[80px] z-[110] text-white bg-black p-2 rounded-full shadow-xl transition-all ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-label="Close menu">
        <FaXmark size={28} />
      </button>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 z-[99] flex flex-col items-center justify-center text-white">
          <div className="flex flex-col items-center gap-[32px] mb-[48px]">
            <Link href="/" onClick={toggleMenu}>
              <p className="text-2xl hover:opacity-70 transition-opacity">Home</p>
            </Link>
            <Link href="/about" onClick={toggleMenu}>
              <p className="text-2xl hover:opacity-70 transition-opacity">Works</p>
            </Link>
            <Link href="/experience" onClick={toggleMenu}>
              <p className="text-2xl hover:opacity-70 transition-opacity">Experience</p>
            </Link>
            <Link href="/contact" onClick={toggleMenu}>
              <p className="text-2xl hover:opacity-70 transition-opacity">Contact</p>
            </Link>
          </div>

          <div className="flex items-center gap-[24px]">
            <Link href="https://x.com/itsdavetech" target='_blank' className="hover:opacity-70 transition-opacity">
              <FaXTwitter size={28} />
            </Link>
            <Link href="https://github.com/dovidmoishe" target='_blank' className="hover:opacity-70 transition-opacity">
              <FaGithub size={28} />
            </Link>
            <Link href="https://instagram.com/itsdavetech_" target='_blank' className="hover:opacity-70 transition-opacity">
              <FaInstagram size={28} />
            </Link>
            <Link href="https://youtube.com/itsdavetech" target='_blank' className="hover:opacity-70 transition-opacity">
              <FaYoutube size={28} />
            </Link>
            <Link href="https://tiktok.com/itsdavetech" target='_blank' className="hover:opacity-70 transition-opacity">
              <FaTiktok size={28} />
            </Link>
            <Link href="https://t.me/itsdavetech" target='_blank' className="hover:opacity-70 transition-opacity">
              <FaTelegram size={28} />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar