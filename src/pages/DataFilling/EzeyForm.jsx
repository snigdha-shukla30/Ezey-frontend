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




