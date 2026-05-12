import { useState } from "react";

const VendorSignup = () => {

  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div>


      <div className="mb-6">

        <h1 className="text-3xl font-bold text-slate-800">
          Vendor Onboarding
        </h1>

        <p className="text-gray-500 mt-1">
          Complete vendor registration workflow
        </p>

      </div>

      {/* PROGRESS BAR */}

      <div className="bg-white rounded-2xl shadow-md p-5 mb-6">

        <div className="flex justify-between mb-3">

          <div className={`flex-1 h-2 rounded-full mr-2 ${
            step >= 1 ? "bg-blue-600" : "bg-gray-300"
          }`}></div>

          <div className={`flex-1 h-2 rounded-full mr-2 ${
            step >= 2 ? "bg-blue-600" : "bg-gray-300"
          }`}></div>

          <div className={`flex-1 h-2 rounded-full ${
            step >= 3 ? "bg-blue-600" : "bg-gray-300"
          }`}></div>

        </div>

        <div className="flex justify-between text-sm text-gray-500">

          <p>Company Info</p>
          <p>Bank Details</p>
          <p>Documents</p>

        </div>

      </div>

     

      <div className="bg-white rounded-2xl shadow-md p-6">

        

        {step === 1 && (

          <div>

            <h2 className="text-2xl font-bold mb-5">
              Company Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Company Name"
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="text"
                placeholder="Owner Name"
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              />

            </div>

          </div>

        )}


        {step === 2 && (

          <div>

            <h2 className="text-2xl font-bold mb-5">
              Bank Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Bank Name"
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="text"
                placeholder="Account Number"
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="text"
                placeholder="IFSC Code"
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="text"
                placeholder="GST Number"
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              />

            </div>

          </div>

        )}

        {step === 3 && (

          <div>

            <h2 className="text-2xl font-bold mb-5">
              Upload Documents
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>

                <label className="block mb-2 font-medium">
                  Upload PAN Card
                </label>

                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Upload GST Certificate
                </label>

                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />

              </div>

            </div>

          </div>

        )}


        <div className="flex justify-between mt-8">

          <button
            onClick={prevStep}
            disabled={step === 1}
            className={`px-6 py-3 rounded-lg ${
              step === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Previous
          </button>

          {step < 3 ? (

            <button
              onClick={nextStep}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Next
            </button>

          ) : (

            <button
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Submit Application
            </button>

          )}

        </div>

      </div>

    </div>
  );
};

export default VendorSignup;