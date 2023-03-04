import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import './Register.css';

const Register = () => {

    const [error, setError] = useState(null);
    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if(password.length<6){
            setError('Password should be at least 6 character!')
        }

        if(password !== confirm){
            setError('Password did not match');
            return;
        }
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error => console.error(error));
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>password</label>
                    <input type='password' name='password' required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Confirm password</label>
                    <input type='password' name='confirm' required></input>
                </div>
                <button className='btn-submit' type='submit'>Register</button>
            </form>
            <p className='text-error'>{error}</p>
            <p className='register-para'>Already have an account? Please <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;