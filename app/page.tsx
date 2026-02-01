import Image from "next/image";
import FallingText from "@/components/FallingText";
import PillNav from "@/components/PillNav";
import logo from "@/public/next.svg";
import ShinyText from "@/components/ShinyText";
import SkillsBento from "@/components/SkillsBento";
import ScrollFloat from "@/components/ScrollFloat";
import ProjectSection from "../components/ProjectSection";
import { Contact } from "lucide-react";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main>
      {/* herosection */}
      <nav className=" sticky top-1 z-50">
        <nav className="flex justify-center ">
          <PillNav
            logo={logo}
            logoAlt="Company Logo"
            items={[
              { label: "Home", href: "/" },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#project" },
              { label: "Contact", href: "#contact" },
              { label: "blogs", href: "/blogs" },
              { label: "About", href: "/about" },
              { label: "↑", href: "#home" },
            ]}
            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
          />
        </nav>
      </nav>
      <section
        className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen w-full overflow-x-hidden bg-background"
        id="home">
        {/* left */}
        <div className="left h-full flex justify-center items-center rounded-4xl relative">
          {/* image container */}
          <div className="imgdiv h-[90%] w-[80%] md:h-[80%] md:w-[75%] rounded-4xl overflow-hidden relative bg-zinc-600">
            {/* first image (base) */}
            <img
              src="/pic.jpg"
              alt="my img"
              className="object-cover w-full h-full"
            />

            {/* text layer */}
            <div className="absolute inset-0 flex justify-center items-start pt-0 z-20 text-emerald-50">
              <FallingText
                text="humorous Creative ProblemSolver TeamPlayer FastLearner"
                highlightWords={["TeamPlayer", "ProblemSolver", "FastLearner"]}
                highlightClass="bg-emerald-400/20 px-2 py-1 rounded-md backdrop-blur text-white md:text-4xl"
                fontSize="1.8rem"
              />
            </div>
          </div>
        </div>

        {/*  bottom*/}
        <div className="right h-full flex justify-center items-center md:items-center flex-wrap ml-6 md:ml-4">
          <div className="content p-4 pr-9 md:pr-16">
            <h1 className="text-5xl font-semibold tracking-tighter md:text-7xl">
              Md Sahil Alam
            </h1>

            <p className=" pt-5  tracking-tight text-gray-600  md:text-xl md:pt-8 leading-tight md:leading-relaxed dark:text-gray-300 text-pretty ">
              <strong className="text-emerald-500">Bangalore</strong> based
              Software Engineer building
              <strong> real world </strong>SEO friendly
              <strong className="text-emerald-500">
                {" "}
                full-stack products{" "}
              </strong>{" "}
              with a
              <strong className="text-emerald-500">
                {" "}
                strong engineering mindset.
              </strong>
            </p>

            <p className=" pt-3 md:text-xl md:pt-5 text-pretty text-neutral-500 dark:text-neutral-300 tracking-tight [word-spacing:10px]">
              <strong>MongoDB, Express.js, React.js, Next.js, Node.js</strong>
            </p>

            <div className="flex gap-5 mt-9">
              <div
                className="py-2 px-3 rounded-2xl ring-1 transition-all will-change-transform

  bg-secondary text-black  ring-neutral-400 hover:ring-neutral-500
  dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-400 dark:hover:ring-neutral-200 shadow-md shadow-emerald-600/40 dark:shadow-emerald-300/60 hover:scale-105  duration-400 ">
                <a href="#contact" title="Contact">
                  <ShinyText
                    text="Contact"
                    speed={2}
                    delay={0}
                    color="CurrentColor"
                    shineColor="white"
                    spread={120}
                    direction="left"
                    yoyo={true}
                    pauseOnHover={false}
                    disabled={false}
                  />
                </a>
              </div>

              <div
                className="py-2 px-3 rounded-2xl ring-1 transition-all will-change-transform

  bg-secondary text-black  ring-neutral-400 hover:ring-neutral-500
  dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-400 dark:hover:ring-neutral-200 shadow-md shadow-emerald-600/40 dark:shadow-emerald-300/60 hover:scale-105  duration-400 ">
                <a
                  href="/demoresume.pdf"
                  download="MdSahilAlam_Resume.pdf"
                  title="Download resume">
                  {" "}
                  <ShinyText
                    text="Resume"
                    speed={2}
                    delay={0}
                    color="CurrentColor"
                    shineColor="white"
                    spread={120}
                    direction="right"
                    yoyo={true}
                    pauseOnHover={false}
                    disabled={false}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* skills */}
      <section className="flex justify-end items-center flex-col">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}>
          Skills
        </ScrollFloat>
        <SkillsBento />
      </section>
      {/* projects */}
      <ProjectSection />
      {/* contact */}
      <div className="flex justify-center">
        {" "}
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}>
          contact
        </ScrollFloat>
      </div>

      <ContactSection />
    </main>
  );
}
