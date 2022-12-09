import Link from "next/link";
import React from "react";
import { getMovieById, getMovieIds } from "../lib/moviesApi";
import { AiFillStar, AiFillLike, AiOutlineFieldTime } from "react-icons/ai";
import { FaBirthdayCake } from "react-icons/fa";

const MovieDetail = ({ movie }) => {
  return (
    <>
      <div className="grid xl:grid-cols-5 mt-8">
        <div className=" xl:col-span-4">
          <h1>{movie.Title}</h1>
          <div className="flex flex-col justify-start items-start my-4 xl:flex-row xl:items-center">
            <h4 className="mr-8 flex items-center">
              IMDB Rating{" "}
              <span>
                <AiFillStar />
              </span>
              : {movie.imdbRating}
            </h4>
            <h4 className="mr-8 flex items-center">
              IMDB Votes{" "}
              <span>
                <AiFillLike />
              </span>
              : {movie.imdbVotes}
            </h4>
            <h4 className="mr-8 flex items-center">
              Runtime{" "}
              <span>
                <AiOutlineFieldTime />
              </span>
              : {movie.Runtime}
            </h4>
            <h4 className="flex items-center">
              Year{" "}
              <span>
                <FaBirthdayCake />
              </span>
              : {movie.Year}
            </h4>
          </div>
          <div>{movie.Plot}</div>
          <div className="flex my-4">
            <p className="w-[100px] font-bold">Director</p>
            <p>{movie.Director}</p>
          </div>
          <div className="flex my-4">
            <p className="w-[100px] font-bold">Stars</p>
            <p>{movie.Actors}</p>
          </div>

          <div className="flex my-4">
            <p className="w-[100px] font-bold">Genneres</p>
            <p>{movie.Genre}</p>
          </div>
          <div className="flex my-4">
            <p className="w-[100px] font-bold">Language</p>
            <span>{movie.Language}</span>
          </div>
          <div className="flex my-4">
            <p className="w-[100px] font-bold">Awards</p>
            <span>{movie.Awards}</span>
          </div>
        </div>
        <div className=" xl:col-span-1 ml-6">
          <img className="w-full" src={movie.Poster} />
        </div>
      </div>
      <div className="flex mt-6 justify-center xl:justify-end">
        <Link href="/">
          <button className="btn text-xs">Back</button>
        </Link>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = await getMovieIds("Harry");
  // console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // console.log(params)
  const movie = await getMovieById(params.id);

  return {
    props: {
      movie,
    },
  };
};

export default MovieDetail;
