import React from 'react'
import TestCard from './TestCard'

const test = {
    test_id: '12345',
    assignment_name: "Basic MCQ test",
    description: "This is the basic MCQ test based on general Aptitude questions",
    time: "60 mins",
    level: "easy",

}
const MCQTest = () => {
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