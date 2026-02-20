"use client";

import { motion } from "framer-motion";
import { KeyRound, Lightbulb, Rocket, CheckCircle2 } from "lucide-react";
import { accessItems, expertiseItems, executionItems } from "@/lib/data";

const pillars = [
  {
    title: "Access",
    icon: KeyRound,
    items: accessItems,
    color: "var(--color-electric)",
  },
  {
    title: "Expertise",
    icon: Lightbulb,
    items: expertiseItems,
    color: "var(--color-navy)",
  },
  {
    title: "Execution",
    icon: Rocket,
    items: executionItems,
    color: "var(--color-electric)",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-navy)]">
            How We Accelerate
          </h2>
          <p className="mt-4 text-lg text-[var(--color-slate-text)] max-w-2xl mx-auto">
            Three pillars that drive results for every client engagement
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-5"
                style={{ backgroundColor: `color-mix(in srgb, ${pillar.color} 12%, transparent)` }}
              >
                <pillar.icon
                  className="h-6 w-6"
                  style={{ color: pillar.color }}
                />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-6">
                {pillar.title}
              </h3>
              <ul className="space-y-3">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--color-electric)] mt-0.5 shrink-0" />
                    <span className="text-[var(--color-slate-text)]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
