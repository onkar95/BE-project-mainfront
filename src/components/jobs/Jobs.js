import React from 'react'
import mockActiveJobsList from '../data/mockActiveJobsList'

const Jobs = () => {

    return (
        <div>
            <h1 className="test-card-section-heading"> Curated Tests For You...</h1>
            <div>
                {mockActiveJobsList && mockActiveJobsList.map((val, key) => (
                    <div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Jobs