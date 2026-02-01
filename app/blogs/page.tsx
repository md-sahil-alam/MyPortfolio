import PillNav from "@/components/PillNav";
import logo from "@/public/next.svg";
import BlogCard from "@/components/BlogCard";

export default function About() {
  return (
    <main className="">
      <nav className=" py-6 flex justify-center ">
        <PillNav
          logo={logo}
          logoAlt="Company Logo"
          items={[{ label: "← Back to Home", href: "/" }]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </nav>

      <section className="min-h-screen w-full flex items-center justify-around gap-7 flex-wrap bg-accent">
        <BlogCard
          title="Why TypeScript matters (testing blog)"
          image="/next.svg"
          description="Understanding type safety and scalable frontend architecture."
          href="/blogs/test-blog"
          readtime="2 min"
        />
      </section>
    </main>
  );
}
