import React from 'react'
import Education from './Education'
import Experience from './Experience'
import Preferences from './Preferences'
import Skill from './Skill'
import './profile.css'
import { useContext } from 'react'
import ProfileContext from '../../context/profileContext'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import './profileDetail/profile.css'

const Profile = () => {
    const { selected, setSelected } = useContext(ProfileContext);
    const handelClick = (val) => {
        setSelected(val)
    }
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
    }


    return (
        <div className='edit_profile'>
            <div className="profile-container-header-title">
                <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={navigateBack} />
            </div>
            < div className='profile' >
                <div className='profile_nav'>
                    <button onClick={() => handelClick(0)}>Skills</button>
                    <button onClick={() => handelClick(1)}>Experience</button>
                    <button onClick={() => handelClick(2)}>Education</button>
                    <button onClick={() => handelClick(3)}>Preferences</button>
                </div>
                <div className='profileCompo'>
                    {selected === 0 ? < Skill /> : ""}
                    {selected === 1 ? <Experience /> : ""}
                    {selected === 2 ? <Education /> : ""}
                    {selected === 3 ? <Preferences /> : ""}
                </div>
            </div >

        </div>
    )
}

export default Profile