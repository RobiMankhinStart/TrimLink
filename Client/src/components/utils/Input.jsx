// import React from "react";

// const Input = ({
//   label,
//   icon: Icon,
//   type = "text",
//   placeholder,
//   value,
//   onChange,
//   className = "",
//   containerClassName = "",
//   ...props
// }) => {
//   return (
//     <div className={`flex flex-col gap-2 w-full ${containerClassName}`}>
//       {label && (
//         <label className="text-sm font-medium text-slate-700">{label}</label>
//       )}
//       <div className="relative group">
//         {Icon && (
//           <Icon
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors"
//             size={18}
//           />
//         )}
//         <input
//           type={type}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           className={`
//             w-full py-3 rounded-xl border border-slate-200 outline-none transition-all
//             focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500
//             placeholder:text-slate-400 text-slate-700
//             ${Icon ? "pl-10" : "pl-4"}
//             ${className}
//           `}
//           {...props}
//         />
//       </div>
//     </div>
//   );
// };

// export default Input;

// import React from "react";
// import { AlertCircle } from "lucide-react"; // Nice icon for error messages

// const Input = ({
//   label,
//   labelRight,
//   icon: Icon,
//   type = "text",
//   placeholder,
//   value,
//   onChange,
//   error, // New prop for error messages
//   className = "",
//   containerClassName = "",
//   ...props
// }) => {

//   const hasError = Boolean(error);

//   return (
//     <div className={`flex flex-col gap-1.5 w-full ${containerClassName}`}>

//       {(label || labelRight) && (
//         <div className="flex justify-between items-center mb-0.5">
//           {label && (
//             <label
//               className={`text-sm font-medium ${hasError ? "text-red-600" : "text-slate-700"}`}
//             >
//               {label}
//             </label>
//           )}
//           {labelRight && labelRight}
//         </div>
//       )}

//       <div className="relative group">
//         {Icon && (
//           <Icon
//             className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors
//               ${hasError ? "text-red-400" : "text-slate-400 group-focus-within:text-indigo-500"}
//             `}
//             size={18}
//           />
//         )}

//         <input
//           type={type}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           className={`
//             w-full py-3 rounded-xl border outline-none transition-all
//             placeholder:text-slate-400 text-slate-700
//             ${Icon ? "pl-10" : "pl-4"}
//             ${
//               hasError
//                 ? "border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-500/20"
//                 : "border-slate-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
//             }
//             ${className}
//           `}
//           {...props}
//         />
//       </div>

//       {/* Error Message Section */}
//       {hasError && (
//         <div className="flex items-center gap-1 mt-1 animate-in fade-in slide-in-from-top-1">
//           <AlertCircle size={14} className="text-red-500" />
//           <span className="text-xs font-medium text-red-500">{error}</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Input;

import React, { forwardRef } from "react";
import { AlertCircle } from "lucide-react";

/**
 * Full Reusable Input Component
 * Built for React Hook Form, Tailwind CSS, and Lucide Icons.
 */
const Input = forwardRef(
  (
    {
      label,
      labelRight,
      icon: Icon,
      type = "text",
      placeholder,
      error,
      className = "",
      containerClassName = "",
      ...props
    },
    ref,
  ) => {
    const hasError = Boolean(error);

    return (
      <div className={`flex flex-col gap-1.5 w-full ${containerClassName}`}>
        {/* Label Section: Title on the left, optional link/badge on the right */}
        {(label || labelRight) && (
          <div className="flex justify-between items-center mb-0.5">
            {label && (
              <label
                className={`text-sm font-medium transition-colors ${
                  hasError ? "text-red-600" : "text-slate-700"
                }`}
              >
                {label}
              </label>
            )}
            {labelRight && (
              <div className="flex items-center">{labelRight}</div>
            )}
          </div>
        )}

        {/* Input Section */}
        <div className="relative group">
          {Icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Icon
                className={`transition-colors ${
                  hasError
                    ? "text-red-400"
                    : "text-slate-400 group-focus-within:text-indigo-500"
                }`}
                size={18}
              />
            </div>
          )}

          <input
            ref={ref} // Forwards the ref to the actual HTML input
            type={type}
            placeholder={placeholder}
            className={`
            w-full py-3 rounded-xl border outline-none transition-all
            placeholder:text-slate-400 text-slate-700 text-sm
            ${Icon ? "pl-10" : "pl-4"} 
            ${
              hasError
                ? "border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-500/20"
                : "border-slate-200 bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
            }
            ${className}
          `}
            {...props} // Spreads name, onChange, onBlur, value from register()
          />
        </div>

        {/* Error Logic: Shows icon and message when an error exists */}
        {hasError && (
          <div className="flex items-center gap-1 mt-1 animate-in fade-in slide-in-from-top-1 duration-200">
            <AlertCircle size={14} className="text-red-500 shrink-0" />
            <span className="text-xs font-medium text-red-500">{error}</span>
          </div>
        )}
      </div>
    );
  },
);

// Setting display name helps with React DevTools debugging
Input.displayName = "Input";

export default Input;
