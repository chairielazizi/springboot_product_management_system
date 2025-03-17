import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full mx-auto bg-cyan-800 h-10">
      <div className="flex-1 ml-3 space-x-4">
        <Link to="/">
          <i className="fa-solid fa-house-chimney-window text-2xl cursor-pointer"></i>
        </Link>
        <Link to="/product-management">
          <i className="fa-solid fa-table-cells-large text-2xl cursor-pointer"></i>
        </Link>
      </div>
      <div className="mr-10 text-2xl font-semibold">
        <Link to="/">Product Management System</Link>
      </div>
    </div>
  );
};

export default Header;
