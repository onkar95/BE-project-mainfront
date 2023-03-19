import React from 'react'
import './nav.css'
import img from '../../Assets/img.jpg'
import notification from '../../Assets/icons/noticon.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='header'>
            <div className='header_logo' onClick={() => navigate('/')}>
                <img className='logo_img' src={img} alt="logo" />
                <p>UpLevel</p>
            </div>

            <div className='header_right'>
                <img className='noti_img' src={notification} alt="notification" />
                {false ? <img className='profile_img' src={img} alt="profile" /> :
                    <div>
                        <button onClick={() => navigate('/login')}>signup</button>
                        <button onClick={() => navigate('/register')}>signin</button>
                    </div>
                }
            </div>


        </div>
    )
}

export default Header