import React, { useRef, useState } from 'react'
import Header from '../header/Header'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiBasedUrl } from '../../const';

export default function AddTodo() {
    const [error, setError] = useState({
        error: false,
        message: ""
    })
    const title = useRef();
    const description = useRef();
    const navigate = useNavigate("");

    
    const handleSubmit = async () => {
        const header = localStorage.getItem("token");
        const payload = {
            title: title.current?.value,
            description: description.current?.value,
        };
       
        try {
            await axios.post(`${apiBasedUrl}/api/add-todo`,payload, {headers: { Authorization: header}})
            navigate("/home")
        } catch (error) {
            console.log(error)
            setError({ message: "Error While Adding Notes", error: true })
            setTimeout(() => {
                setError({ error: false })
            }, 3000)
        }
        console.log(payload);
    }
    return (
        <>
            <Header />
            {error.error && <div className="alert alert-danger" role="alert">
                {error.message}
            </div>
            }
            <div className="container my-3">
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" ref={title} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea type="text" className="form-control" ref={description} />
                </div>
                <button className="btn btn-outline-primary my-2" onClick={handleSubmit}>Add Todo</button>
            </div>
        </>
    )
}
