import { useSelector } from 'react-redux'

function DoctorDetails() {
    // useSelector is used to access the selectedDoctor from the Redux store
    // It replaces the useContext hook from the previous implementation
    const { selectedDoctor } = useSelector(state => state.doctor)

    if (!selectedDoctor) {
        return <p className="text-gray-500 italic">Select a doctor to see the details.</p>
    }

    const imageBaseURL = 'http://103.140.0.164:7080'
    const imageUrl =
        selectedDoctor.Images && selectedDoctor.Images.length > 0
            ? imageBaseURL + selectedDoctor.Images[0].Url
            : 'https://via.placeholder.com/200'

    return (
        <div className="mt-8 p-6 border rounded shadow-md bg-white mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Doctor Details</h2>
            <img
                src={imageUrl}
                alt={`${selectedDoctor.FirstName} ${selectedDoctor.LastName}`}
                className="w-48 h-48 object-cover rounded mb-4 mx-auto"
            />
            <div className="text-center">
                <h3 className="text-xl font-semibold">{selectedDoctor.FirstName} {selectedDoctor.LastName}</h3>
                <p className="text-gray-600">Specialization: {selectedDoctor.Specialty}</p>
                <p className="text-gray-600">Experience: {selectedDoctor.Experience} years</p>
                <p className="text-gray-600">Contact: {selectedDoctor.PhoneNumber}</p>
            </div>
        </div>
    )
}

export default DoctorDetails
