"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold uppercase tracking-tight text-white leading-tight mb-6 text-shadow-lg">
            Build the <span className="text-brand-red">Strongest</span> Version of You.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light">
            Train harder. Get stronger. Become relentless. The ultimate fitness experience in Isnapur.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-brand-red text-white font-bold uppercase tracking-wider overflow-hidden rounded-sm transition-transform hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
              <span className="relative flex items-center gap-2">
                Join Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
