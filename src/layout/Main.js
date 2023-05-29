import React, { useContext } from 'react'
import Header from '../components/navbar/Header'
import Sidebar from '../components/navbar/Sidebar'
import Loading from '../components/utils/Loader/Loading'
import { UserContext } from '../context'

const Main = ({ Component }) => {

    const { user, VerifyLoading } = useContext(UserContext)

    return (
        <>
            {VerifyLoading ? <Loading /> : <div className='App'>
                <Header />
                <div className='components'>
                    <Sidebar />
                    <Component />
                </div>
            </div>}
        </>
    )
}

export default Main