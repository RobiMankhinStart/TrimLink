import React from "react";
import { Link } from "react-router";
import Button from "../commonUi/Button";

const Bottom = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto bg-indigo-600 rounded-3xl p-6 sm:p-12 text-center text-white shadow-xl shadow-indigo-200 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to start trimming?
          </h2>
          <p className="text-indigo-100 mb-6 sm:mb-8 text-sm sm:text-lg">
            Join 10,000+ users managing their links with Trimmr.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/register">
              <Button
                variant="secondary"
                size="lg"
                className="w-full cursor-pointer hover:bg-indigo-600! hover:border-2! hover:border-white! hover:text-white transition-all sm:w-auto bg-white text-indigo-600 border-non "
              >
                Create Free Account
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white text-white hover:bg-indigo-500"
            >
              View Pricing
            </Button>
          </div>
        </div>
        {/* Abstract decoration for the CTA card */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-indigo-500 rounded-full opacity-50 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Bottom;
