const orders = [
  {
    id: "PO-1001",
    vendor: "ABC Pvt Ltd",
    delivery: "15 May 2026",
    status: "Pending",
  },
  {
    id: "PO-1002",
    vendor: "XYZ Traders",
    delivery: "18 May 2026",
    status: "Approved",
  },
  {
    id: "PO-1003",
    vendor: "Global Supplies",
    delivery: "22 May 2026",
    status: "Rejected",
  },
];

const PurchaseOrders = () => {
  return (
    <div>

      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Purchase Orders
          </h1>

          <p className="text-gray-500 mt-1">
            Manage vendor purchase orders
          </p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          + Create PO
        </button>

      </div>

      <div className="bg-white rounded-2xl shadow-md p-5 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-gray-100 text-left">

              <th className="p-4">PO Number</th>
              <th className="p-4">Vendor</th>
              <th className="p-4">Delivery Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (

              <tr
                key={order.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >

                <td className="p-4 font-medium">
                  {order.id}
                </td>

                <td className="p-4">
                  {order.vendor}
                </td>

                <td className="p-4">
                  {order.delivery}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium
                    ${
                      order.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>

                </td>

                <td className="p-4 flex gap-3">

                  <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg hover:bg-blue-200">
                    View
                  </button>

                  <button className="bg-green-100 text-green-700 px-3 py-1 rounded-lg hover:bg-green-200">
                    Approve
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

export default PurchaseOrders;