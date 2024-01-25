import { MoveBanner } from "@/components/main_components/movebanner";
import { Aduana } from "@/components/vectors/aduana";
import { AF } from "@/components/vectors/af";
import { Raaf } from "@/components/vectors/raaf";
import { YARCO } from "@/components/vectors/yarco";
import Image from "next/image";

export const Section1 = () => {
  return (
    <section className="w-full h-[200px] px-5 md:px-7 lg:px-14 relative flex items-center justify-center">
        <Image src={"/yarco.jpeg"} alt="Image" fill className="object-cover" />
    </section>
  );
};
