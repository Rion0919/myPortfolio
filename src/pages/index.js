import Container from "components/Container";
import Hero from "components/Hero";
import Meta from "components/Meta";

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero
        title="Rion's ROOM"
        subtitle="ポートフォリオサイトです"
        imageOn
      />
    </Container>
  );
}
