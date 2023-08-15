import IndividualItem from "@/app/components/IndividualItem"

const getSerieById = async (id: string): Promise<Item> => {
  const data = await fetch("http://localhost:3000/api/items")
  const json = await data.json()

  const serie = json.filter((item: Item) => item.id === Number(id))
  return serie[0]
}

export default async function DetailsPage({ params: { id } }: { params: { id: string } }) {
  const serie = await getSerieById(id)

  return <IndividualItem item={serie} />
}
