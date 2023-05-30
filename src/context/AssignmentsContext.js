import { useState } from "react";
import { createContext } from "react";

export const AssignmentContext = createContext(null)

export const AssignmentDataProvider = ({ children }) => {
    const [TakeHomeAssignments, setTakeHomeAssignments] = useState([])
    const [McqQuestions, setMcqQuestions] = useState([])
    return (
        <AssignmentContext.Provider value={{
            TakeHomeAssignments, setTakeHomeAssignments,
            McqQuestions, setMcqQuestions
        }}>
            {children}
        </AssignmentContext.Provider>
    )
}


