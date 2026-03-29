"use client";

import { motion } from "framer-motion";

const skills = [
  "Python (Basic)", "Java (Basic)", "Prompt Engineering"
];

export function About() {
  return (
    <section id="about" className="py-24 w-full relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row gap-16 lg:gap-24"
        >
          {/* Text Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="lg:w-1/2 space-y-8"
          >
            <motion.h2 
              variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
              className="text-4xl md:text-5xl font-serif font-bold text-foreground relative inline-block"
            >
              Beyond the Code
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "33%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-1 bg-primary rounded-full"
              />
            </motion.h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                I am currently pursuing a <strong className="text-foreground font-medium">B.Tech in Artificial Intelligence & Machine Learning (AIML)</strong> at <strong className="text-foreground font-medium">St. Peter&apos;s Engineering College</strong>, after completing my earlier studies at <strong className="text-foreground font-medium">Government Junior College (Knr)</strong>. I am driven by curiosity and a fascination for how design and technology intersect to solve real human problems. My journey began with simple HTML pages and has evolved into building full-stack applications.
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                Today, my focus is bridging the gap between stunning visual design and high-performance engineering. I am constantly learning, experimenting with new frameworks, and pushing the boundaries of what I can build on the web.
              </motion.p>
            </div>
          </motion.div>

          {/* Skills Side */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">Technical Arsenal</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03, type: "spring", stiffness: 200, damping: 10 }}
                  whileHover={{ scale: 1.1, rotate: -3, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  className="px-5 py-2.5 bg-background/50 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-lg rounded-xl text-sm font-semibold text-foreground hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>


          </div>
        </motion.div>
      </div>
    </section>
  );
}
