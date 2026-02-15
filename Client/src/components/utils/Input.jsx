import React from "react";

const Input = ({
  label,
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  containerClassName = "",
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-2 w-full ${containerClassName}`}>
      {label && (
        <label className="text-sm font-medium text-slate-700">{label}</label>
      )}
      <div className="relative group">
        {Icon && (
          <Icon
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors"
            size={18}
          />
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            w-full py-3 rounded-xl border border-slate-200 outline-none transition-all
            focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500
            placeholder:text-slate-400 text-slate-700
            ${Icon ? "pl-10" : "pl-4"} 
            ${className}
          `}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
