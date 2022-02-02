import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { searchMovies } from "../api";

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], () =>
    searchMovies(String(keyword))
  );

  return null;
}

export default Search;
