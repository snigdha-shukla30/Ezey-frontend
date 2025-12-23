const BASE_URL = "https://ezzey-backend.onrender.com"; 
// ↑ yaha apna backend URL dalna

export const loginAPI = async (payload) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return res.json();
};

export const signupAPI = async (payload) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return res.json();
};

// export const forgotPasswordAPI = async (payload) => {
//   const res = await fetch(`${BASE_URL}/auth/forgot-password`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload),
//   });

//   return res.json();
// };














// export async function loginAPI(email, password) {
//   try {
//     const response = await fetch(
//       "https://ezzey-backend-1-lsx0.onrender.com/auth/login",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       }
//     );

//     const data = await response.json();
//     console.log("Login response:", data);

//     // ❌ Invalid login
//     if (!response.ok) {
//       return {
//         success: false,
//         message: data.message || "Login failed",
//       };
//     }

//     // ✔ Token store
//     if (data.token) {
//       localStorage.setItem("token", data.token);
//       console.log("Token stored in localStorage");
//     }

//     // ✔ User store (optional but useful)
//     if (data.user) {
//       localStorage.setItem("user", JSON.stringify(data.user));
//     }

//     return {
//       success: true,
//       message: data.message,
//       user: data.user,
//       token: data.token,
//     };

//   } catch (error) {
//     console.error("Login Error:", error);
//     return {
//       success: false,
//       message: "Something went wrong",
//     };
//   }
// }

// export async function signupAPI({ name, email, password, role }) {
//   const response = await fetch(
//     "https://ezzey-backend-1-lsx0.onrender.com/auth/register",
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name, email, password, role }),
//       credentials: "include", // Add this too for consistency
//     }
//   );

//   return response.json();
// }