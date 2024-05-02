import Image from "next/image";

import { TbGridDots } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import HeaderOptions from "./HeaderOptions";
import WebSearchInput from "./WebSearchInput";
import Link from "next/link";

export default function WebHeader() {
  return (
    <>
      <header className=" flex items-center p-8 ">
        <Link href="/">
          <Image
            priority
            alt="google logo"
            style={{ width: "auto" }}
            width={120}
            height={40}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          />
        </Link>

        <WebSearchInput />

        <div className="flex justify-between">
          <IoSettingsOutline className="hover:cursor-pointer hover:bg-gray-100 hover:rounded-full p-2 text-4xl" />
          <TbGridDots className="ml-4 hover:cursor-pointer  hover:bg-gray-100 hover:rounded-full p-2 text-4xl" />
        </div>

        <button className="px-6 py-2 ml-4 rounded-lg bg-blue-500 text-white">
          Sign in
        </button>
      </header>
      <div className="flex justify-start pl-56 gap-4 items-start h-8 border-b  border-gray-200">
        <HeaderOptions />
      </div>
    </>
  );
}
