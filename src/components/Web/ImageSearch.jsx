import Link from "next/link";
import Image from "next/image";
import Pagination from "./Pagination";

export default function ImageSearch({ items }) {
  return (
    <div className="pb-40 mt-4 sm:pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4 mt-4">
        {items.map((item) => (
          <div key={item.link} className="mb-8">
            <div className="group">
              <Link href={item.image.contextLink}>
                <Image
                  style={{
                    objectFit: "contain",
                    width: "full",
                    height: "240px",
                  }}
                  src={item.link}
                  alt={item.title}
                  width={350}
                  height={300}
                />
              </Link>
              <Link href={item.image.contextLink}>
                <h2 className="group-hover:underline text-xl">{item.title}</h2>
              </Link>
              <Link
                href={item.image.contextLink}
                className="group-hover:underline text-gray-600"
              >
                <p>{item.displayLink}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <Pagination />
      </div>
    </div>
  );
}
