import React from "react";
import { Link } from "react-router-dom";

function TestCard({ test, testLevel }) {
  return (
    <div className="test-card">
      <h2 id="test-card-heading">{test.title}</h2>
      <p id="test-card-metadata">
        ⌛ {test.time} 🔥 {test.level}
      </p>
      <p id="test-card-description">{test.description}</p>
      <div id="test-card-btn-container">
        <Link to={testLevel === 1 ? "https://basic-mcq-test.vercel.app" : "/take-home"} target={testLevel === 1 ? "_blank" : ""} state={{ test: test }} id="test-card-link">
          <button className="test-card-btn" >Start Test</button>
        </Link>
      </div>
    </div>
  );
}

export default TestCard;
