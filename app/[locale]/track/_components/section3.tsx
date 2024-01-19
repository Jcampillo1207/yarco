import {
  OpDetails,
  TrackUpdate,
} from "@/components/main_components/trackupdate";
import { OnTitle, TextPrimary, Title } from "@/components/mainstyles/text";
import { useTranslations } from "next-intl";

export const Section3 = () => {
  const t = useTranslations("TrackPageSec3");
  return (
    <section className="w-full h-fit flex flex-col items-center justify-center px-5 md:px-7 lg:px-14 gap-y-10 md:gap-y-14 lg:gap-x-20">
      <div className="w-full h-fit grid grid-cols-1 px-0 md:px-5 lg:px-16 xl:px-36 gap-x-10 lg:gap-x-5 xl:gap-x-14">
        {/* Los Status están definidos así: "pickup", "onroute", "delivered" para que los uses tal cual, por la traducción */}
        <div className="w-fit mx-auto h-fit flex flex-col items-start gap-y-0">
          <div className="w-full h-fit flex flex-col gap-y-4 items-center pb-10 lg:pb-14">
            <OnTitle>{t("title")}</OnTitle>
            <TextPrimary className="font-bold text-xl">8123NV</TextPrimary>
            <OpDetails opName="Gonzalo Juárez Hernandez" opPhone="8717544123" />
          </div>
          <TrackUpdate
            status="pickup"
            active={false}
            date="03/01/2024"
            direction="Calle Mueble 12, 27102, Torreón, Coah. México"
          />
          <TrackUpdate
            status="onroute"
            active={false}
            direction="Matamoros, Coahuila, México"
            eta="4hrs"
            date="03/01/2024"
          />
          <TrackUpdate
            status="delivered"
            active={true}
            direction="Margaritas 812, Durango, Dgo. México"
            eta="4hrs"
            date="03/01/2024"
          />
        </div>
      </div>
    </section>
  );
};
