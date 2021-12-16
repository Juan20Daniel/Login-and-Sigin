import React from 'react';
import './form.css';

const Form = ({ title, submit, children }) => {
    return (
        <div className='form'>
            <form className='form__box' onSubmit={submit}>
                <h1 className='form__box--title'>{title}</h1>
                <div className='input-groups'>
                    { children }
                </div>
            </form>
        </div>
    );
}

export default Form;