import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context";
import ProfileContext from "../../context/profileContext";
import { BASE_URL } from "../util";
import "./profilesections.css";

const Experience = () => {
  const dateToday = new Date().toISOString().slice(0, 10);

  const [company, setCompany] = useState("");
  const [JobTitle, setJobTitle] = useState("");
  const [DateFrom, setDateFrom] = useState(dateToday);
  const [DateTo, setDateTo] = useState(dateToday);
  const [Description, setDescription] = useState("");

  const { setSelected } = useContext(ProfileContext);
  const { user, Token } = useContext(UserContext);

  const handleSkip = () => {
    setSelected(2);
  };

  const handelSave = () => {
    const dataobj = {
      company_name: company,
      job_title: JobTitle,
      start_date: DateFrom,
      end_date: DateTo,
      job_description: Description,
      user_id: user?.id,
    };

    console.log(dataobj);

    const config = {
      Headers: { "x-access-token": Token }
    }
    axios.post(`${BASE_URL}/api/profile/saveexperience`, dataobj, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message))
  };
  return (
    <div className="experience">
      <div className="form_itm">
        <label className="label">Enter Company Name</label>
        <input
          className="input"
          type="text"
          value={company}
          onChange={(a) => setCompany(a.target.value)}
        />
      </div>
      <div className="form_itm">
        <label className="label">Enter Job Title</label>
        <input
          className="input"
          type="text"
          value={JobTitle}
          onChange={(a) => setJobTitle(a.target.value)}
        />
      </div>
      <div className="form_itm">
        <label className="label">Start Date and End Date</label>
        <div className="date_inp">
          <input
            className="input date"
            type="date"
            value={DateFrom}
            onChange={(a) => setDateFrom(a.target.value)}
            max={DateTo}
          />
          <input
            className="input date"
            type="date"
            value={DateTo}
            onChange={(a) => setDateTo(a.target.value)}
            max={dateToday}
            min={DateFrom}
          />
        </div>
      </div>
      <div className="form_itm">
        <label className="label">Enter Job Description</label>
        <textarea
          className="input"
          type="text"
          value={Description}
          onChange={(a) => setDescription(a.target.value)}
          rows={2}
        />
      </div>
      <div className="edu_btn">
        <button className="btn_1" onClick={() => handleSkip()}>
          Skip
        </button>
        <button className="btn_2" onClick={() => handelSave()}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Experience;
