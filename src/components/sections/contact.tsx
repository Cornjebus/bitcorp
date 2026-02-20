"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-navy)]">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-[var(--color-slate-text)]">
            Ready to accelerate your business? Let&apos;s talk.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-[var(--color-navy)]">
                  Message Sent!
                </h3>
                <p className="mt-2 text-[var(--color-slate-text)]">
                  We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--color-navy)] mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--color-navy)] mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--color-navy)] mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="How can BitCorp help accelerate your business?"
                    className="bg-white resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[var(--color-electric)] hover:bg-[var(--color-electric-light)] text-white"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-[var(--color-navy)] mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-electric)]/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-[var(--color-electric)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--color-navy)]">Office</p>
                    <p className="text-[var(--color-slate-text)]">
                      6 S. Broad Street
                      <br />
                      Lititz, PA 17543
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-electric)]/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-[var(--color-electric)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--color-navy)]">Phone</p>
                    <a
                      href="tel:717-925-5611"
                      className="text-[var(--color-slate-text)] hover:text-[var(--color-electric)] transition-colors"
                    >
                      717-925-5611
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-border">
              <h4 className="font-semibold text-[var(--color-navy)] mb-3">
                Why BitCorp?
              </h4>
              <ul className="space-y-2 text-sm text-[var(--color-slate-text)]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-electric)] mt-0.5 shrink-0" />
                  Result-driven compensation — we perform before we get paid
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-electric)] mt-0.5 shrink-0" />
                  Senior-level relationships with top-tier decision-makers
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-electric)] mt-0.5 shrink-0" />
                  National and international coverage across 6+ territories
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-electric)] mt-0.5 shrink-0" />
                  Deep vertical expertise in Media, FinTech, Retail, and Telecom
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
