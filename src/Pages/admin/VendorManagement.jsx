import { useState } from "react";

const vendorData = [
  {
    id: 1,
    company: "ABC Pvt Ltd",
    owner: "Rahul Sharma",
    status: "Active",
  },
  {
    id: 2,
    company: "XYZ Traders",
    owner: "Aman Verma",
    status: "Inactive",
  },
  {
    id: 3,
    company: "Global Supplies",
    owner: "Neha Kapoor",
    status: "Blacklisted",
  },
];

const VendorManagement = () => {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // FILTER LOGIC

  const filteredVendors = vendorData.filter((vendor) => {

    const matchesSearch =
      vendor.company.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || vendor.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div>

      {/* HEADER */}

      <div className="flex justify-between items-center mb-6">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Vendor Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage vendor records and status
          </p>

        </div>

      </div>

      {/* SEARCH + FILTER */}

      <div className="bg-white rounded-2xl shadow-md p-5 mb-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* SEARCH */}

          <input
            type="text"
            placeholder="Search vendor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* FILTER */}

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          >

            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Blacklisted">Blacklisted</option>

          </select>

        </div>

      </div>

      {/* TABLE */}

      <div className="bg-white rounded-2xl shadow-md p-5 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-gray-100 text-left">

              <th className="p-4">Company</th>
              <th className="p-4">Owner</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredVendors.map((vendor) => (

              <tr
                key={vendor.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >

                <td className="p-4 font-medium">
                  {vendor.company}
                </td>

                <td className="p-4">
                  {vendor.owner}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm
                    ${
                      vendor.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : vendor.status === "Inactive"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {vendor.status}
                  </span>

                </td>

                <td className="p-4">

                  <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg hover:bg-blue-200">
                    View
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default VendorManagement;