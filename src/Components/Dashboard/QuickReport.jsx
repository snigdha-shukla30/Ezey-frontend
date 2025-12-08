import React from "react";
import { Users, School, Calendar } from "lucide-react";

const QuickReport = () => {
  const reports = [
    { label: "Faculty\nUtilization", value: "72%", Icon: Users },
    { label: "Classroom\nUtilization", value: "78%", Icon: School },
    { label: "Blank\nPeriods", value: "92%", Icon: Calendar },
  ];

  return (
    <div
      className="w-[335px] h-[259px] bg-white rounded-[10px] border border-[#CACACA] p-6 flex flex-col"
      style={{ boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.05)" }}
    >
      {/* Header */}
      <h3 className="text-[16px] font-semibold text-[#265768] text-center mb-3">
        Quick Report
      </h3>

      {/* Divider line — thoda upar */}
      <div className="w-full h-[3px] bg-[#D9D9D9] mb-5" />

      {/* Three columns */}
      <div className="grid grid-cols-3 gap-4 flex-1">
        {reports.map((item, idx) => {
          const Icon = item.Icon;
          return (
            <div key={idx} className="flex flex-col items-center justify-center text-center">
              <div className="text-[17px] font-semibold text-[#9CA3AF] mb-3">
                {item.value}
              </div>
              <div className="mb-3">
                <Icon className="w-7 h-7 text-[#4A90E2]" strokeWidth={1.5} />
              </div>
              <div className="text-[14px] text-[#265768] leading-tight whitespace-pre-line font-normal">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickReport;