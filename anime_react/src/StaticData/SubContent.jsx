import sampleData from "./sampleData.json"
import Person from "./Person";
const SubContent = () =>{
    return(
        <div>
            {sampleData.map(person =>(
                <Person key={person.id} name={person.name} address={person.address.city}/>
            ))}
        </div>
    )
}

export default SubContent;