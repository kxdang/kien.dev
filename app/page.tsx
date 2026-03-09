"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import Sidebar from "@/components/sections/sidebar";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import CommandMenu from "@/components/command-menu";

export default function Portfolio() {
  const [isMounted, setIsMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Fixed background blobs - visible through all glass elements */}
      <div className="page-bg-blobs">
        <div className="page-blob page-blob-1" />
        <div className="page-blob page-blob-2" />
        <div className="page-blob page-blob-3" />
        <div className="page-blob page-blob-4" />
        <div className="page-blob page-blob-5" />
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-transparent z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Command Menu */}
      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />

      {/* Two-column layout */}
      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col lg:flex-row min-h-screen">
        {/* Sticky sidebar */}
        <Sidebar
          isMounted={isMounted}
          onCommandPalette={() => setCommandOpen(true)}
        />

        {/* Scrollable content */}
        <div className="lg:w-2/3 p-4 lg:p-8">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />

          <footer className="text-center text-sm text-slate-400 pt-6 border-t border-slate-200/20 dark:border-slate-700/20">
            &copy; {new Date().getFullYear()}{" "}
            <Link
              href="https://kiendang.ca"
              className="hover:text-violet-500 transition-colors"
            >
              Kien Dang.
            </Link>{" "}
            All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}
