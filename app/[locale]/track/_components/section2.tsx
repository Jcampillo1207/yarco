import { TrackUpdate } from "@/components/main_components/trackupdate";
import { OnTitle } from "@/components/mainstyles/text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

export const Section2 = () => {
  const t = useTranslations("TrackPageSec2");
  return (
    <section className="w-full h-fit grid items-center lg:items-stretch justify-start px-5 md:px-7 lg:px-14 grid-cols-1 lg:grid-cols-2 gap-y-10 md:gap-y-14 lg:gap-x-20">
      <form className="w-full bg-primary h-fit rounded-xl flex flex-col items-center justify-start p-7 md:p-10 lg:p-20 gap-y-10 md:gap-y-14">
        <OnTitle className="text-white">{t("title")}</OnTitle>
        <div className="w-full h-fit flex flex-col gap-y-2 items-start justify-start">
          <Label htmlFor="order" className="text-white text-sm md:text-base">
            {t("label")}
          </Label>
          <Input id="order" placeholder={t("placeholder")} type="text" />
        </div>
        <Button
          type="submit"
          variant={"secondary"}
          size={"lg"}
          className="flex gap-x-2 w-full text-white bg-[#FF9900] hover:bg-[#FF9900] hover:shadow-md duration-300 ease-in-out"
        >
          {t("button1")}
          <Search className="w-4 h-4" />
        </Button>
      </form>
      <div className="w-full h-fit flex flex-col items-center justify-start">
            <TrackUpdate date="" entrada="hola" salida="yo" active={true} status="En proceso" />
            <TrackUpdate date="" entrada="hola" salida="yo" active={false} status="En proceso" />
            <TrackUpdate date="" entrada="hola" salida="yo" active={false} status="En proceso" />
      </div>
    </section>
  );
};
