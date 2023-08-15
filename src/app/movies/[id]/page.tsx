import IndividualItem from "@/app/components/IndividualItem"

const getMovieById = async (id: string): Promise<Item> => {
  const data = await fetch("http://localhost:3000/api/items")
  const json = await data.json()

  const movie = json.filter((item: Item) => item.id === Number(id))
  return movie[0]
}

export default async function DetailsPage({ params: { id } }: { params: { id: string } }) {
  const movie = await getMovieById(id)

  return <IndividualItem item={movie} />
}
