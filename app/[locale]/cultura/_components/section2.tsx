import { Title } from "@/components/mainstyles/text";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Section2 = () => {
  const t = useTranslations("AboutPageSec2");
  return (
    <section className="w-full h-fit flex flex-col gap-y-10 lg:gap-y-14 items-center justify-center px-5 md:px-7 lg:px-14  pb-10 md:pb-14">
      <Title className="lg:text-center">
        {t("title")}
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-fit gap-x-10 gap-y-7">
        <div className="w-full h-[300px] relative flex items-center justify-center rounded-lg overflow-hidden">
          <Image src={"/truck.png"} fill alt="Imagen" className="object-cover" />
        </div>
        <div className="w-full h-[300px] relative flex items-center justify-center rounded-lg overflow-hidden">
          <Image src={"/truck.png"} fill alt="Imagen" className="object-cover" />
        </div>
        <div className="w-full h-[300px] relative flex items-center justify-center rounded-lg overflow-hidden">
          <Image src={"/truck.png"} fill alt="Imagen" className="object-cover" />
        </div>
      </div>
    </section>
  );
};
