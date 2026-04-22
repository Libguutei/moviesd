export interface Paginated<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genre_ids: number[];
  adult: boolean;
  original_language: string;
}
export interface MovieDetails extends Omit<Movie, "genre_ids"> {
  tagline: string;
  runtime: number | null;
  status: string;
  genres: Genre[];
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  order: number;
}

export interface CrewMember {
  id: number;
  name: string;
  job: string;
  department: string;
}

export interface Credits {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
}

export interface Video {
  id: string;
  site: "YouTube" | string;
  key: string;
  type: "Trailer" | "Teaser" | "Clip" | string;
  official: boolean;
}

export interface VideosResponse {
  id: number;
  results: Video[];
}
