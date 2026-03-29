"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, Trash2, Plus, ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";

interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export default function TaskMasterPro() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem("taskmaster_tasks");
    if (saved) {
      try {
        setTasks(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse tasks");
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to local storage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("taskmaster_tasks", JSON.stringify(tasks));
    }
  }, [tasks, isLoaded]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    
    const task: Task = {
      id: crypto.randomUUID(),
      text: newTask.trim(),
      completed: false,
      createdAt: Date.now(),
    };
    
    setTasks([task, ...tasks]);
    setNewTask("");
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const progress = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col items-center py-20 px-6">
      {/* Background Decor */}
      <div className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-accent/20 rounded-full mix-blend-screen filter blur-[150px] opacity-50" />
      <div className="absolute bottom-0 -right-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full mix-blend-screen filter blur-[150px] opacity-50" />
      
      <div className="absolute top-8 left-8 z-50">
        <Link href="/#projects" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/5 shadow-lg">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-2xl flex flex-col items-center"
      >
        <div className="text-center mb-10 w-full">
          <motion.div 
             initial={{ scale: 0.8 }} animate={{ scale: 1 }}
             className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(168,85,247,0.3)] border border-accent/30"
          >
            <Calendar size={32} className="text-accent" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary mb-4">
            TaskMaster Pro
          </h1>
          <p className="text-muted-foreground">Manage your assignments with fluidity and focus.</p>
        </div>

        {/* Main App Container */}
        <div className="w-full bg-background/50 backdrop-blur-3xl border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] rounded-[2rem] p-6 md:p-10 relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl -z-10 rounded-[2.5rem]" />
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-end mb-2">
              <h2 className="text-xl font-bold text-foreground">Today&apos;s Tasks</h2>
              <span className="text-sm font-medium text-accent">{progress}% Done</span>
            </div>
            <div className="w-full h-2 bg-background/80 rounded-full overflow-hidden border border-white/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-accent to-primary"
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={addTask} className="relative mb-10">
            <input 
              type="text" 
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="What needs to be done?"
              className="w-full bg-background/80 border border-white/10 rounded-2xl py-4 pl-6 pr-16 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all shadow-inner"
            />
            <button 
              type="submit"
              disabled={!newTask.trim()}
              className="absolute right-2 top-2 bottom-2 aspect-square bg-accent text-white rounded-xl flex items-center justify-center hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:hover:bg-accent shadow-lg"
            >
              <Plus size={20} />
            </button>
          </form>

          {/* Task List */}
          <div className="space-y-4 min-h-[300px]">
            <AnimatePresence mode="popLayout">
              {tasks.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-48 text-muted-foreground/60"
                >
                  <CheckCircle2 size={48} className="mb-4 opacity-50" />
                  <p>All caught up! Time to relax.</p>
                </motion.div>
              ) : (
                tasks.map(task => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, x: -20 }}
                    transition={{ duration: 0.2 }}
                    key={task.id}
                    className={`group/task flex items-center justify-between p-4 rounded-2xl border backdrop-blur-sm transition-all ${
                      task.completed 
                        ? "bg-white/5 border-white/5" 
                        : "bg-background/80 border-white/10 hover:border-accent/30 shadow-md"
                    }`}
                  >
                    <div 
                      className="flex flex-1 gap-4 items-center cursor-pointer"
                      onClick={() => toggleTask(task.id)}
                    >
                      <button className="text-accent transition-transform group-hover/task:scale-110 flex-shrink-0">
                        {task.completed ? <CheckCircle2 size={24} className="text-primary" /> : <Circle size={24} />}
                      </button>
                      <span className={`text-lg transition-all duration-300 select-none break-all ${
                        task.completed ? "line-through text-muted-foreground/50" : "text-foreground"
                      }`}>
                        {task.text}
                      </span>
                    </div>
                    <button 
                      onClick={() => deleteTask(task.id)}
                      className="text-muted-foreground/30 hover:text-red-400 p-2 rounded-xl hover:bg-red-400/10 transition-all opacity-0 group-hover/task:opacity-100 flex-shrink-0"
                    >
                      <Trash2 size={18} />
                    </button>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
