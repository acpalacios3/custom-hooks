import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

function DebounceSearchDemo() {

    const [text, setText] = useState("");
   
    const debouncedText = useDebounce(text, 500);

    // runs when debouncedText changes and simulates a search by showing the value in the console.
    useEffect(() => {

        if (debouncedText) {
            // shows the text in the console after the debounce.
            console.log("Searching for:", debouncedText);
        }

    }, [debouncedText]);

    return (
        <div>
            <h2>Debounce Search Demo</h2>
            
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type to search ..."
            />

            <p>Current Input: {text}</p>

            <p>Debounced Value (after 500ms): {debouncedText}</p>
            <h3>Simulated Search Results:</h3>

            <p>Type to see results.</p>
        </div>
    );
}

export default DebounceSearchDemo;