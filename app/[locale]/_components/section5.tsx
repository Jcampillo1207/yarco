import { OnTitle, TextPrimary, Title } from "@/components/mainstyles/text";
import { Aduana } from "@/components/vectors/aduana";
import { AF } from "@/components/vectors/af";
import { Raaf } from "@/components/vectors/raaf";
import { YARCO } from "@/components/vectors/yarco";
import { useTranslations } from "next-intl";

export const Section5 = () => {
  const t = useTranslations("HomePageSec5");
  return (
    <section className="w-full h-fit flex items-center justify-start px-5 md:px-7 lg:px-14 flex-col gap-y-10">
      <div className="w-full flex items-center justify-center flex-col gap-y-5 md:gap-y-7">
        <Title>{t("title")}</Title>
        <TextPrimary>
          Lorem ipsum dolor sit amet consectetur. Pulvinar nulla posuere neque
          odio sit consectetur sed montes urna. Dictum consequat scelerisque
          nibh ipsum. Amet quam urna nibh pretium nunc morbi. Integer turpis
          turpis a condimentum vitae.
        </TextPrimary>
      </div>
      <div className="w-full h-fit grid grid-cols-2 lg:grid-cols-4 items-center justify-center px-5 md:px-16 lg:px-28 gap-0 md:gap-10 lg:gap-14">
        <span className="w-full h-auto aspect-square flex items-center justify-center">
          <Aduana />
        </span>
        <span className="w-full h-auto aspect-square flex items-center justify-center">
          <AF />
        </span>
        <span className="w-full h-auto aspect-square flex items-center justify-center">
          <Raaf />
        </span>
        <span className="w-full h-auto aspect-square flex items-center justify-center">
          <YARCO />
        </span>
      </div>
    </section>
  );
};
