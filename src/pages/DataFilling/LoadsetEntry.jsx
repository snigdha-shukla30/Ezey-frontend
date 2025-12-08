// import React, { useState } from 'react';
// import { Upload, FileText } from 'lucide-react';

// export default function EzeyLoadchartPage() {
//   const [dragActive, setDragActive] = useState(false);
//   const [uploadedFile, setUploadedFile] = useState(null);

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

//   const handleUpload = () => {
//     console.log('Uploading file:', uploadedFile);
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
//           <div className="bg-white rounded-2xl shadow-2xl p-10 border-4 border-teal-500">
//             {/* Header Text */}
//             <div className="text-center mb-8">
//               <p className="text-gray-700 text-base leading-relaxed">
//                 Ready to upload the loadchart? We'll extract faculty<br />
//                 assignments and class loads for scheduling
//               </p>
//             </div>

//             {/* Drag and Drop Area */}
//             <div className="mb-8">
//               <div
//                 onDragEnter={handleDrag}
//                 onDragLeave={handleDrag}
//                 onDragOver={handleDrag}
//                 onDrop={handleDrop}
//                 className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
//                   dragActive 
//                     ? 'border-teal-500 bg-teal-50' 
//                     : 'border-gray-300 bg-gray-50'
//                 }`}
//               >
//                 {/* Upload Icon */}
//                 <div className="flex justify-center mb-4">
//                   <div className="relative">
//                     <div className="w-16 h-20 bg-blue-500 rounded-lg shadow-md"></div>
//                     <div className="absolute -right-2 -bottom-2 w-12 h-16 bg-blue-400 rounded-lg shadow-md"></div>
//                     <Upload className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-8 h-8" />
//                   </div>
//                 </div>

//                 {/* Text */}
//                 <p className="text-gray-700 font-medium mb-1">
//                   Drag and drop loadchart file to upload
//                 </p>
//                 <p className="text-gray-400 text-sm mb-4">
//                   Upload file in Excel / Word form
//                 </p>

//                 {/* Browse File Button */}
//                 <label className="inline-block">
//                   <input
//                     type="file"
//                     className="hidden"
//                     onChange={handleFileChange}
//                     accept=".xlsx,.xls,.doc,.docx"
//                   />
//                   <span className="px-6 py-2 border-2 border-gray-300 rounded-lg text-gray-600 font-medium cursor-pointer hover:bg-gray-100 transition-colors inline-block">
//                     Browse File
//                   </span>
//                 </label>

//                 {/* Display uploaded file name */}
//                 {uploadedFile && (
//                   <div className="mt-4 flex items-center justify-center text-teal-600">
//                     <FileText className="w-5 h-5 mr-2" />
//                     <span className="text-sm font-medium">{uploadedFile.name}</span>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Upload Button */}
//             <div className="flex justify-center mb-6">
//               <button
//                 onClick={handleUpload}
//                 disabled={!uploadedFile}
//                 className={`px-12 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-medium rounded-lg shadow-lg transition-all duration-200 ${
//                   uploadedFile 
//                     ? 'hover:shadow-xl hover:from-teal-700 hover:to-teal-800 cursor-pointer' 
//                     : 'opacity-50 cursor-not-allowed'
//                 }`}
//               >
//                 Upload Loadchart
//               </button>
//             </div>

//             {/* Footer */}
//             <div className="flex justify-between items-center text-sm text-gray-500">
//               <p>Copyright | Ezey. All Right Reserved.</p>
//               <div className="space-x-2">
//                 <a href="#" className="text-teal-600 hover:underline">Terms & Conditions</a>
//                 <span>|</span>
//                 <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>
//               </div>
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

//           {/* Step 2 - Active */}
//           <div className="flex items-center">
//             <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center ring-4 ring-white ring-opacity-50">
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