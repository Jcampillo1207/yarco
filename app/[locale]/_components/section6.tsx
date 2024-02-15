import { OnTitle, TextPrimary, Title } from "@/components/mainstyles/text";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Section6 = () => {
  const t = useTranslations("HomePageSec6");
  return (
    <section className="w-full h-fit items-stretch justify-start px-5 md:px-7 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-y-7 gap-x-7">
      <div className="w-full h-[450px] flex items-end justify-center relative">
        <Image
          src={"/single.png"}
          fill
          className="object-contain h-full"
          alt="Imagen Persona"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-between items-center lg:items-start py-0 lg:py-10 gap-y-10">
        <div className="w-full h-fit gap-y-5 flex flex-col">
          <Title className="text-center lg:text-start">{t("title")}</Title>
          <TextPrimary className="text-center lg:text-start font-medium">
            {t("description")}
          </TextPrimary>
        </div>
        <Button variant={"default"} size={"default"}>
            {t("button")}
        </Button>
      </div>
    </section>
  );
};
