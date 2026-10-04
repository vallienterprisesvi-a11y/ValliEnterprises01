"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Droplets, Building2, Search, Zap, Heart, Phone, ArrowRight, Zap as ZapIcon, Droplets as WaterIcon, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getDynamicIntent } from "@/lib/seo";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const productCategories = [
  {
    id: "domestic-ro",
    title: "Domestic RO",
    desc: "We provide sales and service for all brands of home water purifiers.",
    bullets: [
      "RO water purifiers for drinking and cooking",
      "Suitable for borewell, corporation, and mixed water",
      "Regular service, filter change, and repairs",
      "Use of genuine spare parts only"
    ],
    idealFor: "Individual houses, flats, and apartments",
    icon: Droplets,
    image: "/images/hero_plant.png"
  },
  {
    id: "commercial-ro",
    title: "Commercial RO",
    desc: "High-capacity reverse osmosis systems designed for large water requirements.",
    bullets: [
      "Custom-built RO plants for factories and commercial units",
      "Designed based on water quality and daily usage",
      "Continuous operation with stable performance",
      "Proper installation and testing"
    ],
    idealFor: "Factories, schools, hospitals, offices",
    icon: Building2,
    image: "/images/hero_plant.png"
  },
  {
    id: "iron-removal",
    title: "Iron Removal",
    desc: "Specialized systems to remove excess iron from water.",
    bullets: [
      "Eliminates iron smell, color, and stains",
      "Prevents damage to pipes and fittings",
      "Improves water taste and clarity",
      "Helps protect RO membranes and equipment"
    ],
    idealFor: "Borewell water users",
    icon: Search,
    image: "/images/hero_plant.png"
  },
  {
    id: "water-softener",
    title: "Water Softener",
    desc: "Advanced ion-exchange softeners to reduce water hardness.",
    bullets: [
      "Removes calcium and magnesium from hard water",
      "Prevents scaling in pipes, heaters, and boilers",
      "Improves soap efficiency and cleaning results",
      "Increases life of appliances"
    ],
    idealFor: "Homes, apartments, hotels, industries",
    icon: ZapIcon,
    image: "/images/hero_plant.png"
  },
  {
    id: "stp-etp",
    title: "STP & ETP Plant",
    desc: "Complete Sewage and Effluent Treatment Plants for wastewater management.",
    bullets: [
      "Treats sewage and industrial wastewater",
      "Helps reuse treated water for gardening or flushing",
      "Designed to meet environmental standards",
      "Supports pollution control compliance"
    ],
    idealFor: "Apartments, industries, institutions",
    icon: WaterIcon,
    image: "/images/hero_plant.png"
  }
];

function ProductContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  
  useEffect(() => {
    if (searchParams) {
      setQuery(searchParams.get('q') || searchParams.get('intent') || "");
    }
  }, [searchParams]);

  const dynamicIntent = getDynamicIntent(query);

  return (
    <div className="space-y-40 pb-40">
      {/* Header */}
      <section className="text-center space-y-4 max-w-4xl mx-auto pt-16 px-6">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
           Solutions & Systems
        </motion.div>
        <motion.h1 initial="hidden" animate="visible" variants={fadeIn} className="text-4xl md:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
          {dynamicIntent.pageTitle}
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeIn} className="text-lg text-foreground/60 max-w-2xl mx-auto font-medium italic">
           "{dynamicIntent.pageDescription}"
        </motion.p>
      </section>

      {/* Product List */}
      <div className="container mx-auto px-6 space-y-40">
        {productCategories.map((category, idx) => (
          <motion.section 
            key={category.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            id={category.id}
            className={`flex flex-col lg:flex-row gap-16 lg:gap-32 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="flex-1 space-y-8">
               <div className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.2em] text-xs">
                  <category.icon className="h-5 w-5" />
                  <span>{category.title}</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight">{category.title} Installation & Service</h2>
               <p className="text-xl text-foreground/60 leading-relaxed font-medium">{category.desc}</p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {category.bullets.map(bullet => (
                    <div key={bullet} className="flex gap-3 p-5 rounded-3xl glass-card border-none bg-primary/5 group hover:bg-primary/10 transition-all">
                       <CheckCircle2 className="h-5 w-5 text-primary shrink-0 group-hover:scale-125 transition-transform" />
                       <span className="text-foreground/80 font-bold leading-tight">{bullet}</span>
                    </div>
                  ))}
               </div>
               <div className="pt-10 flex flex-wrap items-center gap-8 border-t border-primary/5">
                  <div className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.3em]">
                     Ideal for: <span className="text-foreground">{category.idealFor}</span>
                  </div>
                  <Link href="/contact" className="px-8 py-4 rounded-2xl bg-primary text-white font-black shimmer-button shadow-2xl shadow-primary/30 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all text-sm uppercase">
                    Get Quote <ArrowRight className="h-4 w-4" />
                  </Link>
               </div>
            </div>
            
            <div className="flex-1 relative w-full h-[500px]">
               <div className="absolute inset-0 liquid-glass rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(15,199,240,0.2)]">
                  <Image 
                    src={category.image} 
                    alt={category.title} 
                    fill 
                    className="object-cover transition-transform duration-[2s] hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
               </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Assurance Note */}
      <section className="container mx-auto px-6">
         <div className="liquid-glass rounded-[4rem] p-12 lg:p-24 text-center max-w-5xl mx-auto space-y-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full" />
            <div className="h-20 w-20 mx-auto flex items-center justify-center rounded-[2rem] bg-indigo-500 text-white shadow-2xl mb-8 group overflow-hidden">
               <ZapIcon className="h-10 w-10 group-hover:scale-150 transition-transform duration-500" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground tracking-tighter">Ready to Solve Your Water Issues?</h2>
            <p className="text-2xl font-bold text-foreground/60 max-w-3xl mx-auto italic">
              "Providing honest technical guidance and genuine spare parts Since 2021 for Chennai's homes and industries."
            </p>
            <div className="flex justify-center flex-wrap gap-12 pt-12">
               <div className="flex items-center gap-3">
                  <span className="p-3 rounded-2xl bg-primary/10 text-primary"><ShieldCheck className="h-8 w-8" /></span>
                  <span className="font-extrabold text-foreground text-xl">Honest Advice</span>
               </div>
               <div className="flex items-center gap-3">
                  <span className="p-3 rounded-2xl bg-primary/10 text-primary"><ZapIcon className="h-8 w-8" /></span>
                  <span className="font-extrabold text-foreground text-xl">Rapid Support</span>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
       <div className="h-screen w-full flex flex-col items-center justify-center space-y-6">
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2 }} className="text-primary">
             <Droplets className="h-16 w-16" />
          </motion.div>
          <p className="font-black text-foreground uppercase tracking-widest text-sm">Loading Solutions...</p>
       </div>
    }>
      <ProductContent />
    </Suspense>
  );
}
