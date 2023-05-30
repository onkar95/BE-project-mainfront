import React from "react";
import { testData } from "../data/testData";
import TestCard from "./TestCard";
import './home.css'
import axios from 'axios'
import { AssignmentContext, UserContext } from "../../context";
import { useContext } from "react";
import { BASE_URL } from "../util";
import { useEffect } from "react";
//a dummy list of exams which will be populated using the backend
// in the future.
const tests = testData;

function TestCardSection() {
  const { user, Token } = useContext(UserContext);
  const { TakeHomeAssignments, setTakeHomeAssignments } = useContext(AssignmentContext);

  const getAssignments = () => {
    const config = {
      Headers: { "x-access-token": Token }
    }
    axios.get(`${BASE_URL}/api/assignment/getassignments`, config)
      .then((res) => {
        console.log(res.data)
        setTakeHomeAssignments(res.data.assignments)
      })
      .catch((err) => console.log(err.message))
  }

  useEffect(() => {
    getAssignments()
  }, [])


  return (
    <div>
      <h1 className="test-card-section-heading"> Curated Tests For You...</h1>
      <div className="test-card-container">
        {TakeHomeAssignments && TakeHomeAssignments.map((test) => (
          <TestCard key={test.assignment_name} test={test} />
        ))}
      </div>
    </div>
  );
}

export default TestCardSection;