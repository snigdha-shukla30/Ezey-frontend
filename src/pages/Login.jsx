import React, { useState } from "react";

export default function EzeyLogin() {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="w-full h-screen flex bg-white font-sans overflow-hidden">
      {/* LEFT SECTION */}
      <div className="w-1/2 h-full p-12 flex flex-col justify-center border-r border-gray-200">
        <h1 className="text-4xl font-bold text-[#2f4f4f] mb-4">Welcome to Ezey</h1>
        <p className="text-gray-600 mb-10">Start your experience with Ezey by signing in or signing up</p>

        {/* Email */}
        <label className="text-sm font-medium text-gray-700">Email Address / Institution Id</label>
        <div className="mt-1 mb-6 flex items-center border rounded-md px-3 py-2 bg-gray-50">
          <span>📧</span>
          <input
            type="text"
            placeholder="Enter Email Address or Institution Id"
            className="w-full ml-2 bg-transparent outline-none"
          />
        </div>

        {/* Password */}
        <label className="text-sm font-medium text-gray-700">Password*</label>
        <div className="mt-1 mb-2 flex items-center border rounded-md px-3 py-2 bg-gray-50">
          <span>🔒</span>
          <input
            type={showPass ? "text" : "password"}
            placeholder="***********"
            className="w-full ml-2 bg-transparent outline-none"
          />
          <span className="cursor-pointer" onClick={() => setShowPass(!showPass)}>👁️</span>
        </div>

        <p className="text-sm text-blue-700 cursor-pointer mb-6">Forgot Password?</p>

        {/* Sign In Button */}
        <button className="w-full py-3 rounded-md bg-gradient-to-r from-[#006f8f] to-[#1aa3b8] text-white text-lg font-semibold shadow-md hover:opacity-90">Sign In</button>

        <div className="w-full flex justify-center items-center my-4 text-gray-600 text-sm">
          <span className="mr-1">New user?</span>
          <span className="text-blue-700 cursor-pointer">Sign In</span>
        </div>

        {/* OR */}
        <div className="flex items-center w-full my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-3 text-gray-600">Or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-6 text-3xl">
          <span className="cursor-pointer">🌐</span>
          <span className="cursor-pointer">📘</span>
          <span className="cursor-pointer">🍎</span>
        </div>

        <p className="text-xs text-center text-gray-500 mt-12">Copyright : Ezey, All Right Reserved.</p>
        <div className="text-xs flex justify-center gap-4 text-blue-700 mt-1 cursor-pointer">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-1/2 h-full p-10 relative flex items-center justify-center bg-gradient-to-b from-[#021521] to-[#053a5b] text-white rounded-r-xl overflow-hidden">
        {/* BIG BACKGROUND IMAGE */}
        <img src="/big-dummy.jpg" className="w-full h-full object-cover absolute inset-0 opacity-70" />

        {/* 3 FLOATING SMALL IMAGES */}
        <img src="/small1.jpg" className="w-40 h-40 rounded-xl absolute top-14 right-20 shadow-lg object-cover" />
        <img src="/small2.jpg" className="w-40 h-40 rounded-xl absolute top-48 right-48 shadow-lg object-cover" />
        <img src="/small3.jpg" className="w-40 h-40 rounded-xl absolute bottom-24 right-32 shadow-lg object-cover" />

        <p className="absolute bottom-10 text-center text-sm w-full opacity-90 px-12">
          “With Eazy, your tiring manual timetable arrangement becomes fully automated.”
        </p>
      </div>
    </div>
  );
}





// import React, { useState } from 'react';
// import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

// export default function EzeyLogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = () => {
//     console.log('Login attempted with:', { email, password });
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSubmit();
//     }
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Left Panel - Login Form */}
//       <div className="w-1/2 bg-white flex items-center justify-center p-8">
//         <div className="w-full max-w-md">
//           {/* Logo */}
//           <div className="mb-8">
//             <h1 className="text-2xl font-light text-gray-600">Ezey</h1>
//           </div>

//           {/* Welcome Text */}
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Ezey</h2>
//             <p className="text-gray-500 text-sm">Start your experience with Ezey by signing in<br />or signing up</p>
//           </div>

//           {/* Form */}
//           <div>
//             {/* Email Input */}
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-medium mb-2">
//                 Email Address / Institution Id
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   type="text"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   placeholder="Enter Email Address or Institution Id"
//                   className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                 />
//               </div>
//             </div>

//             {/* Password Input */}
//             <div className="mb-2">
//               <label className="block text-gray-700 text-sm font-medium mb-2">
//                 Password*
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   placeholder="••••••••••••"
//                   className="w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                 </button>
//               </div>
//             </div>

//             {/* Forgot Password */}
//             <div className="text-right mb-6">
//               <a href="#" className="text-teal-600 text-sm hover:underline">
//                 Forgot Password?
//               </a>
//             </div>

//             {/* New user Sign In Link */}
//             <div className="text-center mb-4">
//               <span className="text-gray-600 text-sm">New user? </span>
//               <a href="#" className="text-teal-600 text-sm font-medium hover:underline">
//                 Sign In
//               </a>
//             </div>

//             {/* Sign In Button */}
//             <button
//               onClick={handleSubmit}
//               className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-2.5 rounded-lg font-medium hover:from-teal-600 hover:to-cyan-700 transition-all shadow-md text-sm"
//             >
//               Sign In
//             </button>

//             {/* Divider */}
//             <div className="flex items-center my-6">
//               <div className="flex-1 border-t border-gray-300"></div>
//               <span className="px-4 text-gray-400 text-xs">Or</span>
//               <div className="flex-1 border-t border-gray-300"></div>
//             </div>

//             {/* Social Login Buttons */}
//             <div className="flex justify-center gap-4 mb-6">
//               <button
//                 type="button"
//                 className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
//               >
//                 <svg viewBox="0 0 24 24" className="w-5 h-5">
//                   <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                   <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                   <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                   <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//                 </svg>
//               </button>
//               <button
//                 type="button"
//                 className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
//               >
//                 <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#1877F2">
//                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                 </svg>
//               </button>
//               <button
//                 type="button"
//                 className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
//               >
//                 <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#000000">
//                   <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
//                 </svg>
//               </button>
//             </div>

//             {/* Footer */}
//             <div className="text-center text-xs text-gray-400">
//               <p className="mb-2">Copyright : Ezey, All Right Reserved.</p>
//               <div className="flex justify-center gap-3 text-xs">
//                 <a href="#" className="text-teal-600 hover:underline">Terms & Conditions</a>
//                 <span className="text-gray-300">|</span>
//                 <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Panel - Feature Display */}
//       <div className="w-1/2 relative overflow-hidden">
//         {/* Background Image - Replace this src with your actual image */}
//         <img 
//           src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=1200&fit=crop" 
//           alt="Background"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
        
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-teal-900 opacity-80"></div>
        
//         <div className="relative z-10 flex items-center justify-center h-full p-12">
//           <div className="max-w-lg w-full">
//             {/* Floating Cards Container */}
//             <div className="relative h-96 mb-8">
//               {/* Top Card - Desk Items - Replace src with your image */}
//               <div className="absolute top-4 left-20 w-52 h-40 bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-6 border-4 border-white">
//                 <img 
//                   src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop" 
//                   alt="Desk"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Middle Card - Clock - Replace src with your image */}
//               <div className="absolute top-20 right-8 w-52 h-52 bg-white rounded-2xl shadow-2xl overflow-hidden transform -rotate-3 border-4 border-white">
//                 <img 
//                   src="https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&h=400&fit=crop" 
//                   alt="Clock"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Bottom Card - Notes - Replace src with your image */}
//               <div className="absolute bottom-0 left-12 w-56 h-60 bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-2 border-4 border-white">
//                 <img 
//                   src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=500&fit=crop" 
//                   alt="Notes"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//             {/* Text */}
//             <div className="text-center pt-8">
//               <p className="text-white text-base italic leading-relaxed">
//                 "With Eazy, your tiring manual timetable arrangement<br />becomes fully automated."
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import React, { useState } from 'react';
// import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

// export default function EzeyLogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = () => {
//     console.log('Login attempted with:', { email, password });
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSubmit();
//     }
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Left Panel - Login Form */}
//       <div className="w-1/2 bg-white flex items-center justify-center p-8">
//         <div className="w-full max-w-md">
//           {/* Logo */}
//           <div className="mb-8">
//             <h1 className="text-2xl font-light text-gray-700">Ezey</h1>
//           </div>

//           {/* Welcome Text */}
//           <div className="mb-8">
//             <h2 className="text-3xl font-semibold text-gray-800 mb-3">Welcome to Ezey</h2>
//             <p className="text-gray-500">Start your experience with Ezey by signing in<br />or signing up</p>
//           </div>

//           {/* Form */}
//           <div>
//             {/* Email Input */}
//             <div className="mb-5">
//               <label className="block text-gray-700 text-sm mb-2">
//                 Email Address / Institution Id
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                 <input
//                   type="text"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   placeholder="Enter Email Address or Institution Id"
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                 />
//               </div>
//             </div>

//             {/* Password Input */}
//             <div className="mb-2">
//               <label className="block text-gray-700 text-sm mb-2">
//                 Password*
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   placeholder="••••••••••••"
//                   className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </button>
//               </div>
//             </div>

//             {/* Forgot Password */}
//             <div className="text-right mb-6">
//               <a href="#" className="text-teal-600 text-sm hover:underline">
//                 Forgot Password?
//               </a>
//             </div>

//             {/* Sign Up Link */}
//             <div className="text-center mb-4">
//               <span className="text-gray-600 text-sm">New user? </span>
//               <a href="#" className="text-teal-600 text-sm hover:underline">
//                 Sign In
//               </a>
//             </div>

//             {/* Sign In Button */}
//             <button
//               onClick={handleSubmit}
//               className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-lg font-medium hover:from-teal-600 hover:to-teal-700 transition-all shadow-md"
//             >
//               Sign In
//             </button>

//             {/* Divider */}
//             <div className="flex items-center my-6">
//               <div className="flex-1 border-t border-gray-300"></div>
//               <span className="px-4 text-gray-500 text-sm">Or</span>
//               <div className="flex-1 border-t border-gray-300"></div>
//             </div>

//             {/* Social Login Buttons */}
//             <div className="flex justify-center gap-4 mb-8">
//               <button
//                 type="button"
//                 className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
//               >
//                 <svg viewBox="0 0 24 24" className="w-6 h-6">
//                   <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                   <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                   <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                   <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//                 </svg>
//               </button>
//               <button
//                 type="button"
//                 className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
//               >
//                 <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#1877F2">
//                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                 </svg>
//               </button>
//               <button
//                 type="button"
//                 className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
//               >
//                 <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#000000">
//                   <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
//                 </svg>
//               </button>
//             </div>

//             {/* Footer */}
//             <div className="text-center text-xs text-gray-500">
//               <p className="mb-2">Copyright : Ezey, All Right Reserved.</p>
//               <div className="flex justify-center gap-3">
//                 <a href="#" className="text-teal-600 hover:underline">Terms & Conditions</a>
//                 <span>|</span>
//                 <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Panel - Feature Display */}
//       <div className="w-1/2 bg-gradient-to-br from-teal-700 to-teal-900 flex items-center justify-center p-12 relative overflow-hidden">
//         <div className="relative z-10 max-w-lg">
//           {/* Floating Cards */}
//           <div className="relative">
//             {/* Top Card - Desk Items */}
//             <div className="absolute -top-12 left-8 w-48 h-32 bg-white rounded-xl shadow-2xl overflow-hidden transform rotate-6">
//               <div className="w-full h-full bg-gradient-to-br from-orange-200 to-pink-200 p-4 flex items-center justify-center">
//                 <div className="grid grid-cols-2 gap-2">
//                   <div className="w-12 h-12 bg-blue-400 rounded"></div>
//                   <div className="w-12 h-12 bg-yellow-300 rounded"></div>
//                   <div className="w-12 h-12 bg-green-400 rounded"></div>
//                   <div className="w-12 h-12 bg-pink-300 rounded"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Middle Card - Clock */}
//             <div className="absolute top-20 right-8 w-44 h-44 bg-gray-100 rounded-xl shadow-2xl overflow-hidden transform -rotate-3">
//               <div className="w-full h-full flex items-center justify-center bg-white">
//                 <div className="relative w-32 h-32">
//                   <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
//                   <div className="absolute top-1/2 left-1/2 w-1 h-12 bg-gray-800 origin-bottom transform -translate-x-1/2 -translate-y-full rotate-45"></div>
//                   <div className="absolute top-1/2 left-1/2 w-1 h-16 bg-gray-800 origin-bottom transform -translate-x-1/2 -translate-y-full"></div>
//                   <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom Card - Notes */}
//             <div className="absolute top-48 left-12 w-44 h-48 bg-white rounded-xl shadow-2xl overflow-hidden transform rotate-3">
//               <div className="w-full h-full bg-amber-50 p-4">
//                 <div className="space-y-2">
//                   <div className="h-2 bg-gray-300 rounded w-3/4"></div>
//                   <div className="h-2 bg-gray-300 rounded w-full"></div>
//                   <div className="h-2 bg-gray-300 rounded w-5/6"></div>
//                   <div className="h-2 bg-gray-300 rounded w-full"></div>
//                   <div className="h-2 bg-gray-300 rounded w-2/3"></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Text */}
//           <div className="mt-80 text-center">
//             <p className="text-white text-lg italic">
//               "With Eazy, your tiring manual timetable arrangement<br />becomes fully automated."
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }