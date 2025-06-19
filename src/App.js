import Demo from "./Demo";
function App() {
    // create a variable
    const username = "Gambhir Poudel"
    return (
        <>
            {/* react use curly braces to evaluate javascript expressions i.e final output*/}
            <h1>Hello {username} </h1>
            <Demo />
        </>

    )
}

export default App;
