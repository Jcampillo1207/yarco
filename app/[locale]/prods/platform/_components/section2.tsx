import { DynamicSection2 } from "@/components/main_components/plantSections"
import { useTranslations } from "next-intl"

export const Section2 = () => {
    const t = useTranslations("PlatformSection1")
    return (
        <DynamicSection2 title={t("title")} hrefer="/contacto" imagen="/dry.jpg" btntext={t("btn")}>

        </DynamicSection2>
    )
}