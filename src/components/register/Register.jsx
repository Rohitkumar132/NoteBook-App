import React, { useRef, useState } from 'react'
import Header from '../header/Header'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiBasedUrl } from '../../const';

export default function Register() {
    const [error , setError] = useState({
        error: false,
        message:''
    });
    const navigate = useNavigate('');
    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const password = useRef();

    
    const handleSubmit = async(e) =>{
        const payload = {
            firstName : firstName.current.value,
            lastName : lastName.current.value,
            email : email.current.value,
            password : password.current.value
        };

        try {
            const data = await axios.post(`${apiBasedUrl}/api/users`,payload);
            navigate("/login");
        } catch (error) {
            setError({ message: error.response.data.message, error: true })
            setTimeout(() => {
                setError({ error: false })
            }, 3000)
        }
    }
    return (
        <>
        <Header />
        {error.error && <div className="alert alert-danger" role="alert">
                {error.message}
            </div>
            }
            <div className="container my-3 align-items-center justify-content-center">
            <div className="mb-3 align-items-center justify-content-center">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control w-50" ref={firstName} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control w-50" ref={lastName} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control w-50" ref={email} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="Password" className="form-control w-50" ref={password} />
                </div>
                <button className="btn btn-outline-danger my-2" onClick={handleSubmit}>Register</button>
            </div>
        </>
    )
}
