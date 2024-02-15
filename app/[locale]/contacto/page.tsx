import { Form } from "@/components/main_components/form";
import { OnText, Title } from "@/components/mainstyles/text";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contacto() {
  const t = useTranslations("ContactPageSec1");
  return (
    <main>
      <section className="w-full h-fit items-center justify-center flex flex-col gap-y-3 md:gap-y-14 px-5 md:px-7 lg:px-14 xl:px-36 py-10 md:py-14 lg:py-24 bg-primary">
        <div className="w-full h-fit items-center justify-center gap-3 flex-col flex">
          <Title className="text-white">{t("title")}</Title>
          <OnText className="text-white max-w-lg text-sm text-center md:text-center lg:text-center">
           {t("text")}
          </OnText>
        </div>
        <div className="w-full h-fit items-center justify-center flex gap-x-2 flex-col lg:flex-row gap-y-3">
          <Button variant={"secondary"} size={"lg"} className="w-full lg:w-fit flex gap-x-2 items-center">
            {t("btn1")}
            <Phone className="w-4 h-4" />
          </Button>
          <Button variant={"secondary"} size={"lg"} className="w-full lg:w-fit flex gap-x-2 items-center">
            {t("btn2")}
            <Mail className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </main>
  );
}
