import { useState, useEffect } from "react";
import axios from 'axios';

const Request = () => {
    const [fact, setFact] = useState("Loading")
    useEffect(() => {
        // fetch("https://catfact.ninja/fact", {}).then(res=> {
        //     res.json().then(body=> {
        //         setFact(body.fact)
        //     })
        // })
        axios.get("https://catfact.ninja/fact").then(res => {
            setFact(res.data.fact)
        })
    }, [])
    return(<div>
        <p>{fact}</p>
    </div>)
}

export default Request;
