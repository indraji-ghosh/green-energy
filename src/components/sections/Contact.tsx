"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the message
    const message = `*New Inquiry from Website*
*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}

*Message:*
${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/916291767198?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left side info */}
            <div className="w-full lg:w-5/12 bg-slate-900 p-10 md:p-12 text-white relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 h-64 bg-emerald-500/30 blur-[80px] rounded-full" />
              <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-64 h-64 bg-teal-500/20 blur-[80px] rounded-full" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Let's Talk Solar.</h3>
                <p className="text-slate-300 leading-relaxed mb-8">
                  Fill out the form and our solar experts will get back to you within 24 hours to schedule your free consultation.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Prefer Whatsapp?</p>
                      <a href="tel:+916291767198" className="text-emerald-400 font-medium hover:underline text-lg">+91 6291-767198</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="w-full lg:w-7/12 p-10 md:p-12">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">First Name</label>
                    <input 
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <input 
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                    <input 
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Phone</label>
                    <input 
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="+91 00000-00000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">How can we help?</label>
                  <textarea 
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your property and energy needs..."
                  ></textarea>
                </div>

                <Button size="lg" className="w-full h-12 text-base">
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
