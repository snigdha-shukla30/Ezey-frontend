import React from 'react';

export const StepNavigation = ({ currentStep, onStepClick }) => {
  const steps = [
    { number: 1, label: 'ERP Connection' },
    { number: 2, label: 'Loadchart' },
    { number: 3, label: 'Manual Entry' }
  ];

  return (
    <div
      className="
        fixed
        right-0
        top-0
        h-screen
        w-[450px]
        bg-[linear-gradient(180deg,#4BACCE_0%,#265768_100%)]
        flex
        flex-col
        justify-center
        gap-8
        pl-8
        z-50
      "
    >
      {steps.map((step, index) => {
        const isActive = currentStep === step.number;

        return (
          <div
            key={step.number}
            className="flex items-center gap-3 cursor-pointer relative"
            onClick={() => onStepClick(step.number)}
          >
            {/* Circle with number */}
            <div
              className={`
                w-[80px]
                h-[80px]
                rounded-full
                flex
                items-center
                justify-center
                font-bold
                text-[32px]
                shadow-lg
                flex-shrink-0
                transition-all
                ${isActive 
                  ? 'bg-white text-[#4BACCE]' 
                  : 'bg-white/90 text-[#265768]'}
              `}
            >
              {step.number}
            </div>

            {/* Label */}
            <span
              className={`
                font-semibold
                text-[25px]
                text-white
                leading-tight
                transition-all
                ${isActive ? 'opacity-100' : 'opacity-90'}
              `}
            >
              {step.label}
            </span>

            {/* Connecting line (except for last item) */}
            {index < steps.length - 1 && (
              <div
                className="
                  absolute
                  left-[37px]
                  top-[79px]
                  w-[5px]
                  h-[33px]
                  bg-white/40
                "
              />
            )}
          </div>
        );
      })}
    </div>
  );
};








