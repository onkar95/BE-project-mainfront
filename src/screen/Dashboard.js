import React, { useContext } from 'react'
import Home from '../components/home/Home'
import Jobs from '../components/jobs/Jobs'
import Message from '../components/Messages/Message'
import Sidebar from '../components/navbar/Sidebar'
import Profile from '../components/profile/Profile'
import DashboardContest from '../context/dashboardContext'
import { ProfileDataProvider } from '../context/profileContext'

const Dashboard = () => {
    const { section } = useContext(DashboardContest)

    // const navigate = useNavigate()
    // useEffect(() => {
    //     if (false) {
    //         return navigate('/')
    //     } else {
    //         return navigate('/login')
    //     }
    //     // eslint-disable-next-line
    // }, [])


    return (
        <div className='App'>
            {/* <div className='header_sidebar'>
                <Header />
            </div> */}
            <div className='components'>
                <Sidebar />

                {section === 0 ? <Home /> : ""}
                {section === 1 ? <ProfileDataProvider><Profile /></ProfileDataProvider> : ""}
                {section === 2 ? <Jobs /> : ""}
                {section === 3 ? <Message /> : ""}

            </div>
        </div>
    )
}

export default Dashboard