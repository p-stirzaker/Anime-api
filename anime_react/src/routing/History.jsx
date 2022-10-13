import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const History = () => {
    const navigator = useNavigate()
    useEffect(() => {
        navigator("/home")
    },[])


    return(<div>

        <h1>ERROR!</h1>
  
    </div>)
}

export default History;
