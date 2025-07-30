import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog"
  },
}

const Blog = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay")
    }, 2000)
  })
  return <h1>My blog</h1>
}

export default Blog;