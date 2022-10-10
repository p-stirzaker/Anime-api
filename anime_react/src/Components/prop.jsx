import propTypes from "prop-types";

const Props = (props) =>{
    return(
        <>
            <h1>{props.headerProp}</h1>
            <p>{props.contentProp}</p>
            <p>{props.numberProp} is the magic number</p>
            <p></p>
        </>
    )
}

Props.defaultProps = {
    headerProp: `This is the default heading`,
    contentProp: `This is the default content`,
    numberProp: 3
}

Props.propTypes ={
    headerProp: propTypes.string.isRequired,
    contentProp: propTypes.string.isRequired,
    numberProp: propTypes.number.isRequired
}
export default Props;
