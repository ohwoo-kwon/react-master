const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  date: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&region=KR`
  ).then((response) => response.json());
}

export function searchMovies(keyword: string) {
  return fetch(
    `${BASE_PATH}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${keyword}&language=ko-KR}`
  ).then((response) => response.json());
}
