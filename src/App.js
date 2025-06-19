import Counter from "./Counter";
import Card from "./components/Card";
function App() {
    // create a variable
    const username = "Gambhir Poudel"
    let newArray = [1, 2, 3, 4, 5];
    let newObject = {
        name: "Gambhir Poudel",
        address: "Hetauda, Nepal"
    }
    return (
        <>
            {/* react use curly braces to evaluate javascript expressions i.e final output*/}
            <h1>Hello {username} </h1>
            <Counter />
            <div className="cards flex justify-between gap-4">
                <Card name="iphone" rating="4.5" price="$560" newObject={newObject} imageUrl="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg" />
                <Card name="iphone 16" rating="5" price="$1200" newArray={newArray} imageUrl="https://images.pexels.com/photos/18525574/pexels-photo-18525574.jpeg" />
            </div>

        </>

    )
}

export default App;
