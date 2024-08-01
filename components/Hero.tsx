import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import { companyLogos } from "@/constants";

const Hero = () => {
  return (
    <section className="">
      <div className="flex px-2 md:px-10 py-5 lg:px-[250px]">
        <div className="flex-1  mt-5">
          <div className="">
            <div className="text-white font-bold md:text-5xl lg:text-[4rem]">
              <h1>SaaS Delivery</h1> <h1>Management</h1> <h1>Software</h1>
            </div>
            <p className="text-white mt-3">
              Track and optimize routes in real-time{" "}
            </p>
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
        </div>
        <div className="flex-1 relative">
          <div>
            <Image
              src={"/images/computer.png"}
              alt=""
              width={1200}
              height={1200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
