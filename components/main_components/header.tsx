"use client";

import { Button } from "../ui/button";
import { LogoVector } from "../vectors/logovector";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Facebook, Instagram, Linkedin, Menu } from "lucide-react";
import Link from "next/link";
import LocaleSwitcher from "./langswitcher";

export const Header = () => {
  const router = useRouter();
  const t = useTranslations("Header");
  return (
    <header className="w-full h-16 px-5 md:px-7 lg:px-14 py-4 flex items-center justify-between bg-white shadow sticky top-0 z-40">
      <div
        className="h-full w-auto cursor-pointer"
        onClick={() => router.push("/")}
      >
        <LogoVector />
      </div>
      <div className="flex gap-x-3 items-center">
        <div className="w-fit h-fit gap-x-2 hidden lg:flex">
          <Button
            variant={"ghost"}
            size={"default"}
            onClick={() => router.push("/")}
            className="text-muted-foreground text-base lg:hidden xl:flex"
          >
            {t("button1")}
          </Button>
          <Button
            variant={"ghost"}
            size={"default"}
            onClick={() => router.push("/prods")}
            className="text-muted-foreground text-base"
          >
            {t("button2")}
          </Button>
          <Button
            variant={"ghost"}
            size={"default"}
            onClick={() => router.push("/cultura")}
            className="text-muted-foreground text-base"
          >
            {t("button3")}
          </Button>
          <Button
            variant={"link"}
            size={"default"}
            onClick={() => router.push("/track")}
            className="text-base"
          >
            {t("button5")}
          </Button>
          <Button
            variant={"default"}
            size={"default"}
            onClick={() => router.push("/contacto")}
            className="text-base"
          >
            {t("button6")}
          </Button>
        </div>
        <LocaleSwitcher />
        <Sheet>
          <SheetTrigger className="flex lg:hidden" asChild>
            <Button variant={"outline"} size={"icon"}>
              <Menu className="w-4 h-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="pb-10">
            <SheetHeader></SheetHeader>
            <div className="flex flex-col items-start justify-between gap-y-3 py-7 h-full">
              <div className="flex flex-col items-start gap-y-3 w-full">
                <Button
                  variant={"ghost"}
                  size={"default"}
                  onClick={() => router.push("/")}
                  className="text-muted-foreground text-base w-full justify-start"
                >
                  {t("button1")}
                </Button>
                <Button
                  variant={"ghost"}
                  size={"default"}
                  onClick={() => router.push("/prods")}
                  className="text-muted-foreground text-base w-full justify-start"
                >
                  {t("button2")}
                </Button>
                <Button
                  variant={"ghost"}
                  size={"default"}
                  onClick={() => router.push("/cultura")}
                  className="text-muted-foreground text-base w-full justify-start"
                >
                  {t("button3")}
                </Button>
                <Button
                  variant={"link"}
                  size={"default"}
                  onClick={() => router.push("/track")}
                  className="text-base w-full justify-start"
                >
                  {t("button5")}
                </Button>
                <Button
                  variant={"default"}
                  size={"default"}
                  onClick={() => router.push("/contacto")}
                  className="text-base w-full justify-start"
                >
                  {t("button6")}
                </Button>
              </div>
              <div className="w-full flex flex-col gap-y-5 items-start justify-start">
                <p className="text-primary">{t("follow")}:</p>
                <div className="w-full flex gap-x-3 items-center justify-start">
                  <Button variant={"outline"} size={"icon"} asChild>
                    <Link href="/insta" target="_blank">
                      <Instagram className="w-5 h-5 text-muted-foreground" />
                    </Link>
                  </Button>
                  <Button variant={"outline"} size={"icon"} asChild>
                    <Link href="/insta" target="_blank">
                      <Facebook className="w-5 h-5 text-muted-foreground" />
                    </Link>
                  </Button>
                  <Button variant={"outline"} size={"icon"} asChild>
                    <Link href="/insta" target="_blank">
                      <Linkedin className="w-5 h-5 text-muted-foreground" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
