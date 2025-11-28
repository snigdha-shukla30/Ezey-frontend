import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import bgImg from '../assets/images/bg.jpg';
import pic1 from '../assets/images/pic1.jpg';
import pic2 from '../assets/images/pic2.jpg';
import pic3 from '../assets/images/pic3.jpg';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-[#edf3fb] flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-6xl min-h-[540px] rounded-[28px] border border-[#c2d6eb] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.18)] overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* ---------------- LEFT CARD ---------------- */}
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
                  Welcom to Ezey
                </h1>
                <p className="text-[13px] text-[#7a92a5] leading-relaxed">
                  Start your experience with Ezey by signing in<br />or signing up
                </p>
              </div>

              {/* Form */}
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
                        placeholder=""
                        className="flex-1 bg-transparent outline-none text-[13px] text-[#2c4a5e] placeholder:text-[#b5c4d1]"
                      />
                      <button
                        onClick={() => setPasswordVisible((p) => !p)}
                        className="p-0.5 text-[#9fb5c7] hover:text-[#6b8599] transition"
                      >
                        {passwordVisible ? (
                          <EyeOff className="w-[18px] h-[18px]" />
                        ) : (
                          <Eye className="w-[18px] h-[18px]" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Forgot password */}
                  {!isSignUp && (
                    <div className="flex justify-end mb-6">
                      <button
                        onClick={(e) => e.preventDefault()}
                        className="text-[12px] font-medium text-[#3d8bb5] hover:text-[#2a6a8a]"
                      >
                        Forgot Password?
                      </button>
                    </div>
                  )}

                  {/* Confirm password – Sign Up */}
                  {isSignUp && (
                    <div className="mb-4">
                      <label className="block text-[13px] font-medium text-[#3d5a6f] mb-2">
                        Re-Enter Password*
                      </label>
                      <div className="flex items-center gap-3 rounded-xl border border-[#cfdde9] bg-white px-4 py-3">
                        <Lock className="w-[18px] h-[18px] text-[#9fb5c7]" />
                        <input
                          type={confirmPasswordVisible ? 'text' : 'password'}
                          placeholder=""
                          className="flex-1 bg-transparent outline-none text-[13px] text-[#2c4a5e] placeholder:text-[#b5c4d1]"
                        />
                        <button
                          onClick={() => setConfirmPasswordVisible((p) => !p)}
                          className="p-0.5 text-[#9fb5c7] hover:text-[#6b8599] transition"
                        >
                          {confirmPasswordVisible ? (
                            <EyeOff className="w-[18px] h-[18px]" />
                          ) : (
                            <Eye className="w-[18px] h-[18px]" />
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Account type – Sign Up */}
                  {isSignUp && (
                    <div className="mb-6">
                      <label className="block text-[13px] font-medium text-[#3d5a6f] mb-2">
                        Account Type
                      </label>
                      <button
                        onClick={(e) => e.preventDefault()}
                        className="w-full flex items-center justify-between rounded-xl border border-[#cfdde9] bg-white px-4 py-3 text-[13px] text-[#6b8599] hover:border-[#3d8bb5] transition"
                      >
                        <span className="flex items-center gap-3">
                          <User className="w-[18px] h-[18px] text-[#9fb5c7]" />
                          <span>Select Account Type</span>
                        </span>
                        <span className="text-[11px] text-[#b5c4d1]">
                          (e.g., Admin, Faculty)
                        </span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Primary button + toggle text */}
                <div className="w-full max-w-[420px] mx-auto mt-2 flex flex-col items-center">
                  <div className="mb-3 text-[11px] text-[#8599ab]">
                    {isSignUp ? (
                      <>
                        Already a user?{' '}
                        <button
                          onClick={() => setIsSignUp(false)}
                          className="font-semibold text-[#3d8bb5] hover:text-[#2a6a8a]"
                        >
                          Sign In
                        </button>
                      </>
                    ) : (
                      <>
                        New user ?{' '}
                        <button
                          onClick={() => setIsSignUp(true)}
                          className="font-semibold text-[#3d8bb5] hover:text-[#2a6a8a]"
                        >
                          Sign In
                        </button>
                      </>
                    )}
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-[240px] rounded-full bg-gradient-to-b from-[#3d98c4] to-[#1e6f99] py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(30,111,153,0.5)] hover:brightness-105 disabled:opacity-70 disabled:cursor-not-allowed transition"
                  >
                    {loading
                      ? isSignUp
                        ? 'Processing...'
                        : 'Signing in...'
                      : isSignUp
                      ? 'Sign Up'
                      : 'Sign In'}
                  </button>

                  {/* Divider */}
                  <div className="mt-5 mb-4 flex items-center w-full">
                    <span className="h-px flex-1 bg-[#d3dfea]" />
                    <span className="px-4 text-[11px] text-[#a8b9c8]">
                      Or
                    </span>
                    <span className="h-px flex-1 bg-[#d3dfea]" />
                  </div>

                  {/* 🌈 Colorful Social row – Figma style */}
                  <div className="flex items-center justify-center gap-5 mb-6">
                    {/* Google */}
                    <button className="w-12 h-12 rounded-full bg-white border border-[#d5e1ed] flex items-center justify-center shadow-[0_3px_8px_rgba(15,23,42,0.08)] hover:shadow-md transition">
                      <svg viewBox="0 0 24 24" className="w-5 h-5">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                    </button>

                    {/* Facebook */}
                    <button className="w-12 h-12 rounded-full bg-white border border-[#d5e1ed] flex items-center justify-center shadow-[0_3px_8px_rgba(15,23,42,0.08)] hover:shadow-md transition">
                      <svg viewBox="0 0 24 24" className="w-6 h-6">
                        <path
                          fill="#1877F2"
                          d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.093 10.125 24v-8.437H7.078v-3.49h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.093 24 18.1 24 12.073z"
                        />
                      </svg>
                    </button>

                    {/* Apple */}
                    <button className="w-12 h-12 rounded-full bg-white border border-[#d5e1ed] flex items-center justify-center shadow-[0_3px_8px_rgba(15,23,42,0.08)] hover:shadow-md transition">
                      <svg viewBox="0 0 24 24" className="w-6 h-6">
                        <path
                          fill="#000000"
                          d="M16.365 1.43c0 1.14-.418 2.095-1.077 2.84-.653.739-1.717 1.3-2.767 1.225-.13-1.106.427-2.14 1.07-2.82.653-.685 1.79-1.2 2.774-1.245zM20.28 17.297c-.5 1.155-.742 1.67-1.386 2.694-.9 1.44-2.172 3.235-3.75 3.247-1.4.012-1.767-.95-3.684-.94-1.918.01-2.32.956-3.72.944-1.578-.012-2.785-1.635-3.685-3.074-2.52-4.043-2.786-8.787-1.23-11.3.944-1.544 2.437-2.45 3.845-2.45 1.43 0 2.33.98 3.71.98 1.366 0 2.15-.98 3.72-.98 1.337 0 2.75.73 3.69 1.988-3.24 1.78-2.72 6.43.49 7.89z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                
                <div className="mb-6" />

                {/* Footer */}
                <div className="w-full max-w-[420px] mx-auto mt-auto pt-4 border-t border-[#dde6f0] flex items-center justify-between text-[11px] text-[#a8b9c8]">
                  <span>Copyright : Ezey, All Right Reserved.</span>
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="hover:text-[#3d8bb5]"
                    >
                      Terms & Conditions
                    </button>
                    <span className="text-[#d3dfea]">|</span>
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="hover:text-[#3d8bb5]"
                    >
                      Privacy Policy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="relative flex items-center justify-center px-6 md:px-10 py-8 md:py-10 bg-[#021726]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{
              backgroundImage: `url(${bgImg})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#032b3f]/40 via-transparent to-[#010810]/70" />
          

          <div className="relative w-full h-full max-w-md min-h-[420px] md:min-h-[460px] flex flex-col items-center justify-center">
            <div className="absolute top-[10%] left-[14%] w-40 h-40 rounded-[18px] border-[3px] border-[#c6d5e5] bg-[#0b2535] overflow-hidden shadow-[0_18px_32px_rgba(0,0,0,0.55)]">
              <img
                src={pic1}
                alt="Planner"
                className="w-full h-full object-cover"
              />

            </div>

            <div className="absolute top-[28%] left-[46%] w-40 h-40 rounded-[18px] border-[3px] border-[#c6d5e5] bg-[#0b2535] overflow-hidden shadow-[0_18px_32px_rgba(0,0,0,0.55)]">
              <img
                src={pic2}
                alt="Clock"
                className="w-full h-full object-cover"
              />

            </div>

            <div className="absolute top-[52%] left-[20%] w-40 h-40 rounded-[18px] border-[3px] border-[#c6d5e5] bg-[#0b2535] overflow-hidden shadow-[0_18px_32px_rgba(0,0,0,0.55)]">
              <img
                src={pic3}
                alt="Timetable"
                className="w-full h-full object-cover"
              />

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
};

export default AuthPage;