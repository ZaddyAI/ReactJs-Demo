import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { useDispatch, useSelector } from 'react-redux'
export const fetchDoctors = createAsyncThunk(
    // crateAsyncThunk is a utility function from Redux Toolkit
    // It is used to create an asynchronous action that can be dispatched to the Redux store
    // Fetch doctors from the API
    // This function is used to fetch the list of doctors from the API
    // It uses createAsyncThunk to create an asynchronous action
    // that can be dispatched to the Redux store
    // The first argument is the action type, which is used to identify the action in the Redux store
    // The second argument is an asynchronous function that fetches the data from the API

    'doctor/fetchDoctors',
    async () => {
        const res = await fetch('http://103.140.0.164:7080/api/doctor/getAll')
        const data = await res.json()
        return data.data
    }
)

const doctorSlice = createSlice({
    // createSlice is a utility function from Redux Toolkit
    // It is used to create a slice of the Redux store
    // A slice is a part of the Redux store that contains the state and reducers for a specific feature
    // The first argument is an object that contains the slice name, initial state, reducers,
    name: 'doctor',
    initialState: {
        doctors: [],
        selectedDoctor: null,
        loading: false,
        error: null,
    },
    reducers: {
        // reducers are functions that handle actions and update the state
        // They are used to define how the state should change in response to actions
        setSelectedDoctor(state, action) {
            state.selectedDoctor = action.payload
        },
    },
    extraReducers: builder => {
        // extraReducers is used to handle actions that are not defined in the slice
        // It allows us to handle actions that are created using createAsyncThunk
        builder
            .addCase(fetchDoctors.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchDoctors.fulfilled, (state, action) => {
                state.loading = false
                state.doctors = action.payload
            })
            .addCase(fetchDoctors.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    },
})

export const { setSelectedDoctor } = doctorSlice.actions
export default doctorSlice.reducer
