"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center rounded-sm"
          >
            <CheckCircle className="text-brand-red w-16 h-16 mb-4" />
            <h4 className="text-white text-xl font-bold uppercase mb-2">Message Sent</h4>
            <p className="text-gray-400 font-light px-4">
              We've received your enquiry and will contact you shortly.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            required
            className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-red transition-colors"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
          <input
            type="tel"
            id="phone"
            required
            className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-red transition-colors"
            placeholder="+91 XXX XXX XXXX"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="goal" className="block text-sm font-medium text-gray-400 mb-1">Fitness Goal</label>
            <select
              id="goal"
              className="w-full bg-brand-gray border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors appearance-none"
            >
              <option value="general">General Fitness</option>
              <option value="muscle">Muscle Building</option>
              <option value="weightloss">Weight Loss</option>
              <option value="strength">Strength Training</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-400 mb-1">Preferred Time</label>
            <select
              id="time"
              className="w-full bg-brand-gray border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors appearance-none"
            >
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message (Optional)</label>
          <textarea
            id="message"
            rows={3}
            className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-red transition-colors resize-none"
            placeholder="Any specific requirements?"
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-bold uppercase tracking-wider py-4 rounded-sm transition-colors mt-4 disabled:opacity-70 flex justify-center items-center"
        >
          {isSubmitting ? (
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            "Enquire Now"
          )}
        </button>
      </form>
    </div>
  );
}
