const fetchUserData = async (userId: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No authentication token found");
  }

  try {
    const response = await fetch(`${apiUrl}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Fallo del llamado a usuario");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

export default fetchUserData;
