"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import { LogoVector } from "@/components/vectors/logovector";
import { Placa } from "../vectors/placa";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("Footer")
  return (
    <footer className="w-full h-fit flex flex-col items-center justify-start gap-y-14 bg-accent py-14 px-5 md:px-7 lg:px-14">
      <div className="w-full h-fit grid grid-cols-2 lg:grid-cols-12 items-stretch justify-center gap-y-16">
        <span className="w-full h-fit col-span-2 lg:col-span-4 flex flex-row lg:flex-col gap-y-4 justify-between">
          <div className="h-14 aspect-video py-3">
            <Link
              href={"https://www.humangroup.com.mx/"}
              target="_blank"
              className="relative h-full"
            >
              <LogoVector />
            </Link>
          </div>
          <div className="flex gap-x-3 items-center justify-start w-fit">
            <Button variant={"outline"} size={"icon"} asChild>
              <Link
                href={"https://www.instagram.com/quickshinemex/"}
                target="_blank"
              >
                <Instagram className="w-4 h-4 text-muted-foreground" />
              </Link>
            </Button>
            <Button variant={"outline"} size={"icon"} asChild>
              <Link
                href={"https://www.facebook.com/quickshinemex"}
                target="_blank"
              >
                <Facebook className="w-4 h-4 text-muted-foreground" />
              </Link>
            </Button>
            <Button variant={"outline"} size={"icon"} asChild>
              <Link
                href={"https://www.linkedin.com/company/quickshine/"}
                target="_blank"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground" />
              </Link>
            </Button>
          </div>
        </span>
        <span className="w-full h-fit flex flex-col col-span-1 lg:col-span-2 gap-y-4 text-muted-foreground text-sm">
          <h2 className="text-foreground text-base font-semibold">
            {t("Col1-1")}
          </h2>
          <Link
            href={"/limpiezacomercial"}
            className="hover:underline hover:text-foreground"
          >
            {t("Col1-2")}
          </Link>
          <Link
            href={"/limpieza"}
            className="hover:underline hover:text-foreground"
          >
            {t("Col1-3")}
          </Link>
          <Link
            href={"/fumigacion"}
            className="hover:underline hover:text-foreground"
          >
            {t("Col1-4")}
          </Link>
          <Link
            href={"/desinfeccion"}
            className="hover:underline hover:text-foreground"
          >
            {t("Col1-5")}
          </Link>
        </span>
        <span className="w-full h-fit flex flex-col col-span-1 lg:col-span-2 gap-y-4 text-muted-foreground text-sm">
          <h2 className="text-foreground text-base font-semibold">{t("Col2-1")}</h2>
          <Link
            href={"/nosotros#sucursales"}
            className="hover:underline hover:text-foreground"
          >
            {t("Col2-2")}
          </Link>
          <Link
            href={"/nosotros#sucursales"}
            className="hover:underline hover:text-foreground"
          >
            {t("Col2-3")}
          </Link>
          <Link
            href={"/nosotros#sucursales"}
            className="hover:underline hover:text-foreground"
          >
            {t("Col2-4")}
          </Link>
        </span>
        <span className="w-full h-fit flex flex-col col-span-1 lg:col-span-2 gap-y-4 text-muted-foreground text-sm">
          <h2 className="text-foreground text-base font-semibold">{t("Col3-1")}</h2>
          <Link
            href={"mailto:hola@quickshine.com.mx"}
            className="hover:underline hover:text-foreground"
          >
            {t("Col3-2")}
          </Link>
          <Link
            href={"tel:8717544123"}
            className="hover:underline hover:text-foreground"
          >
            {t("Col3-3")}
          </Link>
        </span>
        <span className="w-full h-fit flex flex-col col-span-1 lg:col-span-2 gap-y-4 text-muted-foreground text-sm">
          <h2 className="text-foreground text-base font-semibold">{t("Col4-1")}</h2>
          <Link
            href={"/blog"}
            className="hover:underline hover:text-foreground"
          >
            {t("Col4-2")}
          </Link>
          <Link
            href={"/trabajo"}
            className="hover:underline hover:text-foreground"
          >
            {t("Col4-3")}
          </Link>
          <Link
            href={"/nosotros"}
            className="hover:underline hover:text-foreground"
          >
            {t("Col4-4")}
          </Link>
        </span>
      </div>
      <div className="w-full h-fit pt-5 border-t-2 border-muted-foreground/20 flex flex-col items-center justify-center text-muted-foreground/60 text-sm">
        <p>&copy; YARCO, 2024. {t("Derechos")}</p>
        <Link
          href={"https://www.intelloai.com"}
          target="_blank"
          className="pt-5 pb-3 group"
        >
          <Placa />
        </Link>
      </div>
    </footer>
  );
};
