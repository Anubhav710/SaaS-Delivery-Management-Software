import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutCard = ({
  icon,
  title,
  desc,
  link,
}: {
  icon: any;
  title: string;
  desc: string;
  link: string;
}) => {
  return (
    <div className="space-y-5    h-max py-8 max-w-[280px] px-3 flex-col ">
      <div className="">
        <Image src={icon} alt="" className="m" width={48} height={64} />
      </div>
      <div className="mb-56">
        <h1 className="text-xl  font-semibold text-black ">{title}</h1>
        <p className="text-black  mb-2 ">{desc}</p>
        <Link href={"/"} className="text-blue-700 ">
          {link}{" "}
        </Link>
      </div>
    </div>
  );
};

export default AboutCard;
