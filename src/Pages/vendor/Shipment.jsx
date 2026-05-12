const shipments = [
  {
    id: "SHP-1001",
    product: "Laptop",
    carrier: "BlueDart",
    tracking: "BD12345678",
    status: "In Transit",
  },
  {
    id: "SHP-1002",
    product: "Keyboard",
    carrier: "Delhivery",
    tracking: "DL98765432",
    status: "Delivered",
  },
  {
    id: "SHP-1003",
    product: "Mouse",
    carrier: "DTDC",
    tracking: "DT11223344",
    status: "Pending",
  },
];

const Shipment = () => {
  return (
    <div>

      <div className="mb-6">

        <h1 className="text-3xl font-bold text-slate-800">
          Shipment Tracking
        </h1>

        <p className="text-gray-500 mt-1">
          Track shipment status and delivery progress
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-md p-5 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-gray-100 text-left">

              <th className="p-4">Shipment ID</th>
              <th className="p-4">Product</th>
              <th className="p-4">Carrier</th>
              <th className="p-4">Tracking ID</th>
              <th className="p-4">Status</th>

            </tr>

          </thead>

          <tbody>

            {shipments.map((shipment) => (

              <tr
                key={shipment.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >

                <td className="p-4 font-medium">
                  {shipment.id}
                </td>

                <td className="p-4">
                  {shipment.product}
                </td>

                <td className="p-4">
                  {shipment.carrier}
                </td>

                <td className="p-4 text-blue-600 font-medium">
                  {shipment.tracking}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium
                    ${
                      shipment.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : shipment.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {shipment.status}
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

export default Shipment;