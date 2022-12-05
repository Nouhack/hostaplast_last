import React from "react";
import { attributes, react as HomeContent } from "../content/advantages.md";
import MarkdownWrapper from "../components/markdownWrapper";

export default function Advantages() {
  let { content } = attributes;
  return <MarkdownWrapper>{content}</MarkdownWrapper>;
}
