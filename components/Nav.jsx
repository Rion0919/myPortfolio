import Link from "next/link";
import styles from 'src/styles/nav.module.css'

const Nav = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
