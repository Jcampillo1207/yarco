import { DynamicCard } from "@/components/main_components/card";
import { Title } from "@/components/mainstyles/text";
import { ArrowRight } from "lucide-react";

export const Section2 = () => {
  return (
    <section className="w-full h-fit flex items-center justify-start px-5 md:px-7 lg:px-14 flex-col gap-y-10 md:gap-y-14 lg:gap-y-20">
      <div className="w-full flex items-center justify-center">
        <Title>Sabemos de logística</Title>
      </div>
      <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-3 gap-x-14 gap-y-5">
        <DynamicCard href="/prods" className="bg-[url('/truck.png')] bg-cover bg-center">
            <div className="w-full flex justify-between items-center h-fit text-white translate-y-0 lg:group-hover:-translate-y-5 duration-300 ease-out">
                <h3 className="text-lg md:text-2xl lg:text-3xl max-w-[50%] font-bold">
                    Productos y servicios
                </h3>
                <div className="w-fit h-fit">
                    <ArrowRight className="w-7 h-7 text-white" />
                </div>
            </div>
        </DynamicCard>
        <DynamicCard href="/cultura" className="bg-[url('/team.png')] bg-cover bg-center">
            <div className="w-full flex justify-between items-center h-fit text-white translate-y-0 lg:group-hover:-translate-y-5 duration-300 ease-out">
                <h3 className="text-lg md:text-2xl lg:text-3xl max-w-[50%] font-bold">
                    Nuestro equipo
                </h3>
                <div className="w-fit h-fit">
                    <ArrowRight className="w-7 h-7 text-white" />
                </div>
            </div>
        </DynamicCard>
        <DynamicCard href="/track" className="bg-[url('/call.png')] bg-cover bg-center">
            <div className="w-full flex justify-between items-center h-fit text-white translate-y-0 lg:group-hover:-translate-y-5 duration-300 ease-out">
                <h3 className="text-lg md:text-2xl lg:text-3xl max-w-[50%] font-bold">
                    Línea de soporte
                </h3>
                <div className="w-fit h-fit">
                    <ArrowRight className="w-7 h-7 text-white" />
                </div>
            </div>
        </DynamicCard>
      </div>
    </section>
  );
};
