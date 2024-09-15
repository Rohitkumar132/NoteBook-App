import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import Todo from '../todo/Todo'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiBasedUrl } from '../../../const';

export default function Dashboard() {
    const [data, setData] = useState([]);
    const header = localStorage.getItem("token");
    const navigate = useNavigate('');
    useEffect(() => {
        try {
            if(header){
            axios.get(`${apiBasedUrl}/api/get-todos`, { headers: { Authorization: header } })
                .then((response) => {
                    setData(response.data.data);
                    // console.log(response)
                });
            }
            else{
                navigate('/login')
            }

        } catch (error) {
            console.log(error);
        }
    }, []
    );
    // console.log(data)
    return (
        <>
            <Header />
            
            <div className="container">
                <div className="row">
                    {data.length == 0 && <div className='container'> <h1>NoteBook is Empty Click on Add button to Get Starting</h1></div>}
                    {
                        data.map((data, key) => {
                            return (
                            <div key={key} className="col-4 my-3">
                                <Todo data={data}/>
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
