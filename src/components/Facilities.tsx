"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const facilities = [
  {
    title: "Strength Training",
    description: "Premium racks, benches, and free weights for serious lifters.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "Cardio Zone",
    description: "State-of-the-art treadmills, ellipticals, and bikes to build endurance.",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1374&auto=format&fit=crop",
  },
  {
    title: "Functional Training",
    description: "Kettlebells, battle ropes, and turf area for dynamic workouts.",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1469&auto=format&fit=crop",
  },
  {
    title: "Personal Training",
    description: "1-on-1 coaching to ensure proper form and maximum results.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-16 md:py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-bold tracking-wider uppercase mb-2"
          >
            Our Arsenal
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white uppercase"
          >
            World-Class Facilities
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[300px] overflow-hidden rounded-sm cursor-pointer"
            >
              <Image
                src={facility.image}
                alt={facility.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h4 className="text-2xl font-heading font-bold text-white uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {facility.title}
                </h4>
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500">
                  <p className="text-gray-300 font-light mt-2">
                    {facility.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
