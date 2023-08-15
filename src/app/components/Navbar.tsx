"use client"
import Link from "next/link"
import styles from "./navbar.module.css"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const path = usePathname()

  const renderTitle = () => {
    if (path === "/") return <h2>Popular Titles</h2>
    if (path === "/movies") return <h2>Popular Movies</h2>
    if (path === "/series") return <h2>Popular Series</h2>
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.header}>
          <h2>
            <Link href="/">DEMO Streaming</Link>
          </h2>
          <ul>
            <li>Log in</li>
            <li className={styles.trial}>Start your free trial</li>
          </ul>
        </div>
        <div className={styles.title}>{renderTitle()}</div>
      </nav>
    </>
  )
}
