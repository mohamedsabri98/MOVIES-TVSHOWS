import { DisplayType } from "../enum/enum";

export default interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  vote_avarage: number;
  release_date: string;
}

export interface Props {
  data: {
    page: number;
    results: Array<any>; // Adjust the type based on the actual structure
    total_pages: number;
    total_results: number;
  };
  displayType: DisplayType;
}
