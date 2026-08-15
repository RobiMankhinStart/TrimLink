import { Zap } from "lucide-react";
import React from "react";
import Button from "../commonUi/Button";

const DashFooter = () => {
  return (
    <>
      {" "}
      <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-3xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4 flex-1">
          <div className="w-8 sm:w-10 h-8 sm:h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-200 shrink-0">
            <Zap size={16} className="sm:block" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-slate-900">
              Upgrade to Pro
            </p>
            <p className="text-xs text-slate-500 font-medium">
              Unlock custom domains and analytics.
            </p>
          </div>
        </div>
        <Button variant="outline" size="sm" className="uppercase">
          Learn More
        </Button>
      </div>
    </>
  );
};

export default DashFooter;
