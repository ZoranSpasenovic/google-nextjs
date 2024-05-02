import Pagination from "./Pagination";

export default function WebSearch({ data }) {
  const totalResults = data.searchInformation.formattedTotalResults;
  const searchTime = data.searchInformation.formattedSearchTime;

  const { items } = data;

  return (
    <div className="w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-56">
      <p className="text-sm text-gray-400 my-3">
        About {totalResults} results ({searchTime} seconds)
      </p>
      {items.map((item) => (
        <div className="mb-8 max-w-xl" key={item.link}>
          <div className="flex flex-col">
            <a>{item.link}</a>
            <a className="text-blue-800 text-xl font-medium hover:underline">
              {item.title}
            </a>
            <p>{item.snippet}</p>
          </div>
        </div>
      ))}
      <Pagination />
    </div>
  );
}
