import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-2 py-16 md:px-10 flex relative lg:px-[250px] bg-white">
      <div className="flex-1">
        <Image src={"/images/logo2.svg"} alt="logo" width={94} height={64} />
        <p>Lorem ipsum dolor, sit amet consectetur </p>
      </div>
      <div className="flex-[4] flex justify-around">
        <div>
          <h4 className="font-bold text-xl text-primary-blue">Product</h4>
          <ul className="text-primary-blue-100">
            <li>Features</li>
            <li>API</li>
            <li>Solutions</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl text-primary-blue">Company</h4>
          <ul className="text-primary-blue-100">
            <li>Features</li>
            <li>API</li>
            <li>Solutions</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl text-primary-blue">Support</h4>
          <ul className="text-primary-blue-100">
            <li>Features</li>
            <li>API</li>
            <li>Solutions</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 ">
        <h4 className="font-bold text-xl text-primary-blue">Follow Us</h4>
        <Image
          src={"/images/socialIcons.png"}
          alt="socialIcons"
          width={94}
          height={94}
        />
      </div>
    </footer>
  );
};

export default Footer;
