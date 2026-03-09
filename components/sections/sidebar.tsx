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

interface SidebarProps {
  isMounted: boolean;
  onCommandPalette: () => void;
}

export default function Sidebar({ isMounted, onCommandPalette }: SidebarProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="lg:w-1/3 p-4 lg:p-6 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-strong rounded-2xl w-full overflow-hidden"
      >
        {/* Top bar: cmd+k and theme toggle */}
        <div className="flex justify-end gap-2 p-4 pb-0">
          <Button
            variant="outline"
            size="icon"
            onClick={onCommandPalette}
            className="rounded-full glass-subtle border-0 h-8 w-8"
          >
            <Command className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full glass-subtle border-0 h-8 w-8"
          >
            {isMounted && theme === "dark" ? (
              <Sun className="h-3.5 w-3.5" />
            ) : (
              <Moon className="h-3.5 w-3.5" />
            )}
          </Button>
        </div>

        <div className="p-6 pt-4 flex flex-col items-center text-center">
          {/* Profile image with glow */}
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 blur-xl opacity-25 scale-110 animate-pulse-slow" />
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/30 dark:border-white/10 shadow-xl">
              <Image
                src="/kien.png"
                alt="Kien Dang"
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
                priority
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-3xl font-bold mb-1 tracking-tight flex items-center gap-2">
            <button
              onClick={() => {
                const audio = new Audio("/kien.mp3");
                audio.play();
              }}
              className="group cursor-pointer inline-flex items-center gap-1.5"
              aria-label="Play pronunciation of Kien"
            >
              <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-violet-700 dark:from-white dark:via-blue-300 dark:to-violet-400 bg-clip-text text-transparent">
                Kien Dang
              </span>
              <Volume2 className="h-4 w-4 text-amber-400 group-hover:text-amber-300 group-hover:scale-110 transition-all" />
            </button>
          </h1>

          {/* Role */}
          <h2 className="text-base text-slate-500 dark:text-slate-400 mb-3">
            Software Engineer
          </h2>

          {/* Location */}
          <div className="text-sm text-slate-400 dark:text-slate-500 mb-4">
            Toronto, Canada
          </div>

          {/* Tagline */}
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
            From biochemistry labs to code, catalyzed by coffee and curiosity
          </p>

          {/* Social links */}
          <div className="flex gap-2.5">
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
              {
                icon: Mail,
                href: "#contact",
                label: "Contact",
                isScroll: true,
              },
            ].map((link) => (
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
          </div>

          {/* Cmd+K hint */}
          <p className="mt-4 text-[11px] text-slate-300 dark:text-slate-600">
            <kbd className="px-1.5 py-0.5 rounded glass-subtle font-mono text-[10px]">
              Cmd+K
            </kbd>{" "}
            to navigate
          </p>
        </div>
      </motion.div>
    </div>
  );
}
