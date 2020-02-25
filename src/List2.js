import React from 'react';

const List = (props) => {   
    const array = props.array
    console.log(array);
    return array.map(element  => ( <tr> <td> id: {element.id} </td> <td>count:{element.count}</td> <td>alive: {element.alive}</td> </tr> ) )
}

export default List