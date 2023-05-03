import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleAuthenState } from "../../../redux/slice/user.slice";

export const SearchMobile = () => {
  const isCategoryPage = useSelector((state) => state.category?.isCategoryPage);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickBag = () => {
    if (!user) dispatch(toggleAuthenState("login"));
  };

  return (
    <div className="sm:hidden flex">
      <div className={isCategoryPage ? "" : "hidden"} onClick={() => navigate("/")}>
        <svg className="svg-icon w-7 ml-3 mt-5" viewBox="0 0 20 20">
          <path
            fill="#fff"
            d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0	L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109	c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483	c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788	S18.707,9.212,18.271,9.212z"
          ></path>
        </svg>
      </div>
      <input
        className={`search-navbar ${
          isCategoryPage ? "h-[43px]" : "h-10"
        }  mx-3 grow rounded p-5 text-sm focus-visible:outline-0 ${isCategoryPage ? "mt-[13px]" : ""}`}
        placeholder="Tìm trên Sendo"
        autoComplete="off"
        type="search"
        inputMode="search"
        // onFocus={() => handlerOnfocus("in")}
        // onBlur={() => handlerOnfocus("out")}
        // onKeyDown={handleKeydown}
      ></input>
      <div
        aria-label="tote bag"
        href="#"
        className={`mt-[21px] mr-[14px] sm:mx-16 ${isCategoryPage ? "" : "hidden"}`}
        onClick={handleClickBag}
      >
        <div className="hover:opacity-80">
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="m20.946 2 .994 17.89a2 2 0 0 1-1.886 2.107l-.111.003H4.057a2 2 0 0 1-2-2c0-.055 0-.055.003-.11L3.054 2h17.892Zm-1.892 2H4.946l-.889 16h15.886l-.889-16ZM9 6v2.5c0 1.248 1.385 2.5 3 2.5s3-1.252 3-2.5V6h2v2.5c0 2.4-2.323 4.5-5 4.5s-5-2.1-5-4.5V6h2Z"
              fill="#fff"
              fillRule="nonzero"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
