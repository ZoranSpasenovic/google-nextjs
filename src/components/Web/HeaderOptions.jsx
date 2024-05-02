"use client";

import { CiCamera } from "react-icons/ci";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams, usePathname } from "next/navigation";

export default function HeaderOptions() {
  const params = useSearchParams();
  const path = usePathname();

  const link = params.get("searchTerm");

  const activeImagesClass = path === "/search/image";
  const activeWebClass = path === "/search/web";

  return (
    <>
      <Link href={`/search/web?searchTerm=${link}`} className={` `}>
        <div
          className={`flex text-sm text-gray-500 gap-1 pb-3 items-center hover:cursor-pointer ${
            activeWebClass ? "border-b-2 border-blue-400" : ""
          }`}
        >
          <AiOutlineSearch
            className={activeWebClass ? "text-blue-400 text-lg" : "text-lg"}
          />
          <span className={activeWebClass ? "text-blue-400" : ""}>All</span>
        </div>
      </Link>
      <Link href={`/search/image?searchTerm=${link}`}>
        <div
          className={`flex pb-3 text-sm text-gray-500 gap-1 items-center hover:cursor-pointer ${
            activeImagesClass ? "border-b-2 border-blue-400" : ""
          }`}
        >
          <CiCamera
            className={activeImagesClass ? "text-blue-400 text-lg" : "text-lg"}
          />
          <span className={activeImagesClass ? "text-blue-400" : ""}>
            Images
          </span>
        </div>
      </Link>
    </>
  );
}
