import Image from "next/image";
import React from "react";

const ServiceCard = ({
  icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) => {
  return (
    <div className="border cursor-default border-gray-500 px-5 pt-7 rounded-lg pb-16 flex flex-col items-center shadow-xl  ">
      <div>
        <Image src={icon} alt="" width={64} height={64} />
      </div>
      <div>
        <h1 className="text-center mt-5 font-bold text-xl text-primary-blue">
          {title}
        </h1>
        <p className="text-center mt-2">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
