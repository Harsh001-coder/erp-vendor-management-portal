const orders = [
  {
    id: "PO-1001",
    product: "Laptop",
    quantity: 20,
    delivery: "15 May 2026",
    status: "Pending",
  },
  {
    id: "PO-1002",
    product: "Keyboard",
    quantity: 50,
    delivery: "18 May 2026",
    status: "Approved",
  },
  {
    id: "PO-1003",
    product: "Mouse",
    quantity: 100,
    delivery: "20 May 2026",
    status: "Delivered",
  },
];

const VendorPO = () => {
  return (
    <div>

      <div className="mb-6">

        <h1 className="text-3xl font-bold text-slate-800">
          Vendor Purchase Orders
        </h1>

        <p className="text-gray-500 mt-1">
          Track assigned purchase orders and delivery timelines
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-md p-5 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-gray-100 text-left">

              <th className="p-4">PO ID</th>
              <th className="p-4">Product</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Delivery Date</th>
              <th className="p-4">Status</th>

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
                  {order.product}
                </td>

                <td className="p-4">
                  {order.quantity}
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
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {order.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default VendorPO;