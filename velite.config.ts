import { defineConfig, s } from "velite"

const projects = s.collection({
  name: "Project",
  pattern: "projects/**/*.mdx",
  schema: s.object({
    title: s.string().max(99),
    description: s.string().max(999),
    image: s.string().optional(),
    date: s.isodate(),
    tags: s.array(s.string()),
    links: s.array(s.object({ title: s.string(), url: s.string() })).optional(),
    featured: s.boolean().default(false),
  }).transform(data => ({ ...data, permalink: `/projects/${data.title.toLowerCase().replace(/\s+/g, '-')}` }))
})

const experiences = s.collection({
  name: "Experience",
  pattern: "experiences/**/*.mdx",
  schema: s.object({
    role: s.string(),
    company: s.string(),
    duration: s.string(),
    description: s.string(),
    highlights: s.array(s.string()).optional(),
  })
})

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { projects, experiences },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
})
