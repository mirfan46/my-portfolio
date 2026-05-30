"use client"

import * as React from "react"
import { motion } from "motion/react"

const SKILLS = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma"] },
  { category: "Tools", items: ["Git", "Docker", "Figma", "Vercel", "AWS"] },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-8 mx-auto max-w-5xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Technical <span className="text-primary">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl border-border/50"
            >
              <h3 className="text-xl font-bold mb-6 text-center">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
