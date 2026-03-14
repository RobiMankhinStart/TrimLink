import { Zap } from "lucide-react";
import React from "react";

const DashFooter = () => {
  return (
    <>
      {" "}
      <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-200">
            <Zap size={18} />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">Upgrade to Pro</p>
            <p className="text-xs text-slate-500 font-medium">
              Unlock custom domains and detailed geographic analytics.
            </p>
          </div>
        </div>
        <button className="text-xs font-black text-indigo-600 hover:underline uppercase tracking-widest">
          Learn More
        </button>
      </div>
    </>
  );
};

export default DashFooter;
