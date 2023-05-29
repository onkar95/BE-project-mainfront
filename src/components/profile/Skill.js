import React, { useContext } from "react";
import Dropdown from "../elements/Dropdown";
import "./profilesections.css";
import close from "../../Assets/icons/close.png";
import ProfileContext from "../../context/profileContext";
import { Roles, skills } from "../data/DropdownData";
import axios from "axios";
import { BASE_URL } from "../util";
import { UserContext } from "../../context";

const Skill = () => {
  // EmployeeSize, Locations, remoteOffice, SalaryRange, TypeOfJobs
  const { selectedSkills, selectedRoles, handelRemove, PrimaryRole, setSelectedSkills, setSelectedRoles } =
    useContext(ProfileContext);
  const { setSelected, setSelectedDropdownVal } = useContext(ProfileContext);
  const { user, Token } = useContext(UserContext);
  const handleSkip = () => {
    setSelected(1);
  };

  const handelSave = () => {
    // skill, role, willing_role, user_id 
    const dataobj = {
      role: PrimaryRole,
      willing_role: selectedRoles,
      skill: selectedSkills,
      user_id: user.id
    };
    console.log(dataobj);
    const config = {
      Headers: { "x-access-token": Token }
    }

    axios
      .post(`${BASE_URL}/api/profile/saveskills`, dataobj, config)
      .then((res) => {
        console.log(res.data)
        alert("res.data")
      })
      .catch((err) => console.log(err.message));
    setSelectedDropdownVal('select')
    setSelectedSkills([])
    setSelectedRoles([])
  };
  return (
    <div className="skills">
      <div className="fields">
        <p>Select a skill</p>
        <Dropdown data={skills} type="skills" />
      </div>
      {selectedSkills.length !== 0 ? (
        <div className="selected_skills">
          {selectedSkills?.map((val) => (
            <div className="selected_roles_val">
              <p>{val} </p>
              <img
                src={close}
                alt="loading"
                onClick={() => handelRemove(val, "skills")}
              />
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      <div className="fields">
        <p>Select your Primary Role</p>
        <Dropdown data={Roles} type="Role" />
      </div>
      <div className="fields">
        <p>Roles you are willing to take</p>
        <Dropdown data={Roles} type="Roles" />
      </div>
      <div className="selected_roles">
        {selectedRoles?.map((val) => (
          <div className="selected_roles_val">
            <p>{val} </p>
            <img
              src={close}
              alt="loading"
              onClick={() => handelRemove(val, "Roles")}
            />
          </div>
        ))}
      </div>
      <div className="skills_btn">
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

export default Skill;
