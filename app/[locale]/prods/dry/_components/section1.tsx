import { DynamicSection } from "@/components/main_components/plantSections";
import { useTranslations } from "next-intl";

export const Section1 = () => {
  const t = useTranslations("DrySection3")
  return (
    <DynamicSection
      title={t("title")}
      text={t("text")}
      imagen="/trucker.png"
      hrefer="/contacto"
      btntext={t("btn")}
    ></DynamicSection>
  );
};
