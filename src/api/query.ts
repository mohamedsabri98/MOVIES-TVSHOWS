// fetch all movies data
export const fetchMovies = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWIyYzk4NjJiMWMzOTRiY2Q5M2YyNzMwNTU2OGE5YiIsInN1YiI6IjY1ZTZjZmZkMGQxMWYyMDE4NjZjZmZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oXDTbn-0yfBPKKi6FVLI550efdYkpbnTteJiQmYF8-E",

          accept: "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
// fetch all tvshows data
export const fetchTvshows = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWIyYzk4NjJiMWMzOTRiY2Q5M2YyNzMwNTU2OGE5YiIsInN1YiI6IjY1ZTZjZmZkMGQxMWYyMDE4NjZjZmZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oXDTbn-0yfBPKKi6FVLI550efdYkpbnTteJiQmYF8-E",

          accept: "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching TV shows:", error);
    throw error;
  }
};
// fetch a movies data for pagination
export const fetchPaginationData = async (dispalytype: any, page: any) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/${dispalytype}?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWIyYzk4NjJiMWMzOTRiY2Q5M2YyNzMwNTU2OGE5YiIsInN1YiI6IjY1ZTZjZmZkMGQxMWYyMDE4NjZjZmZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oXDTbn-0yfBPKKi6FVLI550efdYkpbnTteJiQmYF8-E",

        accept: "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  return res.json();
};
// fetch movie data by id
export const fetchMovieData = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWIyYzk4NjJiMWMzOTRiY2Q5M2YyNzMwNTU2OGE5YiIsInN1YiI6IjY1ZTZjZmZkMGQxMWYyMDE4NjZjZmZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oXDTbn-0yfBPKKi6FVLI550efdYkpbnTteJiQmYF8-E",
        accept: "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }
  return res.json();
};
// fetch movie data by id
export const fetchTvshowData = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWIyYzk4NjJiMWMzOTRiY2Q5M2YyNzMwNTU2OGE5YiIsInN1YiI6IjY1ZTZjZmZkMGQxMWYyMDE4NjZjZmZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oXDTbn-0yfBPKKi6FVLI550efdYkpbnTteJiQmYF8-E",
        accept: "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }
  return res.json();
};
