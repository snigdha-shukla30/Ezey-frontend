import React from "react";

export default function Step3ManualEntry({ onSubmit }) {
  return (
    <div className="space-y-6">
      <p className="text-gray-600 text-center text-sm">
        No file? No problem — manually input all required data
      </p>

      <div className="grid grid-cols-2 gap-4">
        {["Classroom", "Faculty", "Subjects", "Batches"].map((item) => (
          <button
            key={item}
            className="flex items-center justify-center gap-2 border-2 border-gray-300 rounded-lg py-3 hover:border-teal-500 hover:bg-teal-50 transition"
          >
            <span className="text-gray-400">📌</span>
            <span className="text-gray-600">{item}</span>
          </button>
        ))}
      </div>

      <button className="flex items-center justify-center gap-2 border-2 border-gray-300 rounded-lg py-3 w-full hover:border-teal-500 hover:bg-teal-50 transition">
        <span className="text-gray-400">⚙️</span>
        <span className="text-gray-600">Constraints</span>
      </button>

      <button
        onClick={onSubmit}
        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded shadow-lg transition"
      >
        Submit Data
      </button>
    </div>
  );
}
