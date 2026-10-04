"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Heart, Zap, Award, Users, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const beliefs = [
  "Clean water is essential for good health",
  "Quality products give long life and better performance",
  "Genuine spare parts prevent repeated problems",
  "Proper service is as important as the product itself"
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutPage() {
  return (
    <div className="space-y-32 mb-40">
      {/* Hero */}
      <section className="text-center space-y-4 max-w-4xl mx-auto pt-16 px-6">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-primary font-black uppercase tracking-[0.4em] text-xs">
           The Valli Story
        </motion.div>
        <motion.h1 initial="hidden" animate="visible" variants={fadeIn} className="text-5xl md:text-8xl font-black tracking-tight text-foreground leading-[1]">
          Engineering <span className="text-gradient">Pure Smiles.</span>
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeIn} className="text-xl text-foreground/60 max-w-2xl mx-auto font-medium leading-relaxed italic">
          "Ensuring Chennai gets clean, safe, and healthy water through technical honesty and genuine service."
        </motion.p>
      </section>

      {/* Narrative Section */}
      <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full"
         >
            <div className="absolute inset-0 liquid-glass rounded-[4rem] overflow-hidden shadow-2xl">
               <Image 
                  src="/images/technician.png" 
                  alt="Scientific Water Study" 
                  fill 
                  className="object-cover" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 p-10 glass-card rounded-[3rem] space-y-4 max-w-xs rotate-2">
               <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center text-white"><ShieldCheck className="h-6 w-6" /></div>
               <p className="text-2xl font-black text-foreground">Water Study First</p>
               <p className="text-sm font-medium text-foreground/50 italic">"We analyze before we suggest."</p>
            </div>
         </motion.div>

         <div className="space-y-10">
            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-tight">Since 2021, <span className="text-gradient">Integrity</span> is our Filter.</h2>
            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed font-medium">
               <p>
                  Valli Enterprises was founded with a single mission: to provide the people of Chennai with water solutions they can actually trust. In an industry often clouded by vague promises, we stand for technical clarity.
               </p>
               <p>
                  We understand that each locality in Chennai—from the borewells of Porur to the corporation water of Anna Nagar—has unique chemical signatures. We don't believe in one-size-fits-all.
               </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 border-t border-primary/10">
               {beliefs.map((belief, idx) => (
                 <div key={idx} className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><CheckCircle2 className="h-5 w-5" /></div>
                    <span className="text-foreground font-black text-sm uppercase tracking-tight">{belief}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: "Installations", val: "5000+", icon: Award },
            { label: "Community ATMs", val: "12", icon: Users },
            { label: "AMC Clients", val: "1800+", icon: Zap },
            { label: "Years Strong", val: "12+", icon: Heart }
          ].map((stat, i) => (
             <motion.div 
               key={i} 
               viewport={{ once: true }}
               initial="hidden" 
               whileInView="visible" 
               variants={fadeIn}
               transition={{ delay: i * 0.1 }}
               className="glass-card p-10 rounded-[3rem] text-center space-y-4"
             >
                <div className="h-16 w-16 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><stat.icon className="h-8 w-8" /></div>
                <div className="text-4xl font-black text-foreground">{stat.val}</div>
                <div className="text-xs font-black text-foreground/40 uppercase tracking-[0.2em]">{stat.label}</div>
             </motion.div>
          ))}
      </section>

      {/* Team CTA */}
      <section className="container mx-auto px-6">
         <div className="liquid-glass rounded-[4rem] p-12 lg:p-24 text-center space-y-8 relative overflow-hidden">
            <h2 className="text-4xl lg:text-7xl font-black text-foreground tracking-tighter leading-tight">Need a <span className="text-gradient">Professional Opinion?</span></h2>
            <p className="text-2xl font-bold text-foreground/60 max-w-2xl mx-auto italic">"Our technicians are trained to solve, not just sell. Hire an expert for your RO service today."</p>
            <div className="flex justify-center flex-wrap gap-8 pt-10">
               <Link href="/contact" className="px-12 py-6 rounded-3xl bg-primary text-white font-black text-xl shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all shimmer-button">
                  Consult With Us
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
