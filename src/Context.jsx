import React, { createContext } from 'react'
import Dashboard from './components/dashboard/Dashboard';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { apiBasedUrl } from './const';
import { useNavigate } from 'react-router-dom';
export default function Context() {
    const UserContext = createContext();
    const [data, setData] = useState();
    const header = localStorage.getItem("token");
    const navigate = useNavigate('');
    useEffect(()=>{
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
    })
  return (
    <UserContext.Provider value={data}>
        <Dashboard data={data} />
    </UserContext.Provider>
  )
}
