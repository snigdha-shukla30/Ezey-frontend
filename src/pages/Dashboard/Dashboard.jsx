import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/ui/Sidebar";
import Header from "../../Components/ui/Header";
import StatsCard from "../../Components/Dashboard/StatsCard";
import QuickReport from "../../Components/Dashboard/QuickReport";
import UploadLoadset from "../../Components/Dashboard/UploadLoadset";
import FacultyStatus from "../../Components/Dashboard/FacultyStatus";
import { dashboardSummaryAPI } from "../../api/api";


const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  


   useEffect(() => {
  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      const res = await dashboardSummaryAPI();


      if (res?.success) {
        setDashboardData(res.data);
      } else {
        setError(res?.message || "Failed to load dashboard");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  fetchDashboardData();
}, []);


  const stats = dashboardData
    ? [
        {
          label: "Classroom",
          count: dashboardData.totalClassrooms,
          imageUrl:
            "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80",
        },
        {
          label: "Subjects",
          count: dashboardData.totalSubjects,
          imageUrl:
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80",
        },
        {
          label: "Faculty",
          count: dashboardData.totalFaculties,
          imageUrl:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        },
        {
          label: "Time Tables",
          count: dashboardData.totalApprovedTimetables,
          imageUrl:
            "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80",
        },
      ]
    : [];

  return (
    <div className="min-h-screen h-screen bg-[#FFFFFF] flex px-4 py-4 gap-4 overflow-hidden">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      <div className="flex-1 overflow-y-auto">
        <Header />

        {loading && <p className="text-center mt-10">Loading dashboard...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && dashboardData && (
          <>
            <div className="flex gap-5 mt-6">
              {stats.map((item, index) => (
                <StatsCard key={index} {...item} />
              ))}
            </div>

            <div className="flex gap-6 mt-10">
              <FacultyStatus
                facultyList={dashboardData.facultyList}
                totalFaculties={dashboardData.totalFaculties}
              />
            </div>

            <div className="flex gap-6 mt-10">
              <QuickReport quickReport={dashboardData.quickReport} />
              <UploadLoadset />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

