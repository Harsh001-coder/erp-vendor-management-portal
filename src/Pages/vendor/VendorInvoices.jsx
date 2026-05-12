import { useState } from "react";

const initialInvoices = [
  {
    id: "INV-1001",
    amount: "₹25,000",
    submitted: "10 May 2026",
    status: "Pending",
  },
  {
    id: "INV-1002",
    amount: "₹40,000",
    submitted: "08 May 2026",
    status: "Approved",
  },
];

const VendorInvoices = () => {

  const [invoices, setInvoices] = useState(initialInvoices);

  const [formData, setFormData] = useState({
    id: "",
    amount: "",
  });

  // INPUT CHANGE

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // SUBMIT INVOICE

  const handleSubmitInvoice = () => {

    if (!formData.id || !formData.amount) {
      alert("Please fill all fields");
      return;
    }

    const newInvoice = {
      id: formData.id,
      amount: formData.amount,
      submitted: "14 May 2026",
      status: "Pending",
    };

    setInvoices([...invoices, newInvoice]);

    setFormData({
      id: "",
      amount: "",
    });

  };

  return (
    <div>

      {/* HEADER */}

      <div className="mb-6">

        <h1 className="text-3xl font-bold text-slate-800">
          Vendor Invoices
        </h1>

        <p className="text-gray-500 mt-1">
          Submit and track invoice approvals
        </p>

      </div>

      {/* INVOICE FORM */}

      <div className="bg-white rounded-2xl shadow-md p-5 mb-6">

        <h2 className="text-2xl font-bold mb-5">
          Submit Invoice
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <input
            type="text"
            name="id"
            placeholder="Invoice ID"
            value={formData.id}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            name="amount"
            placeholder="Invoice Amount"
            value={formData.amount}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="file"
            className="border border-gray-300 rounded-lg px-4 py-3"
          />

        </div>

        <button
          onClick={handleSubmitInvoice}
          className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Submit Invoice
        </button>

      </div>

      {/* TABLE */}

      <div className="bg-white rounded-2xl shadow-md p-5 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-gray-100 text-left">

              <th className="p-4">Invoice ID</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Submitted Date</th>
              <th className="p-4">Status</th>

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
                  {invoice.amount}
                </td>

                <td className="p-4">
                  {invoice.submitted}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm
                    ${
                      invoice.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {invoice.status}
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

export default VendorInvoices;