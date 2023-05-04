import React, { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../components/home/Home'
import Jobs from '../components/jobs/Jobs'
import Message from '../components/Messages/Message'
import Header from '../components/navbar/Header'
import Sidebar from '../components/navbar/Sidebar'
import Profile from '../components/profile/Profile'
import { UserContext } from '../context'
import TakeHomeAssignment from './take_home_assignment/TakeHomeAssignment'

const Dashboard = () => {
    const { user } = useContext(UserContext)

    const navigate = useNavigate()
    console.log(user)
    useEffect(() => {
        if (user) {
            return navigate('/home')
        } else {
            return navigate('/home')
        }
        // eslint-disable-next-line
    }, [])


    return (
        <div className='App'>
            <div className='header_sidebar'>
                <Header />
            </div>
            <div className='components'>
                <Sidebar />
            </div>
        </div>
    )
}

export default Dashboard