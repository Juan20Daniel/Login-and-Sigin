import React from 'react';
import Form from '../form-LoginSigin/Form';
import InputGroup from '../input-group/InputGroup';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Form title="Login">
            <InputGroup value="Email" name="email" type="email" />
            <InputGroup value="Password" name="password" type="password" />
            <div className='form__butons'>
                <button type="submit">Enter</button>
                <Link className='btn-link' to="/access/sigin">Sigin</Link>
            </div>
        </Form>
    );
}

export default Login;