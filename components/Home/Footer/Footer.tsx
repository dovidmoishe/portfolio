import React from "react";
import Link from "next/link";
import { FaXTwitter, FaLinkedin, FaGithub, FaDribbble, FaTiktok, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: "Twitter/X",
      icon: FaXTwitter,
      url: "https://x.com/yourusername",
    },
    {
      name: "Tiktok",
      icon: FaTiktok,
      url: "https://tiktok.com/@itsdave.solana",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/dovidmoishe",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/itsdavetech_",
    },
  ];

  return (
    <footer className="py-8 md:py-10 lg:py-12 px-[16px] md:px-[32px] lg:px-[64px] border-t border-gray-200">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <p className="text-[13px] md:text-[14px] font-normal leading-[20px] md:leading-[21px] opacity-[0.7]">
          © {currentYear} All rights reserved.
        </p>

        <div className="flex items-center gap-4 md:gap-5 lg:gap-6">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              className="text-black opacity-[0.7] hover:opacity-100 transition-opacity duration-300"
              aria-label={social.name}
            >
              <social.icon size={18} className="md:w-[19px] md:h-[19px] lg:w-[20px] lg:h-[20px]" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

