import React from "react";
import type { StaticImageData } from "next/image";
import Link from "next/link";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  xHandle: string;
  image?: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Working with him was a game-changer for us. Their attention to detail and innovative approach helped us improve our app's user engagement by 40%!",
    name: "Ahmed Abiola",
    title: "Product Manager",
    company: "InnovateX",
    xHandle: "ahmedabiola",
  },
  {
    quote:
      "Working with him was a game-changer for us. Their attention to detail and innovative approach helped us improve our app's user engagement by 40%!",
    name: "Ahmed Abiola",
    title: "Product Manager",
    company: "InnovateX",
    xHandle: "ahmedabiola",
  },
  {
    quote:
      "Working with him was a game-changer for us. Their attention to detail and innovative approach helped us improve our app's user engagement by 40%!",
    name: "Ahmed Abiola",
    title: "Product Manager",
    company: "InnovateX",
    xHandle: "ahmedabiola",
  },
  {
    quote:
      "Working with him was a game-changer for us. Their attention to detail and innovative approach helped us improve our app's user engagement by 40%!",
    name: "Ahmed Abiola",
    title: "Product Manager",
    company: "InnovateX",
    xHandle: "ahmedabiola",
  },
  {
    quote:
      "Working with him was a game-changer for us. Their attention to detail and innovative approach helped us improve our app's user engagement by 40%!",
    name: "Ahmed Abiola",
    title: "Product Manager",
    company: "InnovateX",
    xHandle: "ahmedabiola",
  },
  {
    quote:
      "Working with him was a game-changer for us. Their attention to detail and innovative approach helped us improve our app's user engagement by 40%!",
    name: "Ahmed Abiola",
    title: "Product Manager",
    company: "InnovateX",
    xHandle: "ahmedabiola",
  },
];

const TestimonialCard = (testimonial: Testimonial) => {
  return (
    <div
      className="flex flex-col p-5 md:p-6 rounded-lg"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      <p className="text-[15px] md:text-[16px] font-normal leading-[23px] md:leading-[24px] mb-5 md:mb-6">
        &quot;{testimonial.quote}&quot;
      </p>

      <div className="flex flex-col mt-auto">
        <Link
          href={`https://x.com/${testimonial.xHandle}`}
          target="_blank"
          className="text-[15px] md:text-[16px] font-bold leading-[23px] md:leading-[24px] hover:underline"
        >
          {testimonial.name}
        </Link>
        <p className="text-[13px] md:text-[14px] font-normal leading-[20px] md:leading-[21px] opacity-[0.7]">
          {testimonial.title}, {testimonial.company}
        </p>
      </div>
    </div>
  );
};

function Testimonials() {
  return (
    <div id="testimonials" className="mt-[60px] md:mt-[80px] lg:mt-[100px]">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 px-[16px] md:px-[32px] lg:px-[64px]">
        <div className="flex flex-col">
          <p className="opacity-[0.7] text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[28px] md:leading-[32px] lg:leading-[36px]">
            Testimonial
          </p>
          <p className="leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold text-[24px] md:text-[28px] lg:text-[30px]">What others say</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 px-[16px] md:px-[32px] lg:px-[64px] mt-[40px] md:mt-[50px] lg:mt-[60px]">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
