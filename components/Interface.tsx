import React from "react";
import Button from "./ui/Button";

const Interface = () => {
  return (
    <div className="flex flex-col py-16  bg-[#EAEAFE] border-none ">
      <div className="flex skew-y-[9.5deg]  flex-col items-center ">
        <h1 className="text-2xl  font-bold text-primary-blue">
          Delivery Business Interfaces
        </h1>
        <div className="bg-primary-purple w-14 h-1 rounded-lg mt-3" />
      </div>
      <div className="flex items-center flex-col skew-y-[9.5deg]  ">
        <div className=" space-x-5 mt-8 ml-24">
          <Button
            className={
              "text-primary-blue-100 font-semibold border border-gray-400 py-2 px-3"
            }
          >
            Customer App
          </Button>
          <Button
            className={
              "text-primary-blue-100 font-semibold border border-gray-400 py-2 px-3"
            }
          >
            Agent App
          </Button>
        </div>
        <div className="h-80 w-[31rem] my-7 bg-primary-purple"></div>
      </div>
    </div>
  );
};

export default Interface;
