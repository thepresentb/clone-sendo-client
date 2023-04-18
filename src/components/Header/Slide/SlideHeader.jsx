import React from "react";
import { Section } from "./Section.slice";
import { Banner } from "./Banner.slice";

export const SlideHeader = () => {
  return (
    <div className="mt-[84px]">
      <Section></Section>
      <Banner></Banner>
    </div>
  );
};
