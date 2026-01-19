"use client";

import {
  useChangeLocale,
  useCurrentLocale,
} from "@/locales/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <Select
      value={locale}
      onValueChange={(value) =>
        changeLocale(value as "en" | "pt" | "es")
      }
    >
      <SelectTrigger className="w-full bg-transparent border-neutral-200 dark:border-neutral-800 focus:ring-0">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-emerald-500" />
          <SelectValue placeholder="Language" />
        </div>
      </SelectTrigger>
      <SelectContent>
        {[
          { name: "English", value: "en" },
          { name: "Español", value: "es" },
          { name: "Português", value: "pt" },
        ].map((lang) => (
          <SelectItem
            key={lang.value}
            value={lang.value}
            className="font-fira"
          >
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
