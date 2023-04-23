import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../components/util";

const UserContest = createContext(null)

export const UserDataProvider = ({ children }) => {
    const [user, setUser] = useState(0);
    const [Token, setToken] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem('token')
        setToken(token)
        const confg = {
            headers: { "x-access-token": token }
        }
        axios.get(`${BASE_URL}/auth/verifyuser`, confg)
            .then((res) => {
                setUser(res.data.user)
            })
            .catch((err) => console.log(err))
    }, [])


    return (
        <UserContest.Provider value={{
            user, setUser,
            Token, setToken
        }}>
            {children}
        </UserContest.Provider>
    )
}

export default UserContest