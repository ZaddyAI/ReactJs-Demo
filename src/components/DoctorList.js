import { useContext } from 'react'

import { DoctorContext } from '../context/DoctorContext'
function DoctorList() {
    const { doctors, setSelectedDoctor } = useContext(DoctorContext)
    return (
        <>
            <div class="w-[60%] mx-auto mt-8 p-6 border rounded shadow-md bg-white">
                <h2>Doctor List</h2>
                <div className="flex flex-wrap gap-2">
                    {doctors.map((doctor) => (
                        <div
                            key={doctor.id}
                            className="doctor-item m-3 p-4 border rounded shadow hover:bg-gray-100 cursor-pointer transition-colors duration-200 "
                            onClick={() => setSelectedDoctor(doctor)}
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
        </>
    )
}

export default DoctorList
