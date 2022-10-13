import { useReducer } from "react";

const Reducer =()=> {

    const reducerFunction = (state, action)=> {
        return state

    }

    const click = (e) => {
        setCount(count + 1)


    }

    const [count, setCount] = useReducer(reducerFunction, 0)


    return(<div>

        <button onClick={click }>Test</button>
        <p>{count}</p>
    </div>)
}

export default Reducer;