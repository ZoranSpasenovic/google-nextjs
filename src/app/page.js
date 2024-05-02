import HomeHeader from "@/components/Home/HomeHeader";
import React from "react";
import Image from "next/image";
import SearchInput from "@/components/Home/SearchInput";

export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-12">
        <Image
          priority
          style={{ width: "auto"}}
          alt="google logo"
          width={300}
          height={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
        />
        <SearchInput />
      </div>
    </>
  );
}
