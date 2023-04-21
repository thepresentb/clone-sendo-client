import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { SlideHeader } from "./Slide.header";

export const Header = () => {
  return (
    <header>
      <nav>
        <Navbar></Navbar>
        <SlideHeader></SlideHeader>
      </nav>
    </header>
  );
};
