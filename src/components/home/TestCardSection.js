import React from "react";
import TestCard from "./TestCard";
import './home.css'
import axios from 'axios'
import { AssignmentContext, UserContext } from "../../context";
import { useContext } from "react";
import { BASE_URL } from "../util";
import { useEffect } from "react";
import Loading from "../utils/Loader/Loading";
//a dummy list of exams which will be populated using the backend
// in the future.

function TestCardSection() {
  const { Token } = useContext(UserContext);
  const { TakeHomeAssignments, setTakeHomeAssignments, assignmentLoading, setassignmentLoading } = useContext(AssignmentContext);



  useEffect(() => {
    const getAssignments = () => {
      const config = {
        Headers: { "x-access-token": Token }
      }
      setassignmentLoading(true)
      axios.get(`${BASE_URL}/api/assignment/getassignments`, config)
        .then((res) => {
          setassignmentLoading(false)
          console.log(res.data)
          setTakeHomeAssignments(res.data.assignments)
        })
        .catch((err) => {
          setassignmentLoading(false)
          console.log(err.message)
        })
    }
    getAssignments()
    // eslint-disable-next-line
  }, [])


  return (
    <div>
      {assignmentLoading ? <Loading /> :
        <>  <h1 className="test-card-section-heading"> Curated Tests For You...</h1>
          <div className="test-card-container">
            {TakeHomeAssignments && TakeHomeAssignments.map((test) => (
              <TestCard key={test.assignment_name} test={test} />
            ))}
          </div>
        </>}
    </div>
  );
}

export default TestCardSection;