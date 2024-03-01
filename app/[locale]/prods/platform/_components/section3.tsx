import { CharCard } from "@/components/main_components/characcard";
import { DynamicSection3 } from "@/components/main_components/plantSections";
import { CalendarRange, Clock, Container, Forklift, Globe, Headphones, Truck, Warehouse } from "lucide-react";
import { useTranslations } from "next-intl";

export const Section3 = () => {
  const t = useTranslations("PlatformSection2");
  return (
    <DynamicSection3 title={t("title")}>
      <CharCard text={t("card1")}>
        <Clock
          className="w-auto h-20 min-h-[60px] text-primary"
          strokeWidth={1.5}
        />
      </CharCard>
      <CharCard text={t("card2")}>
        <Forklift
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
      <CharCard text={t("card5")}>
        <Headphones
          className="w-auto h-20 min-h-[60px] text-primary"
          strokeWidth={1.5}
        />
      </CharCard>
      <CharCard
        text={t("card6")}
      >
        <Container
          className="w-auto h-20 min-h-[60px] text-primary"
          strokeWidth={1.5}
        />
      </CharCard>
    </DynamicSection3>
  );
};
