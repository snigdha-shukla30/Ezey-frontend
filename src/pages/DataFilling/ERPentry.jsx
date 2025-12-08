// import React, { useState } from 'react';
// import { KeyRound, Lock } from 'lucide-react';

// export default function EzeyERPPage() {
//   const [erpId, setErpId] = useState('');
//   const [password, setPassword] = useState('');

//   const handleConnect = () => {
//     console.log('Connecting with:', { erpId, password });
//   };

//   return (
//     <div className="min-h-screen flex relative overflow-hidden">
//       {/* Left side with background image */}
//       <div 
//         className="flex-1 relative"
//         style={{
//           backgroundImage: 'url(https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       >
//         {/* Light overlay */}
//         <div className="absolute inset-0 bg-white bg-opacity-40"></div>
        
//         {/* Logo */}
//         <div className="absolute top-8 left-12 z-10">
//           <h1 className="text-5xl font-serif text-white drop-shadow-lg">Ezey</h1>
//         </div>

//         {/* Main Content Card */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-4">
//           <div className="bg-white rounded-2xl shadow-2xl p-10">
//             {/* Header Text */}
//             <div className="text-center mb-8">
//               <p className="text-gray-700 text-base leading-relaxed">
//                 Connect your ERP to automatically sync faculty, timetable,<br />
//                 and classroom data — no manual setup required
//               </p>
//             </div>

//             {/* Form Fields */}
//             <div className="space-y-6 mb-8">
//               {/* ERP ID Field */}
//               <div>
//                 <label className="block text-gray-700 text-sm font-medium mb-2 uppercase tracking-wide">
//                   Enter ERP ID
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <KeyRound className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="text"
//                     value={erpId}
//                     onChange={(e) => setErpId(e.target.value)}
//                     placeholder="e.g. ARBZU55"
//                     className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                   />
//                 </div>
//               </div>

//               {/* Password Field */}
//               <div>
//                 <label className="block text-gray-700 text-sm font-medium mb-2 uppercase tracking-wide">
//                   Enter Password
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <Lock className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="e.g. ARBZU55"
//                     className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Connect Button */}
//             <div className="flex justify-center mb-6">
//               <button
//                 onClick={handleConnect}
//                 className="px-16 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:from-teal-700 hover:to-teal-800"
//               >
//                 Connect ERP
//               </button>
//             </div>

//             {/* Footer */}
//             <div className="text-center text-sm text-gray-500">
//               <p>
//                 Copyright | Ezey. All Right Reserved. {' '}
//                 <a href="#" className="text-teal-600 hover:underline">Terms & Conditions</a>
//                 {' '} | {' '}
//                 <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right side with gradient and steps */}
//       <div 
//         className="w-80 relative"
//         style={{
//           background: 'linear-gradient(180deg, #5FA8BC 0%, #3D7C8E 100%)'
//         }}
//       >
//         {/* Step indicators */}
//         <div className="absolute top-1/3 -left-10 space-y-12">
//           {/* Step 1 */}
//           <div className="flex items-center">
//             <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
//               <span className="text-3xl font-bold text-teal-700">1</span>
//             </div>
//             <div className="ml-6 text-white">
//               <p className="text-lg font-semibold">ERP Connection</p>
//             </div>
//           </div>

//           {/* Step 2 */}
//           <div className="flex items-center">
//             <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
//               <span className="text-3xl font-bold text-teal-700">2</span>
//             </div>
//             <div className="ml-6 text-white">
//               <p className="text-lg font-semibold">Loadchart</p>
//             </div>
//           </div>

//           {/* Step 3 */}
//           <div className="flex items-center">
//             <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
//               <span className="text-3xl font-bold text-teal-700">3</span>
//             </div>
//             <div className="ml-6 text-white">
//               <p className="text-lg font-semibold">Manual Entry</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }