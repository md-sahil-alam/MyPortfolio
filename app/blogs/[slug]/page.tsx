import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import type { Components } from "react-markdown";
import Image from "next/image";
import CodeBlock from "@/app/components/Codeblock";
import Link from "next/link";
import rehypeRaw from "rehype-raw";
import PillNav from "@/components/PillNav";
import logo from "@/public/next.svg";
/**
 * Next.js 16: params is async
 */
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

/**
 * Helper function
 * Fixes the [object Object] copy issue by
 * recursively extracting plain text from highlighted JSX nodes
 */
function extractText(node: any): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node?.props?.children) return extractText(node.props.children);
  return "";
}

export default async function BlogPage({ params }: Props) {
  // ✅ FIX: Next.js 16 async params
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content", "blogs", `${slug}.md`);

  // ✅ FIX: Proper 404 handling
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const content = fs.readFileSync(filePath, "utf8");

  /**
   * Markdown component overrides
   */
  const markdownComponents: Components = {
    /**
     * ✅ FIX: Type-safe image handling
     * react-markdown allows Blob | string, Next/Image only accepts string
     */
    img({ src, alt }) {
      if (typeof src !== "string") return null;

      return (
        <Image
          src={src}
          alt={alt ?? ""}
          width={800}
          height={400}
          className=""
        />
      );
    },

    code({ children, className }) {
      const language = className
        ?.split(" ")
        .find((cls) => cls.startsWith("language-"))
        ?.replace("language-", "");

      const rawCode = extractText(children).trimEnd();

      return <CodeBlock code={rawCode} language={language} />;
    },
  };

  return (
    <>
      <header className="sticky top-0 w-full  flex justify-around">
        <nav className="flex justify-center z-500">
          <PillNav
            logo={logo}
            logoAlt="Company Logo"
            items={[
              { label: "Home", href: "/" },
              { label: "Blogs", href: "/blogs" },
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
      </header>

      <main className="w-full flex justify-center flex-wrap bg-accent ">
        <article className="prose prose-neutral w-70% max-w-3xl py-16 px-4">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight, rehypeRaw]}
            components={markdownComponents}>
            {content}
          </ReactMarkdown>
        </article>
      </main>
    </>
  );
}
