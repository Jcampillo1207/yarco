import { DynamicSection, DynamicSection2, DynamicSectionBG } from "@/components/main_components/plantSections";
import { useTranslations } from "next-intl";

export const Section4 = () => {
    const t = useTranslations("DragSection4")
  return (
    <DynamicSectionBG
      title={t("title")}
      text={t("text")}
      imagen="/drag.png"
      hrefer="/contacto"
      btntext={t("btn")}
    ></DynamicSectionBG>
  );
};
