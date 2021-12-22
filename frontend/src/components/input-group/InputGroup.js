import React from 'react';
import './InputGroup.css'
const InputGroup = ({ state, setState, value, name, type }) => {
    const handleChange = e => {
        const { value } = e.target;
        setState({
            ...state,
            value:value
        });
    }
    return (
        <div className='input-group'>
            <label htmlFor={name}>{value}</label>
            <input type={type} name={name} id={name} onChange={handleChange}/>
        </div>
    );
}

export default InputGroup;