const invoices = [
  {
    id: "INV-1001",
    vendor: "ABC Pvt Ltd",
    amount: "₹25,000",
    status: "Pending",
  },
  {
    id: "INV-1002",
    vendor: "XYZ Traders",
    amount: "₹40,000",
    status: "Approved",
  },
  {
    id: "INV-1003",
    vendor: "Global Supplies",
    amount: "₹18,000",
    status: "Rejected",
  },
];

const Invoices = () => {
  return (
    <div>

      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Invoice Approval
          </h1>

          <p className="text-gray-500 mt-1">
            Review and approve vendor invoices
          </p>
        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-md p-5 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-gray-100 text-left">

              <th className="p-4">Invoice ID</th>
              <th className="p-4">Vendor</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            {invoices.map((invoice) => (

              <tr
                key={invoice.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >

                <td className="p-4 font-medium">
                  {invoice.id}
                </td>

                <td className="p-4">
                  {invoice.vendor}
                </td>

                <td className="p-4">
                  {invoice.amount}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium
                    ${
                      invoice.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : invoice.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {invoice.status}
                  </span>

                </td>

                <td className="p-4 flex gap-3">

                  <button className="bg-green-100 text-green-700 px-3 py-1 rounded-lg hover:bg-green-200">
                    Approve
                  </button>

                  <button className="bg-red-100 text-red-700 px-3 py-1 rounded-lg hover:bg-red-200">
                    Reject
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

export default Invoices;