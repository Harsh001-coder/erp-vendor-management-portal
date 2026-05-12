import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md px-8 py-4 flex justify-between items-center rounded-xl">

      <div>

        <h2 className="text-2xl font-bold text-slate-800">
          Welcome Back 👋
        </h2>

        <p className="text-gray-500 text-sm">
          ERP Vendor Management Portal
        </p>

      </div>

      <div className="flex items-center gap-5">

        <button className="relative">

          <FaBell className="text-2xl text-slate-700" />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            3
          </span>

        </button>

        <div className="flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-xl">

          <FaUserCircle className="text-3xl text-slate-700" />

          <div>
            <p className="font-semibold text-slate-800">
              Harsh Kumar
            </p>

            <p className="text-sm text-gray-500">
              Admin
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Navbar;