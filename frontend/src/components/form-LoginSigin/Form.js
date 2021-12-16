import React from 'react';
import './form.css';

const Form = ({ title, children }) => {
    return (
        <div className='form'>
            <form className='form__box'>
                <h1 className='form__box--title'>{title}</h1>
                <div className='input-groups'>
                    { children }
                </div>
            </form>
        </div>
    );
}

export default Form;