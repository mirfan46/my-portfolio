import * as React from "react"
import Link from "next/link"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-background/50 backdrop-blur-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-primary">&lt;</span> Portfolio <span className="text-primary">/&gt;</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
            Building premium, scalable, and dynamic web experiences.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full hover:bg-primary/10 hover:text-primary transition-colors")}>
            <GithubIcon className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full hover:bg-primary/10 hover:text-primary transition-colors")}>
            <LinkedinIcon className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full hover:bg-primary/10 hover:text-primary transition-colors")}>
            <TwitterIcon className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>
      
      <div className="border-t border-border/50 py-6">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Software Engineer. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
