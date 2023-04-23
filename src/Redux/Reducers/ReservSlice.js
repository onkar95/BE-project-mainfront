import { createSlice } from "@reduxjs/toolkit";
import { Userlogout } from "../Actions/AuthActions";
import { reserveproduct } from "../Actions/ProductAction";
import { cancleReservation, getAdminOrdersByUsers, getAllOrdersForOwner, getAllOrders, getAllOrdersByUsers, getAdminOrdersOnProduct } from "../Actions/ReservationAction";


const initialState = {
    AllOrders: [],
    ProductOrders: [],
    userOrders: [],
    ownerOrders: [],
    loading: false,
    loadingR: false,
    error: null,
    ReservationsFetched: false,
    cancledReservation: false,
    updatedRating: false,
    updatedAvail: false,

}

export const ProductOrders = createSlice({
    name: 'reserve',
    initialState,
    extraReducers: {
        //logout
        [Userlogout.pending]: (state) => {
            state.loading = true
        },
        [Userlogout.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.ReservationsFetched = false
        },
        [Userlogout.rejected]: (state, { payload }) => {
            state.loading = false
        },
        //reserveproduct
        [reserveproduct.pending]: (state) => {
            state.loading = true
        },
        [reserveproduct.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.ReservationsFetched = false
        },
        [reserveproduct.rejected]: (state, { payload }) => {
            state.loading = false
        },

        //user
        [getAllOrdersByUsers.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [getAllOrdersByUsers.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userOrders = payload
        },
        [getAllOrdersByUsers.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [getAdminOrdersByUsers.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [getAdminOrdersByUsers.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userOrders = payload
        },
        [getAdminOrdersByUsers.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },

        //user
        [getAllOrdersForOwner.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [getAllOrdersForOwner.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.ownerOrders = payload
        },
        [getAllOrdersForOwner.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },

        //product
        [getAdminOrdersOnProduct.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [getAdminOrdersOnProduct.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.ProductOrders = payload
            state.ReservationsFetched = true
        },
        [getAdminOrdersOnProduct.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [getAllOrders.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [getAllOrders.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.AllOrders = payload
        },
        [getAllOrders.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },

        // cancle
        [cancleReservation.pending]: (state) => {
            state.loadingR = true
            state.error = null
            state.cancledReservation = false
        },
        [cancleReservation.fulfilled]: (state, { payload }) => {
            state.loadingR = false
            state.cancledReservation = true
        },
        [cancleReservation.rejected]: (state, { payload }) => {
            state.loadingR = false
            state.error = payload
        },

    }
})


export const { resetVariables } = ProductOrders.actions

export default ProductOrders.reducer;