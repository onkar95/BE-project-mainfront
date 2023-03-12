import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './nav.css'
import homeicon from '../../Assets/icons/homeicon.png'
import profile from '../../Assets/icons/profileicon.png'
import job from '../../Assets/icons/jobsicon.png'
import messageicon from '../../Assets/icons/messageicon.png'

const Sidebar = () => {

    const [selected, setselected] = useState(0)
    const navigate = useNavigate()

    const handelClick = (val, route) => {
        setselected(val)
        navigate(route)
    }
    return (
        <nav className='side_nav'>
            <div className='sidenav_items_div'>
                <button onClick={() => handelClick(0, '/')} className={selected === 0 ? ' nav_item active' : 'nav_item'}>
                    <img className='side_nav_img' src={homeicon} alt='logo' />
                    <h3>Home</h3>
                </button>
                <button onClick={() => handelClick(1, '/profile')} className={selected === 1 ? ' nav_item active' : 'nav_item'}>
                    <img className='side_nav_img' src={profile} alt='logo' />
                    <h3>Profile</h3>
                </button>
                <button onClick={() => handelClick(2, '/jobs')} className={selected === 2 ? ' nav_item active' : 'nav_item'}>
                    <img className='side_nav_img' src={job} alt='logo' />
                    <h3>Jobs</h3>
                </button>
                <button onClick={() => handelClick(3, '/messages')} className={selected === 3 ? ' nav_item active' : 'nav_item'}>
                    <img className='side_nav_img' src={messageicon} alt='logo' />
                    <h3>Messaging</h3>
                </button>
            </div>
            <div >
                <p>Refer and Win</p>
            </div>
        </nav>
    )
}

export default Sidebar