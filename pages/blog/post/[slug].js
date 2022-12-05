import React from "react";
import { useRouter } from "next/router";
import { attributes, react as HomeContent } from "../../../content/news.md";
import ReactMarkdown from "react-markdown";

const Post = () => {
  let { news } = attributes;

  const router = useRouter();
  const { slug } = router.query;
  const specefied_data = news.filter((item) => item.slug == slug);
  const txt = specefied_data[0].content;

  return <ReactMarkdown>{txt}</ReactMarkdown>;
};

export default Post;
