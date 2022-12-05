import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { attributes, react as HomeContent } from "../../../content/news.md";
import ReactMarkdown from "react-markdown";

const Post = () => {
  const [value, setvalue] = useState("");
  useEffect(() => {
    setvalue(news.filter((item) => item.slug == slug)[0].content);
  }, []);

  let { news } = attributes;

  const router = useRouter();
  const { slug } = router.query;

  return <ReactMarkdown>{value}</ReactMarkdown>;
};

export default Post;
