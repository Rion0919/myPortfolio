import Container from "components/Container";
import Hero from "components/Hero";
import Meta from "components/Meta";
import { getAllPosts } from "lib/api";
import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "lib/constants";
import Posts from "components/Posts";
import Pagination from "components/Pagination";
import Portfolios from "components/Portfolios";

export default function Home({ posts }) {
  return (
    <Container>
      <Meta />
      <Hero title="Rion's ROOM" subtitle="ポートフォリオサイトです" imageOn />
      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="MorePosts" />
      <Portfolios />
      <Pagination nextUrl="/portfolio" nextText="MorePortfolios" />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts(4);
  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }
  return {
    props: {
      posts: posts,
    },
  };
}
