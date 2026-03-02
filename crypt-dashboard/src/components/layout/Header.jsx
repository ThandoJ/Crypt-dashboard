import { FiSearch, FiBell, FiMenu } from "react-icons/fi";

export default function Header({ setIsOpen }) {
  return (
    <div className="flex justify-between items-center">

      {/* Left section */}
      <div className="flex items-center gap-4">

        {/* Hamburger (mobile only) */}
        <FiMenu
          className="lg:hidden text-gray-600 cursor-pointer"
          size={22}
          onClick={() => setIsOpen(true)}
        />

        <div className="relative w-52 sm:w-72 lg:w-96">
          <FiSearch className="absolute left-4 top-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search type of keywords"
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white shadow-sm text-sm outline-none"
          />
        </div>

      </div>

      {/* Right section */}
      <div className="flex items-center gap-6">
        <FiBell size={20} className="text-gray-500 cursor-pointer" />

        <div className="hidden sm:flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div>
            <p className="text-sm font-semibold">Lauria</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>

    </div>
  );
}