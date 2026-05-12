import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // LOGIN LOGIC

  const handleLogin = (e) => {

    e.preventDefault();

    // ADMIN LOGIN

    if (
      email === "admin@gmail.com" &&
      password === "12345"
    ) {

      localStorage.setItem("role", "admin");

      navigate("/admin/dashboard");

    }

    // VENDOR LOGIN

    else if (
      email === "vendor@gmail.com" &&
      password === "12345"
    ) {

      localStorage.setItem("role", "vendor");

      navigate("/vendor/dashboard");

    }

    // INVALID LOGIN

    else {

      alert("Invalid Email or Password");

    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-5">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-gray-100 p-8">

        {/* HEADER */}

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-blue-600">
            Dynarex ERP
          </h1>

          <p className="text-gray-500 mt-2">
            Vendor Management Portal
          </p>

        </div>

        {/* LOGIN FORM */}

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
            />

          </div>

          {/* DEMO CREDENTIALS */}

          <div className="bg-slate-100 rounded-xl p-4 text-sm">

            <p className="font-semibold mb-2">
              Demo Credentials
            </p>

            <p>
              <span className="font-medium">
                Admin:
              </span>{" "}
              admin@gmail.com / 12345
            </p>

            <p className="mt-1">
              <span className="font-medium">
                Vendor:
              </span>{" "}
              vendor@gmail.com / 12345
            </p>

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-all duration-300"
          >
            Login
          </button>

        </form>

        {/* FOOTER */}

        <p className="text-center text-sm text-gray-500 mt-6">
          ERP Vendor Management System
        </p>

      </div>

    </div>
  );
};

export default Login;