"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-red/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-brand-red translate-x-4 translate-y-4 rounded-sm" />
              <div className="relative h-full w-full overflow-hidden rounded-sm border border-white/10">
                <Image 
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop"
                  alt="Wolf's Fitness Zone 99 Training"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-brand-red font-bold tracking-wider uppercase mb-2">About Wolf's Fitness Zone 99</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase leading-tight mb-6">
              Forging Strength. Building Discipline.
            </h3>
            
            <div className="space-y-4 text-gray-400 text-lg font-light mb-8">
              <p>
                At Wolf's Fitness Zone 99, we believe that fitness is more than just lifting weights. It's about building an unbreakable mindset, extreme discipline, and consistent effort.
              </p>
              <p>
                Located in the heart of Isnapur, our facility is designed for those who are serious about their transformation. Whether your goal is to build muscle, lose weight, or improve overall functional strength, our expert trainers and premium equipment provide the perfect environment for your success.
              </p>
              <p>
                Join a community of dedicated individuals. We don't just train; we transform.
              </p>
            </div>
            
            <Link 
              href="#facilities"
              className="inline-flex items-center text-white font-bold uppercase tracking-wider hover:text-brand-red transition-colors group"
            >
              Discover Our Gym 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
