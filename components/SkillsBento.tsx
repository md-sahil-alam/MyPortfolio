import React from "react";
import { FaJava } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiCplusplus,
  SiGit,
  SiDocker,
  SiFigma,
  SiVercel,
} from "react-icons/si";

const skills = {
  frontend: [
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "React", icon: SiReact },
    { name: "Redux", icon: SiRedux },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
  ],
  languages: [
    { name: "JavaScript", icon: SiJavascript },
    { name: "Python", icon: SiPython },
    { name: "Java", icon: FaJava },
    { name: "C", icon: SiCplusplus },
  ],
  primaryStack: [
    { name: "MongoDB", icon: SiMongodb },
    { name: "Express.js", icon: SiExpress },
    { name: "React.js", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Next.js", icon: SiNextdotjs },
  ],
};

const SkillsBento = () => {
  return (
    <section
      className="min-h-screen w-full bg-background text-zinc-900 dark:text-zinc-100 p-4 md:p-8 flex items-center justify-center"
      id="skills">
      <div className="max-w-[83rem] w-full grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
        {/* Header Block */}
        <div className="md:col-span-2 md:row-span-1 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-8 flex flex-col justify-center items-start gap-2 hover:border-emerald-500/50 transition-colors duration-300 group">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            My{" "}
            <span className="text-emerald-600 dark:text-emerald-500">
              Tech Stack
            </span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md">
            A curated list of the technologies I use to build SEO friendly
            robust and scalable applications.
          </p>
        </div>

        {/* Frontend - The Main Block (Large) */}
        <div className="md:col-span-1 md:row-span-2 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 flex flex-col gap-4 relative overflow-hidden group hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />

          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-8 bg-emerald-500 rounded-full" />
            <h3 className="text-xl font-semibold">Frontend</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.frontend.map((item, idx) => (
              <span
                key={idx}
                className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 border border-transparent hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-default">
                <item.icon className="text-emerald-500/80" />
                {item.name}
              </span>
            ))}
          </div>
        </div>

        {/* Backend - Wide Block */}
        <div className="md:col-span-2 md:row-span-1 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 flex flex-col justify-between group hover:border-emerald-500/30 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800 mx-4 group-hover:bg-emerald-500/30 transition-colors " />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {skills.backend.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 group/item hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 group-hover/item:text-emerald-500 transition-colors">
                  <item.icon size={18} />
                </div>
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* Languages - Small Block */}
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-lg font-semibold text-zinc-400 uppercase tracking-widest text-xs">
            Languages
          </h3>
          <div className="flex flex-col gap-2">
            {skills.languages.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 pb-2 last:border-0 last:pb-0 group/lang">
                <div className="flex items-center gap-2">
                  <item.icon className="text-zinc-400 group-hover/lang:text-emerald-500 transition-colors" />
                  <span className="font-medium">{item.name}</span>
                </div>
                <span className="text-emerald-500 text-xs opacity-0 group-hover/lang:opacity-100 transition-opacity">
                  ●
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PRIMARY STACK - BIG LOGOS (Replaces Tools) */}
        <div className="md:col-span-2 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 relative overflow-hidden group">
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <h3 className="text-xl font-semibold mb-6 relative z-10 flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-700 rounded-full animate-pulse " />
            Core Stack
          </h3>

          <div className="flex flex-wrap justify-between items-center gap-6 relative z-10">
            {skills.primaryStack.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-3 group/icon">
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700/50 group-hover/icon:scale-110 group-hover/icon:border-emerald-500/50 group-hover/icon:shadow-lg group-hover/icon:shadow-emerald-500/20 transition-all duration-300">
                  <item.icon className="w-10 h-10 md:w-12 md:h-12 text-emerald-600  transition-colors duration-300 " />
                </div>
                <span className="text-sm font-medium text-zinc-500 group-hover/icon:text-zinc-900 dark:group-hover/icon:text-zinc-100 transition-colors">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsBento;
