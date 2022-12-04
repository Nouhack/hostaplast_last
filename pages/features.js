import React from "react";
import { attributes, react as HomeContent } from "../content/features.md";

export default function features() {
  let { description } = attributes;
  return <div className="mt-32">{description}</div>;
}
