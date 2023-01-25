import Head from "next/head";
import { siteMeta } from "lib/constants";
import { useRouter } from "next/router";
import siteImg from 'images/ogp.jpg';
const { siteDesc, siteIcon,  siteTitle, siteType, siteUrl, siteLocale } = siteMeta;
const Meta = ({ pageTitle, pageDesc, pageImg, pageImgW, pageImgH }) => {
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  const desc = pageDesc ?? siteDesc
  const router = useRouter()
  const url = `${siteUrl}${router.asPath}`
 const img = pageImg || siteImg.src
 const imgW = pageImgW || siteImg.width
 const imgH = pageImgH || siteImg.height
 const imgUrl = img ? img : `${siteUrl}${img}`

  return (
    <Head>
      <title>{title}</title>
      <meta property="og::title" content={title} />
      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:locale" content={siteLocale} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={imgW} />
      <meta property="og:image:height" content={imgH} />
      <meta name="twitter:card" content="summary_large_image" />

      <link rel="canonical" href={url} />
      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />
    </Head>
  );
};

export default Meta;
