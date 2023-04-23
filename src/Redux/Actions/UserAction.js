import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils";


export const updateUser = createAsyncThunk(
    'user/update',
    async ({ id, name, email, Role }, { getState, rejectWithValue }) => {
        try {
            const { user } = getState()

            if (user.userInfo.Role === "manager") {
                const { data } = await axios.put(`${BASE_URL}/auth/manager/updateUser/${id}`, { name, email, Role })
                return data
            } else {
                const { data } = await axios.put(`${BASE_URL}/auth/updateMe/${id}`, { name, email })
                return data
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
export const updateProfile = createAsyncThunk(
    'user/update',
    async (dataObj, { getState, rejectWithValue }) => {
        try {
            const config = { headers: { "Content-Type": "multipart/form-data" } };

            const { data } = await axios.put(`${BASE_URL}/auth/updateMe/${dataObj.id}`, dataObj.myForm, config)
            return data

        } catch (error) {
            console.log(error)
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const getSingleUser = createAsyncThunk(
    'user/getSingelUser',
    async ({ id }, { getState, rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token')
            const config = { headers: { "x-access-token": `${token}` } };
            const { data } = await axios.get(`${BASE_URL}/auth/Singleuser/${id}`, config)
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
export const getAllUser = createAsyncThunk(
    'user/all',
    async (args, { getState, rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token')
            const config = { headers: { "x-access-token": `${token}` } };

            const { data } = await axios.get(`${BASE_URL}/auth/admin/users`, config)
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

export const deleteUser = createAsyncThunk(
    'user/delete',
    async ({ id }, { getState, rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`${BASE_URL}/auth/manager/deleteuser/${id}`)
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
