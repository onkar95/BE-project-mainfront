import React from "react";
import "./job.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import { useNavigate } from "react-router-dom";


const JobPostingsCard = ({ id, title, date, skills, budget, applicants, shortlisted, interviewed }) => {
  const navigate = useNavigate();
  let exactDate = date.slice(0, 10)

  const navigateToPostingDetail = () => {
    navigate(`/posting/${id}`);
  }

  const removeThisItem = (e, id) => {
    e.stopPropagation();
  }

  return (
    <div className="job-postings-card-container" onClick={navigateToPostingDetail}>
      <div className="job-postings-card-header">
        <h3>{title} <span style={{ fontSize: "0.9em", fontWeight: "300", color: "#333", marginLeft: "12px" }} >{exactDate}</span></h3>
        <div className="job-postings-card-actions-container">
          <div className="job-postings-card-action-item">
            <EditOutlinedIcon />
          </div>
          <div className="job-postings-card-action-item">
            <DeleteOutlineOutlinedIcon onClick={(e) => removeThisItem(e, id)} />
          </div>
        </div>
      </div>
      <div className="job-postings-card-body">
        <div className="job-postings-stats-container">
          <div className="job-postings-stats-card">
            <AttachMoneyOutlinedIcon style={{ fontSize: 40 }} />
            <div className="job-postings-stats-text">
              <p className="job-postings-stats-text-heading">Budget</p>
              <p className="job-postings-stats-text-subtitle">
                {budget}
              </p>
            </div>
          </div>
          <div className="job-postings-stats-card">
            <CalendarMonthOutlinedIcon style={{ fontSize: 40 }} />
            <div className="job-postings-stats-text">
              <p className="job-postings-stats-text-heading">Skills</p>
              <p className="job-postings-stats-text-subtitle">
                {
                  skills.map((skill) => <span>{skill}</span>)
                }
              </p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="job-postings-metadata-container">
          <div className="job-postings-metadata-card">
            <p className="job-postings-metadata-text-heading">{applicants}</p>
            <p className="job-postings-metadata-text-subtitle">
              Applicants
            </p>
          </div>
          <div className="job-postings-metadata-card">
            <p className="job-postings-metadata-text-heading">{shortlisted}</p>
            <p className="job-postings-metadata-text-subtitle">
              Shortlisted
            </p>
          </div>
          <div className="job-postings-metadata-card">
            <p className="job-postings-metadata-text-heading">{interviewed}</p>
            <p className="job-postings-metadata-text-subtitle">
              Interviewed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostingsCard;