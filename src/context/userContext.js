import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../components/util";

export const UserContext = createContext(null)

export const UserDataProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [Token, setToken] = useState(0);
    const [VerifyLoading, setVerifyLoading] = useState(false);

    console.log(user)
    useEffect(() => {
        async function userToken(params) {
            const token = localStorage.getItem('token')
            if (token) {
                setVerifyLoading(true)
                setToken(token)
                const confg = {
                    headers: { "x-access-token": token }
                }
                axios.get(`${BASE_URL}/auth/verifyuser`, confg)
                    .then((res) => {
                        setUser(res.data.user)
                        setVerifyLoading(false)
                    })
                    .catch((err) => console.log(err))
            }
        }
        userToken()
    }, [])


    return (
        <UserContext.Provider value={{
            user, setUser,
            Token, setToken
        }}>
            {children}
        </UserContext.Provider>
    )
}

