import React from "react";
import { Link } from "react-router-dom";

function TestCard({ test, testLevel }) {
  return (
    <div className="test-card">
      <h2 id="test-card-heading">{test.assignment_name}</h2>
      <p id="test-card-metadata">
        ⌛3 Days {test.time} 🔥 {test.assignment_level}
      </p>
      <p id="test-card-description">{test.description}</p>
      <div id="test-card-btn-container">
        {/* <Link to={testLevel === 1 ? "https://basic-mcq-test.vercel.app" : "/take-home"} target={testLevel === 1 ? "_blank" : ""} state={{ test: test }} id="test-card-link"> */}
        <Link to={testLevel === 1 ? "http://localhost:3002" : "/take-home"} target={testLevel === 1 ? "_blank" : ""} state={{ test: test }} id="test-card-link">
          <button className="test-card-btn" >Start Test</button>
        </Link>
      </div>
    </div>
  );
}

export default TestCard;
