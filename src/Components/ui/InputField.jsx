import { Eye, EyeOff } from 'lucide-react';

export const InputField = ({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  icon: Icon,
  showPasswordToggle = false,
  showPassword,
  onTogglePassword
}) => {
  return (
    <div>
      {label && (
        <label className="block text-gray-600 font-semibold mb-2 text-xs uppercase tracking-wide">
          {label}
        </label>
      )}

      <div className="relative w-[300px]">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        )}

        <input
          type={showPasswordToggle && !showPassword ? 'password' : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            w-full
            h-[40px]
            pl-10
            pr-10
            bg-white
            border-[1.5px]
            border-[#DFDFDF]
            rounded-[10px]
            text-sm
            text-gray-700
            outline-none
            focus:border-[#DFDFDF]
          "
        />

        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};









// import { Eye, EyeOff, CreditCard, Key, Upload, School, Users, BookOpen, Layers, Settings } from 'lucide-react';

// export const InputField = ({ 
//   label, 
//   type = 'text', 
//   value, 
//   onChange, 
//   placeholder, 
//   icon: Icon,
//   showPasswordToggle = false,
//   showPassword,
//   onTogglePassword
// }) => {
//   return (
//     <div>
//       <label className="block text-gray-600 font-semibold mb-2.5 text-xs uppercase tracking-wide">
//         {label}
//       </label>
//       <div className="relative">
//         {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />}
//         <input
//           type={showPasswordToggle && !showPassword ? 'password' : type}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           className="w-full pl-12 pr-12 py-3.5 bg-blue-50 border border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-gray-700"
//         />
//         {showPasswordToggle && (
//           <button
//             type="button"
//             onClick={onTogglePassword}
//             className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//           >
//             {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };







// import React from 'react';
// import { Eye, EyeOff } from 'lucide-react';

// export const InputField = ({ 
//   label, 
//   type = 'text', 
//   value, 
//   onChange, 
//   placeholder, 
//   icon: Icon,
//   showPasswordToggle = false,
//   showPassword,
//   onTogglePassword
// }) => {
//   return (
//     <div>
//       <label className="block text-gray-700 font-medium mb-2 text-sm">
//         {label}
//       </label>
//       <div className="relative">
//         {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />}
//         <input
//           type={showPasswordToggle && !showPassword ? 'password' : type}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
//         />
//         {showPasswordToggle && (
//           <button
//             type="button"
//             onClick={onTogglePassword}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//           >
//             {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };