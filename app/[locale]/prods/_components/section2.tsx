import { DynamicCard } from "@/components/main_components/card";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export const Section2 = () => {
    const t = useTranslations("ProdsSec2")
  return (
    <section className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-center justify-start px-5 md:px-7 lg:px-14">
        <div className="w-full h-fit col-span-1 md:col-span-2 xl:col-span-4 py-5 font-bold text-4xl md:text-5xl lg:text-6xl text-primary md:pb-7 lg:pb-10">
            {t("solutions")}
        </div>
      <DynamicCard
        href="/prods/dry"
        className="bg-[url('/seca.jpeg')] bg-cover bg-center rounded-none"
      >
        <div className="w-full flex justify-between items-center h-fit text-white translate-y-0 lg:group-hover:-translate-y-5 duration-300 ease-out">
          <h3 className="text-lg md:text-2xl lg:text-3xl max-w-[50%] font-bold">
            {t("button1")}
          </h3>
          <div className="w-fit h-fit">
            <ArrowRight className="w-7 h-7 text-white" />
          </div>
        </div>
      </DynamicCard>
      <DynamicCard
        href="/prods/platform"
        className="bg-[url('/plata.jpeg')] bg-cover bg-center rounded-none"
      >
        <div className="w-full flex justify-between items-center h-fit text-white translate-y-0 lg:group-hover:-translate-y-5 duration-300 ease-out">
          <h3 className="text-lg md:text-2xl lg:text-3xl max-w-[50%] font-bold">
            {t("button2")}
          </h3>
          <div className="w-fit h-fit">
            <ArrowRight className="w-7 h-7 text-white" />
          </div>
        </div>
      </DynamicCard>
      <DynamicCard
        href="/prods/refrigerated"
        className="bg-[url('/refri.jpeg')] bg-cover bg-center rounded-none"
      >
        <div className="w-full flex justify-between items-center h-fit text-white translate-y-0 lg:group-hover:-translate-y-5 duration-300 ease-out">
          <h3 className="text-lg md:text-2xl lg:text-3xl max-w-[50%] font-bold">
            {t("button3")}
          </h3>
          <div className="w-fit h-fit">
            <ArrowRight className="w-7 h-7 text-white" />
          </div>
        </div>
      </DynamicCard>
      <DynamicCard
        href="/prods/drag"
        className="bg-[url('/arrastre.jpeg')] bg-cover bg-center rounded-none"
      >
        <div className="w-full flex justify-between items-center h-fit text-white translate-y-0 lg:group-hover:-translate-y-5 duration-300 ease-out">
          <h3 className="text-lg md:text-2xl lg:text-3xl max-w-[50%] font-bold">
            {t("button4")}
          </h3>
          <div className="w-fit h-fit">
            <ArrowRight className="w-7 h-7 text-white" />
          </div>
        </div>
      </DynamicCard>
    </section>
  );
};
