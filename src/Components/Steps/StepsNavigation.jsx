import React from 'react';

export const StepNavigation = ({ currentStep, onStepClick }) => {
  const steps = [
    { number: 1, label: 'ERP Connection' },
    { number: 2, label: 'Loadchart' },
    { number: 3, label: 'Manual Entry' }
  ];

  return (
    <div
      className="
        fixed
        right-0
        top-0
        h-screen
        w-[450px]
        bg-[linear-gradient(180deg,#4BACCE_0%,#265768_100%)]
        flex
        flex-col
        justify-center
        gap-8
        pl-8
        z-50
      "
    >
      {steps.map((step, index) => {
        const isActive = currentStep === step.number;

        return (
          <div
            key={step.number}
            className="flex items-center gap-3 cursor-pointer relative"
            onClick={() => onStepClick(step.number)}
          >
            {/* Circle with number */}
            <div
              className={`
                w-[80px]
                h-[80px]
                rounded-full
                flex
                items-center
                justify-center
                font-bold
                text-[32px]
                shadow-lg
                flex-shrink-0
                transition-all
                ${isActive 
                  ? 'bg-white text-[#4BACCE]' 
                  : 'bg-white/90 text-[#265768]'}
              `}
            >
              {step.number}
            </div>

            {/* Label */}
            <span
              className={`
                font-semibold
                text-[25px]
                text-white
                leading-tight
                transition-all
                ${isActive ? 'opacity-100' : 'opacity-90'}
              `}
            >
              {step.label}
            </span>

            {/* Connecting line (except for last item) */}
            {index < steps.length - 1 && (
              <div
                className="
                  absolute
                  left-[37px]
                  top-[79px]
                  w-[5px]
                  h-[33px]
                  bg-white/40
                "
              />
            )}
          </div>
        );
      })}
    </div>
  );
};











// import React from 'react';

// export const StepNavigation = ({ currentStep, onStepClick }) => {
//   const steps = [
//     { number: 1, label: 'ERP Connection' },
//     { number: 2, label: 'Loadchart' },
//     { number: 3, label: 'Manual Entry' }
//   ];

//   return (
//     <div
//       className="
//         fixed
//         right-0
//         top-0
//         h-screen
//         w-[400px]
//         bg-[linear-gradient(180deg,#4BACCE_0%,#265768_100%)]
//         flex
//         flex-col
//         justify-center
//         gap-12
//         pr-8
//         z-50
//       "
//     >
//       {steps.map((step) => {
//         const isActive = currentStep === step.number;

//         return (
//           <div
//             key={step.number}
//             className="flex items-center gap-4 cursor-pointer relative flex-row-reverse"
//             onClick={() => onStepClick(step.number)}
//           >
//             {/* Circle with number */}
//             <div
//               className={`
//                 w-[50px]
//                 h-[50px]
//                 rounded-full
//                 flex
//                 items-center
//                 justify-center
//                 font-bold
//                 text-[28px]
//                 shadow-lg
//                 flex-shrink-0
//                 ${isActive 
//                   ? 'bg-white text-[#4BACCE]' 
//                   : 'bg-white/80 text-[#265768]'}
//               `}
//             >
//               {step.number}
//             </div>

//             {/* Label */}
//             <span
//               className="
//                 font-semibold
//                 text-[18px]
//                 text-white
//                 leading-tight
//                 text-right
//               "
//             >
//               {step.label}
//             </span>

//             {/* Connecting line (except for last item) */}
//             {step.number < steps.length && (
//               <div
//                 className="
//                   absolute
//                   right-[25px]
//                   top-[50px]
//                   w-[2px]
//                   h-[60px]
//                   bg-white/30
//                 "
//               />
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };







// import React from 'react';

// export const StepNavigation = ({ currentStep, onStepClick }) => {
//   const steps = [
//     { number: 1, label: 'ERP Connection' },
//     { number: 2, label: 'Loadchart' },
//     { number: 3, label: 'Manual Entry' }
//   ];

//   return (
//     <div
//       className="
//         fixed
//         right-0
//         top-1/2
//         -translate-y-1/2
//         w-[315px]
//         h-[680px]
//         bg-[linear-gradient(270deg,#265768_0%,#4BACCE_100%)]
//         flex
//         flex-col
//         justify-center
//         gap-14
//         px-6
//         shadow-2xl
//         z-50
//       "
//     >
//       {steps.map((step) => {
//         const isActive = currentStep === step.number;

//         return (
//           <div
//             key={step.number}
//             className="flex items-center gap-6 cursor-pointer"
//             onClick={() => onStepClick(step.number)}
//           >
//             {/* Circle */}
//             <div
//               className={`
//                 w-[80px]
//                 h-[80px]
//                 rounded-full
//                 flex
//                 items-center
//                 justify-center
//                 font-playfair
//                 font-bold
//                 text-[73.14px]
//                 leading-[120%]
//                 text-white
//                 shadow-[0px_4.57px_4.57px_rgba(0,0,0,0.25)]
//                 ${isActive ? 'bg-[#336696]' : 'bg-[#E6E6E6] text-[#265768]'}
//               `}
//             >
//               {step.number}
//             </div>

//             {/* Label */}
//             <span
//               className="
//                 font-playfair
//                 font-bold
//                 text-[26px]
//                 leading-[120%]
//                 text-white
//               "
//             >
//               {step.label}
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   );
// };













// import React, { useState } from 'react';
// import { Eye, EyeOff, CreditCard, Key, Upload, School, Users, BookOpen, Layers, Settings } from 'lucide-react';

// // ============ REUSABLE COMPONENTS ============

// export const StepNavigation = ({ currentStep, onStepClick }) => {
//   const steps = [
//     { number: 1, label: 'ERP Connection' },
//     { number: 2, label: 'Loadchart' },
//     { number: 3, label: 'Manual Entry' }
//   ];

//   return (
//     <div className="fixed right-0 top-0 h-full w-96 bg-gradient-to-b from-[#265768] to-[#4BACCE] flex flex-col justify-center gap-12 px-6 shadow-2xl z-50">
//       {steps.map((step) => (
//         <div 
//           key={step.number} 
//           className="flex items-center gap-5 cursor-pointer transition-all hover:scale-105"
//           onClick={() => onStepClick(step.number)}
//         >
//           <div
//             className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 ${
//               currentStep === step.number
//                 ? 'bg-white text-teal-700 shadow-xl scale-110'
//                 : 'bg-teal-500 text-white opacity-70 hover:opacity-100'
//             }`}
//           >
//             {step.number}
//           </div>
//           <span className={`text-white font-semibold text-lg transition-all ${
//             currentStep === step.number ? 'opacity-100' : 'opacity-70'
//           }`}>
//             {step.label}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };






// import React from 'react';

// export const StepNavigation = ({ currentStep }) => {
//   const steps = [
//     { number: 1, label: 'ERP Connection' },
//     { number: 2, label: 'Loadchart' },
//     { number: 3, label: 'Manual Entry' }
//   ];

//   return (
//     <div className="absolute right-0 top-0 h-full w-48 bg-gradient-to-b from-cyan-600 to-cyan-700 flex flex-col justify-center gap-8 px-8">
//       {steps.map((step) => (
//         <div key={step.number} className="flex items-center gap-4">
//           <div
//             className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold transition-all ${
//               currentStep === step.number
//                 ? 'bg-white text-cyan-700 shadow-lg'
//                 : 'bg-cyan-500 text-white'
//             }`}
//           >
//             {step.number}
//           </div>
//           <span className="text-white font-medium text-lg">{step.label}</span>
//         </div>
//       ))}
//     </div>
//   );
// };