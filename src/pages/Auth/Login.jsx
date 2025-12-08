import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import bgImg from '../../assets/images/bg.jpg';
import pic1 from '../../assets/images/pic1.jpg';
import pic2 from '../../assets/images/pic2.jpg';
import pic3 from '../../assets/images/pic3.jpg';
import { loginAPI } from '../../api/api'; // import your API function

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // New states for input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    setLoading(true);
    try {
      const data = await loginAPI(email, password);
      console.log('Login response:', data);

      if (data.success) {
        alert('Login successful!');
        // You can redirect or save token in localStorage/sessionStorage here
        // e.g., localStorage.setItem('token', data.token);
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Something went wrong, please try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#edf3fb] flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-6xl min-h-[540px] rounded-[28px] border border-[#c2d6eb] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.18)] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        
        {/* LEFT CARD */}
        <div className="bg-[#f8fbff] flex flex-col px-12 py-8">
          <div className="relative flex-1">
            <div className="relative h-full flex flex-col">

              {/* Brand */}
              <div className="text-sm font-semibold tracking-[0.2em] text-[#5d7a90] mb-8">
                Ezey
              </div>

              {/* Heading */}
              <div className="mb-6 text-center">
                <h1 className="text-[28px] font-semibold text-[#2c4a5e] leading-tight mb-2">
                  Welcome to Ezey
                </h1>
                <p className="text-[13px] text-[#7a92a5] leading-relaxed">
                  Start your experience with Ezey by signing in <br /> or signing up
                </p>
              </div>

              {/* FORM */}
              <div className="flex-1 flex flex-col">
                <div className="w-full max-w-[420px] mx-auto">

                  {/* Email */}
                  <div className="mb-4">
                    <label className="block text-[13px] font-medium text-[#3d5a6f] mb-2">
                      Email Address / Institution Id
                    </label>
                    <div className="flex items-center gap-3 rounded-xl border border-[#cfdde9] bg-white px-4 py-3">
                      <Mail className="w-[18px] h-[18px] text-[#9fb5c7]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email Address or Institution Id"
                        className="flex-1 bg-transparent outline-none text-[13px] text-[#2c4a5e] placeholder:text-[#b5c4d1]"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="mb-1">
                    <label className="block text-[13px] font-medium text-[#3d5a6f] mb-2">
                      {isSignUp ? 'Create Password*' : 'Password*'}
                    </label>
                    <div className="flex items-center gap-3 rounded-xl border border-[#cfdde9] bg-white px-4 py-3">
                      <Lock className="w-[18px] h-[18px] text-[#9fb5c7]" />
                      <input
                        type={passwordVisible ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        className="flex-1 bg-transparent outline-none text-[13px] text-[#2c4a5e]"
                      />
                      <button
                        type="button"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                        className="p-0.5 text-[#9fb5c7] hover:text-[#6b8599]"
                      >
                        {passwordVisible ? <EyeOff /> : <Eye />}
                      </button>
                    </div>
                  </div>

                  {/* Forgot password */}
                  {!isSignUp && (
                    <div className="flex justify-end mb-6">
                      <button className="text-[12px] text-[#3d8bb5] hover:text-[#2a6a8a]">
                        Forgot Password?
                      </button>
                    </div>
                  )}

                  {/* Button + toggle */}
                  <div className="w-full max-w-[420px] mx-auto mt-2 flex flex-col items-center">
                    <div className="mb-3 text-[11px] text-[#8599ab]">
                      {isSignUp ? (
                        <>
                          Already a user?{' '}
                          <button
                            onClick={() => setIsSignUp(false)}
                            className="font-semibold text-[#3d8bb5]"
                          >
                            Sign In
                          </button>
                        </>
                      ) : (
                        <>
                          New user ?{' '}
                          <button
                            onClick={() => setIsSignUp(true)}
                            className="font-semibold text-[#3d8bb5]"
                          >
                            Sign Up
                          </button>
                        </>
                      )}
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="w-[240px] rounded-full bg-gradient-to-b from-[#3d98c4] to-[#1e6f99] py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(30,111,153,0.5)] disabled:opacity-70"
                    >
                      {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Sign In'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center px-6 md:px-10 py-8 md:py-10 bg-[#021726]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{
              backgroundImage: `url(${bgImg})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#032b3f]/40 via-transparent to-[#010810]/70" />
          <div className="relative w-full h-full max-w-md min-height-[420px] flex flex-col items-center justify-center">
            <div className="absolute top-[10%] left-[14%] w-40 h-40 rounded-[18px] overflow-hidden shadow">
              <img src={pic1} className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-[28%] left-[46%] w-40 h-40 rounded-[18px] overflow-hidden shadow">
              <img src={pic2} className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-[52%] left-[20%] w-40 h-40 rounded-[18px] overflow-hidden shadow">
              <img src={pic3} className="w-full h-full object-cover" />
            </div>
            <p className="absolute bottom-7 left-1/2 -translate-x-1/2 w-[82%] text-center text-[13px] text-white/70">
              Manage classrooms, subjects, faculty, constraints & generate
              timetables effortlessly with Ezey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


// import { useState } from 'react';
// import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
// import bgImg from '../../assets/images/bg.jpg';
// import pic1 from '../../assets/images/pic1.jpg';
// import pic2 from '../../assets/images/pic2.jpg';
// import pic3 from '../../assets/images/pic3.jpg';

// const Login = () => {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (loading) return;

//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#edf3fb] flex items-center justify-center px-4 py-6">
//       <div className="w-full max-w-6xl min-h-[540px] rounded-[28px] border border-[#c2d6eb] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.18)] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        
//         {/* LEFT CARD */}
//         <div className="bg-[#f8fbff] flex flex-col px-12 py-8">
//           <div className="relative flex-1">
//             <div className="relative h-full flex flex-col">

//               {/* Brand */}
//               <div className="text-sm font-semibold tracking-[0.2em] text-[#5d7a90] mb-8">
//                 Ezey
//               </div>

//               {/* Heading */}
//               <div className="mb-6 text-center">
//                 <h1 className="text-[28px] font-semibold text-[#2c4a5e] leading-tight mb-2">
//                   Welcome to Ezey
//                 </h1>
//                 <p className="text-[13px] text-[#7a92a5] leading-relaxed">
//                   Start your experience with Ezey by signing in <br /> or signing up
//                 </p>
//               </div>

//               {/* FORM */}
//               <div className="flex-1 flex flex-col">
//                 <div className="w-full max-w-[420px] mx-auto">

//                   {/* Email */}
//                   <div className="mb-4">
//                     <label className="block text-[13px] font-medium text-[#3d5a6f] mb-2">
//                       Email Address / Institution Id
//                     </label>
//                     <div className="flex items-center gap-3 rounded-xl border border-[#cfdde9] bg-white px-4 py-3">
//                       <Mail className="w-[18px] h-[18px] text-[#9fb5c7]" />
//                       <input
//                         type="email"
//                         placeholder="Enter Email Address or Institution Id"
//                         className="flex-1 bg-transparent outline-none text-[13px] text-[#2c4a5e] placeholder:text-[#b5c4d1]"
//                       />
//                     </div>
//                   </div>

//                   {/* Password */}
//                   <div className="mb-1">
//                     <label className="block text-[13px] font-medium text-[#3d5a6f] mb-2">
//                       {isSignUp ? 'Create Password*' : 'Password*'}
//                     </label>
//                     <div className="flex items-center gap-3 rounded-xl border border-[#cfdde9] bg-white px-4 py-3">
//                       <Lock className="w-[18px] h-[18px] text-[#9fb5c7]" />
//                       <input
//                         type={passwordVisible ? 'text' : 'password'}
//                         placeholder="Enter Password"
//                         className="flex-1 bg-transparent outline-none text-[13px] text-[#2c4a5e]"
//                       />
//                       <button
//                         type="button"
//                         onClick={() => setPasswordVisible(!passwordVisible)}
//                         className="p-0.5 text-[#9fb5c7] hover:text-[#6b8599]"
//                       >
//                         {passwordVisible ? <EyeOff /> : <Eye />}
//                       </button>
//                     </div>
//                   </div>

//                   {/* Forgot password */}
//                   {!isSignUp && (
//                     <div className="flex justify-end mb-6">
//                       <button className="text-[12px] text-[#3d8bb5] hover:text-[#2a6a8a]">
//                         Forgot Password?
//                       </button>
//                     </div>
//                   )}

//                   {/* Confirm Password - Sign Up */}
//                   {isSignUp && (
//                     <div className="mb-4">
//                       <label className="block text-[13px] font-medium text-[#3d5a6f] mb-2">
//                         Re-Enter Password*
//                       </label>
//                       <div className="flex items-center gap-3 rounded-xl border border-[#cfdde9] bg-white px-4 py-3">
//                         <Lock className="w-[18px] h-[18px] text-[#9fb5c7]" />
//                         <input
//                           type={confirmPasswordVisible ? 'text' : 'password'}
//                           placeholder="Confirm Password"
//                           className="flex-1 bg-transparent outline-none text-[13px] text-[#2c4a5e]"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
//                           className="p-0.5 text-[#9fb5c7] hover:text-[#6b8599]"
//                         >
//                           {confirmPasswordVisible ? <EyeOff /> : <Eye />}
//                         </button>
//                       </div>
//                     </div>
//                   )}

//                   {/* Account Type */}
//                   {isSignUp && (
//                     <div className="mb-6">
//                       <label className="block text-[13px] font-medium text-[#3d5a6f] mb-2">
//                         Account Type
//                       </label>
//                       <button className="w-full flex items-center justify-between rounded-xl border border-[#cfdde9] bg-white px-4 py-3 text-[13px] text-[#6b8599]">
//                         <span className="flex items-center gap-3">
//                           <User className="w-[18px] h-[18px] text-[#9fb5c7]" />
//                           <span>Select Account Type</span>
//                         </span>
//                         <span className="text-[11px] text-[#b5c4d1]">(e.g., Admin, Faculty)</span>
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 {/* Button + toggle */}
//                 <div className="w-full max-w-[420px] mx-auto mt-2 flex flex-col items-center">
                  
//                   <div className="mb-3 text-[11px] text-[#8599ab]">
//                     {isSignUp ? (
//                       <>
//                         Already a user?{' '}
//                         <button
//                           onClick={() => setIsSignUp(false)}
//                           className="font-semibold text-[#3d8bb5]"
//                         >
//                           Sign In
//                         </button>
//                       </>
//                     ) : (
//                       <>
//                         New user ?{' '}
//                         <button
//                           onClick={() => setIsSignUp(true)}
//                           className="font-semibold text-[#3d8bb5]"
//                         >
//                           Sign Up
//                         </button>
//                       </>
//                     )}
//                   </div>

//                   <button
//                     onClick={handleSubmit}
//                     disabled={loading}
//                     className="w-[240px] rounded-full bg-gradient-to-b from-[#3d98c4] to-[#1e6f99] py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(30,111,153,0.5)] disabled:opacity-70"
//                   >
//                     {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Sign In'}
//                   </button>

//                   {/* Divider */}
//                   <div className="mt-5 mb-4 flex items-center w-full">
//                     <span className="h-px flex-1 bg-[#d3dfea]" />
//                     <span className="px-4 text-[11px] text-[#a8b9c8]">Or</span>
//                     <span className="h-px flex-1 bg-[#d3dfea]" />
//                   </div>

//                   {/* SOCIAL BUTTONS */}
//                   <div className="flex items-center justify-center gap-5 mb-6">
//                     {/* Google */}
//                     <button className="w-12 h-12 rounded-full bg-white border flex items-center justify-center shadow">
//                       G
//                     </button>
//                     {/* Facebook */}
//                     <button className="w-12 h-12 rounded-full bg-white border flex items-center justify-center shadow">
//                       f
//                     </button>
//                     {/* Apple */}
//                     <button className="w-12 h-12 rounded-full bg-white border flex items-center justify-center shadow">
//                       
//                     </button>
//                   </div>
//                 </div>

//                 {/* Footer */}
//                 <div className="w-full max-w-[420px] mx-auto mt-auto pt-4 border-t border-[#dde6f0] flex items-center justify-between text-[11px] text-[#a8b9c8]">
//                   <span>Copyright : Ezey, All Right Reserved.</span>
//                   <div className="flex items-center gap-2.5">
//                     <button className="hover:text-[#3d8bb5]">Terms</button>
//                     <span className="text-[#d3dfea]">|</span>
//                     <button className="hover:text-[#3d8bb5]">Privacy</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="relative flex items-center justify-center px-6 md:px-10 py-8 md:py-10 bg-[#021726]">
          
//           <div
//             className="absolute inset-0 bg-cover bg-center opacity-90"
//             style={{
//               backgroundImage: `url(${bgImg})`,
//             }}
//           />

//           <div className="absolute inset-0 bg-gradient-to-br from-[#032b3f]/40 via-transparent to-[#010810]/70" />

//           <div className="relative w-full h-full max-w-md min-height-[420px] flex flex-col items-center justify-center">

//             {/* Pics */}
//             <div className="absolute top-[10%] left-[14%] w-40 h-40 rounded-[18px] overflow-hidden shadow">
//               <img src={pic1} className="w-full h-full object-cover" />
//             </div>

//             <div className="absolute top-[28%] left-[46%] w-40 h-40 rounded-[18px] overflow-hidden shadow">
//               <img src={pic2} className="w-full h-full object-cover" />
//             </div>

//             <div className="absolute top-[52%] left-[20%] w-40 h-40 rounded-[18px] overflow-hidden shadow">
//               <img src={pic3} className="w-full h-full object-cover" />
//             </div>

//             {/* Bottom text */}
//             <p className="absolute bottom-7 left-1/2 -translate-x-1/2 w-[82%] text-center text-[13px] text-white/70">
//               Manage classrooms, subjects, faculty, constraints & generate
//               timetables effortlessly with Ezey.
//             </p>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
