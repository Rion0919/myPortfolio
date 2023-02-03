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
              モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
            </p>
            <p>
              単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
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
                <li>Node.js, Python, Java</li>
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
