import React, { useState } from 'react';
import Form from '../form-LoginSigin/Form';
import InputGroup from '../input-group/InputGroup';
import { Link } from 'react-router-dom';
import { login } from '../../api/login';
const Login = () => {
    const [ email, setEmail ] = useState({ value:'', campo:"email" });
    const [ password, setPassword ] = useState({ value:'', campo:"password" });
    const callLogin = async e => {
        e.preventDefault();
        const data = {
            email:email.value,
            password:password.value
        }
        const result = await login(data)
        if(result) {
            localStorage.setItem("accessToken", result.accessToken);
            window.location.href="/";
        }
    }
    return (
        <Form title="Login" submit={callLogin}>
            <InputGroup state={email} setState={setEmail} value="Email" name="email" type="email" />
            <InputGroup state={password} setState={setPassword} value="Password" name="password" type="password" />
            <div className='form__butons'>
                <button type="submit">Enter</button>
                <Link className='btn-link' to="/access/sigin">Sigin</Link>
            </div>
        </Form>
    );
}

export default Login;