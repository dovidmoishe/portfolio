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
    <div>
      <div className="flex items-center justify-between py-[20px] px-[16px] md:py-[25px] md:px-[32px] lg:px-[64px]">
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

        <button onClick={toggleMenu} className={`md:hidden z-50 ${isMenuOpen ? 'text-white' : ''}`} aria-label="Toggle menu">
          {isMenuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center text-white">
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