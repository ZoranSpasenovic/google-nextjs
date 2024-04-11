import Country from "./Country";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] flex flex-col w-full">
      <div className="px-8 py-3">
        <Country />
      </div>
      <div className="flex px-8 py-3 justify-between items-center border-t border-gray-200">
        <ul className="flex gap-4 items-center">
          <li className="hover:underline hover:cursor-pointer">About</li>
          <li className="hover:underline hover:cursor-pointer">Advertising</li>
          <li className="hover:underline hover:cursor-pointer">Business</li>
          <li className="hover:underline hover:cursor-pointer">
            How Search Works
          </li>
        </ul>
        <ul className="flex gap-4 items-center">
          <li className="hover:underline hover:cursor-pointer">Privacy</li>
          <li className="hover:underline hover:cursor-pointer">Terms</li>
          <li className="hover:underline hover:cursor-pointer">Settings</li>
        </ul>
      </div>
    </footer>
  );
}
