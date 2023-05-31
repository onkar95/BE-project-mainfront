import React, { useContext } from "react";
import "./job.css";
import JobPostingsCard from "./JobPostingCard";
import { JobContext } from "../../context";

const JobPostingsContent = ({ jobPostingsFlag }) => {
  const { jobs, setjobs, } = useContext(JobContext)
  console.log(jobs)

  return (
    <div className="job-postings-content-container">
      {jobPostingsFlag ? (
        <div className="active-job-postings-container">

          {jobs && jobs?.map((item) => (
            <JobPostingsCard key={item.id} {...item} />
          ))}

        </div>
      ) : (
        <div className="recently-filled-job-postings-container">Recently Filled</div>
      )}
    </div>
  );
};

export default JobPostingsContent;
