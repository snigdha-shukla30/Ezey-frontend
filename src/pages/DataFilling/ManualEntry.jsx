// import React, { useState } from 'react';
// import { KeyRound, Lock, Upload, FileSpreadsheet, School, Users, BookOpen, Layout, Settings } from 'lucide-react';

// export default function EzeyManualEntryPage() {
//   const [currentPage, setCurrentPage] = useState('erp'); // 'erp', 'loadchart', 'manual'
//   const [erpId, setErpId] = useState('');
//   const [password, setPassword] = useState('');
//   const [dragActive, setDragActive] = useState(false);
//   const [uploadedFile, setUploadedFile] = useState(null);

//   const handleConnect = () => {
//     setCurrentPage('loadchart');
//   };

//   const handleLoadchartNext = () => {
//     setCurrentPage('manual');
//   };

//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === "dragenter" || e.type === "dragover") {
//       setDragActive(true);
//     } else if (e.type === "dragleave") {
//       setDragActive(false);
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
    
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       setUploadedFile(e.dataTransfer.files[0]);
//     }
//   };

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setUploadedFile(e.target.files[0]);
//     }
//   };

//   const handleBrowse = () => {
//     document.getElementById('fileInput').click();
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

//         {/* Main Content Card - ERP Connection */}
//         {currentPage === 'erp' && (
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-4">
//             <div className="bg-white rounded-2xl shadow-2xl p-10">
//               {/* Header Text */}
//               <div className="text-center mb-8">
//                 <p className="text-gray-700 text-base leading-relaxed">
//                   Connect your ERP to automatically sync faculty, timetable,<br />
//                   and classroom data — no manual setup required
//                 </p>
//               </div>

//               {/* Form Fields */}
//               <div className="space-y-6 mb-8">
//                 {/* ERP ID Field */}
//                 <div>
//                   <label className="block text-gray-700 text-sm font-medium mb-2 uppercase tracking-wide">
//                     Enter ERP ID
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                       <KeyRound className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                       type="text"
//                       value={erpId}
//                       onChange={(e) => setErpId(e.target.value)}
//                       placeholder="e.g. ARBZU55"
//                       className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                     />
//                   </div>
//                 </div>

//                 {/* Password Field */}
//                 <div>
//                   <label className="block text-gray-700 text-sm font-medium mb-2 uppercase tracking-wide">
//                     Enter Password
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                       <Lock className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="e.g. ARBZU55"
//                       className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Connect Button */}
//               <div className="flex justify-center mb-6">
//                 <button
//                   onClick={handleConnect}
//                   className="px-16 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:from-teal-700 hover:to-teal-800"
//                 >
//                   Connect ERP
//                 </button>
//               </div>

//               {/* Footer */}
//               <div className="text-center text-sm text-gray-500">
//                 <p>
//                   Copyright | Ezey. All Right Reserved. {' '}
//                   <a href="#" className="text-teal-600 hover:underline">Terms & Conditions</a>
//                   {' '} | {' '}
//                   <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Main Content Card - Loadchart Upload */}
//         {currentPage === 'loadchart' && (
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-4">
//             <div className="bg-white rounded-2xl shadow-2xl p-10 border-4 border-teal-500">
//               {/* Header Text */}
//               <div className="text-center mb-8">
//                 <p className="text-gray-700 text-base leading-relaxed">
//                   Ready to upload the loadchart? We'll extract faculty<br />
//                   assignments and class loads for scheduling
//                 </p>
//               </div>

//               {/* Upload Area */}
//               <div 
//                 className={`border-3 border-dashed rounded-xl p-12 mb-6 transition-colors ${
//                   dragActive ? 'border-teal-500 bg-teal-50' : 'border-gray-300 bg-gray-50'
//                 }`}
//                 onDragEnter={handleDrag}
//                 onDragLeave={handleDrag}
//                 onDragOver={handleDrag}
//                 onDrop={handleDrop}
//               >
//                 <div className="flex flex-col items-center justify-center text-center">
//                   <div className="mb-4">
//                     <FileSpreadsheet className="h-16 w-16 text-teal-500 mx-auto mb-2" />
//                     <Upload className="h-8 w-8 text-teal-600 mx-auto" />
//                   </div>
                  
//                   <p className="text-gray-700 font-medium mb-2">
//                     Drag and drop loadchart file to upload
//                   </p>
//                   <p className="text-gray-500 text-sm mb-4">
//                     Upload file in Excel / Word form
//                   </p>
                  
//                   <input
//                     type="file"
//                     id="fileInput"
//                     className="hidden"
//                     onChange={handleFileChange}
//                     accept=".xlsx,.xls,.doc,.docx"
//                   />
                  
//                   <button
//                     onClick={handleBrowse}
//                     className="text-teal-600 hover:text-teal-700 font-medium text-sm underline"
//                   >
//                     Browse file
//                   </button>
                  
//                   {uploadedFile && (
//                     <p className="mt-3 text-sm text-green-600">
//                       ✓ {uploadedFile.name}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Upload Button */}
//               <div className="flex justify-center mb-6">
//                 <button
//                   onClick={handleLoadchartNext}
//                   className="px-16 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:from-teal-700 hover:to-teal-800"
//                 >
//                   Upload Loadchart
//                 </button>
//               </div>

//               {/* Footer */}
//               <div className="text-center text-sm text-gray-500">
//                 <p>
//                   Copyright | Ezey. All Right Reserved. {' '}
//                   <a href="#" className="text-teal-600 hover:underline">Terms & Conditions</a>
//                   {' '} | {' '}
//                   <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Main Content Card - Manual Entry */}
//         {currentPage === 'manual' && (
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl px-4">
//             <div className="bg-white rounded-2xl shadow-2xl p-10">
//               {/* Header Text */}
//               <div className="text-center mb-10">
//                 <p className="text-gray-700 text-base leading-relaxed">
//                   No file? No problem — you can manually input all required<br />
//                   data at your own pace
//                 </p>
//               </div>

//               {/* Buttons Grid */}
//               <div className="grid grid-cols-2 gap-6 mb-8">
//                 {/* Classroom Button */}
//                 <button className="flex items-center justify-center gap-3 px-8 py-5 border-2 border-gray-300 rounded-xl hover:border-teal-500 hover:bg-teal-50 transition-all duration-200 group">
//                   <School className="h-6 w-6 text-gray-400 group-hover:text-teal-600" />
//                   <span className="text-gray-600 group-hover:text-teal-700 font-medium text-lg">Classroom</span>
//                 </button>

//                 {/* Faculty Button */}
//                 <button className="flex items-center justify-center gap-3 px-8 py-5 border-2 border-gray-300 rounded-xl hover:border-teal-500 hover:bg-teal-50 transition-all duration-200 group">
//                   <Users className="h-6 w-6 text-gray-400 group-hover:text-teal-600" />
//                   <span className="text-gray-600 group-hover:text-teal-700 font-medium text-lg">Faculty</span>
//                 </button>

//                 {/* Subjects Button */}
//                 <button className="flex items-center justify-center gap-3 px-8 py-5 border-2 border-gray-300 rounded-xl hover:border-teal-500 hover:bg-teal-50 transition-all duration-200 group">
//                   <BookOpen className="h-6 w-6 text-gray-400 group-hover:text-teal-600" />
//                   <span className="text-gray-600 group-hover:text-teal-700 font-medium text-lg">Subjects</span>
//                 </button>

//                 {/* Batches Button */}
//                 <button className="flex items-center justify-center gap-3 px-8 py-5 border-2 border-gray-300 rounded-xl hover:border-teal-500 hover:bg-teal-50 transition-all duration-200 group">
//                   <Layout className="h-6 w-6 text-gray-400 group-hover:text-teal-600" />
//                   <span className="text-gray-600 group-hover:text-teal-700 font-medium text-lg">Batches</span>
//                 </button>
//               </div>

//               {/* Constraints Button - Centered */}
//               <div className="flex justify-center mb-8">
//                 <button className="flex items-center justify-center gap-3 px-12 py-5 border-2 border-gray-300 rounded-xl hover:border-teal-500 hover:bg-teal-50 transition-all duration-200 group">
//                   <Settings className="h-6 w-6 text-gray-400 group-hover:text-teal-600" />
//                   <span className="text-gray-600 group-hover:text-teal-700 font-medium text-lg">Constraints</span>
//                 </button>
//               </div>

//               {/* Submit Button */}
//               <div className="flex justify-center mb-6">
//                 <button className="px-20 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:from-teal-700 hover:to-teal-800">
//                   Submit Data
//                 </button>
//               </div>

//               {/* Footer */}
//               <div className="flex justify-between items-center text-sm text-gray-500">
//                 <p>Copyright | Ezey. All Right Reserved.</p>
//                 <p>
//                   <a href="#" className="text-teal-600 hover:underline">Terms & Conditions</a>
//                   {' '} | {' '}
//                   <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
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
//             <div className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center ${
//               currentPage === 'erp' ? 'bg-white' : 'bg-teal-700'
//             }`}>
//               <span className={`text-3xl font-bold ${
//                 currentPage === 'erp' ? 'text-teal-700' : 'text-white'
//               }`}>1</span>
//             </div>
//             <div className="ml-6 text-white">
//               <p className="text-lg font-semibold">ERP Connection</p>
//             </div>
//           </div>

//           {/* Step 2 */}
//           <div className="flex items-center">
//             <div className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center ${
//               currentPage === 'loadchart' ? 'bg-white' : 'bg-teal-700'
//             }`}>
//               <span className={`text-3xl font-bold ${
//                 currentPage === 'loadchart' ? 'text-teal-700' : 'text-white'
//               }`}>2</span>
//             </div>
//             <div className="ml-6 text-white">
//               <p className="text-lg font-semibold">Loadchart</p>
//             </div>
//           </div>

//           {/* Step 3 */}
//           <div className="flex items-center">
//             <div className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center ${
//               currentPage === 'manual' ? 'bg-white' : 'bg-teal-700'
//             }`}>
//               <span className={`text-3xl font-bold ${
//                 currentPage === 'manual' ? 'text-teal-700' : 'text-white'
//               }`}>3</span>
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