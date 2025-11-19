import React from "react";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";

const Error = () => {
  return (
    <div className="min-h-screen"> 
      <Navbar />
      <div className=" bg-gray-100 flex items-center justify-center p-4">
        <div className="text-center max-w-2xl">
          {/* 404 Number */}
          <h1 className="text-9xl md:text-9xl font-bold text-secondary mb-4 opacity-90">
            404
          </h1>

          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Oops! Page Not Found
          </h2>

          <p className="text-secondary text-lg mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

        

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/")}
              className="btn btn-lg bg-lime-400 hover:bg-lime-500 text-teal-900 border-0 px-8"
            >
              Go to Homepage
            </button>

            <button
              onClick={() => window.history.back()}
              className="btn btn-lg btn-outline text-teal-900 hover:bg-teal-900 hover:text-white border-teal-900 px-8"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;