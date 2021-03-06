import Link from "next/link";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/"> DJ EVENTS </Link>
      </div>
      <nav>
        <ul>
          <li>
            {" "}
            <Link href="/events"> Events </Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/about"> About </Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}
