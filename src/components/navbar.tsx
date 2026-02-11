import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-[#093B70] flex items-center justify-center shadow">
      <ul className="flex gap-10 mt-2 text-white font-semibold">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/product" className="hover:text-gray-300">
            Product
          </Link>
        </li>
      </ul>
    </nav>
  );
}
