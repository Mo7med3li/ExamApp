export async function getUserSubmissions(page: number) {
  const response = await fetch(`/api/get-user-submissions?page=${page || 1}`);
  const data = await response.json();
  if (!data.status) {
    throw new Error(data.message);
  }
  return data;
}
