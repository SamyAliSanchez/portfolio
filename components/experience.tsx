"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline>
        <div>
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </div>
      </VerticalTimeline>
    </section>
  );
}
