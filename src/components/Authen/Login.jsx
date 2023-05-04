import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastConfig from "../../utils/toastifyConfig";
import { userApi } from "../../redux/apiRequest/user.api";
import { toggleAuthenState } from "../../redux/slice/user.slice";

export const Login = () => {
  const { authenState } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const inputChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userInfo.email)) {
      return toast.error("email đã nhập không hơp lệ", toastConfig);
    }

    const result = await userApi.login(dispatch, userInfo);
    if (result) {
      return toast.error(result.message, toastConfig);
    }

    dispatch(toggleAuthenState(""));
  };

  return (
    <>
      <div className="flex">
        <ToastContainer />
        <div
          id="authentication-modal"
          aria-hidden="true"
          className="flex m-auto overflow-x-hidden overflow-y-auto fixed h-modal md:h-fit w-full sm:w-fit top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center"
        >
          <div className="relative w-full sm:w-[500px] max-w-md px-4 h-full md:h-auto">
            <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
              <div className="flex justify-end p-2">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  onClick={() => dispatch(toggleAuthenState(""))}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
                <h3 className="text-xl text-center font-bold text-gray-900 dark:text-white">Đăng nhập</h3>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                    Nhập email
                  </label>
                  <input
                    name="email"
                    value={userInfo.email}
                    onChange={inputChange}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@gmail.com"
                    required=""
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                    Nhập password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={userInfo.password}
                    onChange={inputChange}
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required=""
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="text-sm ml-3">
                      <label htmlFor="remember" className="font-medium text-gray-900 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">
                    Quên mật khẩu???
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleSubmit}
                >
                  Đăng nhập
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Bạn chưa có tài khoản?{" "}
                  <a
                    href="#"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                    onClick={() => {
                      dispatch(toggleAuthenState("register"));
                    }}
                  >
                    Đăng kí ngay
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={`opacity-90 fixed inset-0 z-40 bg-black `} onClick={() => dispatch(toggleAuthenState(""))}></div>
    </>
  );
};
