"use client";

import { useState } from "react";
// @ts-ignore - react-syntax-highlighter doesn't have TypeScript types
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore - react-syntax-highlighter doesn't have TypeScript types
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  code: string;
  language?: string;
};

export default function CodeBlock({
  code,
  language = "javascript",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copyToClipboard() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="relative my-6 overflow-hidden border border-zinc-800 dark:border-zinc-400">
      {/* Header */}
      <div className="flex items-center justify-between bg-zinc-800 text-xs text-zinc-300 px-4 py-2">
        <span>{language}</span>
        <button
          onClick={copyToClipboard}
          className="rounded px-2 py-1 hover:bg-zinc-700">
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>

      {/* Code with syntax highlighting */}
      <SyntaxHighlighter language={language} style={oneDark} className="m-0!">
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
