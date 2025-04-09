"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section className="scroll-mt-28" ref={ref} id="experience">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline>
        <div>
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement>
                <h3 className="font-bold">{item.title}</h3>
                <h3>{item.location}</h3>
                <p>{item.description}</p>
                <p>{item.icon}</p>
                <p>{item.date}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </div>
      </VerticalTimeline>
    </section>
  );
}
