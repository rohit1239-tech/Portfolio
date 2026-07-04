"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Code2, GitBranch, Link2, Mail, Menu, Moon, Phone, Send, Sparkles, SunMedium, Terminal, Trophy, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "SQL"],
  },
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Django", "Django REST Framework", "Celery", "RabbitMQ"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "AI",
    items: ["OpenAI API", "Gemini API", "LangChain", "ChromaDB", "RAG", "Embeddings"],
  },
  {
    title: "Authentication",
    items: ["JWT", "OAuth 2.0", "Session Authentication"],
  },
  {
    title: "DevOps",
    items: ["Docker", "Git", "GitHub", "Postman"],
  },
  {
    title: "Computer Science",
    items: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Low Level Design"],
  },
];

const projects = [
  {
    title: "Preplate",
    summary:
      "Designed a scheduled food-ordering platform replacing manual WhatsApp ordering for vendors and customers.",
    tech: ["Django", "PostgreSQL", "Redis", "RabbitMQ", "Celery", "Next.js"],
    highlights: [
      "OTP authentication",
      "RBAC",
      "Cart management",
      "Order lifecycle state machine",
      "PIN verification",
      "Django Channels",
      "WebSockets",
      "Async processing",
    ],
    impact: "Supports vendors processing 50+ orders/day.",
    github: "https://github.com/rohit1239-tech/preplate",
    demo: null,
  },
  {
    title: "ChatApp",
    summary:
      "Built a real-time chat platform with direct messaging, role-based access, and resilient async workflows.",
    tech: ["Python", "Django", "DRF", "JWT", "WebSockets", "Celery", "Docker", "PostgreSQL"],
    highlights: [
      "JWT Authentication",
      "Email OTP Verification",
      "Presence Tracking",
      "WebSockets",
      "Concurrent Rooms",
      "Async Processing",
    ],
    impact: "Designed for reliable multi-room collaboration at scale.",
    github: "https://github.com/rohit1239-tech/realtime-chat-app",
    demo: null,
  },
];

const achievements = [
  { value: "650+", label: "DSA Problems Solved", badge: "Across Platforms", rank: "Consistent", href: null },
  { value: "1850+", label: "LeetCode", badge: "Knight", rank: "Rating", href: "https://leetcode.com/u/rohit1239-tech/" },
  { value: "1600+", label: "CodeChef", badge: "3★", rank: "Rating", href: "https://www.codechef.com/users/rohit1239tech" },
  { value: "1300+", label: "Codeforces", badge: "Pupil", rank: "Rating", href: "https://codeforces.com/profile/rohit1239-tech" },
];

const leadershipItems = [
  {
    title: "Team Lead",
    body: "Led teams of 5 and 6 members in the PR and DFP academic projects, managing planning, execution, task allocation, and project deliverables while fostering collaboration and accountability.",
  },
  {
    title: "Core Member, Astronomy and Physics Society",
    body: "Contributed to organizing astronomy and physics events and workshops.",
  },
];

function RotatingText() {
  const phrases = [
    "backend systems",
    "full-stack applications",
    "AI-powered software",
  ];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-blue-500">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentPhrase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {phrases[currentPhrase]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-sm font-medium uppercase tracking-[0.32em] text-blue-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">{title}</h2>
      <p className="text-base leading-8 text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
}

export function PortfolioPage() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const current = height > 0 ? (window.scrollY / height) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, current)));
      setShowBackToTop(window.scrollY > 600);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.14),_transparent_28%),linear-gradient(135deg,_#ffffff_0%,_#f8fafc_100%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_30%),linear-gradient(135deg,_#05070d_0%,_#09090b_100%)]" />
    );
  }

  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.14),_transparent_28%),linear-gradient(135deg,_#ffffff_0%,_#f8fafc_100%)] text-zinc-900 transition-colors duration-500 dark:bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_30%),linear-gradient(135deg,_#05070d_0%,_#09090b_100%)] dark:text-zinc-100">
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
        <div className="h-full rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/60 bg-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="#home" className="flex items-center gap-3 text-sm font-semibold tracking-[0.28em] text-zinc-900 dark:text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500">
              <Code2 className="h-4 w-4" />
            </span>
            ROHIT YENGANTIWAR
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300 md:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-blue-500">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="p-2 md:hidden" aria-label="Toggle menu">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="relative mx-auto flex max-w-7xl flex-col gap-16 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-[-8%] top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute bottom-0 right-[-8%] h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                <Sparkles className="h-4 w-4" />
                Software Engineer · Building products end-to-end
              </div>
              <div className="space-y-5">
                <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-7xl dark:text-white">
                  Rohit Yengantiwar
                </h1>
                <p className="text-2xl font-medium text-zinc-700 sm:text-3xl dark:text-zinc-300">
                  Building scalable <RotatingText />
                </p>
                <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                  I design dependable systems with strong product intuition, clean architecture, and pragmatic execution for ambitious teams.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild className="hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-300">
                    <Link href="#projects">View Projects</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" asChild className="hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-300">
                    <Link href="/Rohit_Yengantiwar_Resume.pdf" target="_blank" rel="noreferrer">Download Resume</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" asChild className="hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-300">
                    <Link href="https://github.com/rohit1239-tech" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      <GitBranch className="h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" asChild className="hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-300">
                    <Link href="https://www.linkedin.com/in/rohit-yengantiwar-52b78737b/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      <Link2 className="h-4 w-4" /> LinkedIn
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative flex justify-center">
              {/* Glow backdrop */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/40 via-cyan-400/20 to-transparent blur-3xl" />
              {/* Photo frame */}
              <div className="relative">
                {/* Spinning gradient ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 opacity-70 blur-sm" />
                <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-white/20 shadow-[0_32px_80px_rgba(59,130,246,0.35)] sm:h-80 sm:w-80">
                  <img
                    src="/rohit.jpg"
                    alt="Rohit Yengantiwar"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-blue-500/30 bg-white/90 px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-lg backdrop-blur dark:bg-zinc-900/90 dark:text-blue-300 whitespace-nowrap"
                >
                  🎓 IIIT Jabalpur · B.Tech
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 rounded-[32px] border border-white/60 bg-white/70 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/70 lg:grid-cols-[0.95fr_0.85fr] lg:p-12">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} className="space-y-6">
              <SectionHeading eyebrow="About" title="" description="Software Engineering enthusiast and undergraduate student at IIIT Jabalpur, passionate about building scalable backend systems, distributed applications, and AI-powered products." />
              <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                I primarily work with Python, Django, PostgreSQL, Redis, Celery, REST APIs, and WebSockets to design reliable and high-performance applications. I enjoy transforming complex requirements into clean, maintainable systems while focusing on scalability, performance, and user experience.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} className="rounded-[24px] border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-transparent p-8">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">Education</p>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">Indian Institute of Information Technology, Jabalpur</h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">Bachelor of Technology</p>
                </div>
                <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800" />
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Aug 2023 – May 2027</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <SectionHeading eyebrow="Skills" title="Capabilities built for modern product teams" description="A focused toolkit spanning backend systems, intelligent products, databases, and developer workflows." />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {skillGroups.map((group, index) => (
                <motion.div key={group.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.04 }} className="rounded-[24px] border border-white/70 bg-white/70 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] backdrop-blur-lg dark:border-white/10 dark:bg-zinc-900/70">
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-blue-500/15 bg-blue-500/10 px-3 py-1 text-sm text-zinc-700 transition hover:-translate-y-0.5 hover:bg-blue-500/20 dark:text-zinc-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <SectionHeading eyebrow="Projects" title="Selected work with real product impact" description="Each project reflects thoughtful architecture, clean interfaces, and systems built to scale." />
            <div className="grid gap-8 xl:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article key={project.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06 }} className="group overflow-hidden rounded-[28px] border border-white/70 bg-white/70 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/70">
                  <div className="h-36 bg-[linear-gradient(120deg,_rgba(59,130,246,0.25),_rgba(56,189,248,0.2),_rgba(15,23,42,0.1))] p-6">
                    <div className="flex h-full items-end justify-between rounded-[20px] border border-white/20 bg-zinc-950/80 p-4 text-sm text-zinc-200">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-blue-300">Product</p>
                        <h3 className="mt-1 text-xl font-semibold text-white">{project.title}</h3>
                      </div>
                      <div className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-blue-200">{project.tech[0]}</div>
                    </div>
                  </div>
                  <div className="space-y-6 p-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-300">{tech}</span>
                      ))}
                    </div>
                    <p className="text-base leading-8 text-zinc-600 dark:text-zinc-400">{project.summary}</p>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.26em] text-zinc-500 dark:text-zinc-400">Highlights</h4>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                        {project.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-blue-500/15 bg-blue-500/10 p-4 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="font-semibold text-blue-600 dark:text-blue-300">Impact:</span> {project.impact}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild>
                        <Link href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                          <GitBranch className="h-4 w-4" /> View on GitHub
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/70 bg-white/70 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/70 lg:p-10">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading eyebrow="Achievements" title="Consistent progress, measurable impact" description="Competitive programming and disciplined engineering practice have shaped a strong foundation for product development." />
              <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-600 dark:text-blue-300">Problem solving with rigor</div>
            </div>
            <div className="grid gap-6 lg:grid-cols-4">
              {achievements.map((item, index) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.05 }} className="group rounded-[24px] border border-white/60 bg-gradient-to-br from-white/80 to-blue-500/5 p-6 shadow-inner dark:border-white/10 dark:from-zinc-950/80 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] hover:-translate-y-1">
                  <div className="mb-4 flex items-center justify-between">
                    <Trophy className="h-5 w-5 text-blue-500" />
                    <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">{item.badge}</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-3xl font-semibold text-zinc-950 dark:text-white">{item.value}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.label}</p>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-300">{item.rank}</p>
                    {item.href && (
                      <Link href={item.href} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-xs text-blue-500 hover:text-blue-400 transition-colors">
                        View Profile <Link2 className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        <section id="leadership" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading eyebrow="Leadership" title="Leading teams and creating impact" description="I enjoy balancing execution, communication, and ownership in collaborative environments." />
            <div className="space-y-5">
              {leadershipItems.map((item, index) => (
                <motion.div key={item.title} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06 }} className="rounded-[24px] border border-white/70 bg-white/70 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/70">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                      <Send className="h-4 w-4" />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-400">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[32px] border border-white/70 bg-white/70 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/70 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="space-y-6">
              <SectionHeading eyebrow="Contact" title="Let’s build something ambitious" description="I’m actively exploring internships and opportunities where I can contribute to high-impact engineering teams." />
              <div className="space-y-4 text-base text-zinc-600 dark:text-zinc-400">
                <a href="tel:+918306880949" className="flex items-center gap-3 transition hover:text-blue-500">
                  <Phone className="h-5 w-5 text-blue-500" /> +91-8306880949
                </a>
                <a href="mailto:yengantiwarrohit1239@gmail.com" className="flex items-center gap-3 transition hover:text-blue-500">
                  <Mail className="h-5 w-5 text-blue-500" /> yengantiwarrohit1239@gmail.com
                </a>
                <a href="https://github.com/rohit1239-tech" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-blue-500">
                  <GitBranch className="h-5 w-5 text-blue-500" /> github.com/rohit1239-tech
                </a>
                <a href="https://www.linkedin.com/in/rohit-yengantiwar-52b78737b/" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-blue-500">
                  <Link2 className="h-5 w-5 text-blue-500" /> linkedin.com/in/rohit-yengantiwar
                </a>
                <a href="https://leetcode.com/u/rohit1239-tech/" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-blue-500">
                  <Code2 className="h-5 w-5 text-blue-500" /> LeetCode — rohit1239-tech
                </a>
                <a href="https://codeforces.com/profile/rohit1239-tech" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-blue-500">
                  <Trophy className="h-5 w-5 text-blue-500" /> Codeforces — rohit1239-tech
                </a>
                <a href="https://www.codechef.com/users/rohit1239tech" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-blue-500">
                  <Zap className="h-5 w-5 text-blue-500" /> CodeChef — rohit1239tech
                </a>
              </div>
            </motion.div>
            <motion.form initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="space-y-4 rounded-[24px] border border-white/70 bg-zinc-950/95 p-6 text-white dark:border-white/10">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-zinc-300">
                  <span>Name</span>
                  <input className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none ring-0 transition focus:border-blue-500" placeholder="Your name" />
                </label>
                <label className="space-y-2 text-sm text-zinc-300">
                  <span>Email</span>
                  <input type="email" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none transition focus:border-blue-500" placeholder="you@example.com" />
                </label>
              </div>
              <label className="space-y-2 text-sm text-zinc-300">
                <span>Message</span>
                <textarea rows={5} className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none transition focus:border-blue-500" placeholder="Tell me about the opportunity..." />
              </label>
              <Button className="w-full justify-center">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/70 bg-white/60 py-8 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-center text-sm text-zinc-600 dark:text-zinc-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Designed & Built by Rohit Yengantiwar</p>
          <p>Built using Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
        </div>
      </footer>

      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`fixed bottom-6 right-6 z-50 rounded-full border border-blue-500/20 bg-white/80 p-3 text-blue-600 shadow-lg backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white dark:bg-zinc-900/80 dark:text-blue-300 ${showBackToTop ? "opacity-100" : "pointer-events-none opacity-0"}`} aria-label="Back to top">
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
