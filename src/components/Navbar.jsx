import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = ({ isActive }) =>
    isActive
      ? "text-gray-700 border-b-2 border-gray-700"
      : "hover:text-gray-600";

  return (
    <nav className="shadow-lg bg-neutral-100 py-6">
      <div className="container mx-auto sm:flex place-items-center gap-x-6 justify-center sm:place-items-start sm:justify-start">
        <Link to="/">
          <span className="font-bold text-4xl text-gray-800">todos</span>
        </Link>
        <ul className="flex gap-4 text-gray-500 text-sm pt-3">
          <li>
            <NavLink className={activeLink} to="/">
              หน้าแรก
            </NavLink>
          </li>
          <li>
            <NavLink className={activeLink} to="/about">
              เกี่ยวกับเว็ปไซต์
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
