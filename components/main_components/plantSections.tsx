import { cn } from "@/lib/utils";
import { TextPrimary, Title } from "../mainstyles/text";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface op1 {
  children?: React.ReactNode;
  text?: string;
  title?: string;
  imagen: string;
  btntext?: string;
  hrefer: string;
  className?: string;
}

export const DynamicSection = ({
  children,
  text,
  title,
  imagen,
  btntext,
  hrefer,
  className,
}: op1) => {
  return (
    <section
      className={cn(
        "w-full h-fit grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-10 px-5 md:px-7 lg:px-14",
        className
      )}
    >
      <div className="w-full h-fit items-center lg:items-start justify-start flex flex-col gap-y-4">
        <Title className="text-center lg:text-start">{title}</Title>
        <TextPrimary className="text-center lg:text-start">{text}</TextPrimary>
        <Button variant={"default"} size={"default"} asChild className="mt-4">
          <Link href={hrefer}>{btntext}</Link>
        </Button>
      </div>
      <div className="w-full h-[300px] lg:h-[350px] flex items-center justify-center relative rounded-lg overflow-hidden">
        <Image src={imagen} alt="Imagen" className="object-cover" fill />
      </div>
    </section>
  );
};

export const DynamicSectionBG = ({
  children,
  text,
  title,
  imagen,
  btntext,
  hrefer,
  className,
}: op1) => {
  return (
    <section
      className={cn(
        "w-full h-fit grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-10 px-5 md:px-7 lg:px-14 bg-primary py-10 md:py-14",
        className
      )}
    >
      <div className="w-full h-fit items-center lg:items-start justify-start flex flex-col gap-y-4">
        <Title className="text-center lg:text-start text-white">{title}</Title>
        <TextPrimary className="text-center lg:text-start text-white">{text}</TextPrimary>
        <Button variant={"secondary"} size={"default"} asChild className="mt-4">
          <Link href={hrefer}>{btntext}</Link>
        </Button>
      </div>
      <div className="w-full h-[300px] lg:h-[350px] flex items-center justify-center relative rounded-lg overflow-hidden">
        <Image src={imagen} alt="Imagen" className="object-cover" fill />
      </div>
    </section>
  );
};

interface op2 {
  title?: string;
  imagen: string;
  btntext?: string;
  hrefer: string;
  className?: string;
}

export const DynamicSection2 = ({
  title,
  imagen,
  btntext,
  hrefer,
  className,
}: op2) => {
  return (
    <section
      className={cn(
        "w-full h-fit flex flex-col items-center justify-center gap-x-14 gap-y-10 px-5 md:px-7 lg:px-14 py-14 md:py-28 lg:py-40 relative",
        className
      )}
    >
      <div className="w-full h-full z-0 absolute flex items-center justify-center overflow-hidden">
        <div className="w-full h-full absolute z-[1] bg-black opacity-40"></div>
        <img src={imagen} alt="Imagen" className="object-cover w-full h-full" />
      </div>
      <div className="w-full h-fit flex flex-col gap-y-4 items-center justify-center z-10">
        <Title className="text-white text-6xl md:text-7xl lg:text-8xl">
          {title}
        </Title>
        <Button variant={"default"} size={"default"} asChild className="mt-4">
          <Link href={hrefer}>{btntext}</Link>
        </Button>
      </div>
    </section>
  );
};

interface op3 {
  children: React.ReactNode;
  className?: string;
  title: string;
}

export const DynamicSection3 = ({ className, children, title }: op3) => {
  return (
    <section className={cn("w-full h-fit flex flex-col gap-x-14 gap-y-10 px-5 md:px-7 lg:px-14 relative py-10", className)}>
      <div className="w-full h-fit flex flex-col items-center justify-center gap-y-4 lg:gap-y-7">
        <Title>{title}</Title>
      </div>
      <div
        className={cn(
          "w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};
