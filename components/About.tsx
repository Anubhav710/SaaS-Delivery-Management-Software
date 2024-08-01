import Image from "next/image";
import React from "react";
import Card from "./ui/Card";
import AboutCard from "./ui/AboutCard";

const About = () => {
  return (
    <section className="h-screen relative px-2 md:px-10  lg:px-[250px]    w-full bg-white ">
      <div className="h-full relative flex gap-7 items-center">
        <div className="w-1/2  h-[80%] relative">
          <Image src={"/images/building.png"} alt="" fill sizes="100%" />
        </div>
        <div className="w-1/2 h-[80%] space-y-5 ">
          <h1 className="text-4xl lg:text-5xl font-bold">
            What Makes Us Different?
          </h1>
          <p>
            Check out our best service you can possibly orders in building your
            company and don’t forget to ask via our email our customer service
            if you are interested using our services
          </p>
        </div>
        <div className="w-[85%] flex items-center  backdrop-blur-md  right-0 top-[45%] bg-white/60 rounded-xl h-max absolute">
          <AboutCard
            icon={"/images/experience-icon.png"}
            title="Experienced"
            desc="Our experienced of 25 years of building and making achievement  in the world of development"
            link="Learn more ->"
          />
          <AboutCard
            icon={"/images/experience-icon.png"}
            title="Experienced"
            desc="Our experienced of 25 years of building and making achievement  in the world of development"
            link="Learn more ->"
          />
          <AboutCard
            icon={"/images/experience-icon.png"}
            title="Experienced"
            desc="Our experienced of 25 years of building and making achievement  in the world of development"
            link="Learn more ->"
          />
          <AboutCard
            icon={"/images/experience-icon.png"}
            title="Experienced"
            desc="Our experienced of 25 years of building and making achievement  in the world of development"
            link="Learn more ->"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
