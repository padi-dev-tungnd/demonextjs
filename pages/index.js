import MovieList from "../components/Home/MovieList";
import { getMovies } from "../lib/moviesApi";

export default function Home({ movies }) {
  return (
    <>
      <h1 className="mt-6 text-cyan-900">Tailwind CSS with React & Next</h1>
      <h3 className="border-b border-primary mt-12 mb-6 pb-4">Trending</h3>

      <MovieList movieList={movies} />

      <div className="flex justify-center items-center">
        <button className="btn hover:scale-110 transition ease-out duration-400">
          Load More
        </button>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const movies = await getMovies("Harry");

  return {
    props: {
      movies,
    },
  };
};
