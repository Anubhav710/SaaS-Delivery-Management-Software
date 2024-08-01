import Image from "next/image";
import React from "react";
import FaqBox from "./ui/FaqBox";

const Faq = () => {
  return (
    <section className="bg-[#F1F5FF] py-16 px-2 md:px-10  lg:px-[250px]">
      <div className="">
        <div className="flex flex-col items-center">
          <Image
            src={"/images/question-icom.png"}
            alt=""
            width={64}
            height={64}
            className=""
          />
          <h1 className="text-2xl font-bold text-primary-blue">
            Frequently Asked Questions
          </h1>
          <div className="bg-primary-purple w-14 h-1 rounded-lg mt-3" />
        </div>
        <div className="mt-12 bg-white rounded-xl drop-shadow-xl overflow-hidden">
          <FaqBox />
        </div>
      </div>
    </section>
  );
};

export default Faq;
