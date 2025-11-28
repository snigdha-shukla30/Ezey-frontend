import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import EzeyLogin from "./pages/Login";


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<EzeyLogin />} />
        

      </Routes>
    </Router>
  );
}

export default App
