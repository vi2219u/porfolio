"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-background py-10 border-t border-muted/30 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div className="text-center md:text-left">
          <h2 className="text-xl font-serif font-bold text-foreground">Vidvath Perumandla</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <motion.a 
            whileHover={{ scale: 1.1, y: -2 }}
            href="#" 
            className="w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-colors"
          >
            <Mail size={18} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, y: -2 }}
            href="https://github.com/vi2219u" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-colors"
          >
            <FaGithub size={18} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, y: -2 }}
            href="https://www.linkedin.com/in/vidvath-perumandla-b51a643b0/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-colors"
          >
            <FaLinkedin size={18} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, y: -2 }}
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-colors"
          >
            <FaTwitter size={18} />
          </motion.a>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="container mx-auto px-6 md:px-12 mt-8 text-center"
      >
        <p className="text-sm text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Vidvath Perumandla. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
