import React, { useState } from "react";
import ArrowUp from "../../assets/svg/ArrowUp";

export const ScrollTop = () => {
  const [show, setShow] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      setShow(true);
    } else setShow(false);
  });

  return (
    <div className="">
      {show ? (
        <div
          className="fixed bottom-[5.5rem] right-[50px] p-2 bg-slate-100 rounded shadow-center"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
