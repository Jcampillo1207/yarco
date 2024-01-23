import { DynamicSection } from "@/components/main_components/plantSections";
import { useTranslations } from "next-intl";

export const Section1 = () => {
  const t = useTranslations("DragSection3")
  return (
    <DynamicSection
      title={t("title")}
      text={t("text")}
      imagen="/truck.png"
      hrefer="/contacto"
      btntext={t("btn")}
    ></DynamicSection>
  );
};
