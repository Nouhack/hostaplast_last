import React from "react";
import { attributes, react as HomeContent } from "../content/value.md";

export default function value() {
  let { body } = attributes;
  return <div className="mt-32">{body}</div>;
}
