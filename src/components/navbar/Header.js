import React from 'react'
import './nav.css'
import img from '../../Assets/img.jpg'
import notification from '../../Assets/icons/noticon.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='header_logo'>
                <img className='logo_img' src={img} alt="logo" />
                <p>UpLevel</p>
            </div>
            <div className='header_right'>
                <img className='noti_img' src={notification} alt="notification" />
                <img className='profile_img' src={img} alt="profile" />
            </div>

        </div>
    )
}

export default Header