"use client";

import React, { useRef, useState } from "react";
import { TextPrimary, Title } from "@/components/mainstyles/text";
import { PlayCircle, PauseCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export const Section3 = () => {
  const t = useTranslations("ProdsSec3");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="w-full h-[80vh] lg:max-h-[600px] lg:h-[600px] overflow-hidden grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 items-center justify-center bg-primary gap-x-10 gap-y-7">
      <div className="w-full h-fit flex flex-col items-start justify-start gap-y-3 md:gap-y-7 lg:gap-y-10 px-5 md:px-7 lg:pl-14 pt-14 md:pt-24 lg:py-36 col-span-1 lg:col-span-7">
        <Title className="text-white text-center lg:text-start w-full text-4xl lg:text-7xl">
          {t("title")}
        </Title>
        <TextPrimary className="text-center lg:text-start text-white text-lg lg:text-xl">
          {t("text")}
        </TextPrimary>
      </div>
      <div
        className="w-full h-full col-span-1 lg:col-span-5 relative group cursor-pointer"
        onClick={togglePlay}
      >
        <video
          src="/custom.mp4"
          className="object-cover w-full h-full"
          muted
          ref={videoRef}
          controls={false}
        ></video>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:group-hover:flex">
          {isPlaying ? (
            <PauseCircle className="w-20 h-20 stroke-primary" strokeWidth={1} />
          ) : (
            <PlayCircle className="w-20 h-20 stroke-primary" strokeWidth={1} />
          )}
        </span>
      </div>
    </section>
  );
};
