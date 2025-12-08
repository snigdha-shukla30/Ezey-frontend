import React from "react";
import { ChevronDown, User } from "lucide-react";

const FacultyStatus = () => {
  const faculty = [
    { name: "Dr Rakesh Kumar Yadav", status: "On Leave", color: "text-[#FF6B6B]", avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=160&q=80" },
    { name: "Dr Shweta Vikram", status: "On Duty", color: "text-[#51CF66]", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&q=80" },
    { name: "Dr Kalayan Acharya", status: "On Duty", color: "text-[#51CF66]", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&q=80" },
    { name: "Mrs Pooja Shukal", status: "On Duty", color: "text-[#51CF66]", avatar: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=160&q=80" },
    { name: "Prof Anupam Kumar Gautam", status: "On Leave", color: "text-[#FF6B6B]", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80" },
    { name: "Mrs Preeti Naval", status: "On Leave", color: "text-[#FF6B6B]", avatar: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=160&q=80" },
  ];

  return (
    <div className="w-[340px] bg-white rounded-[10px] border border-[#CACACA] shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#D9D9D9]">
        <div className="flex items-center gap-2">
          <h3 className="text-[13px] font-semibold text-[#265768]">Faculty Status</h3>
          <User size={14} className="text-[#94A3B8]" />
        </div>
        <button className="flex items-center gap-1 px-2.5 py-0.5 rounded-md border border-[#DFDFDF] text-[10px] text-[#265768] bg-white hover:bg-[#F9FAFB] transition-colors">
          Default
          <ChevronDown size={12} />
        </button>
      </div>

      {/* Faculty List */}
      <div className="px-3 py-0.1">
        {faculty.map((member, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2.5 border-b border-[#F3F4F6] last:border-b-0"
          >
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-[#F3F4F6] flex-shrink-0 border border-[#E5E7EB]">
                <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-[13px] text-[#6B7280] font-normal truncate">{member.name}</div>
            </div>

            {/* FIXED LINE */}
            <div className={`text-[11px] font-medium whitespace-nowrap ${member.color}`}>
              {member.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyStatus;
