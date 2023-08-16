"use client"

import { useState } from "react"
import Image from "next/image"
import styles from "./moviesList.module.css"
import { useRouter } from "next/navigation"

const MoviesList = ({ movies }: { movies: Item[] }) => {
  const router = useRouter()
  const [sortedMovies, setSortedMovies] = useState(movies)
  const [activeFilter, setActiveFilter] = useState("")

  const sortByTitle = () => {
    setSortedMovies((prevState) => [...prevState].sort((a, b) => a.title.localeCompare(b.title)))
    setActiveFilter("title")
  }

  const sortByRecent = () => {
    setSortedMovies((prevState) => [...prevState].sort((a, b) => b.releaseYear - a.releaseYear))
    setActiveFilter("recent")
  }

  const sortByOldest = () => {
    setSortedMovies((prevState) => [...prevState].sort((a, b) => a.releaseYear - b.releaseYear))
    setActiveFilter("oldest")
  }

  const handleClick = (item: Item) => {
    if (item.programType === "series") {
      router.push(`/series/${item.id}`)
    } else {
      router.push(`/movies/${item.id}`)
    }
  }

  return (
    <>
      <div className={styles.sort_btns}>
        <h2>Sort by: </h2>
        <button onClick={sortByRecent} className={activeFilter === "recent" ? styles.active : ""}>
          Recent
        </button>
        <button onClick={sortByOldest} className={activeFilter === "oldest" ? styles.active : ""}>
          Oldest
        </button>
        <button onClick={sortByTitle} className={activeFilter === "title" ? styles.active : ""}>
          Title
        </button>
      </div>

      <div className={styles.moviesContainer}>
        {sortedMovies.map((item, index) => (
          <article key={index}>
            <Image
              height={150}
              width={100}
              src={item.images["Poster Art"].url}
              alt="poster img of movie"
              onClick={() => handleClick(item)}
            />
            <div className={styles.title_year}>
              <h2>{item.title}</h2>
              <p>({item.releaseYear})</p>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}

export default MoviesList
