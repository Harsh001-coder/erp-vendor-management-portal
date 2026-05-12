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
  return (
   <div className="w-64 h-screen bg-slate-900 text-white p-5 fixed overflow-y-auto hidden md:block">

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-blue-400">
          Dynarex ERP
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Vendor Management
        </p>
      </div>

      <nav className="flex flex-col gap-3">

        {/* ADMIN PANEL */}

        <p className="text-gray-400 text-xs uppercase mt-2 mb-2">
          Admin Panel
        </p>

        <Link
          to="/admin/dashboard"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-all"
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/admin/vendors"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-all"
        >
          <FaUsers />
          Vendors
        </Link>

        <Link
          to="/admin/products"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-all"
        >
          <FaBox />
          Products
        </Link>

        <Link
          to="/admin/orders"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-all"
        >
          <FaClipboardList />
          Purchase Orders
        </Link>

        <Link
          to="/admin/invoices"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-all"
        >
          <FaFileInvoice />
          Invoices
        </Link>

        <Link
          to="/admin/payments"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-all"
        >
          <FaMoneyBill />
          Payments
        </Link>

        {/* VENDOR PANEL */}

        <p className="text-gray-400 text-xs uppercase mt-6 mb-2">
          Vendor Panel
        </p>

        <Link
          to="/vendor/dashboard"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-all"
        >
          <FaHome />
          Vendor Dashboard
        </Link>

        <Link
          to="/vendor/signup"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-all"
        >
          <FaUsers />
          Vendor Signup
        </Link>

        <Link
          to="/vendor/po"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-all"
        >
          <FaClipboardList />
          Vendor PO
        </Link>

        <Link
          to="/vendor/invoices"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-all"
        >
          <FaFileInvoice />
          Vendor Invoices
        </Link>

        <Link
          to="/vendor/shipment"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-all"
        >
          <FaTruck />
          Shipment
        </Link>

        <Link
          to="/vendor/payments"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-all"
        >
          <FaMoneyBill />
          Vendor Payments
        </Link>

        <Link
  to="/admin/vendor-approval"
  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-all"
>
  <FaClipboardList />
  Vendor Approval
  </Link>

      </nav>
    </div>
  );
};

export default Sidebar;