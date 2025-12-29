import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { CardContainer } from './CardContainer';
import { Button } from '../../Components/ui/Button';
import { Footer } from './Footer';

export const LoadchartScreen = ({ onNext }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  return (
    <CardContainer title="Ready to upload the loadchart? We'll extract faculty assignments and class loads for scheduling">
      <div className="max-w-md mx-auto">
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
            dragActive
              ? 'border-blue-400 bg-blue-50'
              : 'border-gray-300 bg-white'
          }`}
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-24 bg-blue-400 rounded-lg shadow-md flex items-center justify-center">
                <div className="w-16 h-3 bg-white rounded-sm mb-2"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-24 h-20 bg-teal-500 rounded-lg shadow-md flex items-center justify-center">
                <div className="w-12 h-2 bg-white rounded-sm"></div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 font-medium mb-6 text-base">
            Drag and drop loadset file to upload
          </p>
          <Button variant="secondary" className="w-60 mx-auto">
            Browse File
          </Button>
        </div>
      </div>

      <Button onClick={onNext} className="mt-8 bg-teal-600 hover:bg-teal-700">
        Upload Loadchart
      </Button>

      <Footer />
    </CardContainer>
  );
};















// import React, { useState } from 'react';
// import { Upload } from 'lucide-react';
// import { CardContainer } from './CardContainer';
// import { Button } from '../../Components/ui/Button';
// import { Footer } from './Footer';

// export const LoadchartScreen = ({ onNext }) => {
//   const [dragActive, setDragActive] = useState(false);

//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === 'dragenter' || e.type === 'dragover') {
//       setDragActive(true);
//     } else if (e.type === 'dragleave') {
//       setDragActive(false);
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//   };

//   return (
//     <CardContainer title="Ready to upload the loadchart? We'll extract faculty assignments and class loads for scheduling">
//       <div
//         onDragEnter={handleDrag}
//         onDragLeave={handleDrag}
//         onDragOver={handleDrag}
//         onDrop={handleDrop}
//         className={`border-2 border-dashed rounded-lg p-10 text-center transition-all duration-300 ${
//           dragActive
//             ? 'border-blue-400 bg-blue-50'
//             : 'border-gray-300 bg-white'
//         }`}
//       >
//         <div className="flex justify-center mb-6 ">
//           <div className="relative">
//             <div className="w-32 h-24 bg-blue-400 rounded-lg shadow-md flex items-center justify-center">
//               <div className="w-16 h-3 bg-white rounded-sm mb-2"></div>
//             </div>
//             <div className="absolute -bottom-2 -right-2 w-24 h-20 bg-teal-500 rounded-lg shadow-md flex items-center justify-center">
//               <div className="w-12 h-2 bg-white rounded-sm"></div>
//             </div>
//           </div>
//         </div>

//         <p className="text-gray-600 font-medium mb-6 text-base">
//           Drag and drop loadset file to upload
//         </p>
//         <Button variant="secondary" className="w-90 mx-auto">
//           Browse File
//         </Button>
//       </div>

//       <Button onClick={onNext} className="mt-8 bg-teal-600 hover:bg-teal-700">
//         Upload Loadchart
//       </Button>

//       <Footer />
//     </CardContainer>
//   );
// };










// import React, { useState } from 'react';
// import { Upload } from 'lucide-react';
// import { CardContainer } from './CardContainer';
// import { Button } from '../../Components/ui/Button';
// import { Footer } from './Footer';

// export const LoadchartScreen = ({ onNext }) => {
//   const [dragActive, setDragActive] = useState(false);

//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === 'dragenter' || e.type === 'dragover') {
//       setDragActive(true);
//     } else if (e.type === 'dragleave') {
//       setDragActive(false);
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//   };

//   return (
//     <CardContainer title="Ready to upload the loadchart? We'll extract faculty assignments and class loads for scheduling">
//       <div
//         onDragEnter={handleDrag}
//         onDragLeave={handleDrag}
//         onDragOver={handleDrag}
//         onDrop={handleDrop}
//         className={`border-2 border-dashed rounded-xl p-10 text-center transition-all duration-300 ${
//           dragActive
//             ? 'border-teal-500 bg-teal-50 shadow-inner'
//             : 'border-gray-300 bg-gray-50'
//         }`}
//       >
//         <div className="flex justify-center mb-8">
//           <div className="relative">
//             <div className="w-36 h-28 bg-gradient-to-br from-blue-300 to-blue-400 rounded-xl shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform">
//               <Upload className="w-14 h-14 text-blue-700" />
//             </div>
//             <div className="absolute -bottom-3 -right-3 w-28 h-24 bg-gradient-to-br from-teal-300 to-teal-400 rounded-xl shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform">
//               <Upload className="w-10 h-10 text-teal-700" />
//             </div>
//           </div>
//         </div>

//         <p className="text-gray-700 font-semibold mb-2 text-base">
//           Drag and drop loadset file to upload
//         </p>
//         <p className="text-gray-500 text-sm mb-5">
//           Upload file in Excel / Word form
//         </p>
//         <Button variant="secondary" className="w-auto  mx-auto">
//           Browse File
//         </Button>
//       </div>

//       <Button onClick={onNext} className="mt-10">
//         Upload Loadchart
//       </Button>

//       <Footer />
//     </CardContainer>
//   );
// };













// export const LoadchartScreen = ({ onNext }) => {
//   const [dragActive, setDragActive] = useState(false);

//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === 'dragenter' || e.type === 'dragover') {
//       setDragActive(true);
//     } else if (e.type === 'dragleave') {
//       setDragActive(false);
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//   };

//   return (
//     <CardContainer title="Ready to upload the loadchart? We'll extract faculty assignments and class loads for scheduling">
//       <div
//         onDragEnter={handleDrag}
//         onDragLeave={handleDrag}
//         onDragOver={handleDrag}
//         onDrop={handleDrop}
//         className={`border-2 border-dashed rounded-lg p-16 text-center transition-all ${
//           dragActive
//             ? 'border-cyan-500 bg-cyan-50'
//             : 'border-gray-300 bg-gray-50'
//         }`}
//       >
//         <div className="flex justify-center mb-6">
//           <div className="relative">
//             <div className="w-32 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg shadow-md flex items-center justify-center">
//               <Upload className="w-12 h-12 text-blue-600" />
//             </div>
//             <div className="absolute -bottom-2 -right-2 w-24 h-20 bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-lg shadow-md flex items-center justify-center">
//               <Upload className="w-8 h-8 text-cyan-600" />
//             </div>
//           </div>
//         </div>

//         <p className="text-gray-700 font-medium mb-2">
//           Drag and drop loadset file to upload
//         </p>
//         <p className="text-gray-500 text-sm mb-4">
//           Upload file in Excel / Word form
//         </p>
//         <button className="px-6 py-2 border border-gray-400 rounded text-gray-700 hover:bg-gray-100 transition-all text-sm">
//           Browse File
//         </button>
//       </div>

//       <Button onClick={onNext} className="mt-8">
//         Upload Loadchart
//       </Button>

//       <Footer />
//     </CardContainer>
//   );
// };