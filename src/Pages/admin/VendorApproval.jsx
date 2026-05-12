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
        ? { ...vendor, status: "Approved" }
        : vendor
    );

    setVendors(updated);
  };

  // REJECT

  const handleReject = (id) => {

    const updated = vendors.map((vendor) =>
      vendor.id === id
        ? { ...vendor, status: "Rejected" }
        : vendor
    );

    setVendors(updated);
  };

  // REMARKS

  const handleRemarks = (id, value) => {

    const updated = vendors.map((vendor) =>
      vendor.id === id
        ? { ...vendor, remarks: value }
        : vendor
    );

    setVendors(updated);
  };

  return (
    <div>

      <div className="mb-6">

        <h1 className="text-3xl font-bold text-slate-800">
          Vendor Approval Queue
        </h1>

        <p className="text-gray-500 mt-1">
          Review vendor onboarding requests
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-md p-5 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-gray-100 text-left">

              <th className="p-4">Company</th>
              <th className="p-4">Owner</th>
              <th className="p-4">Submitted Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            {vendors.map((vendor) => (

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
                  {vendor.submitted}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm
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

                <td className="p-4 space-y-2">

                  <div className="flex gap-3">

                    <button
                      onClick={() => handleApprove(vendor.id)}
                      className="bg-green-100 text-green-700 px-3 py-1 rounded-lg hover:bg-green-200"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => handleReject(vendor.id)}
                      className="bg-red-100 text-red-700 px-3 py-1 rounded-lg hover:bg-red-200"
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