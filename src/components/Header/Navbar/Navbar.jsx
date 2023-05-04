import React, { useEffect } from "react";
import { Filter } from "./Filter.navbar";
import { Search } from "./Search.navbar";
import { TopNav } from "./TopNav.navbar";
import { SubNav } from "./subNav.navbar";
import { useDispatch, useSelector } from "react-redux";
import { SearchMobile } from "./SearchMobile.filter";
import { toggleAuthenState } from "../../../redux/slice/user.slice";
import { useNavigate } from "react-router-dom";
import { bagApi } from "../../../redux/apiRequest/bag.api";

export const Navbar = () => {
  const isCategoryPage = useSelector((state) => state.category?.isCategoryPage);
  const { isBagPage, bag } = useSelector((state) => state.bag);
  const { selectedProduct } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickBag = () => {
    if (!user) dispatch(toggleAuthenState("login"));
    else navigate("/bag");
  };

  useEffect(() => {
    bagApi.getBag(dispatch, user?._id);
  }, [user]);

  // scroll handler
  window.addEventListener("scroll", () => {
    let scroll = 0;
    if (window.innerWidth < 640) {
      // neu la trang category mobile thi dung yen
      scroll = Math.min(isCategoryPage ? 0 : 110, window.scrollY);
    } else {
      scroll = Math.min(32, window.scrollY);
    }
    document.querySelector(".navbar").style.top = `${-scroll}px`;
  });

  return (
    <div
      className={`navbar bg-red-600 fixed w-full z-20 top-0 left-0 ${
        isCategoryPage || selectedProduct || isBagPage ? "sm:h-[100px] h-[70px]" : "sm:h-[138px] h-[160px]"
      }`}
    >
      <TopNav></TopNav>
      <div
        className={`flex pt-1 h-[60px] xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[750px] mx-auto ${
          isCategoryPage && window.innerWidth < 640 ? "hidden" : ""
        }`}
      >
        <a href="/" className="w-[120px] grow sm:grow-0 h-[48px] hover:opacity-80">
          <svg viewBox="0 0 87 48" xmlns="http://www.w3.org/2000/svg" className="w-[120px] h-[48px] cursor-pointer">
            <path
              d="m69.052 12.375-3.097 16.548a44.418 44.418 0 0 0-.74 6.633h-4.378l.27-2.94h-.068a6.042 6.042 0 0 1-5.251 3.008c-2.761 0-4.983-2.188-4.983-6.154 0-5.675 4.04-10.872 10.1-10.872.74 0 1.481.137 2.222.41l1.212-6.564 4.713-.069zm-6.666 10.394a2.664 2.664 0 0 0-1.885-.547c-2.828 0-4.848 3.35-4.848 6.496 0 1.983.875 3.077 2.222 3.077 1.414 0 3.03-1.436 3.636-4.581l.875-4.445zM4.481 30.017a10.123 10.123 0 0 0 5.252 1.436c1.818 0 3.501-.889 3.501-2.667 0-1.299-.942-2.12-2.962-3.145-2.424-1.3-4.646-3.009-4.646-5.95 0-4.512 3.905-7.316 8.753-7.316 2.693 0 4.31.616 5.252 1.163l-1.481 4.034a8.713 8.713 0 0 0-4.108-1.025c-2.222 0-3.366 1.162-3.366 2.393 0 1.299 1.346 2.12 3.232 3.145 2.693 1.436 4.444 3.283 4.444 5.95 0 4.991-4.108 7.59-9.023 7.59-3.097 0-5.32-.821-6.33-1.573l1.482-4.035zm27.606 4.308a13.756 13.756 0 0 1-5.992 1.3c-4.579 0-6.935-2.668-6.935-6.839 0-4.991 3.568-10.12 9.359-10.12 3.232 0 5.588 1.847 5.588 4.855 0 4.171-3.972 5.676-10.436 5.54 0 .615.202 1.162.471 1.64.606.82 1.684 1.3 3.098 1.3 1.548 0 3.097-.342 4.51-1.026l.338 3.35zm-4.174-12.24c-2.222 0-3.434 1.846-3.771 3.35 3.703.07 5.521-.478 5.521-1.982 0-.82-.606-1.368-1.75-1.368zm5.52 13.471 2.088-11.35c.404-2.052.74-4.24.875-5.676h4.242l-.404 3.077h.068a6.707 6.707 0 0 1 5.656-3.077c2.625 0 4.107 1.64 4.107 4.444 0 .958-.135 1.847-.27 2.804l-1.818 9.778h-4.713l1.75-9.368c.135-.615.135-1.23.135-1.846 0-1.163-.404-1.915-1.548-1.915-1.549 0-3.367 1.983-3.973 5.54l-1.414 7.59h-4.78zM84 25.3c0 5.95-3.973 10.325-9.561 10.325-4.107 0-6.8-2.735-6.8-6.77 0-5.675 3.904-10.325 9.56-10.325 4.31.069 6.8 3.078 6.8 6.77m-11.445 3.487c0 1.915.942 3.146 2.558 3.146 2.626 0 4.04-3.83 4.04-6.633 0-1.504-.606-3.077-2.558-3.077-2.694 0-4.107 4.034-4.04 6.565"
              fill="#fff"
            ></path>
          </svg>
        </a>
        <Filter></Filter>
        <Search></Search>
        <div aria-label="tote bag" className="mt-[14px] mx-4 sm:mx-16" onClick={handleClickBag}>
          <div className="relative hover:opacity-80">
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
            {bag?.length !== 0 ? (
              <div className="absolute rounded-full w-[19px] bg-white top-[-8px] left-[14px] pl-[6px] text-[11px]">
                {bag?.length}
              </div>
            ) : null}
          </div>
        </div>
        <div className="sm:hidden mt-3 mr-4">
          <svg className="svg-icon w-7" viewBox="0 0 20 20">
            <path
              fill="#fff"
              d="M10.001,9.658c-2.567,0-4.66-2.089-4.66-4.659c0-2.567,2.092-4.657,4.66-4.657s4.657,2.09,4.657,4.657
							C14.658,7.569,12.569,9.658,10.001,9.658z M10.001,1.8c-1.765,0-3.202,1.437-3.202,3.2c0,1.766,1.437,3.202,3.202,3.202
							c1.765,0,3.199-1.436,3.199-3.202C13.201,3.236,11.766,1.8,10.001,1.8z"
            ></path>
            <path
              fill="#fff"
              d="M9.939,19.658c-0.091,0-0.179-0.017-0.268-0.051l-7.09-2.803c-0.276-0.108-0.461-0.379-0.461-0.678
							c0-4.343,3.535-7.876,7.881-7.876c4.343,0,7.878,3.533,7.878,7.876c0,0.302-0.182,0.572-0.464,0.68l-7.213,2.801
							C10.118,19.64,10.03,19.658,9.939,19.658z M3.597,15.639l6.344,2.507l6.464-2.512c-0.253-3.312-3.029-5.927-6.404-5.927
							C6.623,9.707,3.848,12.326,3.597,15.639z"
            ></path>
            <path
              fill="#fff"
              d="M9.939,19.658c0,0-0.003,0-0.006,0c-0.347-0.003-0.646-0.253-0.709-0.596L7.462,9.567
							C7.389,9.172,7.65,8.79,8.046,8.718C8.442,8.643,8.82,8.906,8.894,9.301l1.076,5.796l1.158-5.741
							c0.08-0.394,0.461-0.655,0.86-0.569c0.396,0.08,0.649,0.464,0.569,0.859l-1.904,9.427C10.585,19.413,10.286,19.658,9.939,19.658z"
            ></path>
          </svg>
        </div>
      </div>
      {isBagPage ? null : <SearchMobile />}
      <SubNav></SubNav>
    </div>
  );
};
