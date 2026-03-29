"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const projects = [
  {
    title: "Weather Dashboard API",
    description: "A fast, responsive weather dashboard built with React that interfaces with real-time meteorological APIs via Open-Meteo, featuring dynamic layouts and glassmorphism.",
    tech: ["Next.js", "Tailwind CSS", "Open-Meteo API", "Framer Motion"],
    codeLink: "https://github.com/vi2219u/porfolio/tree/main/src/app/weather",
    liveLink: "/weather",
    gradient: "from-blue-500/20 to-sky-500/20",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    title: "TaskMaster Pro",
    description: "A beautifully animated task management application built to help students track assignments, leveraging local storage and Framer Motion for fluidity.",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    codeLink: "https://github.com/vi2219u/porfolio/tree/main/src/app/taskmaster",
    liveLink: "/taskmaster",
    gradient: "from-indigo-500/20 to-purple-500/20",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 w-full bg-muted/10 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground text-center"
          >
            Selected Works
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
          />
        </div>

        <div className="flex flex-col gap-12 lg:gap-24">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16 group relative`}
            >
              {/* Subtle background glow for the row on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl -z-10 rounded-[3rem]" />

              {/* Image Container */}
              <div className="w-full lg:w-1/2 min-h-[300px] md:min-h-[400px] rounded-3xl overflow-hidden relative shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 group-hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`} />
                <div className="absolute inset-4 rounded-xl border border-white/10 bg-background/50 backdrop-blur-sm flex items-center justify-center p-2 transition-all duration-300 group-hover:bg-background/20 group-hover:inset-2">
                  <div className="w-full h-full rounded-lg overflow-hidden relative shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 flex flex-col space-y-6">
                <div className="inline-flex items-center gap-2">
                  <span className="text-primary font-mono text-sm font-semibold">0{index + 1}</span>
                  <span className="w-8 h-px bg-muted-foreground/30"></span>
                </div>
                
                <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  <Link href={project.liveLink} className="before:absolute before:inset-0 before:z-[15]">
                    {project.title}
                  </Link>
                </h3>
                
                <div className="p-8 rounded-2xl bg-background/80 backdrop-blur-2xl border border-white/10 dark:border-white/5 shadow-2xl relative z-10 -ml-0 lg:-ml-12 group-hover:-translate-y-3 transition-all duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.3)]">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-6 pt-4 relative z-20">
                  <Link href={project.liveLink} passHref legacyBehavior>
                    <motion.a 
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group/link"
                    >
                      Live Demo 
                      <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </motion.a>
                  </Link>
                  <motion.a 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.codeLink} 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group/link"
                  >
                    Source Code 
                    <FaGithub size={16} className="group-hover/link:scale-110 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(59, 130, 246, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/vi2219u"
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 rounded-full border border-primary/30 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View More on GitHub
            </motion.a>
        </div>
      </div>
    </section>
  );
}
