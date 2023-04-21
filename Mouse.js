import React, { useState } from "react";
import "./head.css";

const Mouse = () => {
  const [open, Setopen] = useState(false);
  const menus = ["whitebeard", "Blackbeard", "kaido", "lily", "Redhat"];
  return (
    <div className="luffy">
      <h1>yo! click this ----</h1>
      <button
        onMouseEnter={() => Setopen(!open)}
        onMouseLeave={() => Setopen(!open)}
      >
        GOMU GOMU NOMI
      </button>
      {open && (
        <div className="roronoa">
          <ul>
            {menus.map((men) => (
              <li key={men}>{men}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Mouse;
