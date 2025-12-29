
import React, { useState } from "react";

import { ChevronDown } from "lucide-react";



export const TimetableContent = () => {
    
  const [activeTab, setActiveTab] = useState("generate");

  return (
    <div className="bg-white rounded-lg border border-[#E5E7EB] p-6">
      {/* Header with Tabs and Sync */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-[#1F2937] mb-1">
            View / Edit generated schedules
          </h1>
          <p className="text-sm text-[#6B7280]">
            View all existing timetables, update details, or regenerate
            schedules with new constraints.
          </p>
        </div>
        <div className="text-right">
          <div className="text-xs text-[#6B7280] mb-1">ERP Last Sync:</div>
          <div className="text-xs text-[#374151] mb-2">
            Last synced at 12:40 PM
          </div>
          <button className="px-4 py-1.5 bg-[#0891B2] text-white text-xs rounded-md hover:bg-[#0E7490] transition-colors">
            Sync ⟳
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-[#E5E7EB] mb-6">
        <button
          onClick={() => setActiveTab("generate")}
          className={`pb-3 px-2 text-sm font-medium transition-colors relative ${
            activeTab === "generate"
              ? "text-[#0891B2]"
              : "text-[#6B7280] hover:text-[#374151]"
          }`}
        >
          Generate Timetable
          {activeTab === "generate" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0891B2]" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("preview")}
          className={`pb-3 px-2 text-sm font-medium transition-colors relative ${
            activeTab === "preview"
              ? "text-[#0891B2]"
              : "text-[#6B7280] hover:text-[#374151]"
          }`}
        >
          Preview Timetable
          {activeTab === "preview" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0891B2]" />
          )}
        </button>
      </div>

      {/* Filter Row */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-[#374151] mb-2">
            Course
          </label>
          <div className="relative">
            <select className="w-full px-4 py-2.5 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#6B7280] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0891B2] focus:border-transparent">
              <option>Default</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] pointer-events-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#374151] mb-2">
            Department
          </label>
          <div className="relative">
            <select className="w-full px-4 py-2.5 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#6B7280] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0891B2] focus:border-transparent">
              <option>Default</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] pointer-events-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#374151] mb-2">
            Semester
          </label>
          <div className="relative">
            <select className="w-full px-4 py-2.5 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#6B7280] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0891B2] focus:border-transparent">
              <option>Default</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] pointer-events-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#374151] mb-2">
            Section
          </label>
          <div className="relative">
            <select className="w-full px-4 py-2.5 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#6B7280] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0891B2] focus:border-transparent">
              <option>Default</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="flex justify-end">
        <button className="px-6 py-2.5 bg-[#0891B2] text-white text-sm font-medium rounded-lg hover:bg-[#0E7490] transition-colors shadow-sm">
          Generate Timetable
        </button>
      </div>
    </div>
  );
};