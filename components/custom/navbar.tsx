"use client";

import {
  motion,
  Variants,
  useSpring,
  useScroll,
} from "framer-motion";
import { Menu, ChevronRight } from "lucide-react";

import { landings } from "@/constants/landings";
import confetti from "canvas-confetti";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme";
import { LanguageSwitcher } from "../language";

export function Navbar() {
  const { scrollYProgress } = useScroll();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleClick = () => {
    const end = Date.now() + 3 * 1000;
    const colors = ["#10b981", "#f8deb1"];
    const frame = () => {
      if (Date.now() > end) return;
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });
      requestAnimationFrame(frame);
    };
    frame();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/50 dark:border-neutral-800/50 bg-background/80 backdrop-blur-md select-none">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6 md:px-20 lg:px-36">
        <p
          onClick={handleClick}
          className="flex items-center font-inter font-bold text-xl tracking-tighter group cursor-pointer"
        >
          <span className="text-foreground">@elciomf</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "anticipate",
            }}
            className="inline-block w-0.5 h-6 bg-emerald-500 ml-1 self-center"
          />
        </p>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-x-8">
          {landings.map((landing, index) => (
            <li key={index}>
              <a
                href={`#${landing.ref}`}
                className="text-xs font-inter font-medium uppercase tracking-widest text-muted-foreground hover:text-emerald-500 transition-colors"
              >
                {landing.name}
              </a>
            </li>
          ))}
        </ul>

        <ul className="hidden lg:flex items-center space-x-4">
          <ThemeToggle />
          <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-800" />
          <LanguageSwitcher />
        </ul>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="h-6 w-6 text-emerald-500" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex flex-col w-75 sm:w-100 p-0 border-l border-neutral-200 dark:border-neutral-800"
            >
              <SheetHeader className="p-6 border-b border-neutral-200 dark:border-neutral-800">
                <SheetTitle className="text-left font-inter font-bold tracking-tighter text-xl">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto">
                <motion.ul
                  animate="show"
                  initial="hidden"
                  variants={containerVariants}
                  className="flex flex-col p-4"
                >
                  {landings.map((landing, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="mb-2"
                    >
                      <SheetClose asChild>
                        <a
                          href={`#${landing.ref}`}
                          className="flex items-center justify-between p-4 text-sm font-medium rounded-xl transition-all hover:bg-emerald-500/10 hover:text-emerald-500 group font-inter uppercase tracking-widest"
                        >
                          {landing.name}
                          <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </a>
                      </SheetClose>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <div className="mt-auto p-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
                <p className="text-[10px] font-inter uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Settings
                </p>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div className="flex justify-start">
                    <ThemeToggle />
                  </div>
                  <div className="col-span-2 flex justify-end font-fira">
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500"
        style={{ scaleX, originX: 0 }}
      />
    </header>
  );
}
