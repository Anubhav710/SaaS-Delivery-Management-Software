import Image from "next/image";
import React from "react";
import Button from "./ui/Button";

const Start = () => {
  return (
    <section className="px-2 bg-primary-purple md:px-10 relative lg:px-[250px] flex ">
      <div className="flex-[2] flex flex-col justify-center">
        <h1 className="md:text-3xl max-w-[500px] lg:text-4xl font-semibold text-white">
          Advanced Fleet Tracking solution Tracker
        </h1>
        <div className="flex mt-10">
          <Button
            className={"text-primary-purple bg-white py-3 font-semibold "}
          >
            Get Started
          </Button>
          <Button className={"flex items-center gap-2"}>
            <Image
              src={"/images/button.svg"}
              alt="play-icon"
              width={18}
              height={18}
            />
            Watch how it works
          </Button>
        </div>
      </div>
      <div className="flex-1">
        <div className="relative ">
          <Image
            src={"/images/tracking-user.png"}
            width={1000}
            height={1000}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Start;
