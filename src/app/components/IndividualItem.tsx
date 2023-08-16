import Image from "next/image"
import styles from "./individualItem.module.css"

export default function IndividualItem({ item }: { item: Item }) {
  return (
    <article className={styles.article}>
      <Image
        height={450}
        width={300}
        src={item.images["Poster Art"].url}
        alt="poster img of item"
      />
      <div>
        <h2>{item.title}</h2>
        <p>({item.releaseYear})</p>
        <p className={styles.description}>{item.description}</p>
      </div>
    </article>
  )
}
