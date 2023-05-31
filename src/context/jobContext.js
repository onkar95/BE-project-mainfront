import { createContext, useState } from "react";

export const JobContext = createContext(null)

export const JobDataProvider = ({ children }) => {

    const [jobs, setjobs] = useState()
    const [jobDetail, setjobDetail] = useState()
    const [AllCandidate, setAllCandidate] = useState();
    const [ShortlistedCandidates, setShortlistedCandidates] = useState();
    const [HRJobs, setHRJobs] = useState()
    const [FilteredCandidate, setFilteredCandidate] = useState()
    const [exploreLoading, setexploreLoading] = useState(false)
    const [jobsLoading, setjobsLoading] = useState(false)


    return (
        <JobContext.Provider value={{
            jobs, setjobs,
            AllCandidate, setAllCandidate,
            HRJobs, setHRJobs,
            jobDetail, setjobDetail,
            ShortlistedCandidates, setShortlistedCandidates,
            FilteredCandidate, setFilteredCandidate,
            exploreLoading, setexploreLoading,
            jobsLoading, setjobsLoading
        }}>
            {children}
        </JobContext.Provider>
    )
}

