import React from "react";
import { SubNav } from "./Navbar/SubNav";
import { Navbar } from "./Navbar/Navbar";
import { SlideHeader } from "./SlideHeader";

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
