import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="md:ml-64 p-5 bg-slate-100 min-h-screen w-full">

        <Navbar />

        <div className="mt-5">
          {children}
        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;