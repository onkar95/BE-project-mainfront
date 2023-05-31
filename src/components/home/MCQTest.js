import React, { useEffect, useContext } from 'react'
import { AssignmentContext, UserContext } from '../../context'
import { BASE_URL } from '../util'
import TestCard from './TestCard'
import axios from 'axios'

const test = {
    test_id: '12345',
    assignment_name: "Basic MCQ test",
    description: "This is the basic MCQ test based on general Aptitude questions",
    time: "60 mins",
    level: "easy",

}
const MCQTest = () => {

    const { Token } = useContext(UserContext)
    const { setMcqQuestions } = useContext(AssignmentContext)


    useEffect(() => {
        const getQuestions = () => {
            const config = {
                Headers: { "x-access-token": Token }
            }
            axios.get(`${BASE_URL}/api/questions/allquestions`, config)
                .then((res) => {
                    console.log(res.data)
                    setMcqQuestions(res.data.data)
                    // window.open(`${test.assignment_url}`, '_blank')
                })
                .catch((err) => console.log(err.message))

        }
        getQuestions()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h1 className="test-card-section-heading"> General MCQ Test</h1>
            <div className="test-card-container">
                <TestCard key={test.title} test={test} testLevel={1} />
            </div>
        </div>
    )
}

export default MCQTest