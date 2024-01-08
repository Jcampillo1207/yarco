import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";

interface Props {
  status: string;
  date: string;
  salida: string;
  entrada: string;
  active: boolean;
}

export const TrackUpdate = ({
  status,
  date,
  salida,
  entrada,
  active,
}: Props) => {
  return (
    <div className="w-full  flex gap-x-4 items-stretch justify-stretch h-full min-h-[100px]">
      <div className="w-fit min-w-fit h-full flex flex-col items-center justify-start">
        <Circle
          className={cn(
            "w-7 h-7",
            active
              ? "text-primary fill-primary"
              : "text-muted-foreground fill-muted-foreground"
          )}
        />
        <hr
          className={cn(
            "w-1 h-full min-h-[100px]",
            active
              ? "bg-primary"
              : "bg-muted-foreground"
          )}
        />
      </div>
      <div className="w-full flex-1 flex h-full flex-col items-start justify-start gap-y-1">
        <p
          className={cn(
            "text-xl md:text-2xl",
            active ? "text-primary" : "text-muted-foreground"
          )}
        >
          Orden {status}
        </p>
        {entrada === "" ? (
          <p className="text-muted-foreground text-base">
            Salida desde: {salida}
          </p>
        ) : (
          <p className="text-muted-foreground text-base">
            Entregado a {entrada}
          </p>
        )}
        <p className="text-muted-foreground text-sm">Fecha: {date}</p>
      </div>
    </div>
  );
};
