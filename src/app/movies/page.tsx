import MoviesList from "../components/MoviesList"
import sampleData from "../../../public/feed/sample.json"

// static momentaneo para hacer deploy y que no tire error por api inexistente aun
export const dataWithIds: Item[] = sampleData.entries.map((item, index) => {
  const id = index
  return { ...item, id }
})

// const getAllMovies = async (): Promise<Item[]> => {
//   const data = await fetch("https://stan-coding-challenge-nico-bt.vercel.app/api/items")
//   const json = await data.json()

//   const movies = json.data.filter((item: Item) => item.programType === "movie")
//   return movies
// }

export default async function MoviesPage() {
  // const movies = await getAllMovies()
  const movies = dataWithIds
  return <MoviesList movies={movies} />
}
