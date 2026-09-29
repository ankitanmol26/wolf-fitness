"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function Location() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-red font-bold tracking-wider uppercase mb-2">Find Us</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-8">
              Wolf's Fitness Zone 99
            </h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-3 rounded-sm text-brand-red">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-1">Location</h4>
                  <p className="text-gray-400 font-light leading-relaxed">
                    [GYM ADDRESS]<br />
                    Isnapur, Medak, Hyderabad
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-3 rounded-sm text-brand-red">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-1">Contact</h4>
                  <p className="text-gray-400 font-light">[PHONE NUMBER]</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-3 rounded-sm text-brand-red">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-1">Hours</h4>
                  <p className="text-gray-400 font-light">[OPENING HOURS]</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://maps.app.goo.gl/WnTWYhGnuXdcgWGR9?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-6 py-3 bg-brand-red hover:bg-brand-red-hover text-white font-bold uppercase tracking-wider rounded-sm transition-colors"
              >
                <MapPin className="mr-2" size={20} />
                Get Directions
              </Link>
              
              <a
                href="https://wa.me/919876543210?text=Hi,%20I%20am%20interested%20in%20Wolf's%20Fitness%20Zone%2099!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5A] text-white font-bold uppercase tracking-wider rounded-sm transition-colors"
              >
                <MessageCircle className="mr-2" size={20} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
          
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black border border-white/10 p-8 rounded-sm"
          >
            <h3 className="text-2xl font-heading font-bold text-white uppercase mb-6">
              Book a Free Trial / Enquire Now
            </h3>
            <ContactForm />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
