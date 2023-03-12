import React, { useState } from 'react'
import Education from './Education'
import Experience from './Experience'
import Preferences from './Preferences'
import Skill from './Skill'
import './profile.css'


const Profile = () => {
    const [selected, setselected] = useState(0);
    const handelClick = (val) => {
        setselected(val)
    }
    return (
        <div className='profile'>
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
        </div>
    )
}

export default Profile