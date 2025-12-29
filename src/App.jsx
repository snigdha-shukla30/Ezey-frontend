import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Splash from "./pages/Splash/splash";

import ImportSummary from "./pages/ImportSummary/ImportSummary";
import EzeyForm from "./pages/DataFilling/EzeyForm";
import DataEntry from "./pages/DataEntry/DataEntry";
import EzeySignupPage from "./pages/Auth/Signup";
import EzeyLoginPage from "./pages/Auth/Login";
import EzeyForgotPasswordPage from "./pages/Auth/ForgetPassword";
import EmailVerificationPage from "./pages/Auth/EmailVerification";
import GenerateTimetablePage from "./pages/GenerateTT/generate";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<EzeyLoginPage />} />
        <Route path="/signup" element={<EzeySignupPage />} />
        <Route path="/forgetpassword" element={<EzeyForgotPasswordPage />} />
        <Route path="/verification" element={<EmailVerificationPage />} />
        <Route path="/form" element={< EzeyForm />} /> 
        <Route path="/splash" element={<Splash />} />
        <Route path="/import" element={< ImportSummary />} /> 
        {/* <Route path="/dashboard" element={< Dashboard />} />  */}
        <Route path="/dataentry" element={< DataEntry />} />
        <Route path="/generate" element={< GenerateTimetablePage />} /> 

      </Routes>
    </Router>
  );
}

export default App
