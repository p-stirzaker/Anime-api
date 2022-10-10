const Element = () => {

const address = {
    forename: "Pheebs",
    surname: "Stirzaker",
    line1: "Buckingham Palace",
    city: "London",
    zip: "SW1A 1AA"
}

return (
    <div>
        <h1>{address.forename}</h1>
        <h1>{address.surname}</h1>
        <h1>{address.line1}</h1>
        <h1>{address.city}</h1>
        <h1>{address.zip}</h1>
    </div>
);
}


export default Element;