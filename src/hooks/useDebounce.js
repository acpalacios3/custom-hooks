import { useEffect } from "react";
import { useState } from "react";

function useDebounce(value, delay=500){

    const [debouncedValue, setdebouncedValue]=useState("");


    //    value: the value we want to control (for example, what we type in an input). delay: waiting time.
    // setTimeout() schedules the action to wait 500 milliseconds and then sets the value
    useEffect(()=> {
        const timer = setTimeout( ()=> {
             setdebouncedValue(value);
        },delay)

        // clearTimeout(timer) prevents previous timers from running when the user keeps typing.
        return () => {
            clearTimeout(timer);
        };

    },[value, delay]);

    return debouncedValue

}

export default useDebounce;