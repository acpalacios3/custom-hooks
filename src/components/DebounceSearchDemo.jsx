import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

function DebounceSearchDemo() {

    const [text, setText] = useState("");

    const [delay, setDelay] = useState(500);

    const debouncedText = useDebounce(text, delay);

    // runs when debouncedText changes and simulates a search by showing the value in the console.
    useEffect(() => {

        if (debouncedText) {
            // shows the text in the console after the debounce.
            console.log("Searching for:", debouncedText);
        }

    }, [debouncedText]);

    return (
        <div className="debounce-container">
            <h2>Debounce Search Demo</h2>

            <label>
                Debounce Delay (ms):

                <input
                    type="number"
                    min="0"
                    step="100"
                    value={delay}
                    onChange={(e) => setDelay(Math.max(0, Number(e.target.value)))}
                />
            </label>

            <div className="debounce-search-container">

                <input
                    className="debounce-search-input"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type to search ..."
                />

                <p><strong><em>Current Input:</em></strong> {text}</p>

                <p><strong><em>Debounced Value (after {delay}ms):</em></strong> {debouncedText}</p>
            </div>
            <h3>Simulated Search Results:</h3>

            <p>Type to see results.</p>
        </div>
    );
}

export default DebounceSearchDemo;