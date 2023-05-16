import React from "react";
import { FOOTERCONTACT } from "../../data/footerContact";

export const Contact = () => {
  return (
    <div className="bg-gray-100">
      <div className=" xl:max-w-[1308px] lg:max-w-[900px] md:max-w-[750px] mx-auto">
        <div className="flex flex-row flex-wrap sm:flex-nowrap justify-between text-start py-6">
          {FOOTERCONTACT.map((contactItem, index) => {
            return (
              <a className="w-6/12 sm:w-3/12" key={index}>
                <div>
                  <p className="text-xs font-semibold uppercase">{contactItem.title}</p>
                </div>
                <div className="mt-3 ">
                  {contactItem.detail.map((detailItem, index) => {
                    return (
                      <div href="#" className="block text-xs opacity-80 my-2 w-[200px]" key={index}>
                        {detailItem}
                      </div>
                    );
                  })}
                </div>
                {index === FOOTERCONTACT.length - 1 && (
                  <div className="flex flex-wrap">
                    {contactItem?.imgUrl.map((imgUrlItem, index) => {
                      return (
                        <div href="#" className="w-[120px] h-[40px] mt-2 cursor-pointer mr-2" key={index}>
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
