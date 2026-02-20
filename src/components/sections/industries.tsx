"use client";

import { motion } from "framer-motion";
import { Film, Cpu, ShoppingCart, Smartphone } from "lucide-react";

const industries = [
  { name: "Media & Entertainment", icon: Film },
  { name: "FinTech / Technology", icon: Cpu },
  { name: "Retail / Distribution", icon: ShoppingCart },
  { name: "Mobile / Telecom / Software", icon: Smartphone },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-navy)]">
            Industry Focus
          </h2>
          <p className="mt-4 text-lg text-[var(--color-slate-text)] max-w-2xl mx-auto">
            Vertical expertise and senior-level relationships across key sectors
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all border border-border hover:border-[var(--color-electric)]/30"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-navy)] group-hover:bg-[var(--color-electric)] transition-colors mb-5">
                <industry.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-navy)]">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
