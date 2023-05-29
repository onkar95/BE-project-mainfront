import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../../context';
import TestCardSection from './TestCardSection';

const Home = () => {
    const { user, VerifyLoading } = useContext(UserContext)

    return (
        <div>
            <TestCardSection />
        </div>
    )
}

export default Home;