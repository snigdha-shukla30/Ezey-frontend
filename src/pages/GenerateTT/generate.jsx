import React, { useState } from "react";
import Sidebar from "../../Components/Dashboard/Sidebar";
import Header from "./components/layout/Header";
import Filters from "./components/timetable/Filters";
import Tabs from "./components/timetable/Tabs";
import ScheduleTable from "./components/timetable/ScheduleTable";

export default function TimetableScheduler() {
  const [activeTab, setActiveTab] = useState("generate");
  const [showSchedulingOptions, setShowSchedulingOptions] = useState(false);

  const handleGenerate = () => setShowSchedulingOptions(true);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6 overflow-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">

            {/* Header */}
            <div className="mb-6 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                  View / Edit generated schedules
                </h2>
                <p className="text-sm text-gray-500">
                  View timetables, update details, or regenerate schedules.
                </p>
              </div>

              <div className="text-right">
                <div className="text-xs text-gray-500 mb-1">ERP Last Sync:</div>
                <div className="text-xs text-gray-600 mb-2">
                  Last synced at 13:42 PM
                </div>
                <button className="px-4 py-1 bg-teal-600 text-white text-xs rounded hover:bg-teal-700">
                  Sync ⟳
                </button>
              </div>
            </div>

            {/* Tabs */}
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Filters */}
            <Filters />

            {/* Generate Button */}
            <div className="flex justify-end">
              <button
                onClick={handleGenerate}
                className="px-8 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white 
                font-medium rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all shadow-md"
              >
                Generate Timetable
              </button>
            </div>

            {/* Table */}
            {showSchedulingOptions && <ScheduleTable />}
          </div>
        </main>
      </div>
    </div>
  );
}





// import React, { useState } from 'react';
// import { Calendar, CheckCircle, Menu, Search, Mail, Bell } from 'lucide-react';

// export default function TimetableScheduler() {
//   const [activeTab, setActiveTab] = useState('generate');
//   const [selectedCourse, setSelectedCourse] = useState('B.tech');
//   const [selectedDepartment, setSelectedDepartment] = useState('CSE');
//   const [selectedSemester, setSelectedSemester] = useState('III');
//   const [selectedSection, setSelectedSection] = useState('A');
//   const [showSchedulingOptions, setShowSchedulingOptions] = useState(false);

//   const handleGenerateTimetable = () => {
//     setShowSchedulingOptions(true);
//   };

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className="w-36 bg-gradient-to-b from-teal-600 to-teal-700 text-white flex flex-col">
//         {/* Logo */}
//         <div className="p-4 bg-teal-800 rounded-br-3xl">
//           <h1 className="text-2xl font-bold">Ezey</h1>
//         </div>

//         {/* Menu Label */}
//         <div className="px-4 py-2 text-xs text-teal-200">
//           Menu
//         </div>

//         {/* Menu Items */}
//         <nav className="flex-1">
//           <a href="#" className="flex items-center gap-3 px-4 py-3 text-teal-100 hover:bg-teal-600 transition-colors">
//             <Calendar size={18} />
//             <span className="text-sm">Dashboard</span>
//           </a>
//           <a href="#" className="flex items-center gap-3 px-4 py-3 text-teal-100 hover:bg-teal-600 transition-colors">
//             <Menu size={18} />
//             <span className="text-sm">Data Entry</span>
//           </a>
//           <a href="#" className="flex items-center gap-3 px-4 py-3 bg-purple-600 border-l-4 border-purple-400">
//             <Calendar size={18} />
//             <span className="text-sm font-medium">Time Table</span>
//           </a>
//           <a href="#" className="flex items-center gap-3 px-4 py-3 text-teal-100 hover:bg-teal-600 transition-colors">
//             <CheckCircle size={18} />
//             <span className="text-sm">Approval</span>
//           </a>
//         </nav>

//         {/* User Profile */}
//         <div className="p-4 border-t border-teal-500">
//           <div className="flex items-center gap-2">
//             <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-white font-semibold">
//               G
//             </div>
//             <div className="text-xs">
//               <div className="font-medium">Gyansh Hazley</div>
//               <div className="text-teal-200 text-xs truncate">gyansh@example.com</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
//           <div className="flex items-center gap-4 flex-1">
//             <div className="relative flex-1 max-w-md">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//               <input
//                 type="text"
//                 placeholder="Search time table"
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//               />
//             </div>
//           </div>
          
//           <div className="flex items-center gap-4">
//             <button className="p-2 hover:bg-gray-100 rounded-lg relative">
//               <Mail size={20} className="text-gray-600" />
//             </button>
//             <button className="p-2 hover:bg-gray-100 rounded-lg relative">
//               <Bell size={20} className="text-gray-600" />
//               <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//             </button>
//             <div className="flex items-center gap-2 ml-2">
//               <img
//                 src="https://via.placeholder.com/40"
//                 alt="University Logo"
//                 className="w-10 h-10 rounded-full"
//               />
//               <div className="text-sm">
//                 <div className="font-semibold text-gray-800">Maharishi University</div>
//                 <div className="text-xs text-gray-500">Lucknow, UP</div>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Content Area */}
//         <main className="flex-1 p-6 overflow-auto">
//           <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//             {/* Page Header */}
//             <div className="mb-6 flex justify-between items-start">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-1">
//                   View / Edit generated schedules
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   View all existing timetables, update details, or regenerate schedules with new constraints.
//                 </p>
//               </div>
//               <div className="text-right">
//                 <div className="text-xs text-gray-500 mb-1">ERP Last Sync:</div>
//                 <div className="text-xs text-gray-600 mb-2">Last synced at 13:42 PM</div>
//                 <button className="px-4 py-1 bg-teal-600 text-white text-xs rounded hover:bg-teal-700 transition-colors">
//                   Sync ⟳
//                 </button>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="flex gap-4 mb-6 border-b border-gray-200">
//               <button
//                 onClick={() => setActiveTab('generate')}
//                 className={`pb-3 px-1 font-medium text-sm transition-colors relative ${
//                   activeTab === 'generate'
//                     ? 'text-teal-600'
//                     : 'text-gray-500 hover:text-gray-700'
//                 }`}
//               >
//                 Generate Timetable
//                 {activeTab === 'generate' && (
//                   <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600"></div>
//                 )}
//               </button>
//               <button
//                 onClick={() => setActiveTab('preview')}
//                 className={`pb-3 px-1 font-medium text-sm transition-colors relative ${
//                   activeTab === 'preview'
//                     ? 'text-teal-600'
//                     : 'text-gray-500 hover:text-gray-700'
//                 }`}
//               >
//                 Preview Timetable
//                 {activeTab === 'preview' && (
//                   <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600"></div>
//                 )}
//               </button>
//             </div>

//             {/* Filters */}
//             <div className="grid grid-cols-4 gap-4 mb-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Course
//                 </label>
//                 <select
//                   value={selectedCourse}
//                   onChange={(e) => setSelectedCourse(e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm text-gray-600"
//                 >
//                   <option>Default</option>
//                   <option>B.Tech</option>
//                   <option>M.Tech</option>
//                   <option>BCA</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Department
//                 </label>
//                 <select
//                   value={selectedDepartment}
//                   onChange={(e) => setSelectedDepartment(e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm text-gray-600"
//                 >
//                   <option>Default</option>
//                   <option>Computer Science</option>
//                   <option>Electronics</option>
//                   <option>Mechanical</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Semester
//                 </label>
//                 <select
//                   value={selectedSemester}
//                   onChange={(e) => setSelectedSemester(e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm text-gray-600"
//                 >
//                   <option>Default</option>
//                   <option>1st Semester</option>
//                   <option>2nd Semester</option>
//                   <option>3rd Semester</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Section
//                 </label>
//                 <select
//                   value={selectedSection}
//                   onChange={(e) => setSelectedSection(e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm text-gray-600"
//                 >
//                   <option>Default</option>
//                   <option>Section A</option>
//                   <option>Section B</option>
//                   <option>Section C</option>
//                 </select>
//               </div>
//             </div>

//             {/* Generate Button */}
//             <div className="flex justify-end">
//               <button 
//                 onClick={handleGenerateTimetable}
//                 className="px-8 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-medium rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all shadow-md hover:shadow-lg"
//               >
//                 Generate Timetable
//               </button>
//             </div>

//             {/* Scheduling Options Table */}
//             {showSchedulingOptions && (
//               <div className="mt-8 border-t border-gray-200 pt-6">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="border-b border-gray-200">
//                       <th className="text-left py-3 px-4 text-sm font-semibold text-teal-700">
//                         Scheduling<br />
//                         <span className="font-normal">Modes</span>
//                       </th>
//                       <th className="text-center py-3 px-4 text-sm font-semibold text-teal-700">
//                         Preview<br />
//                         <span className="font-normal">Timetable</span>
//                       </th>
//                       <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {/* Balanced Option */}
//                     <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
//                       <td className="py-4 px-4">
//                         <div className="text-sm font-medium text-gray-700">Balanced</div>
//                       </td>
//                       <td className="py-4 px-4 text-center">
//                         <button className="p-2 hover:bg-gray-100 rounded transition-colors">
//                           <Calendar size={18} className="text-gray-400 mx-auto" />
//                         </button>
//                       </td>
//                       <td className="py-4 px-4 text-right">
//                         <div className="flex justify-end gap-2">
//                           <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                             <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
//                           </button>
//                           <button className="p-2 hover:bg-red-50 rounded transition-colors">
//                             <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                             </svg>
//                           </button>
//                         </div>
//                       </td>
//                     </tr>

//                     {/* Room Optimized Option */}
//                     <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
//                       <td className="py-4 px-4">
//                         <div className="text-sm font-medium text-gray-700">Room<br />Optimized</div>
//                       </td>
//                       <td className="py-4 px-4 text-center">
//                         <button className="p-2 hover:bg-gray-100 rounded transition-colors">
//                           <Calendar size={18} className="text-gray-400 mx-auto" />
//                         </button>
//                       </td>
//                       <td className="py-4 px-4 text-right">
//                         <div className="flex justify-end gap-2">
//                           <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                             <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
//                           </button>
//                           <button className="p-2 hover:bg-red-50 rounded transition-colors">
//                             <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                             </svg>
//                           </button>
//                         </div>
//                       </td>
//                     </tr>

//                     {/* Faculty Efficient Option */}
//                     <tr className="hover:bg-gray-50 transition-colors">
//                       <td className="py-4 px-4">
//                         <div className="text-sm font-medium text-gray-700">Faculty<br />Efficient</div>
//                       </td>
//                       <td className="py-4 px-4 text-center">
//                         <button className="p-2 hover:bg-gray-100 rounded transition-colors">
//                           <Calendar size={18} className="text-gray-400 mx-auto" />
//                         </button>
//                       </td>
//                       <td className="py-4 px-4 text-right">
//                         <div className="flex justify-end gap-2">
//                           <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                             <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
//                           </button>
//                           <button className="p-2 hover:bg-red-50 rounded transition-colors">
//                             <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                             </svg>
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }