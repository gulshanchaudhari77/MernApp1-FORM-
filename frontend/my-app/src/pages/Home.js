import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleSuccess } from '../utils';

const Home = () => {
  const [loggedInUser,setloggedInUser]=useState("");
  const navigate=useNavigate();

  useEffect(()=>
  {
    setloggedInUser(localStorage.getItem("loggedInUser"))
  },[]);

  const handlelogout=(e)=>
  {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess("logged-out");
    setTimeout(() => {
      navigate('/login')
    }, 1000);
  }

  return (
    <div>
      <h1 className='text-5xl text-red-600'>{loggedInUser}</h1>
      <button onClick={handlelogout}>Log-Out</button>
      <ToastContainer/>

    </div>
  )
}

export default Home