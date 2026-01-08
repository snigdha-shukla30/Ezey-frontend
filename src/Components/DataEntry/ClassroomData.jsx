// // src/components/DataEntry/ClassroomData.jsx
// import React, { useState, useEffect } from "react";
// import { Edit2, Trash2 } from "lucide-react";
// import { getClassrooms, addClassroom } from "../../api/api"; // ✅ API imports

// export default function ClassroomData({ searchQuery }) {
//   // ✅ States
//   const [classrooms, setClassrooms] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // ✅ Fetch classrooms on component mount
//   useEffect(() => {
//     fetchClassrooms();
//   }, []);

//   // ✅ GET - Fetch all classrooms
//   const fetchClassrooms = async () => {
//     try {
//       setLoading(true);
//       setError("");
//       const data = await getClassrooms();
//       setClassrooms(Array.isArray(data) ? data : []);
//     } catch (err) {
//       console.error(err);
//       setError(err.message || "Failed to fetch classrooms");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ POST - Add new classroom (example function)
//   const handleAddClassroom = async () => {
//     try {
//       const newClassroom = {
//         name: "Room 301",
//         capacity: 50,
//         type: "Lecture Hall"
//       };
      
//       const response = await addClassroom(newClassroom);
//       console.log("Classroom added:", response);
      
//       // Refresh the list after adding
//       fetchClassrooms();
//     } catch (err) {
//       console.error("Error adding classroom:", err.message);
//       alert(err.message);
//     }
//   };

//   // ✅ Search filter
//   const filtered = classrooms.filter((c) =>
//     c.name?.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div
//       className="bg-white rounded-[10px] border border-[#DFDFDF] w-full"
//       style={{ maxWidth: "1068px", height: "293px" }}
//     >
//       {/* Column headers */}
//       <div className="flex items-center border-b border-[#DFDFDF] px-6 pt-1 pb-2">
//         <div className="flex-1">
//           <span className="text-sm font-medium text-gray-700">Classroom number</span>
//         </div>
//         <div className="flex-1 text-center">
//           <span className="text-sm font-medium text-gray-700">Classroom type</span>
//         </div>
//         <div className="flex-1 text-center">
//           <span className="text-sm font-medium text-gray-700">Capacity</span>
//         </div>
//         <div className="w-32 text-center">
//           <span className="text-sm font-medium text-gray-700">Action</span>
//         </div>
//       </div>

//       {/* Add Classroom button (for quick testing) */}
//       <div className="flex items-center justify-end px-6 py-3">
//         <button
//           onClick={handleAddClassroom}
//           className="text-sm px-3 py-1 bg-[#4BACCE] text-white rounded-md hover:opacity-90 transition"
//         >
//           Add Classroom
//         </button>
//       </div>

//       {/* Scrollable list */}
//       <div className="overflow-y-auto" style={{ height: "calc(293px - 48px)" }}>
//         {/* ✅ Loading State */}
//         {loading && (
//           <div className="flex items-center justify-center h-full">
//             <p className="text-sm text-gray-500">Loading classrooms...</p>
//           </div>
//         )}

//         {/* ✅ Error State */}
//         {error && !loading && (
//           <div className="flex items-center justify-center h-full">
//             <p className="text-sm text-red-500">{error}</p>
//           </div>
//         )}

//         {/* ✅ Empty State */}
//         {!loading && !error && filtered.length === 0 && (
//           <div className="flex items-center justify-center h-full">
//             <p className="text-sm text-gray-500">No classrooms found</p>
//           </div>
//         )}

//         {/* ✅ Data Rows */}
//         {!loading &&
//           !error &&
//           filtered.map((room) => (
//             <div
//               key={room._id}
//               className="flex items-center px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition"
//             >
//               <div className="flex-1 text-sm text-gray-600">{room.name}</div>
//               <div className="flex-1 text-center text-sm text-gray-400">{room.type}</div>
//               <div className="flex-1 text-center text-sm text-gray-600">{room.capacity}</div>

//               {/* Action buttons */}
//               <div className="w-32 flex items-center justify-center gap-4">
//                 <button className="text-gray-400 hover:text-blue-600">
//                   <Edit2 size={15} />
//                 </button>
//                 <button className="text-gray-400 hover:text-red-600">
//                   <Trash2 size={15} />
//                 </button>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }





















// src/components/DataEntry/ClassroomData.jsx
import React, { useState, useEffect } from "react";
import { Edit2, Trash2, X, Check } from "lucide-react";
import { getClassrooms, deleteClassroom, updateClassroom } from "../../api/api";

export default function ClassroomData({ searchQuery, refreshTrigger }) {
  const [classrooms, setClassrooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    type: "",
    capacity: ""
  });

  
  useEffect(() => {
    fetchClassrooms();
  }, [refreshTrigger]);

  const fetchClassrooms = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getClassrooms();
      if (response.success) {
        setClassrooms(response.data || []);
      } else {
        setError("Failed to load classrooms");
      }
    } catch (err) {
      console.error("Error fetching classrooms:", err);
      setError(err.message || "Failed to load classrooms");
    } finally {
      setIsLoading(false);
    }
  };

 
  const handleDelete = async (classroomId, classroomName) => {
    if (!window.confirm(`Are you sure you want to delete "${classroomName}"?`)) {
      return;
    }

    try {
      const response = await deleteClassroom(classroomId);
      if (response.success) {
        // Remove from local state immediately
        setClassrooms(classrooms.filter(c => c._id !== classroomId));
        alert("Classroom deleted successfully!");
      } else {
        alert(response.message || "Failed to delete classroom");
      }
    } catch (err) {
      console.error("Error deleting classroom:", err);
      alert(err.message || "Failed to delete classroom");
    }
  };

  
  const handleEditStart = (room) => {
    setEditingId(room._id);
    setEditForm({
      name: room.name,
      type: room.type,
      capacity: room.capacity
    });
  };

  
  const handleEditCancel = () => {
    setEditingId(null);
    setEditForm({ name: "", type: "", capacity: "" });
  };

 
  const handleEditSave = async (classroomId) => {
    // Validation
    if (!editForm.name.trim()) {
      alert("Classroom name is required");
      return;
    }
    if (!editForm.type.trim()) {
      alert("Classroom type is required");
      return;
    }
    if (!editForm.capacity || editForm.capacity <= 0) {
      alert("Valid capacity is required");
      return;
    }

    try {
      const response = await updateClassroom(classroomId, {
        capacity: Number(editForm.capacity),
        type: editForm.type.trim()
      });

      if (response.success) {
        // Update local state
        setClassrooms(classrooms.map(c => 
          c._id === classroomId 
            ? { ...c, ...response.data }
            : c
        ));
        setEditingId(null);
        setEditForm({ name: "", type: "", capacity: "" });
        alert("Classroom updated successfully!");
      } else {
        alert(response.message || "Failed to update classroom");
      }
    } catch (err) {
      console.error("Error updating classroom:", err);
      alert(err.message || "Failed to update classroom");
    }
  };

  // ✅ Filter classrooms based on search query
  const filtered = classrooms.filter((c) =>
    c.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="bg-white rounded-[10px] border border-[#DFDFDF] w-full"
      style={{ maxWidth: "1068px", height: "293px" }}
    >
      {/* Column headers */}
      <div className="flex items-center border-b border-[#DFDFDF] px-6 pt-1 pb-2">
        <div className="flex-1">
          <span className="text-sm font-medium text-gray-700">Classroom Name</span>
        </div>
        <div className="flex-1 text-center">
          <span className="text-sm font-medium text-gray-700">Classroom Type</span>
        </div>
        <div className="flex-1 text-center">
          <span className="text-sm font-medium text-gray-700">Capacity</span>
        </div>
        <div className="w-32 text-center">
          <span className="text-sm font-medium text-gray-700">Action</span>
        </div>
      </div>

      {/* Scrollable list */}
      <div 
        className="overflow-y-auto custom-scroll" 
        style={{ height: "calc(293px - 48px)" }}
      >
        {/* Scrollbar Styles */}
        <style>{`
          .custom-scroll::-webkit-scrollbar {
            width: 9.78px;
          }
          .custom-scroll::-webkit-scrollbar-track {
            background: transparent;
            border-radius: 44.02px;
            border: 1.22px solid #E5E5E5;
          }
          .custom-scroll::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #575757 -93.33%, #75CBF6 100%);
            border-radius: 4.89px;
            width: 12.23px;
          }
          .custom-scroll::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #575757 -93.33%, #5BB8E8 100%);
          }
        `}</style>
        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-500 text-sm">Loading classrooms...</div>
          </div>
        )}

        {/* Error State */}
        {!isLoading && error && (
          <div className="flex items-center justify-center h-full">
            <div className="text-red-500 text-sm">{error}</div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && filtered.length === 0 && (
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-400 text-sm">
              {searchQuery ? "No classrooms found" : "No classrooms added yet"}
            </div>
          </div>
        )}

        {/* Data Rows */}
        {!isLoading && !error && filtered.map((room) => (
          <div
            key={room._id}
            className={`flex items-center px-6 py-4 border-b border-gray-100 transition ${
              editingId === room._id ? 'bg-blue-50' : 'hover:bg-gray-50'
            }`}
          >
            {/* Classroom Name (Read-only) */}
            <div className="flex-1 text-sm text-gray-600">{room.name}</div>

            {/* Classroom Type (Editable) */}
            <div className="flex-1 text-center">
              {editingId === room._id ? (
                <input
                  type="text"
                  value={editForm.type}
                  onChange={(e) => setEditForm({ ...editForm, type: e.target.value })}
                  className="w-full px-2 py-1 text-sm text-center border border-blue-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Type"
                />
              ) : (
                <span className="text-sm text-gray-400 capitalize">{room.type}</span>
              )}
            </div>

            {/* Capacity (Editable) */}
            <div className="flex-1 text-center">
              {editingId === room._id ? (
                <input
                  type="number"
                  value={editForm.capacity}
                  onChange={(e) => setEditForm({ ...editForm, capacity: e.target.value })}
                  className="w-full px-2 py-1 text-sm text-center border border-blue-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Capacity"
                  min="1"
                />
              ) : (
                <span className="text-sm text-gray-600">{room.capacity}</span>
              )}
            </div>

            {/* Action buttons */}
            <div className="w-32 flex items-center justify-center gap-3">
              {editingId === room._id ? (
                <>
                  {/* Save button */}
                  <button
                    onClick={() => handleEditSave(room._id)}
                    className="text-green-500 hover:text-green-700 transition"
                    title="Save"
                  >
                    <Check size={18} />
                  </button>
                  {/* Cancel button */}
                  <button
                    onClick={handleEditCancel}
                    className="text-red-500 hover:text-red-700 transition"
                    title="Cancel"
                  >
                    <X size={18} />
                  </button>
                </>
              ) : (
                <>
                  {/* Edit button */}
                  <button
                    onClick={() => handleEditStart(room)}
                    className="text-gray-400 hover:text-blue-600 transition"
                    title="Edit"
                  >
                    <Edit2 size={15} />
                  </button>
                  {/* Delete button */}
                  <button
                    onClick={() => handleDelete(room._id, room.name)}
                    className="text-gray-400 hover:text-red-600 transition"
                    title="Delete"
                  >
                    <Trash2 size={15} />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}