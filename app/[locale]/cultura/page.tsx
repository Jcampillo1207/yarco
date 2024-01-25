import { MoveBanner } from "@/components/main_components/movebanner";
import { Section1 } from "./_components/section1";
import { Section3 } from "./_components/section3";
import { Section2 } from "./_components/section2";
import { Section4 } from "./_components/section4";
import { Section5 } from "./_components/section5";

export default function Cultura() {
  return (
    <main className="w-full h-fit flex flex-col gap-y-14 md:gap-y-20 lg:gap-y-28">
      <Section1 />
      <Section5 />
      <Section3 />
      <Section4 />
      <Section2 />
    </main>
  );
}
