const BASE_URL = "https://ezzey-backend.onrender.com";

// export const loginAPI = async (payload) => {
//   const res = await fetch(`${BASE_URL}/auth/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload),
//   });

//   return res.json();
// };

export const loginAPI = async (email, password) => {
  console.log("Login API Response:",  email, password );
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", 
    body: JSON.stringify({ email, password }),

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

export const forgotPasswordAPI = async (payload) => {
  const res = await fetch(`${BASE_URL}/auth/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return res.json();
};

export const emailVerificationAPI = async (token) => {
  const res = await fetch(`${BASE_URL}/auth/verify-email?token=${token}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

export const dashboardSummaryAPI = async () => {
  const res = await fetch(`${BASE_URL}/dashboard/summary`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // 🔥 MOST IMPORTANT
  });

  return res.json();
};

// export const dashboardSummaryAPI = async (token) => {
//   const res = await fetch(`${BASE_URL}/dashboard/summary`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Bearer ${token}`, // lowercase
//     },
//   });

//   return res.json();
// };

//   const res = await fetch(`${BASE_URL}/dashboard/summary`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   }
// );

//   return res.json();
// };
