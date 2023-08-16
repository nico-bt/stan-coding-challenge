import IndividualItem from "@/app/components/IndividualItem"
import { dataWithIds } from "@/app/movies/page"

// const getSerieById = async (id: string): Promise<Item> => {
//   const data = await fetch("https://stan-coding-challenge-nico-bt.vercel.app/api/items")
//   const json = await data.json()

//   const serie = json.data.filter((item: Item) => item.id === Number(id))
//   return serie[0]
// }

export default async function DetailsPage({ params: { id } }: { params: { id: string } }) {
  // const serie = await getSerieById(id)
  const serie = dataWithIds[0]
  return <IndividualItem item={serie} />
}
