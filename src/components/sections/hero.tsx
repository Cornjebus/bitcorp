"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-navy)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.15),_transparent_50%),_radial-gradient(ellipse_at_bottom_left,_rgba(37,99,235,0.1),_transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/images/bitcorp-logo-full.png"
            alt="BitCorp — Business Accelerator"
            width={240}
            height={160}
            className="h-40 w-auto drop-shadow-lg"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight">
            Accelerating{" "}
            <span className="text-[var(--color-electric-light)]">YOUR</span>{" "}
            Business
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          From the moment we are engaged, BitCorp helps you identify your most
          critical sales drivers and injects our professional network to
          accelerate your business and reach your goals faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-[var(--color-electric)] hover:bg-[var(--color-electric-light)] text-white text-lg px-8 py-6"
          >
            <a href="#contact">Get Started</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[var(--color-electric)] text-[var(--color-electric-light)] hover:bg-[var(--color-electric)]/10 text-lg px-8 py-6"
          >
            <a href="#about">Learn More</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <a
            href="#about"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-500 text-slate-400 hover:text-white hover:border-white transition-colors animate-bounce"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
