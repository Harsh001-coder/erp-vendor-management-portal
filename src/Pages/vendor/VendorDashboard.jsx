const VendorDashboard = () => {
  return (
    <div>

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Vendor Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Track orders, invoices and payment updates
        </p>

      </div>

      {/* KPI CARDS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

        <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

          <h2 className="text-gray-500">
            Total Orders
          </h2>

          <p className="text-3xl font-bold mt-2">
            28
          </p>

        </div>

        <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

          <h2 className="text-gray-500">
            Pending Invoices
          </h2>

          <p className="text-3xl font-bold mt-2">
            5
          </p>

        </div>

        <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

          <h2 className="text-gray-500">
            Payments Received
          </h2>

          <p className="text-3xl font-bold mt-2">
            ₹1.2L
          </p>

        </div>

        <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

          <h2 className="text-gray-500">
            Shipment Status
          </h2>

          <p className="text-3xl font-bold mt-2">
            12 Active
          </p>

        </div>

      </div>

      {/* RECENT ACTIVITIES */}

      <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-5">

        <h2 className="text-2xl font-bold mb-5">
          Recent Activities
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between items-center border-b pb-3">

            <div>

              <p className="font-medium">
                Invoice INV-1002 Approved
              </p>

              <p className="text-sm text-gray-500">
                Payment will be processed soon
              </p>

            </div>

            <span className="text-sm text-gray-400">
              2 hrs ago
            </span>

          </div>

          <div className="flex justify-between items-center border-b pb-3">

            <div>

              <p className="font-medium">
                Purchase Order PO-1005 Received
              </p>

              <p className="text-sm text-gray-500">
                Delivery expected by 20 May
              </p>

            </div>

            <span className="text-sm text-gray-400">
              Yesterday
            </span>

          </div>

          <div className="flex justify-between items-center">

            <div>

              <p className="font-medium">
                Shipment dispatched successfully
              </p>

              <p className="text-sm text-gray-500">
                Tracking ID: SHP-2031
              </p>

            </div>

            <span className="text-sm text-gray-400">
              2 days ago
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default VendorDashboard;