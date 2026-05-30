"use client"

import * as React from "react"
import { motion } from "motion/react"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-background overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Floating particles (basic css animation class) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-3 h-3 bg-primary/40 rounded-full animate-float" />
        <div className="absolute top-[60%] left-[80%] w-4 h-4 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[80%] left-[20%] w-2 h-2 bg-accent/60 rounded-full animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container px-4 md:px-8 relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full glass border border-primary/20 text-primary text-sm font-medium mb-6">
                Available for new opportunities
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="text-gradient">John Doe</span>
              <br />
              Software Engineer
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground mt-6">
              I build scalable, premium, and dynamic web experiences that turn complex problems into elegant solutions.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <Button size="lg" className="rounded-full gap-2 w-full sm:w-auto hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-shadow">
              View Projects <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full gap-2 w-full sm:w-auto glass hover:bg-white/5 dark:hover:bg-black/20">
              Download CV <Download className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
