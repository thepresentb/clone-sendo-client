import React from "react";
import { SEARCHTOP } from "../../../data/searchTop";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/slice/category.slice";
import { redirect, useNavigate } from "react-router-dom";

export const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filter } = useSelector((state) => state?.category);

  const handlerOnfocus = (option) => {
    const searchHintElement = document.getElementById("search-hint");
    if (option == "out") {
      searchHintElement.classList.add("hidden");
    } else {
      searchHintElement.classList.remove("hidden");
    }
  };

  const handleSubmit = () => {
    const inputElement = document.querySelector(".search-navbar");
    dispatch(
      setFilter(
        // khi nguoi dung xoa tim kiem
        inputElement.value.length <= 1
          ? {}
          : {
              name: inputElement.value,
            }
      )
    );
    handlerOnfocus("out");
    navigate("/category");
  };

  const handleKeydown = (event) => {
    if (event.keyCode === 13) handleSubmit();
  };

  return (
    <div className="w-full flex mx-2 my-2">
      <div className="grow mr-1">
        <input
          className="search-navbar h-10 w-full rounded p-5 text-sm focus-visible:outline-0"
          placeholder="Tìm trên Sendo"
          autoComplete="off"
          type="search"
          inputMode="search"
          onFocus={() => handlerOnfocus("in")}
          onBlur={() => handlerOnfocus("out")}
          onKeyDown={handleKeydown}
        ></input>
        <div id="search-hint" className="h-screen w-full hidden">
          <div className="h-3/6 w-full rounded p-3 pl-6 text-sm bg-white mt-1 shadow-2xl overflow-y-auto">
            <div className="p-2 font-semibold opacity-75">Xu hướng tìm kiếm</div>
            {SEARCHTOP.map((item, index) => {
              return (
                <div className="p-2 font-semibold opacity-40" key={index}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button
        type="submit"
        value="Submit"
        aria-label="button submit"
        className="h-10 w-10 rounded box-border font-bold outline-none bg-white hover:bg-gray-100"
        onClick={handleSubmit}
      >
        <svg
          className="h-6 w-6 m-auto"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M10 2a8 8 0 0 1 6.32 12.905l5.387 5.388-1.414 1.414-5.388-5.386A8 8 0 1 1 10 2Zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
            fill="#6F787E"
            fillRule="nonzero"
          ></path>
        </svg>
      </button>
    </div>
  );
};
