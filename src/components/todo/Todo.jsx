import axios from 'axios'
import React from 'react'
import moment from 'moment'
// import { useNavigate } from 'react-router-dom'
import { apiBasedUrl } from '../../const'

export default function Todo(props) {
  const header = localStorage.getItem("token")
  // const navigate = useNavigate('')
  const handleDeleteT = async()=>{
    const payload = {
      id: props.data._id
    }

  
  try {

    axios.post(`${apiBasedUrl}/api/delete-todo` , payload,  {headers: { Authorization: header}});
   
    // axios.get(`${apiBasedUrl}/api/get-todos` ,  {headers: { Authorization: header}});
    // handleDelete.handleDelete(props.data);

  } catch (error) {
    console.log(error);
  }
  // navigate("/home")
  props.handleDelete(props.data)
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
    <a className="btn btn-outline-danger m-2" onClick={handleDeleteT}>Delete</a>
  </div>
  <div className="card-footer text-body-secondary">
    {props?.data?.createdAt? moment(props.data.createdAt).fromNow(): null}
  </div>
</div>
  )
}
