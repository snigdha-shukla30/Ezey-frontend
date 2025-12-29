import React, { useState } from 'react';
import { StepNavigation } from '../../Components/Steps/StepsNavigation';
import { ERPConnectionScreen } from '../../Components/Steps/ERPconnectionscreen';
import { LoadchartScreen } from '../../Components/Steps/LoadchartScreen';
import { ManualEntryScreen } from '../../Components/Steps/ManualEntryScreen';

const EzeyForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleStepClick = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden
      bg-[url('/whitestepsbg.jpg')]
      bg-cover bg-center bg-no-repeat"
    >
    

      {/* Logo */}
      <div className="absolute top-10 left-14 z-10">
        <h1 className="text-5xl font-serif text-gray-800 tracking-wide drop-shadow-sm">
          Ezey
        </h1>
      </div>

      {/* Step Navigation - Right Side */}
      <StepNavigation currentStep={currentStep} onStepClick={handleStepClick} />

      {/* Main Content Area */}
      <div className="relative z-10 min-h-screen flex pr-64">
        {currentStep === 1 && <ERPConnectionScreen onNext={handleNext} />}
        {currentStep === 2 && <LoadchartScreen onNext={handleNext} />}
        {currentStep === 3 && <ManualEntryScreen />}
      </div>
    </div>
  );
};

export default EzeyForm;







// import React, { useState } from 'react';
// import { StepNavigation } from '../../Components/Steps/StepsNavigation';
// import { ERPConnectionScreen } from '../../Components/Steps/ERPconnectionscreen';
// import { LoadchartScreen } from '../../Components/Steps/LoadchartScreen';
// import { ManualEntryScreen } from '../../Components/Steps/ManualEntryScreen';

// const EzeyForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);

//   const handleNext = () => {
//     if (currentStep < 3) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const handleStepClick = (stepNumber) => {
//     setCurrentStep(stepNumber);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 relative overflow-hidden">
//       {/* Background Design Elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-200 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
//         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-300 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/3"></div>
//         <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
//       </div>

//       {/* Logo */}
//       <div className="absolute top-10 left-14 z-10">
//         <h1 className="text-6xl font-serif text-gray-800 tracking-wide drop-shadow-sm">Ezey</h1>
//       </div>

//       {/* Step Navigation - Right Side */}
//       <StepNavigation currentStep={currentStep} onStepClick={handleStepClick} />

//       {/* Main Content Area */}
//       <div className="relative z-10 min-h-screen flex pr-64">
//         {currentStep === 1 && <ERPConnectionScreen onNext={handleNext} />}
//         {currentStep === 2 && <LoadchartScreen onNext={handleNext} />}
//         {currentStep === 3 && <ManualEntryScreen />}
//       </div>
//     </div>
//   );
// };

// export default EzeyForm;








// const EzeyForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);

//   const handleNext = () => {
//     if (currentStep < 3) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
//       {/* Background Design */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/4"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-300 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/4"></div>
//       </div>

//       {/* Logo */}
//       <div className="absolute top-8 left-12 z-10">
//         <h1 className="text-5xl font-serif text-gray-700 tracking-wide">Ezey</h1>
//       </div>

//       {/* Step Navigation */}
//       <StepNavigation currentStep={currentStep} />

//       {/* Main Content */}
//       <div className="relative z-10 min-h-screen flex pr-48">
//         {currentStep === 1 && <ERPConnectionScreen onNext={handleNext} />}
//         {currentStep === 2 && <LoadchartScreen onNext={handleNext} />}
//         {currentStep === 3 && <ManualEntryScreen />}
//       </div>
//     </div>
//   );
// };

// export default EzeyForm;

















// import { useState } from "react";
// import Step1ERP from "../../Components/Steps/Step1ERP";
// import Step2Loadchart from "../../Components/Steps/Step2Loadchart";
// import Step3ManualEntry from "../../Components/Steps/Step3ManualEntry";
// import SidebarSteps from "../../Components/Steps/SidebarSteps";

// export default function EzeyForm() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [erpId, setErpId] = useState("");
//   const [password, setPassword] = useState("");
//   const [uploadedFile, setUploadedFile] = useState(null);

//   // File Upload Handlers
//   const handleFileUpload = (e) => setUploadedFile(e.target.files[0]);
//   const handleDragOver = (e) => e.preventDefault();
//   const handleDrop = (e) => {
//     e.preventDefault();
//     setUploadedFile(e.dataTransfer.files[0]);
//   };

//   // STEP 1 API CALL
//   const connectERP = async () => {
//     console.log("ERP API CALL ---", { erpId, password });

//     // TODO: Replace with actual API
//     // await loginAPI(erpId, password);

//     setCurrentStep(2);
//   };

//   // STEP 2 API CALL
//   const uploadLoadchart = async () => {
//     console.log("Loadchart upload ---", uploadedFile);

//     // TODO: API
//     // const formData = new FormData();
//     // formData.append("file", uploadedFile);

//     setCurrentStep(3);
//   };

//   // STEP 3 API CALL
//   const submitManualEntry = async () => {
//     console.log("Manual entry submitted");
//     alert("Data Submitted!");
//   };

//   return (
//     <div className="min-h-screen flex " style={{
//         backgroundImage: "url('/whitestepsbg.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}>
//       {/* MAIN */}
//       <div className="flex-1 flex items-center justify-center p-8">
//          <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-lg"> 
//           <h1 className="text-4xl font-bold text-gray-700 mb-6">Ezey</h1>

//           {currentStep === 1 && (
//             <Step1ERP
//               erpId={erpId}
//               setErpId={setErpId}
//               password={password}
//               setPassword={setPassword}
//               onNext={connectERP}
//             />
//           )}

//            {currentStep === 2 && (
//             <Step2Loadchart
//               uploadedFile={uploadedFile}
//               handleFileUpload={handleFileUpload}
//               handleDragOver={handleDragOver}
//               handleDrop={handleDrop}
//               onNext={uploadLoadchart}
//             />
//           )}

//           {currentStep === 3 && <Step3ManualEntry onSubmit={submitManualEntry} />} 
//          </div> 
//       </div>

//       {/* SIDEBAR */}
//       <SidebarSteps currentStep={currentStep} setCurrentStep={setCurrentStep} />
//     </div>
//   );
// }
