"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare, Droplets, MapPin as MapIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    waterSource: "Borewell Water",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      if (data.success) {
        setFormStatus("success");
        setFormData({
          name: "",
          phone: "",
          location: "",
          waterSource: "Borewell Water",
          message: ""
        });
      } else {
        alert(data.message || "Failed to submit form. Please try again.");
        setFormStatus("idle");
      }
    } catch (err) {
      console.error("Form submit error:", err);
      alert("An error occurred. Please try again later.");
      setFormStatus("idle");
    }
  };

  return (
    <div className="space-y-32 mb-20">
      {/* Header */}
      <section className="text-center space-y-4 max-w-4xl mx-auto pt-16">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-primary font-black uppercase tracking-[0.3em] text-xs">
           Get in Touch
        </motion.div>
        <motion.h1 initial="hidden" animate="visible" variants={fadeIn} className="text-5xl md:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
          Let's Start a <span className="text-gradient">Water Study.</span>
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeIn} className="text-lg text-foreground/60 max-w-2xl mx-auto italic">
           "We analyze your water source first to recommend the most efficient solution for your home or industry."
        </motion.p>
      </section>

      <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.div 
           initial="hidden" 
           whileInView="visible" 
           viewport={{ once: true }} 
           variants={fadeIn}
           className="glass-card p-10 md:p-16 rounded-[4rem] relative overflow-hidden"
        >
          {formStatus === "success" ? (
             <div className="text-center space-y-6 py-20">
                <div className="h-20 w-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto ring-1 ring-green-500/20">
                   <Send className="h-10 w-10" />
                </div>
                <h2 className="text-3xl font-black text-foreground">Message Sent!</h2>
                <p className="text-foreground/60 font-medium italic">"Thank you for reaching out. Our water expert will call you shortly for a consultation."</p>
                <button onClick={() => setFormStatus("idle")} className="text-primary font-bold hover:underline">Send another enquiry</button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-foreground/40 uppercase tracking-widest ml-4">Full Name</label>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-white/40 border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-foreground/30 font-bold text-foreground" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-foreground/40 uppercase tracking-widest ml-4">Phone Number</label>
                  <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="84286 65293" className="w-full px-6 py-4 rounded-2xl bg-white/40 border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-foreground/30 font-bold text-foreground" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-foreground/40 uppercase tracking-widest ml-4">Area / Location</label>
                  <input required name="location" value={formData.location} onChange={handleChange} type="text" placeholder="e.g. Thirumullaivoyal" className="w-full px-6 py-4 rounded-2xl bg-white/40 border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-foreground/30 font-bold text-foreground" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-foreground/40 uppercase tracking-widest ml-4">Water Source</label>
                  <select name="waterSource" value={formData.waterSource} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-white/40 border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold text-foreground">
                    <option>Borewell Water</option>
                    <option>Corporation Water</option>
                    <option>Mixed Water</option>
                    <option>Industrial Outlet</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-foreground/40 uppercase tracking-widest ml-4">Requirement / Message</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us about your water issue..." className="w-full px-6 py-4 rounded-2xl bg-white/40 border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-foreground/30 font-bold text-foreground"></textarea>
              </div>

              <button 
                disabled={formStatus === "submitting"}
                className="w-full py-5 rounded-2xl bg-primary text-white font-black text-xl shimmer-button shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {formStatus === "submitting" ? "Sending..." : <>Book TDS Consultation <Send className="h-5 w-5" /></>}
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact Info & Map */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-[2.5rem] space-y-4">
               <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center"><Phone className="h-6 w-6" /></div>
               <div>
                  <p className="text-xs font-black text-foreground/40 uppercase tracking-widest">Call Expert</p>
                  <p className="text-xl font-black text-foreground leading-tight">84286 65293</p>
               </div>
            </div>
            <div className="glass-card p-8 rounded-[2.5rem] space-y-4">
               <div className="h-12 w-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center"><Mail className="h-6 w-6" /></div>
               <div>
                  <p className="text-xs font-black text-foreground/40 uppercase tracking-widest">Email Us</p>
                  <p className="text-lg font-black text-foreground leading-tight break-all">vallienterprises.vi@gmail.com</p>
               </div>
            </div>
          </div>

          <div className="glass-card p-10 rounded-[3rem] space-y-8 h-full min-h-[400px] flex flex-col">
             <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0"><MapIcon className="h-6 w-6" /></div>
                <div>
                   <p className="text-xs font-black text-foreground/40 uppercase tracking-widest">Our Office</p>
                   <p className="text-lg font-bold text-foreground leading-tight">Shop: 9C, VGN Stafford road, Newry Sanctum, Thirumalaivasan nagar, Thirumullaivoyal, Chennai - 600062.</p>
                </div>
             </div>
             
             {/* Google Maps Iframe */}
             <div className="flex-grow rounded-3xl overflow-hidden border border-primary/10 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.645391113!2d80.12!3d13.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526372834b6e51%3A0x889895c267c7e5a!2sNewry%20Sanctum!5e0!3m2!1sen!2sin!4v1711000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
