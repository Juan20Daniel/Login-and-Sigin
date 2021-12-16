import React, { useState } from 'react';
import Form from '../form-LoginSigin/Form';
import InputGroup from '../input-group/InputGroup';
import { Link } from 'react-router-dom';
import { addUser } from '../../api/addUser';

import './sigin.css';
const Sigin = () => {
    const [ firstname, setFirstname ] = useState({ value:'', campo:'firstname' });
    const [ lastname, setLastname ] = useState({ value:'', campo:'lastname' });
    const [ email, setEmail ] = useState({ value:'', campo:'email' });
    const [ password, setPassword ] = useState({ value:'', campo:'password' });
    const callAddUser = (e) => {
        const data = {
            firstname:firstname.value,
            lastname:lastname.value,
            email:email.value,
            password:password.value,
        }
        addUser(e, data);
    }
    return (
       <Form title="Sigin" submit={callAddUser}>
            <InputGroup 
                state={firstname} 
                setState={setFirstname} 
                value="First name" 
                name="firstname" 
                type="text" 
            />
            <InputGroup 
                state={lastname} 
                setState={setLastname} 
                value="Last name" 
                name="lastname" 
                type="text" 
            />
            <InputGroup 
                state={email} 
                setState={setEmail} 
                value="Email" 
                name="email" 
                type="email" 
            />
            <InputGroup 
                state={password} 
                setState={setPassword} 
                value="Password" 
                name="password" 
                type="password" 
            />
            <div className='form__butons'>
                <button type="submit">Enter</button>
                <Link className='btn-link' to="/access/login">Login</Link>
            </div>
       </Form>
    );
}

export default Sigin;