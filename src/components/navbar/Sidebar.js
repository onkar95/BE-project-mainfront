import React, { useContext } from 'react'
import './nav.css'
import homeicon from '../../Assets/icons/homeicon.png'
import profile from '../../Assets/icons/profileicon.png'
import job from '../../Assets/icons/jobsicon.png'
// import messageicon from '../../Assets/icons/messageicon.png'
import { useNavigate } from 'react-router-dom'
import { DashboardContest } from '../../context'
import { useRef } from 'react'
import { useEffect } from 'react'

const Sidebar = () => {
    const { section, setSection, innerWidth, sideBarToggel, setSideBarToggel } = useContext(DashboardContest)
    const navigate = useNavigate()

    const handelClick = (val, route) => {
        sessionStorage.setItem('currentsection', val)
        setSection(val)
        navigate(route)
    }

    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                !event.target.classList.contains('toggle_button')
            ) {
                setSideBarToggel(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [setSideBarToggel]);


    return (
        <>

            {innerWidth <= 800 ?
                <nav ref={sidebarRef} className={sideBarToggel ? 'visible collapse_sidebar' : " none"}>
                    <div className='sidenav_items_div'>
                        <button onClick={() => handelClick(0, '/home')} className={section === 0 ? ' nav_item active' : 'nav_item'}>
                            <img className='side_nav_img' src={homeicon} alt='logo' />
                            <h3>Home</h3>
                        </button>
                        <button onClick={() => handelClick(1, '/profiledetail')} className={section === 1 ? ' nav_item active' : 'nav_item'}>
                            <img className='side_nav_img' src={profile} alt='logo' />
                            <h3>Profile</h3>
                        </button>
                        <button onClick={() => handelClick(2, '/job')} className={section === 2 ? ' nav_item active' : 'nav_item'}>
                            <img className='side_nav_img' src={job} alt='logo' />
                            <h3>Jobs</h3>
                        </button>
                        {/* <button onClick={() => handelClick(3, '/messages')} className={section === 3 ? ' nav_item active' : 'nav_item'}>
                            <img className='side_nav_img' src={messageicon} alt='logo' />
                            <h3>Messaging</h3>
                        </button> */}
                    </div>

                </nav> :
                <nav className=" side_nav">
                    <div className='sidenav_items_div'>
                        <button onClick={() => handelClick(0, '/home')} className={section === 0 ? ' nav_item active' : 'nav_item'}>
                            <img className='side_nav_img' src={homeicon} alt='logo' />
                            <h3>Home</h3>
                        </button>
                        <button onClick={() => handelClick(1, '/profiledetail')} className={section === 1 ? ' nav_item active' : 'nav_item'}>
                            <img className='side_nav_img' src={profile} alt='logo' />
                            <h3>Profile</h3>
                        </button>
                        <button onClick={() => handelClick(2, '/job')} className={section === 2 ? ' nav_item active' : 'nav_item'}>
                            <img className='side_nav_img' src={job} alt='logo' />
                            <h3>Jobs</h3>
                        </button>
                        {/* <button onClick={() => handelClick(3, '/messages')} className={section === 3 ? ' nav_item active' : 'nav_item'}>
                            <img className='side_nav_img' src={messageicon} alt='logo' />
                            <h3>Messaging</h3>
                        </button> */}
                    </div>

                </nav>
            }
        </>
    )
}

export default Sidebar


