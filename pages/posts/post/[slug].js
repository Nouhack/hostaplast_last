import React, { useState, useEffect } from "react";
import MarkdownWrapper from "../../../components/markdownWrapper";
import { useRouter } from "next/router";
import { attributes, react as HomeContent } from "../../../content/news.md";

const Post = () => {
  const [value, setvalue] = useState("");
  useEffect(() => {
    try {
      setvalue(news.filter((item) => item.slug == slug)[0].content);
    } catch (error) {
      console.log("none");
    }
  }, []);
  let { news } = attributes;
  const router = useRouter();
  const { slug } = router.query;

  return <MarkdownWrapper>{value}</MarkdownWrapper>;
};

export default Post;
