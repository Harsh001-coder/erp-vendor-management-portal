import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const barData = [
  {
    name: "Mon",
    orders: 12,
  },
  {
    name: "Tue",
    orders: 18,
  },
  {
    name: "Wed",
    orders: 10,
  },
  {
    name: "Thu",
    orders: 22,
  },
  {
    name: "Fri",
    orders: 16,
  },
];

const pieData = [
  {
    name: "Approved",
    value: 70,
  },
  {
    name: "Pending",
    value: 20,
  },
  {
    name: "Rejected",
    value: 10,
  },
];

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

const AdminDashboard = () => {
  return (
    <div>

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          ERP vendor management analytics overview
        </p>

      </div>

      {/* KPI CARDS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

        <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

          <h2 className="text-gray-500">
            Total Vendors
          </h2>

          <p className="text-3xl font-bold mt-2">
            120
          </p>

        </div>

        <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

          <h2 className="text-gray-500">
            Active Orders
          </h2>

          <p className="text-3xl font-bold mt-2">
            45
          </p>

        </div>

        <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

          <h2 className="text-gray-500">
            Pending Invoices
          </h2>

          <p className="text-3xl font-bold mt-2">
            18
          </p>

        </div>

        <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

          <h2 className="text-gray-500">
            Payments Released
          </h2>

          <p className="text-3xl font-bold mt-2">
            ₹2.5L
          </p>

        </div>

      </div>

      {/* CHART SECTION */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* BAR CHART */}

        <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">

          <h2 className="text-xl font-bold mb-5">
            Weekly Purchase Orders
          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={barData}>

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="orders"
                fill="#2563eb"
                radius={[10, 10, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* PIE CHART */}

        <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">

          <h2 className="text-xl font-bold mb-5">
            Invoice Approval Rate
          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <PieChart>

              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >

                {pieData.map((entry, index) => (

                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                  />

                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;