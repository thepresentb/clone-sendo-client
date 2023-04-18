import React from "react";
import { SubNav } from "./SubNav";
import { Navbar } from "./Navbar/Navbar";
import { SlideHeader } from "./Slide/SlideHeader";

export const Header = () => {
  return (
    <header>
      <nav>
        <SubNav></SubNav>
        <Navbar></Navbar>
        <SlideHeader></SlideHeader>
      </nav>
    </header>
  );
};
