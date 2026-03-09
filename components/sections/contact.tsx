"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="mb-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-heading"
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl p-8"
      >
        <p className="text-slate-500 dark:text-slate-400 mb-6">
          If you&apos;d like to have a coffee chat — feel free to reach out
          using the form below!
        </p>
        <form
          action="https://formspree.io/f/mzzvvzbl"
          method="POST"
          className="space-y-4 max-w-lg"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1.5 text-slate-600 dark:text-slate-400"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2.5 rounded-xl glass-input text-black dark:text-white focus:ring-2 focus:ring-violet-500/30 focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1.5 text-slate-600 dark:text-slate-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2.5 rounded-xl glass-input text-black dark:text-white focus:ring-2 focus:ring-violet-500/30 focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1.5 text-slate-600 dark:text-slate-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-2.5 rounded-xl glass-input text-black dark:text-white focus:ring-2 focus:ring-violet-500/30 focus:outline-none transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
              placeholder="How can I help you?"
            />
          </div>
          {/* Formspree honeypot */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white shadow-lg shadow-violet-500/20 transition-all duration-300 rounded-xl px-6"
            >
              <Mail className="h-4 w-4" />
              <span>Send Message</span>
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
}
