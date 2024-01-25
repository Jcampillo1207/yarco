import { Title } from "@/components/mainstyles/text";
import { useTranslations } from "next-intl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Raaf } from "@/components/vectors/raaf";
import Image from "next/image";
import { Aduana } from "@/components/vectors/aduana";
import { AF } from "@/components/vectors/af";

export const Section6 = () => {
  const t = useTranslations("AboutPageSec6");
  return (
    <section className="w-full h-fit overflow-hidden flex flex-col items-center justify-center gap-x-10 gap-y-7 lg:gap-y-16 pb-10 md:pb-14 px-5 md:px-7 lg:px-14">
      <Title>{t("title")}</Title>
      <div className="w-full h-fit items-center justify-center">
        <Tabs
          defaultValue="emp1"
          className="w-full h-fit grid grid-cols-1 lg:grid-cols-12 gap-y-14"
        >
          <TabsList className="bg-transparent grid grid-flow-col lg:grid-cols-1 lg:grid-flow-row col-span-1 lg:col-span-3">
            <TabsTrigger
              value="emp1"
              className="h-56 mx-auto rounded-lg aspect-square"
            >
              <Raaf />
            </TabsTrigger>
            <TabsTrigger
              value="emp2"
              className="h-56 mx-auto rounded-lg aspect-square"
            >
              <Aduana />
            </TabsTrigger>
            <TabsTrigger
              value="emp3"
              className="h-56 mx-auto rounded-lg aspect-square"
            >
              <AF />
            </TabsTrigger>
          </TabsList>
          <div className="col-span-1 lg:col-span-9 items-center justify-center">
            <TabsContent value="emp1">
              <div className="w-full h-full flex flex-col items-center justify-center gap-y-10 lg:px-32">
                <div className="w-full h-[60%] rounded-lg relative overflow-hidden">
                  <Image
                    src={"/cargo.avif"}
                    alt="Hola"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="lg:max-w-xl text-center">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem quae quos magni amet saepe! Delectus aspernatur suscipit
                  sunt voluptatibus consequatur quidem, facere accusamus saepe
                  nobis culpa. Repellendus corporis aperiam quaerat.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="emp2">
              <div className="w-full h-full flex flex-col items-center justify-center gap-y-10 lg:px-32">
                <div className="w-full h-[60%] rounded-lg relative overflow-hidden">
                  <Image
                    src={"/truck.png"}
                    alt="Hola"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="lg:max-w-xl text-center">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem quae quos magni amet saepe! Delectus aspernatur suscipit
                  sunt voluptatibus consequatur quidem, facere accusamus saepe
                  nobis culpa. Repellendus corporis aperiam quaerat.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="emp3">
              <div className="w-full h-full flex flex-col items-center justify-center gap-y-10 lg:px-32">
                <div className="w-full h-[60%] rounded-lg relative overflow-hidden">
                  <Image
                    src={"/seca.jpeg"}
                    alt="Hola"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="lg:max-w-xl text-center">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem quae quos magni amet saepe! Delectus aspernatur suscipit
                  sunt voluptatibus consequatur quidem, facere accusamus saepe
                  nobis culpa. Repellendus corporis aperiam quaerat.
                </p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};
