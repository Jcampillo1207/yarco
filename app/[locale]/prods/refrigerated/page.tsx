import { Section1 } from "./_components/section1";
import { Section2 } from "./_components/section2";
import { Section3 } from "./_components/section3";
import { Section4 } from "./_components/section4";
import { Section5 } from "./_components/section5";


const RefriPage = () => {
  return (
    <main className="w-full h-fit flex flex-col gap-y-14 md:gap-y-20 lg:gap-y-28 pb-10 lg:pb-14">
      <Section2 />
      <Section1 />
      <Section3 />
      <Section4 />
      <Section5 />
    </main>
  );
};

export default RefriPage;
