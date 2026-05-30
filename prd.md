# Portfolio Website — Software Engineer

Website portfolio premium untuk software engineer dengan konten yang bisa diubah melalui MDX, animasi modern, tema dark/light mode dengan palet warna yang kaya (bukan hitam putih), dan fully responsive.

---

## Tech Stack

| Teknologi | Versi / Detail |
|---|---|
| **Framework** | Next.js 15 (App Router, TypeScript) |
| **Styling** | Tailwind CSS v4 (CSS-first config) |
| **UI Components** | shadcn/ui (latest) |
| **Content** | Velite (MDX content pipeline, type-safe) |
| **Animations** | Motion (ex Framer Motion v12+, `motion/react`) |
| **Font** | Inter + JetBrains Mono (via `next/font`) |
| **Icons** | Lucide React |
| **Theme** | next-themes (dark/light toggle) |

---

## Color Palette — "Deep Ocean"

Palet warna yang **bukan hitam-putih**, menggunakan deep jewel tones yang premium.

### Light Mode
| Token | Warna | Hex |
|---|---|---|
| Background | Warm Cream | `#FAF7F2` |
| Surface | Soft Pearl | `#F0ECE5` |
| Text Primary | Deep Slate | `#1E293B` |
| Text Secondary | Slate | `#475569` |
| Accent Primary | Indigo Violet | `#6366F1` |
| Accent Secondary | Teal | `#14B8A6` |
| Accent Glow | Soft Indigo | `#818CF8` |
| Border | Warm Gray | `#D6D0C4` |

### Dark Mode
| Token | Warna | Hex |
|---|---|---|
| Background | Deep Navy | `#0F172A` |
| Surface | Midnight Blue | `#1E293B` |
| Text Primary | Soft Cream | `#F1F5F9` |
| Text Secondary | Cool Silver | `#94A3B8` |
| Accent Primary | Electric Indigo | `#818CF8` |
| Accent Secondary | Cyan Teal | `#2DD4BF` |
| Accent Glow | Neon Violet | `#A78BFA` |
| Border | Slate | `#334155` |

> [!TIP]
> Palet ini terinspirasi dari "Deep Jewel Tones" — nuansa biru malam, indigo, dan teal yang memberikan kesan premium dan tech-forward tanpa menggunakan hitam/putih polos.

---

## Struktur Halaman & Sections

### 1. **Landing / Hero Section**
- Nama, title ("Software Engineer"), tagline singkat
- Animated gradient background + floating particles
- CTA buttons (View Projects, Contact Me)
- Smooth entrance animation (staggered fade + slide up)

### 2. **About Me**
- Bio singkat dengan foto profil
- Stats counter animasi (tahun pengalaman, projects, dll)
- Tech stack badges dengan hover effects
- Scroll-reveal animation

### 3. **Projects / Portfolio**
- Grid card layout dengan filter kategori (animasi layout)
- Setiap card: thumbnail, title, description, tech tags, links
- Hover effect: scale + glassmorphism overlay
- Konten dari MDX files

### 4. **Experience / Timeline**
- Timeline vertikal interaktif
- Scroll-driven animation (muncul satu per satu)
- Setiap entry: company, role, duration, highlights
- Konten dari MDX files

### 5. **Blog (Optional / Extensible)**
- List artikel dari MDX files
- Preview card dengan tanggal dan tags
- Individual blog post page dengan MDX rendering

### 6. **Skills & Tools**
- Grid/cloud visual skills
- Progress indicator atau category grouping
- Animasi hover interaktif

### 7. **Contact**
- Form kontak (nama, email, pesan)
- Social media links dengan hover effects
- Animated gradient border

### 8. **Footer**
- Links navigasi, social icons, copyright
- Subtle gradient accent

---

## User Review Required

> [!IMPORTANT]
> **Konten placeholder**: Saya akan menggunakan data dummy (nama, bio, projects) yang bisa Anda ubah nanti melalui MDX files. Apakah ada data spesifik yang ingin langsung dimasukkan?

> [!IMPORTANT]
> **Blog section**: Apakah Anda ingin blog section dimasukkan dari awal, atau cukup disiapkan strukturnya saja untuk ditambahkan nanti?

---

## Open Questions

> [!NOTE]
> 1. Apakah Anda punya **foto profil** yang ingin digunakan, atau saya buat placeholder?
> 2. Apakah ada **social media links** spesifik yang perlu ditampilkan (GitHub, LinkedIn, Twitter/X, dll)?
> 3. Apakah perlu fitur **multi-bahasa** (Indonesia & English)?
> 4. Apakah domain sudah disiapkan atau akan di-deploy ke Vercel?

---

## Proposed Changes

### Inisialisasi Project

#### [NEW] Next.js 15 Project Setup
- `npx create-next-app@latest ./ --ts --tailwind --eslint --app --src-dir --import-alias "@/*"`
- Inisialisasi shadcn/ui: `npx shadcn@latest init`
- Install dependencies:
  ```
  motion velite next-themes @next/mdx @mdx-js/loader @mdx-js/react
  lucide-react rehype-slug rehype-pretty-code remark-gfm
  ```

---

### Design System & Theme

#### [NEW] [globals.css](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/src/app/globals.css)
- Tailwind v4 CSS-first config dengan `@theme` directive
- Custom color tokens untuk "Deep Ocean" palette
- `@custom-variant dark (&:is(.dark *));` untuk dark mode toggle
- Typography base styles
- Custom animations (gradient, float, shimmer)
- Glassmorphism utility classes

#### [NEW] [layout.tsx](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/src/app/layout.tsx)
- Root layout dengan `ThemeProvider` dari next-themes
- Font loading: Inter + JetBrains Mono
- SEO metadata default
- Navbar + Footer wrapper

---

### Core Components

#### [NEW] [src/components/navbar.tsx](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/src/components/navbar.tsx)
- Sticky navbar dengan blur backdrop
- Logo + navigation links
- Dark/Light mode toggle button (shadcn Switch/Button)
- Mobile hamburger menu (Sheet dari shadcn)
- Scroll-aware: berubah style saat di-scroll

#### [NEW] [src/components/theme-toggle.tsx](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/src/components/theme-toggle.tsx)
- Toggle button dark/light mode
- Smooth icon transition (Sun ↔ Moon)

#### [NEW] [src/components/footer.tsx](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/src/components/footer.tsx)
- Social media icons
- Navigation links
- Copyright text
- Gradient accent line

---

### Section Components

#### [NEW] [src/components/sections/hero.tsx](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/src/components/sections/hero.tsx)
- Animated gradient background
- Staggered text entrance (Motion variants)
- Floating particle effect (CSS + Motion)
- Responsive layout (full-screen hero)
- CTA buttons dengan hover glow effect

#### [NEW] [src/components/sections/about.tsx](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/src/components/sections/about.tsx)
- Scroll-reveal animation (`useInView` + Motion)
- Stats counter animasi
- Profile image dengan gradient border
- Tech stack icon grid

#### [NEW] [src/components/sections/projects.tsx](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/src/components/sections/projects.tsx)
- Project card grid (responsive: 1/2/3 kolom)
- Filter tabs dengan `AnimatePresence` + `layout` animation
- Card hover: `whileHover={{ scale: 1.03 }}` + glassmorphism
- Data dari Velite MDX content

#### [NEW] [src/components/sections/experience.tsx](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/src/components/sections/experience.tsx)
- Timeline vertikal
- Scroll-driven reveal animation
- Alternating left-right layout (desktop)
- Stacked layout (mobile)

#### [NEW] [src/components/sections/skills.tsx](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/src/components/sections/skills.tsx)
- Skill cards grouped by category
- Hover effects interaktif
- Responsive grid

#### [NEW] [src/components/sections/contact.tsx](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/src/components/sections/contact.tsx)
- Contact form (shadcn Input, Textarea, Button)
- Social links
- Animated gradient border

---

### Animation Utilities

#### [NEW] [src/components/motion/fade-in.tsx](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/src/components/motion/fade-in.tsx)
- Reusable fade-in wrapper component
- Configurable direction (up, down, left, right)
- Delay & duration props

#### [NEW] [src/components/motion/stagger-container.tsx](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/src/components/motion/stagger-container.tsx)
- Container untuk staggered children animations
- `staggerChildren` variant

#### [NEW] [src/components/motion/scroll-reveal.tsx](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/src/components/motion/scroll-reveal.tsx)
- Scroll-triggered reveal animation
- `useInView` dari Motion

---

### MDX Content System (Velite)

#### [NEW] [velite.config.ts](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/velite.config.ts)
- Schema definitions untuk:
  - `projects` — title, description, image, tags, links, featured, date
  - `experiences` — company, role, duration, description, highlights
  - `posts` (blog) — title, description, date, tags, published
- MDX compilation settings
- Remark/Rehype plugins

#### [NEW] [content/projects/](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/content/projects/)
- `project-1.mdx` — Contoh project e-commerce
- `project-2.mdx` — Contoh project dashboard
- `project-3.mdx` — Contoh project mobile app

#### [NEW] [content/experiences/](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/content/experiences/)
- `experience-1.mdx` — Contoh pengalaman kerja

#### [NEW] [content/posts/](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/content/posts/)
- `hello-world.mdx` — Contoh blog post pertama

#### [NEW] [src/lib/velite.ts](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/src/lib/velite.ts)
- Helper functions untuk query content dari Velite
- `getProjects()`, `getExperiences()`, `getPosts()`
- Type exports

---

### MDX Custom Components

#### [NEW] [src/components/mdx/mdx-components.tsx](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/src/components/mdx/mdx-components.tsx)
- Custom styled heading (h1-h6)
- Code block dengan syntax highlighting (rehype-pretty-code)
- Custom image component
- Callout/alert component
- Link component

#### [NEW] [mdx-components.tsx](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/mdx-components.tsx)
- Root MDX components file (required by Next.js)

---

### Pages

#### [NEW] [src/app/page.tsx](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/src/app/page.tsx)
- Home page — menyusun semua sections:
  - Hero → About → Projects → Experience → Skills → Contact
- SEO metadata

#### [NEW] [src/app/projects/[slug]/page.tsx](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/src/app/projects/[slug]/page.tsx)
- Individual project detail page
- MDX rendering
- Back button + navigation

#### [NEW] [src/app/blog/page.tsx](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/src/app/blog/page.tsx)
- Blog listing page
- Post cards

#### [NEW] [src/app/blog/[slug]/page.tsx](file:///Ubuntu-24.04/home/irfanasus/projects/my-portfolio/src/app/blog/[slug]/page.tsx)
- Individual blog post page
- MDX rendering

---

### shadcn/ui Components yang Digunakan

```bash
npx shadcn@latest add button card badge separator sheet input textarea
```

- **Button** — CTA, form submit, navigation
- **Card** — Project cards, experience cards
- **Badge** — Tech tags, category labels
- **Separator** — Section dividers
- **Sheet** — Mobile navigation menu
- **Input & Textarea** — Contact form

---

## File Structure Overview

```
my-portfolio/
├── content/                    # MDX content files
│   ├── projects/
│   │   ├── project-1.mdx
│   │   ├── project-2.mdx
│   │   └── project-3.mdx
│   ├── experiences/
│   │   └── experience-1.mdx
│   └── posts/
│       └── hello-world.mdx
├── public/
│   └── images/                 # Static images
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind v4 + theme tokens
│   │   ├── layout.tsx          # Root layout + providers
│   │   ├── page.tsx            # Homepage (all sections)
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── blog/
│   │       ├── page.tsx
│   │       └── [slug]/
│   │           └── page.tsx
│   ├── components/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── theme-toggle.tsx
│   │   ├── sections/
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── skills.tsx
│   │   │   └── contact.tsx
│   │   ├── motion/
│   │   │   ├── fade-in.tsx
│   │   │   ├── stagger-container.tsx
│   │   │   └── scroll-reveal.tsx
│   │   ├── mdx/
│   │   │   └── mdx-components.tsx
│   │   └── ui/                 # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       └── ...
│   └── lib/
│       ├── utils.ts            # cn() helper
│       └── velite.ts           # Content query helpers
├── velite.config.ts            # Velite content schema
├── mdx-components.tsx          # Root MDX components
├── next.config.mjs             # Next.js config
├── tailwind.config.ts          # (minimal, Tailwind v4 CSS-first)
└── package.json
```

---

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | < 640px | Single column, stacked sections, hamburger menu |
| Tablet | 640px – 1024px | 2-column grids, kompak layout |
| Desktop | > 1024px | 3-column grids, full layout, side-by-side |

---

## Animasi yang Diterapkan

| Section | Animasi |
|---|---|
| **Hero** | Staggered text fade-in, gradient animation, floating particles |
| **About** | Scroll-reveal, counter animation, tech badge hover |
| **Projects** | Filter layout animation, card hover scale + glassmorphism |
| **Experience** | Scroll-driven timeline reveal |
| **Skills** | Staggered grid entrance, hover effects |
| **Contact** | Form entrance animation, gradient border animation |
| **Navbar** | Scroll-aware background blur, smooth theme transition |
| **Page Transitions** | AnimatePresence wrap untuk route changes |

---

## Verification Plan

### Automated Tests
```bash
# Build check
npm run build

# Lint check
npm run lint

# Dev server
npm run dev
```

### Manual Verification
- [ ] Dark mode / Light mode toggle bekerja dengan benar
- [ ] Semua section responsive di 3 breakpoint (mobile, tablet, desktop)
- [ ] Animasi berjalan smooth (60fps)
- [ ] MDX content di-render dengan benar
- [ ] Navigation links bekerja
- [ ] Contact form UI terlihat benar
- [ ] SEO metadata terisi
- [ ] Lighthouse performance score > 90
