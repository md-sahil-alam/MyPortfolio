"use client";

import React, { useRef } from "react";
import ScrollFloat from "@/components/ScrollFloat";
import { motion, useTransform, useScroll, MotionValue } from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiFigma,
} from "react-icons/si";
import { IconType } from "react-icons";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: IconType[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Civic Eye",
    category: "Full Stack App",
    description:
      "A crowdsourced platform for reporting civic issues like potholes and garbage. Features geolocation tracking and admin dashboard.",
    tech: [SiReact, SiNodedotjs, SiMongodb, SiTailwindcss],
    github: "https://github.com",
    live: "https://demo.com",
  },
  {
    id: 2,
    title: "Let's Date",
    category: "E-Commerce",
    description:
      "A premium D2C website for a healthy chocolate brand. Integrated with payment gateways and a custom interactive 3D product viewer.",
    tech: [SiNextdotjs, SiTypescript, SiFigma, SiTailwindcss],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "DevPortfolio V2",
    category: "Portfolio",
    description:
      "A high-performance personal portfolio featuring bento grids, sticky scroll animations, and dark mode.",
    tech: [SiReact, SiTailwindcss],
    github: "#",
    live: "#",
  },
];

// --- Sub-Component: The Card ---
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative h-100 w-full md:h-[500px] md:w-90% overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl flex flex-col md:flex-row flex-shrink-0 transition-all hover:border-emerald-500/50">
      {/* Top: Image Area */}
      <div className="relative h-full w-full md:w-1/2 overflow-hidden bg-neutral-800">
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60 z-10" />

        {/* Placeholder for Image - Replace with <Image /> when ready */}
        <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          <span className="text-neutral-500 text-sm md:text-base">
            {project.title} Preview
          </span>
        </div>

        <span className="absolute top-4 left-4 z-20 px-3 py-1 text-xs font-bold tracking-widest uppercase bg-emerald-500 text-black rounded-full">
          {project.category}
        </span>
      </div>

      {/* Bottom: Content */}
      <div className="h-[45%] md:h-full p-6 flex flex-col justify-between bg-white dark:bg-neutral-900 relative z-20">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-emerald-500 transition-colors md:mt-15">
            {project.title}
          </h3>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed line-clamp-3 ">
            {project.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-3">
            {project.tech.map((Icon, idx) => (
              <Icon
                key={idx}
                className="text-lg md:text-xl text-neutral-400 dark:text-neutral-500 hover:text-emerald-500 transition-colors"
              />
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.github}
              className="p-2 rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
              <FaGithub size={18} />
            </a>
            <a
              href={project.live}
              className="p-2 rounded-full bg-emerald-500 text-black hover:bg-emerald-400 hover:scale-110 transition-all shadow-lg shadow-emerald-500/20">
              <FaExternalLinkAlt size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

//  Main Component
const ProjectSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform for Desktop Only
  const x = useTransform(scrollYProgress, [0, 1], ["30%", "-185%"]);

  return (
    <section className="bg-white dark:bg-zinc-950 relative" id="project">
      {/* MOBILE VIEW (Vertical List - No Sticky ) */}

      <div className="block lg:hidden px-4 py-10">
        <div className="flex justify-center ">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}>
            projects
          </ScrollFloat>
        </div>
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW (Sticky Horizontal Scroll) */}
      <div ref={targetRef} className="hidden lg:block relative h-[300vh]">
        <div className="flex justify-center ">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}>
            projects
          </ScrollFloat>
        </div>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          {/* Moving Track */}
          <motion.div style={{ x }} className="flex gap-12 px-20">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
