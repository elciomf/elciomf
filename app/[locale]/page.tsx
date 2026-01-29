"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Footer } from "@/components/custom/footer";
import { Navbar } from "@/components/custom/navbar";
import {
  useCurrentLocale,
  useI18n,
} from "@/locales/client";
import { Download } from "lucide-react";
import { landings } from "@/constants/landings";
import { toast } from "sonner";

export default function Page() {
  const t = useI18n();
  const locale = useCurrentLocale();

  const LINKS = {
    pt: "https://docs.google.com/document/d/1CwmeEyfdAlsOfk7R3eZP5xz3NANHPr1goqwP_4gW3e4/export?format=pdf",
    en: "https://docs.google.com/document/d/11rGiSb_rr0vr_6kZQvwKjj5gjpJNsuBruPuTDnjTYgw/export?format=pdf",
    es: "https://docs.google.com/document/d/1bEbhl-AqafqYb8KG3wMgTGyKRbEP8_uK49VADiZ6ulY/export?format=pdf",
  };

  const resume =
    LINKS[locale as keyof typeof LINKS] || LINKS.en;

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();

    toast.success(t("home.downloadingMessage"));

    const link = document.createElement("a");
    link.href = resume;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen font-inter p-6 sm:p-12 md:p-20 flex items-center justify-center select-none overflow-hidden relative">
        <div className="relative z-10 w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="absolute -right-20 -top-40 sm:-right-10 sm:-top-20 z-0 opacity-40 lg:opacity-100"
          >
            <Image
              src="/images/image-removebg-preview.png"
              alt=""
              width={550}
              height={550}
              className="pointer-events-none opacity-30 mix-blend-luminosity w-75 sm:w-112.5 lg:w-137.5"
              priority
              quality={100}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 md:space-y-8 relative z-10"
          >
            <p className="text-emerald-500 font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm md:text-base">
              {t("home.tagline")}
            </p>

            <h1 className="text-[13vw] sm:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] font-inter uppercase">
              ÉLCIO M.
              <br />
              <span className="text-emerald-500">
                FERNANDES_
              </span>
            </h1>

            <div className="flex flex-col md:flex-row md:items-end justify-between mt-4 sm:mt-8 gap-8 md:gap-6">
              <div className="flex flex-col space-y-6 w-full max-w-md">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-light tracking-tight text-muted-foreground font-fira">
                  {t("home.description.part1")}
                  <span className="text-foreground font-bold italic font-inter">
                    {t("home.description.highlight")}
                  </span>{" "}
                  {t("home.description.part2")}
                </h2>

                <motion.a
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={handleDownloadClick}
                  style={{ cursor: "pointer" }}
                  className="flex items-center justify-center gap-3 w-full sm:w-fit px-8 py-4 bg-transparent border-2 border-emerald-500 text-emerald-500 font-bold font-inter rounded-xl hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-lg shadow-emerald-500/10"
                >
                  <Download size={20} />
                  {t("home.downloadCV")}
                </motion.a>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 self-start md:self-auto"
              >
                <div className="h-0.5 w-8 sm:w-12 bg-emerald-500" />
                <p className="text-[10px] sm:text-sm font-inter text-muted-foreground uppercase tracking-widest leading-tight">
                  {t("home.role")} <br />
                  {t("home.focus")}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {landings.map((landing, index) => (
        <motion.div
          key={index}
          id={landing.ref}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="min-h-screen flex items-start justify-center"
        >
          <landing.comp />
        </motion.div>
      ))}

      <Footer />
    </>
  );
}
