import React from "react";
const ArrowUp = ({ size = 24, color = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 19V6M5 12l7-7 7 7" />
  </svg>
);
export default ArrowUp;
