import React from "react";
import { School, BookOpen, Users, Calendar } from "lucide-react";

const StatsCard = ({ imageUrl, label, count }) => {
  const icons = {
    "Classroom": School,
    "Subjects": BookOpen,
    "Faculty": Users,
    "Time Tables": Calendar
  };

  const IconComponent = icons[label];

  return (
    <div 
      className="w-[170px] h-[120px] bg-white rounded-[10px] border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.08)] cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all overflow-hidden"
      style={{
        background: 'linear-gradient(360deg, #DDDDDD 0%, rgba(255, 255, 255, 0) 50%)'
      }}
    >
      <div className="relative w-full h-full">
        {/* Top Half - Image */}
        <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden rounded-t-[10px]">
          <img 
            src={imageUrl} 
            alt={label} 
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Icon Circle - centered on image/gradient border */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-white rounded-full border border-[#E5E7EB] flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
          <IconComponent className="w-5 h-5 text-[#3B82F6]" strokeWidth={2} />
        </div>
        
        {/* Bottom Half - Label Left, Count Right */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 flex items-end justify-between px-3 pb-2">
          <span className="text-[13px] font-medium text-[#64748B]">{label}</span>
          <span className="text-[20px] font-bold text-[#1E5A6F]">{count}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;