import MoviesList from "../components/MoviesList"

const getAllSeries = async (): Promise<Item[]> => {
  const data = await fetch("https://stan-coding-challenge-nico-bt.vercel.app/api/items")
  const json = await data.json()

  const series = json.data.filter((item: Item) => item.programType === "series")
  return series
}

export default async function SeriesPage() {
  const series = await getAllSeries()
  return <MoviesList movies={series} />
}
