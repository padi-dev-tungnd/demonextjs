import React, { memo } from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movieList }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mb-12">
      {movieList.Response === "True" ? (
        movieList.Search.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} />
        ))
      ) : (
        <div>Ko tim thay phim nao</div>
      )}
    </div>
  );
};

export default memo(MovieList);
