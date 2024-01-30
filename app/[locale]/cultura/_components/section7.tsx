import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Title } from "@/components/mainstyles/text";
import { useTranslations } from "next-intl";

export default function OppositeContentTimeline() {
    const t = useTranslations("AboutPageSec7")
  return (
    <>
      <div className="w-full flex items-center justify-center flex-col gap-y-7">
        <Title className="text-center lg:text-center">{t("title")}</Title>
      </div>
      <Timeline position="alternate">
        <TimelineItem className="hidden">
          <TimelineOppositeContent className="text-primary text-lg md:text-xl font-bold">
            2002
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="bg-primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className=" text-lg font-normal">
            Acontecimiento
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="text-primary text-lg md:text-xl font-bold">
            2006
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="bg-primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="text-lg font-normal">
            Acontecimiento
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="text-primary text-lg md:text-xl font-bold">
            2010
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="bg-primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="text-lg font-normal">
            Acontecimiento
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="text-primary text-lg md:text-xl font-bold">
            2013
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="bg-primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="text-lg font-normal">
            Acontecimiento
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="text-primary text-lg md:text-xl font-bold">
            2015
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="bg-primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className=" text-lg font-normal">
            Acontecimiento
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="text-primary text-lg md:text-xl font-bold">
            2016
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="bg-primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="text-lg font-normal">
            Acontecimiento
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="text-primary text-lg md:text-xl font-bold">
            2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="bg-primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="text-lg font-normal">
            Acontecimiento
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="text-primary text-lg md:text-xl font-bold">
            2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="bg-primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="text-lg font-normal">
            Acontecimiento
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="text-primary text-lg md:text-xl font-bold">
            2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="bg-primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className=" text-lg font-normal">
            Acontecimiento
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
