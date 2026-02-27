import React from "react";
import { AlertCircle } from "lucide-react";

const CheckBox = ({ label, error, id, ...props }) => {
  const hasError = Boolean(error);

  return (
    <div className="flex flex-col gap-1.5 py-2">
      <div className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          id={id}
          className={`
            w-4 h-4 rounded border-slate-300 text-indigo-600 
            focus:ring-indigo-500 cursor-pointer transition-all
            ${hasError ? "border-red-500" : "border-slate-300"}
          `}
          {...props}
        />
        <label
          htmlFor={id}
          className={`text-sm cursor-pointer select-none ${
            hasError ? "text-red-600 font-medium" : "text-slate-500"
          }`}
        >
          {label}
        </label>
      </div>

      {/* Error Message - matches your Input style */}
      {hasError && (
        <div className="flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
          <AlertCircle size={12} className="text-red-500" />
          <span className="text-[11px] font-medium text-red-500">{error}</span>
        </div>
      )}
    </div>
  );
};

export default CheckBox;
