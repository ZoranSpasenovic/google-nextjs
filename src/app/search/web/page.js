import WebSearch from "@/components/Web/WebSearch";
import Link from "next/link";

export default async function WebPage({ searchParams }) {
  const startIndex = searchParams.start || "1";
  const searchTerm = searchParams.searchTerm;
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}'}&start=${startIndex}`
  );
  const resData = await response.json();

  if (!resData) {
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

  return <>{resData && <WebSearch data={resData} />}</>;
}
