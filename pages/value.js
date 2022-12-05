import React from "react";
import { attributes, react as HomeContent } from "../content/value.md";
import MarkdownWrapper from "../components/markdownWrapper";

export default function value() {
  let { body } = attributes;
  return (
    <div className="mt-32">
      <MarkdownWrapper>{body}</MarkdownWrapper>
    </div>
  );
}
