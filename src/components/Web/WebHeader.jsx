import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMic } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";

export default function WebHeader() {
  return (
    <>
      <header className=" flex items-center p-8 ">
        <Image
          priority
          alt="google logo"
          width={120}
          height={30}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
        />
        <form className="flex border grow  ml-12 mr-24 h-16 border-gray-200 focus-within:shadow-lg rounded-full  hover:shadow-lg px-6 py-3 w-[90%] md:w-[40%] max-w-3xl items-center">
          <input
            className="w-full focus:outline-none mx-2 "
            type="text"
            name="search"
          />
          <IoCloseOutline className="text-4xl text-gray-500 hover:cursor-pointer pr-2 border-r-2 border-gray-200" />

          <IoMic className="text-xl text-blue-500 ml-2 mr-2" />
          <AiOutlineSearch className="text-xl text-blue-500" />
        </form>
        <div className="flex justify-between">
          <IoSettingsOutline />
          <TbGridDots className="ml-4" />
        </div>

        <button className="px-6 py-2 ml-4 rounded-lg bg-blue-500 text-white">
          Sign in
        </button>
      </header>
      <div className="flex justify-start pl-56 gap-4 items-start h-8 border-b  border-gray-200">
        <div className="flex text-sm text-gray-500 gap-1 items-center">
          <AiOutlineSearch className="text-lg" /> <span>All</span>
        </div>
        <div className="flex text-sm text-gray-500 gap-1 items-center">
          <CiCamera className="text-lg" /> <span>Images</span>
        </div>
      </div>
    </>
  );
}
