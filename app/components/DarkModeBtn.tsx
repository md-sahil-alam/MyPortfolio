"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeBtn = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const toggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <button
      onClick={toggle}
      aria-pressed={isDark}
      aria-label="Toggle color theme"
      className="relative inline-flex items-center w-15 h-9 md:h-9.5 rounded-full p-1 transition-colors duration-300 focus:outline-none md:ml-1.5 shadow-2xs ring-1  ring-neutral-500 ">
      {/* track */}
      <span
        className={`absolute inset-0 rounded-full transition-colors duration-300 ${
          isDark ? "bg-neutral-800" : "bg-neutral-200"
        }`}
        aria-hidden
      />

      {/* knob */}
      <span
        className={`relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white shadow transform transition-transform duration-300 ${
          isDark
            ? "translate-x-7 bg-neutral-900 text-black"
            : "translate-x-0 bg-white text-emerald-500"
        }`}>
        {/* sun */}
        <svg
          className={`w-4 h-4 transition-opacity duration-200 ${isDark ? "opacity-0" : "opacity-100"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden>
          <path d="M12 4.5a1 1 0 110-2 1 1 0 010 2zm0 17a1 1 0 110-2 1 1 0 010 2zM4.5 12a1 1 0 11-2 0 1 1 0 012 0zm17 0a1 1 0 11-2 0 1 1 0 012 0zM6.22 6.22a1 1 0 11-1.414-1.414 1 1 0 011.414 1.414zM19.192 19.192a1 1 0 11-1.414-1.414 1 1 0 011.414 1.414zM6.22 17.78a1 1 0 11-1.414 1.414 1 1 0 011.414-1.414zM19.192 4.808a1 1 0 11-1.414 1.414 1 1 0 011.414-1.414zM12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
        </svg>

        {/* moon */}
        <svg
          className={`w-4 h-4 transition-opacity duration-200 absolute ${isDark ? "opacity-100" : "opacity-0"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </span>
    </button>
  );
};

export default DarkModeBtn;
