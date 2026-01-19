"use client";

import { motion } from "framer-motion";
import {
  Database,
  Cpu,
  Globe2,
  Terminal,
} from "lucide-react";
import { useI18n } from "@/locales/client";

const techGroups = [
  {
    key: "frontend",
    icon: <Globe2 className="text-emerald-500" size={20} />,
    skills: [
      "React.js",
      "Next.js",
      "Tailwindcss",
      "Shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    key: "backend",
    icon: (
      <Terminal className="text-emerald-500" size={20} />
    ),
    skills: [
      "Node.js",
      "Nest.js",
      "Go",
      "Java",
      "Spring Boot",
      "Express.js",
    ],
  },
  {
    key: "database",
    icon: (
      <Database className="text-emerald-500" size={20} />
    ),
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Supabase",
      "Firebase",
    ],
  },
  {
    key: "devops",
    icon: <Cpu className="text-emerald-500" size={20} />,
    skills: [
      "Docker",
      "Kafka",
      "RabbitMQ",
      "Git",
      "Vercel",
      "Resend",
    ],
  },
] as const;

export default function TechStack() {
  const t = useI18n();

  return (
    <section className="py-24 px-6 md:px-20 lg:px-36 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-20 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="shrink-0"
        >
          <p className="uppercase font-extrabold tracking-widest text-emerald-500 text-sm mb-2">
            {t("techStack.label")}
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight dark:text-white leading-none">
            {t("techStack.title.part1")}
            <br />
            {t("techStack.title.part2")}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-xl text-muted-foreground max-w-md leading-relaxed border-l-2 border-emerald-500/30 pl-6"
        >
          {t("techStack.description")}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techGroups.map((group, idx) => (
          <motion.div
            key={group.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-[2rem] border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-md hover:border-emerald-500/50 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex flex-col h-full">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    {group.icon}
                    <h3 className="text-2xl font-bold tracking-tight">
                      {t(
                        `techStack.categories.${group.key}.name`,
                      )}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                    {t(
                      `techStack.categories.${group.key}.desc`,
                    )}
                  </p>
                </div>
                <span className="text-4xl font-black text-neutral-200 dark:text-neutral-800 group-hover:text-emerald-500/20 transition-colors">
                  0{idx + 1}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 text-sm font-medium bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm group-hover:border-emerald-500/30 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
