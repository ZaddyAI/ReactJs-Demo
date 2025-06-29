import DoctorDetails from "./components/DoctorDetails";
import DoctorList from "./components/DoctorList";
import DoctorProvider from "./context/DoctorContext";


function App() {
    return (
        <div className="App">
            <DoctorProvider>
                <h1>Doctor Management System</h1>
                <div class="flex">
                    <DoctorList />
                    <DoctorDetails />
                </div>

            </DoctorProvider>
        </div>
    );
}

export default App;
