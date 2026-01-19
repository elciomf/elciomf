"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Building2,
} from "lucide-react";
import { useI18n } from "@/locales/client";

const career = [
  {
    id: "vielitech",
    type: "work",
    company: "VieliTech",
    period: "2025 - 2026",
    skills: [
      "React 19",
      "Next.js",
      "Node.js",
      "Kafka",
      "Docker",
      "OR-Tools",
      "Redis",
      "TypeScript",
    ],
  },
  {
    id: "tuper",
    type: "work",
    company: "Grupo Tuper",
    period: "2024 - 2025",
    skills: [
      "Python",
      "RPA",
      "Progress 4GL",
      "ERP Datasul",
      "SQL",
    ],
  },
  {
    id: "datastream",
    type: "work",
    company: "Data Stream Sistemas",
    period: "2023 - 2024",
    skills: [
      "Python",
      "API Integration",
      "Webhooks",
      "ERP",
      "FTP",
    ],
  },
  {
    id: "udesc",
    type: "education",
    company: "UDESC",
    period: "2023 - 2026",
    skills: [
      "Software Engineering",
      "Databases",
      "Distributed Systems",
    ],
  },
  {
    id: "ifc",
    type: "education",
    company: "IFC",
    period: "2017 - 2019",
    skills: ["Web Dev", "Infrastructure", "Logic"],
  },
] as const;

export default function CareerPath() {
  const t = useI18n();

  return (
    <section className="py-24 px-6 md:px-20 lg:px-36 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-24 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="shrink-0"
        >
          <p className="uppercase font-extrabold tracking-widest text-emerald-500 text-sm mb-2">
            {t("careerPath.header.label")}
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight dark:text-white leading-none">
            {t("careerPath.header.title1")}
            <br />
            {t("careerPath.header.title2")}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-xl text-muted-foreground max-w-md leading-relaxed border-l-2 border-emerald-500/30 pl-6"
        >
          {t("careerPath.header.description")}
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-emerald-500/0 via-emerald-500/40 to-emerald-500/0 -translate-x-1/2" />

        <div className="space-y-16">
          {career.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
              }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row items-start md:items-center"
            >
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-2 border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black z-20 shadow-xl group">
                {item.type === "work" ? (
                  <Briefcase
                    size={18}
                    className="text-emerald-500"
                  />
                ) : (
                  <GraduationCap
                    size={18}
                    className="text-emerald-500"
                  />
                )}
              </div>

              <div
                className={`w-full md:w-1/2 pl-16 md:pl-0 ${idx % 2 === 0 ? "md:pr-20 md:text-right" : "md:ml-auto md:pl-20 md:text-left"}`}
              >
                <div className="flex flex-col gap-1 mb-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-500">
                    {item.period}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black dark:text-white tracking-tighter">
                    {t(`careerPath.items.${item.id}.title`)}
                  </h3>
                  <div
                    className={`flex items-center gap-2 text-lg font-bold text-foreground/80 ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                  >
                    <Building2 size={16} />
                    <span>{item.company}</span>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-1 text-muted-foreground text-sm mb-4 ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                >
                  <MapPin size={14} />
                  <span>
                    {t(
                      `careerPath.items.${item.id}.location`,
                    )}
                  </span>
                </div>

                <p
                  className={`text-muted-foreground leading-relaxed text-balance max-w-lg ${idx % 2 === 0 ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"}`}
                >
                  {t(
                    `careerPath.items.${item.id}.description`,
                  )}
                </p>

                <div
                  className={`flex flex-wrap gap-2 mt-6 ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                >
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-bold uppercase tracking-tighter px-2 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
