"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Premium Background Decor */}
      <div className="absolute top-1/4 -left-10 w-[400px] h-[400px] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-blob" />
      <div className="absolute top-1/3 -right-10 w-[400px] h-[400px] bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="flex flex-col space-y-6"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="inline-block w-fit px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium"
            >
              Vidvath Perumandla — Frontend Developer & Student
            </motion.div>
            
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-6xl md:text-8xl font-serif font-bold text-foreground leading-tight tracking-tight drop-shadow-sm"
            >
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">Intelligent</span> <br />
              Digital Solutions
            </motion.h1>
            
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-medium"
            >
              I am a developer specializing in Artificial Intelligence, Machine Learning, and Python. I craft interactive and highly customized tools that break away from generic templates.
            </motion.p>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="group flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium transition-colors"
              >
                View Projects 
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="flex items-center gap-2 px-6 py-3 border border-muted-foreground/30 rounded-full font-medium transition-colors"
              >
                Let&apos;s Talk
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Visual Element (Asymmetric) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[500px] w-full hidden lg:block"
          >
            <motion.div 
              animate={{ rotate: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-0 right-10 aspect-square h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl border border-white/10 backdrop-blur-sm p-2 shadow-2xl"
            >
              <div className="w-full h-full relative rounded-2xl overflow-hidden">
                <Image 
                  src="/vidvath-portrait.png" 
                  alt="Vidvath Perumandla" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </motion.div>
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, -2, 2, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-1/4 -left-10 bg-background/80 backdrop-blur-md p-6 rounded-2xl border border-muted/30 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shadow-[0_0_15px_rgba(6,182,212,0.5)]">AI</div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">AI & Python</h3>
                  <p className="text-xs text-primary font-medium">Prompt Engineering</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
