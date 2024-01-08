import { Section1 } from "./_components/section1";
import { Section2 } from "./_components/section2";

export default function Tracking() {
  return (
    <main className="w-full h-fit flex flex-col gap-y-14 md:gap-y-20 lg:gap-y-28 pb-10 md:pb-14 lg:pb-16">
      <Section1 />
      <Section2 />
    </main>
  );
}
