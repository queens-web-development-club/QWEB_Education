import "./App.css";
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count+1)
    }

    return (
        <div>
            <h3>My counter</h3>
            <h3>Current value: {count}</h3>

            {/* We can also write onClick={() => setCount(count + 1)} */}
            <button onClick={handleClick}>Increase!</button>
        </div>
    );
}

export default App;
