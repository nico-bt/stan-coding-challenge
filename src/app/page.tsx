import styles from "./page.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/movies">MOVIES</Link>
      <Link href="/series">SERIES</Link>
    </main>
  )
}
