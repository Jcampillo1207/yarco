import { CharCard } from "@/components/main_components/characcard";
import { DynamicSection3 } from "@/components/main_components/plantSections";
import { CalendarRange, Globe, Headphones, Truck, Warehouse, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

export const Section3 = () => {
  const t = useTranslations("DragSection2");
  return (
    <DynamicSection3 title={t("title")} className="bg-transparent">
      <CharCard text={t("card1")}>
        <Zap
          className="w-auto h-20 min-h-[60px] text-primary"
          strokeWidth={1.5}
        />
      </CharCard>
      <CharCard text={t("card2")}>
        <Warehouse
          className="w-auto h-20 min-h-[60px] text-primary"
          strokeWidth={1.5}
        />
      </CharCard>
      <CharCard text={t("card3")}>
        <CalendarRange
          className="w-auto h-20 min-h-[60px] text-primary"
          strokeWidth={1.5}
        />
      </CharCard>
      <CharCard text={t("card4")}>
        <Globe
          className="w-auto h-20 min-h-[60px] text-primary"
          strokeWidth={1.5}
        />
      </CharCard>
      <CharCard
        className="col-span-1 md:col-span-2 lg:col-span-2"
        text={t("card5")}
      >
        <Headphones
          className="w-auto h-20 min-h-[60px] text-primary"
          strokeWidth={1.5}
        />
      </CharCard>
    </DynamicSection3>
  );
};
