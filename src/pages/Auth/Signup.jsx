import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import bgImg from "../../assets/images/bg.jpg";
import pic1 from "../../assets/images/pic1.jpg";
import pic2 from "../../assets/images/pic2.jpg";
import pic3 from "../../assets/images/pic3.jpg";
import { signupAPI } from "../../api/api";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const pwd = e.target.password.value;
    const cpwd = e.target.confirmPassword.value;

    if (!name || !email || !pwd || !cpwd) {
      alert("Please fill all required fields.");
      return;
    }
    if (pwd !== cpwd) {
      alert("Passwords do not match.");
      return;
    }
    if (!account) {
      alert("Please select account type.");
      return;
    }

    const payload = {
      name,
      email,
      password: pwd,
      role: account,
    };

    setLoading(true);

    try {
      console.log("Payload:", payload);
      const data = await signupAPI(payload);
      console.log("Signup response:", data);

      if (data.success || data.status === "success") {
        alert("Signup successful!");
        window.location.href = "/login";
      } else {
        alert(data.message || "Signup failed. Try again.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#edf3fb] flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-6xl min-h-[540px] rounded-[28px] border border-[#c2d6eb] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.18)] overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT */}
        <div className="bg-[#f8fbff] flex flex-col px-12 py-8">
          <div className="relative flex-1">
            <div className="text-sm font-semibold tracking-[0.2em] text-[#5d7a90] mb-8">
              Ezey
            </div>

            <div className="mb-6 text-center">
              <h1 className="text-[28px] font-semibold text-[#2c4a5e] leading-tight mb-2">
                Welcome to Ezey
              </h1>
              <p className="text-[13px] text-[#7a92a5] leading-relaxed">
                Create your account to start your journey
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full max-w-[420px] mx-auto space-y-4"
            >
              {/* Full Name */}
              <div>
                <label className="block text-[12px] font-semibold text-[#4c5a6b] mb-2">
                  Full Name*
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter full name"
                  className="w-full rounded-md border border-[#d7e3ee] px-3 py-2 bg-[#fbfdff] text-[13px]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[12px] font-semibold text-[#4c5a6b] mb-2">
                  Email Address*
                </label>
                <div className="flex items-center gap-3 rounded-md border border-[#d7e3ee] bg-[#fbfdff] px-3 py-2">
                  <Mail className="w-4 h-4 text-[#9fb5c7]" />
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    className="flex-1 bg-transparent outline-none text-[13px] text-[#2c4a5e]"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-[12px] font-semibold text-[#4c5a6b] mb-2">
                  Password*
                </label>
                <div className="flex items-center gap-3 rounded-md border border-[#d7e3ee] bg-[#fbfdff] px-3 py-2">
                  <Lock className="w-4 h-4 text-[#9fb5c7]" />
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="flex-1 bg-transparent outline-none text-[13px] text-[#2c4a5e]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="text-[#9fb5c7] p-1"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-[12px] font-semibold text-[#4c5a6b] mb-2">
                  Re-enter Password*
                </label>
                <div className="flex items-center gap-3 rounded-md border border-[#d7e3ee] bg-[#fbfdff] px-3 py-2">
                  <Lock className="w-4 h-4 text-[#9fb5c7]" />
                  <input
                    name="confirmPassword"
                    type={confirmVisible ? "text" : "password"}
                    className="flex-1 bg-transparent outline-none text-[13px] text-[#2c4a5e]"
                  />
                  <button
                    type="button"
                    onClick={() => setConfirmVisible((prev) => !prev)}
                    className="text-[#9fb5c7] p-1"
                  >
                    {confirmVisible ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              {/* Account Type */}
              <div>
                <label className="block text-[12px] font-semibold text-[#4c5a6b] mb-2">
                  Account Type*
                </label>
                <select
  name="role"
  value={account}
  onChange={(e) => setAccount(e.target.value)}
  required
  className="w-full rounded-md border border-[#d7e3ee] px-3 py-2 bg-white text-[13px] text-[#2c4a5e]"
>
  <option value="">Select role</option>
  <option value="admin">Admin</option>
  <option value="coordinator">Co-ordinator</option>
  <option value="faculty">Faculty</option>
</select>

              </div>

              {/* Button */}
              <div className="mt-4 flex flex-col items-center">
                <div className="mb-3 text-[11px] text-[#8599ab]">
                  Already a user?{" "}
                  <button
                    onClick={() => (window.location.href = "/login")}
                    className="font-semibold text-[#3d8bb5]"
                    type="button"
                  >
                    Sign In
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-[240px] rounded-full bg-gradient-to-b from-[#3d98c4] to-[#1e6f99] py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(30,111,153,0.5)] hover:brightness-105 disabled:opacity-70 transition"
                >
                  {loading ? "Processing..." : "Sign Up"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center px-6 md:px-10 py-8 md:py-10 bg-[#021726]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{ backgroundImage: `url(${bgImg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#032b3f]/40 via-transparent to-[#010810]/70" />

          <div className="relative w-full h-full max-w-md min-h-[420px] md:min-h-[460px] flex flex-col items-center justify-center">
            <img
              src={pic1}
              alt=""
              className="absolute top-[10%] left-[14%] w-40 h-40 rounded-[18px] border-[3px] border-[#c6d5e5]"
            />
            <img
              src={pic2}
              alt=""
              className="absolute top-[28%] left-[46%] w-40 h-40 rounded-[18px] border-[3px] border-[#c6d5e5]"
            />
            <img
              src={pic3}
              alt=""
              className="absolute top-[52%] left-[20%] w-40 h-40 rounded-[18px] border-[3px] border-[#c6d5e5]"
            />

            <p className="absolute bottom-7 left-1/2 -translate-x-1/2 w-[82%] text-center text-[11px] md:text-xs text-[#e5f3ff] italic leading-relaxed">
              "With Ezey, your tiring manual timetable arrangement becomes fully automated."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

