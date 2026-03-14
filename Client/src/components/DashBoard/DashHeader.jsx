import { Filter } from "lucide-react";
import React from "react";

const DashHeader = () => {
  return (
    <>
      {" "}
      <div className="flex items-center justify-between mb-6 px-2">
        <div className="flex items-center gap-6">
          <button className="text-sm font-bold text-slate-900 border-b-2 border-indigo-600 pb-1">
            All Links
          </button>
          <button className="text-sm font-bold text-slate-400 hover:text-slate-600 pb-1 transition-colors">
            Active
          </button>
          <button className="text-sm font-bold text-slate-400 hover:text-slate-600 pb-1 transition-colors">
            Archived
          </button>
        </div>
        <button className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg hover:bg-slate-200 transition-all">
          <Filter size={14} /> Filters
        </button>
      </div>
    </>
  );
};

export default DashHeader;
