import React from "react";
import "./css/products.css";

export const Products = () => {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div className="relative bg-white rounded w-[12.5rem] shadow-xl product__item cursor-pointer">
          <div
            className="product__back"
            style={{ backgroundImage: "url('https://cf.shopee.vn/file/8819299421d904979797ae2158ebbee2')" }}
          ></div>
          <div className="product__name">Pad chuột, tấm lót chuột khổ lớn cấu trúc tổ ong KT 80x30 và 90x40 cm</div>
          <div className="product__price">
            <span className="product__price-old">80.000đ</span>
            <span className="product__price-current">55.000đ</span>
          </div>
          <div className="product__action">
            <div class="relative px-1 rounded-lg h-4 w-[98px]" style={{ backgroundColor: "rgb(241, 243, 249)" }}>
              <div className="absolute flex top-[1px]">
                <img
                  src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png"
                  alt="promotion-icon"
                  class="absolute top-[1px] inline-block w-3 h-3"
                />
                <span class="text-[0.65rem] whitespace-nowrap ml-4" style={{ color: "rgb(19, 48, 150)" }}>
                  Trả góp Kredivo
                </span>
              </div>
            </div>
            <span className="product__action-sold">14 Đã bán</span>
          </div>
          <div className="product__footer">
            <div className="flex">
              <div className="mr-1">
                <svg class="svg-icon w-[0.9rem]" viewBox="0 0 20 20">
                  <path d="M17.684,7.925l-5.131-0.67L10.329,2.57c-0.131-0.275-0.527-0.275-0.658,0L7.447,7.255l-5.131,0.67C2.014,7.964,1.892,8.333,2.113,8.54l3.76,3.568L4.924,17.21c-0.056,0.297,0.261,0.525,0.533,0.379L10,15.109l4.543,2.479c0.273,0.153,0.587-0.089,0.533-0.379l-0.949-5.103l3.76-3.568C18.108,8.333,17.986,7.964,17.684,7.925 M13.481,11.723c-0.089,0.083-0.129,0.205-0.105,0.324l0.848,4.547l-4.047-2.208c-0.055-0.03-0.116-0.045-0.176-0.045s-0.122,0.015-0.176,0.045l-4.047,2.208l0.847-4.547c0.023-0.119-0.016-0.241-0.105-0.324L3.162,8.54L7.74,7.941c0.124-0.016,0.229-0.093,0.282-0.203L10,3.568l1.978,4.17c0.053,0.11,0.158,0.187,0.282,0.203l4.578,0.598L13.481,11.723z"></path>
                </svg>
              </div>
              <div>3.5/5</div>
            </div>
            <span className="product__footer-origin">China</span>
          </div>
          <span className="product__favourite">
            <i className="fa-solid fa-check"></i>
            <i>Yêu thích</i>
          </span>
          <div className="product__sale">
            <span className="product__sale-percent">14%</span>
            <span className="product__sale-p">GIẢM</span>
          </div>
        </div>
        <div className="relative bg-white rounded w-[12.5rem] shadow-xl product__item">
          <div
            className="product__back"
            style={{ backgroundImage: "url('https://cf.shopee.vn/file/8819299421d904979797ae2158ebbee2')" }}
          ></div>
          <div className="product__name">Pad chuột, tấm lót chuột khổ lớn cấu trúc tổ ong KT 80x30 và 90x40 cm</div>
          <div className="product__price">
            <span className="product__price-old">80.000đ</span>
            <span className="product__price-current">55.000đ</span>
          </div>
          <div className="product__action">
            <div className="product__action-like">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="product__action-star">
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <span className="product__action-sold">14 Đã bán</span>
          </div>
          <div className="product__footer">
            <span className="product__footer-trademark">Adidas</span>
            <span className="product__footer-origin">China</span>
          </div>
          <span className="product__favourite">
            <i className="fa-solid fa-check"></i>
            <i>Yêu thích</i>
          </span>
          <div className="product__sale">
            <span className="product__sale-percent">14%</span>
            <span className="product__sale-p">GIẢM</span>
          </div>
        </div>
        <div className="relative bg-white rounded w-[12.5rem] shadow-xl product__item">
          <div
            className="product__back"
            style={{ backgroundImage: "url('https://cf.shopee.vn/file/8819299421d904979797ae2158ebbee2')" }}
          ></div>
          <div className="product__name">Pad chuột, tấm lót chuột khổ lớn cấu trúc tổ ong KT 80x30 và 90x40 cm</div>
          <div className="product__price">
            <span className="product__price-old">80.000đ</span>
            <span className="product__price-current">55.000đ</span>
          </div>
          <div className="product__action">
            <div className="product__action-like">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="product__action-star">
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <span className="product__action-sold">14 Đã bán</span>
          </div>
          <div className="product__footer">
            <span className="product__footer-trademark">Adidas</span>
            <span className="product__footer-origin">China</span>
          </div>
          <span className="product__favourite">
            <i className="fa-solid fa-check"></i>
            <i>Yêu thích</i>
          </span>
          <div className="product__sale">
            <span className="product__sale-percent">14%</span>
            <span className="product__sale-p">GIẢM</span>
          </div>
        </div>
        <div className="relative bg-white rounded w-[12.5rem] shadow-xl product__item">
          <div
            className="product__back"
            style={{ backgroundImage: "url('https://cf.shopee.vn/file/8819299421d904979797ae2158ebbee2')" }}
          ></div>
          <div className="product__name">Pad chuột, tấm lót chuột khổ lớn cấu trúc tổ ong KT 80x30 và 90x40 cm</div>
          <div className="product__price">
            <span className="product__price-old">80.000đ</span>
            <span className="product__price-current">55.000đ</span>
          </div>
          <div className="product__action">
            <div className="product__action-like">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="product__action-star">
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <span className="product__action-sold">14 Đã bán</span>
          </div>
          <div className="product__footer">
            <span className="product__footer-trademark">Adidas</span>
            <span className="product__footer-origin">China</span>
          </div>
          <span className="product__favourite">
            <i className="fa-solid fa-check"></i>
            <i>Yêu thích</i>
          </span>
          <div className="product__sale">
            <span className="product__sale-percent">14%</span>
            <span className="product__sale-p">GIẢM</span>
          </div>
        </div>
        <div className="relative bg-white rounded w-[12.5rem] shadow-xl product__item">
          <div
            className="product__back"
            style={{ backgroundImage: "url('https://cf.shopee.vn/file/8819299421d904979797ae2158ebbee2')" }}
          ></div>
          <div className="product__name">Pad chuột, tấm lót chuột khổ lớn cấu trúc tổ ong KT 80x30 và 90x40 cm</div>
          <div className="product__price">
            <span className="product__price-old">80.000đ</span>
            <span className="product__price-current">55.000đ</span>
          </div>
          <div className="product__action">
            <div className="product__action-like">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="product__action-star">
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <span className="product__action-sold">14 Đã bán</span>
          </div>
          <div className="product__footer">
            <span className="product__footer-trademark">Adidas</span>
            <span className="product__footer-origin">China</span>
          </div>
          <span className="product__favourite">
            <i className="fa-solid fa-check"></i>
            <i>Yêu thích</i>
          </span>
          <div className="product__sale">
            <span className="product__sale-percent">14%</span>
            <span className="product__sale-p">GIẢM</span>
          </div>
        </div>
        <div className="relative bg-white rounded w-[12.5rem] shadow-xl product__item">
          <div
            className="product__back"
            style={{ backgroundImage: "url('https://cf.shopee.vn/file/8819299421d904979797ae2158ebbee2')" }}
          ></div>
          <div className="product__name">Pad chuột, tấm lót chuột khổ lớn cấu trúc tổ ong KT 80x30 và 90x40 cm</div>
          <div className="product__price">
            <span className="product__price-old">80.000đ</span>
            <span className="product__price-current">55.000đ</span>
          </div>
          <div className="product__action">
            <div className="product__action-like">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="product__action-star">
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <span className="product__action-sold">14 Đã bán</span>
          </div>
          <div className="product__footer">
            <span className="product__footer-trademark">Adidas</span>
            <span className="product__footer-origin">China</span>
          </div>
          <span className="product__favourite">
            <i className="fa-solid fa-check"></i>
            <i>Yêu thích</i>
          </span>
          <div className="product__sale">
            <span className="product__sale-percent">14%</span>
            <span className="product__sale-p">GIẢM</span>
          </div>
        </div>

        {/* <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold my-2">Web Design</p>
            <div className="flex space-x-2 text-gray-400 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p>Core UI Team</p>
            </div>
            <div className="flex space-x-2 text-gray-400 text-sm my-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p>3 Weeks Left</p>
            </div>
            <div className="border-t-2 "></div>

            <div className="flex justify-between">
              <div className="my-2">
                <p className="font-semibold text-base mb-2">Team Member</p>
                <div className="flex space-x-2">
                  <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className="w-6 h-6 rounded-full"
                  />
                </div>
              </div>
              <div className="my-2">
                <p className="font-semibold text-base mb-2">Progress</p>
                <div className="text-base text-gray-400 font-semibold">
                  <p>76%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold my-2">Leading Page</p>
            <div className="flex space-x-2 text-gray-400 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p>Marketing Team</p>
            </div>
            <div className="flex space-x-2 text-gray-400 text-sm my-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p>2 Days Left</p>
            </div>
            <div className="border-t-2 "></div>

            <div className="flex justify-between">
              <div className="my-2">
                <p className="font-semibold text-base mb-2">Team Member</p>
                <div className="flex space-x-2">
                  <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className="w-6 h-6 rounded-full"
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU"
                    className="w-6 h-6 rounded-full"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg"
                    className="w-6 h-6 rounded-full"
                  />
                </div>
              </div>
              <div className="my-2">
                <p className="font-semibold text-base mb-2">Progress</p>
                <div className="text-base text-gray-400 font-semibold">
                  <p>4%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold my-2">Business Compare</p>
            <div className="flex space-x-2 text-gray-400 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p>Marketing Team</p>
            </div>
            <div className="flex space-x-2 text-gray-400 text-sm my-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p>1 Month Left</p>
            </div>
            <div className="border-t-2 "></div>

            <div className="flex justify-between">
              <div className="my-2">
                <p className="font-semibold text-base mb-2">Team Member</p>
                <div className="flex space-x-2">
                  <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className="w-6 h-6 rounded-full"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg"
                    className="w-6 h-6 rounded-full"
                  />
                </div>
              </div>
              <div className="my-2">
                <p className="font-semibold text-base mb-2">Progress</p>
                <div className="text-base text-gray-400 font-semibold">
                  <p>90%</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
