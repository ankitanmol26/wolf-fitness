"use client";

import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Trophy, Flame } from "lucide-react";

const programs = [
  {
    icon: Dumbbell,
    title: "Strength Building",
    description: "Focus on heavy, compound movements to build raw power and muscle mass.",
  },
  {
    icon: Flame,
    title: "Weight Loss",
    description: "High-intensity circuits designed to burn fat and improve cardiovascular health.",
  },
  {
    icon: HeartPulse,
    title: "Functional Training",
    description: "Improve everyday mobility and core strength with dynamic exercises.",
  },
  {
    icon: Trophy,
    title: "Personal Coaching",
    description: "Customized nutrition and training plans tailored to your specific goals.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-16 md:py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-bold tracking-wider uppercase mb-2"
          >
            Training Regimen
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white uppercase"
          >
            Choose Your Path
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-gray border border-white/5 p-8 rounded-sm hover:border-brand-red/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-brand-red/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-brand-red group-hover:text-white text-brand-red transition-colors">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-heading font-bold text-white uppercase mb-3">
                  {program.title}
                </h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
