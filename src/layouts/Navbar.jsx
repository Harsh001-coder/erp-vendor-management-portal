import adminImg from "../assets/admin.png"
const Navbar = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">
        Vendor Management Portal
      </h2>

      <div className="flex items-center gap-3">
        <img
          src={adminImg}
          alt="user"
          className="w-12 h-12 rounded-full object-cover border border-gray-300"
        />
        <p className="font-medium">Admin</p>
      </div>
    </div>
  );
};

export default Navbar;