const API_BASE_URL = "http://localhost:5000";
//error handling k liye
async function handleJsonResponse(response, errorMessage) {
if (!response.ok) {
throw new Error(errorMessage || `Request failed with ${response.status}`);
}
return response.json();
}
// Quick add batch k liye
export async function addBatchApi(batchData) {
const res = await fetch(`${API_BASE_URL}/batches`, {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(batchData),
});
return handleJsonResponse(res, "Failed to add batch");
}
// Quick add subject k liye
export async function addSubjectApi(subjectData) {
const res = await fetch(`${API_BASE_URL}/subjects`, {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(subjectData),
  });
return handleJsonResponse(res, "Failed to add subject");
}
// all subject k bare me
export async function getSubjectsApi() {
  const res = await fetch(`${API_BASE_URL}/subjects`);
  return handleJsonResponse(res, "Failed to fetch subjects");
}
export { API_BASE_URL };
