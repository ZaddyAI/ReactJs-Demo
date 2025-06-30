// import DoctorDetails from "./components/DoctorDetails";
// import DoctorList from "./components/DoctorList";
// import DoctorProvider from "./context/DoctorContext";

import DoctorDetails from "./features/doctor/DoctorDetails";
import DoctorList from "./features/doctor/DoctorList";



function App() {
    return (
        // <div className="App">
        //     <DoctorProvider>
        //         <h1>Doctor Management System</h1>
        //         <div class="flex">
        //             <DoctorList />
        //             <DoctorDetails />
        //         </div>

        //     </DoctorProvider>
        // </div>
        <div className="min-h-screen bg-gray-100 p-6">
            < DoctorList />
            <DoctorDetails />
        </div>
    );
}

export default App;
