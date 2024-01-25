"use client";

import React, { useEffect, useState } from "react";
import { Title } from "../mainstyles/text";
import { UserCog2 } from "lucide-react";

interface MovingProps {
  title: string;
  children: React.ReactNode;
}

export const MoveBanner = ({ title, children }: MovingProps) => {
  return (
    <section className="w-full h-fit items-center justify-center">
      <div className="w-full h-fit items-center justify-center flex">
        <Title className="text-center md:text-center lg:text-center">
          {title}
        </Title>
      </div>
      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        <div className="w-full h-full flex items-center justify-start gap-x-5">
          <span className="w-full h-fit flex items-center justify-start gap-x-5 md:gapx-14 lg:gap-x-14 animate-infinite-scroll delay-1000 px-5 md:px-7 lg:px-14">
            {children}
          </span>
        </div>
      </div>
    </section>
  );
};
