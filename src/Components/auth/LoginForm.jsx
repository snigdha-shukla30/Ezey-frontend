import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../api/api";
import { Button } from "../../Components/ui/Button";
import { InputField } from "../../Components/ui/InputField";

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
      const res = await loginAPI({ email, password });

      if (res.success) {
        
        localStorage.setItem("user", JSON.stringify(res.user)); 
        alert("Login successful");
        
        navigate("/dashboard");
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

        <p className="text-sm text-[#7A8C94]">
          Start your experience with Ezey by signing in
        </p>
        <p className="text-sm text-[#7A8C94]">or signing up</p>
      </div>

      <div className="mb-4">
        <InputField
          width="450px"
          height="42px"
          label="Email Address / Institution Id"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email Address or Institution Id"
          icon={Mail}
        />
      </div>

      <div className="mb-2 mt-10">
        <InputField
          width="450px"
          height="42px"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••••"
          icon={Lock}
          showPasswordToggle
          showPassword={showPassword}
          onTogglePassword={() => setShowPassword(!showPassword)}
        />
      </div>

      <div className="flex justify-center mb-6">
        <Button
          variant="primary"
          onClick={handleSubmit}
          className={loading ? "opacity-70 pointer-events-none" : ""}
        >
          {loading ? "Signing In..." : "Sign In"}
        </Button>
      </div>
    </>
  );
};

export default LoginForm;






// import React, { useState } from "react";
// import { Eye, EyeOff, Mail, Lock } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// import { loginAPI } from "../../api/api";

// import { Button } from "../../Components/ui/Button";
// import { InputField } from "../../Components/ui/InputField";

// const LoginForm = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     if (!email || !password) {
//       alert("Please enter email and password");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await loginAPI({ email, password });

//       if (res.success) {
//         localStorage.setItem("token", res.token);
//         localStorage.setItem("user", JSON.stringify(res.user));
//         alert("Login successful");
       

//         navigate("/dashboard");
//       } else {
//         alert(res.message || "Login failed");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="mb-8 text-center ">
//         <p className="text-md text-[#4A9FB5] text-left mb-8">Ezey</p>

//         <h1
//           className="mb-3 "
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

//         <p className="text-sm text-[#7A8C94]">
//           Start your experience with Ezey by signing in
//         </p>
//         <p className="text-sm text-[#7A8C94]">or signing up</p>
//       </div>

      
//       <div className="mb-4">
//         <InputField
//           width="450px"
//           height="42px"
//           label="Email Address / Institution Id"
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter Email Address or Institution Id"
//           icon={Mail}
//         />
//       </div>

      
//       <div className="mb-2 mt-10">
//         <InputField
//           width="450px"
//           height="42px"
//           label="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="••••••••••"
//           icon={Lock}
//           showPasswordToggle
//           showPassword={showPassword}
//           onTogglePassword={() => setShowPassword(!showPassword)}
//         />
//       </div>

//       <div className="text-right mb-6 w-[450px]">
//         <a
//           href="#"
//           className="text-[12px] text-[#4BACCE] no-underline"
//         >
//           Forgot Password?
//         </a>
//       </div>

      
//       <div className="flex justify-center mb-6 ">
//         <Button
//           variant="primary"
//           onClick={handleSubmit}
//           className={loading ? "opacity-70  pointer-events-none" : ""}
//         >
//           {loading ? "Signing In..." : "Sign In"}
//         </Button>
//       </div>
//     </>
//   );
// };

// export default LoginForm;















