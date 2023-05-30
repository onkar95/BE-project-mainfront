import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context";
import Loading from "../../utils/Loader/Loading";
import './takehomeassignment.css'
import downloadIcon from '../../../Assets/icons/download5.png'
import uploadIcon from '../../../Assets/icons/upload5.png'
import axios from 'axios'
import { BASE_URL } from "../../util";

const TakeHomeAssignment = () => {
  let { state } = useLocation();
  const [answerLink, setAnswerLink] = useState('');
  const { Token, user, VerifyLoading } = useContext(UserContext)

  const test = state.test;
  console.log(test)
  const navigate = useNavigate()

  const handleDownload = () => {
    const actualDate = new Date(Date.now());

    const dataObj = {
      student_id: user.id,
      assignment_id: test.id,
      assignment_started_date: actualDate
    }
    console.log(dataObj)

    const config = {
      Headers: { "x-access-token": Token }
    }
    axios.post(`${BASE_URL}/api/assignment/download`, dataObj, config)
      .then((res) => {
        console.log(res.data)
        window.open(`${test.assignment_url}`, '_blank')
      })
      .catch((err) => console.log(err.message))

  }

  const handleChange = (e) => {
    setAnswerLink(e.target.value);
    console.log(e.target.value);
  };

  const handleUpload = () => {
    //makes a post call to the api for downloading the assignment zip.
    console.log(answerLink);
    // const THA_URL = 'localhost:5000';

    // axios.post(THA_URL, {
    //   testId: test.id,
    // })
    // .then(function (response) {
    //   //save the zip file to the downloads folder
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  console.log("first", VerifyLoading)
  return (
    <>
      {VerifyLoading ? <Loading /> :
        <div className="take-home-assignment-container">
          <div className="test-details-section">
            <h2 id="test-details-heading">{test.assignment_name}</h2>
            <p id="test-details-description">{test.description}</p>
            <p id="test-details-metadata">
              ⌛ 3 Days{test.time}   🔥 {test.assignment_level}
            </p>
          </div>
          <div className="test-process-section">
            <h2 id="test-details-heading">Steps to Complete</h2>
            <p id="test-details-description">Complete these steps to complete this Take Home Assignment Test</p>
            <div className="flow-cards-container">
              <div className="flow-card">
                <div className="flow-card-icon-container icon1">
                  <img src={downloadIcon} className="flow-card-icon" alt="download-icon"></img>
                </div>
                <div className="flow-card-content card1">
                  <h3 id="flow-card-heading">Download the Assignment</h3>
                  <p id="flow-card-description">Download the zip file of the assignment to get the problem statement, skeleton project, and all the necessary assets. Clicking download will start your timer for the assignment.</p>
                  <button className="secondary-btn" onClick={handleDownload}>Download</button>
                </div>
              </div>
              <div className="flow-card">
                <div className="flow-card-icon-container icon2">
                  <img src={uploadIcon} className="flow-card-icon" alt="download-icon"></img>
                </div>
                <div className="flow-card-content card2">
                  <h3 id="flow-card-heading">Upload the Assignment Link</h3>
                  <p id="flow-card-description">After downloading the assginment, initialize a private GitHub repo and work on the assignment. Finally upload the GitHub link for your repository.</p>
                  <span id="upload-field-container">
                    <input
                      type="text"
                      className="url-upload-input"
                      placeholder="Paste the link here"
                      value={answerLink}
                      onChange={handleChange}
                    />
                    <button className="secondary-btn" onClick={handleUpload}>Upload</button>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>}
    </>
  );
};

export default TakeHomeAssignment;
