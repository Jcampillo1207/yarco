import { cn } from "@/lib/utils";
import { OnText } from "../mainstyles/text";

interface PropCharCard {
    children: React.ReactNode;
    text: string;
    className?: string;
}

export const CharCard = ({children, text, className}: PropCharCard) => {
  return (
    <div className={cn("w-full h-[300px] bg-white border flex flex-col items-center justify-start py-14 px-20 border-muted gap-y-4", className)}>
      {children}
      <OnText className="text-center lg:text-center line-clamp-3">
       {text}
      </OnText>
    </div>
  );
};
