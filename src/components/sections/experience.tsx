"use client"

import * as React from "react"
import { motion } from "motion/react"
import { Briefcase } from "lucide-react"

const DUMMY_EXPERIENCE = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    duration: "2021 - Present",
    description: "Led the frontend team in rebuilding the core SaaS product using Next.js and Tailwind CSS. Improved performance scores by 40%.",
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Creative Digital Agency",
    duration: "2018 - 2021",
    description: "Developed and maintained multiple client projects, ranging from e-commerce sites to internal enterprise dashboards.",
  },
  {
    id: 3,
    role: "Frontend Intern",
    company: "Startup Hub",
    duration: "2017 - 2018",
    description: "Assisted in building responsive landing pages and improving accessibility for the main web platform.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2 hidden md:block" />
      
      <div className="container px-4 md:px-8 mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Work <span className="text-primary">Experience</span>
          </h2>
        </div>

        <div className="space-y-12">
          {DUMMY_EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-primary items-center justify-center text-primary z-20">
                <Briefcase className="w-5 h-5" />
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-16 text-left" : "md:pr-16 md:text-right"}`}>
                <div className="glass-card p-6 rounded-2xl border-border/50 hover:border-primary/50 transition-colors">
                  <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
                    {exp.duration}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <h4 className="text-muted-foreground mb-4">{exp.company}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
