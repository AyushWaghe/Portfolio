import React from "react";

export function TagCloud({ items }) {
  return (
    <div className="tag-cloud compact">
      {items.map((item) => <span key={item}>{item}</span>)}
    </div>
  );
}
