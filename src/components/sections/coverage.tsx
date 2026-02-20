"use client";

import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import { internationalTerritories } from "@/lib/data";

export function Coverage() {
  return (
    <section id="coverage" className="py-24 bg-[var(--color-navy)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            National & International Coverage
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            BitCorp has an extensive network of experienced sales & distribution
            executives across key markets
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-electric)] flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">United States</h3>
              </div>
              <p className="text-slate-300 text-lg">
                All of the United States and Inhabited Territories
              </p>

              <div className="mt-8 relative">
                <svg
                  viewBox="0 0 960 600"
                  className="w-full h-auto opacity-20"
                >
                  <path
                    d="M833 326l-1-2-2-1-3-1-2 0-3 2-3 2-1 2 0 2 1 3 2 2 3 1 3 0 3-1 2-2 1-3 0-2zm-19-7l-1-1-2-1-3 0-2 1-2 2-1 2 0 3 1 2 2 2 3 1 2 0 3-1 1-2 1-3 0-2-1-2zm-781 110l2-1 1-2 0-2-1-3-2-2-3-1-2 0-3 1-2 2-1 2 0 3 1 2 2 2 3 1 2 0z"
                    fill="currentColor"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-[var(--color-electric)] opacity-40">
                    50 STATES
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-electric)] flex items-center justify-center">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">International</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {internationalTerritories.map((territory, i) => (
                  <motion.div
                    key={territory}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-3 bg-white/5 rounded-lg p-4 border border-white/5 hover:border-[var(--color-electric)]/30 transition-colors"
                  >
                    <MapPin className="h-4 w-4 text-[var(--color-electric-light)] shrink-0" />
                    <span className="text-slate-200 font-medium">
                      {territory}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
