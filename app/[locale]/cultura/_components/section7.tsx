import { Title } from "@/components/mainstyles/text";
import { Circle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface HistoryEntry {
  key: string;
  date: string;
  text: string;
}

export const Section7 = () => {
  const t = useTranslations("TL");

  const Historia: HistoryEntry[] = [
    {
      key: "1",
      date: "1958",
      text: t("text1"),
    },
    {
      key: "2",
      date: "1980",
      text: t("text2"),
    },
    {
      key: "3",
      date: "1993",
      text: t("text3"),
    },
    {
      key: "4",
      date: "1994",
      text: t("text4"),
    },
    {
      key: "5",
      date: "1996",
      text: t("text5"),
    },
    {
      key: "6",
      date: "1996",
      text: t("text6"),
    },
    {
      key: "7",
      date: "1998",
      text: t("text7"),
    },
    {
      key: "8",
      date: "2012",
      text: t("text8"),
    },
    {
      key: "9",
      date: "2017",
      text: t("text9"),
    },
    {
      key: "10",
      date: "2018",
      text: t("text10"),
    }
  ];

  return (
    <section className="w-full h-fit items-center justify-center flex flex-col px-5 md:px-7 lg:px-14 xl:px-36 py-10 md:py-14 lg:py-20 xl:py-24 gap-y-10 md:gap-y-14 lg:gap-y-20">
      <div className="w-full h-fit items-center justify-center flex flex-col gap-y-4 md:gap-y-6">
        <Title className="text-3xl md:text-4xl lg:text-6xl text-primary md:text-primary lg:text-primary text-pretty">
          {t("title")}
        </Title>
      </div>
      <div className="w-full h-fit items-start justify-start flex relative gap-7 md:gap-14 flex-col lg:flex-row">
        <div className="w-fit mx-auto max-w-full h-fit items-start justify-start flex flex-col">
          {Historia.map((label: any) => {
            return (
              <div
                key={label.key}
                className="w-fit items-start justify-start flex gap-x-2 md:gap-x-10 max-w-3xl min-h-[150px] h-fit overflow-hidden pl-1"
              >
                <div className="w-5 h-full flex-grow flex flex-col items-center justify-center relative">
                  <Circle className="text-primary w-6 h-6 fill-primary"></Circle>
                  <div className="w-[2px] min-h-full bg-primary absolute h-[1000px] top-2"></div>
                </div>
                <div className="w-fit h-fit items-start justify-start flex flex-col gap-y-4 pb-14">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground underline decoration-primary decoration-dotted underline-offset-4">
                    {label.date}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground lg:text-lg font-light">
                    {label.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full lg:w-1/2 h-auto aspect-square static lg:sticky top-24 transition-all">
          <div className="w-full h-full aspect-video relative overflow-hidden rounded-xl">
            <Image
              src={"/a.png"}
              fill
              alt="Image"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
