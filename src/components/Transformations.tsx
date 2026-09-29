"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const transformations = [
  {
    before: "https://images.unsplash.com/photo-1627485937980-221c88ce04ea?q=80&w=1374&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470&auto=format&fit=crop",
    label: "[Name - 6 Months]"
  },
  {
    before: "https://images.unsplash.com/photo-1627485937980-221c88ce04ea?q=80&w=1374&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?q=80&w=1471&auto=format&fit=crop",
    label: "[Name - 4 Months]"
  }
];

export default function Transformations() {
  return (
    <section className="py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-bold tracking-wider uppercase mb-2"
          >
            Real Results
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white uppercase"
          >
            Transformations
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-video flex overflow-hidden rounded-sm border border-white/10">
                {/* Before Image */}
                <div className="w-1/2 relative grayscale brightness-75 border-r border-white/20">
                  <Image src={item.before} alt="Before" fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 text-white text-xs font-bold uppercase tracking-wider">Before</div>
                </div>
                {/* After Image */}
                <div className="w-1/2 relative">
                  <Image src={item.after} alt="After" fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-brand-red px-3 py-1 text-white text-xs font-bold uppercase tracking-wider">After</div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-400 font-light">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
