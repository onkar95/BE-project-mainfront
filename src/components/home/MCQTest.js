import React from 'react'
import TestCard from './TestCard'

const test = {
    test_id: '12345',
    title: "Basic MCQ test",
    description: "This is the first test This is the first test This is the first test This is the first test",
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