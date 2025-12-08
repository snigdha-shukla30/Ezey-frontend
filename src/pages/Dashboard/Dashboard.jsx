import React, { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Header from "../../components/Dashboard/Header";
import StatsCard from "../../components/Dashboard/StatsCard";
import QuickReport from "../../components/Dashboard/QuickReport";
import UploadLoadset from "../../components/Dashboard/UploadLoadset";
import FacultyStatus from "../../components/Dashboard/FacultyStatus";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const stats = [
    {
      label: "Classroom",
      count: 45,
      imageUrl:
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: "Subjects",
      count: 78,
      imageUrl:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: "Faculty",
      count: 34,
      imageUrl:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: "Time Tables",
      count: 8,
      imageUrl:
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#E7EEF4] flex px-4 py-4 gap-4">
      {/* LEFT: Sidebar apne box me */}
      <div className="shrink-0">
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>

      {/* RIGHT: Content – ab center me limited width, jyada right nahi */}
      <div className="flex-1 flex justify-center pt-2">
        <div className="w-full max-w-[1170px] space-y-2">
          {/* TOP HEADER BAR */}
          <div className="w-full bg-white border border-[#BFBFBF] rounded-[10px] px-6 py-3 shadow-[0_4px_14px_rgba(148,163,184,0.18)] flex items-center gap-6">
            <Header />
          </div>

          {/* MAIN DASHBOARD CARD */}
          <div className="w-full bg-white rounded-[10px] border border-[#BFBFBF] shadow-[0_16px_40px_rgba(148,163,184,0.22)] px-8 pt-6 pb-6">
            {/* Top row: Welcome left, ERP Last Sync right */}
            <section className="mb-6 flex items-start justify-between gap-8">
              <div>
                <h1 className="text-[32px] leading-tight font-semibold text-[#265768] mb-2">
                  Welcome back , Divyansh !
                </h1>
                <p className="text-sm text-[#265768] max-w-3xl">
                  Your smart scheduling workspace is ready. Seamlessly manage
                  departments, teachers, subjects, and classroom availability.
                </p>
              </div>

              {/* ERP Last Sync - Vertical layout with button below */}
              <div className="text-right">
                <div 
                  className="text-[16px] font-semibold mb-1"
                  style={{ color: '#265768' }}
                >
                  ERP Last Sync :
                </div>
                <div className="text-[12px] text-[#9CA3AF] mb-2">
                  Last synced at 12:40 PM
                </div>
                <button 
                  className="w-[60px] h-[20px] text-[11px] font-medium text-white rounded-[3.21px] flex items-center justify-center hover:opacity-90 transition-opacity ml-auto"
                  style={{
                    background: 'linear-gradient(0deg, #265768 0%, #4BACCE 100%)'
                  }}
                >
                  Sync
                </button>
              </div>
            </section>

            {/* Stats cards + Faculty Status */}
            <section className="flex items-start justify-end gap-6 mb-10">
              {/* 4 Stats Cards */}
              <div className="flex gap-5 ">
                {stats.map((item, index) => (
                  <StatsCard key={index} {...item} />
                ))}
              </div>
              
              {/* Faculty Status on right side */}
              <FacultyStatus />
            </section>

            {/* Quick Report + Upload - Figma ke mutabiq positioning */}
            <section className="flex items-start gap-15 mt-[-300px] mb-0.1">
              <QuickReport />
              <UploadLoadset />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;