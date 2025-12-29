import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { signupAPI } from "../../api/api";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState(""); // ✅ NEW
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email || !password || !confirmPassword || !accountType) {
      alert("Please fill all required fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await signupAPI({
        name,          // ✅ added
        email,
        password,
        accountType,
      });

      if (res.success) {
        alert("Signup successful");
      } else {
        alert(res.message || "Signup failed");
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
      {/* ===== HEADER ===== */}
      <div className="mb-4 text-center">
        <p className="text-md text-[#4A9FB5] text-left mb-4">Ezey</p>

        <h1
          className="mb-2"
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

        <p className="text-[14px] text-[#7A8C94]">
          Start your experience with Ezey by signing in
        </p>
        <p className="text-[14px] text-[#7A8C94]">
          or signing up
        </p>
      </div>

      {/* ===== NAME ===== */}
      <div className="mb-2">
        <label className="block mb-2 text-[13px] font-semibold text-[#265768]">
          Full Name*
        </label>

        <div className="relative">
          <User
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0AEC0]"
          />
          <input
            className="w-full h-11 pl-10 pr-4 rounded-md border border-[#E0E0E0] text-[13px]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
          />
        </div>
      </div>

      {/* ===== EMAIL ===== */}
      <div className="mb-2">
        <label className="block mb-2 text-[13px] font-semibold text-[#265768]">
          Email Address / Institution Id
        </label>

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0AEC0]"
          />
          <input
            className="w-full h-11 pl-10 pr-4 rounded-md border border-[#E0E0E0] text-[13px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address or Institution Id"
          />
        </div>

        
      </div>

      {/* ===== CREATE PASSWORD ===== */}
      <div className="mb-2">
        <label className="block mb-2 text-[13px] font-semibold text-[#265768]">
          Create Password*
        </label>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0AEC0]"
          />
          <input
            type={showPassword ? "text" : "password"}
            className="w-full h-11 pl-10 pr-10 rounded-md border border-[#E0E0E0] text-[13px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0AEC0]"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* ===== RE-ENTER PASSWORD ===== */}
      <div className="mb-4">
        <label className="block mb-2 text-[13px] font-semibold text-[#265768]">
          Re-Enter Password*
        </label>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0AEC0]"
          />
          <input
            type={showConfirmPassword ? "text" : "password"}
            className="w-full h-11 pl-10 pr-10 rounded-md border border-[#E0E0E0] text-[13px]"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••••"
          />
          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0AEC0]"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* ===== ACCOUNT TYPE ===== */}
      <div className="mb-6 ml-33">
        <div className="relative">
          <User
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0AEC0]"
          />
          <select
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            className="w-[160px] h-11 pl-10 pr-5 rounded-md border border-[#E0E0E0] text-[13px] text-[#7A8C94]"
          >
            <option value="">Account Type</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>

      {/* ===== SIGN UP BUTTON ===== */}
      <div className="flex justify-center mb-4">
        <button
          onClick={handleSubmit}
          disabled={loading}
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
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </div>

      {/* ===== SIGN IN LINK ===== */}
      <p className="text-center text-[12px] text-[#7A8C94] mb-4">
        Already a user ?{" "}
        <span className="text-[#4BACCE] cursor-pointer">
          Sign In
        </span>
      </p>
    </>
  );
};

export default SignupForm;












// import React, { useState } from "react";
// import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
// import { signupAPI } from "../../api/api";

// const SignupForm = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [accountType, setAccountType] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//   if (!email || !password || !confirmPassword || !accountType) {
//     alert("Please fill all required fields");
//     return;
//   }

//   if (password !== confirmPassword) {
//     alert("Passwords do not match");
//     return;
//   }

//   setLoading(true);
//   try {
//     const res = await signupAPI({
//       email,
//       password,
//       accountType,
//     });

//     if (res.success) {
//       console.log("Signup success:", res);
//       alert("Signup successful");
//       // TODO: redirect to login / verify email
//     } else {
//       alert(res.message || "Signup failed");
//     }
//   } catch (error) {
//     console.error(error);
//     alert("Something went wrong");
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <>
//       {/* ===== HEADER ===== */}
//       <div className="mb-4 text-center">
//         <p className="text-md text-[#4A9FB5] text-left mb-4">Ezey</p>

//         <h1
//           className="mb-2"
//           style={{
//             fontFamily: "Georgia, serif",
//             fontWeight: 700,
//             fontSize: "28px",
//             lineHeight: "120%",
//             color: "#265768",
//           }}
//         >
//           Welcome to Ezey
//         </h1>

//         <p className="text-[14px] text-[#7A8C94]">
//           Start your experience with Ezey by signing in
//         </p>
//         <p className="text-[14px] text-[#7A8C94]">
//           or signing up
//         </p>
//       </div>

//       {/* ===== EMAIL ===== */}
//       <div className="mb-2">
//         <label className="block mb-2 text-[13px] font-semibold text-[#265768]">
//           Email Address / Institution Id
//         </label>

//         <div className="relative">
//           <Mail
//             size={18}
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0AEC0]"
//           />
//           <input
//             className="w-full h-11 pl-10 pr-4 rounded-md border border-[#E0E0E0] text-[13px]"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter Email Address or Institution Id"
//           />
//         </div>

//         <p className="text-right text-[12px] text-[#4BACCE] mt-1 cursor-pointer">
//           Get verified !
//         </p>
//       </div>

//       {/* ===== CREATE PASSWORD ===== */}
//       <div className="mb-2">
//         <label className="block mb-2 text-[13px] font-semibold text-[#265768]">
//           Create Password*
//         </label>

//         <div className="relative">
//           <Lock
//             size={18}
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0AEC0]"
//           />
//           <input
//             type={showPassword ? "text" : "password"}
//             className="w-full h-11 pl-10 pr-10 rounded-md border border-[#E0E0E0] text-[13px]"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="••••••••••"
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0AEC0]"
//           >
//             {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//           </button>
//         </div>
//       </div>

//       {/* ===== RE-ENTER PASSWORD ===== */}
//       <div className="mb-4">
//         <label className="block mb-2 text-[13px] font-semibold text-[#265768]">
//           Re-Enter Password*
//         </label>

//         <div className="relative">
//           <Lock
//             size={18}
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0AEC0]"
//           />
//           <input
//             type={showConfirmPassword ? "text" : "password"}
//             className="w-full h-11 pl-10 pr-10 rounded-md border border-[#E0E0E0] text-[13px]"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             placeholder="••••••••••"
//           />
//           <button
//             type="button"
//             onClick={() =>
//               setShowConfirmPassword(!showConfirmPassword)
//             }
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0AEC0]"
//           >
//             {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//           </button>
//         </div>
//       </div>

//       {/* ===== ACCOUNT TYPE ===== */}
//       <div className="mb-6 ml-33">
//         <div className="relative">
//           <User
//             size={18}
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0AEC0]"
//           />
//           <select
//             value={accountType}
//             onChange={(e) => setAccountType(e.target.value)}
//             className="w-[160px] h-11 pl-10 pr-5 rounded-md border border-[#E0E0E0] text-[13px] text-[#7A8C94]"
//           >
//             <option value="">Account Type</option>
//             <option value="student">Student</option>
//             <option value="teacher">Teacher</option>
//             <option value="admin">Admin</option>
//           </select>
//         </div>
//       </div>

//       {/* ===== SIGN UP BUTTON ===== */}
//       <div className="flex justify-center mb-4">
//         <button
//           onClick={handleSubmit}
//           className="flex items-center justify-center w-[251px]"
//           style={{
//             height: "44px",
//             borderRadius: "6px",
//             background: "linear-gradient(135deg, #4BACCE 0%, #265768 100%)",
//             fontFamily: "Georgia, serif",
//             fontWeight: 700,
//             fontSize: "18px",
//             lineHeight: "120%",
//             color: "#FFFFFF",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           Sign Up
//         </button>
//       </div>

//       {/* ===== SIGN IN LINK ===== */}
//       <p className="text-center text-[12px] text-[#7A8C94] mb-4">
//         Already a user ?{" "}
//         <span className="text-[#4BACCE] cursor-pointer">
//           Sign In
//         </span>
//       </p>
//     </>
//   );
// };

// export default SignupForm;



