const payments = [
  {
    id: "PAY-1001",
    amount: "₹25,000",
    method: "Bank Transfer",
    date: "12 May 2026",
    status: "Paid",
  },
  {
    id: "PAY-1002",
    amount: "₹40,000",
    method: "UPI",
    date: "15 May 2026",
    status: "Pending",
  },
  {
    id: "PAY-1003",
    amount: "₹18,000",
    method: "Cheque",
    date: "08 May 2026",
    status: "Failed",
  },
];

const VendorPayments = () => {
  return (
    <div>

      <div className="mb-6">

        <h1 className="text-3xl font-bold text-slate-800">
          Vendor Payments
        </h1>

        <p className="text-gray-500 mt-1">
          Track received payments and payment status
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-md p-5 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-gray-100 text-left">

              <th className="p-4">Payment ID</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Payment Method</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>

            </tr>

          </thead>

          <tbody>

            {payments.map((payment) => (

              <tr
                key={payment.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >

                <td className="p-4 font-medium">
                  {payment.id}
                </td>

                <td className="p-4">
                  {payment.amount}
                </td>

                <td className="p-4">
                  {payment.method}
                </td>

                <td className="p-4">
                  {payment.date}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium
                    ${
                      payment.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : payment.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {payment.status}
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

export default VendorPayments;