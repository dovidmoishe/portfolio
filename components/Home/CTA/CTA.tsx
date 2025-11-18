import React from "react";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const CTA = () => {
  return (
    <div id="contact" className="mt-[60px] md:mt-[80px] lg:mt-[100px] py-[50px] md:py-[65px] lg:py-[80px]">
      <div className="flex flex-col items-center justify-center px-[16px] md:px-[32px] lg:px-[64px] max-w-[90%] md:max-w-[700px] lg:max-w-[900px] mx-auto text-center">
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[40px] md:leading-[50px] lg:leading-[60px] mb-4 md:mb-5 lg:mb-6">
          Let's Work Together
        </h2>
        
        <p className="text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[24px] md:leading-[26px] lg:leading-[28px] opacity-[0.7] mb-8 md:mb-9 lg:mb-10">
          Whether you have a project in mind, want to collaborate, or just feel like saying hello{" "}
          <span className="hidden md:inline"><br /></span>
          I'm always open to meaningful conversations and new opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto">
          <Link
            href="https://x.com/messages/compose?recipient_id=YOUR_X_USER_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 md:px-6 py-3 bg-black text-white rounded-full text-[15px] md:text-[16px] font-medium hover:bg-gray-800 transition-colors duration-300 w-full sm:w-auto"
          >
            Message on
            <FaXTwitter size={16} className="md:w-[18px] md:h-[18px]" />
          </Link>

          <Link
            href="mailto:ozerlihashem@gmail.com"
            className="flex items-center justify-center gap-2 px-5 md:px-6 py-3 bg-white text-black rounded-full text-[15px] md:text-[16px] font-medium hover:bg-gray-100 transition-colors duration-300 border border-gray-200 w-full sm:w-auto"
          >
            Send an Email
            <FiMail size={16} className="md:w-[18px] md:h-[18px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;

