"use client"

import Link from "next/link"
import { use } from "react"

const NewsArticle = ({
  params, searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) => {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);
  return (
    <div>
      <h1>News article {articleId}</h1>
      <p>Reading in {lang}</p>
      <ul>
        <li><Link href={`/articles/${articleId}?lang=en`}>English</Link></li>
        <li><Link href={`/articles/${articleId}?lang=es`}>Spanish</Link></li>
        <li><Link href={`/articles/${articleId}?lang=fr`}>French</Link></li>
      </ul>
    </div>
  )
}

export default NewsArticle;