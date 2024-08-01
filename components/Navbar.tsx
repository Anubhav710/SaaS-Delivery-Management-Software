import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./ui/Button";

const Navbar = () => {
  return (
    <nav className="px-2 md:px-10 py-5 lg:px-[250px] ">
      {/* Wrapper  */}
      <div className="flex justify-between items-center">
        <div className="f">
          <Image src="/images/logo-1.svg" alt="logo" width={120} height={40} />
        </div>
        <div className="flex items-center gap-16 md:gap-7">
          <div className="">
            <div className="text-white space-x-10">
              {navLinks.map((link) => (
                <Link key={link.title} href={link.href}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex">
            <Button className={"text-primary-purple py-2 bg-white"}>
              Login
            </Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
