import React from "react";
import Markdown from "marked-react";

export default function Wrapper({ children }) {
  return <Markdown>{children}</Markdown>;
}
