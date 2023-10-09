import Image from "next/image";
import React from "react";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div
      className="flex items-center justify-between
    px-5 p-5 shadow-sm border-b-[1px]"
    >
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <div className="hidden md:flex gap-5">
        <h2
          className="hover:bg-blue-500 rounded-full
        p-2 hover:text-white cursor-pointer px-3"
        >
          Home
        </h2>
        <h2
          className="hover:bg-blue-500 rounded-full
        p-2 hover:text-white cursor-pointer px-3"
        >
          History
        </h2>
        <h2
          className="hover:bg-blue-500 rounded-full
        p-2 hover:text-white cursor-pointer px-3"
        >
          Contact Us
        </h2>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
