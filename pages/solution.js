import React from "react";
import {
  attributes,
  react as HomeContent,
} from "../content/solution_details.md";

export default function solution() {
  let { description } = attributes;
  return <div className="mt-32">{description}</div>;
}
