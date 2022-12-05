import React from "react";
import { useRouter } from "next/router";
import { attributes, react as HomeContent } from "../../../content/news.md";

const Post = () => {
  let { news } = attributes;

  const router = useRouter();
  const { slug } = router.query;
  const specefied_data = news.filter((item) => item.slug === slug);

  return <div>{specefied_data.content}</div>;
};

export default Post;
