import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDoctors, setSelectedDoctor } from './doctorSlice'

function DoctorList() {
    // useDispatch is used to dispatch actions to the Redux store
    // useSelector is used to access the state from the Redux store
    const dispatch = useDispatch()
    // Accessing the doctors, loading state, and error from the Redux store
    // This replaces the useContext hook from the previous implementation
    const { doctors, loading, error } = useSelector(state => state.doctor)

    useEffect(() => {
        // Dispatching the fetchDoctors action to load the doctors from the API
        // This replaces the useEffect hook from the previous implementation
        dispatch(fetchDoctors())
    }, [dispatch])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div className="w-[60%] mx-auto mt-8 p-6 border rounded shadow-md bg-white">
            <h2>Doctor List</h2>
            <div className="flex flex-wrap gap-2">
                {doctors.map(doctor => (
                    <div
                        key={doctor.id}
                        className="m-3 p-4 border rounded shadow hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                        onClick={() => dispatch(setSelectedDoctor(doctor))}
                    >
                        <img
                            src={
                                doctor.Images && doctor.Images.length > 0
                                    ? `http://103.140.0.164:7080${doctor.Images[0].Url}`
                                    : 'https://via.placeholder.com/150'
                            }
                            alt={`${doctor.FirstName} ${doctor.LastName}`}
                            className="w-48 h-48 object-cover rounded mb-2"
                        />
                        <h3>{doctor.FirstName}</h3>
                        <p>{doctor.Specialty}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DoctorList
