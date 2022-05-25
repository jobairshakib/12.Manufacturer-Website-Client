import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import { useState } from 'react';
import Loading from '../Loading/Loading';
import Social from '../Social/Social';

const Login = () => {
    const [email, setEmail] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const navigateRegister = () => {
        navigate('/register');
    }
    let errorElement;
    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
    }
    if (loading || sending) {
        return (
            <Loading></Loading>
        );
    }
    if (user) {
        fetch('https://murmuring-temple-05921.herokuapp.com/login', {
            method: 'POST',
            body: JSON.stringify({
                email: user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        
        navigate(from, { replace: true });
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        if (user) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        toast('Please enter your Email');
        
    }
    return (
        <div className='register-form'>
            <h2 className='text-center'>Login</h2>

            <form onSubmit={handleLogin}>
                <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email" placeholder='Email' required />
                <input type="password" name='password' placeholder='Password' required />
                <input type="submit" className='input-btn' value="Login" />

            </form>
            {errorElement}
            <p>Don't have an account? <Link to="/register" className='btn-link' onClick={navigateRegister}>Please Register</Link></p>
            <p>Forgot Password? <button className='btn btn-link' onClick={resetPassword}>Reset Password</button></p>
            <Social></Social>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;