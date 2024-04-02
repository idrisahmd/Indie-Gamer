import React from "react";

export default function Heading({ children }) {
  return (
    <div className={`font-bold font-orbitron text-2xl pb-3 `}>{children}</div>
  );
}
