export const mutationLogin = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/authentication/guest_session/new",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWIyYzk4NjJiMWMzOTRiY2Q5M2YyNzMwNTU2OGE5YiIsInN1YiI6IjY1ZTZjZmZkMGQxMWYyMDE4NjZjZmZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oXDTbn-0yfBPKKi6FVLI550efdYkpbnTteJiQmYF8-E",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    if (data && data.guest_session_id) {
      localStorage.setItem("guest_session_id", data.guest_session_id);
      console.log("Guest session ID stored:", data.guest_session_id);
    } else {
      console.error("No guest session ID found in the response.");
    }

    return data; // Return the parsed JSON data
  } catch (error) {
    console.error("Error:", error);
    return null; // Return null or handle the error accordingly
  }
};
