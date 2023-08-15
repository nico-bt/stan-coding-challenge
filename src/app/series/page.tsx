import MoviesList from "../components/MoviesList"

const getAllSeries = async (): Promise<Item[]> => {
  const data = await fetch("http://localhost:3000/api/items")
  const json = await data.json()

  const series = json.filter((item: Item) => item.programType === "series")
  return series
}

export default async function SeriesPage() {
  const series = await getAllSeries()

  return <MoviesList movies={series} />
}
