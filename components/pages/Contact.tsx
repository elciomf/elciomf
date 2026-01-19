"use client";

import Link from "next/link";
import { Label } from "../ui/label";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useI18n } from "@/locales/client";
import {
  Github,
  Linkedin,
  Mail,
  Map,
  Phone,
  SendHorizontal,
} from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { sendEmail } from "@/app/actions/email";

export default function Contact() {
  const t = useI18n();
  const [isPending, setIsPending] = useState(false);

  const clipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(t("contact.info.copyAlert") + text);
  };

  // Função para lidar com o envio do formulário
  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    setIsPending(true);

    const formData = new FormData(event.currentTarget);
    const result = await sendEmail(formData);

    if (result.success) {
      toast.success("Mensagem enviada com sucesso!");
      (event.target as HTMLFormElement).reset(); // Limpa o formulário
    } else {
      toast.error("Erro ao enviar: " + result.error);
    }

    setIsPending(false);
  }

  const contactList = [
    {
      icon: <Mail size={20} />,
      label: t("contact.info.email"),
      value: "elciomf@proton.me",
    },
    {
      icon: <Phone size={20} />,
      label: t("contact.info.phone"),
      value: "+55 (47) 99773-3326",
    },
    {
      icon: <Map size={20} />,
      label: t("contact.info.location"),
      value: t("contact.info.locationValue"),
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-20 px-6 md:px-20 lg:px-36 gap-16">
      <div className="flex flex-col lg:flex-row items-start lg:items-center text-start gap-8 lg:gap-32 max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="shrink-0"
        >
          <p className="uppercase font-extrabold font-inter tracking-widest text-emerald-500 text-sm mb-2">
            {t("contact.header.label")}
          </p>
          <h1 className="text-5xl font-fira md:text-7xl font-black tracking-tight dark:text-white leading-none">
            {t("contact.header.title1")} <br />{" "}
            {t("contact.header.title2")}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-fira text-muted-foreground leading-relaxed max-w-xl"
        >
          {t("contact.header.description")}
        </motion.p>
      </div>
      <div className="font-inter grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-10"
        >
          <div>
            <h2 className="text-2xl font-bold mb-6 italic underline decoration-emerald-500/30 underline-offset-8">
              {t("contact.info.title")}
            </h2>
            <ul className="space-y-6">
              {contactList.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 group"
                >
                  <button
                    type="button"
                    title="Click to copy"
                    className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 cursor-copy active:scale-90"
                    onClick={() => clipboard(item.value)}
                  >
                    {item.icon}
                  </button>
                  <div className="flex flex-col">
                    <p className="text-sm text-muted-foreground font-medium">
                      {item.label}
                    </p>
                    <button
                      onClick={() => clipboard(item.value)}
                      className="text-lg font-semibold cursor-copy hover:text-emerald-500 transition-colors text-left"
                    >
                      {item.value}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">
              {t("contact.social")}
            </h2>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/elciomf/"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-xl hover:bg-emerald-500 hover:text-white transition-all"
                >
                  <Linkedin size={20} />
                </Button>
              </Link>
              <Link
                href="https://github.com/elciomf"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-xl hover:bg-emerald-500 hover:text-white transition-all"
                >
                  <Github size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-inter bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  {t("contact.form.name.label")}
                </Label>
                <Input
                  id="name"
                  name="name" // Necessário para o FormData
                  required
                  placeholder={t(
                    "contact.form.name.placeholder",
                  )}
                  className="bg-white dark:bg-neutral-950"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">
                  {t("contact.form.email.label")}
                </Label>
                <Input
                  id="email"
                  name="email" // Necessário para o FormData
                  type="email"
                  required
                  placeholder={t(
                    "contact.form.email.placeholder",
                  )}
                  className="bg-white dark:bg-neutral-950"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">
                {t("contact.form.subject.label")}
              </Label>
              <Input
                id="subject"
                name="subject" // Necessário para o FormData
                required
                placeholder={t(
                  "contact.form.subject.placeholder",
                )}
                className="bg-white dark:bg-neutral-950"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">
                {t("contact.form.message.label")}
              </Label>
              <Textarea
                id="message"
                name="message" // Necessário para o FormData
                required
                placeholder={t(
                  "contact.form.message.placeholder",
                )}
                className="min-h-37.5 bg-white dark:bg-neutral-950 resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-6 rounded-xl gap-2 transition-all active:scale-95 shadow-lg shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "..." : t("contact.form.submit")}
              <SendHorizontal size={18} />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
