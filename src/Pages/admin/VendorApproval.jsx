import { useState } from "react";

const initialVendors = [
  {
    id: 1,
    company: "ABC Pvt Ltd",
    owner: "Rahul Sharma",
    submitted: "12 May 2026",
    status: "Pending",
    remarks: "",
  },
  {
    id: 2,
    company: "XYZ Traders",
    owner: "Aman Verma",
    submitted: "11 May 2026",
    status: "Pending",
    remarks: "",
  },
];

const VendorApproval = () => {

  const [vendors, setVendors] = useState(initialVendors);

  // APPROVE

  const handleApprove = (id) => {

    const updated = vendors.map((vendor) =>
      vendor.id === id
        ? {
            ...vendor,
            status: "Approved",
          }
        : vendor
    );

    setVendors(updated);

  };

  // REJECT

  const handleReject = (id) => {

    const updated = vendors.map((vendor) =>
      vendor.id === id
        ? {
            ...vendor,
            status: "Rejected",
          }
        : vendor
    );

    setVendors(updated);

  };

  // REMARKS CHANGE

  const handleRemarks = (id, value) => {

    const updated = vendors.map((vendor) =>
      vendor.id === id
        ? {
            ...vendor,
            remarks: value,
          }
        : vendor
    );

    setVendors(updated);

  };

  // SAVE REMARKS

  const handleSaveRemarks = () => {

    alert("Remarks Saved Successfully");

  };

  return (
    <div>

      {/* HEADER */}

      <div className="mb-6">

        <h1 className="text-3xl font-bold text-slate-800">
          Vendor Approval Queue
        </h1>

        <p className="text-gray-500 mt-1">
          Review vendor onboarding requests
        </p>

      </div>

      {/* TABLE */}

      <div className="bg-white rounded-2xl shadow-md p-5 overflow-x-auto">

        <table className="w-full border-separate border-spacing-y-2">

          <thead>

            <tr className="bg-gray-100 text-left">

              <th className="p-4 rounded-l-xl">
                Company
              </th>

              <th className="p-4">
                Owner
              </th>

              <th className="p-4">
                Submitted Date
              </th>

              <th className="p-4">
                Status
              </th>

              <th className="p-4 rounded-r-xl">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {vendors.map((vendor) => (

              <tr
                key={vendor.id}
                className="bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >

                <td className="p-4 font-medium rounded-l-xl">
                  {vendor.company}
                </td>

                <td className="p-4">
                  {vendor.owner}
                </td>

                <td className="p-4">
                  {vendor.submitted}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium
                    ${
                      vendor.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : vendor.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {vendor.status}
                  </span>

                </td>

                <td className="p-4 rounded-r-xl">

                  <div className="flex gap-3 mb-3">

                    <button
                      onClick={() => handleApprove(vendor.id)}
                      disabled={vendor.status !== "Pending"}
                      className={`px-4 py-2 rounded-lg transition-all duration-300
                      ${
                        vendor.status !== "Pending"
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-green-100 text-green-700 hover:bg-green-200"
                      }`}
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => handleReject(vendor.id)}
                      disabled={vendor.status !== "Pending"}
                      className={`px-4 py-2 rounded-lg transition-all duration-300
                      ${
                        vendor.status !== "Pending"
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-red-100 text-red-700 hover:bg-red-200"
                      }`}
                    >
                      Reject
                    </button>

                  </div>

                  <textarea
                    value={vendor.remarks}
                    onChange={(e) =>
                      handleRemarks(vendor.id, e.target.value)
                    }
                    placeholder="Enter rejection remarks..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
                    rows="2"
                  ></textarea>

                  <button
                    onClick={handleSaveRemarks}
                    className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
                  >
                    Save Remarks
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

export default VendorApproval;