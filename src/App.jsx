import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


// import EzeyERPPage from "./pages/DataFilling/ERPentry";
// import EzeyLoadchartPage from "./pages/DataFilling/LoadsetEntry";
import Splash from "./pages/Splash/splash";
// import EzeyManualEntryPage from "./pages/DataFilling/ManualEntry";

import Dashboard from "./pages/Dashboard/Dashboard";
import ImportSummary from "./pages/ImportSummary/ImportSummary";
import EzeyForm from "./pages/DataFilling/EzeyForm";
import DataEntry from "./pages/DataEntry/DataEntry";
import EzeySignupPage from "./pages/Auth/Signup";
import EzeyLoginPage from "./pages/Auth/Login";
import EzeyForgotPasswordPage from "./pages/Auth/ForgetPassword";



function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Navigate to="/splash" replace />} />
        <Route path="/login" element={<EzeyLoginPage />} />
        <Route path="/signup" element={<EzeySignupPage />} />
        <Route path="/forgetpassword" element={<EzeyForgotPasswordPage />} />

        <Route path="/form" element={< EzeyForm />} /> 
        {/* <Route path="/erpentry" element={<EzeyERPPage />} />
        <Route path="/loadsetentry" element={<EzeyLoadchartPage />} /> */}
        <Route path="/splash" element={<Splash />} />
        {/* <Route path="/manualentry" element={<EzeyManualEntryPage />} />  */}
        <Route path="/import" element={< ImportSummary />} /> 
        <Route path="/dashboard" element={< Dashboard />} /> 
        <Route path="/dataentry" element={< DataEntry />} /> 




      </Routes>
    </Router>
  );
}

export default App
