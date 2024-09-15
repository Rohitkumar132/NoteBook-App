import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Todo(props) {
  const header = localStorage.getItem("token")
  const navigate = useNavigate('')
  const handleDelete = async()=>{
    const payload = {
      id: props.data._id
    }
  try {
    axios.post('http://localhost:8080/api/delete-todo' , payload,  {headers: { Authorization: header}});
  } catch (error) {
    console.log(error);
  }
  navigate("/home")
  }
  return (
    <div className="card text-center">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.data.title}</h5>
    <p className="card-text">{props.data.description}</p>
    <a href="#" className="btn btn-outline-success m-2">Edit</a>
    <a className="btn btn-outline-danger m-2" onClick={handleDelete}>Delete</a>
  </div>
  <div className="card-footer text-body-secondary">
    2 days ago
  </div>
</div>
  )
}
