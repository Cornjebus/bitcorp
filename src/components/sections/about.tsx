"use client";

import { motion } from "framer-motion";
import { Target, Users, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Result-Driven",
    description:
      "We engage through a result-driven-compensation agreement. We work before we ever get paid.",
  },
  {
    icon: Users,
    title: "Senior Relationships",
    description:
      "We bring senior-level relationships with decision-makers at top-tier players across verticals.",
  },
  {
    icon: TrendingUp,
    title: "Aggressive Growth",
    description:
      "We develop optimal growth strategies, establish aggressive goals, and execute plans quickly.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-navy)]">
            What We Do
          </h2>
          <p className="mt-6 text-lg text-[var(--color-slate-text)] leading-relaxed">
            Simply put, BitCorp is a{" "}
            <strong className="text-[var(--color-navy)]">Business Accelerator</strong>.
            We look at every Bit of a client&apos;s Corp and identify where their
            sales, marketing, networking, or operating strategies are fragmented.
            From there, our team of Veteran Sales, Marketing, Networking, and
            Operational Executives engage to accelerate every Bit of your Corp
            sales.
          </p>
        </motion.div>

        <div className="mt-6 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[var(--color-slate-text)] leading-relaxed text-center"
          >
            We provide corporate development, strategic planning, advanced
            marketing, broad networking, and distribution expertise that results
            in increased revenue and greater shareholder value for our clients.
            We pull each Bit of your Corp together to drive sales by growing
            customers and increasing distribution, bringing new or stale products
            to market faster, and securing &ldquo;wish list&rdquo; strategic partnerships.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-electric)]/10 mb-4">
                <item.icon className="h-7 w-7 text-[var(--color-electric)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-navy)]">
                {item.title}
              </h3>
              <p className="mt-2 text-[var(--color-slate-text)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
