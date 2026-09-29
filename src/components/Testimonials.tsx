"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Real member testimonial will appear here.",
    author: "Member Name",
    role: "Member"
  },
  {
    text: "Real member testimonial will appear here.",
    author: "Member Name",
    role: "Member"
  },
  {
    text: "Real member testimonial will appear here.",
    author: "Member Name",
    role: "Member"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-black relative">
      {/* Accent Background */}
      <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-brand-red/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-bold tracking-wider uppercase mb-2"
          >
            Word on the Street
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white uppercase"
          >
            Testimonials
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-gray border border-white/5 p-8 rounded-sm relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
              <p className="text-gray-300 font-light italic mb-8 relative z-10">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-brand-red">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase">{item.author}</h4>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
