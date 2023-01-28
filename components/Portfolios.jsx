import Image from "next/image";
import Link from "next/link";
import styles from "src/styles/Portfolios.module.css";
// import flexibleTodos from 'images/flexibleTodos.png'
const data = require('../lib/portfolio.json')

export default function Portfolios() {
  // console.log(data);
  return (
    <div className={styles.gridContainer}>
      {data.portfolios.map((d, i) => (
        <article className={styles.post} key={i}>
        <Link href={d.url}>
          <a>
            <figure>
              <Image
                  src={d.image}
                  // src={flexibleTodos}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  sizes="(min-width: 1152px) 576px, 50vw"
                />
            </figure>
            <h2>{d.name}</h2>
            <p>{d.description}</p>
          </a>
        </Link>
      </article>
      ))}
    </div>
  );
}
