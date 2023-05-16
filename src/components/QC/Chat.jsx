import React from "react";
import MessageSquare from "../../assets/svg/Message";

export const Chat = () => {
  return (
    <div>
      <div className="">
        <div className="fixed flex  bottom-[1.5rem] right-6 p-2 pl-4 bg-blue-500 rounded shadow-center text-white">
          <MessageSquare color="white" />
          <div className="mx-2 text-sm font-bold mt-[2px]">Chat</div>
        </div>
      </div>
    </div>
  );
};
