import React from "react";
import {
  attributes,
  react as HomeContent,
} from "../content/solution_details.md";

export default function solution() {
  let { description } = attributes;
  return (
    <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
      {description}
    </div>
  );
}
