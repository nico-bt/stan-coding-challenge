import { NextResponse } from "next/server"
import data from "../../../feed/sample.json"

// Agrego id's a los items para hacer más fácil rutas dinámicas para acceder items individuales
const dataWithIds: Item[] = data.entries.map((item, index) => {
  const id = index
  return { ...item, id }
})

// Simulando que el sample data viene de una api
//--------------------------------------------------
export async function GET() {
  return NextResponse.json(dataWithIds)
}

// Obs: Con el length que venía en el sample podría hacerse paginación con la api
// En vez de devolver todos los items, devolver cierta cantidad y tipo