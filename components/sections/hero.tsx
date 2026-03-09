"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Volume2,
  PenTool,
  Command,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { getYearsOfExperience } from "@/data/portfolio";

interface HeroProps {
  isMounted: boolean;
  onCommandPalette: () => void;
}

export default function Hero({ isMounted, onCommandPalette }: HeroProps) {
  const { theme, setTheme } = useTheme();

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Theme toggle - top right */}
        <div className="absolute top-0 right-0 flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={onCommandPalette}
            className="rounded-full glass-subtle border-0"
          >
            <Command className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full glass-subtle border-0"
          >
            {isMounted && theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Profile image with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 blur-2xl opacity-30 scale-110 animate-pulse-slow" />
          <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
            <Image
              src="/kien.png"
              alt="Kien Dang"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl md:text-6xl font-bold mb-3 tracking-tight"
        >
          <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-violet-700 dark:from-white dark:via-blue-300 dark:to-violet-400 bg-clip-text text-transparent">
            Kien Dang
          </span>
        </motion.h1>

        {/* Subtitle with pronunciation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="text-lg text-slate-500 dark:text-slate-400">
            Software Engineer
          </span>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <button
            onClick={() => {
              const audio = new Audio("/kien.mp3");
              audio.play();
            }}
            className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group cursor-pointer"
            aria-label="Play pronunciation of Kien"
          >
            <span className="text-sm font-medium">\key-in\</span>
            <Volume2 className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
          </button>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Toronto, Canada
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-slate-500 dark:text-slate-400 text-lg mb-8 max-w-lg"
        >
          {getYearsOfExperience()} years of building fast, accessible web
          experiences. From biochemistry labs to code, catalyzed by coffee and
          curiosity.
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex gap-3"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/kxdang",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/kien-dang/",
              label: "LinkedIn",
            },
            { icon: PenTool, href: "https://kiendang.me", label: "Blog" },
            { icon: Mail, href: "#contact", label: "Contact", isScroll: true },
          ].map((link, i) => (
            <motion.div
              key={link.label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.isScroll ? (
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full glass-subtle border-0 hover:shadow-lg hover:shadow-violet-500/10 transition-shadow"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full glass-subtle border-0 hover:shadow-lg hover:shadow-violet-500/10 transition-shadow"
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    aria-label={link.label}
                  >
                    <link.icon className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-slate-300 dark:border-slate-600 flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
