export const HideIcon = ({ iconWidth, isShow, bgColor, isDown }) => {
  return (
    <div className="flex">
      <div className={`m-auto ${isShow ? "" : "hidden"} ${isDown ? "hidden" : ""}`}>
        <svg
          className={`svg-icon ${bgColor ? bgColor : "bg-white"} ${
            iconWidth === "sm" ? "w-[22px] p-1" : "w-6 p-1"
          } cursor-pointer rounded`}
          viewBox="0 0 20 20"
        >
          <path
            fill="fff"
            d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
          ></path>
        </svg>
      </div>
      <div className={`m-auto ${isShow ? "hidden" : ""} ${isDown ? "hidden" : ""}`}>
        <svg
          className={`svg-icon ${bgColor ? bgColor : "bg-white"} ${
            iconWidth === "sm" ? "w-[22px] p-1" : "w-6 p-1"
          } cursor-pointer rounded`}
          viewBox="0 0 20 20"
        >
          <path
            fill="fff"
            d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
          ></path>
        </svg>
      </div>
      <div className={`m-auto ${isDown ? "" : "hidden"} w-6 p-1 mt-[2px] mr-[2px] cursor-pointer rounded`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
};
