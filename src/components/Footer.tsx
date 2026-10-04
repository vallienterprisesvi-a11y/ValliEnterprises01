"use client";

import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" }
];

export default function Footer() {
  return (
    <footer className="relative mt-20 pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 skewed-bg -z-10" />
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="space-y-8 col-span-1 lg:col-span-1">
          <Link href="/" className="flex items-center group">
            <div className="relative h-20 w-64 md:w-80 group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_20px_rgba(30,144,255,0.1)]">
              <Image 
                src="/header-logo.png" 
                alt="Valli Enterprises" 
                fill 
                className="object-contain object-left" 
              />
            </div>
          </Link>
          <p className="text-foreground/60 leading-relaxed font-bold italic text-sm">
            "Serving Chennai's homes and industries with pure technical honesty Since 2021."
          </p>
          <div className="flex gap-4">
            <a href="#" className="h-12 w-12 rounded-2xl bg-white/50 text-foreground/50 hover:bg-primary hover:text-white transition-all flex items-center justify-center shadow-lg"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="h-12 w-12 rounded-2xl bg-white/50 text-foreground/50 hover:bg-primary hover:text-white transition-all flex items-center justify-center shadow-lg"><Instagram className="h-5 w-5" /></a>
            <a href="https://wa.me/918428665293" className="h-12 w-12 rounded-2xl bg-white/50 text-foreground/50 hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center shadow-lg"><MessageCircle className="h-5 w-5" /></a>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-xl font-black text-foreground uppercase tracking-widest border-b border-primary/10 pb-4">Browse</h3>
          <ul className="grid grid-cols-1 gap-4 text-foreground/60 font-bold">
            {navLinks.map(link => (
               <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary hover:translate-x-2 transition-all block">{link.label}</Link>
               </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <h3 className="text-xl font-black text-foreground uppercase tracking-widest border-b border-primary/10 pb-4">Speak with us</h3>
          <ul className="space-y-6">
            <li>
               <a href="tel:8428665293" className="flex items-start gap-4 text-foreground group">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0"><Phone className="h-5 w-5" /></div>
                  <div>
                    <p className="text-[10px] font-black italic uppercase tracking-widest opacity-40">Call Hotline</p>
                    <p className="text-xl font-black">84286 65293</p>
                  </div>
               </a>
            </li>
            <li className="flex items-start gap-4 text-foreground group">
               <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all shrink-0"><Mail className="h-5 w-5" /></div>
               <div>
                 <p className="text-[10px] font-black italic uppercase tracking-widest opacity-40">Email Enquiries</p>
                 <p className="text-sm font-black break-all">vallienterprises.vi@gmail.com</p>
               </div>
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <h3 className="text-xl font-black text-foreground uppercase tracking-widest border-b border-primary/10 pb-4">Visit Unit</h3>
          <div className="flex items-start gap-4 text-foreground group">
             <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all shrink-0"><MapPin className="h-5 w-5" /></div>
             <div>
               <p className="text-[10px] font-black italic uppercase tracking-widest opacity-40">Location</p>
               <p className="text-sm font-bold leading-relaxed">Shop: 9C, VGN Stafford road,<br />Newry Sanctum, Thirumalaivasan nagar,<br />Thirumullaivoyal, Chennai - 600062.</p>
             </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-32 pt-12 border-t border-primary/5 text-center">
         <p className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.5em]">© 2024 Valli Enterprises Chennai | Technical Integrity in Every Drop</p>
      </div>
    </footer>
  );
}
