import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

function DebounceSearchDemo() {

    const [text, setText] = useState("");

    const debouncedText = useDebounce(text, 500);

    return (
        <div>
            <h2>Use Debounce</h2>

            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="write ..."
            />

            <p>Current Input: {text}</p>

            <p>Debounced Value (after 500ms): {debouncedText}</p>
        </div>
    );
}


export default DebounceSearchDemo;