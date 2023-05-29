import React, { useContext } from "react";
import Dropdown from "../elements/Dropdown";
import "./profilesections.css";
import ProfileContext from "../../context/profileContext";
import {
  EmployeeSizeData,
  LocationsData,
  remoteOfficeData,
  SalaryRangeData,
  TypeOfJobsData,
} from "../data/DropdownData";
import axios from "axios";
import { BASE_URL } from "../util";
import { UserContext } from "../../context";

const Preferences = () => {
  const { EmployeeSize, Locations, remoteOffice, SalaryRange, TypeOfJobs } =
    useContext(ProfileContext);

  const { user, Token } = useContext(UserContext);

  const handelSave = () => {
    const dataobj = {
      job_seeking: remoteOffice,
      job_type: TypeOfJobs,
      job_location: Locations,
      company_size: EmployeeSize,
      desired_salary: SalaryRange,
      user_id: user.id,
    };
    console.log(dataobj);

    const config = {
      Headers: { "x-access-token": Token }
    }
    axios.post(`${BASE_URL}/api/profile/savepreferences`, dataobj, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message))
  };

  //   const handleSkip = () => {
  //     move to the final profile
  //   };

  return (
    <div className="preferences">
      <div className="fields">
        <p>What Type of Job are you seeking?</p>
        <Dropdown data={TypeOfJobsData} type="TypeOfJobs" />
      </div>
      <div className="fields">
        <p>Do you prefer Remote or Office Job?</p>
        <Dropdown data={remoteOfficeData} type="remoteOffice" />
      </div>
      <div className="fields">
        <p>Select Job Location</p>
        <Dropdown data={LocationsData} type="Locations" />
      </div>
      <div className="fields">
        <p>What size of the companies you prefer most?</p>
        <Dropdown data={EmployeeSizeData} type="EmployeeSize" />
      </div>
      <div className="fields">
        <p>Select Desired Salary Range</p>
        <Dropdown data={SalaryRangeData} type="SalaryRange" />
      </div>
      <div className="skills_btn">
        {/* <button className="btn_1" onClick={() => handleSkip()}>
          Skip
        </button> */}
        <button className="btn_2" onClick={() => handelSave()}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Preferences;
