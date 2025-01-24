"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Typescript, JavaScript, React-Query, Styled Components and MongoDB
        </span>
        . I am also familiar with Node.js, React native, vercel, AWS and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        Engineer / Front-end Engineer / Full Stack Engineer
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I’m currently working on a personal startup project with my friends, where we’re using
        <span className="font-medium">React Native, Node.js, Typescript, Styled Components, AWS and vercel.</span> 
        to build a mobile app for a business idea.
      </p>
    </motion.section>
  );
}
