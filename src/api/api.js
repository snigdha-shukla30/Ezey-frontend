export async function loginAPI(email, password) {
  const response = await fetch("https://ezzey-backend-1.onrender.com/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  return response.json(); 
}

export async function signupAPI(email, password , role) {
  const response = await fetch("https://ezzey-backend-1.onrender.com/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email,  password , role ,}),
  });

  return response.json();
}

