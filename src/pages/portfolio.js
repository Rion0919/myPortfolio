import Container from "components/Container";
import Hero from "components/Hero";
import Meta from "components/Meta";
import Portfolios from "components/Portfolios";

export default function Portfolio() {
  return (
    <Container>
      <Meta pageTitle="Portfolio" pageDesc="私の作品"/>

      <Hero title="Portfolio" subtitle="私の作品"/>
      <p>各アプリの説明はブログページを参照下さい。</p>
        <Portfolios />
    </Container>
  );
}
