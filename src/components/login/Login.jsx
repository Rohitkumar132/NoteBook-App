import React, { useRef, useState } from 'react'
import Header from '../header/Header'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate = useNavigate("")
    const [error, setError] = useState({
        error: false,
        message: ''
    });
    const email = useRef();
    const password = useRef();


    const handleSubmit = async () => {
        const payload = {
            email: email.current?.value,
            password: password.current?.value,
        };
        try {
            const data = await axios.post("http://localhost:8080/api/auth", payload);
            localStorage.setItem("token", data.data.data);
            navigate("/home");
            // setError({message:data.data.message,error:true})
            // setTimeout(() => {
            //     setError({ error: false })
            // }, 3000)
        } catch (error) {
            setError({ message: error.response.data.message, error: true })
            setTimeout(() => {
                setError({ error: false })
            }, 3000)
        }
        // console.log(error)
    }
    return (
        <>
            <Header  />
            {error.error && <div className="alert alert-danger" role="alert">
                {error.message}
            </div>
            }
            <div className="container my-3">
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" ref={email} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="Password" className="form-control" ref={password} />
                </div>
                <button className="btn btn-outline-primary my-2" onClick={handleSubmit}>Login</button>
            </div>
        </>
    )
}
