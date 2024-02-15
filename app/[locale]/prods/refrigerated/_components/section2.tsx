import { DynamicSection2 } from "@/components/main_components/plantSections"
import { useTranslations } from "next-intl"

export const Section2 = () => {
    const t = useTranslations("RefriSection1")
    return (
        <DynamicSection2 title={t("title")} hrefer="/contacto" imagen="/refri.png" btntext={t("btn")}>

        </DynamicSection2>
    )
}