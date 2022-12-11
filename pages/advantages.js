import React from "react";
import { attributes, react as HomeContent } from "../content/advantages.md";
import MarkdownWrapper from "../components/markdownWrapper";
import ReactMarkdown from "react-markdown";

export default function Advantages() {
  let { content } = attributes;

  return (
    <div className="prose mt-32">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
