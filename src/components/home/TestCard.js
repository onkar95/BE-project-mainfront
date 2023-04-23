import React from "react";

function TestCard({ test }) {
  return (
    <div className="test-card">
      <h2 id="test-card-heading">{test.title}</h2>
      <p id="test-card-metadata">⌛ {test.time}  🔥 {test.level}</p>
      <p id="test-card-description">{test.description}</p>
      <div id="test-card-btn-container">
        <button className="test-card-btn"> Start Test </button>
      </div>
    </div>
  );
}

export default TestCard;
