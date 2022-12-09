import Link from "next/link";
import React from "react";
import { BiTime } from "react-icons/bi";

const MovieItem = ({ movie }) => {
  return (
    <Link href={`/${movie.imdbID}`}>
      <div className="cart">
      <img className="w-full" src={movie.Poster} />
      <div className="p-4 text-white">
        <h4>{movie.Title}</h4>
      </div>
      <div className="badge">
        <BiTime className="mr-1"/>
        <p>{movie.Year}</p>
      </div>
    </div>
    </Link>
  );
};

export default MovieItem;
