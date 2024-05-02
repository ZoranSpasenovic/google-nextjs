"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { IoMic } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function WebSearchInput() {
  const path = usePathname();

  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`${path}?searchTerm=${searchTerm}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex border grow  ml-12 mr-24 h-16 border-gray-200 focus-within:shadow-lg rounded-full  hover:shadow-lg px-6 py-3 w-[90%] md:w-[40%] max-w-3xl items-center"
    >
      <input
        className="w-full focus:outline-none mx-2 "
        type="text"
        name="search"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <IoCloseOutline className="text-4xl text-gray-500 hover:cursor-pointer pr-2 border-r-2 border-gray-200" />

      <IoMic className="text-xl text-blue-500 ml-2 mr-2" />
      <AiOutlineSearch
        onClick={handleSubmit}
        className="text-xl text-blue-500 hover:cursor-pointer"
      />
    </form>
  );
}
