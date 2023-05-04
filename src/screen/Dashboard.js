import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context'

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
}

export default Dashboard