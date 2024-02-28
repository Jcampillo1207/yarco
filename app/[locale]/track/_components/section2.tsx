"use client";

import { useState } from "react";
import { OnTitle, TextPrimary, Title } from "@/components/mainstyles/text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export const Section2 = () => {
  const t = useTranslations("TrackPageSec2");
  const router = useRouter();
  const [orderId, setOrderId] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.replace(`/track/${orderId}`);
  };

  return (
    <section className="w-full h-fit grid items-center lg:items-stretch justify-between px-5 md:px-7 lg:px-14 grid-cols-1 lg:grid-cols-2 gap-y-10 md:gap-y-14 lg:gap-x-20">
      <div className="w-full h-fit flex flex-col gap-y-5 md:gap-y-10 items-center lg:items-start justify-center">
        <Title className="text-center lg:text-start">{t("TitleTrack")}</Title>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-fit bg-white drop-shadow-lg h-fit rounded-2xl flex flex-col items-center justify-start p-7 md:p-10 lg:p-14 gap-y-5 md:gap-y-7 mx-auto"
      >
        <OnTitle className="text-primary">{t("title")}</OnTitle>
        <div className="w-full h-fit flex flex-col gap-y-2 items-start justify-start">
          <Label htmlFor="order" className="text-primary text-sm md:text-base">
            {t("label")}
          </Label>
        </div>
        <Input
          id="order"
          placeholder={t("placeholder")}
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
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
    </section>
  );
};
