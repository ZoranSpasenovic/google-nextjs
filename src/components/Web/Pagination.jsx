"use client";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Pagination() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();
  const start = searchParams.get("start");
  const startIndex = start || "1";
  const search = searchParams.get("searchTerm");
  console.log(search);
  const handleNextPage = () => {
    const pageNum = parseInt(startIndex);
    const newPage = (pageNum + 1).toString();
    router.push(`${path}?searchTerm=${search}&start=${newPage}`);
  };

  const handlePrevPage = () => {
    const pageNum = parseInt(startIndex);
    const newPage = (pageNum - 1).toString();
    router.push(`${path}?searchTerm=${search}&start=${newPage}`);
  };

  return (
    <div className="flex sm:justify-start justify-between sm:space-x-44 text-blue-600 ">
      {startIndex > 1 && (
        <div
          onClick={handlePrevPage}
          className="flex flex-col hover:underline hover:cursor-pointer"
        >
          <BsChevronLeft />
          <p>Back</p>
        </div>
      )}
      <div
        onClick={handleNextPage}
        className="flex flex-col hover:underline hover:cursor-pointer"
      >
        <BsChevronRight />
        <p>Next</p>
      </div>
    </div>
  );
}
