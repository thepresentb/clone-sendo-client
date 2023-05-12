import React from "react";
import { FOOTERCONTACT } from "../../data/footerContact";

export const Contact = () => {
  return (
    <div className="bg-gray-100">
      <div className="py-4 xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[750px] mx-auto">
        <div className="flex flex-row flex-wrap sm:flex-nowrap justify-between text-start">
          {FOOTERCONTACT.map((contactItem, index) => {
            return (
              <a className="w-6/12 sm:w-3/12 p-4" key={index}>
                <div>
                  <p className="text-xs font-semibold uppercase">{contactItem.title}</p>
                </div>
                <div className="mt-4 ">
                  {contactItem.detail.map((detailItem, index) => {
                    return (
                      <div href="#" className="block text-xs opacity-70 my-2" key={index}>
                        {detailItem}
                      </div>
                    );
                  })}
                </div>
                {index === FOOTERCONTACT.length - 1 && (
                  <div className="flex flex-wrap justify-between">
                    {contactItem?.imgUrl.map((imgUrlItem, index) => {
                      return (
                        <div href="#" className="w-[49%] mt-2 cursor-pointer" key={index}>
                          <img className="w-full" src={imgUrlItem} />
                        </div>
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
