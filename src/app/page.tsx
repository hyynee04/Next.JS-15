import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Welcome home!</h1>
      <ul>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/articles/breaking-news-123?lang=en">Reading in English</Link></li>
        <li><Link href="/articles/breaking-news-123?lang=fr">Reading in French</Link></li>
      </ul>
    </>
  )
}

export default Home;