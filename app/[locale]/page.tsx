import { Section1 } from "./_components/section1";
import { Section2 } from "./_components/section2";
import { Section3 } from "./_components/section3";
import { Section4 } from "./_components/section4";
import { Section5 } from "./_components/section5";
import { Section6 } from "./_components/section6";

export default function Home() {
  return (
    <main className="w-full h-fit flex flex-col gap-y-14 md:gap-y-20 lg:gap-y-28 pb-10 md:pb-14 lg:pb-16">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </main>
  );
}
