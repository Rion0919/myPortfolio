import Container from "components/Container";
import Hero from "components/Hero";
import Meta from "components/Meta";

const Blog = () => {
  return (
    <Container>
      <Meta pageTitle="Blog" pageDesc="ブログ記事一覧"/>
      <Hero title="Blog" subtitle="ブログページです" />
    </Container>
  );
};

export default Blog;
