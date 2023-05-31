import React from "react";
import "./profile.css";


import goldBadgeIcon from "../../../Assets/icons/gold_badge.png";
import defaultCompanyImg from "../../../Assets/companyimg.png";
import profileImg from "../../../Assets/femaleprofile.png";

import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { BASE_URL } from "../../util";
import { useContext } from "react";
import { ProfileContext, UserContext } from "../../../context";
import { useEffect, useState } from "react";
import Loading from "../../utils/Loader/Loading";


const ProfileScreen = () => {
  const navigate = useNavigate();


  const ShowEdit = () => {
    navigate('/profile');
  }
  const { user, Token } = useContext(UserContext);
  const { userProfile, setuserProfile } = useContext(ProfileContext);
  const [isLoading, setLoading] = useState(false)

  const getuserProfile = () => {
    const config = {
      Headers: { "x-access-token": Token }
    }
    setLoading(true)
    axios.post(`${BASE_URL}/api/profile/userdetailsbyid`, { userId: user?.id }, config)
      .then((res) => {
        setuserProfile(res.data.data)
        console.log(res.data)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err.message)
      })
  }

  useEffect(() => {
    getuserProfile()
    // eslint-disable-next-line
  }, [])
  console.log(userProfile?.skill)
  // return (
  //   <div className="profile-container">
  //     <div className="profile-container-header">

  //       <div className="profile-container-header-action" onClick={() => ShowEdit()}>
  //         <EditIcon sx={{ cursor: "pointer" }} />
  //       </div>
  //     </div>
  //     <div className="profile-container-section-1">
  //       <div className="personal-profile-container">
  //         <img className="profile-picture" src={profileImg} alt="profile-pic" />
  //         <p className="profile-name">Mayur Mahajan</p>
  //         <p className="profile-bio">
  //           I am an enthusiastic developer. I treat my work with utmost
  //           devotion. I am always looking to learn new things and improve my
  //           skills.
  //         </p>
  //       </div>
  //       <div className="preferences-container">
  //         <div className="preferences-header">
  //           <p className="preferences-heading">Preferences</p>
  //         </div>
  //         <div className="preference-listview">
  //           {mockPreferenceTileList.map((item) => (
  //             <PreferenceTile {...item} />
  //           ))}
  //         </div>
  //       </div>
  //     </div>

  //     <div className="profile-container-section-2">
  //       <div className="profile-badges-container">
  //         <p className="profile-labels">Badges</p>
  //         <div className="profile-badges-listview-container">
  //           <div className="profile-badges-listview">
  //             {mockBadgesList.map((item) => (
  //               <BadgesCertificate {...item} />
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="profile-experience-container">
  //       <p className="profile-labels">Experience</p>
  //       <div className="profile-education-listview">
  //         {mockExperienceList.map((item) => (
  //           <ExperienceCard {...item} />
  //         ))}
  //       </div>
  //     </div>
  //     <div className="profile-education-container">
  //       <p className="profile-labels">Education</p>
  //       <div className="profile-education-listview">
  //         {mockEducationList.map((item) => (
  //           <EducationCard {...item} />
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <>
      {isLoading ?
        <Loading /> :
        userProfile?.skill === null ?
          <div className="empty_profile">
            <div> <h2>Complete your profile first to procced</h2></div>
            <div onClick={() => ShowEdit()}> <EditIcon sx={{ cursor: "pointer" }} /></div>

          </div> :
          <div className="profile-container">
            <div className="profile-container-header">
              <div className="profile-container-header-action" onClick={() => ShowEdit()}>
                <EditIcon sx={{ cursor: "pointer" }} />
              </div>
            </div>
            <div className="profile-container-section-1">
              <div className="personal-profile-container">
                <img className="profile-picture" src={profileImg} alt="profile-pic" />
                <p className="profile-name">{userProfile?.username}</p>
                <p className="profile-bio">
                  I am an enthusiastic developer. I treat my work with utmost
                  devotion. I am always looking to learn new things and improve my
                  skills.
                </p>
              </div>
              <div className="preferences-container">
                <div className="preferences-header">
                  <p className="preferences-heading">Preferences</p>
                </div>
                <div className="preference-listview">
                  <PreferenceTile {...userProfile} />
                  {/* {mockPreferenceTileList.map((item) => (
                ))} */}
                </div>
              </div>
            </div>

            <div className="profile-container-section-2">
              <div className="profile-badges-container">
                <p className="profile-labels">Badges</p>
                <div className="profile-badges-listview-container">
                  <div className="profile-badges-listview">
                    {!userProfile?.badge_list ||

                      userProfile?.badge_list.length === 0 ? <div> No badges Assigned</div>
                      :
                      userProfile?.badge_list.map((item, index) => (
                        <BadgesCertificate item={item} index={index} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
            {userProfile?.company_name ?
              <div className="profile-experience-container">
                <p className="profile-labels">Experience</p>
                <div className="profile-education-listview">
                  <ExperienceCard {...userProfile} />
                  {/* {mockExperienceList.map((item) => (
          ))} */}
                </div>
              </div> : ""}

            {/* <div className="profile-education-container">
        <p className="profile-labels">Education</p>
        <div className="profile-education-listview">
          {mockEducationList.map((item) => (
            <EducationCard {...item} />
          ))}
        </div>
      </div> */}
          </div>
      }
    </>

  );
};

const BadgesCertificate = ({ item, index }) => {
  return (
    <div className="badges-certificate">
      <img src={goldBadgeIcon} alt="badge" className="badge-certificate-icon" />
      <div>
        <p className="badge-certificate-title">{item}</p>
        {/* <p className="badge-certificate-subtitle">Issued on: {mockBadgesList[index]?.date}</p> */}
      </div>
    </div>
  );
};

const PreferenceTile = ({ job_seeking, job_location, company_size, desired_salary, willing_role }) => {
  return (
    <>
      <div className="preference-tile-card">
        <p className="preference-tile-label">What Type of Job are you seeking?</p>
        <p className="preference-tile-value">{job_seeking}</p>
      </div>
      <div className="preference-tile-card">
        <p className="preference-tile-label">What locations do you want to work at ?</p>
        <p className="preference-tile-value">{job_location}</p>
      </div>
      <div className="preference-tile-card">
        <p className="preference-tile-label">What size of the companies you prefer most?</p>
        <p className="preference-tile-value">{company_size}</p>
      </div>
      <div className="preference-tile-card">
        <p className="preference-tile-label">What salary are you looking for?</p>
        <p className="preference-tile-value">{desired_salary}</p>
      </div>
      <div className="preference-tile-card">
        <p className="preference-tile-label">Which role you are willing to work for?</p>
        <p className="preference-tile-value">{willing_role}</p>
      </div>
    </>
  );
};



const ExperienceCard = ({
  job_title,
  company_name,
  start_date,
  end_date,
  job_description,
}) => {
  return (
    <div className="experience-card">
      <div className="experience-card-company-img-container">
        <img
          className="experience-card-company-img"
          src={defaultCompanyImg}
          alt="company"
        />
      </div>
      <div className="experience-card-text-container">
        <p className="education-heading">{job_title}</p>
        <p className="education-card-university">{company_name}</p>
        <div className="education-card-date-container">
          <p className="education-card-date">{start_date} </p>~
          <p className="education-card-date"> {end_date}</p>
        </div>
        <p className="education-card-description">{job_description.slice(0, 100)}..</p>
      </div>
    </div>
  );
};

export default ProfileScreen;


// const BadgesCertificate = ({ title, date }) => {
//   return (
//     <div className="badges-certificate">
//       <img src={goldBadgeIcon} alt="badge" className="badge-certificate-icon" />
//       <div>
//         <p className="badge-certificate-title">{title}</p>
//         <p className="badge-certificate-subtitle">Issued on: {date}</p>
//       </div>
//     </div>
//   );
// };

// const PreferenceTile = ({ label, value }) => {
//   return (
//     <div className="preference-tile-card">
//       <p className="preference-tile-label">{label}</p>
//       <p className="preference-tile-value">{value}</p>
//     </div>
//   );
// };

// const EducationCard = ({
//   course,
//   university,
//   startdate,
//   enddate,
//   description,
// }) => {
//   return (
//     <div className="education-card">
//       <p className="education-heading">{course}</p>
//       <p className="education-card-university">{university}</p>
//       <div className="education-card-date-container">
//         <p className="education-card-date">{startdate}</p>
//         <p className="education-card-date">{enddate}</p>
//       </div>
//       <p className="education-card-description">{description}</p>
//     </div>
//   );
// };

// const ExperienceCard = ({
//   title,
//   imageSrc,
//   company,
//   startdate,
//   enddate,
//   description,
// }) => {
//   return (
//     <div className="experience-card">
//       <div className="experience-card-company-img-container">
//         <img
//           className="experience-card-company-img"
//           src={imageSrc === "" ? defaultCompanyImg : imageSrc}
//           alt="company"
//         />
//       </div>
//       <div className="experience-card-text-container">
//         <p className="education-heading">{title}</p>
//         <p className="education-card-university">{company}</p>
//         <div className="education-card-date-container">
//           <p className="education-card-date">{startdate} ~</p>
//           <p className="education-card-date">{enddate}</p>
//         </div>
//         <p className="education-card-description">{description}</p>
//       </div>
//     </div>
//   );
// };

