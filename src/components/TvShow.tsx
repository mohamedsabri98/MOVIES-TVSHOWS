import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTvshowData } from "../api/query";
import { Grid, Image, Segment, Header, Icon } from "semantic-ui-react";

function Movie() {
  const { id } = useParams<{ id: string | undefined }>();
  const [tvData, setTvData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchTvshowData(id)
        .then((data) => setTvData(data))
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
        {tvData && (
          <Grid.Row>
            <Grid.Column width={4}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${tvData.poster_path}`}
                alt={tvData.title}
                className="rounded-5"
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <Segment>
                <Header as="h2">{tvData.title}</Header>
                <p>{tvData.overview}</p>
                <p>
                  <strong>Release Date:</strong> {tvData.release_date}
                </p>
                <p>
                  <strong>Genres:</strong>
                  {tvData.genres.map((genre: any) => genre.name).join(", ")}
                </p>
                <p>
                  <strong className="me-3">Runtime:</strong> <Icon name="tv" />
                  {tvData.runtime} minutes
                </p>
                <p>
                  <strong>Vote Average:</strong> <Icon name="star" />
                  {tvData.vote_average}
                </p>
                <p>
                  <strong>Popularity:</strong> <Icon name="tv" />
                  {tvData.popularity}
                </p>
                <p>
                  <strong>Available dor adults:</strong>
                  {tvData.adults ? " yes" : " No"}
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
