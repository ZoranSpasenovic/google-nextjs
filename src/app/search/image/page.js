import Link from "next/link";
import ImageSearch from "@/components/Web/ImageSearch";

export default async function ImageSearchPage({ searchParams }) {
  const startIndex = searchParams.start || "1";
  const searchTerm = searchParams.searchTerm;
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}'}&searchType=image&start=${startIndex}`
  );
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const resData = await response.json();
  const { items } = resData;

  if (!items) {
    return (
      <div className="flex items-center flex-col justify-start gap-8 mt-12">
        <h1 className="text-2xl font-medium">No results found</h1>
        <p>
          Try searching for something else or go back to the homepage{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }
  return <>{resData && <ImageSearch items={items} />}</>;
}
