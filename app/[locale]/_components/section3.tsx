import { AnimCard, InfoCard } from "@/components/main_components/card";
import { useTranslations } from "next-intl";
import {
  OnText,
  OnTitle,
  TextPrimary,
  Title,
} from "@/components/mainstyles/text";
import { FileCheck2 } from "lucide-react";
import Image from "next/image";

export const Section3 = () => {
  const t = useTranslations("HomePageSec3");
  return (
    <section className="w-full h-fit flex items-center justify-start px-5 md:px-7 lg:px-14 flex-col gap-y-14 lg:gap-y-20">
      <div className="w-full flex items-center justify-center flex-col gap-y-5 md:gap-y-7">
        <Title>{t("title")}</Title>
        <TextPrimary>
          {t("text")}
        </TextPrimary>
      </div>
      <div className="w-full h-[200px] md:h-[200px] lg:h-[300px] xl:h-[350px] flex items-center justify-center relative overflow-hidden rounded-2xl">
        <Image src={"/Foto.png"} alt="Image" fill className="object-cover w-full"/>
      </div>
    </section>
  );
};
