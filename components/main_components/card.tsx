import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const DynamicCard = ({ children, className, href }: Props) => {
  return (
    <a
      href={href}
      className={cn(
        "w-full h-[300px] lg:h-[500px] rounded-lg bg-center relative overflow-hidden group shadow-md",
        className
      )}
    >
      <div className="w-full h-full bg-gradient-to-t from-foreground/80 lg:from-foreground/90 to-transparent flex flex-row md:flex-col justify-end items-end md:items-start md:justify-end p-7">
        {children}
      </div>
    </a>
  );
};

export const InfoCard = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "w-full h-full flex flex-col md:flex-row items-start justify-start gap-x-4 gap-y-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export const AnimCard = ({children, className }: Props) => {
  return (
  <div
    className={cn(
      "w-full h-full flex-col flex items-start justify-start gap-y-7 bg-primary rounded-lg aspect-video",
      className
    )}
  >
    {children}
  </div>
  )
};
