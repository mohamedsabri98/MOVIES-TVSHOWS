import { useState } from "react";
import { DisplayType } from "../enum/enum";
import { Props } from "../interfaces/interfaces";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { fetchPaginationData } from "../api/query";
import { Link } from "react-router-dom";

function ColumnDisplay(props: Props) {
  const { data, displayType } = props;
  const [currentPage, setCurrentPage] = useState(data.page);

  const handleLoadMore = async () => {
    try {
      const newData = await fetchPaginationData(displayType, currentPage + 1);
      setCurrentPage(currentPage + 1);
    } catch (error) {
      console.error("Error loading more data:", error);
    }
  };

  const truncateText = (text: string, numWords: number) => {
    const words = text.split(" ");
    return words.length <= numWords
      ? text
      : words.slice(0, numWords).join(" ") + "...";
  };

  return (
    <div className="container mt-4">
      <Card.Group itemsPerRow={4}>
        {data.results.map((item: any) => (
          <Card key={item.id}>
            <Link
              to={`/${displayType == DisplayType.Movies ? "movie" : "tvshow"}/${
                item.id
              }`}
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title || item.name}
              />
            </Link>
            <Card.Content>
              <Card.Header>
                {displayType === DisplayType.Movies
                  ? item.title
                  : displayType === DisplayType.TvShows
                  ? item.name
                  : ""}
              </Card.Header>
              <Card.Description>
                {truncateText(item.overview, 20)}
              </Card.Description>
              <a>
                <Icon name="star" />
                {item.vote_average}
              </a>
              <Button color="blue" className="ms-3">
                rate
              </Button>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      {currentPage < data.total_pages && (
        <Button onClick={handleLoadMore} fluid>
          Load More
        </Button>
      )}
    </div>
  );
}

export default ColumnDisplay;
