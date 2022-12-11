import React from "react";
import { attributes, react as HomeContent } from "../content/value.md";
import MarkdownWrapper from "../components/markdownWrapper";
import ReactMarkdown from "react-markdown";

export default function value() {
  let { body } = attributes;

  return (
    <div className="prose mt-32">
      <ReactMarkdown>{body}</ReactMarkdown>
    </div>
  );
}
