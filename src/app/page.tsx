"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle2, Droplets, ShieldCheck, Heart, ArrowRight, Zap, Star, ChevronDown, Award, Users, Search, Building2, ChevronLeft as LeftIcon, ChevronRight as RightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const brands = ["Kent", "Aquaguard", "Pureit", "Livepure", "TATA Swach", "Havells"];

const testimonials = [
  { name: "Vaigunda Raja", area: "Siruseri", text: "Excellent service for our STP plant. Honest advice and very knowledgeable technicians.", rating: 5 },
  { name: "Meena Kumari", area: "Anna Nagar", text: "Best RO service in Chennai. They explained the TDS level clearly and fixed the filter within an hour.", rating: 5 },
  { name: "Dr. Muralidharan", area: "Porur", text: "Reliable and professional. They use genuine spare parts only. Very happy with the long-term AMC plan.", rating: 4 },
  { name: "Suresh Pillai", area: "Thirumullaivoyal", text: "Trustworthy source for high-capacity RO systems. Their water study before installation was very helpful.", rating: 5 }
];

const faqs = [
  { q: "What is TDS and why is it important?", a: "TDS stands for Total Dissolved Solids. It represents the concentration of dissolved substances in water. High TDS can make water hard and affect taste/health. An RO system reduces TDS to safe levels." },
  { q: "How often should I service my RO system?", a: "For domestic RO, we recommend servicing every 3 to 6 months depending on usage and input water quality. Filter changes are essential for membrane life." },
  { q: "Do you cover all areas in Chennai?", a: "Yes, we provide service and installations across Greater Chennai, including suburban areas like Siruseri, Tambaram, and Porur." },
  { q: "What is an AMC plan?", a: "Annual Maintenance Contract (AMC) covers regular maintenance visits and filter replacements for a fixed yearly fee, ensuring your system runs perfectly without unexpected costs." }
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, idx) => (
        <div key={idx} className="glass-card rounded-3xl overflow-hidden">
          <button 
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full flex items-center justify-between p-6 text-left font-bold text-foreground hover:bg-white/10 transition-colors"
          >
            <span>{faq.q}</span>
            <ChevronDown className={`h-5 w-5 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
          </button>
          {openIdx === idx && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              className="px-6 pb-6 text-foreground/70 text-sm leading-relaxed"
            >
              {faq.a}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIdx(index);
    }
  };

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] -z-10 rounded-full" />
        
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-black tracking-widest uppercase">
              <Droplets className="h-4 w-4" />
              Water That Makes You Smile
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-5xl lg:text-8xl font-black tracking-tighter text-foreground leading-[1]"
            >
              Pure Water, <span className="text-gradient">Pure Life.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-foreground/60 leading-relaxed max-w-lg"
            >
              Mineral-rich Water that protects your family's future in every drop. Reliable service Since 2021.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-6 pt-4">
              <Link href="/contact" className="px-10 py-5 rounded-2xl bg-primary text-white font-bold shimmer-button shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all text-lg flex items-center gap-3">
                Free TDS Test <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/products" className="glass-card px-10 py-5 rounded-2xl font-bold flex items-center gap-2 hover:bg-white/5 active:scale-95 transition-all text-lg">
                View Products
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="flex items-center gap-8 pt-10 border-t border-primary/10">
               <div>
                  <p className="text-3xl font-black text-foreground">5,000+</p>
                  <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mt-1">Happy Clients</p>
               </div>
               <div className="h-10 w-px bg-primary/10" />
               <div>
                  <p className="text-3xl font-black text-foreground">12+</p>
                  <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mt-1">Years Experience</p>
               </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
            className="relative h-[650px] w-full"
          >
            <div className="absolute inset-0 liquid-glass rounded-[4rem] overflow-hidden rotate-2 shadow-[0_50px_100px_-20px_rgba(15,199,240,0.3)]">
               <Image 
                  src="/images/hero_plant.png" 
                  alt="Professional RO Plant" 
                  fill 
                  className="object-cover"
                  priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 p-10 glass-card rounded-[3rem] space-y-3 max-w-sm rotate-[-2deg]">
               <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg">
                  <ShieldCheck className="h-6 w-6" />
               </div>
               <p className="text-2xl font-black text-foreground">Certified Quality</p>
               <p className="text-sm font-medium text-foreground/50 italic">"We first study the water, then suggest the right system."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="overflow-hidden border-y border-primary/5 py-12">
         <div className="marquee-container">
            <div className="marquee-content">
               {brands.map(brand => (
                 <span key={brand} className="text-4xl font-black text-foreground/10 uppercase tracking-[0.5em]">{brand}</span>
               ))}
               {brands.map(brand => (
                 <span key={`${brand}-2`} className="text-4xl font-black text-foreground/10 uppercase tracking-[0.5em]">{brand}</span>
               ))}
            </div>
         </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center space-y-4 mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-foreground tracking-tight">Expert <span className="text-gradient">Solutions</span></h2>
          <p className="text-foreground/50 font-bold uppercase tracking-widest text-sm">Professional Water Treatment for Every Need</p>
        </motion.div>
        
        <div className="relative group/slider">
          {/* Navigation Buttons - Desktop */}
          <button 
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
              }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 h-14 w-14 rounded-full bg-white shadow-2xl flex items-center justify-center text-primary border border-primary/10 hover:scale-110 active:scale-95 transition-all opacity-0 group-hover/slider:opacity-100 hidden lg:flex"
          >
            <LeftIcon className="h-6 w-6" />
          </button>
          
          <button 
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
              }
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 h-14 w-14 rounded-full bg-white shadow-2xl flex items-center justify-center text-primary border border-primary/10 hover:scale-110 active:scale-95 transition-all opacity-0 group-hover/slider:opacity-100 hidden lg:flex"
          >
            <RightIcon className="h-6 w-6" />
          </button>

          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory no-scrollbar -mx-6 px-6"
          >
            {[
              { title: "Domestic RO Service", icon: Droplets, color: "bg-sky-500", desc: "Expert repair and filter change for all home purifier brands." },
              { title: "Industrial RO Plants", icon: Building2, color: "bg-primary", desc: "Heavy-duty systems custom-built for factories and schools." },
              { title: "Water Softener", icon: Zap, color: "bg-blue-600", desc: "Advanced ion-exchange softeners to reduce water hardness." },
              { title: "Iron Removal", icon: Search, color: "bg-orange-500", desc: "Specialized filtration for iron contamination in borewells." },
              { title: "AMC Service Plans", icon: ShieldCheck, color: "bg-yellow-500", desc: "Hassle-free yearly maintenance for continuous pure water." },
              { title: "STP/ETP Plants", icon: Heart, color: "bg-rose-500", desc: "Complete wastewater management systems for residential projects." },
              { title: "Water ATM", icon: Award, color: "bg-indigo-500", desc: "Community water solutions with smart card integration." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-10 rounded-[3rem] space-y-6 group flex-shrink-0 w-[80vw] md:w-[400px] snap-center"
              >
                <div className={`h-16 w-16 rounded-3xl ${item.color} flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                   <item.icon className="h-8 w-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-foreground">{item.title}</h3>
                  <p className="text-foreground/60 leading-relaxed font-medium">{item.desc}</p>
                </div>
                <Link href={`/products#${item.title.toLowerCase().replace(/ /g, '-')}`} className="inline-flex items-center gap-2 font-black text-primary hover:gap-4 transition-all uppercase tracking-widest text-xs">
                   Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots - Mobile/Tablet */}
          <div className="flex justify-center gap-2 mt-4 lg:hidden">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className={`h-2 rounded-full transition-all duration-300 ${activeIdx === i ? 'w-8 bg-primary' : 'w-2 bg-primary/20'}`}
              />
            ))}
          </div>
          
          {/* Scroll Hint for Mobile */}
          <div className="text-center mt-6 lg:hidden">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 animate-pulse">Swipe to see more solutions</p>
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="container mx-auto px-6">
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center space-y-4 mb-20"
         >
            <h2 className="text-4xl lg:text-6xl font-black text-foreground tracking-tight">Recent <span className="text-gradient">Projects</span></h2>
            <p className="text-foreground/50 font-bold uppercase tracking-widest text-sm italic">Delivering purity to Chennai's landmarks</p>
         </motion.div>
         
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
           {[
             { name: "Siruseri TCS STP RO Plant", cap: "15000 LPH", img: "/images/tcs_plant.png" },
             { name: "Okkiyam Thuraipakkam GHSS", cap: "500 LPH", img: "/images/hero_plant.png" },
             { name: "Smart Water ATM", cap: "Community Service", img: "/images/water_atm.png" }
           ].map((p, i) => (
             <motion.div 
               key={i} 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeIn}
               transition={{ delay: i * 0.1 }}
               whileHover={{ y: -12 }}
               className="glass-card overflow-hidden group rounded-[3.5rem] relative h-[450px]"
             >
                <Image src={p.img} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-10">
                   <p className="font-black text-white text-3xl leading-tight tracking-tight">{p.name}</p>
                   <div className="flex items-center justify-between mt-6">
                      <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">{p.cap}</span>
                      <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform"><ArrowRight className="h-5 w-5" /></div>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary/5 py-32 px-6">
         <div className="container mx-auto">
            <h2 className="text-4xl lg:text-6xl font-black text-foreground text-center mb-20 tracking-tight">Customer <span className="text-gradient">Experience</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {testimonials.map((t, i) => (
                  <motion.div 
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    whileHover={{ scale: 1.05 }}
                    className="glass-card p-10 rounded-[3rem] space-y-6"
                  >
                     <div className="flex gap-1">
                        {[1,2,3,4,5].map(s => (
                           <Star key={s} className={`h-4 w-4 ${s <= t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} />
                        ))}
                     </div>
                     <p className="text-foreground font-bold italic leading-relaxed">"{t.text}"</p>
                     <div className="pt-6 border-t border-primary/10">
                        <p className="font-black text-foreground">{t.name}</p>
                        <p className="text-xs font-bold text-primary uppercase tracking-widest">{t.area}, Chennai</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 mb-32">
         <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center space-y-4 mb-20"
         >
            <h2 className="text-4xl lg:text-6xl font-black text-foreground tracking-tight">Common <span className="text-gradient">Questions</span></h2>
            <p className="text-foreground/50 font-bold uppercase tracking-widest text-sm italic">Clear answers for your water concerns</p>
         </motion.div>
         <FAQ />
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 mb-40">
         <div className="liquid-glass rounded-[4rem] p-12 lg:p-32 text-center space-y-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full" />
            <div className="relative z-10 space-y-8">
               <h2 className="text-5xl lg:text-7xl font-black text-foreground leading-[1] tracking-tighter">Ready for <span className="text-gradient text-[1.1em]">Purer Water?</span></h2>
               <p className="text-2xl font-bold text-foreground/60 max-w-2xl mx-auto italic">"Save health, save money. Hire a professional water treatment expert today."</p>
               <div className="flex justify-center gap-8 pt-8">
                  <a href="tel:8428665293" className="px-12 py-6 rounded-3xl bg-primary text-white font-black text-2xl shadow-[0_20px_40px_-5px_rgba(15,199,240,0.5)] hover:scale-105 active:scale-95 transition-all shimmer-button">
                     84286 65293
                  </a>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
