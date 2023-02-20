import Container from "components/Container";
import Hero from "components/Hero";
import PostBody from "components/PostBody";
import Contact from "components/Contact";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/TwoColumn";
import Image from "next/image";
import eyecatch from "images/about.jpg";
import Meta from "components/Meta";
import styles from "src/styles/about.module.css";

const About = () => {
  return (
    <Container>
      <Meta
        pageTitle="About"
        pageDesc="私について"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="About" subtitle="私について" />
      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw, "
          height={1700}
          priority
          placeholder="blur"
        />
      </figure>
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <h2>自己紹介</h2>
            <p>
              現在、都内の4年制の専門学校に通っている、山田里温と申します。（24卒）
            </p>
            <p>
              専門学校ではマネジメント、PM, アプリケーション開発（上流工程,Java,
              Linux...）システム監査等を勉強しました。また独学でこのポートフォリオ再策を含めたWebアプリ開発の勉強もしています。
            </p>
            <p>趣味は音楽で、主に洋楽を聴いています！<br/>家にギターがあるので時間がある時に練習しています。</p>
            <h2>目指している将来</h2>
            <p>
              私は将来Webアプリ開発者として、お客様に広く利用していただけるようなアプリを開発し、実力を伸ばしていきたいです。その為にはただ闇雲にアプリを開発し続けるのではく、「こんなアプリを開発したら自分の役に立つのではないか」や「もしかしたら知人の役に立つのではないか」と考えながら、自分含め誰かに「スゴイ」と言われるようなアプリを開発するのが大事だと考えています。<br/>また技術面を伸ばすだけでなく、将来誰かに利用してもらうサービスを開発するのであれば性別、年齢問わず誰もが利用しやすいUI/UXデザインでなければいけないとも考えており、今後はUI/UXデザインにも意識しながら開発しきたいです。
            </p>
            <h2>これまでにやってきたこと/取得した資格</h2>

            <div className={styles.grid}>
              <h4 className={styles.title}>資格</h4>
              <ul className={styles.listStyle}>
                <li>MOS(Microsoft Office Specialist)</li>
                <li>基本情報技術者</li>
              </ul>
            </div>
            <hr />
            <div className={styles.grid}>
              <h4 className={styles.title}>スキル</h4>
              <ul className={styles.listStyle}>
                <li>HTML, CSS, JavaScript, React, Next.js</li>
                <li>Node.js, Python, Java, PHP</li>
                <li>Figma</li>
              </ul>
            </div>
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
};

export default About;
