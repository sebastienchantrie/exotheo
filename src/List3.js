import React from 'react';

const List = (props) => {   
    const array = props.array
    return array.map(element  => ( <tr> <th>data</th> <td> id: {element.id} </td> <td>count:{element.count}</td> <td>alive: {element.alive}</td> </tr> ) )
}

export default List