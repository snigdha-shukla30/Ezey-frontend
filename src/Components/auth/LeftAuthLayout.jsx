import React from "react";

const LeftAuthBox = ({ children }) => {
  return (
    <div className="relative w-[540px] h-[650px] mt-4 rounded-[10px] p-[1px] bg-gradient-to-b from-[rgba(38,87,104,0.5)] to-[rgba(75,172,206,0.5)]">
      
      
      <div className="bg-[#F8F8F8] rounded-[9px] p-6 flex flex-col justify-between h-full ">
        
        
        <div className="w-full max-w-md mx-auto">
          {children}
        </div>

        
        <div className="mt-4 flex items-center justify-between text-[11px] text-[#A0AEC0]">
          <span>
            Copyright : Ezey. All Right Reserved.
          </span>

          <div>
            <a href="#" className="text-[#4BACCE] hover:underline">
              Terms & Conditions
            </a>
            <span className="mx-1 text-[#CBD5E0]">|</span>
            <a href="#" className="text-[#4BACCE] hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LeftAuthBox;






// import React from "react";

// const LeftAuthBox = ({ children }) => {
//   return (
//     <div className="bg-[#F8F8F8] rounded-3xl shadow-sm p-12 flex flex-col justify-between">
      
//       {/* ===== CONTENT AREA ===== */}
//       <div className="w-full max-w-md mx-auto">
//         {children}
//       </div>

//       {/* ===== FOOTER (ONE LINE) ===== */}
//       <div className="mt-8 flex items-center justify-between text-[11px] text-[#A0AEC0]">
//         <span>
//           Copyright : Ezey. All Right Reserved.
//         </span>

//         <div>
//           <a href="#" className="text-[#4BACCE] hover:underline">
//             Terms & Conditions
//           </a>
//           <span className="mx-1 text-[#CBD5E0]">|</span>
//           <a href="#" className="text-[#4BACCE] hover:underline">
//             Privacy Policy
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeftAuthBox;





// import React from "react";

// const LeftAuthLayout = ({ children }) => {
//   return (
//     <div className="bg-white rounded-3xl shadow-sm p-12 flex items-center justify-center">
//       <div className="w-full max-w-md">
//         {/* ===== HEADING SECTION ===== */}
//         <div className="mb-10">
//           <p
//             className="text-sm text-[#4A9FB5] mb-8"
//             style={{ fontFamily: "Mulish, sans-serif" }}
//           >
//             Ezey
//           </p>

//           <h1
//             className="text-[36px] font-bold text-[#265768] mb-3 text-center"
//             style={{
//               fontFamily: "Playfair Display, serif",
//               lineHeight: "1.2",
//             }}
//           >
//             Welcome to Ezey
//           </h1>

//           <p
//             className="text-[#7A8C94] text-[15px] text-center"
//             style={{ fontFamily: "Mulish, sans-serif" }}
//           >
//             Start your experience with Ezey by signing in
//           </p>

//           <p
//             className="text-[#7A8C94] text-[15px] text-center"
//             style={{ fontFamily: "Mulish, sans-serif" }}
//           >
//             or signing up
//           </p>
//         </div>

//         {/* ===== FORM CONTENT ===== */}
//         {children}

//         {/* ===== FOOTER ===== */}
//         <div
//           className="text-center text-[11px] text-[#A0AEC0] mt-6"
//           style={{ fontFamily: "Mulish, sans-serif" }}
//         >
//           Copyright : Ezey. All Right Reserved.
//           <div className="mt-2">
//             <a href="#" className="text-[#4BACCE] hover:underline">
//               Terms & Conditions
//             </a>
//             <span className="mx-1">|</span>
//             <a href="#" className="text-[#4BACCE] hover:underline">
//               Privacy Policy
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeftAuthLayout;
