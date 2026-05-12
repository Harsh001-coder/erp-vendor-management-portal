import { Link } from "react-router-dom";

import {
  FaUsers,
  FaBox,
  FaFileInvoice,
  FaMoneyBill,
  FaTruck,
  FaClipboardList,
  FaHome,
} from "react-icons/fa";

const Sidebar = () => {

  const role = localStorage.getItem("role");

  return (

    <div className="w-64 h-screen bg-slate-900 text-white p-5 fixed overflow-y-auto">

      {/* LOGO */}

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-blue-500">
          Dynarex ERP
        </h1>

        <p className="text-gray-300 mt-1">
          Vendor Management
        </p>

      </div>

      <nav className="flex flex-col gap-3">

        {/* ADMIN SIDEBAR */}

        {role === "admin" && (

          <>

            <p className="text-gray-400 text-sm mb-2">
              ADMIN PANEL
            </p>

            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all duration-300"
            >
              <FaHome />
              Dashboard
               </Link>

            <Link
              to="/admin/vendors"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all duration-300"
            >
              <FaUsers />
              Vendors
            </Link>

            <Link
              to="/admin/products"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all duration-300"
            >
              <FaBox />
              Products
            </Link>

            <Link
              to="/admin/orders"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all duration-300"
            >
              <FaClipboardList />
              Purchase Orders
            </Link>

            <Link
              to="/admin/invoices"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all duration-300"
            >
              <FaFileInvoice />
              Invoices
            </Link>

            <Link
              to="/admin/payments"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all duration-300"
            >
              <FaMoneyBill />
              Payments
            </Link>

            <Link
              to="/admin/vendor-approval"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all duration-300"
            >
              <FaUsers />
              Vendor Approval
            </Link>

          </>

        )}

        {/* VENDOR SIDEBAR */}

        {role === "vendor" && (

          <>

            <p className="text-gray-400 text-sm mt-5 mb-2">
              VENDOR PANEL
            </p>

            <Link
              to="/vendor/dashboard"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all duration-300"
            >
              <FaHome />
              Vendor Dashboard
            </Link>

            <Link
              to="/vendor/signup"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all duration-300"
            >
              <FaUsers />
              Vendor Signup
            </Link>

            <Link
              to="/vendor/po"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all duration-300"
            >
              <FaClipboardList />
              Vendor PO
            </Link>

            <Link
              to="/vendor/invoices"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all duration-300"
            >
              <FaFileInvoice />
              Vendor Invoices
            </Link>

            <Link
              to="/vendor/shipment"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all duration-300"
            >
              <FaTruck />
              Shipment
            </Link>

            <Link
              to="/vendor/payments"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all duration-300"
            >
              <FaMoneyBill />
              Vendor Payments
            </Link>

          </>

        )}

      </nav>

    </div>

  );
};

export default Sidebar;