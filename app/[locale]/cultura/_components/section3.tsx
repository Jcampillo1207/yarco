import { MoveBanner } from "@/components/main_components/movebanner";
import { Aduana } from "@/components/vectors/aduana";
import { AF } from "@/components/vectors/af";
import { Raaf } from "@/components/vectors/raaf";
import { YARCO } from "@/components/vectors/yarco";
import { useTranslations } from "next-intl";

export const Section3 = () => {
    const t = useTranslations("CultureSec3");
  return (
    <section className="w-full h-fit items-center justify-center flex flex-col">
      <MoveBanner title={t("title")}>
        <span className="aspect-square h-32 lg:h-72 w-auto items-center justify-center flex">
          <YARCO />
        </span>
        <span className="aspect-square h-32 lg:h-72 w-auto items-center justify-center flex">
          <Raaf />
        </span>
        <span className="aspect-square h-32 lg:h-72 w-auto items-center justify-center flex">
          <AF />
        </span>
        <span className="aspect-square h-32 lg:h-72 w-auto items-center justify-center flex">
          <Aduana />
        </span>
        <span className="aspect-square h-32 lg:h-72 w-auto items-center justify-center flex">
          <YARCO />
        </span>
        <span className="aspect-square h-32 lg:h-72 w-auto items-center justify-center flex">
          <Raaf />
        </span>
        <span className="aspect-square h-32 lg:h-72 w-auto items-center justify-center flex">
          <AF />
        </span>
        <span className="aspect-square h-32 lg:h-72 w-auto items-center justify-center flex">
          <Aduana />
        </span>
        <span className="aspect-square h-32 lg:h-72 w-auto items-center justify-center flex">
          <YARCO />
        </span>
        <span className="aspect-square h-32 lg:h-72 w-auto items-center justify-center flex">
          <Raaf />
        </span>
        <span className="aspect-square h-32 lg:h-72 w-auto items-center justify-center flex">
          <AF />
        </span>
        <span className="aspect-square h-32 lg:h-72 w-auto items-center justify-center flex">
          <Aduana />
        </span>
        <span className="aspect-square h-32 lg:h-72 w-auto items-center justify-center flex">
          <YARCO />
        </span>
        <span className="aspect-square h-32 lg:h-72 w-auto items-center justify-center flex">
          <Raaf />
        </span>
        <span className="aspect-square h-32 lg:h-72 w-auto items-center justify-center flex">
          <AF />
        </span>
        <span className="aspect-square h-32 lg:h-72 w-auto items-center justify-center flex">
          <Aduana />
        </span>
      </MoveBanner>
    </section>
  );
};
