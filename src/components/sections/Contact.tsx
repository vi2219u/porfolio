"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, XCircle, Loader2, MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    try {
      const res = await fetch("https://formsubmit.co/ajax/p.vidvath2005@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            message,
            _subject: `New Portfolio Message from ${name}`
        })
      });
      
      if (res.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 w-full relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:mix-blend-screen -z-10 translate-x-1/3 -translate-y-1/3" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl w-full mx-auto flex flex-col items-center justify-center">
          
          {/* Centered Heading */}
          <div className="flex flex-col items-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-foreground text-center"
            >
              Get In Touch
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-6"
            />
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground mt-6 text-center text-lg"
            >
              Have a project in mind or just want to say hi? Drop me a message below.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8"
            >
              <div className="flex items-center gap-2 text-foreground/80 bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 dark:border-white/5 shadow-sm hover:border-primary/50 transition-colors">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm font-medium">Karimnagar Telangana-505475</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80 bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 dark:border-white/5 shadow-sm hover:border-accent/50 transition-colors">
                <Phone size={16} className="text-accent" />
                <span className="text-sm font-medium">+91 9392593728</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80 bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 dark:border-white/5 shadow-sm hover:border-primary/50 transition-colors">
                <Mail size={16} className="text-primary" />
                <span className="text-sm font-medium">p.vidvath2005@gmail.com</span>
              </div>
            </motion.div>
          </div>

          {/* Centered Form with Glow Effect */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full relative group"
          >
            {/* Glowing Border/Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-500" />
            
            {/* Form Container */}
            <div className="w-full relative bg-background/70 backdrop-blur-2xl border border-white/10 dark:border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground ml-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-xl bg-muted/20 border border-muted/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/50 text-foreground"
                  />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-xl bg-muted/20 border border-muted/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/50 text-foreground"
                  />
                </motion.div>
              </div>
              
              <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground ml-1">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 rounded-xl bg-muted/20 border border-muted/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-muted-foreground/50 text-foreground"
                ></textarea>
              </motion.div>
              
              <motion.button 
                whileHover={status === "idle" ? { scale: 1.02, backgroundColor: "var(--foreground)", color: "var(--background)" } : {}}
                whileTap={status === "idle" ? { scale: 0.98 } : {}}
                disabled={status !== "idle"}
                type="submit"
                className={`w-full py-4 mt-2 font-semibold rounded-xl flex items-center justify-center gap-2 transition-all ${
                  status === "success" ? "bg-emerald-500 text-white" :
                  status === "error" ? "bg-red-500 text-white" :
                  "bg-foreground text-background hover:bg-primary hover:text-primary-foreground focus:ring-4 focus:ring-primary/20"
                }`}
              >
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      Send Message <Send size={18} />
                    </motion.div>
                  )}
                  {status === "loading" && (
                    <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Loader2 size={18} className="animate-spin" />
                    </motion.div>
                  )}
                  {status === "success" && (
                    <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      Message Sent! <CheckCircle2 size={18} />
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      Failed to Send <XCircle size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
