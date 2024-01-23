import { TextPrimary, Title } from "@/components/mainstyles/text"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

export default function ThankPage() {
    const t = useTranslations("Tnks")
    return (
        <section className="w-full h-fit py-20 lg:py-36 flex items-center justify-center flex-col gap-y-7">
            <div className="aspect-video flex items-center justify-center h-[300px] relative">
                <Image src={"/deliver.png"} alt="Imagen" className="object-contain" fill/>
            </div>
            <Title className="text-start mx-auto">
                {t("title")}
            </Title>
            <TextPrimary>
                {t("text")}
            </TextPrimary>
            <Button variant={"default"} size={"lg"} asChild className="mt-7">
                <Link href={"/"}>
                    {t("btn")}
                </Link>
            </Button>
        </section>
    )
}