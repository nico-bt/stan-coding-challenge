import IndividualItem from "@/app/components/IndividualItem"
import { dataWithIds } from "../page"

// const getMovieById = async (id: string): Promise<Item> => {
//   const data = await fetch("https://stan-coding-challenge-nico-bt.vercel.app/api/items")
//   const json = await data.json()

//   const movie = json.data.filter((item: Item) => item.id === Number(id))
//   return movie[0]
// }

export default async function DetailsPage({ params: { id } }: { params: { id: string } }) {
  // const movie = await getMovieById(id)
  const movie = dataWithIds[0]
  return <IndividualItem item={movie} />
}
