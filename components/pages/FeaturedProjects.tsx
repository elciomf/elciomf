"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Github, Code2 } from "lucide-react";
import { useI18n } from "@/locales/client";

const projects = [
  {
    id: "cryptochronicler",
    title: "Cryptochronicler",
    statusKey: "inDevelopment",
    image: "/images/cryptochronicler.jpg",
    tags: [
      "Python",
      "Go",
      "Redis",
      "Java",
      "MongoDB",
      "Next.js",
    ],
    github: "https://github.com/elciomf/Cryptochronicler",
  },
  {
    id: "orchestrium",
    title: "Orchestrium",
    statusKey: "inDevelopment",
    image: "/images/orchestrium.jpg",
    tags: [
      "Python",
      "Docker",
      "RPA",
      "Automation",
      "Next.js",
    ],
    github: "https://github.com/elciomf/Orchestrium",
  },
] as const;

export default function FeaturedProjects() {
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
            {t("featuredProjects.header.label")}
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight dark:text-white leading-none">
            {t("featuredProjects.header.title1")}
            <br />
            {t("featuredProjects.header.title2")}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-xl text-muted-foreground max-w-md leading-relaxed border-l-2 border-emerald-500/30 pl-6"
        >
          {t("featuredProjects.header.description")}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-16">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 relative aspect-video overflow-hidden rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-2xl">
              <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image
                fill
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            </div>

            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-500 font-mono text-sm">
                    <Code2 size={16} />
                    <span>Project 0{idx + 1}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-500 uppercase tracking-widest animate-pulse">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    {t(
                      `featuredProjects.status.${project.statusKey}`,
                    )}
                  </div>
                </div>

                <h3 className="text-4xl md:text-5xl font-black tracking-tighter group-hover:text-emerald-500 transition-colors">
                  {project.title.toUpperCase()}
                </h3>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(
                  `featuredProjects.items.${project.id}.description`,
                )}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg text-xs font-bold text-neutral-600 dark:text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <Link href={project.github} target="_blank">
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl px-6 gap-2 font-bold active:scale-95 transition-all shadow-lg shadow-emerald-500/20">
                    <Github size={18} />
                    {t(
                      "featuredProjects.buttons.sourceCode",
                    )}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-24 flex justify-center"
      >
        <Link
          href="https://github.com/elciomf"
          target="_blank"
        >
          <Button
            variant="ghost"
            className="text-emerald-500 font-black font-fira hover:bg-emerald-500/10 text-xl tracking-tighter gap-3 p-8 rounded-2xl border-2 border-dashed border-emerald-500/20"
          >
            {t("featuredProjects.buttons.viewAll")}
            <Github size={24} />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
