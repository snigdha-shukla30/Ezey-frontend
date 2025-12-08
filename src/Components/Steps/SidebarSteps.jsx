import React from "react";

export default function SidebarSteps({ currentStep, setCurrentStep }) {
  const steps = [
    { id: 1, label: "ERP Connection" },
    { id: 2, label: "Loadchart" },
    { id: 3, label: "Manual Entry" }
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-teal-500 to-teal-700 flex flex-col justify-center items-center space-y-6 p-8">
      {steps.map((step) => (
        <button
          key={step.id}
          onClick={() => setCurrentStep(step.id)}
          className={`flex items-center justify-between w-full py-4 px-6 rounded-lg transition ${
            currentStep === step.id
              ? "bg-white text-teal-700 shadow-lg"
              : "bg-teal-600 text-white hover:bg-teal-500"
          }`}
        >
          <span className="text-2xl font-bold">{step.id}</span>
          <span className="text-sm font-semibold">{step.label}</span>
        </button>
      ))}
    </div>
  );
}
