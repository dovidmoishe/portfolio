"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getAboutViewModel } from "@/features/about/store";
import { AboutPhoto } from "@/features/about/types";

function PolaroidPhoto({ photo, index }: { photo: AboutPhoto; index: number }) {
  return (
    <motion.figure
      initial={{ y: 28, opacity: 0, rotate: index === 0 ? -13 : 11 }}
      whileInView={{ y: 0, opacity: 1, rotate: index === 0 ? -11 : 9 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -8, rotate: index === 0 ? -8 : 6 }}
      className={`relative flex w-[150px] shrink-0 flex-col rounded-[5px] bg-white p-[8px] pb-[22px] shadow-[0_18px_38px_rgba(15,23,42,0.16)] dark:shadow-[0_18px_42px_rgba(0,0,0,0.42)] sm:w-[180px] md:w-[205px] ${photo.rotationClassName} ${photo.zIndexClassName}`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-muted">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, 205px"
          className="object-cover"
        />
      </div>
      <figcaption className="absolute bottom-[7px] left-0 right-0 text-center text-[10px] font-semibold leading-none text-neutral-950">
        {photo.caption}
      </figcaption>
    </motion.figure>
  );
}

function About() {
  const aboutData = getAboutViewModel();

  return (
    <section
      id="about"
      className="mx-auto mt-[70px] flex w-full max-w-5xl flex-col px-6 md:mt-[90px] md:px-10 lg:mt-[110px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-[720px]"
      >
        <h2 className="text-[28px] font-bold leading-[34px] tracking-normal text-foreground md:text-[34px] md:leading-[40px]">
          {aboutData.heading}
        </h2>

        <div className="mt-6 flex flex-col gap-5 text-[15px] font-normal leading-[23px] text-foreground/68 md:text-[16px] md:leading-[25px]">
          {aboutData.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </motion.div>

      <div className="relative mx-auto mt-14 flex min-h-[250px] w-full max-w-[430px] items-center justify-center md:mt-16 md:min-h-[310px]">
        <div className="absolute inset-x-[12%] top-4 h-36 rotate-[-8deg] rounded-full bg-foreground/[0.05] blur-2xl" />
        <div className="relative flex items-center justify-center">
          {aboutData.photos.map((photo, index) => (
            <div key={photo.src} className={index === 1 ? "-ml-12 sm:-ml-16 md:-ml-20" : ""}>
              <PolaroidPhoto photo={photo} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
