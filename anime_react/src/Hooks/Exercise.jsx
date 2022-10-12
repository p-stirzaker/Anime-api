import { useState } from 'react';

const ReadMore = ({text,maxLength}) => {

    const [LessText, setLessText] = useState(true);
    if(text){
         if(text.length <=maxLength){
             return <span>{"Hello someone"}</span>
    }

    return ( 
        <span>
            {LessText ? `${text.substr(0,maxLength).trim()}...` : text}

            {LessText ? (
                <a href onClick={() => setLessText(false)}>Read More</a>
            ) : (
                <a href onClick={() => setLessText(true)}>Read Less</a>
            )}
        </span>
        
    );

}
}


export default ReadMore;