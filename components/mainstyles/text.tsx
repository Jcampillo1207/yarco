import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    children: React.ReactNode;
}

export const Title = ({children, className} : Props) => {
  return (
    <h1 className={cn("text-primary text-2xl md:text-3xl lg:text-5xl text-center font-bold max-w-4xl", className)}>
      {children}
    </h1>
  );
};

export const OnTitle = ({children, className} : Props) => {
    return (
      <h1 className={cn("text-primary text-xl md:text-2xl lg:text-3xl font-bold text-start", className)}>
        {children}
      </h1>
    );
  };

export const TextPrimary = ({children, className} : Props) => {
    return (
        <p className={cn("text-sm md:text-base lg:text-lg text-center max-w-4xl", className)}>
            {children}
        </p>
    )
}

export const OnText = ({children, className} : Props) => {
  return (
      <p className={cn("text-sm lg:text-base text-center md:text-start text-muted-foreground", className)}>
          {children}
      </p>
  )
}

export const TrackTitle = ({children, className} : Props) => {
  return (
      <h4 className={cn("text-xl lg:text-2xl text-start font-bold", className)}>
          {children}
      </h4>
  )
}

export const TrackText = ({children, className} : Props) => {
  return (
      <h4 className={cn("text-sm lg:text-base text-start", className)}>
          {children}
      </h4>
  )
}
