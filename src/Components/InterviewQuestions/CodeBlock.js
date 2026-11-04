import React from "react";

const CodeBlock = ({ children }) => (
  <pre
    style={{
      background: "#f4f4f4",
      padding: "12px",
      borderRadius: "4px",
      overflowX: "auto",
    }}
  >
    <code>{children}</code>
  </pre>
);

export default CodeBlock;
