import React from "react";
import { Link } from "react-router";
import Button from "../utils/Button";

const Bottom = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto bg-indigo-600 rounded-3xl p-12 text-center text-white shadow-xl shadow-indigo-200 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start trimming?
          </h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Join 10,000+ users managing their links with Trimmr.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-white text-indigo-600 border-none"
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
