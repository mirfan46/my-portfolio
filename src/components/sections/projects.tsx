"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { ExternalLink } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const DUMMY_PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with Next.js, Stripe, and PostgreSQL.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    category: "Fullstack",
  },
  {
    id: 2,
    title: "Finance Dashboard",
    description: "Real-time financial analytics dashboard with dynamic charts.",
    tags: ["React", "D3.js", "Express", "MongoDB"],
    category: "Frontend",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "SaaS application leveraging OpenAI to generate marketing copy.",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS"],
    category: "AI",
  },
]

const CATEGORIES = ["All", "Fullstack", "Frontend", "AI"]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = React.useState("All")

  const filteredProjects = DUMMY_PROJECTS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  )

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-8 mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of my recent work. Real data will be loaded via MDX.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
              className="rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:border-primary/50 transition-all">
                  <div className="h-48 bg-muted w-full relative flex items-center justify-center text-muted-foreground overflow-hidden">
                    [Image Placeholder]
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                  </div>
                  <CardHeader>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-4 border-t border-border/50 pt-4">
                    <Button variant="ghost" size="sm" className="gap-2 w-full">
                      <GithubIcon className="w-4 h-4" /> Code
                    </Button>
                    <Button size="sm" className="gap-2 w-full">
                      <ExternalLink className="w-4 h-4" /> Demo
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
