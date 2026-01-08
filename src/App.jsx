import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useState } from "react";

// 🔹 COMPONENT (UI)
import QuickAddBatch from "./Components/ManualEntry/QuickAddBatch";

// 🔹 PAGES
import ManualEntry from "./pages/ManualEntry/ManaualEntry";
import ManualEntrySubject from "./pages/ManualEntry/ManualEntrySubject";


function App() {
  return (
    <Router>
      <Routes>
        {/* Default + Main page */}
        <Route path="/" element={<Navigate to="/manualentry" replace />} />
        <Route path="/manualentry" element={<ManualEntry />} />
        <Route path="/manualentry-subject" element={<ManualEntrySubject />} />

        {/* ✅ DEBUG / TEST ROUTES */}
        <Route path="/debug" element={<div style={{ padding: 20 }}>DEBUG OK</div>} />
        <Route path="/quickadd" element={<QuickAddTest />} />
      </Routes>
    </Router>
  );
}

/* =================================================
   🔥 QUICK ADD BATCH TEST PAGE (DEBUG PURPOSE ONLY)
   ================================================= */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="max-w-[1100px] mx-auto p-4 bg-red-50 border border-red-200 rounded">
          <h4 className="font-semibold text-red-700">Component Error</h4>
          <pre className="text-xs text-red-600">{String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
function QuickAddTest() {
  const [batches, setBatches] = useState([]);

  const handleAdd = (batch) => {
    setBatches((prev) => [batch, ...prev]);
    console.log("Added batch:", batch);
  };

  return (
    <div className="min-h-screen bg-[#F3F6FB] p-6">
      {/* UI COMPONENT */}
      <ErrorBoundary>
        <QuickAddBatch onAddBatch={handleAdd} />
      </ErrorBoundary>

      {/* Preview removed per user request */}
    </div>
  );
}

export default App;
