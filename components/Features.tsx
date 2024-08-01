import React from "react";

import { featureCard } from "@/constants";
import Card from "./ui/Card";

const Features = () => {
  return (
    <section className="px-2 bg-primary-purple py-20 md:px-10  lg:px-[250px] ">
      <div className="flex skew-y-[9.5deg]  flex-col items-center">
        <h1 className="text-2xl font-bold text-white text-center">
          All in one proof for <br /> final mile delivery solutions
        </h1>
        <div className="bg-white w-14 h-1 rounded-lg mt-3" />
      </div>
      <div className="grid grid-cols-3 skew-y-[9.5deg] ">
        {featureCard.map((card) => (
          <div key={card.id}>
            <Card title={card.title} desc={card.desc} icon={card.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
