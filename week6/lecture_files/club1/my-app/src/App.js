import {useState} from "react";

function App() {
    const [userInput, setUserInput] = useState("hello world")

    return (
        <div>
            <div className="container">
                <h3>Capitalized: {userInput.toUpperCase()}</h3>
            </div>

            <div>
                <label>Your input: </label>
            </div>

            <div>
                <input onChange={e => setUserInput(e.currentTarget.value)} />
            </div>
        </div>
    );
}

export default App;
