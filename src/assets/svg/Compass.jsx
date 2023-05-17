import React from "react";
const Compass = ({ size = 24, color = "red" }) => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z" />
  </svg>
);
export default Compass;
