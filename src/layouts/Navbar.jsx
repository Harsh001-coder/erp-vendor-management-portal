import adminImg from "../assets/admin.png";

import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  // LOGOUT

  const handleLogout = () => {

    localStorage.removeItem("role");

    navigate("/");

  };

  return (

    <div className="bg-white shadow-md p-4 flex justify-between items-center rounded-2xl">

      {/* LEFT */}

      <div>

        <h2 className="text-2xl font-bold text-slate-800">
          Vendor Management Portal
        </h2>

        <p className="text-gray-500 text-sm mt-1">

          {role === "admin"
            ? "Admin Dashboard Access"
            : "Vendor Dashboard Access"}

        </p>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-4">

        <div className="flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-xl">

          <img
            src={adminImg}
            alt="user"
            className="w-12 h-12 rounded-full object-cover border border-gray-300"
          />

          <div>

            <p className="font-semibold text-slate-800">

              {role === "admin"
                ? "Admin"
                : "Vendor"}

            </p>

            <p className="text-sm text-gray-500">
              Active User
            </p>

          </div>

        </div>

        {/* LOGOUT BUTTON */}

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-5 py-3 rounded-xl hover:bg-red-600 transition-all duration-300"
        >
          Logout
        </button>

      </div>

    </div>

  );
};

export default Navbar;