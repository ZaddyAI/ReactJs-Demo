import React, { useState, useEffect, createContext } from 'react'
export const DoctorContext = createContext()

function DoctorProvider(
    { children }
) {
    const [doctors, setDoctors] = useState([])
    const [selectedDoctor, setSelectedDoctor] = useState(null)

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await fetch('http://103.140.0.164:7080/api/doctor/getAll');
                const data = await response.json();
                setDoctors(data.data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };

        fetchDoctors();
    }, []);

    return (
        <DoctorContext.Provider value={{ doctors, selectedDoctor, setSelectedDoctor }}>
            {children}
        </DoctorContext.Provider>
    )
}

export default DoctorProvider
