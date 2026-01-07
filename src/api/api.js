const BASE_URL = "http://localhost:5000";

// Helper function to handle unauthorized responses
const handleUnauthorized = (res) => {
  if (res.status === 401) {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
  }
};

export const loginAPI = async (email, password) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });
  
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || `Login failed: ${res.status}`);
  }
  
  const data = await res.json();
  
  localStorage.setItem('isAuthenticated', 'true');
  
  if (data.user) {
    localStorage.setItem('user', JSON.stringify(data.user));
  }
  
  return data;
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
    credentials: "include",
  });

  if (!res.ok) {
    handleUnauthorized(res);
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || `API Error: ${res.status}`);
  }

  return res.json();
};

// ✅ GET - Fetch all classrooms
export const getClassrooms = async () => {
  const res = await fetch(`${BASE_URL}/classrooms`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!res.ok) {
    handleUnauthorized(res);
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || `API Error: ${res.status}`);
  }

  return res.json();
};

// ✅ POST - Add new classroom
export const addClassroom = async (classroomData) => {
  const res = await fetch(`${BASE_URL}/classrooms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(classroomData),
  });

  if (!res.ok) {
    handleUnauthorized(res);
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || `Failed to add classroom: ${res.status}`);
  }

  return res.json();
};

// ✅ DELETE - Delete classroom by ID
export const deleteClassroom = async (classroomId) => {
  const res = await fetch(`${BASE_URL}/classrooms/${classroomId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!res.ok) {
    handleUnauthorized(res);
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || `Failed to delete classroom: ${res.status}`);
  }

  return res.json();
};

// PATCH - Update classroom by ID
export const updateClassroom = async (classroomId, classroomData) => {
  const res = await fetch(`${BASE_URL}/classrooms/${classroomId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(classroomData),
  });

  if (!res.ok) {
    handleUnauthorized(res);
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || `Failed to update classroom: ${res.status}`);
  }

  return res.json();
};















































// const BASE_URL = "http://localhost:5000";

// // Helper function to handle unauthorized responses
// const handleUnauthorized = (res) => {
//   if (res.status === 401) {
//     localStorage.removeItem('isAuthenticated');
//     localStorage.removeItem('user');
//   }
// };

// // ==================== AUTH APIs ====================

// export const loginAPI = async (email, password) => {
//   const res = await fetch(`${BASE_URL}/auth/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     credentials: "include",
//     body: JSON.stringify({ email, password }),
//   });
  
//   if (!res.ok) {
//     const errorData = await res.json().catch(() => ({}));
//     throw new Error(errorData.message || `Login failed: ${res.status}`);
//   }
  
//   const data = await res.json();
  
//   localStorage.setItem('isAuthenticated', 'true');
  
//   if (data.user) {
//     localStorage.setItem('user', JSON.stringify(data.user));
//   }
  
//   return data;
// };

// export const signupAPI = async (payload) => {
//   const res = await fetch(`${BASE_URL}/auth/register`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload),
//   });

//   return res.json();
// };

// export const forgotPasswordAPI = async (payload) => {
//   const res = await fetch(`${BASE_URL}/auth/forgot-password`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload),
//   });

//   return res.json();
// };

// export const emailVerificationAPI = async (token) => {
//   const res = await fetch(`${BASE_URL}/auth/verify-email?token=${token}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   return res.json();
// };

// // ==================== DASHBOARD APIs ====================

// export const dashboardSummaryAPI = async () => {
//   const res = await fetch(`${BASE_URL}/dashboard/summary`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//   });

//   if (!res.ok) {
//     handleUnauthorized(res);
//     const errorData = await res.json().catch(() => ({}));
//     throw new Error(errorData.message || `API Error: ${res.status}`);
//   }

//   return res.json();
// };

// // ==================== CLASSROOM APIs (CRUD) ====================

// // ✅ GET - Fetch all classrooms
// export const getClassrooms = async () => {
//   const res = await fetch(`${BASE_URL}/classrooms`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//   });

//   if (!res.ok) {
//     handleUnauthorized(res);
//     const errorData = await res.json().catch(() => ({}));
//     throw new Error(errorData.message || `API Error: ${res.status}`);
//   }

//   return res.json();
// };

// // ✅ POST - Add new classroom
// export const addClassroom = async (classroomData) => {
//   const res = await fetch(`${BASE_URL}/classrooms`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//     body: JSON.stringify(classroomData),
//   });

//   if (!res.ok) {
//     handleUnauthorized(res);
//     const errorData = await res.json().catch(() => ({}));
//     throw new Error(errorData.message || `Failed to add classroom: ${res.status}`);
//   }

//   return res.json();
// };

// // ✅ PUT - Update classroom
// export const updateClassroom = async (id, classroomData) => {
//   const res = await fetch(`${BASE_URL}/classrooms/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//     body: JSON.stringify(classroomData),
//   });

//   if (!res.ok) {
//     handleUnauthorized(res);
//     const errorData = await res.json().catch(() => ({}));
//     throw new Error(errorData.message || `Failed to update classroom: ${res.status}`);
//   }

//   return res.json();
// };

// // ✅ DELETE - Delete classroom
// export const deleteClassroom = async (id) => {
//   const res = await fetch(`${BASE_URL}/classrooms/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//   });

//   if (!res.ok) {
//     handleUnauthorized(res);
//     const errorData = await res.json().catch(() => ({}));
//     throw new Error(errorData.message || `Failed to delete classroom: ${res.status}`);
//   }

//   return res.json();
// };