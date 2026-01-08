import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import Splash from "./pages/Splash/Splash";
import Dashboard from "./pages/Dashboard/Dashboard";
import ImportSummary from "./pages/ImportSummary/ImportSummary";
import EzeyForm from "./pages/DataFilling/EzeyForm";
import DataEntry from "./pages/DataEntry/DataEntry";
import GenerateTimetablePage from "./pages/GenerateTT/Generate";


import EzeySignupPage from "./pages/Auth/Signup";
import EzeyLoginPage from "./pages/Auth/Login";
import EzeyForgotPasswordPage from "./pages/Auth/ForgetPassword";
import EmailVerificationPage from "./pages/Auth/EmailVerification";
import EmailVerifiedPage from "./pages/Auth/EmailVerified";

function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Navigate to="/login" replace />} />

 
        <Route path="/login" element={<EzeyLoginPage />} />
        <Route path="/signup" element={<EzeySignupPage />} />
        <Route path="/forgetpassword" element={<EzeyForgotPasswordPage />} />
        <Route path="/verification" element={<EmailVerificationPage />} />
        <Route path="/verified" element={<EmailVerifiedPage />} />

       
        <Route path="/splash" element={<Splash />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" element={<EzeyForm />} />
        <Route path="/import" element={<ImportSummary />} />
        <Route path="/dataentry" element={<DataEntry />} />
        <Route path="/generate" element={<GenerateTimetablePage />} />
      </Routes>
    </Router>
  );
}

export default App;











// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import Splash from "./pages/Splash/splash";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import ImportSummary from "./pages/ImportSummary/ImportSummary";
// import EzeyForm from "./pages/DataFilling/EzeyForm";
// import DataEntry from "./pages/DataEntry/DataEntry";
// import EzeySignupPage from "./pages/Auth/Signup";
// import EzeyLoginPage from "./pages/Auth/Login";
// import EzeyForgotPasswordPage from "./pages/Auth/ForgetPassword";
// import EmailVerificationPage from "./pages/Auth/EmailVerification";
// import EmailVerifiedPage from "./pages/Auth/EmailVerified";
// import GenerateTimetablePage from "./pages/GenerateTT/generate";



// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/login" replace />} />
//         <Route path="/login" element={<EzeyLoginPage />} />
//         <Route path="/signup" element={<EzeySignupPage />} />
//         <Route path="/forgetpassword" element={<EzeyForgotPasswordPage />} />
//         <Route path="/verification" element={<EmailVerificationPage />} />
//         <Route path="/form" element={< EzeyForm />} /> 
//         <Route path="/splash" element={<Splash />} />
//         <Route path="/dashboard" element={< Dashboard />} />
//         <Route path="/import" element={< ImportSummary />} /> 
//         {/* <Route path="/dashboard" element={< Dashboard />} />  */}
//         <Route path="/dataentry" element={< DataEntry />} />
//         <Route path="/generate" element={< GenerateTimetablePage />} />
//         <Route path="/verified" element={< EmailVerifiedPage />} /> 


//       </Routes>
//     </Router>
//   );
// }

// /* =================================================
//    🔥 QUICK ADD BATCH TEST PAGE (DEBUG PURPOSE ONLY)
//    ================================================= */
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { error: null };
//   }
//   static getDerivedStateFromError(error) {
//     return { error };
//   }
//   render() {
//     if (this.state.error) {
//       return (
//         <div className="max-w-[1100px] mx-auto p-4 bg-red-50 border border-red-200 rounded">
//           <h4 className="font-semibold text-red-700">Component Error</h4>
//           <pre className="text-xs text-red-600">{String(this.state.error)}</pre>
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }
// function QuickAddTest() {
//   const [batches, setBatches] = useState([]);

//   const handleAdd = (batch) => {
//     setBatches((prev) => [batch, ...prev]);
//     console.log("Added batch:", batch);
//   };

//   return (
//     <div className="min-h-screen bg-[#F3F6FB] p-6">
//       {/* UI COMPONENT */}
//       <ErrorBoundary>
//         <QuickAddBatch onAddBatch={handleAdd} />
//       </ErrorBoundary>

//       {/* Preview removed per user request */}
//     </div>
//   );
// }

// export default App;
