import { useState } from "react";
import Step1ERP from "../../Components/Steps/Step1ERP";
import Step2Loadchart from "../../Components/Steps/Step2Loadchart";
import Step3ManualEntry from "../../Components/Steps/Step3ManualEntry";
import SidebarSteps from "../../Components/Steps/SidebarSteps";

export default function EzeyForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [erpId, setErpId] = useState("");
  const [password, setPassword] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  // File Upload Handlers
  const handleFileUpload = (e) => setUploadedFile(e.target.files[0]);
  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (e) => {
    e.preventDefault();
    setUploadedFile(e.dataTransfer.files[0]);
  };

  // STEP 1 API CALL
  const connectERP = async () => {
    console.log("ERP API CALL ---", { erpId, password });

    // TODO: Replace with actual API
    // await loginAPI(erpId, password);

    setCurrentStep(2);
  };

  // STEP 2 API CALL
  const uploadLoadchart = async () => {
    console.log("Loadchart upload ---", uploadedFile);

    // TODO: API
    // const formData = new FormData();
    // formData.append("file", uploadedFile);

    setCurrentStep(3);
  };

  // STEP 3 API CALL
  const submitManualEntry = async () => {
    console.log("Manual entry submitted");
    alert("Data Submitted!");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-100 to-gray-200">
      {/* MAIN */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-lg">
          <h1 className="text-4xl font-bold text-gray-700 mb-6">Ezey</h1>

          {currentStep === 1 && (
            <Step1ERP
              erpId={erpId}
              setErpId={setErpId}
              password={password}
              setPassword={setPassword}
              onNext={connectERP}
            />
          )}

          {currentStep === 2 && (
            <Step2Loadchart
              uploadedFile={uploadedFile}
              handleFileUpload={handleFileUpload}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
              onNext={uploadLoadchart}
            />
          )}

          {currentStep === 3 && <Step3ManualEntry onSubmit={submitManualEntry} />}
        </div>
      </div>

      {/* SIDEBAR */}
      <SidebarSteps currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
}
