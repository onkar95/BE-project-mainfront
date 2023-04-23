import React from "react";
import { testData } from "../data/testData";
import TestCard from "./TestCard";
import './home.css'


//a dummy list of exams which will be populated using the backend
// in the future.
const tests = testData;

function TestCardSection() {
    return (
      <div>
        <h1 className="test-card-section-heading"> Curated Tests For You...</h1>
        <div className="test-card-container">
        {tests.map((test) => (
        <TestCard key={test.title} test={test} />
      ))}
      </div>
      </div>
    );
  }
  
export default TestCardSection;