import MoviesList from "../components/MoviesList"

const getAllMovies = async (): Promise<Item[]> => {
  const data = await fetch("http://localhost:3000/api/items")
  const json = await data.json()

  const movies = json.filter((item: Item) => item.programType === "movie")
  return movies
}

export default async function MoviesPage() {
  const movies = await getAllMovies()

  return <MoviesList movies={movies} />
}
