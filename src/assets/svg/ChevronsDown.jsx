import React from "react";
const ChevronsDown = ({ size = 20, color = "blue" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
  </svg>
);
export default ChevronsDown;
