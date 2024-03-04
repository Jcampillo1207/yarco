"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { OnTitle, TrackText, TrackTitle } from "../mainstyles/text";
import { Divide } from "lucide-react";
import Link from "next/link";

type Status = "pickup" | "onroute" | "delivered"; // Tipo de estado definido

interface Props {
  status: Status; // Usando el tipo Status
  date?: string;
  active: boolean;
  eta?: string;
  direction?: string;
}

interface OpProps {
  opName?: string;
  opPhone?: string;
  opMail?: string;
}

export const TrackUpdate = ({
  status,
  date,
  direction,
  eta,
  active,
}: Props) => {
  const t = useTranslations("TrackingStatus");
  return (
    <div className="w-fit h-fit">
      <span className="max-w-3xl w-fit h-fit flex items-start justify-start gap-x-7 lg:gap-x-14">
        <div className="w-fit flex flex-col items-center justify-start">
          <div
            className={cn(
              active
                ? "rounded-full bg-primary w-8 h-8 min-h-[32px] aspect-square"
                : "rounded-full bg-gray-300 w-8 h-8 min-h-[32px] aspect-square"
            )}
          ></div>
          {status !== "delivered" ? (
            <div
              className={cn(
                "w-1 h-full min-h-[180px]",
                active ? "bg-primary" : "bg-gray-300"
              )}
            ></div>
          ) : (
            <div className="hidden"></div>
          )}
        </div>
        <div className="w-fit flex flex-col gap-y-3 pb-5 lg:pb-10">
          <TrackTitle
            className={cn(
              "flex gap-x-2",
              active ? "text-primary" : "text-muted-foreground"
            )}
          >
            {t(status)}
            {status === "onroute" ? (
              <p
                className={cn(
                  active
                    ? "text-black font-medium"
                    : "text-muted-foreground font-medium"
                )}
              >
                &#40;ETA: {eta}&#41;
              </p>
            ) : (
              <p></p>
            )}
          </TrackTitle>
          {status === "pickup" ? (
            <>
              <TrackText
                className={cn(
                  "flex flex-col gap-y-1",
                  active ? "text-black" : "text-muted-foreground"
                )}
              >
                <span className="font-bold">{t("Salida")}</span> {direction}
              </TrackText>
              <TrackText
                className={cn(
                  "flex flex-col gap-y-1",
                  active ? "text-black" : "text-muted-foreground"
                )}
              >
                <span className="font-bold">{t("Fecha")}</span> {date}
              </TrackText>
            </>
          ) : status === "onroute" ? (
            <TrackText
              className={cn(
                "flex flex-col gap-y-1",
                active ? "text-black" : "text-muted-foreground"
              )}
            >
              <span className="font-bold">{t("Ruta")}</span> {direction}
            </TrackText>
          ) : (
            <>
              <TrackText
                className={cn(
                  "flex flex-col gap-y-1",
                  active ? "text-black" : "text-muted-foreground"
                )}
              >
                <span className="font-bold">{t("Entrega")}</span> {direction}
              </TrackText>
              <TrackText
                className={cn(
                  "flex flex-col gap-y-1",
                  active ? "text-black" : "text-muted-foreground"
                )}
              >
                <span className="font-bold">{t("Fecha")}</span> {date}
              </TrackText>
            </>
          )}
        </div>
      </span>
    </div>
  );
};

export const OpDetails = ({ opName, opPhone, opMail }: OpProps) => {
  const t = useTranslations("Operator");
  return (
    <div className="w-full lg:w-fit h-fit flex flex-col gap-y-5 items-center justify-center mt-10 md:mt-0 py-7 lg:py-10 bg-white px-14 lg:px-20 rounded-2xl">
      <OnTitle className="pb-2 md:pb-4">{t("title")}</OnTitle>
      <TrackText className="text-xl lg:text-2xl text-black font-semibold">
        {opName}
      </TrackText>
      <Link href={`tel:${opPhone}`}>
        {t("Phone")} <span className="underline text-primary">{opPhone}</span>
      </Link>
      <Link href={`mailto:${opMail}`}>
        {t("Mail")} <span className="underline text-primary">{opMail}</span>
      </Link>
    </div>
  );
};
