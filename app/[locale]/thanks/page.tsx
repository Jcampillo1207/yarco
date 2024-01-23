import { TextPrimary, Title } from "@/components/mainstyles/text"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

export default function ThankPage() {
    const t = useTranslations("Tnks")
    return (
        <section className="w-full h-fit py-10 lg:py-36 flex items-center justify-center flex-col gap-y-2 md:gap-y-7 px-5 md:px-7 lg:px-14">
            <div className="aspect-video flex items-center justify-center w-full md:w-auto h-[200px] md:h-[300px] relative">
                <Image src={"/deliver.png"} alt="Imagen" className="object-contain" fill/>
            </div>
            <Title className="text-center mx-auto">
                {t("title")}
            </Title>
            <TextPrimary className="text-center">
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