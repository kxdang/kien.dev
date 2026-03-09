"use client";

import { useEffect } from "react";
import { Command } from "cmdk";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Github,
  Linkedin,
  Mail,
  PenTool,
  Sun,
  Moon,
  User,
  Code2,
  Briefcase,
  FolderOpen,
} from "lucide-react";
import { useTheme } from "next-themes";

interface CommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const navigate = (id: string) => {
    onOpenChange(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/20 dark:bg-black/40 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-0 z-[100] pointer-events-none">
          <VisuallyHidden.Root>
            <Dialog.Title>Command Menu</Dialog.Title>
            <Dialog.Description>
              Navigate the portfolio, open links, or toggle theme
            </Dialog.Description>
          </VisuallyHidden.Root>

          <div className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg pointer-events-auto">
            <Command className="glass-strong rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10">
              <Command.Input
            placeholder="Type a command or search..."
            className="w-full px-5 py-4 text-base bg-transparent border-b border-slate-200/30 dark:border-slate-700/30 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-800 dark:text-slate-200"
          />
          <Command.List className="max-h-72 overflow-y-auto p-2">
            <Command.Empty className="px-4 py-8 text-center text-sm text-slate-400">
              No results found.
            </Command.Empty>

            <Command.Group
              heading="Navigation"
              className="px-2 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider"
            >
              <Command.Item
                onSelect={() => navigate("about")}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-slate-600 dark:text-slate-300 data-[selected=true]:bg-violet-500/10 data-[selected=true]:text-violet-600 dark:data-[selected=true]:text-violet-400 transition-colors"
              >
                <User className="h-4 w-4" />
                About
              </Command.Item>
              <Command.Item
                onSelect={() => navigate("skills")}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-slate-600 dark:text-slate-300 data-[selected=true]:bg-violet-500/10 data-[selected=true]:text-violet-600 dark:data-[selected=true]:text-violet-400 transition-colors"
              >
                <Code2 className="h-4 w-4" />
                Skills
              </Command.Item>
              <Command.Item
                onSelect={() => navigate("experience")}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-slate-600 dark:text-slate-300 data-[selected=true]:bg-violet-500/10 data-[selected=true]:text-violet-600 dark:data-[selected=true]:text-violet-400 transition-colors"
              >
                <Briefcase className="h-4 w-4" />
                Experience
              </Command.Item>
              <Command.Item
                onSelect={() => navigate("projects")}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-slate-600 dark:text-slate-300 data-[selected=true]:bg-violet-500/10 data-[selected=true]:text-violet-600 dark:data-[selected=true]:text-violet-400 transition-colors"
              >
                <FolderOpen className="h-4 w-4" />
                Projects
              </Command.Item>
              <Command.Item
                onSelect={() => navigate("contact")}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-slate-600 dark:text-slate-300 data-[selected=true]:bg-violet-500/10 data-[selected=true]:text-violet-600 dark:data-[selected=true]:text-violet-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Contact
              </Command.Item>
            </Command.Group>

            <Command.Separator className="h-px bg-slate-200/30 dark:bg-slate-700/30 my-1" />

            <Command.Group
              heading="Links"
              className="px-2 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider"
            >
              <Command.Item
                onSelect={() => {
                  onOpenChange(false);
                  window.open("https://github.com/kxdang", "_blank");
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-slate-600 dark:text-slate-300 data-[selected=true]:bg-violet-500/10 data-[selected=true]:text-violet-600 dark:data-[selected=true]:text-violet-400 transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  onOpenChange(false);
                  window.open(
                    "https://www.linkedin.com/in/kien-dang/",
                    "_blank"
                  );
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-slate-600 dark:text-slate-300 data-[selected=true]:bg-violet-500/10 data-[selected=true]:text-violet-600 dark:data-[selected=true]:text-violet-400 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  onOpenChange(false);
                  window.open("https://kiendang.me", "_blank");
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-slate-600 dark:text-slate-300 data-[selected=true]:bg-violet-500/10 data-[selected=true]:text-violet-600 dark:data-[selected=true]:text-violet-400 transition-colors"
              >
                <PenTool className="h-4 w-4" />
                Blog
              </Command.Item>
            </Command.Group>

            <Command.Separator className="h-px bg-slate-200/30 dark:bg-slate-700/30 my-1" />

            <Command.Group
              heading="Theme"
              className="px-2 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider"
            >
              <Command.Item
                onSelect={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  onOpenChange(false);
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-slate-600 dark:text-slate-300 data-[selected=true]:bg-violet-500/10 data-[selected=true]:text-violet-600 dark:data-[selected=true]:text-violet-400 transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
                Toggle {theme === "dark" ? "Light" : "Dark"} Mode
              </Command.Item>
            </Command.Group>
          </Command.List>

          {/* Footer hint */}
          <div className="px-4 py-2.5 border-t border-slate-200/20 dark:border-slate-700/20 flex items-center justify-between text-xs text-slate-400">
            <span>Navigate with arrow keys</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-200/30 dark:bg-slate-700/30 font-mono">
              esc
            </kbd>
          </div>
            </Command>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
