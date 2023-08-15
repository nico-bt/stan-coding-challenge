import Link from "next/link"
import styles from "./footer.module.css"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/">Terms and Conditions</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Collection Statement</Link>
          <Link href="/">Help</Link>
          <Link href="/">Manage Account</Link>
        </div>

        <div>Copyright 2023 DEMO Streaming. All Rights Reserved.</div>

        <div className={styles.externalLinks}>
          <ul className={styles.social}>
            <li>
              <Image src={"/social/facebook-white.svg"} alt="Facebook" width={26} height={26} />
            </li>
            <li>
              <Image src={"/social/twitter-white.svg"} alt="Twitter" width={26} height={26} />
            </li>
            <li>
              <Image src={"/social/instagram-white.svg"} alt="Instagram" width={26} height={26} />
            </li>
          </ul>

          <ul className={styles.stores}>
            <li>
              <Image src={"/store/app-store.svg"} alt="App store" width={135} height={40} />
            </li>
            <li>
              <Image src={"/store/play-store.svg"} alt="Play store" width={135} height={40} />
            </li>
            <li>
              <Image src={"/store/windows-store.svg"} alt="Windows store" width={135} height={40} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
