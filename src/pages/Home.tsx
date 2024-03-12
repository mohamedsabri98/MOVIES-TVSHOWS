import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import ColumnDisplay from "../components/ColumnDisplay";
import { DisplayType } from "../enum/enum";
import { fetchMovies, fetchTvshows } from "../api/query";
import { useQuery } from "react-query";

function Home() {
  const { data: moviesData, isLoading: isLoadingMovies } = useQuery(
    ["movies"],
    fetchMovies
  );
  const { data: tvShowData, isLoading: isLoadingTvShows } = useQuery(
    ["tvshows"],
    fetchTvshows
  );

  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );

  return (
    <>
      <div className="home">
        <Button.Group>
          <Button
            color={displayType === DisplayType.Movies ? "blue" : undefined}
            onClick={() => {
              setDisplayType(DisplayType.Movies);
              console.log(fetchMovies());
            }}
          >
            Movies
          </Button>
          <Button
            color={displayType === DisplayType.TvShows ? "blue" : undefined}
            onClick={() => {
              setDisplayType(DisplayType.TvShows);
              console.log(fetchTvshows());
            }}
          >
            Tv Shows
          </Button>
        </Button.Group>
      </div>
      {isLoadingMovies || isLoadingTvShows ? (
        <div>
          <h1>Data is loading...</h1>
        </div>
      ) : (
        <div>
          {displayType === DisplayType.Movies ? (
            <ColumnDisplay data={moviesData} displayType={DisplayType.Movies} />
          ) : displayType === DisplayType.TvShows ? (
            <ColumnDisplay
              data={tvShowData}
              displayType={DisplayType.TvShows}
            />
          ) : (
            <p>Invalid display type</p>
          )}
        </div>
      )}
    </>
  );
}

export default Home;
