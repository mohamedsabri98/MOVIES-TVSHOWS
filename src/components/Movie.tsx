import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieData } from "../api/query";
import { Grid, Image, Segment, Header, Icon } from "semantic-ui-react";

function Movie() {
  const { id } = useParams<{ id: string | undefined }>();
  const [movieData, setMovieData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchMovieData(id)
        .then((data) => setMovieData(data))
        .catch((error) => setError(error.message));
    } else {
      setError("Invalid movie id");
    }
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Grid centered style={{ marginTop: "20px" }}>
        {movieData && (
          <Grid.Row>
            <Grid.Column width={4}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                alt={movieData.title}
                className="rounded-5"
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <Segment>
                <Header as="h2">{movieData.title}</Header>
                <p>{movieData.overview}</p>
                <p>
                  <strong>Release Date:</strong> {movieData.release_date}
                </p>
                <p>
                  <strong>Genres:</strong>
                  {movieData.genres.map((genre: any) => genre.name).join(", ")}
                </p>
                <p>
                  <strong className="me-3">Runtime:</strong> <Icon name="tv" />
                  {movieData.runtime} minutes
                </p>
                <p>
                  <strong>Vote Average:</strong> <Icon name="star" />
                  {movieData.vote_average}
                </p>
                <p>
                  <strong>Popularity:</strong> <Icon name="tv" />
                  {movieData.popularity}
                </p>
                <p>
                  <strong>Available dor adults:</strong>
                  {movieData.adults ? " yes" : " No"}
                </p>
                {/* Add more details as needed */}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        )}
      </Grid>
    </>
  );
}

export default Movie;
