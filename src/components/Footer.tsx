import Link from "next/link";
import { Camera, MapPin, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-gray pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading text-2xl font-bold tracking-tighter uppercase text-white">
                Wolf's <span className="text-brand-red">Fitness Zone 99</span>
              </span>
            </Link>
            <p className="text-gray-400 font-light text-sm mb-6">
              Build the strongest version of you. The ultimate fitness experience in Isnapur, Medak.
            </p>
            <div className="flex gap-4">
              <Link 
                href="https://www.instagram.com/wolfsfitnesszone99/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-brand-red text-white flex items-center justify-center rounded-sm transition-colors"
              >
                <Camera size={20} />
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Facilities', 'Programs', 'Membership', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-gray-400 hover:text-brand-red text-sm font-light transition-colors uppercase">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-red shrink-0 w-5 h-5" />
                <span className="text-gray-400 text-sm font-light leading-relaxed">
                  [GYM ADDRESS]<br />Isnapur, Medak, Hyderabad
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-red shrink-0 w-5 h-5" />
                <span className="text-gray-400 text-sm font-light">[PHONE NUMBER]</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="text-brand-red shrink-0 w-5 h-5" />
                <span className="text-gray-400 text-sm font-light">[WHATSAPP NUMBER]</span>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400 text-sm font-light">Mon - Sat</span>
                <span className="text-white text-sm font-bold">[OPENING HOURS]</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400 text-sm font-light">Sunday</span>
                <span className="text-brand-red text-sm font-bold">Closed</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-light">
            &copy; 2026 Wolf's Fitness Zone 99. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
