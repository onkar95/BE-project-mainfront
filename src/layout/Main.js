import React from 'react'
import Sidebar from '../components/navbar/Sidebar'

const Main = ({ Component }) => {
    return (
        <div className='App'>
            <div className='components'>
                <Sidebar />
                <Component />
            </div>
        </div>
    )
}

export default Main