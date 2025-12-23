import LeftAuthLayout from "../../Components/auth/LeftAuthLayout";
import RightAuthSlider from "../../Components/auth/RightAuthSlider";
import LoginForm from "../../Components/auth/LoginForm";

const EzeyLoginPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-6">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <LeftAuthLayout>
          <LoginForm />
        </LeftAuthLayout>

        <RightAuthSlider />
      </div>
    </div>
  );
};

export default EzeyLoginPage;








// import React, { useState, useEffect } from "react";
// import { Eye, EyeOff } from "lucide-react";

// const EzeyLoginPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const slides = [
//     {
//       images: ["triple"],
//       text: "With Ezey, your timing manual timetable arrangement becomes fully automated!",
//     },
//     {
//       images: ["team"],
//       text: "Collaborate seamlessly with your team",
//     },
//     {
//       images: ["hourglass"],
//       text: "Save time with automated scheduling",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleSubmit = () => {
//     console.log("Login:", email, password);
//   };

//   return (
//     <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-6">
//       <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* ================= LEFT CARD ================= */}
//         <div className="bg-white rounded-3xl shadow-sm p-12 flex items-center justify-center">
//           <div className="w-full max-w-md">
//             <div className="mb-10">
//               <p
//                 className="text-sm text-[#4A9FB5] mb-8"
//                 style={{
//                   fontFamily: "Mulish, sans-serif",
//                 }}
//               >
//                 Ezey
//               </p>
//               <h1
//                 className="text-[36px] font-bold text-[#265768] mb-3"
//                 style={{
//                   fontFamily: "Playfair Display, serif",
//                   fontWeight: 700,
//                   lineHeight: "1.2",
//                   textAlign: "center",
//                 }}
//               >
//                 Welcome to Ezey
//               </h1>
//               <p
//                 className="text-[#7A8C94] text-[15px] mb-2"
//                 style={{
//                   fontFamily: "Mulish, sans-serif",
//                   fontWeight: 400,
//                   lineHeight: "1.5",
//                   textAlign: "center",
//                 }}
//               >
//                 Start your experience with Ezey by signing in
//               </p>
//               <p
//                 className="text-[#7A8C94] text-[15px]"
//                 style={{
//                   fontFamily: "Mulish, sans-serif",
//                   fontWeight: 400,
//                   lineHeight: "1.5",
//                   textAlign: "center",
//                 }}
//               >
//                 or signing up
//               </p>
//             </div>
//             {/* Email */}
//             <div className="mb-5">
//               <label
//                 className="text-[14px] font-semibold text-[#265768] mb-2 block"
//                 style={{
//                   fontFamily: "Mulish, sans-serif",
//                   fontWeight: 600,
//                   textAlign: "left",
//                 }}
//               >
//                 Email Address / Institution Id
//               </label>
//               <div
//                 className="relative"
//                 style={{
//                   height: "48px",
//                 }}
//               >
//                 <span
//                   className="absolute left-4 top-1/2 -translate-y-1/2"
//                   style={{
//                     width: "20px",
//                     height: "20px",
//                     color: "#A0AEC0",
//                   }}
//                 >
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <rect x="3" y="5" width="18" height="14" rx="2" />
//                     <path d="M3 7l9 6 9-6" />
//                   </svg>
//                 </span>
//                 <input
//                   type="text"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter Email Address or Institution Id"
//                   className="w-full h-full pl-12 pr-4 text-[13px] outline-none transition focus:border-[#4BACCE]"
//                   style={{
//                     fontFamily: "Mulish, sans-serif",
//                     fontWeight: 400,
//                     border: "1px solid #E2E8F0",
//                     borderRadius: "8px",
//                     background: "white",
//                     color: "#2D3748",
//                   }}
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div className="mb-3">
//               <label
//                 className="text-[14px] font-semibold text-[#265768] mb-2 block"
//                 style={{
//                   fontFamily: "Mulish, sans-serif",
//                   fontWeight: 600,
//                   textAlign: "left",
//                 }}
//               >
//                 Password*
//               </label>
//               <div
//                 className="relative"
//                 style={{
//                   height: "48px",
//                 }}
//               >
//                 <span
//                   className="absolute left-4 top-1/2 -translate-y-1/2"
//                   style={{
//                     width: "20px",
//                     height: "20px",
//                     color: "#A0AEC0",
//                   }}
//                 >
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <rect x="5" y="11" width="14" height="10" rx="2" />
//                     <path d="M7 11V7a5 5 0 0110 0v4" />
//                   </svg>
//                 </span>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="••••••••••••"
//                   className="w-full h-full pl-12 pr-12 text-[13px] outline-none transition focus:border-[#4BACCE]"
//                   style={{
//                     fontFamily: "Mulish, sans-serif",
//                     fontWeight: 400,
//                     border: "1px solid #E2E8F0",
//                     borderRadius: "8px",
//                     background: "white",
//                     color: "#2D3748",
//                   }}
//                 />
//                 <button
//                   onClick={() => setShowPassword(!showPassword)}
//                   type="button"
//                   className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition"
//                   style={{
//                     color: "#A0AEC0",
//                   }}
//                 >
//                   {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </button>
//               </div>
//             </div>

//             <div className="text-right mb-4">
//               <a
//                 href="#"
//                 className="text-[13px] text-[#4BACCE] hover:underline"
//                 style={{
//                   fontFamily: "Mulish, sans-serif",
//                 }}
//               >
//                 Forgot Password?
//               </a>
//             </div>

//             <div className="text-center mb-8">
//               <p
//                 className="text-[13px] text-[#7A8C94] mb-4"
//                 style={{
//                   fontFamily: "Mulish, sans-serif",
//                 }}
//               >
//                 New user ?{" "}
//                 <a
//                   href="#"
//                   className="text-[#4BACCE] hover:underline font-semibold"
//                 >
//                   Sign Up
//                 </a>
//               </p>
//               <button
//                 onClick={handleSubmit}
//                 className="w-full text-white py-3 text-[15px] font-semibold hover:opacity-90 transition"
//                 style={{
//                   height: "48px",
//                   borderRadius: "8px",
//                   background:
//                     "linear-gradient(135deg, #4BACCE 0%, #265768 100%)",
//                   boxShadow: "0 4px 14px 0 rgba(75, 172, 206, 0.3)",
//                   fontFamily: "Mulish, sans-serif",
//                 }}
//               >
//                 Sign In
//               </button>
//             </div>

//             <div
//               className="text-center text-[11px] text-[#A0AEC0]"
//               style={{
//                 fontFamily: "Mulish, sans-serif",
//               }}
//             >
//               Copyright : Ezey. All Right Reserved.
//               <div className="mt-2">
//                 <a href="#" className="text-[#4BACCE] hover:underline">
//                   Terms & Conditions
//                 </a>
//                 <span className="text-[#CBD5E0] mx-1">|</span>
//                 <a href="#" className="text-[#4BACCE] hover:underline">
//                   Privacy Policy
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ================= RIGHT CARD (SLIDER) ================= */}
//         <div
//           className="relative rounded-2xl overflow-hidden shadow-xl flex items-center justify-center"
//           style={{
//             backgroundImage:
//               "url('/rightbg.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           {/* Dark overlay for readability */}
//           <div className="absolute inset-0 bg-black/40" />

//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
//                 currentSlide === index ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               {/* Images */}
//               <div className="relative w-96 h-96 mb-8">
//                 {/* ===== SLIDE 1 : 3 IMAGES ===== */}
//                 {index === 0 && (
//                   <>
//                     {/* Top */}
//                     <img
//                       src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
//                       className="absolute top-0 right-6 w-44 h-44 object-cover rounded-2xl shadow-xl border-8 border-white rotate-6"
//                     />

//                     {/* Center */}
//                     <img
//                       src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
//                       className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 object-cover rounded-2xl shadow-2xl border-8 border-white"
//                     />

//                     {/* Bottom */}
//                     <img
//                       src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
//                       className="absolute bottom-0 left-6 w-44 h-44 object-cover rounded-2xl shadow-xl border-8 border-white -rotate-6"
//                     />
//                   </>
//                 )}

//                 {/* ===== SLIDE 2 & 3 : SINGLE IMAGE ===== */}
//                 {index !== 0 && (
//                   <img
//                     src={
//                       index === 1
//                         ? "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//                         : "https://images.unsplash.com/photo-1506784983877-45594efa4cbe"
//                     }
//                     className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 object-cover rounded-2xl shadow-2xl border-8 border-white"
//                   />
//                 )}
//               </div>

//               {/* Text */}
//               <p className="text-white text-xl text-center max-w-md px-6 relative z-10">
//                 "{slide.text}"
//               </p>
//             </div>
//           ))}

//           {/* Indicators */}
//           <div className="absolute bottom-6 flex gap-2 z-10">
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrentSlide(i)}
//                 className={`h-2 rounded-full transition-all ${
//                   currentSlide === i ? "w-8 bg-white" : "w-2 bg-white/50"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EzeyLoginPage;