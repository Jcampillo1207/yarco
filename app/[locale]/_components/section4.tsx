"use client";

import { TextPrimary, Title } from "@/components/mainstyles/text";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Section4 = () => {
  const router = useRouter();
  return (
    <section className="w-full h-fit items-stretch justify-start px-5 md:px-7 lg:px-14 gap-y-14 lg:gap-y-20 grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-20 bg-[#393939] py-10 md:py-20">
      <div className="w-full h-full flex items-center md:items-start justify-between flex-col gap-y-14">
        <div className="w-full h-fit items-start justify-start flex flex-col gap-y-5 md:gap-y-10">
          <Title className="text-center md:text-start text-white">
            Confiamos en la calidad de nuestros procesos
          </Title>
          <TextPrimary className="text-center md:text-start text-white">
            Lorem ipsum dolor sit amet consectetur. Pulvinar nulla posuere neque
            odio sit consectetur sed montes urna. Dictum consequat scelerisque
            nibh ipsum. Amet quam urna nibh pretium nunc morbi. Integer turpis
            turpis a condimentum vitae. Amet quam urna nibh pretium nunc morbi.
            Integer turpis turpis a condimentum vitae. Amet quam urna nibh
            pretium nunc morbi. Integer turpis turpis a condimentum vitae.
          </TextPrimary>
        </div>
        <div className="w-fit h-fit flex items-center justify-center gap-x-3">
          <Button
            variant={"default"}
            size={"default"}
            onClick={() => router.push("/contacto")}
          >
            Contáctanos
          </Button>
          <Button
            variant={"secondary"}
            size={"default"}
            onClick={() => router.push("/track")}
          >
            Rastrear mi orden
          </Button>
        </div>
      </div>
      <div className="w-full h-[400px] relative rounded-lg overflow-hidden flex items-center justify-center">
        <Image src={"/truck.png"} alt="Truck Image" fill objectFit="cover" />
      </div>
    </section>
  );
};
