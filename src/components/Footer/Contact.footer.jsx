import React from "react";
import { FOOTERCONTACT } from "../../data/footerContact";

export const Contact = () => {
  return (
    <div className="bg-gray-100">
      <div className="py-4 xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[750px] mx-auto">
        <div className="flex flex-row flex-nowrap justify-between text-center">
          {FOOTERCONTACT.map((contactItem, index) => {
            return (
              <a className="w-3/12 p-4" key={index}>
                <div>
                  <p className="text-xs font-semibold uppercase">{contactItem.title}</p>
                </div>
                <div className="mt-4 ">
                  {contactItem.detail.map((detailItem, index) => {
                    return (
                      <a href="#" className="block text-xs opacity-70 my-2" key={index}>
                        {detailItem}
                      </a>
                    );
                  })}
                </div>
                {index === FOOTERCONTACT.length - 1 && (
                  <div className="flex flex-wrap justify-between">
                    {contactItem?.imgUrl.map((imgUrlItem, index) => {
                      return (
                        <a href="#" className="w-[45%] mt-4 cursor-pointer">
                          <img className="w-full" src={imgUrlItem} />
                        </a>
                      );
                    })}
                  </div>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
