import { useState } from "react";

export const Appbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-screen px-4 py-2 mx-auto bg-white shadow-md rounded-md">
      <div className="flex items-center justify-between text-slate-800">
        <a href="#" className="text-base font-semibold">
          Material Tailwind
        </a>
        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex gap-6 text-sm text-slate-600">
            <li>
              <a href="/signin" className="hover:text-slate-800">
                Signin
              </a>
            </li>
            <li>
              <a href="/signup" className="hover:text-slate-800">
                Signup
              </a>
            </li>
            <li>
              <a href="/create-post" className="hover:text-slate-800">
                Create
              </a>
            </li>
            <li>
              <a href="/get-blogs" className="hover:text-slate-800">
                Home
              </a>
            </li>
          </ul>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col gap-2 mt-2 text-sm text-slate-600">
            <li>
              <a
                href="/signin"
                className="block px-4 py-2 hover:bg-gray-100 rounded"
              >
                Signin
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className="block px-4 py-2 hover:bg-gray-100 rounded"
              >
                Signup
              </a>
            </li>
            <li>
              <a
                href="/create-post"
                className="block px-4 py-2 hover:bg-gray-100 rounded"
              >
                Create
              </a>
            </li>
            <li>
              <a
                href="/get-blogs"
                className="block px-4 py-2 hover:bg-gray-100 rounded"
              >
                Home
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
