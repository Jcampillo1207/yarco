"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const Section1 = () => {
  const t = useTranslations("HomePageSec1")
  return (
    <section className="w-full h-fit flex items-center justify-start px-5 md:px-7 lg:px-14 relative py-14 md:py-32 lg:py-44">
        <div className="w-full h-full overflow-hidden flex items-center justify-center absolute top-0 z-0 right-0">
            <video src="/truck.mp4" autoPlay={true} controls={false} muted loop className="w-full aspect-video object-cover hidden md:flex"/>
            <Image src={"/truck.png"} alt="Imagen" fill objectFit="cover" className="flex md:hidden"/>
        </div>
      <div className="w-full h-full overflow-hidden flex items-center justify-center bg-foreground/50 absolute top-0 z-10 right-0"></div>
      <div className="flex flex-col items-center md:items-start justify-start gap-y-7 z-20 max-w-4xl">
        <h1 className="text-white font-black text-3xl md:text-5xl text-center md:text-start">
          {t("title")}
        </h1>
        <div className="flex gap-x-3">
          <Button variant={"default"} size={"default"} asChild>
            <Link href={"/contacto"}>{t("button1")}</Link>
          </Button>
          <Button variant={"secondary"} size={"default"} asChild>
            <Link href={"/contacto"}>{t("button2")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
