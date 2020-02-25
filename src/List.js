import React from 'react';

const List = (props) => {   
    const array = props.array
    
    return array.map(element  => ( <tr> {element} </tr> ) )
}

export default List;