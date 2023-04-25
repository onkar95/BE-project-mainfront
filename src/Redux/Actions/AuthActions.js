import axios from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from "../utils";


export const userLogin = createAsyncThunk(
    'user/login',
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

export const registerUser = createAsyncThunk(
    'user/register',
    async ({ name, email, password, Role, Avatar, phoneNo }, { rejectWithValue }) => {
        try {
            const config = { headers: { "Content-Type": "multipart/form-data" } };

            const { data } = await axios.post(
                `${BASE_URL}/auth/register`,
                { name, email, password, Role, Avatar, phoneNo },
                config
            )
            localStorage.setItem('token', data.token)
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const Userlogout = createAsyncThunk(
    'user/logout',
    async (arg, { rejectWithValue }) => {
        try {
            localStorage.removeItem('token')
            return "logout"
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const verifyUser = createAsyncThunk(
    'user/verifyUser',
    async (arg, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token')
            const config = { headers: { "x-access-token": `${token}` } };
            const { data } = await axios.get(`${BASE_URL}/auth/verifyuser`, config)

            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)