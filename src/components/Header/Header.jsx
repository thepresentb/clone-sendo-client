import React, { useEffect } from "react";
import { Navbar } from "./Navbar/Navbar";
import { SlideHeader } from "./Slide.header";
import { getCategoryList } from "../../redux/apiRequest/category.api";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getCategoryList(dispatch);
  }, []);

  return (
    <header>
      <nav>
        <Navbar></Navbar>
        <SlideHeader></SlideHeader>
      </nav>
    </header>
  );
};
