import React from "react";
import ReactMarkdown from "react-markdown";
import {
  attributes,
  react as HomeContent,
} from "../content/solution_details.md";

export default function solution() {
  let { description } = attributes;
  return (
    <div className="prose mt-32">
      <ReactMarkdown>{description}</ReactMarkdown>
    </div>
  );
}
