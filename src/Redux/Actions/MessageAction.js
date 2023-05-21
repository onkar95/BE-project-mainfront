import axios from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from "../utils";


export const LoadMembers = createAsyncThunk(
    'chat/members',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    "Content-Type": "application/json",
                }
            };

            const { data } = await axios.post(
                `${BASE_URL}/auth/login`,
                { email, password },
                config
            )
            localStorage.setItem('token', data.token)
            return data
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
