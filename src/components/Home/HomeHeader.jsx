import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader() {
  return (
    <header className="flex justify-end items-center p-5 space-x-4 text-sm">
      <Link
        href="https://mail.google.com"
        className="hover:cursor-pointer hover:underline"
      >
        Gmail
      </Link>
      <Link
        href="https://image.google.com"
        className="hover:cursor-pointer hover:underline"
      >
        Images
      </Link>
      <TbGridDots className="hover:bg-slate-200 rounded-full p-2 text-4xl  " />
      <button className="px-4 py-2 rounded-lg bg-blue-500 text-white">
        Sign in
      </button>
    </header>
  );
}
