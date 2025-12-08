import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import bgImg from "../../assets/images/bg.jpg";
import pic1 from "../../assets/images/pic1.jpg";
import pic2 from "../../assets/images/pic2.jpg";
import pic3 from "../../assets/images/pic3.jpg";
import { signupAPI } from "../../api/api"; // import signup API

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const email = e.target.email?.value?.trim();
    const pwd = e.target.password?.value;
    const cpwd = e.target.confirmPassword?.value;

    if (!email || !pwd || !cpwd) {
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

    setLoading(true);

    try {
      const data = await signupAPI(email, pwd, account);
      console.log("Signup response:", data);

      if (data.success) {
        alert("Sign Up successful!");
        // Optionally redirect to login page
        window.location = "/login";
      } else {
        alert(data.message || "Sign Up failed.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#edf3fb] flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-6xl min-h-[540px] rounded-[28px] border border-[#c2d6eb] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.18)] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        
        {/* LEFT SIDE */}
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
                Create your account to start your experience with Ezey
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full max-w-[420px] mx-auto space-y-4"
            >
              {/* Email */}
              <div>
                <label className="block text-[12px] font-semibold text-[#4c5a6b] mb-2">
                  Email Address / Institution Id
                </label>
                <div className="flex items-center gap-3 rounded-md border border-[#d7e3ee] bg-[#fbfdff] px-3 py-2">
                  <Mail className="w-4 h-4 text-[#9fb5c7]" />
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter Email Address or Institution Id"
                    className="flex-1 bg-transparent outline-none text-[13px] text-[#2c4a5e] placeholder:text-[#b5c4d1]"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-[12px] font-semibold text-[#4c5a6b] mb-2">
                  Create Password*
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
                    onClick={() => setShowPassword((s) => !s)}
                    className="text-[#9fb5c7] p-1"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-[12px] font-semibold text-[#4c5a6b] mb-2">
                  Re-Enter Password*
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
                    onClick={() => setConfirmVisible((s) => !s)}
                    className="text-[#9fb5c7] p-1"
                  >
                    {confirmVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Account Type */}
              <div>
                <label className="block text-[12px] font-semibold text-[#4c5a6b] mb-2">
                  Account Type
                </label>
                <select
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                  className="w-full rounded-md border border-[#d7e3ee] px-3 py-2 bg-white text-[13px] text-[#2c4a5e]"
                >
                  <option value="">Select Account Type</option>
                  <option value="student">Student</option>
                  <option value="coordinator">Co-ordinator</option>
                  <option value="faculty">Faculty</option>
                </select>
              </div>

              {/* Sign Up Button */}
              <div className="mt-4 flex flex-col items-center">
                <div className="mb-3 text-[11px] text-[#8599ab]">
                  Already a user?{" "}
                  <button
                    type="button"
                    onClick={() => (window.location = "/login")}
                    className="font-semibold text-[#3d8bb5] hover:text-[#2a6a8a]"
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

        {/* RIGHT IMAGE SIDE */}
        <div className="relative flex items-center justify-center px-6 md:px-10 py-8 md:py-10 bg-[#021726]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{
              backgroundImage: `url(${bgImg})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#032b3f]/40 via-transparent to-[#010810]/70" />

          <div className="relative w-full h-full max-w-md min-h-[420px] md:min-h-[460px] flex flex-col items-center justify-center">
            <div className="absolute top-[10%] left-[14%] w-40 h-40 rounded-[18px] border-[3px] border-[#c6d5e5] bg-[#0b2535] overflow-hidden shadow">
              <img src={pic1} alt="Planner" className="w-full h-full object-cover" />
            </div>

            <div className="absolute top-[28%] left-[46%] w-40 h-40 rounded-[18px] border-[3px] border-[#c6d5e5] bg-[#0b2535] overflow-hidden shadow">
              <img src={pic2} alt="Clock" className="w-full h-full object-cover" />
            </div>

            <div className="absolute top-[52%] left-[20%] w-40 h-40 rounded-[18px] border-[3px] border-[#c6d5e5] bg-[#0b2535] overflow-hidden shadow">
              <img src={pic3} alt="Timetable" className="w-full h-full object-cover" />
            </div>

            <p className="absolute bottom-7 left-1/2 -translate-x-1/2 w-[82%] text-center text-[11px] md:text-xs text-[#e5f3ff] italic leading-relaxed">
              "With Eazy, your tiring manual timetable arrangement
              <br className="hidden md:block" /> becomes fully automated."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}









// // src/pages/Signup.jsx
// import React, { useState } from "react";
// import { Mail, Lock, Eye, EyeOff } from "lucide-react";
// import bgImg from "../../assets/images/bg.jpg";
// import pic1 from "../../assets/images/pic1.jpg";
// import pic2 from "../../assets/images/pic2.jpg";
// import pic3 from "../../assets/images/pic3.jpg";

// export default function Signup() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [confirmVisible, setConfirmVisible] = useState(false);
//   const [account, setAccount] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (loading) return;

//     const email = e.target.email?.value?.trim();
//     const pwd = e.target.password?.value;
//     const cpwd = e.target.confirmPassword?.value;

//     if (!email || !pwd || !cpwd) {
//       alert("Please fill all required fields.");
//       return;
//     }
//     if (pwd !== cpwd) {
//       alert("Passwords do not match.");
//       return;
//     }
//     if (!account) {
//       alert("Please select account type.");
//       return;
//     }

//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       alert("Sign Up successful (demo).");
//     }, 1200);
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#edf3fb] flex items-center justify-center px-4 py-6">
//       <div className="w-full max-w-6xl min-h-[540px] rounded-[28px] border border-[#c2d6eb] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.18)] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        
//         {/* LEFT SIDE */}
//         <div className="bg-[#f8fbff] flex flex-col px-12 py-8">
//           <div className="relative flex-1">
//             <div className="text-sm font-semibold tracking-[0.2em] text-[#5d7a90] mb-8">
//               Ezey
//             </div>

//             <div className="mb-6 text-center">
//               <h1 className="text-[28px] font-semibold text-[#2c4a5e] leading-tight mb-2">
//                 Welcome to Ezey
//               </h1>
//               <p className="text-[13px] text-[#7a92a5] leading-relaxed">
//                 Create your account to start your experience with Ezey
//               </p>
//             </div>

//             <form
//               onSubmit={handleSubmit}
//               className="w-full max-w-[420px] mx-auto space-y-4"
//             >
//               {/* Email */}
//               <div>
//                 <label className="block text-[12px] font-semibold text-[#4c5a6b] mb-2">
//                   Email Address / Institution Id
//                 </label>
//                 <div className="flex items-center gap-3 rounded-md border border-[#d7e3ee] bg-[#fbfdff] px-3 py-2">
//                   <Mail className="w-4 h-4 text-[#9fb5c7]" />
//                   <input
//                     name="email"
//                     type="email"
//                     placeholder="Enter Email Address or Institution Id"
//                     className="flex-1 bg-transparent outline-none text-[13px] text-[#2c4a5e] placeholder:text-[#b5c4d1]"
//                   />
//                 </div>
//               </div>

//               {/* Password */}
//               <div>
//                 <label className="block text-[12px] font-semibold text-[#4c5a6b] mb-2">
//                   Create Password*
//                 </label>
//                 <div className="flex items-center gap-3 rounded-md border border-[#d7e3ee] bg-[#fbfdff] px-3 py-2">
//                   <Lock className="w-4 h-4 text-[#9fb5c7]" />
//                   <input
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     className="flex-1 bg-transparent outline-none text-[13px] text-[#2c4a5e]"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword((s) => !s)}
//                     className="text-[#9fb5c7] p-1"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="w-4 h-4" />
//                     ) : (
//                       <Eye className="w-4 h-4" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Confirm Password */}
//               <div>
//                 <label className="block text-[12px] font-semibold text-[#4c5a6b] mb-2">
//                   Re-Enter Password*
//                 </label>
//                 <div className="flex items-center gap-3 rounded-md border border-[#d7e3ee] bg-[#fbfdff] px-3 py-2">
//                   <Lock className="w-4 h-4 text-[#9fb5c7]" />
//                   <input
//                     name="confirmPassword"
//                     type={confirmVisible ? "text" : "password"}
//                     className="flex-1 bg-transparent outline-none text-[13px] text-[#2c4a5e]"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setConfirmVisible((s) => !s)}
//                     className="text-[#9fb5c7] p-1"
//                   >
//                     {confirmVisible ? (
//                       <EyeOff className="w-4 h-4" />
//                     ) : (
//                       <Eye className="w-4 h-4" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Account Type */}
//               <div>
//                 <label className="block text-[12px] font-semibold text-[#4c5a6b] mb-2">
//                   Account Type
//                 </label>
//                 <select
//                   value={account}
//                   onChange={(e) => setAccount(e.target.value)}
//                   className="w-full rounded-md border border-[#d7e3ee] px-3 py-2 bg-white text-[13px] text-[#2c4a5e]"
//                 >
//                   <option value="">Select Account Type</option>
//                   <option value="student">Student</option>
//                   <option value="coordinator">Co-ordinator</option>
//                   <option value="faculty">Faculty</option>
//                 </select>
//               </div>

//               {/* Sign Up Button */}
//               <div className="mt-4 flex flex-col items-center">
//                 <div className="mb-3 text-[11px] text-[#8599ab]">
//                   Already a user?{" "}
//                   <button
//                     type="button"
//                     onClick={() => (window.location = "/login")}
//                     className="font-semibold text-[#3d8bb5] hover:text-[#2a6a8a]"
//                   >
//                     Sign In
//                   </button>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-[240px] rounded-full bg-gradient-to-b from-[#3d98c4] to-[#1e6f99] py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(30,111,153,0.5)] hover:brightness-105 disabled:opacity-70 transition"
//                 >
//                   {loading ? "Processing..." : "Sign Up"}
//                 </button>
//               </div>

//               {/* Divider */}
//               <div className="mt-5 mb-4 flex items-center w-full">
//                 <span className="h-px flex-1 bg-[#d3dfea]" />
//                 <span className="px-4 text-[11px] text-[#a8b9c8]">Or</span>
//                 <span className="h-px flex-1 bg-[#d3dfea]" />
//               </div>

//               {/* Social Icons */}
//               <div className="flex items-center justify-center gap-5 mb-6">
//                 {/* Google */}
//                 <button className="w-12 h-12 rounded-full bg-white border border-[#d5e1ed] flex items-center justify-center shadow hover:shadow-md transition">
//                   G
//                 </button>

//                 {/* Facebook */}
//                 <button className="w-12 h-12 rounded-full bg-white border border-[#d5e1ed] flex items-center justify-center shadow hover:shadow-md transition">
//                   f
//                 </button>

//                 {/* Apple */}
//                 <button className="w-12 h-12 rounded-full bg-white border border-[#d5e1ed] flex items-center justify-center shadow hover:shadow-md transition">
//                   
//                 </button>
//               </div>

//               {/* Footer */}
//               <div className="w-full max-w-[420px] mx-auto mt-auto pt-4 border-t border-[#dde6f0] flex items-center justify-between text-[11px] text-[#a8b9c8]">
//                 <span>Copyright : Ezey, All Right Reserved.</span>
//                 <div className="flex items-center gap-2.5">
//                   <button className="hover:text-[#3d8bb5]">
//                     Terms &amp; Conditions
//                   </button>
//                   <span className="text-[#d3dfea]">|</span>
//                   <button className="hover:text-[#3d8bb5]">Privacy Policy</button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* RIGHT IMAGE SIDE */}
//         <div className="relative flex items-center justify-center px-6 md:px-10 py-8 md:py-10 bg-[#021726]">
//           <div
//             className="absolute inset-0 bg-cover bg-center opacity-90"
//             style={{
//               backgroundImage: `url(${bgImg})`,
//             }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-br from-[#032b3f]/40 via-transparent to-[#010810]/70" />

//           <div className="relative w-full h-full max-w-md min-h-[420px] md:min-h-[460px] flex flex-col items-center justify-center">
//             <div className="absolute top-[10%] left-[14%] w-40 h-40 rounded-[18px] border-[3px] border-[#c6d5e5] bg-[#0b2535] overflow-hidden shadow">
//               <img src={pic1} alt="Planner" className="w-full h-full object-cover" />
//             </div>

//             <div className="absolute top-[28%] left-[46%] w-40 h-40 rounded-[18px] border-[3px] border-[#c6d5e5] bg-[#0b2535] overflow-hidden shadow">
//               <img src={pic2} alt="Clock" className="w-full h-full object-cover" />
//             </div>

//             <div className="absolute top-[52%] left-[20%] w-40 h-40 rounded-[18px] border-[3px] border-[#c6d5e5] bg-[#0b2535] overflow-hidden shadow">
//               <img src={pic3} alt="Timetable" className="w-full h-full object-cover" />
//             </div>

//             <p className="absolute bottom-7 left-1/2 -translate-x-1/2 w-[82%] text-center text-[11px] md:text-xs text-[#e5f3ff] italic leading-relaxed">
//               "With Eazy, your tiring manual timetable arrangement
//               <br className="hidden md:block" /> becomes fully automated."
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
