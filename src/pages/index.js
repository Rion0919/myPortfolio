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
      <h1 className="contentName">Portfolio</h1>
      <Portfolios />
      <Pagination nextUrl="/portfolio" nextText="MorePortfolios" />
      <hr />
      <h1 className="contentName">Blog</h1>
      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="MorePosts" />
      <style jsx>{`
        .contentName {
          font-weight: 400;
          font-size: 50px;
          text-align: center;
          margin-bottom: 100px;
        }
      `}</style>
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
