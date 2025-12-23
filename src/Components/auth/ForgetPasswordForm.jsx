import React, { useState } from "react";
import { Mail } from "lucide-react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Send reset link to:", email);
  };

  return (
    <>
      {/* ===== HEADER ===== */}
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
          Forgot Password
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
          Forgot password ? No issues we got your back .
        </p>
      </div>

      {/* ===== EMAIL ===== */}
      <div className="mb-10">
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
          Send reset link
        </button>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
