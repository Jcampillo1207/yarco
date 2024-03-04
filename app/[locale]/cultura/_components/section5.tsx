"use client";

import { TextPrimary, Title } from "@/components/mainstyles/text";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export const Section5 = () => {
  const router = useRouter();
  const t = useTranslations("AboutPageSec5");
  return (
    <section className="w-full h-fit items-stretch justify-start px-5 md:px-7 lg:px-14 gap-y-14 lg:gap-y-20 grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-20">
      <div className="w-full h-full flex items-center md:items-start justify-between flex-col gap-y-14">
        <div className="w-full h-fit items-start justify-start flex flex-col gap-y-5 md:gap-y-10">
          <Title className="text-center md:text-start">
            {t("title")}
          </Title>
          <TextPrimary className="text-center md:text-start">
            {t("text")}
          </TextPrimary>
        </div>
      </div>
      <div className="w-full h-[400px] relative rounded-lg overflow-hidden flex items-center justify-center">
        <Image src={"/d.png"} alt="Truck Image" fill objectFit="cover" />
      </div>
    </section>
  );
};
