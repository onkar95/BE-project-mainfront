import React from 'react'
import Header from '../components/navbar/Header'
import Sidebar from '../components/navbar/Sidebar'

const Main = ({ Component }) => {
    return (
        <div className='App'>
            <div className='header_sidebar'>
                <Header />
            </div>
            <div className='components'>
                <Sidebar />
                <Component />
            </div>
        </div>
    )
}

export default Main