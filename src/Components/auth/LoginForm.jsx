import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

import { loginAPI } from "../../api/api"; // ✅ path check kar lena
import { useNavigate } from "react-router-dom";



const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

const handleSubmit = async () => {
  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  setLoading(true);
  try {
    const res = await loginAPI({
      email,
      password,
    });

    if (res.success) {
      // 🔐 1. TOKEN STORE
      localStorage.setItem("token", res.token);

      // (optional) user data
      localStorage.setItem("user", JSON.stringify(res.user));

      alert("Login successful");

      // 🚀 2. REDIRECT
      navigate("/form");
    } else {
      alert(res.message || "Login failed");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  } finally {
    setLoading(false);
  }
};

 
  return (
    <>
      <div className="mb-8 text-center">
        <p className="text-md text-[#4A9FB5] text-left mb-8">Ezey</p>

        <h1
          className="mb-3"
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: "28px",
            lineHeight: "120%",
            color: "#265768",
          }}
        >
          Welcome to Ezey
        </h1>

        <p
          style={{
            fontFamily: "sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "150%",
            color: "#7A8C94",
          }}
        >
          Start your experience with Ezey by signing in
        </p>
        <p
          style={{
            fontFamily: "sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "150%",
            color: "#7A8C94",
          }}
        >
          or signing up
        </p>
      </div>

      {/* ===== EMAIL ===== */}
      <div className="mb-4">
        <label
          className="block mb-2 text-left"
          style={{
            fontFamily: "sans-serif",
            fontWeight: 600,
            fontSize: "13px",
            lineHeight: "150%",
            color: "#265768",
          }}
        >
          Email Address / Institution Id
        </label>

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A0AEC0]"
          />
          <input
            className="w-full h-11 pl-10 pr-4 rounded-md"
            style={{
              border: "1px solid #E0E0E0",
              fontFamily: "sans-serif",
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: "150%",
              color: "#333",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address or Institution Id"
          />
        </div>
      </div>

      {/* ===== PASSWORD ===== */}
      <div className="mb-2 relative">
        <label
          className="block mb-2 text-left"
          style={{
            fontFamily: "sans-serif",
            fontWeight: 600,
            fontSize: "13px",
            lineHeight: "150%",
            color: "#265768",
          }}
        >
          Password*
        </label>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A0AEC0]"
          />
          <input
            type={showPassword ? "text" : "password"}
            className="w-full h-11 pl-10 pr-10 rounded-md"
            style={{
              border: "1px solid #E0E0E0",
              fontFamily: "sans-serif",
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: "150%",
              color: "#333",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••••"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#A0AEC0]"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div className="text-right mb-6">
        <a
          href="#"
          style={{
            fontFamily: "sans-serif",
            fontSize: "12px",
            color: "#4BACCE",
            textDecoration: "none",
          }}
        >
          Forgot Password?
        </a>
      </div>

      {/* ===== BUTTON ===== */}
      <div className="flex justify-center mb-6">
        <button
          onClick={handleSubmit}
          className="flex items-center justify-center w-[251px]"
          style={{
            height: "44px",
            borderRadius: "6px",
            background: "linear-gradient(135deg, #4BACCE 0%, #265768 100%)",
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "120%",
            color: "#FFFFFF",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </div>
    </>
  );
};

export default LoginForm;
