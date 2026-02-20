"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { teamMembers } from "@/lib/data";

export function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-navy)]">
            Meet the BitCorp Team
          </h2>
          <p className="mt-4 text-lg text-[var(--color-slate-text)] max-w-2xl mx-auto">
            Veteran executives with deep industry relationships and a track
            record of accelerating growth
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl border border-border p-6 text-center hover:shadow-lg transition-all hover:border-[var(--color-electric)]/20"
            >
              <div className="relative mx-auto w-32 h-32 mb-5 rounded-full overflow-hidden ring-4 ring-[var(--color-surface)] group-hover:ring-[var(--color-electric)]/20 transition-all">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <h3 className="text-lg font-bold text-[var(--color-navy)]">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-[var(--color-electric)] mt-1">
                {member.title}
              </p>
              <p className="text-sm text-[var(--color-slate-text)] mt-1">
                {member.subtitle}
              </p>
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-1.5 mt-3 text-sm text-[var(--color-slate-text)] hover:text-[var(--color-electric)] transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {member.email}
                </a>
              )}
              {"address" in member && member.address && (
                <p className="flex items-start gap-1.5 justify-center mt-2 text-xs text-[var(--color-slate-text)]">
                  <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                  {member.address}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
