"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { serviceListings } from "@/lib/data";
import { Briefcase, BarChart3, Megaphone, PiggyBank } from "lucide-react";

const icons = [Briefcase, BarChart3, Megaphone, PiggyBank];

export function ServiceDetails() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-navy)]">
            Service Details
          </h2>
          <p className="mt-4 text-lg text-[var(--color-slate-text)]">
            Comprehensive solutions tailored to accelerate your growth
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {serviceListings.map((service, i) => {
              const Icon = icons[i];
              return (
                <AccordionItem
                  key={service.title}
                  value={`item-${i}`}
                  className="border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-[var(--color-electric)] shrink-0" />
                      <span className="text-lg font-semibold text-[var(--color-navy)]">
                        {service.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <ul className="space-y-3 ml-8">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="text-[var(--color-slate-text)] relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:rounded-full before:bg-[var(--color-electric)]/30"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
