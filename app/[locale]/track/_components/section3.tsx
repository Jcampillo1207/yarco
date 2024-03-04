"use client";

import {
  OpDetails,
  TrackUpdate,
} from "@/components/main_components/trackupdate";
import { OnTitle, TextPrimary, Title } from "@/components/mainstyles/text";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

interface DataProps {
  data?: any;
}

export const Section3 = ({ data }: DataProps) => {
  const t = useTranslations("TrackPageSec3");
  const router = useRouter();
  return (
    <>
      <section className="w-full h-fit grid grid-cols-1 lg:grid-cols-3 items-start justify-start px-5 md:px-7 lg:px-14 gap-y-10 md:gap-y-14 lg:gap-x-20">
        {data !== undefined ? (
          <>
            <div className="w-full h-fit flex flex-col gap-y-4 items-center pb-10 lg:pb-14">
              <div className="w-full h-fit items-start justify-start flex px-5 md:px-7 lg:px-14 gap-y-10 md:gap-y-14 lg:gap-x-20">
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="flex gap-x-2  flex-row-reverse"
                  onClick={() => router.push("/")}
                >
                  {t("back")}
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </div>
              <OnTitle>{t("title")}</OnTitle>
              <TextPrimary className="font-bold text-xl">{data.props.item["Tracking #"]}</TextPrimary>
              <OpDetails
                opName={data.props.item.Operador}
                opPhone={data.props.item["Teléfono Operador"]}
                opMail={data.props.item["Email Operador"]}
              />
            </div>
            <div className="w-full h-fit grid grid-cols-1 col-span-1 lg:col-span-2 px-0 md:px-5 lg:px-16 xl:px-36 gap-x-10 lg:gap-x-5 xl:gap-x-14">
              {/* Los Status están definidos así: "pickup", "onroute", "delivered" para que los uses tal cual, por la traducción */}

              {data.props.item["Estatus"] === "Pick Up" ? (
                <>
                  <TrackUpdate
                    status="pickup"
                    active={true}
                    date={data.props.item["Fecha Salida"]}
                    direction={data.props.item["Lugar de Salida"]}
                  />
                  <TrackUpdate
                    status="onroute"
                    active={false}
                    direction={data.props.item["Ubicación Actual"]}
                    eta={data.props.item["ETA"]}
                  />
                  <TrackUpdate
                    status="delivered"
                    active={false}
                    date={data.props.item["Fecha Entrega"]}
                    direction={data.props.item["Dirección de Entrega"]}
                    eta={data.props.item["ETA"]}
                  />
                </>
              ) : data.props.item["Estatus"] === "Entregado" ? (
                <>
                  <TrackUpdate
                    status="pickup"
                    active={false}
                    date={data.props.item["Fecha Salida"]}
                    direction={data.props.item["Lugar de Salida"]}
                  />
                  <TrackUpdate
                    status="onroute"
                    active={false}
                    direction={data.props.item["Ubicación Actual"]}
                    eta={data.props.item["ETA"]}
                  />
                  <TrackUpdate
                    status="delivered"
                    active={true}
                    date={data.props.item["Fecha Entrega"]}
                    direction={data.props.item["Dirección de Entrega"]}
                    eta={data.props.item["ETA"]}
                  />
                </>
              ) : (
                <>
                  <TrackUpdate
                    status="pickup"
                    active={false}
                    date={data.props.item["Fecha Salida"]}
                    direction={data.props.item["Lugar de Salida"]}
                  />
                  <TrackUpdate
                    status="onroute"
                    active={true}
                    direction={data.props.item["Ubicación Actual"]}
                    eta={data.props.item["ETA"]}
                  />
                  <TrackUpdate
                    status="delivered"
                    active={false}
                    date={data.props.item["Fecha Entrega"]}
                    direction={data.props.item["Dirección de Entrega"]}
                    eta={data.props.item["ETA"]}
                  />
                </>
              )}
            </div>
          </>
        ) : (
          <div>No pudimos encontrar tu número de orden</div>
        )}
      </section>
    </>
  );
};
