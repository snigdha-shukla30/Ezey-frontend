import React from "react";

export default function Step1ERP({ erpId, setErpId, password, setPassword, onNext }) {
  return (
    <div className="space-y-6">
      <p className="text-gray-600 text-center text-sm">
        Connect your ERP to automatically sync faculty, timetable,
        and classroom data — no manual setup required
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm mb-2 uppercase">Enter ERP ID</label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">👤</span>
            <input
              type="text"
              placeholder="e.g. AAPL12345"
              value={erpId}
              onChange={(e) => setErpId(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 text-sm mb-2 uppercase">Enter Password</label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">🔒</span>
            <input
              type="password"
              value={password}
              placeholder="••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded shadow-lg transition"
      >
        Connect ERP
      </button>
    </div>
  );
}
