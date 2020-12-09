import { render } from '@testing-library/react';
import React from 'react';


const person = (props) =>{
    return(
    <div>My name is {props.name} and i am {props.age} years old</div>
     );
}
export default person;