import React, { useState } from "react";
import  Sidebar  from "../../Components/ui/Sidebar";
import  Header  from "../../Components/ui/Header";
import { TimetableContent } from "../../Components/timetable/GenerateTT";

const GenerateTimetablePage = () => {
  const [activeMenu, setActiveMenu] = useState("timetable");

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex">
      {/* Sidebar */}
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-6 pt-4">
        {/* Header */}
        <div className="bg-white rounded-[12px] px-6 py-4 shadow-sm mb-5 flex items-center">
          <Header />
        </div>

        {/* Page Content */}
        <TimetableContent />
      </div>
    </div>
  );
};

export default GenerateTimetablePage;

















// import React, { useState } from "react";
// import Sidebar from "../../Components/Dashboard/Sidebar";
// import Header from "./components/layout/Header";
// import Filters from "./components/timetable/Filters";
// import Tabs from "./components/timetable/Tabs";
// import ScheduleTable from "./components/timetable/ScheduleTable";

// export default function TimetableScheduler() {
//   const [activeTab, setActiveTab] = useState("generate");
//   const [showSchedulingOptions, setShowSchedulingOptions] = useState(false);

//   const handleGenerate = () => setShowSchedulingOptions(true);

//   return (
//     <div className="flex h-screen bg-gray-50">
//       <Sidebar />

//       <div className="flex-1 flex flex-col">
//         <Header />

//         <main className="flex-1 p-6 overflow-auto">
//           <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">

//             {/* Header */}
//             <div className="mb-6 flex justify-between items-start">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-1">
//                   View / Edit generated schedules
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   View timetables, update details, or regenerate schedules.
//                 </p>
//               </div>

//               <div className="text-right">
//                 <div className="text-xs text-gray-500 mb-1">ERP Last Sync:</div>
//                 <div className="text-xs text-gray-600 mb-2">
//                   Last synced at 13:42 PM
//                 </div>
//                 <button className="px-4 py-1 bg-teal-600 text-white text-xs rounded hover:bg-teal-700">
//                   Sync ⟳
//                 </button>
//               </div>
//             </div>

//             {/* Tabs */}
//             <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

//             {/* Filters */}
//             <Filters />

//             {/* Generate Button */}
//             <div className="flex justify-end">
//               <button
//                 onClick={handleGenerate}
//                 className="px-8 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white 
//                 font-medium rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all shadow-md"
//               >
//                 Generate Timetable
//               </button>
//             </div>

//             {/* Table */}
//             {showSchedulingOptions && <ScheduleTable />}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }



