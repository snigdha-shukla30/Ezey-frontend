export const CardContainer = ({ children, title }) => {
  return (
    <div className="flex-1 flex items-center justify-center px-8 py-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        {title && (
          <p className="text-center text-teal-700 mb-10 text-xl leading-relaxed font-medium">
            {title}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};








// import React from 'react';

// export const CardContainer = ({ children, title }) => {
//   return (
//     <div className="flex-1 flex items-center justify-center px-8">
//       <div className="w-full max-w-2xl bg-white rounded-lg shadow-2xl p-12">
//         {title && (
//           <p className="text-center text-cyan-700 mb-10 text-lg leading-relaxed">
//             {title}
//           </p>
//         )}
//         {children}
//       </div>
//     </div>
//   );
// };