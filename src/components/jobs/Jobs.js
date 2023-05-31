import React, { useState } from 'react'
import mockActiveJobsList from '../data/mockActiveJobsList'
import axios from "axios"
import { useEffect } from 'react'
import { useContext } from 'react'
import { JobContext, UserContext } from '../../context'
import "./job.css"
import JobPostingsContent from './JobPostingsContent'
import { BASE_URL } from '../util'
import Loading from '../utils/Loader/Loading'

const Jobs = () => {
    const { user, Token } = useContext(UserContext)
    const [activeFlag, setActiveFlag] = useState(true);
    const { jobs, setjobs, jobsLoading, setjobsLoading } = useContext(JobContext)

    useEffect(() => {

        const getShortlistedJobd = () => {
            setjobsLoading(true)
            axios.post(`${BASE_URL}/api/hr/shortlistedjobs`, { user_id: user?.id })
                .then((res) => {
                    setjobs(res.data.data)
                    console.log(res.data)
                    setjobsLoading(false)
                })
                .catch((err) => {
                    setjobsLoading(false)
                    console.log(err.message)
                })
        }
        getShortlistedJobd()
    }, [])


    return (
        <>

            {jobsLoading
                ?
                <Loading />

                : <div className="home-container">
                    <div className="job-postings-container">
                        <h1 className="test-card-section-heading">Shortlisted jobs  </h1>
                        <div></div>
                        {jobs?.length === 0 ?
                            <div> No jobs to show</div> :
                            <div className="job-postings-content">
                                <JobPostingsContent jobPostingsFlag={activeFlag} />
                            </div>}

                    </div>
                </div>}
        </>
    )
}

export default Jobs