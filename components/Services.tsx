import { companyLogos, serviceCards } from "@/constants";
import Image from "next/image";
import React from "react";
import ServiceCard from "./ui/ServiceCard";
import Button from "./ui/Button";
import Interface from "./Interface";

const Services = () => {
  return (
    <section className="pb-24 border-none  bg-white ">
      {/* Content  */}

      <div className="flex gap-14 skew-y-[9.5deg]    justify-center py-20 ">
        {companyLogos.map((logo) => (
          <div key={logo.title}>
            <Image src={logo.logo} alt={logo.title} width={84} height={64} />
          </div>
        ))}
      </div>
      <div className=" skew-y-[9.5deg]  px-2 md:px-10 py-5 lg:px-[250px]">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-primary-blue">
            Solutions for every delivery
          </h1>
          <div className="bg-primary-purple w-14 h-1 rounded-lg mt-3" />
        </div>
        <div className=" h-full">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-7 ">
            {serviceCards.map((card) => (
              <ServiceCard
                key={card.id}
                title={card.title}
                desc={card.desc}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

// <div className="flex flex-col  mt-16 bg-[#EAEAFE]">
//           <div className="flex flex-col items-center">
//             <h1 className="text-2xl font-bold text-primary-blue">
//               Delivery Business Interfaces
//             </h1>
//             <div className="bg-primary-purple w-14 h-1 rounded-lg mt-3" />
//           </div>
//           <div className="flex items-center flex-col ">
//             <div className=" space-x-5 mt-8 ml-24">
//               <Button
//                 className={
//                   "text-primary-blue-100 font-semibold border border-gray-400 py-2 px-3"
//                 }
//               >
//                 Customer App
//               </Button>
//               <Button
//                 className={
//                   "text-primary-blue-100 font-semibold border border-gray-400 py-2 px-3"
//                 }
//               >
//                 Agent App
//               </Button>
//             </div>
//             <div className="h-80 w-[31rem] my-7 bg-primary-purple"></div>
//           </div>
//         </div>
