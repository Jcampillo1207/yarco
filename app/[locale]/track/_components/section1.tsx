import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const Section1 = () => {
    const t = useTranslations("TrackPageSec1");
    return (
        <section className="w-full h-fit flex items-center justify-start px-5 md:px-7 lg:px-14 relative py-14 md:py-32">
        <div className="w-full h-full overflow-hidden flex items-center justify-center absolute z-0 left-0">
          <Image src={"/truck.png"} alt="Hola" fill className="object-cover w-full"/>
        </div>
        <div className="w-full h-full overflow-hidden flex items-center justify-center bg-foreground/70 absolute top-0 z-10 right-0"></div>
        <div className="w-full h-fit flex items-center justify-center z-10">
            <h1 className="text-white font-black text-3xl md:text-5xl text-center max">
                {t("title")}
            </h1>
        </div>
      </section>
    )
}