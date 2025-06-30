import { configureStore } from '@reduxjs/toolkit'
import doctorReducer from '../features/doctor/doctorSlice'

// this is the store configuration file
// it is used to configure the store and add the doctor reducer to the store
export const store = configureStore({
    // the store is configured with the doctor reducer
    // this allows us to use the doctor state in our components

    reducer: {
        // the key 'doctor' is used to access the doctor state in our components
        // the value is the doctor reducer which handles the state changes for doctors
        doctor: doctorReducer,
    },
})
