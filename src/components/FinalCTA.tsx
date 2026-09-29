"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden border-y border-white/5">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight text-white leading-tight mb-6 text-shadow-lg">
            Your Excuses <span className="text-brand-red">End Here.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light">
            Your next level starts with one decision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-brand-red text-white font-bold uppercase tracking-wider overflow-hidden rounded-sm transition-transform hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
              <span className="relative flex items-center gap-2">
                Join Wolf's Fitness Zone 99 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link 
              href="https://maps.app.goo.gl/WnTWYhGnuXdcgWGR9?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold uppercase tracking-wider border border-white/20 rounded-sm transition-all"
            >
              <MapPin className="w-5 h-5 mr-2" /> Get Directions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
