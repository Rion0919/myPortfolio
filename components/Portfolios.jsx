import Image from "next/image";
import Link from "next/link";
import styles from "src/styles/Portfolios.module.css";
import flexibleTodos from 'images/flexibleTodos.png'

export default function Portfolios() {
  return (
    <div className={styles.gridContainer}>
      <article className={styles.post}>
        <Link href="https://flexible-todos.vercel.app/">
          <a>
            <figure>
              <Image
                  src={flexibleTodos}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  sizes="(min-width: 1152px) 576px, 50vw"
                />
            </figure>
            <h2>app 1</h2>
          </a>
        </Link>
      </article>
      <article className={styles.post}>
        <Link href="https://flexible-todos.vercel.app/">
          <a>
            <figure>
              <Image
                  src="/eyecatch.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  sizes="(min-width: 1152px) 576px, 50vw"
                />
            </figure>
            <h2>app 2</h2>
          </a>
        </Link>
      </article>
      <article className={styles.post}>
        <Link href="https://flexible-todos.vercel.app/">
          <a>
            <figure>
              <Image
                  src="/eyecatch.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  sizes="(min-width: 1152px) 576px, 50vw"
                />
            </figure>
            <h2>app 3</h2>
          </a>
        </Link>
      </article>
      <article className={styles.post}>
        <Link href="https://flexible-todos.vercel.app/">
          <a>
            <figure>
              <Image
                  src="/eyecatch.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  sizes="(min-width: 1152px) 576px, 50vw"
                />
            </figure>
            <h2>app 4</h2>
          </a>
        </Link>
      </article>
    </div>
  );
}
