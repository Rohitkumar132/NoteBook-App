import React, { useCallback, useEffect, useState } from 'react'
import Header from '../header/Header'
import Todo from '../todo/Todo'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiBasedUrl } from '../../const';
// import { useCallback } from 'react';
// import Context from '../../Context';

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [newD, setNewD] = useState();
    const header = localStorage.getItem("token");
    const navigate = useNavigate('');
    // const data = useContext(Context);
    const handleDelete =(data) =>{
        console.log(data)
        // setData([data])
        setNewD(data)
    }
     useEffect(() => {
      
            if(header){
                // setLoading()
            axios.get(`${apiBasedUrl}/api/get-todos`, { headers: { Authorization: header } })
                .then((response) => {
                    if(response.data?.data){
                        setData(response.data.data);
                    }else{
                        setData([])
                    }
                   
                    // console.log(response)
                }).catch ((err)=>{
                    console.log(err);
                    setData([])
                }) 
            }
            else{
                navigate('/login')
            }

        
    }, [newD]);
    // console.log(data)
    return (
        <>
            <Header />

            {/* <button className='btn btn-outline-success' onClick={()=>{getData()}}>Get Data</button> */}
            <div className="container">
                <div className="row">
                    {data.length == 0 ? <div className='container'> <h1>NoteBook is Empty Click on Add button to Get Starting</h1></div>:
                    
                        data.map((data, key) => {
                            return (
                            <div key={key} className="col-4 my-3">
                                <Todo handleDelete={handleDelete} data={data}/>
                            </div>)
                        }
                        )
                    }
                    {/* <div class="col-4 my-3">
      <Todo />
    </div> */}
                </div>
            </div>
        </>
    )
}
