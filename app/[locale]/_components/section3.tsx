import { AnimCard, InfoCard } from "@/components/main_components/card";
import { useTranslations } from "next-intl";
import {
  OnText,
  OnTitle,
  TextPrimary,
  Title,
} from "@/components/mainstyles/text";
import { FileCheck2 } from "lucide-react";

export const Section3 = () => {
  const t = useTranslations("HomePageSec3");
  return (
    <section className="w-full h-fit flex items-center justify-start px-5 md:px-7 lg:px-14 flex-col gap-y-14 lg:gap-y-20">
      <div className="w-full flex items-center justify-center flex-col gap-y-5 md:gap-y-7">
        <Title>{t("title")}</Title>
        <TextPrimary>
          Lorem ipsum dolor sit amet consectetur. Pulvinar nulla posuere neque
          odio sit consectetur sed montes urna. Dictum consequat scelerisque
          nibh ipsum. Amet quam urna nibh pretium nunc morbi. Integer turpis
          turpis a condimentum vitae.
        </TextPrimary>
      </div>
      <div className="w-full h-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-stretch justify-stretch gap-10">
        <AnimCard>
            <div className="w-full h-[100px]">

            </div>
        </AnimCard>
      </div>
    </section>
  );
};
