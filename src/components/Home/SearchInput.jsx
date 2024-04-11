"use client";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMic } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchTerm || searchTerm.trim().length === 0) {
      return;
    }
    router.push(`/search/web?searchTerm=${searchTerm}`);
    setSearchTerm("");
  };
  const handleRadnomWord = async (event) => {
    setLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    if (!response.ok) {
      setLoading(false);
      return;
    }
    const resData = await response.json();
    const word = resData[0];
    router.push(`/search/web?searchTerm=${word}`);
    setLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex border mt-5 border-gray-200 focus-within:shadow-lg rounded-full  hover:shadow-lg px-6 py-3 w-[90%] md:w-[50%] ml-10 mr-5 flex-grow max-w-3xl items-center"
      >
        <AiOutlineSearch className="text-xl text-gray-500" />
        <input
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          className="w-full  focus:outline-none mx-2 "
          type="text"
          name="search"
        />
        <IoMic className="text-lg" />
      </form>
      <div className="flex justify-center gap-4 mt-8 flex-col sm:flex-row">
        <button
          onClick={handleSubmit}
          className="rounded-md text-sm transition-shadow bg-[#f8f9fa] w-36 h-10 hover:shadow-md hover:ring-gray-200 focus:outline-none text-gray-800"
        >
          Google Search
        </button>
        <button
          disabled={loading}
          onClick={handleRadnomWord}
          className="rounded-md text-sm transition-shadow bg-[#f8f9fa] w-36 h-10 hover:shadow-md hover:ring-gray-200 focus:outline-none text-gray-800"
        >
          {loading ? "Loading..." : "I am Felling Lucky"}
        </button>
      </div>
    </>
  );
}
