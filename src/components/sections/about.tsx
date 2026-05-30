"use client"

import * as React from "react"
import { motion } from "motion/react"
import { Code2, Globe, Server } from "lucide-react"

const STATS = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "40+" },
  { label: "Happy Clients", value: "20+" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4 md:px-8 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Left Column - Image/Visual */}
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square rounded-2xl overflow-hidden glass-card p-2 relative z-10 bg-gradient-to-br from-primary/20 to-secondary/20">
              <div className="w-full h-full rounded-xl bg-card flex items-center justify-center text-muted-foreground/50 text-xl font-medium border border-border/50">
                [Profile Image Placeholder]
              </div>
            </div>
            {/* Decorational Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </div>

          {/* Right Column - Text & Stats */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am a passionate software engineer specializing in modern web development. 
              With a strong foundation in both frontend and backend technologies, I build 
              applications that are not only visually stunning but also performant and scalable.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-6">
              {STATS.map((stat, i) => (
                <div key={i} className="space-y-2 text-center md:text-left">
                  <h4 className="text-3xl font-bold text-gradient">{stat.value}</h4>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-6">
              <div className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                <Globe className="w-6 h-6" />
              </div>
              <div className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 text-secondary">
                <Server className="w-6 h-6" />
              </div>
              <div className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-accent text-accent-foreground">
                <Code2 className="w-6 h-6" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
