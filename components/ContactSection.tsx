"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { useForm, ValidationError } from "@formspree/react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const [state, handleSubmit] = useForm("xbdynekj");

  const handleCopyEmail = () => {
    const email = "developer.mdsahil@gmail.com";
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-white dark:bg-zinc-950 flex items-center justify-center py-20 px-4 md:px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* LEFT COLUMN: Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center">
          <div className="mb-8">
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-2 block">
              Get in touch
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tighter">
              Let's work <br />
              <span className="text-emerald-500">together.</span>
            </h2>
          </div>

          <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-10 max-w-md leading-relaxed">
            I'm currently open to new opportunities. Whether you have a
            question, a project idea, or just want to say hi, I'll try my best
            to get back to you!
          </p>

          <div className="flex flex-col gap-6">
            {/* Copy Email Button */}
            <a href="mailto:developer.mdsahil@gmail.com">
              <div
                className="cursor-pointer group flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-all w-fit"
                onClick={handleCopyEmail}>
                <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  {copied ? <FaCheck size={18} /> : <FaEnvelope size={18} />}
                </div>

                <div className="flex flex-col items-start">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    {copied ? "Copied!" : "Mail me at"}
                  </span>
                  <span className="text-zinc-900 dark:text-zinc-200 font-medium">
                    developer.mdsahil@gmail.com
                  </span>
                  <span className="text-emerald-700 tracking-relax animate-pulse ">
                    click me
                  </span>
                </div>
              </div>
            </a>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/MD-Sahil-Alam",
                  label: "GitHub",
                },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/md-sahil-alam-software-developer",
                  label: "LinkedIn",
                },
                {
                  icon: FaTwitter,
                  href: "https://x.com/sahil_codex",
                  label: "Twitter",
                },
              ].map((Social, idx) => (
                <a
                  key={idx}
                  href={Social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={Social.label}
                  className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: The Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-50 dark:bg-zinc-900/50 p-8 md:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 h-fit">
          {/* 3. Success State Handler */}
          {state.succeeded ? (
            <div className="flex flex-col items-center justify-center text-center h-full py-12">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4 text-emerald-500">
                <FaCheck size={30} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                Message Sent!
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Thanks for reaching out. I'll get back to you shortly.
              </p>
            </div>
          ) : (
            /* 4. The Form */
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-zinc-500 dark:text-zinc-400 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-zinc-500 dark:text-zinc-400 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-zinc-500 dark:text-zinc-400 ml-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-zinc-900 dark:text-zinc-100">
                  <option value="general">General Inquiry</option>
                  <option value="project">Project Proposal</option>
                  <option value="freelance">Freelance Work</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-zinc-500 dark:text-zinc-400 ml-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Type your message..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 resize-none"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="group relative w-full flex items-center justify-center gap-2 px-6 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed">
                <span className="relative z-10">
                  {state.submitting ? "Sending..." : "Send Message"}
                </span>
                {!state.submitting && (
                  <FaPaperPlane className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                )}

                {/* Emerald Hover Gradient */}
                <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
