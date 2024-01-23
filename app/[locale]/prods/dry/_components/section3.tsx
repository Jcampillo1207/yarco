import { CharCard } from "@/components/main_components/characcard";
import { DynamicSection3 } from "@/components/main_components/plantSections";
import { Truck } from "lucide-react";
import { useTranslations } from "next-intl";

export const Section3 = () => {
  const t = useTranslations("DrySection2");
  return (
    <DynamicSection3 title={t("title")} text={t("text")}>
      <CharCard text={t("card1")}>
        <Truck
          className="w-auto h-20 min-h-[60px] text-primary"
          strokeWidth={1}
        />
      </CharCard>
      <CharCard text={t("card2")}>
        <Truck
          className="w-auto h-20 min-h-[60px] text-primary"
          strokeWidth={1}
        />
      </CharCard>
      <CharCard text={t("card3")}>
        <Truck
          className="w-auto h-20 min-h-[60px] text-primary"
          strokeWidth={1}
        />
      </CharCard>
      <CharCard
        className="col-span-1 md:col-span-1 lg:col-span-3"
        text={t("card4")}
      >
        <Truck
          className="w-auto h-20 min-h-[60px] text-primary"
          strokeWidth={1}
        />
      </CharCard>
    </DynamicSection3>
  );
};
