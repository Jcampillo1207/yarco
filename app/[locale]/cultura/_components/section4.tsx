"use client";

import { TextPrimary, Title } from "@/components/mainstyles/text";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export const Section4 = () => {
  const router = useRouter();
  const t = useTranslations("AboutPageSec4");
  return (
    <section className="w-full h-fit items-stretch justify-start px-5 md:px-7 lg:px-14 gap-y-14 lg:gap-y-20 grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-20 bg-[#393939] py-10 md:py-20">
      <div className="w-full h-full flex items-center md:items-start justify-center flex-col gap-y-14">
        <div className="w-full h-fit items-start justify-start flex flex-col gap-y-5 md:gap-y-10">
          <Title className="text-center md:text-start text-white">
            {t("title")}
          </Title>
        </div>
        <div className="w-fit h-fit flex items-center justify-center gap-x-3">
          <Button
            variant={"default"}
            size={"default"}
            onClick={() => router.push("/contacto")}
          >
            {t("btn1")}
          </Button>
          <Button
            variant={"secondary"}
            size={"default"}
            onClick={() => router.push("/track")}
          >
            {t("btn2")}
          </Button>
        </div>
      </div>
      <div className="w-full h-[400px] relative rounded-lg overflow-hidden flex items-center justify-center">
        <Image src={"/truck.png"} alt="Truck Image" fill objectFit="cover" />
      </div>
    </section>
  );
};
