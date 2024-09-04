import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer} from "react-toastify"
import { handleError, handleSuccess } from '../utils';
import img from '../assets/istockphoto-1303877287-612x612.jpg'

const SignUp = () => {


    const[formData,setFormData]=useState(
        {name:" ",
          password:"",
        email:"",
        
      });
      console.log(formData)

      const navigate=useNavigate();
    
      function changehandler(event){
        setFormData(prevFormData=>{
          return{
            ...prevFormData,
            [event.target.name]:event.target.value
          }
        });
        
      }

      const submitHandler = async(event)=>{
        event.preventDefault();
        console.log("finally prinitting the data");
        console.log(formData)

        //server side validTION KR LIYE BHAI

        const { name, email, password } = formData;
        if (!name || !email || !password) {
            return handleError('name, email and password are required')
        }
        try {
          const url = 'http://localhost:3000/api/v1/signup'
                 const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
            console.log(result);
        } catch (err) {
            handleError(err);
        }
    
      }
    
      


    
  return (
    <div className=' flex h-full w-full bg-red-500'>
      <div className='bg-red w-full h-[50%] w-50%]'>
        <img src={img} alt="" />

      </div>

      <div className= 'container bg-white px-20 py-6 rounded-lg max-w-[500px] shadow-lg shadow-gray-900 '>
        
       <form onSubmit={submitHandler}  >

       <h1 className='text-6xl mb-10 font-bold'>Sign-Up</h1>
        <div >
            <label htmlFor="">Name</label>
            <input type="text" 
            placeholder='enter name'
             name='name'
             onChange={changehandler}
             value={formData.name}
              />
        </div>
        <div>
            <label htmlFor="">Email</label>
            <input type="text"
             placeholder='enter name'
              name='email' 
              onChange={changehandler}
              value={formData.email}
 />
        </div>
        <div>
            <label htmlFor="">Password</label>
            <input type="password" 
            placeholder='enter your password'
             name='password'              
             onChange={changehandler}
             value={formData.password}
 />
        </div>
        <button>Sign-Up</button> <br />
        <span>already have an account ? <Link to='/login'>Login</Link> </span>
       </form>
       <ToastContainer/>
        
    </div>
    </div>
  )
}

export default SignUp


