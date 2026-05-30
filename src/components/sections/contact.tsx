"use client"

import * as React from "react"
import { motion } from "motion/react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-4 md:px-8 mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="glass-card p-6 rounded-2xl border-border/50 flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-xl">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p className="text-muted-foreground">hello@example.com</p>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl border-border/50 flex items-start gap-4">
              <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Location</h3>
                <p className="text-muted-foreground">Jakarta, Indonesia</p>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl border-border/50 flex items-start gap-4">
              <div className="p-3 bg-accent/50 text-accent-foreground rounded-xl">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <p className="text-muted-foreground">+62 812 3456 7890</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="glass-card p-8 rounded-3xl border-border/50 space-y-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="space-y-2 relative z-10">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" placeholder="John Doe" className="bg-background/50 border-border/50 focus-visible:ring-primary" />
              </div>
              <div className="space-y-2 relative z-10">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50 border-border/50 focus-visible:ring-primary" />
              </div>
              <div className="space-y-2 relative z-10">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px] bg-background/50 border-border/50 focus-visible:ring-primary" />
              </div>
              
              <Button type="button" className="w-full relative z-10">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
