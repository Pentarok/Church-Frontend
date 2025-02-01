import React, { useState } from 'react'
import ContactMini from './ContactMini'
import axios from 'axios';

const Contact = ({isHome}) => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");
  const [alertMessage,setAlertMessage]=useState("");
  const [loading,setLoading]=useState(false);

  const clearAlert = (time)=>{
    setTimeout(() => {
      setAlertMessage("");
    }, time);
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/api/contact",{name,email,message});
      setLoading(false);
      setAlertMessage(response.data.message);
  
      clearAlert(4000);
      console.log(response)
    } catch (error) {
      setLoading(false);
    // Extract error message safely
    const errorMessage = error.response?.data?.message || "Something went wrong. Please try again.";
    setAlertMessage(errorMessage);
   
      clearAlert(5000);

    }
  }
  return (
    <div className={`md:flex gap-3 px-8 pb-2 ${isHome?"w-full justify-center items-center":""}`}>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col md:w-[500px] p-5 border-slate-500 border shadow rounded-xl mt-2 bg-gradient-to-t from-slate-200 to-blue-50'>
          <div>
            <label htmlFor="" className='pl-3 font-semi-bold'>Name</label>
            <input type="text" className='p-2 border border-black w-full rounded-xl' value={name} onChange={(e)=>setName(e.target.value)} required/>
          </div>
          <div>
            <label htmlFor="" className='pl-3 font-semi-bold'>Email</label>
            <input type="email" name="" id="" className='p-2 border border-black w-full rounded-xl' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          </div>
          <div>
            <label htmlFor="" className='pl-3 font-semi-bold'>Message</label>
            <textarea name="" id="" className='p-2 h-40 border border-black w-full rounded-xl' value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
          </div>



          <div className='w-full flex items-center justify-center'>
            <button type='submit' className='bg-indigo-600 text-white rounded-2xl p-2 w-40 hover:bg-indigo-500'>{loading?"loading..":"Submit"}</button>
          </div>

          {alertMessage &&(
            <div className={` font-semibold text-center p-2 mt-1 rounded-xl shadow ${ alertMessage.toString().includes("failed") || alertMessage.toString().includes("wrong")?"bg-red-400 text-white":"bg-green-400 text-white"}`}>
              {alertMessage}
            </div>
          )}
        </div>

        </form>
       {
        !isHome?  <div className='bg-slate-300 p-2 mt-2 rounded-xl shadow'>
        <ContactMini/>
    </div>:null
       }
    </div>
  )
}

export default Contact