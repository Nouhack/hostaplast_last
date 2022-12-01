import React from "react";
import { attributes, react as HomeContent } from "../content/solution.md";

export default function solution() {
  let { body } = attributes;
  return (
    <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
      {body}
    </div>
  );
}
