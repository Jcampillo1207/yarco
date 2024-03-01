import { Title } from "@/components/mainstyles/text";
import { useTranslations } from "next-intl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Raaf } from "@/components/vectors/raaf";
import Image from "next/image";
import { Aduana } from "@/components/vectors/aduana";
import { AF } from "@/components/vectors/af";

export const Section4 = () => {
  const t = useTranslations("ProdsSec4");
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
              className="h-56 mx-auto rounded-lg aspect-square relative overflow-hidden"
            >
              <Image
                src={"/mil.png"}
                fill
                className="object-contain"
                alt="image"
              />
            </TabsTrigger>
            <TabsTrigger
              value="emp2"
              className="h-56 mx-auto rounded-lg aspect-square relative"
            >
              <Image
                src={"/yura.png"}
                fill
                className="object-contain"
                alt="image"
              />
            </TabsTrigger>
            <TabsTrigger
              value="emp3"
              className="h-56 mx-auto rounded-lg aspect-square relative px-5"
            >
               <Image
                src={"/fundi.png"}
                fill
                className="object-contain"
                alt="image"
              />
            </TabsTrigger>
          </TabsList>
          <div className="col-span-1 lg:col-span-9 items-center justify-center">
            <TabsContent value="emp1">
              <div className="w-full h-full flex flex-col items-center justify-center gap-y-10 lg:px-32">
                <div className="w-full h-[60%] rounded-xl relative overflow-hidden">
                  <Image
                    src={"/milw.jpeg"}
                    quality={100}
                    loading="lazy"
                    alt="Hola"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="lg:max-w-xl text-center">{t("tab1text")}</p>
              </div>
            </TabsContent>
            <TabsContent value="emp2">
              <div className="w-full h-full flex flex-col items-center justify-center gap-y-10 lg:px-32">
                <div className="w-full h-[60%] rounded-lg relative overflow-hidden">
                  <Image
                    src={"/yurac.jpeg"}
                    quality={100}
                    loading="lazy"
                    alt="Hola"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="lg:max-w-xl text-center">{t("tab2text")}</p>
              </div>
            </TabsContent>
            <TabsContent value="emp3">
              <div className="w-full h-full flex flex-col items-center justify-center gap-y-10 lg:px-32">
                <div className="w-full h-[60%] rounded-lg relative overflow-hidden">
                  <Image
                    src={"/fundil.jpeg"}
                    quality={100}
                    loading="lazy"
                    alt="Hola"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="lg:max-w-xl text-center">{t("tab3text")}</p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};
