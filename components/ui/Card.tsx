import Image from "next/image";
import React from "react";

const Card = ({
  icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) => {
  return (
    <div className="space-y-5 mt-12 cursor-default flex  items-center py-3 px-20 flex-col h-[18rem]">
      <div className="">
        <Image src={icon} alt="" className="m" width={48} height={64} />
      </div>
      <div className="space-y-2">
        <h1 className="text-xl text-center font-semibold text-white ">
          {title}
        </h1>
        <p className="text-white text-center">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
