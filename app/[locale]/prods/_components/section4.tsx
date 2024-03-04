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
          <TabsList className="bg-transparent flex flex-row lg:flex-col col-span-1 lg:col-span-3">
            <TabsTrigger
              value="emp1"
              className="lg:h-56 h-fit flex flex-1 w-full md:w-full mx-auto rounded-lg aspect-video relative overflow-hidden"
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
              className="lg:h-56 h-fit w-full flex flex-1 mx-auto rounded-lg aspect-video relative"
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
              className="lg:h-56 h-fit w-full  flex flex-1 mx-auto rounded-lg aspect-video relative px-5"
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
                <div className="w-full h-fit min-h-[200px] aspect-video rounded-lg relative overflow-hidden">
                  <Image
                    src={"/milw.jpeg"}
                    quality={100}
                    loading="lazy"
                    alt="Hola"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="lg:max-w-xl text-base md:text-lg lg:text-xl xl:text-2xl text-center md:text-center lg:text-center">
                  "{t("tab1text")}"
                </p>
                <span className="flex gap-x-1">
                  <p>{t("tab1name")}</p>
                  <p>{t("tab1company")}</p>
                </span>
              </div>
            </TabsContent>
            <TabsContent value="emp2">
              <div className="w-full h-full flex flex-col items-center justify-center gap-y-10 lg:px-32">
                <div className="w-full h-fit min-h-[200px] aspect-video rounded-lg relative overflow-hidden">
                  <Image
                    src={"/fund.jpeg"}
                    quality={100}
                    loading="lazy"
                    alt="Hola"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="lg:max-w-xl text-base md:text-lg lg:text-xl xl:text-2xl text-center md:text-center lg:text-center">
                  "{t("tab2text")}"
                </p>
                <span className="flex gap-x-1">
                  <p>{t("tab2name")}</p>
                  <p>{t("tab2company")}</p>
                </span>
              </div>
            </TabsContent>
            <TabsContent value="emp3">
              <div className="w-full h-full flex flex-col items-center justify-center gap-y-10 lg:px-32">
                <div className="w-full h-fit min-h-[200px] aspect-video rounded-lg relative overflow-hidden">
                  <Image
                    src={"/yura.jpeg"}
                    quality={100}
                    loading="lazy"
                    alt="Hola"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="lg:max-w-xl text-base md:text-lg lg:text-xl xl:text-2xl text-center md:text-center lg:text-center">
                  "{t("tab3text")}"
                </p>
                <span className="flex gap-x-1">
                  <p>{t("tab3name")}</p>
                  <p>{t("tab3company")}</p>
                </span>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};
