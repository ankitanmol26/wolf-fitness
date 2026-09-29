"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    price: "[PRICE]",
    period: "/month",
    features: ["Access to all equipment", "Locker room access", "1 Free PT Session", "Diet Consultation"],
    recommended: false,
  },
  {
    name: "Quarterly",
    price: "[PRICE]",
    period: "/3 months",
    features: ["Access to all equipment", "Locker room access", "3 Free PT Sessions", "Customized Diet Plan"],
    recommended: true,
  },
  {
    name: "Half Yearly",
    price: "[PRICE]",
    period: "/6 months",
    features: ["Access to all equipment", "Locker room access", "5 Free PT Sessions", "Customized Diet Plan", "Guest Pass (1/mo)"],
    recommended: false,
  },
  {
    name: "Yearly",
    price: "[PRICE]",
    period: "/year",
    features: ["Access to all equipment", "Locker room access", "10 Free PT Sessions", "Advanced Diet Plan", "Unlimited Guest Passes"],
    recommended: false,
  },
];

export default function Membership() {
  return (
    <section id="membership" className="py-16 md:py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-bold tracking-wider uppercase mb-2"
          >
            Invest in Yourself
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white uppercase"
          >
            Membership Plans
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-black border ${plan.recommended ? 'border-brand-red' : 'border-white/10'} p-8 rounded-sm flex flex-col`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h4 className="text-2xl font-heading font-bold text-white uppercase mb-2">
                {plan.name}
              </h4>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-white">₹{plan.price}</span>
                <span className="text-gray-500 font-light text-sm">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-red shrink-0" />
                    <span className="text-gray-300 font-light">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 font-bold uppercase tracking-wider rounded-sm transition-colors ${plan.recommended ? 'bg-brand-red hover:bg-brand-red-hover text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
